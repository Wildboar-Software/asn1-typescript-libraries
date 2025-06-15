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

/* START_OF_SYMBOL_DEFINITION Release_request_reason */
/**
 * @summary Release_request_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0), urgent(1), user-defined(30)
 * }
 * ```
 */
export type Release_request_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Release_request_reason */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_urgent */
/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const Release_request_reason_urgent: Release_request_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_urgent */

/* START_OF_SYMBOL_DEFINITION urgent */
/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const urgent: Release_request_reason = Release_request_reason_urgent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION urgent */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_user_defined */
/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_request_reason_user_defined: Release_request_reason = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_user_defined */

/* START_OF_SYMBOL_DEFINITION user_defined */
/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined: Release_request_reason = Release_request_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_defined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Release_request_reason */
export const _decode_Release_request_reason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Release_request_reason */
export const _encode_Release_request_reason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Release_request_reason */

/* eslint-enable */
