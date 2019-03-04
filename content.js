window.eval('void (' + function () {
	const desc = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, 'href')
	Object.defineProperty(HTMLAnchorElement.prototype, 'href', Object.assign({}, desc, {
		set: function (value) {
			if (window.event instanceof MouseEvent) {
				const { type } = window.event
				if (type === 'mousedown' || type === 'mouseup' || type === 'click') return
			}
			return desc.set.call(this, value)
		}
	}))
} + ')()')
