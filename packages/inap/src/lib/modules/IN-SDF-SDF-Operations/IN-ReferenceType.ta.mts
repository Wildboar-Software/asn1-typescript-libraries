/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ReferenceType, _encode_ReferenceType, ReferenceType } from "../DistributedOperations/ReferenceType.ta.mjs";
// export { ReferenceType, _enum_for_ReferenceType, ReferenceType_superior /* IMPORTED_LONG_ENUMERATION_ITEM */, superior /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_subordinate /* IMPORTED_LONG_ENUMERATION_ITEM */, subordinate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_cross /* IMPORTED_LONG_ENUMERATION_ITEM */, cross /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_nonSpecificSubordinate /* IMPORTED_LONG_ENUMERATION_ITEM */, nonSpecificSubordinate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_supplier /* IMPORTED_LONG_ENUMERATION_ITEM */, supplier /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_master /* IMPORTED_LONG_ENUMERATION_ITEM */, master /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_immediateSuperior /* IMPORTED_LONG_ENUMERATION_ITEM */, immediateSuperior /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferenceType_self /* IMPORTED_LONG_ENUMERATION_ITEM */, self /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReferenceType, _encode_ReferenceType } from "../DistributedOperations/ReferenceType.ta.mjs";


/**
 * @summary IN_ReferenceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ReferenceType  ::= 
 *   ReferenceType
 *     (superior | subordinate | nonSpecificSubordinate | supplier | master |
 *      immediateSuperior | self)
 * ```
 */
export
type IN_ReferenceType = ReferenceType; // DefinedType

let _cached_decoder_for_IN_ReferenceType: $.ASN1Decoder<IN_ReferenceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ReferenceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_ReferenceType (el: _Element): IN_ReferenceType {
    if (!_cached_decoder_for_IN_ReferenceType) { _cached_decoder_for_IN_ReferenceType = _decode_ReferenceType; }
    return _cached_decoder_for_IN_ReferenceType(el);
}

let _cached_encoder_for_IN_ReferenceType: $.ASN1Encoder<IN_ReferenceType> | null = null;

/**
 * @summary Encodes a(n) IN_ReferenceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ReferenceType, encoded as an ASN.1 Element.
 */
export
function _encode_IN_ReferenceType (value: IN_ReferenceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_ReferenceType) { _cached_encoder_for_IN_ReferenceType = _encode_ReferenceType; }
    return _cached_encoder_for_IN_ReferenceType(value, elGetter);
}


/* eslint-enable */
