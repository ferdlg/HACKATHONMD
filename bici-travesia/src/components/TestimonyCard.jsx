import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const TestimonyCard= () => {
  const theme = useTheme();
    const testimonials = [
    {
      "name": "Sofía M.",
      "city": "Bogotá",
      "description": "Gracias a esta app, descubrí la Ciclovía de Bogotá como nunca antes. Me dieron la ruta perfecta para recorrer la ciudad en bici y disfrutar del ambiente. ¡No sabía que Bogotá tenía tanto para ofrecer sobre dos ruedas!",
    "image":"https://www.shutterstock.com/image-photo/beautiful-cyclist-takes-selfie-sporty-600nw-2009393441.jpg",
    "star":"⭐⭐⭐⭐" 
    },
    {
      "name": "Juan C.",
      "city": "Medellín",
      "description": "La ruta al Pueblito Paisa fue increíble. Me encantó cómo todo estaba súper organizado y fácil de seguir. Además, la vista desde arriba es simplemente espectacular. ¡10/10 recomendado!",
        "image":"https://img.lovepik.com/photo/20230421/medium/lovepik-happy-smiling-cyclist-man-driving-a-bike-taking-selfie-photo-image_352261795.jpg",
    "star":"⭐⭐⭐⭐⭐" 
    },
    {
      "name": "Laura G.",
      "city": "Bogotá",
      "description": "Visité el Jardín Botánico y me sorprendió lo fácil que fue llegar con las rutas que me sugirieron. Es un lugar mágico, y la app hizo que todo fuera más sencillo para disfrutarlo al máximo.",
        "image":"https://www.shutterstock.com/image-photo/outdoor-back-light-portrait-woman-260nw-2005600574.jpg",
        "star":"⭐⭐⭐⭐" 
    },
    {
      "name": "Andrés P.",
      "city": "Medellín",
      "description": "Recorrer el Parque Arví en bici fue una experiencia inolvidable. Las rutas sugeridas fueron seguras y llenas de paisajes hermosos. Además, encontré recomendaciones geniales para comer después del paseo. ¡Totalmente satisfecho!",
        "image":"https://img.freepik.com/fotos-premium/selfie-ciclista-bosque-casco-gafas-sol-hombre-sonriendo-mientras-monta-su-bicicleta-al-aire-libre-concepto-seguridad-mientras-anda-bicicleta-zonas-rurales_782515-1320.jpg",
        "star":"⭐⭐⭐⭐⭐"    }
  ];
  

  return (
    <div className='gap-4'>
      <h1 className="mt-4 mb-4 text-xl font-extrabold leading-none tracking-tight text-green-400 md:text-5xl lg:text-6xl dark:text-white">
        Testimonios
      </h1>
    {

        testimonials.map((testimony, index)=>
        
            (
                <Card sx={{ display: 'block' }} key={index} className='bg-white m-4'>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {testimony.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ color: 'text.primary' }}
                  >
                    {testimony.city}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                  >
                    {testimony.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
                    {testimony.star}
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: '100% ' }}
                image={testimony.image}
                alt="Live from space album cover"
              />
            </Card>
            )
            
        )
    }
    
    </div>
    
  );
}

export default TestimonyCard