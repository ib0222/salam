document.addEventListener("DOMContentLoaded", function() {
    const people = [
        {
            "firstName": "Jhon",
            "lastName": "Doe",
            "age": 40,
            "mail": "jhon.doe@example.com",
            "address": "USA",
            "phone": "555-785-99-68",
            "birthDate": "01.01.2000"
        },
        {
            "firstName": "Jane",
            "lastName": "Smith",
            "age": 35,
            "mail": "jane.smith@example.com",
            "address": "Canada",
            "phone": "555-123-45-67",
            "birthDate": "02.02.1985"
        },
        {
            "firstName": "Robert",
            "lastName": "Johnson",
            "age": 29,
            "mail": "robert.johnson@example.com",
            "address": "UK",
            "phone": "555-987-65-43",
            "birthDate": "03.03.1990"
        },
        {
            "firstName": "Emily",
            "lastName": "Davis",
            "age": 22,
            "mail": "emily.davis@example.com",
            "address": "Australia",
            "phone": "555-654-32-10",
            "birthDate": "04.04.1998"
        },
        {
            "firstName": "Michael",
            "lastName": "Brown",
            "age": 45,
            "mail": "michael.brown@example.com",
            "address": "New Zealand",
            "phone": "555-321-09-87",
            "birthDate": "05.05.1975"
        },
        {
            "firstName": "Sarah",
            "lastName": "Wilson",
            "age": 30,
            "mail": "sarah.wilson@example.com",
            "address": "South Africa",
            "phone": "555-098-76-54",
            "birthDate": "06.06.1990"
        },
        {
            "firstName": "David",
            "lastName": "Martinez",
            "age": 28,
            "mail": "david.martinez@example.com",
            "address": "Mexico",
            "phone": "555-765-43-21",
            "birthDate": "07.07.1992"
        },
        {
            "firstName": "Laura",
            "lastName": "Garcia",
            "age": 33,
            "mail": "laura.garcia@example.com",
            "address": "Spain",
            "phone": "555-234-56-78",
            "birthDate": "08.08.1987"
        },
        {
            "firstName": "James",
            "lastName": "Miller",
            "age": 37,
            "mail": "james.miller@example.com",
            "address": "France",
            "phone": "555-876-54-32",
            "birthDate": "09.09.1983"
        },
        {
            "firstName": "Anna",
            "lastName": "Rodriguez",
            "age": 26,
            "mail": "anna.rodriguez@example.com",
            "address": "Germany",
            "phone": "555-543-21-09",
            "birthDate": "10.10.1994"
        }
    ];

    function createTable(data) {
        const root = document.getElementById('root');
        const table = document.createElement('table');
        table.classList.add('min-w-full', 'divide-y', 'divide-gray-200', 'bg-white', 'shadow', 'overflow-hidden', 'sm:rounded-lg');

        const thead = document.createElement('thead');
        thead.classList.add('bg-gray-50');
        const headerRow = document.createElement('tr');

        Object.keys(data[0]).forEach(key => {
            const th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            th.classList.add('px-6', 'py-3', 'text-left', 'text-xs', 'font-medium', 'text-gray-500', 'uppercase', 'tracking-wider');
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        tbody.classList.add('bg-white', 'divide-y', 'divide-gray-200');
        data.forEach(person => {
            const row = document.createElement('tr');

            Object.values(person).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                td.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'text-gray-900');
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        root.appendChild(table);
    }

    createTable(people);
});
