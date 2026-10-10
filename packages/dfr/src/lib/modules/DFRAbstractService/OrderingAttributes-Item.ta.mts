/* eslint-disable */
import {
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
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { Direction, _enum_for_Direction, _decode_Direction, _encode_Direction } from "../DFRAbstractService/Direction.ta.mjs";


/**
 * @summary OrderingAttributes_Item
 * @description
 *
 * One sort key. ISO/IEC 10166-1:1991 §8.1.6.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OrderingAttributes-Item ::= SEQUENCE {
 *         attribute   [0] AttributeType,
 *         direction   [1] Direction
 *     }
 * ```
 * 
 * @class
 */
export
class OrderingAttributes_Item {
    constructor (
        /**
         * @summary `attribute`.
         * @description
         *
         * Attribute type; must MATCH FOR ORDERING.
         * @public
         * @readonly
         */
        readonly attribute: AttributeType,
        /**
         * @summary `direction`.
         * @description
         *
         * ascending or descending.
         * @public
         * @readonly
         */
        readonly direction: Direction
    ) {}

    /**
     * @summary Restructures an object into a OrderingAttributes_Item
     * @description
     * 
     * This takes an `object` and converts it to a `OrderingAttributes_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OrderingAttributes_Item`.
     * @returns {OrderingAttributes_Item}
     */
    public static _from_object (_o: { [_K in keyof (OrderingAttributes_Item)]: (OrderingAttributes_Item)[_K] }): OrderingAttributes_Item {
        return new OrderingAttributes_Item(_o.attribute, _o.direction);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of OrderingAttributes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OrderingAttributes_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("attribute", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OrderingAttributes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OrderingAttributes_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OrderingAttributes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OrderingAttributes_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OrderingAttributes_Item: $.ASN1Decoder<OrderingAttributes_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrderingAttributes_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OrderingAttributes_Item (el: _Element): OrderingAttributes_Item {
    if (!_cached_decoder_for_OrderingAttributes_Item) { _cached_decoder_for_OrderingAttributes_Item = function (el: _Element): OrderingAttributes_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OrderingAttributes-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attribute";
    sequence[1].name = "direction";
    let attribute!: AttributeType;
    let direction!: Direction;
    attribute = $._decode_implicit<AttributeType>(() => _decode_AttributeType)(sequence[0]);
    direction = $._decode_implicit<Direction>(() => _decode_Direction)(sequence[1]);
    return new OrderingAttributes_Item(
        attribute,
        direction,

    );
}; }
    return _cached_decoder_for_OrderingAttributes_Item(el);
}

let _cached_encoder_for_OrderingAttributes_Item: $.ASN1Encoder<OrderingAttributes_Item> | null = null;

/**
 * @summary Encodes a(n) OrderingAttributes_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderingAttributes_Item, encoded as an ASN.1 Element.
 */
export
function _encode_OrderingAttributes_Item (value: OrderingAttributes_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OrderingAttributes_Item) { _cached_encoder_for_OrderingAttributes_Item = function (value: OrderingAttributes_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeType, $.BER)(value.attribute, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Direction, $.BER)(value.direction, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OrderingAttributes_Item(value, elGetter);
}


/* eslint-enable */
