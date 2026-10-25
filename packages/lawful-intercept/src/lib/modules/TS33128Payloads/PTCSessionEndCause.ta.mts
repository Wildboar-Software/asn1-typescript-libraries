/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCSessionEndCause
 * @description
 * 
 * Shall identify the reason for the PTC session end based on the following
 * events per OMA-TS-PoC_System_Description-V2_1-20110802-A [56] clause 4.5.7: -
 * PTC session initiator leaves session. - Defined participant leaves session. -
 * Number of participants less than certain value. - PTC Session timer expired.
 * - PTC Speech inactive for specified time. - All Media types inactive for
 * specified time.
 *
 * 3GPP TS 33.128, clause 7.5.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEndCause   ::=  ENUMERATED
 * {
 *     initiaterLeavesSession(1),
 *     definedParticipantLeaves(2),
 *     numberOfParticipants(3),
 *     sessionTimerExpired(4),
 *     pTCSpeechInactive(5),
 *     allMediaTypesInactive(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCSessionEndCause {
    initiaterLeavesSession = 1,
    definedParticipantLeaves = 2,
    numberOfParticipants = 3,
    sessionTimerExpired = 4,
    pTCSpeechInactive = 5,
    allMediaTypesInactive = 6,
}

/**
 * @summary PTCSessionEndCause
 * @description
 * 
 * Shall identify the reason for the PTC session end based on the following
 * events per OMA-TS-PoC_System_Description-V2_1-20110802-A [56] clause 4.5.7: -
 * PTC session initiator leaves session. - Defined participant leaves session. -
 * Number of participants less than certain value. - PTC Session timer expired.
 * - PTC Speech inactive for specified time. - All Media types inactive for
 * specified time.
 *
 * 3GPP TS 33.128, clause 7.5.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEndCause   ::=  ENUMERATED
 * {
 *     initiaterLeavesSession(1),
 *     definedParticipantLeaves(2),
 *     numberOfParticipants(3),
 *     sessionTimerExpired(4),
 *     pTCSpeechInactive(5),
 *     allMediaTypesInactive(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCSessionEndCause = _enum_for_PTCSessionEndCause;

/**
 * @summary PTCSessionEndCause
 * @description
 * 
 * Shall identify the reason for the PTC session end based on the following
 * events per OMA-TS-PoC_System_Description-V2_1-20110802-A [56] clause 4.5.7: -
 * PTC session initiator leaves session. - Defined participant leaves session. -
 * Number of participants less than certain value. - PTC Session timer expired.
 * - PTC Speech inactive for specified time. - All Media types inactive for
 * specified time.
 *
 * 3GPP TS 33.128, clause 7.5.2.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEndCause   ::=  ENUMERATED
 * {
 *     initiaterLeavesSession(1),
 *     definedParticipantLeaves(2),
 *     numberOfParticipants(3),
 *     sessionTimerExpired(4),
 *     pTCSpeechInactive(5),
 *     allMediaTypesInactive(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCSessionEndCause = _enum_for_PTCSessionEndCause;

/**
 * @summary PTCSessionEndCause_initiaterLeavesSession
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_initiaterLeavesSession = PTCSessionEndCause.initiaterLeavesSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initiaterLeavesSession
 * @constant
 * @type {number}
 */
export
const initiaterLeavesSession = PTCSessionEndCause.initiaterLeavesSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_definedParticipantLeaves
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_definedParticipantLeaves = PTCSessionEndCause.definedParticipantLeaves; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary definedParticipantLeaves
 * @constant
 * @type {number}
 */
export
const definedParticipantLeaves = PTCSessionEndCause.definedParticipantLeaves; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_numberOfParticipants
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_numberOfParticipants = PTCSessionEndCause.numberOfParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfParticipants
 * @constant
 * @type {number}
 */
export
const numberOfParticipants = PTCSessionEndCause.numberOfParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_sessionTimerExpired
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_sessionTimerExpired = PTCSessionEndCause.sessionTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTimerExpired
 * @constant
 * @type {number}
 */
export
const sessionTimerExpired = PTCSessionEndCause.sessionTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_pTCSpeechInactive
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_pTCSpeechInactive = PTCSessionEndCause.pTCSpeechInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSpeechInactive
 * @constant
 * @type {number}
 */
export
const pTCSpeechInactive = PTCSessionEndCause.pTCSpeechInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_allMediaTypesInactive
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_allMediaTypesInactive = PTCSessionEndCause.allMediaTypesInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allMediaTypesInactive
 * @constant
 * @type {number}
 */
export
const allMediaTypesInactive = PTCSessionEndCause.allMediaTypesInactive; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCSessionEndCause: $.ASN1Decoder<PTCSessionEndCause> = $._decodeEnumerated;
export const _encode_PTCSessionEndCause: $.ASN1Encoder<PTCSessionEndCause> = $._encodeEnumerated;


/* eslint-enable */
