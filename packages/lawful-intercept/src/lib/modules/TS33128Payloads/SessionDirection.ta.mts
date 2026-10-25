/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionDirection
 * @description
 * 
 * The SessionDirection indicates the direction of the SIP session with regards
 * to the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SessionDirection {
    /**
     * @description
     *
     * The session was initiated by the target.
     *
     * 3GPP TS 33.128, clause 7.12.4.3.2.
     */
    fromTarget = 1,
    /**
     * @description
     *
     * The session was initiated by a party that is not the target.
     *
     * 3GPP TS 33.128, clause 7.12.4.3.2.
     */
    toTarget = 2,
    /**
     * @description
     *
     * The target initiates a session toward itself.
     *
     * 3GPP TS 33.128, clause 7.12.4.3.2.
     */
    combined = 3,
    /**
     * @description
     *
     * The direction of the session cannot be determined.
     *
     * 3GPP TS 33.128, clause 7.12.4.3.2.
     */
    indeterminate = 4,
}

/**
 * @summary SessionDirection
 * @description
 * 
 * The SessionDirection indicates the direction of the SIP session with regards
 * to the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection
 * @description
 * 
 * The SessionDirection indicates the direction of the SIP session with regards
 * to the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionDirection  ::=  ENUMERATED
 * {
 *     fromTarget(1),
 *     toTarget(2),
 *     combined(3),
 *     indeterminate(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SessionDirection = _enum_for_SessionDirection;

/**
 * @summary SessionDirection_fromTarget
 * @description
 *
 * The session was initiated by the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const SessionDirection_fromTarget = SessionDirection.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @description
 *
 * The session was initiated by the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const fromTarget = SessionDirection.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_toTarget
 * @description
 *
 * The session was initiated by a party that is not the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const SessionDirection_toTarget = SessionDirection.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @description
 *
 * The session was initiated by a party that is not the target.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const toTarget = SessionDirection.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_combined
 * @description
 *
 * The target initiates a session toward itself.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const SessionDirection_combined = SessionDirection.combined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary combined
 * @description
 *
 * The target initiates a session toward itself.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const combined = SessionDirection.combined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SessionDirection_indeterminate
 * @description
 *
 * The direction of the session cannot be determined.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const SessionDirection_indeterminate = SessionDirection.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @description
 *
 * The direction of the session cannot be determined.
 *
 * 3GPP TS 33.128, clause 7.12.4.3.2.
 *
 * @constant
 * @type {number}
 */
export
const indeterminate = SessionDirection.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SessionDirection: $.ASN1Decoder<SessionDirection> = $._decodeEnumerated;
export const _encode_SessionDirection: $.ASN1Encoder<SessionDirection> = $._encodeEnumerated;


/* eslint-enable */
