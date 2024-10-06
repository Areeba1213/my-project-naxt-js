import Link from "next/link"
import React, { CSSProperties } from 'react';
export default function Footer(){
    return(
      

                <footer style={footerStyle}>
                    <div style={footerContentStyle}>
                        <h3>Website</h3>
                        <p>Thanks for visiting my site.</p>
                        <ul style={socialsStyle}>
                            <li><a href="#" style={socialLinkStyle}>Facebook</a></li>
                            <li><a href="#" style={socialLinkStyle}>Twitter</a></li>
                            <li><a href="#" style={socialLinkStyle}>Instagram</a></li>
                            <li><a href="#" style={socialLinkStyle}>LinkedIn</a></li>
                        </ul>
                    </div>
                    <div style={footerBottomStyle}>
                        <p>&copy; 2024 Your Website | Designed by Areeba Shahid</p>
                    </div>
                </footer>
            );
        };
        
        // Corrected CSS-in-JS with CSSProperties typing
        const footerStyle: CSSProperties = {
            backgroundColor: '#333', 
            color: '#fff',
            textAlign: 'center',
            padding: '20px 0',
        };
        
        const footerContentStyle: CSSProperties = {
            maxWidth: '1000px',
            margin: '0 auto',
        };
        
        const socialsStyle: CSSProperties = {
            listStyle: 'none',
            padding: 0,
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
        };
        
        const socialLinkStyle: CSSProperties = {
            marginRight: '10px',
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            backgroundColor: '#555',
            borderRadius: '50%',
        };
        
        const footerBottomStyle: CSSProperties = {
            marginTop: '20px',
            fontSize: '14px',
        };
        
           
       