/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Order
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Order ::= SEQUENCE{
 *    ascending      [1] IMPLICIT BOOLEAN,
 *                           -- "true" means monotonically increasing (i.e. non-
 *                           --  decreasing); "false" means monotonically
 *                           -- decreasing (i.e. non-increasing).
 *    order         [2] IMPLICIT INTEGER
 *                           -- Same as defined by 'elementOrdering' in tagSet-M,
 *                           -- though this may be overidden by schema.
 *                }
 * ```
 * 
 * @class
 */
export
class Order {
    constructor (
        /**
         * @summary `ascending`.
         * @public
         * @readonly
         */
        readonly ascending: BOOLEAN,
        /**
         * @summary `order`.
         * @public
         * @readonly
         */
        readonly order: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Order
     * @description
     * 
     * This takes an `object` and converts it to a `Order`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Order`.
     * @returns {Order}
     */
    public static _from_object (_o: { [_K in keyof (Order)]: (Order)[_K] }): Order {
        return new Order(_o.ascending, _o.order);
    }


}

/**
 * @summary The Leading Root Component Types of Order
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Order: $.ComponentSpec[] = [
    new $.ComponentSpec("ascending", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("order", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Order
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Order: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Order
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Order: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Order: $.ASN1Decoder<Order> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Order
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Order (el: _Element): Order {
    if (!_cached_decoder_for_Order) { _cached_decoder_for_Order = function (el: _Element): Order {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Order contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ascending";
    sequence[1].name = "order";
    let ascending!: BOOLEAN;
    let order!: INTEGER;
    ascending = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    order = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new Order(
        ascending,
        order,

    );
}; }
    return _cached_decoder_for_Order(el);
}

let _cached_encoder_for_Order: $.ASN1Encoder<Order> | null = null;

/**
 * @summary Encodes a(n) Order into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Order, encoded as an ASN.1 Element.
 */
export
function _encode_Order (value: Order, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Order) { _cached_encoder_for_Order = function (value: Order, elGetter: $.ASN1Encoder<Order>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.ascending, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.order, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Order(value, elGetter);
}


/* eslint-enable */
