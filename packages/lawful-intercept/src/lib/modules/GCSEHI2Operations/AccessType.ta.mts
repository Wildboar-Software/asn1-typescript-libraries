/* eslint-disable */
import {
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
 * Whether a GCSE access is EPS unicast or EPS multicast. 3GPP TS 33.108, annex
 * B.14.1.
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
 * @description
 * 
 * EPS unicast access to the GCS AS. 3GPP TS 33.108, annex B.14.1. Clause 14.3
 * refers to an LTE unicast bearer for a target whose GCS AS is outside the
 * intercepting network.
 * 
 * @constant
 * @type {number}
 */
export
const AccessType_ePS_Unicast: AccessType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePS_Unicast
 * @description
 * 
 * EPS unicast. 3GPP TS 33.108, annex B.14.1.
 * 
 * @constant
 * @type {number}
 */
export
const ePS_Unicast: AccessType = AccessType_ePS_Unicast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_ePS_Multicast
 * @description
 * 
 * EPS multicast access. Downstream multicast delivery uses the reserved TMGI
 * when that TMGI is known. 3GPP TS 33.108, clause 14.2.6 and annex B.14.1.
 * 
 * @constant
 * @type {number}
 */
export
const AccessType_ePS_Multicast: AccessType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePS_Multicast
 * @description
 * 
 * EPS multicast. 3GPP TS 33.108, annex B.14.1.
 * 
 * @constant
 * @type {number}
 */
export
const ePS_Multicast: AccessType = AccessType_ePS_Multicast; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessType: $.ASN1Decoder<AccessType> = $._decodeEnumerated;
export const _encode_AccessType: $.ASN1Encoder<AccessType> = $._encodeEnumerated;


/* eslint-enable */
