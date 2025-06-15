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

/* START_OF_SYMBOL_DEFINITION Status */
/**
 * @summary Status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Status  ::=  INTEGER {
 *   operatingWithinNominals(0), replyTimeout(1), badReplyFormat(2),
 *   hardwareSoftwareFault(3), propagationFailure(4), badDateFormatOrValue(5),
 *   badTimeFormatOrValue(6)}
 * ```
 */
export type Status = INTEGER;
/* END_OF_SYMBOL_DEFINITION Status */

/* START_OF_SYMBOL_DEFINITION Status_operatingWithinNominals */
/**
 * @summary Status_operatingWithinNominals
 * @constant
 * @type {number}
 */
export const Status_operatingWithinNominals: Status = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_operatingWithinNominals */

/* START_OF_SYMBOL_DEFINITION operatingWithinNominals */
/**
 * @summary Status_operatingWithinNominals
 * @constant
 * @type {number}
 */
export const operatingWithinNominals: Status = Status_operatingWithinNominals; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION operatingWithinNominals */

/* START_OF_SYMBOL_DEFINITION Status_replyTimeout */
/**
 * @summary Status_replyTimeout
 * @constant
 * @type {number}
 */
export const Status_replyTimeout: Status = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_replyTimeout */

/* START_OF_SYMBOL_DEFINITION replyTimeout */
/**
 * @summary Status_replyTimeout
 * @constant
 * @type {number}
 */
export const replyTimeout: Status = Status_replyTimeout; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION replyTimeout */

/* START_OF_SYMBOL_DEFINITION Status_badReplyFormat */
/**
 * @summary Status_badReplyFormat
 * @constant
 * @type {number}
 */
export const Status_badReplyFormat: Status = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_badReplyFormat */

/* START_OF_SYMBOL_DEFINITION badReplyFormat */
/**
 * @summary Status_badReplyFormat
 * @constant
 * @type {number}
 */
export const badReplyFormat: Status = Status_badReplyFormat; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION badReplyFormat */

/* START_OF_SYMBOL_DEFINITION Status_hardwareSoftwareFault */
/**
 * @summary Status_hardwareSoftwareFault
 * @constant
 * @type {number}
 */
export const Status_hardwareSoftwareFault: Status = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_hardwareSoftwareFault */

/* START_OF_SYMBOL_DEFINITION hardwareSoftwareFault */
/**
 * @summary Status_hardwareSoftwareFault
 * @constant
 * @type {number}
 */
export const hardwareSoftwareFault: Status = Status_hardwareSoftwareFault; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION hardwareSoftwareFault */

/* START_OF_SYMBOL_DEFINITION Status_propagationFailure */
/**
 * @summary Status_propagationFailure
 * @constant
 * @type {number}
 */
export const Status_propagationFailure: Status = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_propagationFailure */

/* START_OF_SYMBOL_DEFINITION propagationFailure */
/**
 * @summary Status_propagationFailure
 * @constant
 * @type {number}
 */
export const propagationFailure: Status = Status_propagationFailure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION propagationFailure */

/* START_OF_SYMBOL_DEFINITION Status_badDateFormatOrValue */
/**
 * @summary Status_badDateFormatOrValue
 * @constant
 * @type {number}
 */
export const Status_badDateFormatOrValue: Status = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_badDateFormatOrValue */

/* START_OF_SYMBOL_DEFINITION badDateFormatOrValue */
/**
 * @summary Status_badDateFormatOrValue
 * @constant
 * @type {number}
 */
export const badDateFormatOrValue: Status = Status_badDateFormatOrValue; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION badDateFormatOrValue */

/* START_OF_SYMBOL_DEFINITION Status_badTimeFormatOrValue */
/**
 * @summary Status_badTimeFormatOrValue
 * @constant
 * @type {number}
 */
export const Status_badTimeFormatOrValue: Status = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_badTimeFormatOrValue */

/* START_OF_SYMBOL_DEFINITION badTimeFormatOrValue */
/**
 * @summary Status_badTimeFormatOrValue
 * @constant
 * @type {number}
 */
export const badTimeFormatOrValue: Status = Status_badTimeFormatOrValue; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION badTimeFormatOrValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Status */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Status */

/* START_OF_SYMBOL_DEFINITION _decode_Status */
export const _decode_Status = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Status */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Status */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Status */

/* START_OF_SYMBOL_DEFINITION _encode_Status */
export const _encode_Status = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Status */

/* eslint-enable */
