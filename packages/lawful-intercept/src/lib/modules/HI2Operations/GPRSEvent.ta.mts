/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary _enum_for_GPRSEvent
 * @description
 *
 * GPRS IRI event. The module says see 3GPP TS 03.33. Annex B.5.3 says the
 * events defined in 3GPP TS 03.03 are used to generate the HI2 records. This
 * document states the record-type mapping below and does not reproduce the
 * 3GPP event procedures.
 *
 * Ten event types are received at DF2, and a record is sent to the LEMF when
 * required (table B.5.1). For GPRS, the first event of a communication attempt
 * shall be PDP context activation or a similar event, with an IRI-BEGIN. The
 * end shall be PDP context deactivation or a similar event, with an IRI-END.
 * While a PDP context is active, IRI-CONTINUE carries CC-relevant IRI, and
 * IRI-REPORT carries the other IRI.
 *
 * When interception starts during an already active PDP context that the IAP
 * is aware of, an IRI-BEGIN is recommended and
 * `startOfInterceptionWithPDPContextActive` shall be used. When interception
 * ends during an already active PDP context, as a national option the MF may
 * send an IRI-REPORT using `endOfInterceptionWithPDPContextActive`, or send no
 * IRI-REPORT and report the end by other means, for example an HI1
 * `liDeactivated` message.
 *
 * Table B.5.1: GPRS attach REPORT; GPRS detach REPORT; PDP context activation
 * successful BEGIN; PDP context activation unsuccessful REPORT; start of
 * intercept with PDP context active BEGIN or optionally CONTINUE; PDP context
 * modification CONTINUE; PDP context deactivation END; cell and/or RA update
 * REPORT; SMS REPORT; end of intercept with PDP context active REPORT. The
 * enumeration has a single PDP-context-activation value; the table's
 * successful and unsuccessful rows are not given separate values here.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex B, clause B.5.3, table B.5.1, annex
 * D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @enum {number}
 */
