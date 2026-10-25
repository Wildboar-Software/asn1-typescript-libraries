/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call {
    /**
     * Circuit call on GSM, ISDN, or PSTN. Possible UUS content is sent on the
     * HI2 or HI3 data interface. Possible call content is established on the
     * HI3 circuit interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gSM_ISDN_PSTN_circuit_call = 0,
    /**
     * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gSM_SMS_Message = 1,
    /**
     * UUS content sent on the HI2 or HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    uUS4_Messages = 2,
    /**
     * TETRA circuit call. Possible call content is established on the HI3
     * circuit interface. Possible data are sent on the HI3 data interface.
     * Clause A.9.2.1.0 requires this value for the TETRA events defined in that
     * clause. Clause A.4.1.1 requires TETRA encoded speech on a circuit
     * handover to be encoded again, as in ETSI TS 100 392-3-6, so that it fits
     * a 64 kbit/s bearer.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1.1, clause A.9.2.1.0,
     * clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    tETRA_circuit_call = 3,
    /**
     * TETRA packet data. The data are sent on the HI3 data interface. Clause
     * A.4.2.1 requires TETRA encoded speech on a packet handover to be encoded
     * as in ETSI TS 100 392-3-7.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.2.1, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    teTRA_Packet_Data = 4,
    /**
     * GPRS packet data. The data are sent on the HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    gPRS_Packet_Data = 5,
    /**
     * UMTS circuit call. Possible call content is established on the HI3
     * circuit interface. Possible data are sent on the HI3 data interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    uMTS_circuit_call = 6,
    /**
     * SMS from an LTE handset. The SMS content is sent on the HI2 or HI3 data
     * interface.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lTE_SMS_Message = 7,
    /**
     * Indicator for a circuit-switched call from an LTE handset. The module
     * comment states no further delivery rule for this value.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    lTE_circuit_call = 8,
}

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call
 * @description
 * 
 * Nature of the intercepted call and the handover interface that carries its
 * user data or call content. Clause A.9.2.1.0 requires `tETRA-circuit-call` for
 * the TETRA events in annex A.9. An extension marker separates the later values
 * from the earlier ones.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.9.2.1.0, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-nature-Of-The-intercepted-call ::= ENUMERATED {
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
type Tetra_IRI_Parameters_nature_Of_The_intercepted_call = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call | ENUMERATED;

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call
 * @description
 *
 * Circuit call on GSM, ISDN, or PSTN. Possible UUS content is sent on the HI2
 * or HI3 data interface. Possible call content is established on the HI3
 * circuit interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.gSM_ISDN_PSTN_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_ISDN_PSTN_circuit_call
 * @description
 *
 * Circuit call on GSM, ISDN, or PSTN. Possible UUS content is sent on the HI2
 * or HI3 data interface. Possible call content is established on the HI3
 * circuit interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gSM_ISDN_PSTN_circuit_call = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message
 * @description
 *
 * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.gSM_SMS_Message satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_SMS_Message
 * @description
 *
 * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gSM_SMS_Message = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages
 * @description
 *
 * UUS content sent on the HI2 or HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.uUS4_Messages satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uUS4_Messages
 * @description
 *
 * UUS content sent on the HI2 or HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const uUS4_Messages = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call
 * @description
 *
 * TETRA circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface. Clause A.9.2.1.0
 * requires this value for the TETRA events defined in that clause. Clause
 * A.4.1.1 requires TETRA encoded speech on a circuit handover to be encoded
 * again, as in ETSI TS 100 392-3-6, so that it fits a 64 kbit/s bearer.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1.1, clause A.9.2.1.0, clause
 * D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.tETRA_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tETRA_circuit_call
 * @description
 *
 * TETRA circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface. Clause A.9.2.1.0
 * requires this value for the TETRA events defined in that clause. Clause
 * A.4.1.1 requires TETRA encoded speech on a circuit handover to be encoded
 * again, as in ETSI TS 100 392-3-6, so that it fits a 64 kbit/s bearer.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.1.1, clause A.9.2.1.0, clause
 * D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const tETRA_circuit_call = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data
 * @description
 *
 * TETRA packet data. The data are sent on the HI3 data interface. Clause
 * A.4.2.1 requires TETRA encoded speech on a packet handover to be encoded as
 * in ETSI TS 100 392-3-7.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.teTRA_Packet_Data satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teTRA_Packet_Data
 * @description
 *
 * TETRA packet data. The data are sent on the HI3 data interface. Clause
 * A.4.2.1 requires TETRA encoded speech on a packet handover to be encoded as
 * in ETSI TS 100 392-3-7.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.4.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const teTRA_Packet_Data = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data
 * @description
 *
 * GPRS packet data. The data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.gPRS_Packet_Data satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Packet_Data
 * @description
 *
 * GPRS packet data. The data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const gPRS_Packet_Data = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call
 * @description
 *
 * UMTS circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.uMTS_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uMTS_circuit_call
 * @description
 *
 * UMTS circuit call. Possible call content is established on the HI3 circuit
 * interface. Possible data are sent on the HI3 data interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const uMTS_circuit_call = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message
 * @description
 *
 * SMS from an LTE handset. The SMS content is sent on the HI2 or HI3 data
 * interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.lTE_SMS_Message satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTE_SMS_Message
 * @description
 *
 * SMS from an LTE handset. The SMS content is sent on the HI2 or HI3 data
 * interface.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lTE_SMS_Message = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call
 * @description
 *
 * Indicator for a circuit-switched call from an LTE handset. The module comment
 * states no further delivery rule for this value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call = _enum_for_Tetra_IRI_Parameters_nature_Of_The_intercepted_call.lTE_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTE_circuit_call
 * @description
 *
 * Indicator for a circuit-switched call from an LTE handset. The module comment
 * states no further delivery rule for this value.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const lTE_circuit_call = Tetra_IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call satisfies Tetra_IRI_Parameters_nature_Of_The_intercepted_call; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Decoder<Tetra_IRI_Parameters_nature_Of_The_intercepted_call> = $._decodeEnumerated;
export const _encode_Tetra_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Encoder<Tetra_IRI_Parameters_nature_Of_The_intercepted_call> = $._encodeEnumerated;


/* eslint-enable */
