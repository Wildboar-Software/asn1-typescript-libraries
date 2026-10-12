/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AudibleSignal {
    notUsed = 0,
    dialTone = 1,
    recallDialTone = 2,
    ringbackTone = 3,
    reorderTone = 4,
    busyTone = 5,
    confirmationTone = 6,
    expensiveRouteTone = 7,
    messageWaitingTone = 8,
    receiverOffHookTone = 9,
    specialInfoTone = 10,
    denialTone = 11,
    interceptTone = 12,
    answerTone = 13,
    tonesOff = 14,
    pipTone = 15,
    abbreviatedIntercept = 16,
    abbreviatedCongestion = 17,
    warningTone = 18,
    dialToneBurst = 19,
    numberUnObtainableTone = 20,
    authenticationFailureTone = 21,
}

/**
 * @summary AudibleSignal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AudibleSignal  ::=  ENUMERATED {
 *     notUsed (0), -- Reserved
 *     dialTone (1),
 *     recallDialTone (2), -- recall dial tone, stutter dial tone
 *     ringbackTone (3), -- tone indicates ringing at called party
 *     -- end
 *     reorderTone (4), -- reorder tone, congestion tone
 *     busyTone (5),
 *     confirmationTone (6), -- tone confirms receipt and processing of
 *     -- request
 *     expensiveRouteTone (7), -- tone indicates outgoing route is
 *     -- expensive
 *     messageWaitingTone (8),
 *     receiverOffHookTone (9), -- receiver off-hook tone, off-hook warning
 *     -- tone
 *     specialInfoTone (10), -- tone indicates call sent to announcement
 *     denialTone (11), -- tone indicates denial of feature request
 *     interceptTone (12), -- wireless intercept/mobile reorder tone
 *     answerTone (13), -- wireless service tone
 *     tonesOff (14), -- wireless service tone
 *     pipTone (15), -- wireless service tone
 *     abbreviatedIntercept (16), -- wireless service tone
 *     abbreviatedCongestion (17), -- wireless service tone
 *     warningTone (18), -- wireless service tone
 *     dialToneBurst (19), -- wireless service tone
 *     numberUnObtainableTone (20), -- wireless service tone
 *     authenticationFailureTone (21), -- wireless service tone
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AudibleSignal = _enum_for_AudibleSignal | ENUMERATED;

/**
 * @summary AudibleSignal_notUsed
 * @constant
 * @type {number}
 */
export
const AudibleSignal_notUsed: AudibleSignal = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notUsed
 * @constant
 * @type {number}
 */
export
const notUsed: AudibleSignal = AudibleSignal_notUsed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_dialTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_dialTone: AudibleSignal = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialTone
 * @constant
 * @type {number}
 */
export
const dialTone: AudibleSignal = AudibleSignal_dialTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_recallDialTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_recallDialTone: AudibleSignal = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallDialTone
 * @constant
 * @type {number}
 */
export
const recallDialTone: AudibleSignal = AudibleSignal_recallDialTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_ringbackTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_ringbackTone: AudibleSignal = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringbackTone
 * @constant
 * @type {number}
 */
export
const ringbackTone: AudibleSignal = AudibleSignal_ringbackTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_reorderTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_reorderTone: AudibleSignal = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorderTone
 * @constant
 * @type {number}
 */
export
const reorderTone: AudibleSignal = AudibleSignal_reorderTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_busyTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_busyTone: AudibleSignal = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyTone
 * @constant
 * @type {number}
 */
export
const busyTone: AudibleSignal = AudibleSignal_busyTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_confirmationTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_confirmationTone: AudibleSignal = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confirmationTone
 * @constant
 * @type {number}
 */
export
const confirmationTone: AudibleSignal = AudibleSignal_confirmationTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_expensiveRouteTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_expensiveRouteTone: AudibleSignal = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expensiveRouteTone
 * @constant
 * @type {number}
 */
export
const expensiveRouteTone: AudibleSignal = AudibleSignal_expensiveRouteTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_messageWaitingTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_messageWaitingTone: AudibleSignal = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWaitingTone
 * @constant
 * @type {number}
 */
export
const messageWaitingTone: AudibleSignal = AudibleSignal_messageWaitingTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_receiverOffHookTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_receiverOffHookTone: AudibleSignal = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receiverOffHookTone
 * @constant
 * @type {number}
 */
export
const receiverOffHookTone: AudibleSignal = AudibleSignal_receiverOffHookTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_specialInfoTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_specialInfoTone: AudibleSignal = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary specialInfoTone
 * @constant
 * @type {number}
 */
export
const specialInfoTone: AudibleSignal = AudibleSignal_specialInfoTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_denialTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_denialTone: AudibleSignal = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denialTone
 * @constant
 * @type {number}
 */
export
const denialTone: AudibleSignal = AudibleSignal_denialTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_interceptTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_interceptTone: AudibleSignal = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interceptTone
 * @constant
 * @type {number}
 */
export
const interceptTone: AudibleSignal = AudibleSignal_interceptTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_answerTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_answerTone: AudibleSignal = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answerTone
 * @constant
 * @type {number}
 */
export
const answerTone: AudibleSignal = AudibleSignal_answerTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_tonesOff
 * @constant
 * @type {number}
 */
export
const AudibleSignal_tonesOff: AudibleSignal = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tonesOff
 * @constant
 * @type {number}
 */
export
const tonesOff: AudibleSignal = AudibleSignal_tonesOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_pipTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_pipTone: AudibleSignal = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pipTone
 * @constant
 * @type {number}
 */
export
const pipTone: AudibleSignal = AudibleSignal_pipTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_abbreviatedIntercept
 * @constant
 * @type {number}
 */
export
const AudibleSignal_abbreviatedIntercept: AudibleSignal = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedIntercept
 * @constant
 * @type {number}
 */
export
const abbreviatedIntercept: AudibleSignal = AudibleSignal_abbreviatedIntercept; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_abbreviatedCongestion
 * @constant
 * @type {number}
 */
export
const AudibleSignal_abbreviatedCongestion: AudibleSignal = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedCongestion
 * @constant
 * @type {number}
 */
export
const abbreviatedCongestion: AudibleSignal = AudibleSignal_abbreviatedCongestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_warningTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_warningTone: AudibleSignal = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warningTone
 * @constant
 * @type {number}
 */
export
const warningTone: AudibleSignal = AudibleSignal_warningTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_dialToneBurst
 * @constant
 * @type {number}
 */
export
const AudibleSignal_dialToneBurst: AudibleSignal = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialToneBurst
 * @constant
 * @type {number}
 */
export
const dialToneBurst: AudibleSignal = AudibleSignal_dialToneBurst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_numberUnObtainableTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_numberUnObtainableTone: AudibleSignal = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberUnObtainableTone
 * @constant
 * @type {number}
 */
export
const numberUnObtainableTone: AudibleSignal = AudibleSignal_numberUnObtainableTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_authenticationFailureTone
 * @constant
 * @type {number}
 */
export
const AudibleSignal_authenticationFailureTone: AudibleSignal = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailureTone
 * @constant
 * @type {number}
 */
export
const authenticationFailureTone: AudibleSignal = AudibleSignal_authenticationFailureTone; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AudibleSignal: $.ASN1Decoder<AudibleSignal> = $._decodeEnumerated;
export const _encode_AudibleSignal: $.ASN1Encoder<AudibleSignal> = $._encodeEnumerated;


/* eslint-enable */
