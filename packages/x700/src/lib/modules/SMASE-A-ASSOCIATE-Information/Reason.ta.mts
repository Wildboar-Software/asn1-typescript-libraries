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
 * @summary Reason
 * @description
 *
 * Diagnostic on A-ASSOCIATE response/confirm when SMFU
 * negotiation fails, the proposed set is reduced, or the
 * association is rejected. ITU-T Rec. X.701 (08/97)
 * [A.3.4](https://www.itu.int/rec/T-REC-X.701-199708-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reason  ::=  INTEGER {
 *   smfusNotSupported(0),
 *   -- one or more of the requested SMFUs are not supported
 *   smfuCombinationNotSupported(1),
 *   -- the individual SMFUs are supported, but not
 *   -- in this proposed combination on a single association
 *   smfusRequiredNotAvailable(2),
 *   -- one or more required SMFUs have been negotiated away
 *   smfuNegotiationRefused(3)
 *   -- responder refuses to negotiate SMFUs
 *   -- without explicitly stating why
 *   }
 * ```
 */
export type Reason = INTEGER;

/**
 * @summary Reason_smfusNotSupported
 * @description
 *
 * One or more of the requested SMFUs are not supported.
 * X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const Reason_smfusNotSupported: Reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary smfusNotSupported
 * @description
 *
 * One or more of the requested SMFUs are not supported.
 * X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const smfusNotSupported: Reason = Reason_smfusNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfuCombinationNotSupported
 * @description
 *
 * Each requested SMFU is supported, but not in this
 * combination on a single association. X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const Reason_smfuCombinationNotSupported: Reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary smfuCombinationNotSupported
 * @description
 *
 * Each requested SMFU is supported, but not in this
 * combination on a single association. X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const smfuCombinationNotSupported: Reason = Reason_smfuCombinationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfusRequiredNotAvailable
 * @description
 *
 * One or more required SMFUs were negotiated away (responder
 * returned a proper subset that dropped a required unit).
 * X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const Reason_smfusRequiredNotAvailable: Reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary smfusRequiredNotAvailable
 * @description
 *
 * One or more required SMFUs were negotiated away (responder
 * returned a proper subset that dropped a required unit).
 * X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const smfusRequiredNotAvailable: Reason = Reason_smfusRequiredNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfuNegotiationRefused
 * @description
 *
 * Responder refuses to negotiate SMFUs without stating why.
 * X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const Reason_smfuNegotiationRefused: Reason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary smfuNegotiationRefused
 * @description
 *
 * Responder refuses to negotiate SMFUs without stating why.
 * X.701 A.3.4.
 *
 * @constant
 * @type {number}
 */
export const smfuNegotiationRefused: Reason = Reason_smfuNegotiationRefused; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Reason = $._decodeInteger;


export const _encode_Reason = $._encodeInteger;


/* eslint-enable */
