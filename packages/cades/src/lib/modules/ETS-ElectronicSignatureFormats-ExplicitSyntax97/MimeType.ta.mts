/* eslint-disable */
import {
    UTF8String,
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



/* START_OF_SYMBOL_DEFINITION MimeType */
/**
 * @summary MimeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MimeType  ::=  UTF8String
 * ```
 */
export
type MimeType = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION MimeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MimeType */
let _cached_decoder_for_MimeType: $.ASN1Decoder<MimeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MimeType */

/* START_OF_SYMBOL_DEFINITION _decode_MimeType */
/**
 * @summary Decodes an ASN.1 element into a(n) MimeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MimeType} The decoded data structure.
 */
export
function _decode_MimeType (el: _Element) {
    if (!_cached_decoder_for_MimeType) { _cached_decoder_for_MimeType = $._decodeUTF8String; }
    return _cached_decoder_for_MimeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MimeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MimeType */
let _cached_encoder_for_MimeType: $.ASN1Encoder<MimeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MimeType */

/* START_OF_SYMBOL_DEFINITION _encode_MimeType */
/**
 * @summary Encodes a(n) MimeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MimeType, encoded as an ASN.1 Element.
 */
export
function _encode_MimeType (value: MimeType, elGetter: $.ASN1Encoder<MimeType>) {
    if (!_cached_encoder_for_MimeType) { _cached_encoder_for_MimeType = $._encodeUTF8String; }
    return _cached_encoder_for_MimeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MimeType */

/* eslint-enable */
