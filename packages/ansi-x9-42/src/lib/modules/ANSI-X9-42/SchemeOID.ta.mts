/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION SchemeOID */
/**
 * @summary SchemeOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeOID  ::=  KEY-AGREEMENT.&id({NamedSchemes})
 * ```
 */
export type SchemeOID = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION SchemeOID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeOID */
let _cached_decoder_for_SchemeOID: $.ASN1Decoder<SchemeOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeOID */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeOID */
/**
 * @summary Decodes an ASN.1 element into a(n) SchemeOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeOID} The decoded data structure.
 */
export function _decode_SchemeOID(el: _Element) {
    if (!_cached_decoder_for_SchemeOID) {
        _cached_decoder_for_SchemeOID = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SchemeOID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchemeOID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeOID */
let _cached_encoder_for_SchemeOID: $.ASN1Encoder<SchemeOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeOID */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeOID */
/**
 * @summary Encodes a(n) SchemeOID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeOID, encoded as an ASN.1 Element.
 */
export function _encode_SchemeOID(
    value: SchemeOID,
    elGetter: $.ASN1Encoder<SchemeOID>
) {
    if (!_cached_encoder_for_SchemeOID) {
        _cached_encoder_for_SchemeOID = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SchemeOID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchemeOID */

/* eslint-enable */
