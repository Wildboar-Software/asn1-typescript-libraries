/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_AudibleSignal
 * @description
 *
 * Audible tone applied toward the surveillance subject. `notUsed` is
 * reserved. See `AudibleSignal` for GR-506-CORE, TIA/EIA-41-D, and
 * GSM 02.40.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_AudibleSignal {
    /**
     * Reserved. Value 0.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    notUsed = 0,
    /**
     * Named by the module, with no further definition. The type comment points
     * to GR-506-CORE for tones applied toward the surveillance subject.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    dialTone = 1,
    /**
     * Recall dial tone, also called stutter dial tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    recallDialTone = 2,
    /**
     * Indicates ringing at the called party.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    ringbackTone = 3,
    /**
     * Reorder tone, also called congestion tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    reorderTone = 4,
    /**
     * Named by the module, with no further definition. The type comment points
     * to GR-506-CORE for tones applied toward the surveillance subject.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    busyTone = 5,
    /**
     * Confirms receipt and processing of a request.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    confirmationTone = 6,
    /**
     * Indicates that the outgoing route is expensive.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    expensiveRouteTone = 7,
    /**
     * Named by the module, with no further definition. The type comment points
     * to GR-506-CORE for tones applied toward the surveillance subject.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    messageWaitingTone = 8,
    /**
     * Receiver off-hook tone, also called off-hook warning tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    receiverOffHookTone = 9,
    /**
     * Indicates that the call was sent to an announcement.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    specialInfoTone = 10,
    /**
     * Indicates denial of a feature request.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    denialTone = 11,
    /**
     * Wireless intercept tone, also called mobile reorder tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    interceptTone = 12,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    answerTone = 13,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    tonesOff = 14,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    pipTone = 15,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    abbreviatedIntercept = 16,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    abbreviatedCongestion = 17,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    warningTone = 18,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    dialToneBurst = 19,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    numberUnObtainableTone = 20,
    /**
     * Commented only as a wireless service tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    authenticationFailureTone = 21,
}

/**
 * @summary AudibleSignal
 * @description
 *
 * Audible tone applied toward the surveillance subject.
 *
 * The module comment refers to GR-506-CORE, LSSGR: Signaling for Analog
 * Interfaces, a module of the LATA Switching Systems Generic Requirements
 * (LSSGR), FR-64; to ANSI/TIA/EIA-41-D, Cellular Radiotelecommunications
 * Intersystem Operations; and to GSM 02.40, Digital cellular telecommunications
 * system (Phase 2+), Procedure for call progress indications. This edition does
 * not reproduce those documents.
 *
 * `notUsed` (0) is reserved. `interceptTone` is the wireless intercept or
 * mobile reorder tone. Values from `answerTone` through
 * `authenticationFailureTone` are commented only as a wireless service tone.
 * Several earlier values have no comment beyond the name.
 *
 * The short name `notUsed` is not re-exported from
 * `@wildboar/lawful-intercept/PCESP`, because `AlertingSignal` declares
 * the same short name. The long name `AudibleSignal_notUsed` is
 * re-exported.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
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
 * @description
 *
 * Reserved. Value 0.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_notUsed: _enum_for_AudibleSignal.notUsed = _enum_for_AudibleSignal.notUsed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notUsed
 * @description
 *
 * Reserved. Value 0.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const notUsed: _enum_for_AudibleSignal.notUsed = AudibleSignal_notUsed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_dialTone
 * @description
 *
 * Named by the module, with no further definition. The type comment points to
 * GR-506-CORE for tones applied toward the surveillance subject.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_dialTone: _enum_for_AudibleSignal.dialTone = _enum_for_AudibleSignal.dialTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialTone
 * @description
 *
 * Named by the module, with no further definition. The type comment points to
 * GR-506-CORE for tones applied toward the surveillance subject.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const dialTone: _enum_for_AudibleSignal.dialTone = AudibleSignal_dialTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_recallDialTone
 * @description
 *
 * Recall dial tone, also called stutter dial tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_recallDialTone: _enum_for_AudibleSignal.recallDialTone = _enum_for_AudibleSignal.recallDialTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallDialTone
 * @description
 *
 * Recall dial tone, also called stutter dial tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const recallDialTone: _enum_for_AudibleSignal.recallDialTone = AudibleSignal_recallDialTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_ringbackTone
 * @description
 *
 * Indicates ringing at the called party.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_ringbackTone: _enum_for_AudibleSignal.ringbackTone = _enum_for_AudibleSignal.ringbackTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringbackTone
 * @description
 *
 * Indicates ringing at the called party.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const ringbackTone: _enum_for_AudibleSignal.ringbackTone = AudibleSignal_ringbackTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_reorderTone
 * @description
 *
 * Reorder tone, also called congestion tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_reorderTone: _enum_for_AudibleSignal.reorderTone = _enum_for_AudibleSignal.reorderTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorderTone
 * @description
 *
 * Reorder tone, also called congestion tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const reorderTone: _enum_for_AudibleSignal.reorderTone = AudibleSignal_reorderTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_busyTone
 * @description
 *
 * Named by the module, with no further definition. The type comment points to
 * GR-506-CORE for tones applied toward the surveillance subject.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_busyTone: _enum_for_AudibleSignal.busyTone = _enum_for_AudibleSignal.busyTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyTone
 * @description
 *
 * Named by the module, with no further definition. The type comment points to
 * GR-506-CORE for tones applied toward the surveillance subject.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const busyTone: _enum_for_AudibleSignal.busyTone = AudibleSignal_busyTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_confirmationTone
 * @description
 *
 * Confirms receipt and processing of a request.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_confirmationTone: _enum_for_AudibleSignal.confirmationTone = _enum_for_AudibleSignal.confirmationTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confirmationTone
 * @description
 *
 * Confirms receipt and processing of a request.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const confirmationTone: _enum_for_AudibleSignal.confirmationTone = AudibleSignal_confirmationTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_expensiveRouteTone
 * @description
 *
 * Indicates that the outgoing route is expensive.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_expensiveRouteTone: _enum_for_AudibleSignal.expensiveRouteTone = _enum_for_AudibleSignal.expensiveRouteTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expensiveRouteTone
 * @description
 *
 * Indicates that the outgoing route is expensive.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const expensiveRouteTone: _enum_for_AudibleSignal.expensiveRouteTone = AudibleSignal_expensiveRouteTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_messageWaitingTone
 * @description
 *
 * Named by the module, with no further definition. The type comment points to
 * GR-506-CORE for tones applied toward the surveillance subject.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_messageWaitingTone: _enum_for_AudibleSignal.messageWaitingTone = _enum_for_AudibleSignal.messageWaitingTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWaitingTone
 * @description
 *
 * Named by the module, with no further definition. The type comment points to
 * GR-506-CORE for tones applied toward the surveillance subject.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const messageWaitingTone: _enum_for_AudibleSignal.messageWaitingTone = AudibleSignal_messageWaitingTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_receiverOffHookTone
 * @description
 *
 * Receiver off-hook tone, also called off-hook warning tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_receiverOffHookTone: _enum_for_AudibleSignal.receiverOffHookTone = _enum_for_AudibleSignal.receiverOffHookTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary receiverOffHookTone
 * @description
 *
 * Receiver off-hook tone, also called off-hook warning tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const receiverOffHookTone: _enum_for_AudibleSignal.receiverOffHookTone = AudibleSignal_receiverOffHookTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_specialInfoTone
 * @description
 *
 * Indicates that the call was sent to an announcement.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_specialInfoTone: _enum_for_AudibleSignal.specialInfoTone = _enum_for_AudibleSignal.specialInfoTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary specialInfoTone
 * @description
 *
 * Indicates that the call was sent to an announcement.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const specialInfoTone: _enum_for_AudibleSignal.specialInfoTone = AudibleSignal_specialInfoTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_denialTone
 * @description
 *
 * Indicates denial of a feature request.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_denialTone: _enum_for_AudibleSignal.denialTone = _enum_for_AudibleSignal.denialTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denialTone
 * @description
 *
 * Indicates denial of a feature request.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const denialTone: _enum_for_AudibleSignal.denialTone = AudibleSignal_denialTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_interceptTone
 * @description
 *
 * Wireless intercept tone, also called mobile reorder tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_interceptTone: _enum_for_AudibleSignal.interceptTone = _enum_for_AudibleSignal.interceptTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interceptTone
 * @description
 *
 * Wireless intercept tone, also called mobile reorder tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const interceptTone: _enum_for_AudibleSignal.interceptTone = AudibleSignal_interceptTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_answerTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_answerTone: _enum_for_AudibleSignal.answerTone = _enum_for_AudibleSignal.answerTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answerTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const answerTone: _enum_for_AudibleSignal.answerTone = AudibleSignal_answerTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_tonesOff
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_tonesOff: _enum_for_AudibleSignal.tonesOff = _enum_for_AudibleSignal.tonesOff; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tonesOff
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const tonesOff: _enum_for_AudibleSignal.tonesOff = AudibleSignal_tonesOff; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_pipTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_pipTone: _enum_for_AudibleSignal.pipTone = _enum_for_AudibleSignal.pipTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pipTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const pipTone: _enum_for_AudibleSignal.pipTone = AudibleSignal_pipTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_abbreviatedIntercept
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_abbreviatedIntercept: _enum_for_AudibleSignal.abbreviatedIntercept = _enum_for_AudibleSignal.abbreviatedIntercept; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedIntercept
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const abbreviatedIntercept: _enum_for_AudibleSignal.abbreviatedIntercept = AudibleSignal_abbreviatedIntercept; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_abbreviatedCongestion
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_abbreviatedCongestion: _enum_for_AudibleSignal.abbreviatedCongestion = _enum_for_AudibleSignal.abbreviatedCongestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedCongestion
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const abbreviatedCongestion: _enum_for_AudibleSignal.abbreviatedCongestion = AudibleSignal_abbreviatedCongestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_warningTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_warningTone: _enum_for_AudibleSignal.warningTone = _enum_for_AudibleSignal.warningTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warningTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const warningTone: _enum_for_AudibleSignal.warningTone = AudibleSignal_warningTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_dialToneBurst
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_dialToneBurst: _enum_for_AudibleSignal.dialToneBurst = _enum_for_AudibleSignal.dialToneBurst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dialToneBurst
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const dialToneBurst: _enum_for_AudibleSignal.dialToneBurst = AudibleSignal_dialToneBurst; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_numberUnObtainableTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_numberUnObtainableTone: _enum_for_AudibleSignal.numberUnObtainableTone = _enum_for_AudibleSignal.numberUnObtainableTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberUnObtainableTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const numberUnObtainableTone: _enum_for_AudibleSignal.numberUnObtainableTone = AudibleSignal_numberUnObtainableTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AudibleSignal_authenticationFailureTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AudibleSignal_authenticationFailureTone: _enum_for_AudibleSignal.authenticationFailureTone = _enum_for_AudibleSignal.authenticationFailureTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailureTone
 * @description
 *
 * Commented only as a wireless service tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const authenticationFailureTone: _enum_for_AudibleSignal.authenticationFailureTone = AudibleSignal_authenticationFailureTone; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AudibleSignal: $.ASN1Decoder<AudibleSignal> = $._decodeEnumerated;
export const _encode_AudibleSignal: $.ASN1Encoder<AudibleSignal> = $._encodeEnumerated;


/* eslint-enable */
