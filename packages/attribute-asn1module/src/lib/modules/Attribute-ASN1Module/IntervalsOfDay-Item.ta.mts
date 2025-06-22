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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { Time24, _decode_Time24, _encode_Time24 } from "../Attribute-ASN1Module/Time24.ta.mjs";
/**
 * @summary IntervalsOfDay_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntervalsOfDay-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class IntervalsOfDay_Item {
    constructor (
        /**
         * @summary `intervalStart`.
         * @public
         * @readonly
         */
        readonly intervalStart: Time24,
        /**
         * @summary `intervalEnd`.
         * @public
         * @readonly
         */
        readonly intervalEnd: Time24
    ) {}

    /**
     * @summary Restructures an object into a IntervalsOfDay_Item
     * @description
     * 
     * This takes an `object` and converts it to a `IntervalsOfDay_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntervalsOfDay_Item`.
     * @returns {IntervalsOfDay_Item}
     */
    public static _from_object (_o: { [_K in keyof (IntervalsOfDay_Item)]: (IntervalsOfDay_Item)[_K] }): IntervalsOfDay_Item {
        return new IntervalsOfDay_Item(_o.intervalStart, _o.intervalEnd);
    }


}

/**
 * @summary The Leading Root Component Types of IntervalsOfDay_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntervalsOfDay_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("intervalStart", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("intervalEnd", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of IntervalsOfDay_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntervalsOfDay_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntervalsOfDay_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntervalsOfDay_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntervalsOfDay_Item: $.ASN1Decoder<IntervalsOfDay_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntervalsOfDay_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntervalsOfDay_Item} The decoded data structure.
 */
export
function _decode_IntervalsOfDay_Item (el: _Element) {
    if (!_cached_decoder_for_IntervalsOfDay_Item) { _cached_decoder_for_IntervalsOfDay_Item = function (el: _Element): IntervalsOfDay_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IntervalsOfDay-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "intervalStart";
    sequence[1].name = "intervalEnd";
    let intervalStart!: Time24;
    let intervalEnd!: Time24;
    intervalStart = _decode_Time24(sequence[0]);
    intervalEnd = _decode_Time24(sequence[1]);
    return new IntervalsOfDay_Item(
        intervalStart,
        intervalEnd,

    );
}; }
    return _cached_decoder_for_IntervalsOfDay_Item(el);
}

let _cached_encoder_for_IntervalsOfDay_Item: $.ASN1Encoder<IntervalsOfDay_Item> | null = null;

/**
 * @summary Encodes a(n) IntervalsOfDay_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalsOfDay_Item, encoded as an ASN.1 Element.
 */
export
function _encode_IntervalsOfDay_Item (value: IntervalsOfDay_Item, elGetter: $.ASN1Encoder<IntervalsOfDay_Item>) {
    if (!_cached_encoder_for_IntervalsOfDay_Item) { _cached_encoder_for_IntervalsOfDay_Item = function (value: IntervalsOfDay_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Time24(value.intervalStart, $.BER),
            /* REQUIRED   */ _encode_Time24(value.intervalEnd, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntervalsOfDay_Item(value, elGetter);
}


/* eslint-enable */
