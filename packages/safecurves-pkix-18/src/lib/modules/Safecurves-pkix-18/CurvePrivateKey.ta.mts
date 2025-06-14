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



/* START_OF_SYMBOL_DEFINITION CurvePrivateKey */
/**
 * @summary CurvePrivateKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurvePrivateKey  ::=  OCTET STRING
 * ```
 */
export
type CurvePrivateKey = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CurvePrivateKey */
let _cached_decoder_for_CurvePrivateKey: $.ASN1Decoder<CurvePrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_CurvePrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) CurvePrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CurvePrivateKey} The decoded data structure.
 */
export
function _decode_CurvePrivateKey (el: _Element) {
    if (!_cached_decoder_for_CurvePrivateKey) { _cached_decoder_for_CurvePrivateKey = $._decodeOctetString; }
    return _cached_decoder_for_CurvePrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CurvePrivateKey */
let _cached_encoder_for_CurvePrivateKey: $.ASN1Encoder<CurvePrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CurvePrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_CurvePrivateKey */
/**
 * @summary Encodes a(n) CurvePrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurvePrivateKey, encoded as an ASN.1 Element.
 */
export
function _encode_CurvePrivateKey (value: CurvePrivateKey, elGetter: $.ASN1Encoder<CurvePrivateKey>) {
    if (!_cached_encoder_for_CurvePrivateKey) { _cached_encoder_for_CurvePrivateKey = $._encodeOctetString; }
    return _cached_encoder_for_CurvePrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CurvePrivateKey */

/* eslint-enable */
