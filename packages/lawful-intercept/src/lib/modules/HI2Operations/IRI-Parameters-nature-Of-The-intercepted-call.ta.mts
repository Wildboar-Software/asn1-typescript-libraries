/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call
 * @description
 * 
 * Nature of the intercepted call, and which HI2 or HI3 interface carries
 * user-to-user data, SMS, or call content. Optional. Include it when the nature
 * is known. Clause A.9.2.1 requires `tETRA-circuit-call` for the TETRA events
 * in that clause. The module does not say which HI3 interface carries an LTE
 * circuit-switched call.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-nature-Of-The-intercepted-call ::= ENUMERATED {
 *     -- Nature of the intercepted "call":
 *     gSM-ISDN-PSTN-circuit-call(0),
 *     -- the possible UUS content is sent through the HI2 or HI3 "data" interface
 *     -- the possible call content call is established through the HI3 "circuit" interface
 *     gSM-SMS-Message(1),
 *     -- the SMS content is sent through the HI2 or HI3 "data" interface
 *     uUS4-Messages(2),
 *     -- the UUS content is sent through the HI2 or HI3 "data" interface
 *     tETRA-circuit-call(3),
 *     -- the possible call content call is established through the HI3 "circuit" interface
 *     -- the possible data are sent through the HI3 "data" interface
 *     teTRA-Packet-Data(4),
 *     -- the data are sent through the HI3 "data" interface
 *     gPRS-Packet-Data(5),
 *     -- the data are sent through the HI3 "data" interface
 *     ...,
 *     uMTS-circuit-call(6),
 *     -- the possible call content call is established through the HI3 "circuit" interface
 *     -- the possible data are sent through the HI3 "data" interface
 *     lTE-SMS-Message(7),
 *     -- indicator for SMS from LTE handset
 *     -- the SMS content is sent through the HI2 or HI3 "data" interface
 *     lTE-circuit-call(8)
 *     -- indicator for CS call from LTE handset
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRI_Parameters_nature_Of_The_intercepted_call {
    /**
     * GSM, ISDN, or PSTN circuit call. Possible UUS content is sent on the HI2
     * or HI3 data interface. Possible call content is established on the HI3
     * circuit interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gSM_ISDN_PSTN_circuit_call = 0,
    /**
     * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface. GSM
     * clause A.8.3 delivers SMS via HI2. Tables A.8.1 and B.5.1 use an
     * IRI-REPORT for SMS.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.3, clause A.8.4, clause
     * B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gSM_SMS_Message = 1,
    /**
     * UUS4 messages. The UUS content is sent on the HI2 or HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    uUS4_Messages = 2,
    /**
     * TETRA circuit call. Possible call content is established on the HI3
     * circuit interface. Possible data are sent on the HI3 data interface.
     * Clause A.9.2.1 requires this value for the TETRA events in that clause.
     * Clause A.4.1.1 requires TETRA encoded speech on a 64 kbit/s handover
     * bearer to be further encoded as in TS 100 392-3-6.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1.1, clause A.9.2.1, clause
     * D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    tETRA_circuit_call = 3,
    /**
     * TETRA packet data. The data are sent on the HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    teTRA_Packet_Data = 4,
    /**
     * GPRS packet data. The data are sent on the HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRS_Packet_Data = 5,
    /**
     * UMTS circuit call. Possible call content is established on the HI3
     * circuit interface. Possible data are sent on the HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    uMTS_circuit_call = 6,
    /**
     * Indicator for SMS from an LTE handset. The SMS content is sent on the HI2
     * or HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lTE_SMS_Message = 7,
    /**
     * Indicator for a circuit-switched call from an LTE handset. The module
     * does not state which HI3 interface carries the content.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lTE_circuit_call = 8,
}

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call
 * @description
 * 
 * Nature of the intercepted call, and which HI2 or HI3 interface carries
 * user-to-user data, SMS, or call content. Optional. Include it when the nature
 * is known. Clause A.9.2.1 requires `tETRA-circuit-call` for the TETRA events
 * in that clause. The module does not say which HI3 interface carries an LTE
 * circuit-switched call.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-nature-Of-The-intercepted-call ::= ENUMERATED {
 *     -- Nature of the intercepted "call":
 *     gSM-ISDN-PSTN-circuit-call(0),
 *     -- the possible UUS content is sent through the HI2 or HI3 "data" interface
 *     -- the possible call content call is established through the HI3 "circuit" interface
 *     gSM-SMS-Message(1),
 *     -- the SMS content is sent through the HI2 or HI3 "data" interface
 *     uUS4-Messages(2),
 *     -- the UUS content is sent through the HI2 or HI3 "data" interface
 *     tETRA-circuit-call(3),
 *     -- the possible call content call is established through the HI3 "circuit" interface
 *     -- the possible data are sent through the HI3 "data" interface
 *     teTRA-Packet-Data(4),
 *     -- the data are sent through the HI3 "data" interface
 *     gPRS-Packet-Data(5),
 *     -- the data are sent through the HI3 "data" interface
 *     ...,
 *     uMTS-circuit-call(6),
 *     -- the possible call content call is established through the HI3 "circuit" interface
 *     -- the possible data are sent through the HI3 "data" interface
 *     lTE-SMS-Message(7),
 *     -- indicator for SMS from LTE handset
 *     -- the SMS content is sent through the HI2 or HI3 "data" interface
 *     lTE-circuit-call(8)
 *     -- indicator for CS call from LTE handset
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_nature_Of_The_intercepted_call = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call | ENUMERATED;

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call
 * @description
 *
 * GSM, ISDN, or PSTN circuit call. Possible UUS content is sent on the HI2 or
 * HI3 data interface. Possible call content is established on the HI3 circuit
 * interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_ISDN_PSTN_circuit_call
 * @description
 *
 * GSM, ISDN, or PSTN circuit call. Possible UUS content is sent on the HI2 or
 * HI3 data interface. Possible call content is established on the HI3 circuit
 * interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gSM_ISDN_PSTN_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message
 * @description
 *
 * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface. GSM clause
 * A.8.3 delivers SMS via HI2. Tables A.8.1 and B.5.1 use an IRI-REPORT for SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.3, clause A.8.4, clause B.5.3,
 * clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_SMS_Message
 * @description
 *
 * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface. GSM clause
 * A.8.3 delivers SMS via HI2. Tables A.8.1 and B.5.1 use an IRI-REPORT for SMS.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.3, clause A.8.4, clause B.5.3,
 * clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gSM_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages
 * @description
 *
 * UUS4 messages. The UUS content is sent on the HI2 or HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages: IRI_Parameters_nature_Of_The_intercepted_call = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uUS4_Messages
 * @description
 *
 * UUS4 messages. The UUS content is sent on the HI2 or HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const uUS4_Messages: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call
 * @description
 *
 * TETRA circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface. Clause A.9.2.1
 * requires this value for the TETRA events in that clause. Clause A.4.1.1
 * requires TETRA encoded speech on a 64 kbit/s handover bearer to be further
 * encoded as in TS 100 392-3-6.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1.1, clause A.9.2.1, clause
 * D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tETRA_circuit_call
 * @description
 *
 * TETRA circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface. Clause A.9.2.1
 * requires this value for the TETRA events in that clause. Clause A.4.1.1
 * requires TETRA encoded speech on a 64 kbit/s handover bearer to be further
 * encoded as in TS 100 392-3-6.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1.1, clause A.9.2.1, clause
 * D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tETRA_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data
 * @description
 *
 * TETRA packet data. The data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teTRA_Packet_Data
 * @description
 *
 * TETRA packet data. The data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const teTRA_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data
 * @description
 *
 * GPRS packet data. The data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Packet_Data
 * @description
 *
 * GPRS packet data. The data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRS_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call
 * @description
 *
 * UMTS circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uMTS_circuit_call
 * @description
 *
 * UMTS circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const uMTS_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message
 * @description
 *
 * Indicator for SMS from an LTE handset. The SMS content is sent on the HI2 or
 * HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTE_SMS_Message
 * @description
 *
 * Indicator for SMS from an LTE handset. The SMS content is sent on the HI2 or
 * HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lTE_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call
 * @description
 *
 * Indicator for a circuit-switched call from an LTE handset. The module does
 * not state which HI3 interface carries the content.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTE_circuit_call
 * @description
 *
 * Indicator for a circuit-switched call from an LTE handset. The module does
 * not state which HI3 interface carries the content.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lTE_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Decoder<IRI_Parameters_nature_Of_The_intercepted_call> = $._decodeEnumerated;
export const _encode_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Encoder<IRI_Parameters_nature_Of_The_intercepted_call> = $._encodeEnumerated;


/* eslint-enable */
