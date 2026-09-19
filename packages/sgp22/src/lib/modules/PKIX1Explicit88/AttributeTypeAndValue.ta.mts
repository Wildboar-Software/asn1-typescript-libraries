/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../PKIX1Explicit88/AttributeType.ta.mjs";
import { AttributeValue, _decode_AttributeValue, _encode_AttributeValue } from "../PKIX1Explicit88/AttributeValue.ta.mjs";
// export { AttributeValue, _decode_AttributeValue, _encode_AttributeValue } from "../PKIX1Explicit88/AttributeValue.ta.mjs";


/**
 * @summary AttributeTypeAndValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeTypeAndValue ::= SEQUENCE {
 *         type    AttributeType,
 *         value   AttributeValue }
 * ```
 * 
 * @class
 */
export
class AttributeTypeAndValue {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: AttributeValue
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeAndValue
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeTypeAndValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAndValue`.
     * @returns {AttributeTypeAndValue}
     */
    public static _from_object (_o: { [_K in keyof (AttributeTypeAndValue)]: (AttributeTypeAndValue)[_K] }): AttributeTypeAndValue {
        return new AttributeTypeAndValue(_o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeTypeAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AttributeTypeAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeTypeAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeTypeAndValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeTypeAndValue: $.ASN1Decoder<AttributeTypeAndValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeTypeAndValue (el: _Element): AttributeTypeAndValue {
    if (!_cached_decoder_for_AttributeTypeAndValue) { _cached_decoder_for_AttributeTypeAndValue = function (el: _Element): AttributeTypeAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttributeTypeAndValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: AttributeType;
    let value!: AttributeValue;
    type_ = _decode_AttributeType(sequence[0]);
    value = _decode_AttributeValue(sequence[1]);
    return new AttributeTypeAndValue(
        type_,
        value,

    );
}; }
    return _cached_decoder_for_AttributeTypeAndValue(el);
}

let _cached_encoder_for_AttributeTypeAndValue: $.ASN1Encoder<AttributeTypeAndValue> | null = null;

/**
 * @summary Encodes a(n) AttributeTypeAndValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndValue, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeTypeAndValue (value: AttributeTypeAndValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeTypeAndValue) { _cached_encoder_for_AttributeTypeAndValue = function (value: AttributeTypeAndValue, elGetter: $.ASN1Encoder<AttributeTypeAndValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeType(value.type_, $.BER),
            /* REQUIRED   */ _encode_AttributeValue(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeTypeAndValue(value, elGetter);
}


/* eslint-enable */
