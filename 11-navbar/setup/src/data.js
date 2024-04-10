import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
	{
		id: 1,
		url: '/',
		text: 'inicio',
	},
	{
		id: 2,
		url: '/about',
		text: 'quienes somos',
	},
	{
		id: 3,
		url: '/promos',
		text: 'promos',
	},
	{
		id: 4,
		url: '/contact',
		text: 'contacto',
	},
	{
		id: 5,
		url: '/products',
		text: 'productos',
	},
];

export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
];
