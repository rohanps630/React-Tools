import { TableColumn } from '@react-tools/table';

export type DataType = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
};

export const ColumnsData: TableColumn<DataType>[] = [
  { key: 'id', label: '#' },
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'username', label: 'Username' },
];

export const DummyData: DataType[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', username: '@johndoe' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', username: '@janesmith' },
  { id: 3, firstName: 'James', lastName: 'Johnson', username: '@jamesjohnson' },
  { id: 4, firstName: 'Michael', lastName: 'Brown', username: '@michaelbrown' },
  { id: 5, firstName: 'Sarah', lastName: 'Wilson', username: '@sarahwilson' },
  { id: 6, firstName: 'David', lastName: 'Taylor', username: '@davidtaylor' },
  {
    id: 7,
    firstName: 'Jennifer',
    lastName: 'Anderson',
    username: '@jenniferanderson',
  },
  {
    id: 8,
    firstName: 'Christopher',
    lastName: 'Thomas',
    username: '@christopherthomas',
  },
  {
    id: 9,
    firstName: 'Emily',
    lastName: 'Martinez',
    username: '@emilymartinez',
  },
  { id: 10, firstName: 'Daniel', lastName: 'Clark', username: '@danielclark' },
  { id: 11, firstName: 'Olivia', lastName: 'Lewis', username: '@olivialewis' },
  { id: 12, firstName: 'Matthew', lastName: 'Lee', username: '@matthewlee' },
  {
    id: 13,
    firstName: 'Sophia',
    lastName: 'Walker',
    username: '@sophiawalker',
  },
  { id: 14, firstName: 'Andrew', lastName: 'Hall', username: '@andrewhall' },
  {
    id: 15,
    firstName: 'Elizabeth',
    lastName: 'Young',
    username: '@elizabethyoung',
  },
  { id: 16, firstName: 'Joshua', lastName: 'Allen', username: '@joshuaallen' },
  { id: 17, firstName: 'Ava', lastName: 'Turner', username: '@avaturner' },
  {
    id: 18,
    firstName: 'William',
    lastName: 'Harris',
    username: '@williamharris',
  },
  {
    id: 19,
    firstName: 'Isabella',
    lastName: 'Martin',
    username: '@isabellamartin',
  },
  { id: 20, firstName: 'Joseph', lastName: 'White', username: '@josephwhite' },
  { id: 21, firstName: 'Mia', lastName: 'Walker', username: '@miawalker' },
  { id: 22, firstName: 'Ethan', lastName: 'King', username: '@ethanking' },
  {
    id: 23,
    firstName: 'Charlotte',
    lastName: 'Baker',
    username: '@charlottebaker',
  },
  {
    id: 24,
    firstName: 'Alexander',
    lastName: 'Cook',
    username: '@alexandercook',
  },
  {
    id: 25,
    firstName: 'Amelia',
    lastName: 'Gonzalez',
    username: '@ameliagonzalez',
  },
  { id: 26, firstName: 'James', lastName: 'Parker', username: '@jamesparker' },
  { id: 27, firstName: 'Sofia', lastName: 'Scott', username: '@sofiascott' },
  {
    id: 28,
    firstName: 'Benjamin',
    lastName: 'Green',
    username: '@benjamingreen',
  },
  { id: 29, firstName: 'Chloe', lastName: 'Adams', username: '@chloeadams' },
  {
    id: 30,
    firstName: 'Daniel',
    lastName: 'Turner',
    username: '@danielturner',
  },
];
