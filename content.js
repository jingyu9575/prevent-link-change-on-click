window.eval('void (' + function () {
	const desc = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, 'href')
	Object.defineProperty(HTMLAnchorElement.prototype, 'href', Object.assign({}, desc, {
		set: function (value) {
			if (window.event && window.event.constructor.name === 'MouseEvent') {
				const { type } = window.event
				if ((type === 'mousedown' || type === 'mouseup' || type === 'click') &&
					this.href) return
			}
			return desc.set.call(this, value)
		}
	}))
} + ')()')
