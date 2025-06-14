/* eslint-disable */
import {
    OCTET_STRING,
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



/* START_OF_SYMBOL_DEFINITION OtherHashValue */
/**
 * @summary OtherHashValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherHashValue  ::=  OCTET STRING
 * ```
 */
export
type OtherHashValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION OtherHashValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherHashValue */
let _cached_decoder_for_OtherHashValue: $.ASN1Decoder<OtherHashValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherHashValue */

/* START_OF_SYMBOL_DEFINITION _decode_OtherHashValue */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherHashValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherHashValue} The decoded data structure.
 */
export
function _decode_OtherHashValue (el: _Element) {
    if (!_cached_decoder_for_OtherHashValue) { _cached_decoder_for_OtherHashValue = $._decodeOctetString; }
    return _cached_decoder_for_OtherHashValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherHashValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherHashValue */
let _cached_encoder_for_OtherHashValue: $.ASN1Encoder<OtherHashValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherHashValue */

/* START_OF_SYMBOL_DEFINITION _encode_OtherHashValue */
/**
 * @summary Encodes a(n) OtherHashValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherHashValue, encoded as an ASN.1 Element.
 */
export
function _encode_OtherHashValue (value: OtherHashValue, elGetter: $.ASN1Encoder<OtherHashValue>) {
    if (!_cached_encoder_for_OtherHashValue) { _cached_encoder_for_OtherHashValue = $._encodeOctetString; }
    return _cached_encoder_for_OtherHashValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherHashValue */

/* eslint-enable */
