/*
 * @Author: pikapikapikaori pikapikapi_kaori@icloud.com
 * @Date: 2023-04-30 09:36:08
 * @LastEditors: pikapikapikaori pikapikapi_kaori@icloud.com
 * @LastEditTime: 2023-04-30 15:09:27
 * @FilePath: /pikapikapi-blog/docs/utils/gitalkWithFooter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//default values
var defaultOptions = {
    footerInnerHtml: "",
    gitalkConfig: {
        clientID: '',
        clientSecret: '',
        repo: 'pikapikapi-blog',
        owner: 'pikapikapikaori',
        admin: ['pikapikapikaori'],
        // facebook-like distraction free mode
        distractionFreeMode: false,
    }
}

// Docsify plugin functions
function plugin(hook, vm) {
    hook.doneEach(function () {
        // Add gitalk container if not exists
        var previousGitalk = document.getElementById('gitalk-container')
        if (!previousGitalk) {
            var gitalkContainer = document.createElement('div')
            gitalkContainer.id = 'gitalk-container'
            gitalkContainer.style.maxWidth = '80%'
            gitalkContainer.style.margin = '0px auto 20px'
            document.getElementById("main").parentNode.insertBefore(gitalkContainer, undefined)
        }

        // Add footer under gitalk container if not exists
        var previousFooter = document.getElementById('footerUnderGitalk')
        if (!previousFooter) {
            var footer = document.createElement('footer');
            var footerDiv = document.createElement('div');
            footerDiv.id = 'footerUnderGitalk'
            footerDiv.innerHTML = defaultOptions.footerInnerHtml;
            footer.appendChild(footerDiv);
            document.getElementById("main").parentNode.insertBefore(footer, undefined)
        }

        // render gitalk
        document.getElementById('gitalk-container').innerHTML = ''
        let gitalk = new Gitalk({
            clientID: vm.config.gitalkWithFooter.gitalkConfig.clientID,
            clientSecret: vm.config.gitalkWithFooter.gitalkConfig.clientSecret,
            repo: vm.config.gitalkWithFooter.gitalkConfig.repo,
            owner: vm.config.gitalkWithFooter.gitalkConfig.owner,
            admin: vm.config.gitalkWithFooter.gitalkConfig.admin,
            // facebook-like distraction free mode
            distractionFreeMode: vm.config.gitalkWithFooter.gitalkConfig.distractionFreeMode,
            id: location.href.split('#')[1]
        })
        gitalk.render('gitalk-container')
    })
}

// Docsify plugin options
window.$docsify["gitalkWithFooter"] = Object.assign(
    defaultOptions,
    window.$docsify["gitalkWithFooter"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)