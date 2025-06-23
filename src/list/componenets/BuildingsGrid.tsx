import buildings from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {
    const rows: GridRowsProp = buildings;
    const columns: GridColDef[] = [
        { field: 'Название', headerName: 'Название', flex: 1},
        { field: 'Вид', headerName: 'Вид', flex: 0.5},
        { field: 'Распространение', headerName: 'Распространение', flex: 0.5},
        { field: 'Средняя продолжительность жизни (лет)', headerName: 'Продолжительность жизни (лет)', flex: 0.5},
        { field: 'Высота (до, м)', headerName: 'Высота (м)', flex: 0.5},
    ];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                showToolbar={true}
                getRowId={(row) => row.id}
            />
        </Container>
    );
}

export default BuildingsGrid;