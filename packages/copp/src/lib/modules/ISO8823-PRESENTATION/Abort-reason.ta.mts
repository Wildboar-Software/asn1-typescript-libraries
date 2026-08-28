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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Abort_reason
 * @description
 *
 * ARP `provider-reason` (X.226 §6.4.3.1). Not the CPR connection-refusal
 * `Provider-reason`. For values other than `reason-not-specified` and
 * `unrecognized-ppdu`, `event-identifier` is also present.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-reason  ::=  INTEGER {
 *   reason-not-specified(0), unrecognized-ppdu(1), unexpected-ppdu(2),
 *   unexpected-session-service-primitive(3), unrecognized-ppdu-parameter(4),
 *   unexpected-ppdu-parameter(5), invalid-ppdu-parameter-value(6)}
 * ```
 */
export type Abort_reason = INTEGER;


/**
 * @summary Abort_reason_reason_not_specified
 * @description No further diagnostic. `event-identifier` is not required.
 * @constant
 * @type {number}
 */
export const Abort_reason_reason_not_specified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Abort_reason = Abort_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unrecognized_ppdu
 * @description Received PPDU was not a recognized type (X.226 §6.4.4.2).
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export const unrecognized_ppdu: Abort_reason = Abort_reason_unrecognized_ppdu; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unexpected_ppdu
 * @description Valid PPDU type used out of sequence. `event-identifier` required.
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export const unexpected_ppdu: Abort_reason = Abort_reason_unexpected_ppdu; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @description Unexpected session primitive. `event-identifier` required.
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_session_service_primitive: Abort_reason = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @constant
 * @type {number}
 */
export const unexpected_session_service_primitive: Abort_reason = Abort_reason_unexpected_session_service_primitive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @description Parameter not defined for that PPDU. `event-identifier` required.
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export const unrecognized_ppdu_parameter: Abort_reason = Abort_reason_unrecognized_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @description Parameter not permitted in this state, including unexpected PCI. `event-identifier` required.
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @constant
 * @type {number}
 */
export const unexpected_ppdu_parameter: Abort_reason = Abort_reason_unexpected_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @description Invalid parameter value, or bitstring that is not a valid PDV. `event-identifier` required.
 * @constant
 * @type {number}
 */
export const Abort_reason_invalid_ppdu_parameter_value: Abort_reason = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @constant
 * @type {number}
 */
export const invalid_ppdu_parameter_value: Abort_reason = Abort_reason_invalid_ppdu_parameter_value; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Abort_reason = $._decodeInteger;




export const _encode_Abort_reason = $._encodeInteger;


/* eslint-enable */
