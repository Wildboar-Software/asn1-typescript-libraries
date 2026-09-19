/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PTCType {
    pTCStartofInterception = 1,
    pTCServinSystem = 2,
    pTCSessionInitiation = 3,
    pTCSessionAbandonEndRecord = 4,
    pTCSessionStartContinueRecord = 5,
    pTCSessionEndRecord = 6,
    pTCPre_EstablishedSessionSessionRecord = 7,
    pTCInstantPersonalAlert = 8,
    pTCPartyJoin = 9,
    pTCPartyDrop = 10,
    pTCPartyHold_RetrieveRecord = 11,
    pTCMediaModification = 12,
    pTCGroupAdvertizement = 13,
    pTCFloorConttrol = 14,
    pTCTargetPressence = 15,
    pTCAssociatePressence = 16,
    pTCListManagementEvents = 17,
    pTCAccessPolicyEvents = 18,
    pTCMediaTypeNotification = 19,
    pTCGroupCallRequest = 20,
    pTCGroupCallCancel = 21,
    pTCGroupCallResponse = 22,
    pTCGroupCallInterrogate = 23,
    pTCMCPTTImminentGroupCall = 24,
    pTCCC = 25,
    pTCRegistration = 26,
    pTCEncryption = 27,
}

/**
 * @summary PTCType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCType  ::=  ENUMERATED
 * {
 *  pTCStartofInterception (1),
 *  pTCServinSystem (2),
 *  pTCSessionInitiation (3),
 *  pTCSessionAbandonEndRecord (4),
 *  pTCSessionStartContinueRecord (5),
 *  pTCSessionEndRecord (6),
 *  pTCPre-EstablishedSessionSessionRecord (7),
 *  pTCInstantPersonalAlert (8),
 *  pTCPartyJoin (9),
 *  pTCPartyDrop (10),
 *  pTCPartyHold-RetrieveRecord (11),
 *  pTCMediaModification (12),
 *  pTCGroupAdvertizement (13),
 *  pTCFloorConttrol (14),
 *  pTCTargetPressence (15),
 *  pTCAssociatePressence (16),
 *  pTCListManagementEvents (17),
 *  pTCAccessPolicyEvents (18),
 *  pTCMediaTypeNotification (19),
 *  pTCGroupCallRequest (20),
 *  pTCGroupCallCancel (21),
 *  pTCGroupCallResponse (22),
 *  pTCGroupCallInterrogate (23),
 *  pTCMCPTTImminentGroupCall (24),
 *  pTCCC (25),
 *  pTCRegistration (26),
 *  pTCEncryption (27),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCType = _enum_for_PTCType | ENUMERATED;

/**
 * @summary PTCType_pTCStartofInterception
 * @constant
 * @type {number}
 */
export
const PTCType_pTCStartofInterception: PTCType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCStartofInterception
 * @constant
 * @type {number}
 */
export
const pTCStartofInterception: PTCType = PTCType_pTCStartofInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCServinSystem
 * @constant
 * @type {number}
 */
export
const PTCType_pTCServinSystem: PTCType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCServinSystem
 * @constant
 * @type {number}
 */
export
const pTCServinSystem: PTCType = PTCType_pTCServinSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionInitiation
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionInitiation: PTCType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionInitiation
 * @constant
 * @type {number}
 */
export
const pTCSessionInitiation: PTCType = PTCType_pTCSessionInitiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionAbandonEndRecord
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionAbandonEndRecord: PTCType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionAbandonEndRecord
 * @constant
 * @type {number}
 */
export
const pTCSessionAbandonEndRecord: PTCType = PTCType_pTCSessionAbandonEndRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionStartContinueRecord
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionStartContinueRecord: PTCType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionStartContinueRecord
 * @constant
 * @type {number}
 */
export
const pTCSessionStartContinueRecord: PTCType = PTCType_pTCSessionStartContinueRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCSessionEndRecord
 * @constant
 * @type {number}
 */
export
const PTCType_pTCSessionEndRecord: PTCType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCSessionEndRecord
 * @constant
 * @type {number}
 */
export
const pTCSessionEndRecord: PTCType = PTCType_pTCSessionEndRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPre_EstablishedSessionSessionRecord
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPre_EstablishedSessionSessionRecord: PTCType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPre_EstablishedSessionSessionRecord
 * @constant
 * @type {number}
 */
export
const pTCPre_EstablishedSessionSessionRecord: PTCType = PTCType_pTCPre_EstablishedSessionSessionRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCInstantPersonalAlert
 * @constant
 * @type {number}
 */
export
const PTCType_pTCInstantPersonalAlert: PTCType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCInstantPersonalAlert
 * @constant
 * @type {number}
 */
export
const pTCInstantPersonalAlert: PTCType = PTCType_pTCInstantPersonalAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyJoin
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyJoin: PTCType = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyJoin
 * @constant
 * @type {number}
 */
export
const pTCPartyJoin: PTCType = PTCType_pTCPartyJoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyDrop
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyDrop: PTCType = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyDrop
 * @constant
 * @type {number}
 */
