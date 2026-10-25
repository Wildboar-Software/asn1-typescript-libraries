/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_GPRSEvent {
    /**
     * PDP context activation. Table B.5.1 maps a successful activation to
     * IRI-BEGIN and an unsuccessful activation to IRI-REPORT. For GPRS, the
     * first event of a communication attempt is the PDP context activation, or
     * a similar event, and an IRI-BEGIN is issued. The value itself does not
     * encode success or failure.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    pDPContextActivation = 1,
    /**
     * Interception starts while a PDP context is already active. Table B.5.1
     * maps it to IRI-BEGIN or, optionally, IRI-CONTINUE. When the IAP is aware
     * of that active context, an IRI-BEGIN is recommended.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    startOfInterceptionWithPDPContextActive = 2,
    /**
     * PDP context deactivation. Table B.5.1 maps it to IRI-END. The end of the
     * communication attempt is the PDP context deactivation, or a similar
     * event.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    pDPContextDeactivation = 4,
    /**
     * GPRS attach. Table B.5.1 maps it to IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRSAttach = 5,
    /**
     * GPRS detach. Table B.5.1 maps it to IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRSDetach = 6,
    /**
     * Cell or routing-area update. Table B.5.1 maps it to IRI-REPORT.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    cellOrRAUpdate = 10,
    /**
     * SMS. Table B.5.1 maps it to IRI-REPORT. The SMS content, including its
     * header, is carried in the SMS parameter.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    sMS = 11,
    /**
     * PDP context modification. Table B.5.1 maps it to IRI-CONTINUE.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    pDPContextModification = 13,
}

/**
 * @summary GPRSEvent
 * @description
 * 
 * GPRS action of the target, such as attach or detach. The module comment
 * refers to 3GPP TS 03.33. Clause B.5.3 says the events defined in 3GPP TS
 * 03.03 are used to generate HI2 records, and maps each event onto a record
 * type. This document does not restate those 3GPP definitions. While a PDP
 * context is active, IRI-CONTINUE is used for CC-relevant IRI and IRI-REPORT
 * otherwise. Clause B.5.3 also names `endOfInterceptionWithPDPContextActive`.
 * This enumeration does not define that value. An extension marker precedes PDP
 * context modification.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSEvent  ::=  ENUMERATED
 * {
 *     pDPContextActivation(1),
 *     startOfInterceptionWithPDPContextActive(2),
 *     pDPContextDeactivation(4),
 *     gPRSAttach(5),
 *     gPRSDetach(6),
 *     cellOrRAUpdate(10),
 *     sMS(11),
 *     ...,
 *     pDPContextModification(13)
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
 * PDP context activation. Table B.5.1 maps a successful activation to IRI-BEGIN
 * and an unsuccessful activation to IRI-REPORT. For GPRS, the first event of a
 * communication attempt is the PDP context activation, or a similar event, and
 * an IRI-BEGIN is issued. The value itself does not encode success or failure.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextActivation: _enum_for_GPRSEvent.pDPContextActivation = _enum_for_GPRSEvent.pDPContextActivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextActivation
 * @description
 *
 * PDP context activation. Table B.5.1 maps a successful activation to IRI-BEGIN
 * and an unsuccessful activation to IRI-REPORT. For GPRS, the first event of a
 * communication attempt is the PDP context activation, or a similar event, and
 * an IRI-BEGIN is issued. The value itself does not encode success or failure.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const pDPContextActivation: _enum_for_GPRSEvent.pDPContextActivation = GPRSEvent_pDPContextActivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_startOfInterceptionWithPDPContextActive
 * @description
 *
 * Interception starts while a PDP context is already active. Table B.5.1 maps
 * it to IRI-BEGIN or, optionally, IRI-CONTINUE. When the IAP is aware of that
 * active context, an IRI-BEGIN is recommended.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_startOfInterceptionWithPDPContextActive: _enum_for_GPRSEvent.startOfInterceptionWithPDPContextActive = _enum_for_GPRSEvent.startOfInterceptionWithPDPContextActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionWithPDPContextActive
 * @description
 *
 * Interception starts while a PDP context is already active. Table B.5.1 maps
 * it to IRI-BEGIN or, optionally, IRI-CONTINUE. When the IAP is aware of that
 * active context, an IRI-BEGIN is recommended.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const startOfInterceptionWithPDPContextActive: _enum_for_GPRSEvent.startOfInterceptionWithPDPContextActive = GPRSEvent_startOfInterceptionWithPDPContextActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextDeactivation
 * @description
 *
 * PDP context deactivation. Table B.5.1 maps it to IRI-END. The end of the
 * communication attempt is the PDP context deactivation, or a similar event.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextDeactivation: _enum_for_GPRSEvent.pDPContextDeactivation = _enum_for_GPRSEvent.pDPContextDeactivation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextDeactivation
 * @description
 *
 * PDP context deactivation. Table B.5.1 maps it to IRI-END. The end of the
 * communication attempt is the PDP context deactivation, or a similar event.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const pDPContextDeactivation: _enum_for_GPRSEvent.pDPContextDeactivation = GPRSEvent_pDPContextDeactivation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSAttach
 * @description
 *
 * GPRS attach. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSAttach: _enum_for_GPRSEvent.gPRSAttach = _enum_for_GPRSEvent.gPRSAttach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSAttach
 * @description
 *
 * GPRS attach. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRSAttach: _enum_for_GPRSEvent.gPRSAttach = GPRSEvent_gPRSAttach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_gPRSDetach
 * @description
 *
 * GPRS detach. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_gPRSDetach: _enum_for_GPRSEvent.gPRSDetach = _enum_for_GPRSEvent.gPRSDetach; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSDetach
 * @description
 *
 * GPRS detach. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRSDetach: _enum_for_GPRSEvent.gPRSDetach = GPRSEvent_gPRSDetach; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_cellOrRAUpdate
 * @description
 *
 * Cell or routing-area update. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_cellOrRAUpdate: _enum_for_GPRSEvent.cellOrRAUpdate = _enum_for_GPRSEvent.cellOrRAUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellOrRAUpdate
 * @description
 *
 * Cell or routing-area update. Table B.5.1 maps it to IRI-REPORT.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const cellOrRAUpdate: _enum_for_GPRSEvent.cellOrRAUpdate = GPRSEvent_cellOrRAUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_sMS
 * @description
 *
 * SMS. Table B.5.1 maps it to IRI-REPORT. The SMS content, including its
 * header, is carried in the SMS parameter.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_sMS: _enum_for_GPRSEvent.sMS = _enum_for_GPRSEvent.sMS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @description
 *
 * SMS. Table B.5.1 maps it to IRI-REPORT. The SMS content, including its
 * header, is carried in the SMS parameter.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const sMS: _enum_for_GPRSEvent.sMS = GPRSEvent_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GPRSEvent_pDPContextModification
 * @description
 *
 * PDP context modification. Table B.5.1 maps it to IRI-CONTINUE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const GPRSEvent_pDPContextModification: _enum_for_GPRSEvent.pDPContextModification = _enum_for_GPRSEvent.pDPContextModification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDPContextModification
 * @description
 *
 * PDP context modification. Table B.5.1 maps it to IRI-CONTINUE.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const pDPContextModification: _enum_for_GPRSEvent.pDPContextModification = GPRSEvent_pDPContextModification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GPRSEvent: $.ASN1Decoder<GPRSEvent> = $._decodeEnumerated;
export const _encode_GPRSEvent: $.ASN1Encoder<GPRSEvent> = $._encodeEnumerated;


/* eslint-enable */
