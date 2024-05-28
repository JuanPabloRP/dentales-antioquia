import { Outlet, Link } from 'react-router-dom';
import icon from '../assets/img/icon.png';

const PublicLayout = () => {
	const routes = [
		{
			name: 'Inicio',
			path: '/',
		},
		{
			name: 'Iniciar sesión',
			path: '/login',
		},
		{
			name: 'Registrar',
			path: '/register',
		},
	];

	return (
		<main className="min-h-screen bg-slate-100">
			<nav className="flex flex-wrap  justify-center md:justify-around items-center px-10 ">
				<section className="flex items-center">
					<Link to={'/'} className="flex items-center">
						<img src={icon} alt="icon" className="max-w-16 " />
						<h1 className="ml-2  text-3xl">Insumos</h1>
					</Link>
				</section>
				<ul className="flex gap-5">
					{routes.map((route, index) => (
						<li key={index}>
							<Link
								to={route.path}
								className={`text-slate-900 hover:text-slate-700`}
							>
								{route.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Outlet />
			<footer className="bg-blue-600 min-h-28 flex justify-center items-center ">
				<p className="text-white text-center text-xl">
					Copyright © Dentales Antioquia
				</p>
			</footer>
		</main>
	);
};

export default PublicLayout;
