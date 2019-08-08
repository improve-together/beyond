(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{276:function(e,t,v){"use strict";v.r(t);var _=v(1),o=Object(_.a)({},function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"git-命令行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-命令行","aria-hidden":"true"}},[e._v("#")]),e._v(" git 命令行")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://github.com/txs1992/mt-blog/blob/master/docs/images/git.png"}})]),e._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),v("ol",[v("li",[v("p",[v("a",{attrs:{href:"##%E6%9C%AC%E5%9C%B0%E5%BA%93"}},[e._v("本地库")])])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"#%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93"}},[e._v("远程仓库")])])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"#%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86"}},[e._v("分支管理")])]),e._v(" "),v("p",[e._v("3.1 "),v("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF"}},[e._v("创建与合并分支")])]),e._v(" "),v("p",[e._v("3.2 "),v("a",{attrs:{href:"#%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81"}},[e._v("解决冲突")])])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"#%E6%A0%87%E7%AD%BE%E7%AE%A1%E7%90%86"}},[e._v("标签管理")])]),e._v(" "),v("p",[e._v("4.1 "),v("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E6%A0%87%E7%AD%BE"}},[e._v("创建标签")])]),e._v(" "),v("p",[e._v("4.2 "),v("a",{attrs:{href:"#%E6%93%8D%E4%BD%9C%E6%A0%87%E7%AD%BE"}},[e._v("操作标签")])])])]),e._v(" "),v("br"),e._v(" "),v("h2",{attrs:{id:"本地库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地库","aria-hidden":"true"}},[e._v("#")]),e._v(" 本地库")]),e._v(" "),v("blockquote",[v("p",[e._v("初始化一个 Git 版本库")])]),e._v(" "),v("pre",[v("code",[e._v("git init\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看 Git 版本库状态")])]),e._v(" "),v("pre",[v("code",[e._v("git status\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看被改动文件的详细信息")])]),e._v(" "),v("pre",[v("code",[e._v("git diff <fileName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("将文件加入缓存区")])]),e._v(" "),v("pre",[v("code",[e._v("git add <fileName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("提交到版本库")])]),e._v(" "),v("pre",[v("code",[e._v("git commit -m 'message'\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看版本库操作日志")])]),e._v(" "),v("pre",[v("code",[e._v("git log\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("格式显示版本库操作日志")])]),e._v(" "),v("pre",[v("code",[e._v("git log --pretty=oneline\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("回滚（重置）版本库")])]),e._v(" "),v("pre",[v("code",[e._v("git reset --hard <版本号>\n")])]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("工作区（Woking Directory）")])])]),e._v(" "),v("pre",[v("code",[e._v("就是你在电脑里能看到的目录，或者说你当前 Git 版本库所在的文件夹\n")])]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("版本库（Repository）")])])]),e._v(" "),v("p",[e._v("工作区有一个隐藏的目录 .git,这个不算工作区,而是 Git 的版本库\nGit的版本库里存了很多东西，其中最重要的就是称为 "),v("code",[e._v("stage")]),e._v("(或者叫 "),v("code",[e._v("index")]),e._v(") 的暂存区，\n还有 Git 为我们自动创建的第一个分支 "),v("code",[e._v("master")]),e._v("，以及指向 "),v("code",[e._v("master")]),e._v(" 的一个指针叫做 "),v("code",[e._v("HEAD")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[e._v("撤销工作区修改")])]),e._v(" "),v("pre",[v("code",[e._v("git checkout -- <fileName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("撤销暂存区修改")])]),e._v(" "),v("pre",[v("code",[e._v("git reset HEAD <fileName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("删除文件")])]),e._v(" "),v("pre",[v("code",[e._v("git rm <fileName>\n")])]),e._v(" "),v("br"),e._v(" "),v("h2",{attrs:{id:"远程仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 远程仓库")]),e._v(" "),v("blockquote",[v("p",[e._v("关联远程仓库")])]),e._v(" "),v("pre",[v("code",[e._v("git remote add origin git@github.com:<github地址>/<仓库名称>.git\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("将内容推送的远程库")])]),e._v(" "),v("pre",[v("code",[e._v("git push -u origin <分支>\ngit push origin <分支>\n")])]),e._v(" "),v("p",[e._v("第一次推送 "),v("code",[e._v("master")]),e._v(" 分支时，加上了 "),v("code",[e._v("-u")]),e._v(" 参数，Git 不但会把本地的 "),v("code",[e._v("master")]),e._v(" 分支内容推送到远程新的 "),v("code",[e._v("master")]),e._v(" 分支，\n还会把本地的 "),v("code",[e._v("master")]),e._v(" 分支和远程的 "),v("code",[e._v("master")]),e._v(" 分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),e._v(" "),v("blockquote",[v("p",[e._v("克隆远程库")])]),e._v(" "),v("pre",[v("code",[e._v("git clone git@github.com:<github地址>/<仓库名称>.git\n")])]),e._v(" "),v("br"),e._v(" "),v("h2",{attrs:{id:"分支管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支管理","aria-hidden":"true"}},[e._v("#")]),e._v(" 分支管理")]),e._v(" "),v("h3",{attrs:{id:"创建与合并分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建与合并分支")]),e._v(" "),v("blockquote",[v("p",[e._v("创建并切换分支")])]),e._v(" "),v("pre",[v("code",[e._v("git checkout -b <branchName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看分支")])]),e._v(" "),v("pre",[v("code",[e._v("git branch\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("切换分支")])]),e._v(" "),v("pre",[v("code",[e._v("git checkout <branchName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("合并分支")])]),e._v(" "),v("pre",[v("code",[e._v("git merge <branchName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("删除分支")])]),e._v(" "),v("pre",[v("code",[e._v("git branch -d <branchName>\n")])]),e._v(" "),v("h3",{attrs:{id:"解决冲突"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决冲突")]),e._v(" "),v("blockquote",[v("p",[e._v("查看分支合并情况")])]),e._v(" "),v("pre",[v("code",[e._v("git log --graph --pertty=oneline --abbrev-commit\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("储藏")])]),e._v(" "),v("pre",[v("code",[e._v("git stash\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看储藏列表")])]),e._v(" "),v("pre",[v("code",[e._v("git stash list\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("应用储藏")])]),e._v(" "),v("pre",[v("code",[e._v("git stash apply <stash@{xx}>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("删除储藏")])]),e._v(" "),v("pre",[v("code",[e._v("git stash drop <index | stash>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("应用并删除储藏")])]),e._v(" "),v("pre",[v("code",[e._v("git stash pop <index | stash>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("显示储藏信息")])]),e._v(" "),v("pre",[v("code",[e._v("git stash show <index | stash>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看远程库信息")])]),e._v(" "),v("pre",[v("code",[e._v("git remote\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看远程库详细信息")])]),e._v(" "),v("pre",[v("code",[e._v("git remote -v\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("推送分支")])]),e._v(" "),v("pre",[v("code",[e._v("git push origin <branchName>\n")])]),e._v(" "),v("br"),e._v(" "),v("h2",{attrs:{id:"标签管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标签管理","aria-hidden":"true"}},[e._v("#")]),e._v(" 标签管理")]),e._v(" "),v("h3",{attrs:{id:"创建标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建标签")]),e._v(" "),v("blockquote",[v("p",[e._v("创建标签")])]),e._v(" "),v("pre",[v("code",[e._v("git tag <name>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看标签")])]),e._v(" "),v("pre",[v("code",[e._v("git tag\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("为commit id 添加标签")])]),e._v(" "),v("pre",[v("code",[e._v("git tag <commit id>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("查看标签信息")])]),e._v(" "),v("pre",[v("code",[e._v("git show <tagName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("创建带有说明的标签")])]),e._v(" "),v("pre",[v("code",[e._v("git tag -a <tagName> -m 'your message'\n")])]),e._v(" "),v("h3",{attrs:{id:"操作标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 操作标签")]),e._v(" "),v("blockquote",[v("p",[e._v("删除标签")])]),e._v(" "),v("pre",[v("code",[e._v("git tag -d <tagName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("推送标签到远程")])]),e._v(" "),v("pre",[v("code",[e._v("git push origin <tagName>\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("推送所以标签")])]),e._v(" "),v("pre",[v("code",[e._v("git push origin --tags\n")])]),e._v(" "),v("blockquote",[v("p",[e._v("删除远程标签")])]),e._v(" "),v("p",[e._v("删除远程标签需，要先删除本地标签，然后再执行")]),e._v(" "),v("pre",[v("code",[e._v("git push origin :refs/tags/<tagNameg>\n")])])])}],!1,null,null,null);t.default=o.exports}}]);