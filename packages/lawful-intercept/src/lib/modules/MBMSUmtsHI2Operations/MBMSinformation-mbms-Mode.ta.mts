/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MBMSinformation_mbms_Mode {
    multicast = 0,
    broadcast = 1,
}

/**
 * @summary MBMSinformation_mbms_Mode
 * @description
 * 
 * Broadcast or multicast mode of the MBMS bearer service.
 * 
 * 3GPP TS 33.108, table 9.2 and annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbms-Mode ::= ENUMERATED {
 *     multicast    (0),
 *     broadcast    (1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbms_Mode = _enum_for_MBMSinformation_mbms_Mode | ENUMERATED;

/**
 * @summary MBMSinformation_mbms_Mode_multicast
 * @description
 * 
 * The MBMS bearer is in multicast mode (table 9.2).
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbms_Mode_multicast: MBMSinformation_mbms_Mode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multicast
 * @description
 * 
 * Multicast mode of the MBMS bearer (table 9.2).
 * @constant
 * @type {number}
 */
export
const multicast: MBMSinformation_mbms_Mode = MBMSinformation_mbms_Mode_multicast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbms_Mode_broadcast
 * @description
 * 
 * The MBMS bearer is in broadcast mode (table 9.2). Clause 9.6 gives no
 * content-of-communication capability for broadcast services, because the UE
 * receives them in idle mode without an active network connection.
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbms_Mode_broadcast: MBMSinformation_mbms_Mode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @description
 * 
 * Broadcast mode of the MBMS bearer (table 9.2).
 * @constant
 * @type {number}
 */
export
const broadcast: MBMSinformation_mbms_Mode = MBMSinformation_mbms_Mode_broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MBMSinformation_mbms_Mode: $.ASN1Decoder<MBMSinformation_mbms_Mode> = $._decodeEnumerated;
export const _encode_MBMSinformation_mbms_Mode: $.ASN1Encoder<MBMSinformation_mbms_Mode> = $._encodeEnumerated;


/* eslint-enable */
