import React from 'react';
import { Footer } from '@/components/Footer';
import { FooterLink } from '@/components/FooterLink';
import { FooterItem } from '@/components/FooterItem';

export default function FooterComponent() {
  return (
    <Footer className="fixed bottom-0 left-0 right-0 bg-zinc-700 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        {/* Sección de derechos de autor */}
        <div className="text-sm">
          <p>&copy; 2024 Hotel Mediterraneo Laboulaye.</p>
        </div>
      </div>
    </Footer>
  );
}
