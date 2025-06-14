/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION Count */
/**
 * @summary Count
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Count  ::=  INTEGER
 * ```
 */
export
type Count = INTEGER;
/* END_OF_SYMBOL_DEFINITION Count */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Count */
let _cached_decoder_for_Count: $.ASN1Decoder<Count> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Count */

/* START_OF_SYMBOL_DEFINITION _decode_Count */
/**
 * @summary Decodes an ASN.1 element into a(n) Count
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Count} The decoded data structure.
 */
export
function _decode_Count (el: _Element) {
    if (!_cached_decoder_for_Count) { _cached_decoder_for_Count = $._decodeInteger; }
    return _cached_decoder_for_Count(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Count */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Count */
let _cached_encoder_for_Count: $.ASN1Encoder<Count> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Count */

/* START_OF_SYMBOL_DEFINITION _encode_Count */
/**
 * @summary Encodes a(n) Count into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Count, encoded as an ASN.1 Element.
 */
export
function _encode_Count (value: Count, elGetter: $.ASN1Encoder<Count>) {
    if (!_cached_encoder_for_Count) { _cached_encoder_for_Count = $._encodeInteger; }
    return _cached_encoder_for_Count(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Count */

/* eslint-enable */
