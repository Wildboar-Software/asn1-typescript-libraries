/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary POCEventType
 * @description
 *
 * PoC session-unrelated charging event, carried in PoC
 * Information. Clause 5.1.2 lists those SIP procedures: sending
 * or receiving an instant personal alert, sending or receiving a
 * PoC group advertisement, subscribing to conference state,
 * adding a user, adding or removing a media type, locking the
 * client into one of several simultaneous sessions, early
 * session set-up, and setting a session priority. An
 * unsuccessful alert or advertisement is not charged.
 *
 * The CDF creates one CDR per Charging Data Request [event].
 * Partial CDRs are not used. The trigger list in clause
 * 6.1.3.2.2 does not repeat media-type changes or early session
 * set-up; early session set-up is still an event CDR
 * (clause 5.2.1). This enumeration only names the alert, the
 * advertisement, early session set-up, talk burst, and `normal`.
 *
 * Early session set-up and instant personal alert also use
 * one-time online event charging. Early session set-up uses
 * event charging with unit reservation (ECUR): reserve on the
 * INVITE, debit when set-up finishes. An instant personal alert
 * is charged per message with ECUR; each alert is independent.
 * A successful delivery reports the used quota on Debit Units
 * Request [terminate]. A timeout or a SIP error such as 4xx
 * returns the quota as unused.
 *
 * `pOCTalkBurst` is one of the enumerated values, but talk-burst
 * exchange itself is session charging with unit reservation
 * (SCUR), not one of the session-unrelated procedures.
 * TS 32.272 does not define the `normal` value.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.2, 5.3.1, 5.3.2.3, 5.3.2.4,
 * 6.1.3.2.2, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCEventType  ::=  ENUMERATED {
 *    normal                   ( 0 ),
 *    instantPersonalAlert     ( 1 ),
 *    pOCGroupAdvertisement    ( 2 ),
 *    earlySessionSettingup    ( 3 ),
 *    pOCTalkBurst             ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_POCEventType {
    normal = 0,
    instantPersonalAlert = 1,
    pOCGroupAdvertisement = 2,
    earlySessionSettingup = 3,
    pOCTalkBurst = 4,
}

/**
 * @summary POCEventType
 * @description
 *
 * PoC session-unrelated charging event, carried in PoC
 * Information. Clause 5.1.2 lists those SIP procedures: sending
 * or receiving an instant personal alert, sending or receiving a
 * PoC group advertisement, subscribing to conference state,
 * adding a user, adding or removing a media type, locking the
 * client into one of several simultaneous sessions, early
 * session set-up, and setting a session priority. An
 * unsuccessful alert or advertisement is not charged.
 *
 * The CDF creates one CDR per Charging Data Request [event].
 * Partial CDRs are not used. The trigger list in clause
 * 6.1.3.2.2 does not repeat media-type changes or early session
 * set-up; early session set-up is still an event CDR
 * (clause 5.2.1). This enumeration only names the alert, the
 * advertisement, early session set-up, talk burst, and `normal`.
 *
 * Early session set-up and instant personal alert also use
 * one-time online event charging. Early session set-up uses
 * event charging with unit reservation (ECUR): reserve on the
 * INVITE, debit when set-up finishes. An instant personal alert
 * is charged per message with ECUR; each alert is independent.
 * A successful delivery reports the used quota on Debit Units
 * Request [terminate]. A timeout or a SIP error such as 4xx
 * returns the quota as unused.
 *
 * `pOCTalkBurst` is one of the enumerated values, but talk-burst
 * exchange itself is session charging with unit reservation
 * (SCUR), not one of the session-unrelated procedures.
 * TS 32.272 does not define the `normal` value.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.2, 5.3.1, 5.3.2.3, 5.3.2.4,
 * 6.1.3.2.2, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCEventType  ::=  ENUMERATED {
 *    normal                   ( 0 ),
 *    instantPersonalAlert     ( 1 ),
 *    pOCGroupAdvertisement    ( 2 ),
 *    earlySessionSettingup    ( 3 ),
 *    pOCTalkBurst             ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type POCEventType = _enum_for_POCEventType;

/**
 * @summary POCEventType
 * @description
 *
 * PoC session-unrelated charging event, carried in PoC
 * Information. Clause 5.1.2 lists those SIP procedures: sending
 * or receiving an instant personal alert, sending or receiving a
 * PoC group advertisement, subscribing to conference state,
 * adding a user, adding or removing a media type, locking the
 * client into one of several simultaneous sessions, early
 * session set-up, and setting a session priority. An
 * unsuccessful alert or advertisement is not charged.
 *
 * The CDF creates one CDR per Charging Data Request [event].
 * Partial CDRs are not used. The trigger list in clause
 * 6.1.3.2.2 does not repeat media-type changes or early session
 * set-up; early session set-up is still an event CDR
 * (clause 5.2.1). This enumeration only names the alert, the
 * advertisement, early session set-up, talk burst, and `normal`.
 *
 * Early session set-up and instant personal alert also use
 * one-time online event charging. Early session set-up uses
 * event charging with unit reservation (ECUR): reserve on the
 * INVITE, debit when set-up finishes. An instant personal alert
 * is charged per message with ECUR; each alert is independent.
 * A successful delivery reports the used quota on Debit Units
 * Request [terminate]. A timeout or a SIP error such as 4xx
 * returns the quota as unused.
 *
 * `pOCTalkBurst` is one of the enumerated values, but talk-burst
 * exchange itself is session charging with unit reservation
 * (SCUR), not one of the session-unrelated procedures.
 * TS 32.272 does not define the `normal` value.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.2, 5.3.1, 5.3.2.3, 5.3.2.4,
 * 6.1.3.2.2, and 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POCEventType  ::=  ENUMERATED {
 *    normal                   ( 0 ),
 *    instantPersonalAlert     ( 1 ),
 *    pOCGroupAdvertisement    ( 2 ),
 *    earlySessionSettingup    ( 3 ),
 *    pOCTalkBurst             ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const POCEventType = _enum_for_POCEventType;

/**
 * @summary POCEventType_normal
 * @description
 *
 * TS 32.272 does not define this value.
 *
 * @constant
 * @type {number}
 */
export
const POCEventType_normal: POCEventType = POCEventType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: POCEventType = POCEventType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_instantPersonalAlert
 * @description
 *
 * SIP instant message from one PoC user to another requesting a
 * 1-1 PoC session. An unsuccessful message is not charged. The
 * participating PoC Server reports it, and each alert is an
 * independent online event.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1, 5.1.2, and 5.3.2.3.
 *
 * @constant
 * @type {number}
 */
export
const POCEventType_instantPersonalAlert: POCEventType = POCEventType.instantPersonalAlert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary instantPersonalAlert
 * @constant
 * @type {number}
 */
export
const instantPersonalAlert: POCEventType = POCEventType.instantPersonalAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_pOCGroupAdvertisement
 * @description
 *
 * Tells other PoC users that a PoC group exists. An unsuccessful
 * message is not charged.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 3.1 and 5.1.2.
 *
 * @constant
 * @type {number}
 */
export
const POCEventType_pOCGroupAdvertisement: POCEventType = POCEventType.pOCGroupAdvertisement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOCGroupAdvertisement
 * @constant
 * @type {number}
 */
export
const pOCGroupAdvertisement: POCEventType = POCEventType.pOCGroupAdvertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_earlySessionSettingup
 * @description
 *
 * Pre-established session set-up. Media and bearer parameters
 * are negotiated before a later PoC session, and the server
 * cannot predict that resource use. Offline this is an event
 * CDR from the participating server. Online it is event charging
 * with unit reservation.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.2, 5.2.2.1.4, and 5.3.2.4.
 *
 * @constant
 * @type {number}
 */
export
const POCEventType_earlySessionSettingup: POCEventType = POCEventType.earlySessionSettingup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlySessionSettingup
 * @constant
 * @type {number}
 */
export
const earlySessionSettingup: POCEventType = POCEventType.earlySessionSettingup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary POCEventType_pOCTalkBurst
 * @description
 *
 * Talk-burst exchange. The charging model for talk bursts is
 * session charging with unit reservation, metered by the PoC
 * Server as duration, volume, or a count. It is not one of the
 * session-unrelated procedures in clause 5.1.2. See
 * `ListofTalkBurstExchange`.
 *
 * 3GPP TS 32.272 V19.0.0 clauses 5.1.1 and 5.3.1.
 *
 * @constant
 * @type {number}
 */
export
const POCEventType_pOCTalkBurst: POCEventType = POCEventType.pOCTalkBurst; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOCTalkBurst
 * @constant
 * @type {number}
 */
export
const pOCTalkBurst: POCEventType = POCEventType.pOCTalkBurst; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_POCEventType: $.ASN1Decoder<POCEventType> = $._decodeEnumerated;

export
const _encode_POCEventType: $.ASN1Encoder<POCEventType> = $._encodeEnumerated;

/* eslint-enable */
