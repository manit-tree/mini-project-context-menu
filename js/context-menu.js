class ContextMenu {
  static command_buttons = []

  constructor(widget, selector, items) {
    this.widget = document.querySelector(widget)
    this.command_button = document.querySelector(widget + " " + selector)
    this.items = items
    this.init()
  }

  show_menu = () => {
    this.command_button.classList.add("active")
  }
  hide_menu = () => {
    this.command_button.classList.remove("active")
  }

  hide_all_menus = () => {
    ContextMenu.command_buttons.forEach((command_button) => {
      command_button.classList.remove("active")
    })
  }

  create_context_menu = () => {
    const context_menu = document.createElement("ul")
    context_menu.classList.add("context-menu")

    context_menu.addEventListener("click", (evt) => {
      this.hide_menu()
    })

    this.items.forEach((item) => {
      const menu_item = document.createElement("li")

      if (!("text" in item)) {
        menu_item.classList.add("divider")
      } else {
        menu_item.innerHTML = '<i class="uk-icon-' + item.icon + '"></i> ' + item.text

        if (typeof item.action === "function") {
          menu_item.addEventListener("click", (evt) => {
            item.action()
          })
        }
      }

      context_menu.appendChild(menu_item)
    })

    this.command_button.append(context_menu)

    document.addEventListener("click", (evt) => {
      this.hide_all_menus()
    })
  }

  init = () => {
    if (this.command_button !== null) {
      this.command_button.addEventListener("contextmenu", (evt) => {
        evt.preventDefault()
        this.hide_all_menus()

        const rect = evt.target.getBoundingClientRect()
        const x = evt.clientX - rect.left
        const y = evt.clientY - rect.top

        this.command_button.setAttribute("style", "--left:" + x + "px; --top:" + y + "px")
        this.show_menu()
      })

      this.create_context_menu()
      ContextMenu.command_buttons.push(this.command_button)
    }
  }
}
