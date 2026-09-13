/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OrderingAttributes, _decode_OrderingAttributes, _encode_OrderingAttributes } from "../DFRAbstractService/OrderingAttributes.ta.mjs";
// export { OrderingAttributes, _decode_OrderingAttributes, _encode_OrderingAttributes } from "../DFRAbstractService/OrderingAttributes.ta.mjs";


/**
 * @summary OrderingRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrderingRule ::= SET {
 *     list-attributes     [0] BOOLEAN DEFAULT FALSE,
 *     ordering-attributes [1] OrderingAttributes
 * }
 * ```
 * 
 * @class
 */
export
class OrderingRule {
    constructor (
        /**
         * @summary `list_attributes`.
         * @public
         * @readonly
         */
        readonly list_attributes: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ordering_attributes`.
         * @public
         * @readonly
         */
        readonly ordering_attributes: OrderingAttributes
    ) {}

    /**
     * @summary Restructures an object into a OrderingRule
     * @description
     * 
     * This takes an `object` and converts it to a `OrderingRule`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OrderingRule`.
     * @returns {OrderingRule}
     */
    public static _from_object (_o: { [_K in keyof (OrderingRule)]: (OrderingRule)[_K] }): OrderingRule {
        return new OrderingRule(_o.list_attributes, _o.ordering_attributes);
    }

    /**
     * @summary Getter that returns the default value for `list_attributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_list_attributes () { return false; }
}

/**
 * @summary The Leading Root Component Types of OrderingRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OrderingRule: $.ComponentSpec[] = [
    new $.ComponentSpec("list-attributes", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ordering-attributes", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OrderingRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OrderingRule: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OrderingRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OrderingRule: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OrderingRule: $.ASN1Decoder<OrderingRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrderingRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OrderingRule (el: _Element): OrderingRule {
    if (!_cached_decoder_for_OrderingRule) { _cached_decoder_for_OrderingRule = function (el: _Element): OrderingRule {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let list_attributes: OPTIONAL<BOOLEAN> = OrderingRule._default_value_for_list_attributes;
    let ordering_attributes!: OrderingAttributes;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "list-attributes": (_el: _Element): void => { list_attributes = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "ordering-attributes": (_el: _Element): void => { ordering_attributes = $._decode_implicit<OrderingAttributes>(() => _decode_OrderingAttributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OrderingRule,
        _extension_additions_list_spec_for_OrderingRule,
        _root_component_type_list_2_spec_for_OrderingRule,
        undefined,
    );
    return new OrderingRule( /* SET_CONSTRUCTOR_CALL */
        list_attributes,
        ordering_attributes
    );
}; }
    return _cached_decoder_for_OrderingRule(el);
}

let _cached_encoder_for_OrderingRule: $.ASN1Encoder<OrderingRule> | null = null;

/**
 * @summary Encodes a(n) OrderingRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderingRule, encoded as an ASN.1 Element.
 */
export
function _encode_OrderingRule (value: OrderingRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OrderingRule) { _cached_encoder_for_OrderingRule = function (value: OrderingRule): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.list_attributes === undefined || $.deepEq(value.list_attributes, OrderingRule._default_value_for_list_attributes) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.list_attributes, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_OrderingAttributes, $.BER)(value.ordering_attributes, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OrderingRule(value, elGetter);
}


/* eslint-enable */