export
const pTCPartyDrop: PTCType = PTCType_pTCPartyDrop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCPartyHold_RetrieveRecord
 * @constant
 * @type {number}
 */
export
const PTCType_pTCPartyHold_RetrieveRecord: PTCType = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCPartyHold_RetrieveRecord
 * @constant
 * @type {number}
 */
export
const pTCPartyHold_RetrieveRecord: PTCType = PTCType_pTCPartyHold_RetrieveRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMediaModification
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMediaModification: PTCType = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMediaModification
 * @constant
 * @type {number}
 */
export
const pTCMediaModification: PTCType = PTCType_pTCMediaModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupAdvertizement
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupAdvertizement: PTCType = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupAdvertizement
 * @constant
 * @type {number}
 */
export
const pTCGroupAdvertizement: PTCType = PTCType_pTCGroupAdvertizement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCFloorConttrol
 * @constant
 * @type {number}
 */
export
const PTCType_pTCFloorConttrol: PTCType = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCFloorConttrol
 * @constant
 * @type {number}
 */
export
const pTCFloorConttrol: PTCType = PTCType_pTCFloorConttrol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCTargetPressence
 * @constant
 * @type {number}
 */
export
const PTCType_pTCTargetPressence: PTCType = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCTargetPressence
 * @constant
 * @type {number}
 */
export
const pTCTargetPressence: PTCType = PTCType_pTCTargetPressence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCAssociatePressence
 * @constant
 * @type {number}
 */
export
const PTCType_pTCAssociatePressence: PTCType = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCAssociatePressence
 * @constant
 * @type {number}
 */
export
const pTCAssociatePressence: PTCType = PTCType_pTCAssociatePressence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCListManagementEvents
 * @constant
 * @type {number}
 */
export
const PTCType_pTCListManagementEvents: PTCType = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCListManagementEvents
 * @constant
 * @type {number}
 */
export
const pTCListManagementEvents: PTCType = PTCType_pTCListManagementEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCAccessPolicyEvents
 * @constant
 * @type {number}
 */
export
const PTCType_pTCAccessPolicyEvents: PTCType = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCAccessPolicyEvents
 * @constant
 * @type {number}
 */
export
const pTCAccessPolicyEvents: PTCType = PTCType_pTCAccessPolicyEvents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMediaTypeNotification
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMediaTypeNotification: PTCType = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMediaTypeNotification
 * @constant
 * @type {number}
 */
export
const pTCMediaTypeNotification: PTCType = PTCType_pTCMediaTypeNotification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallRequest
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallRequest: PTCType = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallRequest
 * @constant
 * @type {number}
 */
export
const pTCGroupCallRequest: PTCType = PTCType_pTCGroupCallRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallCancel
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallCancel: PTCType = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallCancel
 * @constant
 * @type {number}
 */
export
const pTCGroupCallCancel: PTCType = PTCType_pTCGroupCallCancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallResponse
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallResponse: PTCType = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallResponse
 * @constant
 * @type {number}
 */
export
const pTCGroupCallResponse: PTCType = PTCType_pTCGroupCallResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCGroupCallInterrogate
 * @constant
 * @type {number}
 */
export
const PTCType_pTCGroupCallInterrogate: PTCType = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCGroupCallInterrogate
 * @constant
 * @type {number}
 */
export
const pTCGroupCallInterrogate: PTCType = PTCType_pTCGroupCallInterrogate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCMCPTTImminentGroupCall
 * @constant
 * @type {number}
 */
export
const PTCType_pTCMCPTTImminentGroupCall: PTCType = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCMCPTTImminentGroupCall
 * @constant
 * @type {number}
 */
export
const pTCMCPTTImminentGroupCall: PTCType = PTCType_pTCMCPTTImminentGroupCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCCC
 * @constant
 * @type {number}
 */
export
const PTCType_pTCCC: PTCType = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCCC
 * @constant
 * @type {number}
 */
export
const pTCCC: PTCType = PTCType_pTCCC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCRegistration
 * @constant
 * @type {number}
 */
export
const PTCType_pTCRegistration: PTCType = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCRegistration
 * @constant
 * @type {number}
 */
export
const pTCRegistration: PTCType = PTCType_pTCRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCType_pTCEncryption
 * @constant
 * @type {number}
 */
export
const PTCType_pTCEncryption: PTCType = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCEncryption
 * @constant
 * @type {number}
 */
export
const pTCEncryption: PTCType = PTCType_pTCEncryption; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCType: $.ASN1Decoder<PTCType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCType (el: _Element): PTCType {
    if (!_cached_decoder_for_PTCType) { _cached_decoder_for_PTCType = $._decodeEnumerated; }
    return _cached_decoder_for_PTCType(el);
}

let _cached_encoder_for_PTCType: $.ASN1Encoder<PTCType> | null = null;

/**
 * @summary Encodes a(n) PTCType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCType, encoded as an ASN.1 Element.
 */
export
function _encode_PTCType (value: PTCType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCType) { _cached_encoder_for_PTCType = $._encodeEnumerated; }
    return _cached_encoder_for_PTCType(value, elGetter);
}


/* eslint-enable */
