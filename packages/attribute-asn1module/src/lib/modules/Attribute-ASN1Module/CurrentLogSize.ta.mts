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



/* START_OF_SYMBOL_DEFINITION CurrentLogSize */
/**
 * @summary CurrentLogSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrentLogSize  ::=  INTEGER
 * ```
 */
export
type CurrentLogSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION CurrentLogSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CurrentLogSize */
let _cached_decoder_for_CurrentLogSize: $.ASN1Decoder<CurrentLogSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CurrentLogSize */

/* START_OF_SYMBOL_DEFINITION _decode_CurrentLogSize */
/**
 * @summary Decodes an ASN.1 element into a(n) CurrentLogSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CurrentLogSize} The decoded data structure.
 */
export
function _decode_CurrentLogSize (el: _Element) {
    if (!_cached_decoder_for_CurrentLogSize) { _cached_decoder_for_CurrentLogSize = $._decodeInteger; }
    return _cached_decoder_for_CurrentLogSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CurrentLogSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CurrentLogSize */
let _cached_encoder_for_CurrentLogSize: $.ASN1Encoder<CurrentLogSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CurrentLogSize */

/* START_OF_SYMBOL_DEFINITION _encode_CurrentLogSize */
/**
 * @summary Encodes a(n) CurrentLogSize into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrentLogSize, encoded as an ASN.1 Element.
 */
export
function _encode_CurrentLogSize (value: CurrentLogSize, elGetter: $.ASN1Encoder<CurrentLogSize>) {
    if (!_cached_encoder_for_CurrentLogSize) { _cached_encoder_for_CurrentLogSize = $._encodeInteger; }
    return _cached_encoder_for_CurrentLogSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CurrentLogSize */

/* eslint-enable */
