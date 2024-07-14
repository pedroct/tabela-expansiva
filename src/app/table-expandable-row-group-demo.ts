import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Customer } from '@domain/customer';
import { CustomerService } from '@service/customerservice';
@Component({
    selector: 'table-expandable-row-group-demo',
    templateUrl: 'table-expandable-row-group-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [CustomerService],
    styles: [
        `:host ::ng-deep .p-rowgroup-footer td {
            font-weight: 700;
        }
        
        :host ::ng-deep .p-rowgroup-header {
            span {
                font-weight: 700;
            }
        
            .p-row-toggler {
                vertical-align: middle;
                margin-right: .25rem;
            }
        }`
    ],
})
export class TableExpandableRowGroupDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}