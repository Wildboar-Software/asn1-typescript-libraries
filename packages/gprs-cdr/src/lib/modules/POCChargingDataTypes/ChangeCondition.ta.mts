/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeCondition
 * @description
 *
 * Why a talk-burst exchange container was closed and a new
 * container added.
 *
 * Charging conditions categorize charging, for example per
 * tariff period or by the number of participants. An interim
 * report is also sent for a session modification (a change in
 * media) or a usage threshold (volume, duration, or the number
 * of charging-condition changes). Interim CDRs are also governed
 * by configurable timers at the PoC Server.
 *
 * TS 32.272 does not define each enumerated value. The value
 * comments below use only the clause text that matches the name.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.2.1, 6.1.3.2.1, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    serviceChange                 ( 0 ),
 *    volumeLimit                   ( 1 ),
 *    timeLimit                     ( 2 ),
 *    numberofTalkBurstLimit        ( 3 ),
 *    numberofActiveParticipants    ( 4 ),
 *    tariffTime                    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChangeCondition {
    serviceChange = 0,
    volumeLimit = 1,
    timeLimit = 2,
    numberofTalkBurstLimit = 3,
    numberofActiveParticipants = 4,
    tariffTime = 5,
}

/**
 * @summary ChangeCondition
 * @description
 *
 * Why a talk-burst exchange container was closed and a new
 * container added.
 *
 * Charging conditions categorize charging, for example per
 * tariff period or by the number of participants. An interim
 * report is also sent for a session modification (a change in
 * media) or a usage threshold (volume, duration, or the number
 * of charging-condition changes). Interim CDRs are also governed
 * by configurable timers at the PoC Server.
 *
 * TS 32.272 does not define each enumerated value. The value
 * comments below use only the clause text that matches the name.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.2.1, 6.1.3.2.1, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    serviceChange                 ( 0 ),
 *    volumeLimit                   ( 1 ),
 *    timeLimit                     ( 2 ),
 *    numberofTalkBurstLimit        ( 3 ),
 *    numberofActiveParticipants    ( 4 ),
 *    tariffTime                    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChangeCondition = _enum_for_ChangeCondition;

/**
 * @summary ChangeCondition
 * @description
 *
 * Why a talk-burst exchange container was closed and a new
 * container added.
 *
 * Charging conditions categorize charging, for example per
 * tariff period or by the number of participants. An interim
 * report is also sent for a session modification (a change in
 * media) or a usage threshold (volume, duration, or the number
 * of charging-condition changes). Interim CDRs are also governed
 * by configurable timers at the PoC Server.
 *
 * TS 32.272 does not define each enumerated value. The value
 * comments below use only the clause text that matches the name.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.2.1, 6.1.3.2.1, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeCondition  ::=  ENUMERATED {
 *    serviceChange                 ( 0 ),
 *    volumeLimit                   ( 1 ),
 *    timeLimit                     ( 2 ),
 *    numberofTalkBurstLimit        ( 3 ),
 *    numberofActiveParticipants    ( 4 ),
 *    tariffTime                    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChangeCondition: typeof _enum_for_ChangeCondition = _enum_for_ChangeCondition;

/**
 * @summary ChangeCondition_serviceChange
 * @description
 *
 * Session modification, for example a change in media.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const ChangeCondition_serviceChange: _enum_for_ChangeCondition.serviceChange = ChangeCondition.serviceChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceChange
 * @constant
 * @type {number}
 */
export
const serviceChange: _enum_for_ChangeCondition.serviceChange = ChangeCondition.serviceChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_volumeLimit
 * @description
 *
 * Volume usage threshold. Talk-burst volume is one of the three
 * units a talk burst can be metered in.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.1 and 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const ChangeCondition_volumeLimit: _enum_for_ChangeCondition.volumeLimit = ChangeCondition.volumeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: _enum_for_ChangeCondition.volumeLimit = ChangeCondition.volumeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_timeLimit
 * @description
 *
 * Duration usage threshold. Interim CDRs are also governed by
 * configurable timers at the PoC Server.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.2.1 and 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const ChangeCondition_timeLimit: _enum_for_ChangeCondition.timeLimit = ChangeCondition.timeLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: _enum_for_ChangeCondition.timeLimit = ChangeCondition.timeLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_numberofTalkBurstLimit
 * @description
 *
 * TS 32.272 does not define this value on its own. Talk bursts
 * may be metered as a count, and a usage threshold can close the
 * container.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.1 and 6.1.3.2.1.
 *
 * @constant
 * @type {number}
 */
export
const ChangeCondition_numberofTalkBurstLimit: _enum_for_ChangeCondition.numberofTalkBurstLimit = ChangeCondition.numberofTalkBurstLimit; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberofTalkBurstLimit
 * @constant
 * @type {number}
 */
export
const numberofTalkBurstLimit: _enum_for_ChangeCondition.numberofTalkBurstLimit = ChangeCondition.numberofTalkBurstLimit; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_numberofActiveParticipants
 * @description
 *
 * Charging categorized by the number of participants.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.3 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ChangeCondition_numberofActiveParticipants: _enum_for_ChangeCondition.numberofActiveParticipants = ChangeCondition.numberofActiveParticipants; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberofActiveParticipants
 * @constant
 * @type {number}
 */
export
const numberofActiveParticipants: _enum_for_ChangeCondition.numberofActiveParticipants = ChangeCondition.numberofActiveParticipants; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeCondition_tariffTime
 * @description
 *
 * Charging categorized per tariff period.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ChangeCondition_tariffTime: _enum_for_ChangeCondition.tariffTime = ChangeCondition.tariffTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tariffTime
 * @constant
 * @type {number}
 */
export
const tariffTime: _enum_for_ChangeCondition.tariffTime = ChangeCondition.tariffTime; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChangeCondition: $.ASN1Decoder<ChangeCondition> = $._decodeEnumerated;

export
const _encode_ChangeCondition: $.ASN1Encoder<ChangeCondition> = $._encodeEnumerated;

/* eslint-enable */
