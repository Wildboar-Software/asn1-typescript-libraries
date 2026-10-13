/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_VoIPRoamingIndication {
    roamingLBO = 1,
    roamingS8HR = 2,
}

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED {
 *     roamingLBO            (1), -- used in IMS events sent by VPLMN with LBO as roaming
 *     roamingS8HR            (2), -- used in IMS events sent by VPLMN with S8HR as roaming
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoIPRoamingIndication = _enum_for_VoIPRoamingIndication | ENUMERATED;

/**
 * @summary VoIPRoamingIndication_roamingLBO
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingLBO: VoIPRoamingIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingLBO
 * @constant
 * @type {number}
 */
export
const roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication_roamingLBO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingS8HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingS8HR: VoIPRoamingIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingS8HR
 * @constant
 * @type {number}
 */
export
const roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication_roamingS8HR; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_VoIPRoamingIndication: $.ASN1Decoder<VoIPRoamingIndication> = $._decodeEnumerated;
export const _encode_VoIPRoamingIndication: $.ASN1Encoder<VoIPRoamingIndication> = $._encodeEnumerated;


/* eslint-enable */
