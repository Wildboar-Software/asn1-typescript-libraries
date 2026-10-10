/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCSessionEndCause
 * @description
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
const PTCSessionEndCause_initiaterLeavesSession: PTCSessionEndCause = PTCSessionEndCause.initiaterLeavesSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initiaterLeavesSession
 * @constant
 * @type {number}
 */
export
const initiaterLeavesSession: PTCSessionEndCause = PTCSessionEndCause.initiaterLeavesSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_definedParticipantLeaves
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_definedParticipantLeaves: PTCSessionEndCause = PTCSessionEndCause.definedParticipantLeaves; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary definedParticipantLeaves
 * @constant
 * @type {number}
 */
export
const definedParticipantLeaves: PTCSessionEndCause = PTCSessionEndCause.definedParticipantLeaves; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_numberOfParticipants
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_numberOfParticipants: PTCSessionEndCause = PTCSessionEndCause.numberOfParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfParticipants
 * @constant
 * @type {number}
 */
export
const numberOfParticipants: PTCSessionEndCause = PTCSessionEndCause.numberOfParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_sessionTimerExpired
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_sessionTimerExpired: PTCSessionEndCause = PTCSessionEndCause.sessionTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTimerExpired
 * @constant
 * @type {number}
 */
export
const sessionTimerExpired: PTCSessionEndCause = PTCSessionEndCause.sessionTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_pTCSpeechInactive
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_pTCSpeechInactive: PTCSessionEndCause = PTCSessionEndCause.pTCSpeechInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSpeechInactive
 * @constant
 * @type {number}
 */
export
const pTCSpeechInactive: PTCSessionEndCause = PTCSessionEndCause.pTCSpeechInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCSessionEndCause_allMediaTypesInactive
 * @constant
 * @type {number}
 */
export
const PTCSessionEndCause_allMediaTypesInactive: PTCSessionEndCause = PTCSessionEndCause.allMediaTypesInactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allMediaTypesInactive
 * @constant
 * @type {number}
 */
export
const allMediaTypesInactive: PTCSessionEndCause = PTCSessionEndCause.allMediaTypesInactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionEndCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PTCSessionEndCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PTCSessionEndCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionEndCause, encoded as an ASN.1 Element.
 */
export const _encode_PTCSessionEndCause = $._encodeEnumerated;


/* eslint-enable */
