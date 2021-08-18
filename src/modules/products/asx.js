export function MainRoutes(): JSX.Element {
    return (
      <>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/SignIn">
          <SingIn />
        </Route>
        <Route path="/admin">
          <Base />
        </Route>
      </>
    );
  }
  
  export function AdminRoutes(): JSX.Element {
    return (
      <>
        <Route exact path="/admin/product">
          <Products />
        </Route>
        <Route exact path="/admin/product/edit/:id">
          <EditProduct />
        </Route>
      </>
    );
  }
  