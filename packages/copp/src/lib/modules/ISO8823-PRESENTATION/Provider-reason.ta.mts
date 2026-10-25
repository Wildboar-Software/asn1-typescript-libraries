/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Provider_reason
 * @description
 *
 * CPR `provider-reason`: present iff the responding
 * presentation-service-provider (not the PS-user) refuses the
 * connection (X.226 §6.2.4.9). Values marked transient vs permanent in
 * the protocol text. Distinct from ARP `Abort-reason` and from
 * result-list `provider-reason`.
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


/**
 * @summary Provider_reason_reason_not_specified
 * @description Transient (X.226 §6.2.4.9).
 * @constant
 * @type {number}
 */
export const Provider_reason_reason_not_specified: 0 = 0 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: 0 = Provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_temporary_congestion
 * @description Transient (X.226 §6.2.4.9).
 * @constant
 * @type {number}
 */
export const Provider_reason_temporary_congestion: 1 = 1 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_temporary_congestion
 * @constant
 * @type {number}
 */
export const temporary_congestion: 1 = Provider_reason_temporary_congestion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_local_limit_exceeded
 * @description Permanent (X.226 §6.2.4.9).
 * @constant
 * @type {number}
 */
export const Provider_reason_local_limit_exceeded: 2 = 2 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export const local_limit_exceeded: 2 = Provider_reason_local_limit_exceeded; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @description Permanent (X.226 §6.2.4.9).
 * @constant
 * @type {number}
 */
export const Provider_reason_called_presentation_address_unknown: 3 = 3 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export const called_presentation_address_unknown: 3 = Provider_reason_called_presentation_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_protocol_version_not_supported
 * @description Permanent (X.226 §6.2.4.9).
 * @constant
 * @type {number}
 */
export const Provider_reason_protocol_version_not_supported: 4 = 4 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export const protocol_version_not_supported: 4 = Provider_reason_protocol_version_not_supported; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_default_context_not_supported
 * @description
 *
 * Permanent. Responding PPM does not support the named default context
 * (X.226 §6.2.6.2).
 *
 * @constant
 * @type {number}
 */
export const Provider_reason_default_context_not_supported: 5 = 5 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_default_context_not_supported
 * @constant
 * @type {number}
 */
export const default_context_not_supported: 5 = Provider_reason_default_context_not_supported; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_user_data_not_readable
 * @description
 *
 * Permanent. No examined CP PDV encoding uses a supported transfer
 * syntax (X.226 §6.2.5.3).
 *
 * @constant
 * @type {number}
 */
export const Provider_reason_user_data_not_readable: 6 = 6 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_user_data_not_readable
 * @constant
 * @type {number}
 */
export const user_data_not_readable: 6 = Provider_reason_user_data_not_readable; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_no_PSAP_available
 * @description
 *
 * Transient. No PSAP available from the called-presentation-address
 * (X.226 §6.2.4.9).
 *
 * @constant
 * @type {number}
 */
export const Provider_reason_no_PSAP_available: 7 = 7 satisfies Provider_reason; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Provider_reason_no_PSAP_available
 * @constant
 * @type {number}
 */
export const no_PSAP_available: 7 = Provider_reason_no_PSAP_available; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Provider_reason: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Provider_reason: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
