/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_IRI_Parameters_nature_Of_The_intercepted_call {
    gSM_ISDN_PSTN_circuit_call = 0,
    gSM_SMS_Message = 1,
    uUS4_Messages = 2,
    tETRA_circuit_call = 3,
    teTRA_Packet_Data = 4,
    gPRS_Packet_Data = 5,
}

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call
 * @description
 * 
 * GSM-era nature of the intercepted communication. Not required for UMTS;
 * retained for backward compatibility. Each value states which HI2 or HI3
 * interface carries user data and which carries circuit content. 3GPP TS
 * 33.108, annex B.3a.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-nature-Of-The-intercepted-call ::= ENUMERATED {
 *     --Not required for UMTS. May be included for backwards compatibility to GSM
 *     --Nature of the intercepted "call":
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
 *     ...
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
 * GSM/ISDN/PSTN circuit call. Any UUS content is sent on the HI2 or HI3 data
 * interface. Call content uses the HI3 circuit interface. 3GPP TS 33.108, annex
 * B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call.gSM_ISDN_PSTN_circuit_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_ISDN_PSTN_circuit_call
 * @description
 * 
 * Circuit call; content on HI3 circuit. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const gSM_ISDN_PSTN_circuit_call = IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message
 * @description
 * 
 * GSM SMS. The SMS content is sent on the HI2 or HI3 data interface. 3GPP TS
 * 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call.gSM_SMS_Message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_SMS_Message
 * @description
 * 
 * GSM SMS on the data interface. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const gSM_SMS_Message = IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages
 * @description
 * 
 * UUS4 messages. The user-to-user content is sent on the HI2 or HI3 data
 * interface. This is not the annex J UUS1 coding, which is a separate HI3
 * schema. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call.uUS4_Messages; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uUS4_Messages
 * @description
 * 
 * UUS4 on the data interface. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const uUS4_Messages = IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call
 * @description
 * 
 * TETRA circuit call. Call content uses the HI3 circuit interface. Any data use
 * the HI3 data interface. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call.tETRA_circuit_call; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tETRA_circuit_call
 * @description
 * 
 * TETRA circuit call. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const tETRA_circuit_call = IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data
 * @description
 * 
 * TETRA packet data, sent on the HI3 data interface. 3GPP TS 33.108, annex
 * B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call.teTRA_Packet_Data; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teTRA_Packet_Data
 * @description
 * 
 * TETRA packet data on HI3. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const teTRA_Packet_Data = IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data
 * @description
 * 
 * GPRS packet data, sent on the HI3 data interface. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call.gPRS_Packet_Data; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Packet_Data
 * @description
 * 
 * GPRS packet data on HI3. 3GPP TS 33.108, annex B.3a.
 * 
 * @constant
 * @type {number}
 */
export
const gPRS_Packet_Data = IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Decoder<IRI_Parameters_nature_Of_The_intercepted_call> = $._decodeEnumerated;
export const _encode_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Encoder<IRI_Parameters_nature_Of_The_intercepted_call> = $._encodeEnumerated;


/* eslint-enable */
