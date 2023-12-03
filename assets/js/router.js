import {appClass} from './element.js'

export class Router {
    routes = {} 
    add(routeName, page) {
      this.routes[routeName] = page
    }
    
    route(event) {
      event = event || window.event
      event.preventDefault()
  
      window.history.pushState({}, "", event.target.href)
  
      this.handle()
    }
  
    handle() {
      const { pathname }  = window.location
      const route = this.routes[pathname] || this.routes[404]
      fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#main-app').innerHTML = html
      })

      let match = route.match(/\/([^\/]+)\.html/)
      let classPage = match ? match[1] : 404
      
      appClass.classList.remove('universe')
      appClass.classList.remove('exploitation')
      appClass.classList.remove('home')

      appClass.classList.add(classPage)
    }
    
  
  }