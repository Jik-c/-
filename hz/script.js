// 获取所有导航项
const navItems = document.querySelectorAll('.has-submenu')
const overlay = document.querySelector('.overlay')

// 为每个导航项添加点击事件
navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    // 阻止冒泡，防止点击子元素时关闭菜单
    e.stopPropagation()

    // 检查是否已经激活
    const isActive = this.classList.contains('active')

    // 关闭所有其他激活的菜单
    navItems.forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.classList.remove('active')
      }
    })

    // 切换当前菜单的激活状态
    if (isActive) {
      this.classList.remove('active')
      overlay.classList.remove('active')
    } else {
      this.classList.add('active')
      overlay.classList.add('active')
    }
  })
})

// 获取所有子菜单项
const submenuTitles = document.querySelectorAll('.submenu-title')

// 为每个子菜单项添加点击事件
submenuTitles.forEach(title => {
  // 只为有箭头的子菜单添加点击事件（表示有下级菜单的项）
  if (title.querySelector('.arrow')) {
    title.addEventListener('click', function (e) {
      // 阻止冒泡，防止触发父级菜单的事件
      e.stopPropagation()

      // 获取对应的子菜单容器
      const parent = this.parentElement

      // 切换子菜单的显示状态
      parent.classList.toggle('active')
    })
  }
})

// 点击遮罩层关闭所有菜单
overlay.addEventListener('click', function () {
  navItems.forEach(item => item.classList.remove('active'))
  overlay.classList.remove('active')
})
