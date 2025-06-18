
export interface EVVehicle {
  id: string;
  name: string;
  type: 'car' | 'bike';
  brand: string;
  price: number;
  priceDisplay: string;
  batteryCapacity: number;
  range: number;
  chargingTime: number;
  fastCharging: boolean;
  motorPower?: number;
  warranty: number;
  image?: string;
}

export const evVehicles: EVVehicle[] = [
  {
    id: 'tata-nexon-ev',
    name: 'Tata Nexon EV',
    type: 'car',
    brand: 'Tata',
    price: 1449000,
    priceDisplay: '₹14.49 L',
    batteryCapacity: 30.2,
    range: 312,
    chargingTime: 8,
    fastCharging: true,
    motorPower: 95,
    warranty: 3,
  },
  {
    id: 'ola-s1-pro',
    name: 'Ola S1 Pro',
    type: 'bike',
    brand: 'Ola',
    price: 140000,
    priceDisplay: '₹1.40 L',
    batteryCapacity: 4.0,
    range: 181,
    chargingTime: 6.5,
    fastCharging: true,
    motorPower: 8.5,
    warranty: 3,
  },
  {
    id: 'mg-zs-ev',
    name: 'MG ZS EV',
    type: 'car',
    brand: 'MG',
    price: 1898000,
    priceDisplay: '₹18.98 L',
    batteryCapacity: 44.5,
    range: 419,
    chargingTime: 6,
    fastCharging: true,
    motorPower: 130,
    warranty: 3,
  },
  {
    id: 'ather-450x-gen3',
    name: 'Ather 450X Gen 3',
    type: 'bike',
    brand: 'Ather',
    price: 160000,
    priceDisplay: '₹1.60 L',
    batteryCapacity: 3.7,
    range: 146,
    chargingTime: 5.5,
    fastCharging: true,
    motorPower: 6.4,
    warranty: 3,
  },
  {
    id: 'hero-optima-cx',
    name: 'Hero Optima CX',
    type: 'bike',
    brand: 'Hero Electric',
    price: 75000,
    priceDisplay: '₹0.75 L',
    batteryCapacity: 1.5,
    range: 82,
    chargingTime: 4.5,
    fastCharging: false,
    motorPower: 0.9,
    warranty: 2,
  },
  {
    id: 'mahindra-e2o-plus',
    name: 'Mahindra e2o Plus',
    type: 'car',
    brand: 'Mahindra',
    price: 675000,
    priceDisplay: '₹6.75 L',
    batteryCapacity: 10.08,
    range: 140,
    chargingTime: 9,
    fastCharging: false,
    motorPower: 19,
    warranty: 3,
  },
  {
    id: 'tata-tigor-ev',
    name: 'Tata Tigor EV',
    type: 'car',
    brand: 'Tata',
    price: 1199000,
    priceDisplay: '₹11.99 L',
    batteryCapacity: 26,
    range: 306,
    chargingTime: 8.5,
    fastCharging: true,
    motorPower: 55,
    warranty: 3,
  },
  {
    id: 'tvs-iqube',
    name: 'TVS iQube',
    type: 'bike',
    brand: 'TVS',
    price: 115000,
    priceDisplay: '₹1.15 L',
    batteryCapacity: 2.25,
    range: 75,
    chargingTime: 4.5,
    fastCharging: false,
    motorPower: 4.4,
    warranty: 3,
  },
];

export const brands = ['All', 'Tata', 'Ather', 'Ola', 'MG', 'Mahindra', 'Hero Electric', 'TVS'];

export const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Below ₹1.5L', min: 0, max: 150000 },
  { label: '₹1.5L–5L', min: 150000, max: 500000 },
  { label: '₹5L–10L', min: 500000, max: 1000000 },
  { label: '₹10L+', min: 1000000, max: Infinity },
];

export const rangeCategories = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Below 100 km', min: 0, max: 100 },
  { label: '100–250 km', min: 100, max: 250 },
  { label: '250+ km', min: 250, max: Infinity },
];
