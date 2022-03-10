const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light container">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
                    
                </a>
				<div className="dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="/"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Dropdown
					</a>

					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li>
							<a className="dropdown-item" href="/">
								Action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="/">
								Another action
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item" href="/">
								Something else here
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
