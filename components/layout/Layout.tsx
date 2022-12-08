import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';


const Layout = (props : any) => {
  //console.log(props.children);
    return (
        <div>
          <MainNavigation />
          
          <main className="m-auto w-11/12 max-w-2xl">{props.children}</main>
        </div>
      );
}

export default Layout