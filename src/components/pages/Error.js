import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../../components/ui/Banner'
import { Hero } from '../../components/ui/Hero'

export const Error = () => {
    return (
        <Hero
            children={
                <Banner
                    title="404"
                    subtitle='page not found'
                    children={
                        <Link to="/" className="btn-primary">
                            return home
                        </Link>
                    }
                />
            }
        />
    )
}
