/* eslint-disable */
import {
    BOOLEAN,
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



/* START_OF_SYMBOL_DEFINITION UnknownStatus */
/**
 * @summary UnknownStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnknownStatus  ::=  BOOLEAN
 * ```
 */
export
type UnknownStatus = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnknownStatus */
let _cached_decoder_for_UnknownStatus: $.ASN1Decoder<UnknownStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _decode_UnknownStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) UnknownStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnknownStatus} The decoded data structure.
 */
export
function _decode_UnknownStatus (el: _Element) {
    if (!_cached_decoder_for_UnknownStatus) { _cached_decoder_for_UnknownStatus = $._decodeBoolean; }
    return _cached_decoder_for_UnknownStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnknownStatus */
let _cached_encoder_for_UnknownStatus: $.ASN1Encoder<UnknownStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnknownStatus */

/* START_OF_SYMBOL_DEFINITION _encode_UnknownStatus */
/**
 * @summary Encodes a(n) UnknownStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnknownStatus, encoded as an ASN.1 Element.
 */
export
function _encode_UnknownStatus (value: UnknownStatus, elGetter: $.ASN1Encoder<UnknownStatus>) {
    if (!_cached_encoder_for_UnknownStatus) { _cached_encoder_for_UnknownStatus = $._encodeBoolean; }
    return _cached_encoder_for_UnknownStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnknownStatus */

/* eslint-enable */
