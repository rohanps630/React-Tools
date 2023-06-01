import { Table } from '@react-tools/table';
// import styles from './app.module.css';

import { ColumnsData, DummyData } from './DummyData';

export function App() {
  return (
    <div>
      <Table
        columns={ColumnsData}
        initialData={DummyData}
        selectionType={'multi'}
      />
    </div>
  );
}

export default App;
