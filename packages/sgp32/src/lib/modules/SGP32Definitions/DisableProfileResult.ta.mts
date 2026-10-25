/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableProfileResult
 * @description
 *
 * Result of the disable PSMO after the signed eUICC Package is verified. At
 * most one disable command occurs in an eUICC Package. If a disable or an
 * enable was already processed in the same package, the ISD-R indicates
 * failure and continues to the result step. A disable is followed by an enable
 * in the same package when connectivity is to be kept. The signed result is
 * stored on the eUICC.
 *
 * SGP.32 v1.2, sections 2.11.1.1, 2.11.2.1, and 3.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInEnabledState(2),
 *     disallowedByPolicy(3),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type DisableProfileResult = INTEGER;

/**
 * @summary DisableProfileResult_ok
 * @description
 *
 * The target Profile was marked to be disabled.
 *
 * SGP.32 v1.2, section 3.4.2.
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_ok: DisableProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_ok
 * @description
 *
 * The target Profile was marked to be disabled (SGP.32 v1.2, section 3.4.2).
 * @constant
 * @type {number}
 */
export
const ok: DisableProfileResult = DisableProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_iccidOrAidNotFound
 * @description
 *
 * Section 3.4.2 indicates an unnamed failure when the target ICCID matches no
 * Profile. SGP.32 v1.2 does not further define this code. Annex C.
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_iccidOrAidNotFound: DisableProfileResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_iccidOrAidNotFound
 * @description
 *
 * SGP.32 v1.2 does not further define this disable-PSMO code (Annex C).
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DisableProfileResult = DisableProfileResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_profileNotInEnabledState
 * @description
 *
 * Section 3.4.2 indicates an unnamed failure when the target Profile is
 * outside the Enabled state. SGP.32 v1.2 does not further define this code.
 * Annex C.
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_profileNotInEnabledState: DisableProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_profileNotInEnabledState
 * @description
 *
 * SGP.32 v1.2 does not further define this disable-PSMO code (Annex C).
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableProfileResult = DisableProfileResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_disallowedByPolicy
 * @description
 *
 * SGP.32 v1.2 lists this code on the disable PSMO result and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_disallowedByPolicy: DisableProfileResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_disallowedByPolicy
 * @description
 *
 * Listed on the disable PSMO; SGP.32 v1.2 does not further define it (Annex
 * C).
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DisableProfileResult = DisableProfileResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_catBusy
 * @description
 *
 * SGP.32 v1.2 lists this code on the disable PSMO result and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_catBusy: DisableProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_catBusy
 * @description
 *
 * Listed on the disable PSMO; SGP.32 v1.2 does not further define it (Annex
 * C).
 * @constant
 * @type {number}
 */
export
const catBusy: DisableProfileResult = DisableProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on the disable PSMO result and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_undefinedError: DisableProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_undefinedError
 * @description
 *
 * Listed on the disable PSMO; SGP.32 v1.2 does not further define it (Annex
 * C).
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableProfileResult = DisableProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DisableProfileResult: $.ASN1Decoder<DisableProfileResult> = $._decodeInteger;
export const _encode_DisableProfileResult: $.ASN1Encoder<DisableProfileResult> = $._encodeInteger;


/* eslint-enable */
