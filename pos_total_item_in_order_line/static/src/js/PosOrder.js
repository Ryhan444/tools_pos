/** @odoo-module */
import { PosOrder } from "@point_of_sale/app/models/pos_order";
import { patch } from "@web/core/utils/patch";

patch(PosOrder.prototype, {
    get taxTotals() {
        const taxTotals = super.taxTotals || {};
        if (this.lines){
        // Ambil semua baris (order lines)
            const allLines = this.lines || [];
            const storableLines = [];

            for (let line of allLines) {
                if (line && line.product_id && line.product_id.is_storable) {
                storableLines.push({
                    productId: line.product_id.id,
                    productName: line.product_id.display_name,
                    qty: line.qty,
                });
                }
            }

            const storableLinesCount = storableLines.length || 0;
            const totalQuantity = storableLines.reduce((total, line) => total + (line.qty || 0), 0);

            // Tambahkan properti ke taxTotals
            taxTotals.storableLinesCount = storableLinesCount;
            taxTotals.totalQuantity = totalQuantity;
        }
        return taxTotals;
    },
});
