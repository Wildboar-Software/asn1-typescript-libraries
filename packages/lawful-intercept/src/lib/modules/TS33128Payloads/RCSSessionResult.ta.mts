/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionResult
 * @description
 * 
 * The RCSSessionResult shall be set to indicate whether the addition, removal
 * or modification of the leg has been requested or completed.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionResult {
    /**
     * @description
     *
     * Shall be selected if the message that triggered the event was a SIP
     * INVITE for a new SIP Session leg.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.6.
     */
    newLegRequested = 1,
    /**
     * @description
     *
     * Shall be selected if the message that triggered the event was a 200 OK
     * response to a SIP INVITE for a new SIP Session leg.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.6.
     */
    newLegEstablished = 2,
    /**
     * @description
     *
     * Shall be selected if the message that triggered the event was a SIP
     * INVITE for an existing SIP Session leg.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.6.
     */
    legModificationRequested = 3,
    /**
     * @description
     *
     * Shall be selected if the message that triggered the event was a 200 OK
     * response to a SIP INVITE for an existing SIP Session leg.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.6.
     */
    legModificationComplete = 4,
    /**
     * @description
     *
     * Shall be selected if the message that triggered the event was a SIP BYE.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.6.
     */
    legRemovalRequest = 5,
    /**
     * @description
     *
     * Shall be selected if the message that triggered the event was a SIP 200
     * OK response to a SIP BYE or an error response to a SIP INVITE.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.6.
     */
    legRemovalComplete = 6,
}

/**
 * @summary RCSSessionResult
 * @description
 * 
 * The RCSSessionResult shall be set to indicate whether the addition, removal
 * or modification of the leg has been requested or completed.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionResult = _enum_for_RCSSessionResult;

/**
 * @summary RCSSessionResult
 * @description
 * 
 * The RCSSessionResult shall be set to indicate whether the addition, removal
 * or modification of the leg has been requested or completed.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionResult  ::=  ENUMERATED
 * {
 *     newLegRequested(1),
 *     newLegEstablished(2),
 *     legModificationRequested(3),
 *     legModificationComplete(4),
 *     legRemovalRequest(5),
 *     legRemovalComplete(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionResult = _enum_for_RCSSessionResult;

/**
 * @summary RCSSessionResult_newLegRequested
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP INVITE
 * for a new SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_newLegRequested = RCSSessionResult.newLegRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newLegRequested
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP INVITE
 * for a new SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const newLegRequested = RCSSessionResult.newLegRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_newLegEstablished
 * @description
 *
 * Shall be selected if the message that triggered the event was a 200 OK
 * response to a SIP INVITE for a new SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_newLegEstablished = RCSSessionResult.newLegEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newLegEstablished
 * @description
 *
 * Shall be selected if the message that triggered the event was a 200 OK
 * response to a SIP INVITE for a new SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const newLegEstablished = RCSSessionResult.newLegEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legModificationRequested
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP INVITE
 * for an existing SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legModificationRequested = RCSSessionResult.legModificationRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legModificationRequested
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP INVITE
 * for an existing SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const legModificationRequested = RCSSessionResult.legModificationRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legModificationComplete
 * @description
 *
 * Shall be selected if the message that triggered the event was a 200 OK
 * response to a SIP INVITE for an existing SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legModificationComplete = RCSSessionResult.legModificationComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legModificationComplete
 * @description
 *
 * Shall be selected if the message that triggered the event was a 200 OK
 * response to a SIP INVITE for an existing SIP Session leg.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const legModificationComplete = RCSSessionResult.legModificationComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legRemovalRequest
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP BYE.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legRemovalRequest = RCSSessionResult.legRemovalRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legRemovalRequest
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP BYE.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const legRemovalRequest = RCSSessionResult.legRemovalRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionResult_legRemovalComplete
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP 200 OK
 * response to a SIP BYE or an error response to a SIP INVITE.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const RCSSessionResult_legRemovalComplete = RCSSessionResult.legRemovalComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary legRemovalComplete
 * @description
 *
 * Shall be selected if the message that triggered the event was a SIP 200 OK
 * response to a SIP BYE or an error response to a SIP INVITE.
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.6.
 *
 * @constant
 * @type {number}
 */
export
const legRemovalComplete = RCSSessionResult.legRemovalComplete; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RCSSessionResult: $.ASN1Decoder<RCSSessionResult> = $._decodeEnumerated;
export const _encode_RCSSessionResult: $.ASN1Encoder<RCSSessionResult> = $._encodeEnumerated;


/* eslint-enable */