export
enum _enum_for_GPRSEvent {
    /**
     * PDP context activation. Table B.5.1: a successful activation is an
     * IRI-BEGIN; an unsuccessful activation is an IRI-REPORT. Clause B.5.3:
     * PDP context activation, or a similar event, is the first event of a GPRS
     * communication attempt and an IRI-BEGIN shall be issued. The enumeration
     * assigns one value; this document does not say how the successful and
     * unsuccessful rows are distinguished.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, clause B.5.3, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    pDPContextActivation = 1,
    /**
     * Start of interception with a PDP context already active. Clause B.5.3:
     * when interception is activated during an active PDP context that the IAP
     * is aware of, an IRI-BEGIN is recommended and this event shall be used.
     * Table B.5.1 allows BEGIN or, optionally, CONTINUE.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, table B.5.1, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    startOfInterceptionWithPDPContextActive = 2,
    /**
     * PDP context deactivation. Table B.5.1 maps it to IRI-END. Clause B.5.3:
     * the end of the communication attempt shall be PDP context deactivation,
     * or a similar event, and an IRI-END shall be issued.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, clause B.5.3, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    pDPContextDeactivation = 4,
    /**
     * GPRS attach. Table B.5.1 maps it to IRI-REPORT. Table B.5.2 describes
     * the event type as including GPRS attach.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, table B.5.2, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRSAttach = 5,
    /**
     * GPRS detach. Table B.5.1 maps it to IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRSDetach = 6,
    /**
     * Cell and/or routing-area update. Table B.5.1 maps it to IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    cellOrRAUpdate = 10,
    /**
     * SMS. Table B.5.1 maps it to IRI-REPORT. Table B.5.2: the SMS content
     * with header which is sent with the SMS service is carried in the SMS
     * parameter.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, table B.5.2, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    sMS = 11,
    /**
     * PDP context modification. Table B.5.1 maps it to IRI-CONTINUE.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    pDPContextModification = 13,
    /**
     * End of interception with a PDP context still active. Clause B.5.3: as a
     * national option the MF may send an IRI-REPORT using this event, or send
     * no IRI-REPORT and report the end by other means, for example HI1
     * `liDeactivated`. Table B.5.1 maps the event to IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, table B.5.1, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    endOfInterceptionWithPDPContextActive = 14,
}

/**
 * @summary GPRSEvent
 * @description
 *
 * GPRS IRI event. The module says see 3GPP TS 03.33. Annex B.5.3 says the
 * events defined in 3GPP TS 03.03 are used to generate the HI2 records. This
 * document states the record-type mapping below and does not reproduce the
 * 3GPP event procedures.
 *
 * Ten event types are received at DF2, and a record is sent to the LEMF when
 * required (table B.5.1). For GPRS, the first event of a communication attempt
 * shall be PDP context activation or a similar event, with an IRI-BEGIN. The
 * end shall be PDP context deactivation or a similar event, with an IRI-END.
 * While a PDP context is active, IRI-CONTINUE carries CC-relevant IRI, and
 * IRI-REPORT carries the other IRI.
 *
 * When interception starts during an already active PDP context that the IAP
 * is aware of, an IRI-BEGIN is recommended and
 * `startOfInterceptionWithPDPContextActive` shall be used. When interception
 * ends during an already active PDP context, as a national option the MF may
 * send an IRI-REPORT using `endOfInterceptionWithPDPContextActive`, or send no
 * IRI-REPORT and report the end by other means, for example an HI1
 * `liDeactivated` message.
 *
 * Table B.5.1: GPRS attach REPORT; GPRS detach REPORT; PDP context activation
 * successful BEGIN; PDP context activation unsuccessful REPORT; start of
 * intercept with PDP context active BEGIN or optionally CONTINUE; PDP context
 * modification CONTINUE; PDP context deactivation END; cell and/or RA update
 * REPORT; SMS REPORT; end of intercept with PDP context active REPORT. The
 * enumeration has a single PDP-context-activation value; the table's
 * successful and unsuccessful rows are not given separate values here.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex B, clause B.5.3, table B.5.1, annex
 * D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSEvent  ::=  ENUMERATED
 *     -- see 3GPP TS 03.33 [42]
 * {
 *     pDPContextActivation(1),
 *     startOfInterceptionWithPDPContextActive(2),
 *     pDPContextDeactivation(4),
 *     gPRSAttach(5),
 *     gPRSDetach(6),
 *     cellOrRAUpdate(10),
 *     sMS(11),
 *     ...,
 *     pDPContextModification(13),
 *     endOfInterceptionWithPDPContextActive(14)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GPRSEvent = _enum_for_GPRSEvent | ENUMERATED;

/**
 * @summary GPRSEvent_pDPContextActivation
 * @description
 *
 * PDP context activation. Table B.5.1: a successful activation is an
 * IRI-BEGIN; an unsuccessful activation is an IRI-REPORT. Clause B.5.3: PDP
 * context activation, or a similar event, is the first event of a GPRS
 * communication attempt and an IRI-BEGIN shall be issued. The enumeration
 * assigns one value; this document does not say how the successful and
 * unsuccessful rows are distinguished.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, clause B.5.3, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextActivation: GPRSEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextActivation
 * @description
 *
 * PDP context activation. Table B.5.1: a successful activation is an
 * IRI-BEGIN; an unsuccessful activation is an IRI-REPORT. Clause B.5.3: PDP
 * context activation, or a similar event, is the first event of a GPRS
 * communication attempt and an IRI-BEGIN shall be issued. The enumeration
 * assigns one value; this document does not say how the successful and
 * unsuccessful rows are distinguished.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, clause B.5.3, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const pDPContextActivation: GPRSEvent = GPRSEvent_pDPContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_startOfInterceptionWithPDPContextActive
 * @description
 *
 * Start of interception with a PDP context already active. Clause B.5.3: when
 * interception is activated during an active PDP context that the IAP is aware
 * of, an IRI-BEGIN is recommended and this event shall be used. Table B.5.1
 * allows BEGIN or, optionally, CONTINUE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, table B.5.1, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_startOfInterceptionWithPDPContextActive: GPRSEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithPDPContextActive
 * @description
 *
 * Start of interception with a PDP context already active. Clause B.5.3: when
 * interception is activated during an active PDP context that the IAP is aware
 * of, an IRI-BEGIN is recommended and this event shall be used. Table B.5.1
 * allows BEGIN or, optionally, CONTINUE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, table B.5.1, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithPDPContextActive: GPRSEvent = GPRSEvent_startOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextDeactivation
 * @description
 *
 * PDP context deactivation. Table B.5.1 maps it to IRI-END. Clause B.5.3: the
 * end of the communication attempt shall be PDP context deactivation, or a
 * similar event, and an IRI-END shall be issued.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, clause B.5.3, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextDeactivation: GPRSEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextDeactivation
 * @description
 *
 * PDP context deactivation. Table B.5.1 maps it to IRI-END. Clause B.5.3: the
 * end of the communication attempt shall be PDP context deactivation, or a
 * similar event, and an IRI-END shall be issued.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, clause B.5.3, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const pDPContextDeactivation: GPRSEvent = GPRSEvent_pDPContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSAttach
 * @description
 *
 * GPRS attach. Table B.5.1 maps it to IRI-REPORT. Table B.5.2 describes the
 * event type as including GPRS attach.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, table B.5.2, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSAttach: GPRSEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSAttach
 * @description
 *
 * GPRS attach. Table B.5.1 maps it to IRI-REPORT. Table B.5.2 describes the
 * event type as including GPRS attach.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, table B.5.2, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRSAttach: GPRSEvent = GPRSEvent_gPRSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSDetach
 * @description
 *
 * GPRS detach. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSDetach: GPRSEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSDetach
 * @description
 *
 * GPRS detach. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRSDetach: GPRSEvent = GPRSEvent_gPRSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_cellOrRAUpdate
 * @description
 *
 * Cell and/or routing-area update. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_cellOrRAUpdate: GPRSEvent = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellOrRAUpdate
 * @description
 *
 * Cell and/or routing-area update. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cellOrRAUpdate: GPRSEvent = GPRSEvent_cellOrRAUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_sMS
 * @description
 *
 * SMS. Table B.5.1 maps it to IRI-REPORT. Table B.5.2: the SMS content with
 * header which is sent with the SMS service is carried in the SMS parameter.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, table B.5.2, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_sMS: GPRSEvent = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @description
 *
 * SMS. Table B.5.1 maps it to IRI-REPORT. Table B.5.2: the SMS content with
 * header which is sent with the SMS service is carried in the SMS parameter.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, table B.5.2, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sMS: GPRSEvent = GPRSEvent_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextModification
 * @description
 *
 * PDP context modification. Table B.5.1 maps it to IRI-CONTINUE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextModification: GPRSEvent = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 *
 * PDP context modification. Table B.5.1 maps it to IRI-CONTINUE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const pDPContextModification: GPRSEvent = GPRSEvent_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_endOfInterceptionWithPDPContextActive
 * @description
 *
 * End of interception with a PDP context still active. Clause B.5.3: as a
 * national option the MF may send an IRI-REPORT using this event, or send no
 * IRI-REPORT and report the end by other means, for example HI1
 * `liDeactivated`. Table B.5.1 maps the event to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, table B.5.1, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_endOfInterceptionWithPDPContextActive: GPRSEvent = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfInterceptionWithPDPContextActive
 * @description
 *
 * End of interception with a PDP context still active. Clause B.5.3: as a
 * national option the MF may send an IRI-REPORT using this event, or send no
 * IRI-REPORT and report the end by other means, for example HI1
 * `liDeactivated`. Table B.5.1 maps the event to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, table B.5.1, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const endOfInterceptionWithPDPContextActive: GPRSEvent = GPRSEvent_endOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GPRSEvent: $.ASN1Decoder<GPRSEvent> = $._decodeEnumerated;
export const _encode_GPRSEvent: $.ASN1Encoder<GPRSEvent> = $._encodeEnumerated;


/* eslint-enable */
