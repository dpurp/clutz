declare namespace ಠ_ಠ.clutz {
  class module$exports$module$Foo extends module$exports$module$Foo_Instance {
  }
  class module$exports$module$Foo_Instance {
    private noStructuralTyping_: any;
  }
}
declare namespace goog {
  function require(name: 'module$exports$module$Foo'): typeof ಠ_ಠ.clutz.module$exports$module$Foo;
}
declare module 'goog:module.Foo' {
  import alias = ಠ_ಠ.clutz.module$exports$module$Foo;
  export default alias;
}
