async function getEmployees() {
    try {
        const response = await fetch('../../employees.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error('Error loading employee data:', error);
        return [];
    }
}

export { getEmployees };