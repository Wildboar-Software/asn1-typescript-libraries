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



/* START_OF_SYMBOL_DEFINITION NotificationIdentifier */
/**
 * @summary NotificationIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationIdentifier  ::=  INTEGER
 * ```
 */
export
type NotificationIdentifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationIdentifier */
let _cached_decoder_for_NotificationIdentifier: $.ASN1Decoder<NotificationIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationIdentifier} The decoded data structure.
 */
export
function _decode_NotificationIdentifier (el: _Element) {
    if (!_cached_decoder_for_NotificationIdentifier) { _cached_decoder_for_NotificationIdentifier = $._decodeInteger; }
    return _cached_decoder_for_NotificationIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationIdentifier */
let _cached_encoder_for_NotificationIdentifier: $.ASN1Encoder<NotificationIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationIdentifier */
/**
 * @summary Encodes a(n) NotificationIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationIdentifier (value: NotificationIdentifier, elGetter: $.ASN1Encoder<NotificationIdentifier>) {
    if (!_cached_encoder_for_NotificationIdentifier) { _cached_encoder_for_NotificationIdentifier = $._encodeInteger; }
    return _cached_encoder_for_NotificationIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotificationIdentifier */

/* eslint-enable */
