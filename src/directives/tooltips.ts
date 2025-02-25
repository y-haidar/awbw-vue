import type { DirectiveBinding, VNode } from "vue";

const vTooltips = {
    // called before bound element's attributes
    // or event listeners are applied
    created(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        // see below for details on arguments
    },
    // called right before the element is inserted into the DOM.
    beforeMount(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) { },
    // called when the bound element's parent component
    // and all its children are mounted.
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) { },
    // called before the parent component is updated
    beforeUpdate(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode: VNode) { },
    // called after the parent component and
    // all of its children have updated
    updated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode: VNode) { },
    // called before the parent component is unmounted
    beforeUnmount(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) { },
    // called when the parent component is unmounted
    unmounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) { }
}