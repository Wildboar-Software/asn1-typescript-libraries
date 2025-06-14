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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus */
/**
 * @summary SubmittedIPNStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmittedIPNStatus  ::=  INTEGER {
 *   no-ipn-requested(0), nrn-requested(5), nrn-with-ipm-return-requested(10),
 *   rn-requested(15), rn-with-ipm-return-requested(20), ipm-auto-forwarded(25),
 *   ipm-discarded(30), rn-sent(35)}
 * ```
 */
export type SubmittedIPNStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_no_ipn_requested */
/**
 * @summary SubmittedIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_no_ipn_requested: SubmittedIPNStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_no_ipn_requested */

/* START_OF_SYMBOL_DEFINITION no_ipn_requested */
/**
 * @summary SubmittedIPNStatus_no_ipn_requested
 * @constant
 * @type {number}
 */
export const no_ipn_requested: SubmittedIPNStatus = SubmittedIPNStatus_no_ipn_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_ipn_requested */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_nrn_requested */
/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_requested: SubmittedIPNStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_nrn_requested */

/* START_OF_SYMBOL_DEFINITION nrn_requested */
/**
 * @summary SubmittedIPNStatus_nrn_requested
 * @constant
 * @type {number}
 */
export const nrn_requested: SubmittedIPNStatus = SubmittedIPNStatus_nrn_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nrn_requested */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_nrn_with_ipm_return_requested */
/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_nrn_with_ipm_return_requested: SubmittedIPNStatus = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_nrn_with_ipm_return_requested */

/* START_OF_SYMBOL_DEFINITION nrn_with_ipm_return_requested */
/**
 * @summary SubmittedIPNStatus_nrn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const nrn_with_ipm_return_requested: SubmittedIPNStatus = SubmittedIPNStatus_nrn_with_ipm_return_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nrn_with_ipm_return_requested */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_rn_requested */
/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_requested: SubmittedIPNStatus = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_rn_requested */

/* START_OF_SYMBOL_DEFINITION rn_requested */
/**
 * @summary SubmittedIPNStatus_rn_requested
 * @constant
 * @type {number}
 */
export const rn_requested: SubmittedIPNStatus = SubmittedIPNStatus_rn_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rn_requested */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_rn_with_ipm_return_requested */
/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_with_ipm_return_requested: SubmittedIPNStatus = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_rn_with_ipm_return_requested */

/* START_OF_SYMBOL_DEFINITION rn_with_ipm_return_requested */
/**
 * @summary SubmittedIPNStatus_rn_with_ipm_return_requested
 * @constant
 * @type {number}
 */
export const rn_with_ipm_return_requested: SubmittedIPNStatus = SubmittedIPNStatus_rn_with_ipm_return_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rn_with_ipm_return_requested */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_ipm_auto_forwarded */
/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_auto_forwarded: SubmittedIPNStatus = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_ipm_auto_forwarded */

/* START_OF_SYMBOL_DEFINITION ipm_auto_forwarded */
/**
 * @summary SubmittedIPNStatus_ipm_auto_forwarded
 * @constant
 * @type {number}
 */
export const ipm_auto_forwarded: SubmittedIPNStatus = SubmittedIPNStatus_ipm_auto_forwarded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_auto_forwarded */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_ipm_discarded */
/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_ipm_discarded: SubmittedIPNStatus = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_ipm_discarded */

/* START_OF_SYMBOL_DEFINITION ipm_discarded */
/**
 * @summary SubmittedIPNStatus_ipm_discarded
 * @constant
 * @type {number}
 */
export const ipm_discarded: SubmittedIPNStatus = SubmittedIPNStatus_ipm_discarded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ipm_discarded */

/* START_OF_SYMBOL_DEFINITION SubmittedIPNStatus_rn_sent */
/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const SubmittedIPNStatus_rn_sent: SubmittedIPNStatus = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SubmittedIPNStatus_rn_sent */

/* START_OF_SYMBOL_DEFINITION rn_sent */
/**
 * @summary SubmittedIPNStatus_rn_sent
 * @constant
 * @type {number}
 */
export const rn_sent: SubmittedIPNStatus = SubmittedIPNStatus_rn_sent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rn_sent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmittedIPNStatus */
let _cached_decoder_for_SubmittedIPNStatus: $.ASN1Decoder<SubmittedIPNStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmittedIPNStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SubmittedIPNStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmittedIPNStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmittedIPNStatus} The decoded data structure.
 */
export function _decode_SubmittedIPNStatus(el: _Element) {
    if (!_cached_decoder_for_SubmittedIPNStatus) {
        _cached_decoder_for_SubmittedIPNStatus = $._decodeInteger;
    }
    return _cached_decoder_for_SubmittedIPNStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmittedIPNStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmittedIPNStatus */
let _cached_encoder_for_SubmittedIPNStatus: $.ASN1Encoder<SubmittedIPNStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmittedIPNStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SubmittedIPNStatus */
/**
 * @summary Encodes a(n) SubmittedIPNStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmittedIPNStatus, encoded as an ASN.1 Element.
 */
export function _encode_SubmittedIPNStatus(
    value: SubmittedIPNStatus,
    elGetter: $.ASN1Encoder<SubmittedIPNStatus>
) {
    if (!_cached_encoder_for_SubmittedIPNStatus) {
        _cached_encoder_for_SubmittedIPNStatus = $._encodeInteger;
    }
    return _cached_encoder_for_SubmittedIPNStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmittedIPNStatus */

/* eslint-enable */
