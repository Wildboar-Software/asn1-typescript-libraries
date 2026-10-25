/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseForRecordClosing
 * @description
 *
 * Reason the CDF released the PoC CDR (category OM).
 *
 * The final session CDR is closed on Charging Data Request
 * [stop], when the SIP session has ended. A partial CDR may be
 * closed on [interim]: a session modification (for example a
 * change in media), a change of the user's location, a usage
 * threshold (volume, duration, or the number of charging
 * conditions), or expiry of Accounting-Interim-Interval.
 * Session-unrelated procedures do not produce partial CDRs.
 *
 * TS 32.272 does not define these enumerated values one by one.
 * The values below are described only where clause 6.1.3.2.1 or
 * the generic TS 32.298 field text gives a meaning. It does not
 * define `numberofTalkBurstLimit` or `sessionTypeChange`.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.2.1 and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    normalRelease             ( 0 ),
 *    abnormalRelease           ( 1 ),
 *    serviceChange             ( 2 ),
 *    volumeLimit               ( 3 ),
 *    timeLimit                 ( 4 ),
 *    numberofTalkBurstLimit    ( 5 ),
 *    maxChangeCond             ( 6 ),
 *    sessionTypeChange         ( 7 ),
 *    managementIntervention    ( 8 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseForRecordClosing {
    normalRelease = 0,
    abnormalRelease = 1,
    serviceChange = 2,
    volumeLimit = 3,
    timeLimit = 4,
    numberofTalkBurstLimit = 5,
    maxChangeCond = 6,
    sessionTypeChange = 7,
    managementIntervention = 8,
}

/**
 * @summary CauseForRecordClosing
 * @description
 *
 * Reason the CDF released the PoC CDR (category OM).
 *
 * The final session CDR is closed on Charging Data Request
 * [stop], when the SIP session has ended. A partial CDR may be
 * closed on [interim]: a session modification (for example a
 * change in media), a change of the user's location, a usage
 * threshold (volume, duration, or the number of charging
 * conditions), or expiry of Accounting-Interim-Interval.
 * Session-unrelated procedures do not produce partial CDRs.
 *
 * TS 32.272 does not define these enumerated values one by one.
 * The values below are described only where clause 6.1.3.2.1 or
 * the generic TS 32.298 field text gives a meaning. It does not
 * define `numberofTalkBurstLimit` or `sessionTypeChange`.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.2.1 and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    normalRelease             ( 0 ),
 *    abnormalRelease           ( 1 ),
 *    serviceChange             ( 2 ),
 *    volumeLimit               ( 3 ),
 *    timeLimit                 ( 4 ),
 *    numberofTalkBurstLimit    ( 5 ),
 *    maxChangeCond             ( 6 ),
 *    sessionTypeChange         ( 7 ),
 *    managementIntervention    ( 8 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing
 * @description
 *
 * Reason the CDF released the PoC CDR (category OM).
 *
 * The final session CDR is closed on Charging Data Request
 * [stop], when the SIP session has ended. A partial CDR may be
 * closed on [interim]: a session modification (for example a
 * change in media), a change of the user's location, a usage
 * threshold (volume, duration, or the number of charging
 * conditions), or expiry of Accounting-Interim-Interval.
 * Session-unrelated procedures do not produce partial CDRs.
 *
 * TS 32.272 does not define these enumerated values one by one.
 * The values below are described only where clause 6.1.3.2.1 or
 * the generic TS 32.298 field text gives a meaning. It does not
 * define `numberofTalkBurstLimit` or `sessionTypeChange`.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 6.1.3.2.1 and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecordClosing  ::=  ENUMERATED {
 *    normalRelease             ( 0 ),
 *    abnormalRelease           ( 1 ),
 *    serviceChange             ( 2 ),
 *    volumeLimit               ( 3 ),
 *    timeLimit                 ( 4 ),
 *    numberofTalkBurstLimit    ( 5 ),
 *    maxChangeCond             ( 6 ),
 *    sessionTypeChange         ( 7 ),
 *    managementIntervention    ( 8 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CauseForRecordClosing: typeof _enum_for_CauseForRecordClosing = _enum_for_CauseForRecordClosing;

/**
 * @summary CauseForRecordClosing_normalRelease
 * @description
 *
 * End of the session. The CDF closes the final session CDR on
 * Charging Data Request [stop].
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.1.3.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_normalRelease: _enum_for_CauseForRecordClosing.normalRelease = CauseForRecordClosing.normalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: _enum_for_CauseForRecordClosing.normalRelease = CauseForRecordClosing.normalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_abnormalRelease
 * @description
 *
 * Abnormal termination. TS 32.272 does not define this value.
 * The generic cause-for-record-closing text in TS 32.298 does.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_abnormalRelease: _enum_for_CauseForRecordClosing.abnormalRelease = CauseForRecordClosing.abnormalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: _enum_for_CauseForRecordClosing.abnormalRelease = CauseForRecordClosing.abnormalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_serviceChange
 * @description
 *
 * Partial record after a service change, such as a change in
 * media.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_serviceChange: _enum_for_CauseForRecordClosing.serviceChange = CauseForRecordClosing.serviceChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @constant
 * @type {number}
 */
export
const serviceChange: _enum_for_CauseForRecordClosing.serviceChange = CauseForRecordClosing.serviceChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_volumeLimit
 * @description
 *
 * Partial record closed on a volume usage threshold.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_volumeLimit: _enum_for_CauseForRecordClosing.volumeLimit = CauseForRecordClosing.volumeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: _enum_for_CauseForRecordClosing.volumeLimit = CauseForRecordClosing.volumeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_timeLimit
 * @description
 *
 * Partial record closed on a duration usage threshold.
 * Clause 5.2.1 also closes interim CDRs on configurable timers,
 * and clause 6.1.3.2.1 on expiry of Accounting-Interim-Interval.
 * The specification does not say which value those two use.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.2.1 and 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_timeLimit: _enum_for_CauseForRecordClosing.timeLimit = CauseForRecordClosing.timeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: _enum_for_CauseForRecordClosing.timeLimit = CauseForRecordClosing.timeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_numberofTalkBurstLimit
 * @description
 *
 * TS 32.272 does not define this value. Talk bursts may be
 * metered as a count (clause 5.1.1).
 *
 * 3GPP TS 32.272 V19.0.0 clause 5.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_numberofTalkBurstLimit: _enum_for_CauseForRecordClosing.numberofTalkBurstLimit = CauseForRecordClosing.numberofTalkBurstLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberofTalkBurstLimit
 * @constant
 * @type {number}
 */
export
const numberofTalkBurstLimit: _enum_for_CauseForRecordClosing.numberofTalkBurstLimit = CauseForRecordClosing.numberofTalkBurstLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_maxChangeCond
 * @description
 *
 * Partial record because the maximum number of charging
 * conditions was reached. Clause 6.1.3.2.1 lists that number as
 * a usage threshold.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.1.3.2.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_maxChangeCond: _enum_for_CauseForRecordClosing.maxChangeCond = CauseForRecordClosing.maxChangeCond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: _enum_for_CauseForRecordClosing.maxChangeCond = CauseForRecordClosing.maxChangeCond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_sessionTypeChange
 * @description
 *
 * TS 32.272 does not define this value. The session types it
 * does define are 1-1, ad-hoc, pre-arranged, and chat.
 *
 * 3GPP TS 32.272 V19.0.0 clause 5.1.1.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_sessionTypeChange: _enum_for_CauseForRecordClosing.sessionTypeChange = CauseForRecordClosing.sessionTypeChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionTypeChange
 * @constant
 * @type {number}
 */
export
const sessionTypeChange: _enum_for_CauseForRecordClosing.sessionTypeChange = CauseForRecordClosing.sessionTypeChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseForRecordClosing_managementIntervention
 * @description
 *
 * Management intervention, requested for O&M reasons.
 * TS 32.272 does not mention this value; the generic field text
 * in TS 32.298 does.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11.
 *
 * @constant
 * @type {number}
 */
export
const CauseForRecordClosing_managementIntervention: _enum_for_CauseForRecordClosing.managementIntervention = CauseForRecordClosing.managementIntervention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: _enum_for_CauseForRecordClosing.managementIntervention = CauseForRecordClosing.managementIntervention; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CauseForRecordClosing: $.ASN1Decoder<CauseForRecordClosing> = $._decodeEnumerated;

export
const _encode_CauseForRecordClosing: $.ASN1Encoder<CauseForRecordClosing> = $._encodeEnumerated;

/* eslint-enable */
