/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeTypes, _decode_AttributeTypes, _encode_AttributeTypes } from "../DirectoryShadowAbstractService/AttributeTypes.ta.mjs";
// export { AttributeTypes, _decode_AttributeTypes, _encode_AttributeTypes } from "../DirectoryShadowAbstractService/AttributeTypes.ta.mjs";


/**
 * @summary ClassAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClassAttributes  ::=  CHOICE {
 *   allAttributes  NULL,
 *   include        [0]  AttributeTypes,
 *   exclude        [1]  AttributeTypes
 * }
 * ```
 */
export
type ClassAttributes =
    { allAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { include: AttributeTypes } /* CHOICE_ALT_ROOT */
    | { exclude: AttributeTypes } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClassAttributes: $.ASN1Decoder<ClassAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClassAttributes (el: _Element): ClassAttributes {
    if (!_cached_decoder_for_ClassAttributes) { _cached_decoder_for_ClassAttributes = $._decode_inextensible_choice<ClassAttributes>({
    "UNIVERSAL 5": [ "allAttributes", $._decodeNull ],
    "CONTEXT 0": [ "include", $._decode_implicit<AttributeTypes>(() => _decode_AttributeTypes) ],
    "CONTEXT 1": [ "exclude", $._decode_implicit<AttributeTypes>(() => _decode_AttributeTypes) ]
}); }
    return _cached_decoder_for_ClassAttributes(el);
}

let _cached_encoder_for_ClassAttributes: $.ASN1Encoder<ClassAttributes> | null = null;

/**
 * @summary Encodes a(n) ClassAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_ClassAttributes (value: ClassAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClassAttributes) { _cached_encoder_for_ClassAttributes = $._encode_choice<ClassAttributes>({
    "allAttributes": $._encodeNull,
    "include": $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeTypes, $.BER),
    "exclude": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeTypes, $.BER),
}, $.BER); }
    return _cached_encoder_for_ClassAttributes(value, elGetter);
}


/* eslint-enable */
