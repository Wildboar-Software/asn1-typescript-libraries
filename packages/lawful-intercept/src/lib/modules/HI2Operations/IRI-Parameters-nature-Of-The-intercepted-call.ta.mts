/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
    uMTS_circuit_call = 6,
    lTE_SMS_Message = 7,
    lTE_circuit_call = 8,
}

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters-nature-Of-The-intercepted-call ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type IRI_Parameters_nature_Of_The_intercepted_call = _enum_for_IRI_Parameters_nature_Of_The_intercepted_call | ENUMERATED;

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_ISDN_PSTN_circuit_call
 * @constant
 * @type {number}
 */
export
const gSM_ISDN_PSTN_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_gSM_ISDN_PSTN_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gSM_SMS_Message
 * @constant
 * @type {number}
 */
export
const gSM_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_gSM_SMS_Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages: IRI_Parameters_nature_Of_The_intercepted_call = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uUS4_Messages
 * @constant
 * @type {number}
 */
export
const uUS4_Messages: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_uUS4_Messages; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tETRA_circuit_call
 * @constant
 * @type {number}
 */
export
const tETRA_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_tETRA_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary teTRA_Packet_Data
 * @constant
 * @type {number}
 */
export
const teTRA_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_teTRA_Packet_Data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Packet_Data
 * @constant
 * @type {number}
 */
export
const gPRS_Packet_Data: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_gPRS_Packet_Data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uMTS_circuit_call
 * @constant
 * @type {number}
 */
export
const uMTS_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_uMTS_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTE_SMS_Message
 * @constant
 * @type {number}
 */
export
const lTE_SMS_Message: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_lTE_SMS_Message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call
 * @constant
 * @type {number}
 */
export
const IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTE_circuit_call
 * @constant
 * @type {number}
 */
export
const lTE_circuit_call: IRI_Parameters_nature_Of_The_intercepted_call = IRI_Parameters_nature_Of_The_intercepted_call_lTE_circuit_call; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Decoder<IRI_Parameters_nature_Of_The_intercepted_call> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters_nature_Of_The_intercepted_call
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters_nature_Of_The_intercepted_call (el: _Element): IRI_Parameters_nature_Of_The_intercepted_call {
    if (!_cached_decoder_for_IRI_Parameters_nature_Of_The_intercepted_call) { _cached_decoder_for_IRI_Parameters_nature_Of_The_intercepted_call = $._decodeEnumerated; }
    return _cached_decoder_for_IRI_Parameters_nature_Of_The_intercepted_call(el);
}

let _cached_encoder_for_IRI_Parameters_nature_Of_The_intercepted_call: $.ASN1Encoder<IRI_Parameters_nature_Of_The_intercepted_call> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters_nature_Of_The_intercepted_call into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters_nature_Of_The_intercepted_call, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters_nature_Of_The_intercepted_call (value: IRI_Parameters_nature_Of_The_intercepted_call, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters_nature_Of_The_intercepted_call) { _cached_encoder_for_IRI_Parameters_nature_Of_The_intercepted_call = $._encodeEnumerated; }
    return _cached_encoder_for_IRI_Parameters_nature_Of_The_intercepted_call(value, elGetter);
}


/* eslint-enable */
