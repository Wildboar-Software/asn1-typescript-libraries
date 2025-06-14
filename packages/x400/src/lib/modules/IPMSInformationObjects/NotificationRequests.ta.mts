/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION NotificationRequests */
/**
 * @summary NotificationRequests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationRequests  ::=  BIT STRING {
 *   rn(0), nrn(1), ipm-return(2), an-supported(3), suppress-an(4)}
 * ```
 */
export type NotificationRequests = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION NotificationRequests */

/* START_OF_SYMBOL_DEFINITION NotificationRequests_rn */
/**
 * @summary NotificationRequests_rn
 * @constant
 */
export const NotificationRequests_rn: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NotificationRequests_rn */

/* START_OF_SYMBOL_DEFINITION rn */
/**
 * @summary rn
 * @constant
 */
export const rn: number = NotificationRequests_rn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION rn */

/* START_OF_SYMBOL_DEFINITION NotificationRequests_nrn */
/**
 * @summary NotificationRequests_nrn
 * @constant
 */
export const NotificationRequests_nrn: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NotificationRequests_nrn */

/* START_OF_SYMBOL_DEFINITION nrn */
/**
 * @summary nrn
 * @constant
 */
export const nrn: number = NotificationRequests_nrn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nrn */

/* START_OF_SYMBOL_DEFINITION NotificationRequests_ipm_return */
/**
 * @summary NotificationRequests_ipm_return
 * @constant
 */
export const NotificationRequests_ipm_return: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NotificationRequests_ipm_return */

/* START_OF_SYMBOL_DEFINITION ipm_return */
/**
 * @summary ipm_return
 * @constant
 */
export const ipm_return: number = NotificationRequests_ipm_return; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ipm_return */

/* START_OF_SYMBOL_DEFINITION NotificationRequests_an_supported */
/**
 * @summary NotificationRequests_an_supported
 * @constant
 */
export const NotificationRequests_an_supported: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NotificationRequests_an_supported */

/* START_OF_SYMBOL_DEFINITION an_supported */
/**
 * @summary an_supported
 * @constant
 */
export const an_supported: number = NotificationRequests_an_supported; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION an_supported */

/* START_OF_SYMBOL_DEFINITION NotificationRequests_suppress_an */
/**
 * @summary NotificationRequests_suppress_an
 * @constant
 */
export const NotificationRequests_suppress_an: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NotificationRequests_suppress_an */

/* START_OF_SYMBOL_DEFINITION suppress_an */
/**
 * @summary suppress_an
 * @constant
 */
export const suppress_an: number = NotificationRequests_suppress_an; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION suppress_an */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationRequests */
let _cached_decoder_for_NotificationRequests: $.ASN1Decoder<NotificationRequests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationRequests */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationRequests */
/**
 * @summary Decodes an ASN.1 element into a(n) NotificationRequests
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotificationRequests} The decoded data structure.
 */
export function _decode_NotificationRequests(el: _Element) {
    if (!_cached_decoder_for_NotificationRequests) {
        _cached_decoder_for_NotificationRequests = $._decodeBitString;
    }
    return _cached_decoder_for_NotificationRequests(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotificationRequests */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationRequests */
let _cached_encoder_for_NotificationRequests: $.ASN1Encoder<NotificationRequests> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationRequests */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationRequests */
/**
 * @summary Encodes a(n) NotificationRequests into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationRequests, encoded as an ASN.1 Element.
 */
export function _encode_NotificationRequests(
    value: NotificationRequests,
    elGetter: $.ASN1Encoder<NotificationRequests>
) {
    if (!_cached_encoder_for_NotificationRequests) {
        _cached_encoder_for_NotificationRequests = $._encodeBitString;
    }
    return _cached_encoder_for_NotificationRequests(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotificationRequests */

/* eslint-enable */
