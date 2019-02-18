import React from "react";

// Styles
import "../../styles/AppStyles.css";
import "./HeaderStyles.css";

// Each button should have a path and title
interface ButtonInterface { path: string, title: string };

// We expect an array of buttons to render on screen
interface HeaderProps { buttons: Array<ButtonInterface>; };
interface HeaderState { revealed: boolean };

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      revealed: false
    }
  }

  componentDidMount(): void {
    document.addEventListener("scroll", this.trackScrolling);
  };

  componentWillUnmount(): void {
    document.removeEventListener("scroll", this.trackScrolling);
  };

  /**
   * Returns a boolean based on if the window has passed the specified element.
   */
  isBottom(el: HTMLElement, additionalPadding: number): boolean {
    return el.getBoundingClientRect().bottom <= additionalPadding;
  };

  /**
   * Monitors the introduction element and updates the
   * component's state once we've scroll passed the element.
   */
  trackScrolling = (): void => {
    const wrappedElement = document.getElementById("introduction") as HTMLElement;
    if (this.isBottom(wrappedElement, 100)) {
      this.reveal();
      document.removeEventListener("scroll", this.trackScrolling);
    }
  };

  reveal(): void {
    this.setState({
      revealed: true
    });
  };

  buildButtons() {
    const { buttons } = this.props;
    return (
      <section className="flex flex-row flex-center">
        <ul className="flex flex-row nav-options">
          {
            buttons.map(button => (
              <li key={button.title}>
                <a href={button.path}>
                  <div className="nav-btn">
                    <p className="nav-btn-title">{button.title}</p>
                  </div>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    );
  };

  render() {
    const { revealed } = this.state;
    return (
      <nav className={revealed ? "flex flex-row flex-space-between nav-bar revealed" : "flex flex-row flex-space-between nav-bar"}>
        <img className="name" src="/images/name.svg"/>
        {this.buildButtons()}
      </nav>
    );
  };
};

export default Header;