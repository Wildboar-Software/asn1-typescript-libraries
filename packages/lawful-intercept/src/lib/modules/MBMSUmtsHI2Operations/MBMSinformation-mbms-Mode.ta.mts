/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation-mbms-Mode ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type MBMSinformation_mbms_Mode = _enum_for_MBMSinformation_mbms_Mode | ENUMERATED;

/**
 * @summary MBMSinformation_mbms_Mode_multicast
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbms_Mode_multicast: MBMSinformation_mbms_Mode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multicast
 * @constant
 * @type {number}
 */
export
const multicast: MBMSinformation_mbms_Mode = MBMSinformation_mbms_Mode_multicast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMSinformation_mbms_Mode_broadcast
 * @constant
 * @type {number}
 */
export
const MBMSinformation_mbms_Mode_broadcast: MBMSinformation_mbms_Mode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary broadcast
 * @constant
 * @type {number}
 */
export
const broadcast: MBMSinformation_mbms_Mode = MBMSinformation_mbms_Mode_broadcast; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_MBMSinformation_mbms_Mode: $.ASN1Decoder<MBMSinformation_mbms_Mode> = $._decodeEnumerated;

export const _encode_MBMSinformation_mbms_Mode: $.ASN1Encoder<MBMSinformation_mbms_Mode> = $._encodeEnumerated;


/* eslint-enable */
