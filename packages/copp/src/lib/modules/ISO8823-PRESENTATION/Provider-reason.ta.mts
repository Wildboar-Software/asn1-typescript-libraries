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

/* START_OF_SYMBOL_DEFINITION Provider_reason */
/**
 * @summary Provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Provider-reason  ::=  INTEGER {
 *   reason-not-specified(0), temporary-congestion(1), local-limit-exceeded(2),
 *   called-presentation-address-unknown(3), protocol-version-not-supported(4),
 *   default-context-not-supported(5), user-data-not-readable(6),
 *   no-PSAP-available(7)}
 * ```
 */
export type Provider_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Provider_reason */

/* START_OF_SYMBOL_DEFINITION Provider_reason_reason_not_specified */
/**
 * @summary Provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Provider_reason_reason_not_specified: Provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_reason_not_specified */

/* START_OF_SYMBOL_DEFINITION reason_not_specified */
/**
 * @summary Provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Provider_reason = Provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reason_not_specified */

/* START_OF_SYMBOL_DEFINITION Provider_reason_temporary_congestion */
/**
 * @summary Provider_reason_temporary_congestion
 * @constant
 * @type {number}
 */
export const Provider_reason_temporary_congestion: Provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_temporary_congestion */

/* START_OF_SYMBOL_DEFINITION temporary_congestion */
/**
 * @summary Provider_reason_temporary_congestion
 * @constant
 * @type {number}
 */
export const temporary_congestion: Provider_reason = Provider_reason_temporary_congestion; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION temporary_congestion */

/* START_OF_SYMBOL_DEFINITION Provider_reason_local_limit_exceeded */
/**
 * @summary Provider_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export const Provider_reason_local_limit_exceeded: Provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_local_limit_exceeded */

/* START_OF_SYMBOL_DEFINITION local_limit_exceeded */
/**
 * @summary Provider_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export const local_limit_exceeded: Provider_reason = Provider_reason_local_limit_exceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION local_limit_exceeded */

/* START_OF_SYMBOL_DEFINITION Provider_reason_called_presentation_address_unknown */
/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export const Provider_reason_called_presentation_address_unknown: Provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_called_presentation_address_unknown */

/* START_OF_SYMBOL_DEFINITION called_presentation_address_unknown */
/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export const called_presentation_address_unknown: Provider_reason = Provider_reason_called_presentation_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION called_presentation_address_unknown */

/* START_OF_SYMBOL_DEFINITION Provider_reason_protocol_version_not_supported */
/**
 * @summary Provider_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export const Provider_reason_protocol_version_not_supported: Provider_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_protocol_version_not_supported */

/* START_OF_SYMBOL_DEFINITION protocol_version_not_supported */
/**
 * @summary Provider_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export const protocol_version_not_supported: Provider_reason = Provider_reason_protocol_version_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION protocol_version_not_supported */

/* START_OF_SYMBOL_DEFINITION Provider_reason_default_context_not_supported */
/**
 * @summary Provider_reason_default_context_not_supported
 * @constant
 * @type {number}
 */
export const Provider_reason_default_context_not_supported: Provider_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_default_context_not_supported */

/* START_OF_SYMBOL_DEFINITION default_context_not_supported */
/**
 * @summary Provider_reason_default_context_not_supported
 * @constant
 * @type {number}
 */
export const default_context_not_supported: Provider_reason = Provider_reason_default_context_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION default_context_not_supported */

/* START_OF_SYMBOL_DEFINITION Provider_reason_user_data_not_readable */
/**
 * @summary Provider_reason_user_data_not_readable
 * @constant
 * @type {number}
 */
export const Provider_reason_user_data_not_readable: Provider_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_user_data_not_readable */

/* START_OF_SYMBOL_DEFINITION user_data_not_readable */
/**
 * @summary Provider_reason_user_data_not_readable
 * @constant
 * @type {number}
 */
export const user_data_not_readable: Provider_reason = Provider_reason_user_data_not_readable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_data_not_readable */

/* START_OF_SYMBOL_DEFINITION Provider_reason_no_PSAP_available */
/**
 * @summary Provider_reason_no_PSAP_available
 * @constant
 * @type {number}
 */
export const Provider_reason_no_PSAP_available: Provider_reason = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_no_PSAP_available */

/* START_OF_SYMBOL_DEFINITION no_PSAP_available */
/**
 * @summary Provider_reason_no_PSAP_available
 * @constant
 * @type {number}
 */
export const no_PSAP_available: Provider_reason = Provider_reason_no_PSAP_available; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_PSAP_available */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Provider_reason */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Provider_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Provider_reason */
export const _decode_Provider_reason = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Provider_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Provider_reason */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Provider_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Provider_reason */
export const _encode_Provider_reason = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Provider_reason */

/* eslint-enable */
