import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '15 years',
    rating: 4.8,
    location: 'City Hospital',
    availability: 'Available Today',
    image: '👨‍⚕️',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrician',
    experience: '10 years',
    rating: 4.9,
    location: 'Children\'s Clinic',
    availability: 'Available Tomorrow',
    image: '👩‍⚕️',
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    specialty: 'Dermatologist',
    experience: '12 years',
    rating: 4.7,
    location: 'Skin Care Center',
    availability: 'Available Today',
    image: '👨‍⚕️',
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic',
    experience: '18 years',
    rating: 4.9,
    location: 'Bone & Joint Hospital',
    availability: 'Available in 3 days',
    image: '👩‍⚕️',
  },
];

const Doctors = () => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const specialties = ['All', 'Cardiologist', 'Pediatrician', 'Dermatologist', 'Orthopedic'];
  
  const filteredDoctors = selectedSpecialty && selectedSpecialty !== 'All'
    ? doctors.filter(d => d.specialty === selectedSpecialty)
    : doctors;

  return (
    <div className="min-h-screen bg-background">
      <Header title="Find Doctors" showBack showCart />
      
      <main className="container py-6 space-y-6">
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {specialties.map(specialty => (
            <Badge
              key={specialty}
              variant={selectedSpecialty === specialty ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </Badge>
          ))}
        </div>

        {/* Doctors List */}
        <div className="grid gap-4">
          {filteredDoctors.map(doctor => (
            <Card key={doctor.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{doctor.image}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <CardDescription className="mt-1">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-primary">{doctor.specialty}</span>
                        <span className="text-xs">{doctor.experience} experience</span>
                      </div>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {doctor.location}
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{doctor.availability}</Badge>
                  <Button
                    onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                    size="sm"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Doctors;
