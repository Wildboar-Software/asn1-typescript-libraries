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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Reason
 * @description
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
 * @constant
 * @type {number}
 */
export const Reason_smfusNotSupported: Reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfusNotSupported
 * @constant
 * @type {number}
 */
export const smfusNotSupported: Reason = Reason_smfusNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfuCombinationNotSupported
 * @constant
 * @type {number}
 */
export const Reason_smfuCombinationNotSupported: Reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfuCombinationNotSupported
 * @constant
 * @type {number}
 */
export const smfuCombinationNotSupported: Reason = Reason_smfuCombinationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfusRequiredNotAvailable
 * @constant
 * @type {number}
 */
export const Reason_smfusRequiredNotAvailable: Reason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfusRequiredNotAvailable
 * @constant
 * @type {number}
 */
export const smfusRequiredNotAvailable: Reason = Reason_smfusRequiredNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfuNegotiationRefused
 * @constant
 * @type {number}
 */
export const Reason_smfuNegotiationRefused: Reason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Reason_smfuNegotiationRefused
 * @constant
 * @type {number}
 */
export const smfuNegotiationRefused: Reason = Reason_smfuNegotiationRefused; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Reason = $._decodeInteger;


export const _encode_Reason = $._encodeInteger;


/* eslint-enable */
