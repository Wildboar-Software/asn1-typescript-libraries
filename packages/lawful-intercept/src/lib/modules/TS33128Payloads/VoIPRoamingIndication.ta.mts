/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VoIPRoamingIndication {
    roamingLBO = 1,
    roamingS8HR = 2,
    roamingN9HR = 3,
}

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoIPRoamingIndication = _enum_for_VoIPRoamingIndication;

/**
 * @summary VoIPRoamingIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoIPRoamingIndication  ::=  ENUMERATED
 * {
 *     roamingLBO(1),
 *     roamingS8HR(2),
 *     roamingN9HR(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VoIPRoamingIndication = _enum_for_VoIPRoamingIndication;

/**
 * @summary VoIPRoamingIndication_roamingLBO
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication.roamingLBO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingLBO
 * @constant
 * @type {number}
 */
export
const roamingLBO: VoIPRoamingIndication = VoIPRoamingIndication.roamingLBO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingS8HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingS8HR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingS8HR
 * @constant
 * @type {number}
 */
export
const roamingS8HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingS8HR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoIPRoamingIndication_roamingN9HR
 * @constant
 * @type {number}
 */
export
const VoIPRoamingIndication_roamingN9HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingN9HR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamingN9HR
 * @constant
 * @type {number}
 */
export
const roamingN9HR: VoIPRoamingIndication = VoIPRoamingIndication.roamingN9HR; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_VoIPRoamingIndication: $.ASN1Decoder<VoIPRoamingIndication> = $._decodeEnumerated;
export const _encode_VoIPRoamingIndication: $.ASN1Encoder<VoIPRoamingIndication> = $._encodeEnumerated;


/* eslint-enable */
