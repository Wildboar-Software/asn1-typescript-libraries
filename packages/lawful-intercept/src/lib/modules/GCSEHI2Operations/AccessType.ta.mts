/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AccessType {
    ePS_Unicast = 1,
    ePS_Multicast = 2,
}

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *         ePS-Unicast   (1),
 *         ePS-Multicast (2),     
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessType = _enum_for_AccessType | ENUMERATED;

/**
 * @summary AccessType_ePS_Unicast
 * @constant
 * @type {number}
 */
export
const AccessType_ePS_Unicast: AccessType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePS_Unicast
 * @constant
 * @type {number}
 */
export
const ePS_Unicast: AccessType = AccessType_ePS_Unicast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_ePS_Multicast
 * @constant
 * @type {number}
 */
export
const AccessType_ePS_Multicast: AccessType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePS_Multicast
 * @constant
 * @type {number}
 */
export
const ePS_Multicast: AccessType = AccessType_ePS_Multicast; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_AccessType: $.ASN1Decoder<AccessType> = $._decodeEnumerated;

export const _encode_AccessType: $.ASN1Encoder<AccessType> = $._encodeEnumerated;


/* eslint-enable */
