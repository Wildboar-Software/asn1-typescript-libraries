/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_AlertingSignal
 * @description
 *
 * Alerting signal applied toward the surveillance subject. `notUsed`
 * is reserved. See `AlertingSignal` for the GR-506-CORE reference.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_AlertingSignal {
    /**
     * Reserved. Value 0.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    notUsed = 0,
    /**
     * Normal ringing.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern0 = 1,
    /**
     * Distinctive ringing: intergroup.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern1 = 2,
    /**
     * Distinctive ringing: special or priority.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern2 = 3,
    /**
     * Distinctive ringing for electronic key telephone service. The module
     * comment abbreviates this as "electronic key telephone srvc".
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern3 = 4,
    /**
     * Ringsplash, or reminder ring.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern4 = 5,
    /**
     * Normal call-waiting tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    callWaitingPattern1 = 6,
    /**
     * Incoming additional call-waiting tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    callWaitingPattern2 = 7,
    /**
     * Priority additional call-waiting tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    callWaitingPattern3 = 8,
    /**
     * Distinctive call-waiting tone.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    callWaitingPattern4 = 9,
    /**
     * Barge-in tone, for example operator barge-in.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    bargeInTone = 10,
    /**
     * Distinctive ringing whose pattern is solution specific.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern5 = 11,
    /**
     * Distinctive ringing whose pattern is solution specific.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern6 = 12,
    /**
     * Distinctive ringing whose pattern is solution specific.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern7 = 13,
    /**
     * Distinctive ringing whose pattern is solution specific.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern8 = 14,
    /**
     * Distinctive ringing whose pattern is solution specific.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    alertingPattern9 = 15,
}

/**
 * @summary AlertingSignal
 * @description
 *
 * Alerting signal applied toward the surveillance subject.
 *
 * The module comment refers to GR-506-CORE, LSSGR: Signaling for Analog
 * Interfaces, a module of the LATA Switching Systems Generic Requirements
 * (LSSGR), FR-64. This edition does not reproduce that document. `notUsed` (0)
 * is reserved.
 *
 * The short name `notUsed` is not re-exported from
 * `@wildboar/lawful-intercept/PCESP`, because `AudibleSignal` declares
 * the same short name. The long name `AlertingSignal_notUsed` is
 * re-exported.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertingSignal  ::=  ENUMERATED {
 *     notUsed (0), -- Reserved
 *     alertingPattern0 (1), -- normal ringing
 *     alertingPattern1 (2), -- distinctive ringing: intergroup
 *     alertingPattern2 (3), -- distinctive ringing: special/priority
 *     alertingPattern3 (4), -- distinctive ringing: electronic key
 *     -- telephone srvc
 *     alertingPattern4 (5), -- ringsplash, reminder ring
 *     callWaitingPattern1 (6), -- normal call waiting tone
 *     callWaitingPattern2 (7), -- incoming additional call waiting tone
 *     callWaitingPattern3 (8), -- priority additional call waiting tone
 *     callWaitingPattern4 (9), -- distinctive call waiting tone
 *     bargeInTone (10), -- barge-in tone (e.g. for operator barge-in)
 *     alertingPattern5 (11), -- distinctive ringing: solution specific
 *     alertingPattern6 (12), -- distinctive ringing: solution specific
 *     alertingPattern7 (13), -- distinctive ringing: solution specific
 *     alertingPattern8 (14), -- distinctive ringing: solution specific
 *     alertingPattern9 (15), -- distinctive ringing: solution specific
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlertingSignal = _enum_for_AlertingSignal | ENUMERATED;

/**
 * @summary AlertingSignal_notUsed
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
const AlertingSignal_notUsed = _enum_for_AlertingSignal.notUsed; /* LONG_NAMED_ENUMERATED_VALUE */

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
const notUsed = AlertingSignal_notUsed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern0
 * @description
 *
 * Normal ringing.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern0 = _enum_for_AlertingSignal.alertingPattern0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern0
 * @description
 *
 * Normal ringing.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern0 = AlertingSignal_alertingPattern0; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern1
 * @description
 *
 * Distinctive ringing: intergroup.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern1 = _enum_for_AlertingSignal.alertingPattern1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern1
 * @description
 *
 * Distinctive ringing: intergroup.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern1 = AlertingSignal_alertingPattern1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern2
 * @description
 *
 * Distinctive ringing: special or priority.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern2 = _enum_for_AlertingSignal.alertingPattern2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern2
 * @description
 *
 * Distinctive ringing: special or priority.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern2 = AlertingSignal_alertingPattern2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern3
 * @description
 *
 * Distinctive ringing for electronic key telephone service. The module comment
 * abbreviates this as "electronic key telephone srvc".
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern3 = _enum_for_AlertingSignal.alertingPattern3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern3
 * @description
 *
 * Distinctive ringing for electronic key telephone service. The module comment
 * abbreviates this as "electronic key telephone srvc".
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern3 = AlertingSignal_alertingPattern3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern4
 * @description
 *
 * Ringsplash, or reminder ring.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern4 = _enum_for_AlertingSignal.alertingPattern4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern4
 * @description
 *
 * Ringsplash, or reminder ring.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern4 = AlertingSignal_alertingPattern4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern1
 * @description
 *
 * Normal call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern1 = _enum_for_AlertingSignal.callWaitingPattern1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern1
 * @description
 *
 * Normal call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const callWaitingPattern1 = AlertingSignal_callWaitingPattern1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern2
 * @description
 *
 * Incoming additional call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern2 = _enum_for_AlertingSignal.callWaitingPattern2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern2
 * @description
 *
 * Incoming additional call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const callWaitingPattern2 = AlertingSignal_callWaitingPattern2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern3
 * @description
 *
 * Priority additional call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern3 = _enum_for_AlertingSignal.callWaitingPattern3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern3
 * @description
 *
 * Priority additional call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const callWaitingPattern3 = AlertingSignal_callWaitingPattern3; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_callWaitingPattern4
 * @description
 *
 * Distinctive call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_callWaitingPattern4 = _enum_for_AlertingSignal.callWaitingPattern4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callWaitingPattern4
 * @description
 *
 * Distinctive call-waiting tone.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const callWaitingPattern4 = AlertingSignal_callWaitingPattern4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_bargeInTone
 * @description
 *
 * Barge-in tone, for example operator barge-in.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_bargeInTone = _enum_for_AlertingSignal.bargeInTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bargeInTone
 * @description
 *
 * Barge-in tone, for example operator barge-in.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const bargeInTone = AlertingSignal_bargeInTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern5
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern5 = _enum_for_AlertingSignal.alertingPattern5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern5
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern5 = AlertingSignal_alertingPattern5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern6
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern6 = _enum_for_AlertingSignal.alertingPattern6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern6
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern6 = AlertingSignal_alertingPattern6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern7
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern7 = _enum_for_AlertingSignal.alertingPattern7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern7
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern7 = AlertingSignal_alertingPattern7; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern8
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern8 = _enum_for_AlertingSignal.alertingPattern8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern8
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern8 = AlertingSignal_alertingPattern8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertingSignal_alertingPattern9
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const AlertingSignal_alertingPattern9 = _enum_for_AlertingSignal.alertingPattern9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertingPattern9
 * @description
 *
 * Distinctive ringing whose pattern is solution specific.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * @constant
 * @type {number}
 */
export
const alertingPattern9 = AlertingSignal_alertingPattern9; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertingSignal: $.ASN1Decoder<AlertingSignal> = $._decodeEnumerated;
export const _encode_AlertingSignal: $.ASN1Encoder<AlertingSignal> = $._encodeEnumerated;


/* eslint-enable */
