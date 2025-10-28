# encoding: utf-8
{
    "name": "POS Total item in order line",
    "version": "18.0.0.0.0",
    "license": "OPL-1",
    "summary": "POS Customization",
    "category": "Point of Sale",    
    "author": "ARA SOFT",
    "website": "",
    "description": """
        POS Customization
    """,
    "depends": ["point_of_sale","sale_loyalty", "pos_loyalty"],
    "images": ["static/description/banner.gif"],
    "init_xml": [],
    "data": [
    ],
    "assets": {
        'point_of_sale._assets_pos': [
            'pos_total_item_in_order_line/static/src/js/PosOrder.js',
            'pos_total_item_in_order_line/static/src/xml/OrderWidget.xml',
        ]
    },
    "installable": True,
    'price': 6.10,
    'currency': 'USD',
}
