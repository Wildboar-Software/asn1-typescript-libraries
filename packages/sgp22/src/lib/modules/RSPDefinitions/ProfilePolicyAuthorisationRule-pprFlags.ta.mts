/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfilePolicyAuthorisationRule_pprFlags
 * @description
 * 
 * Flags on one authorisation rule. `consentRequired` means the LPA must obtain
 * End User consent for those PPRs before the Profile is installed. SGP.22 v3.1
 * §2.9.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfilePolicyAuthorisationRule-pprFlags ::= BIT STRING {
 *     consentRequired(0)
 * }
 * ```
 */
export
type ProfilePolicyAuthorisationRule_pprFlags = BIT_STRING;

/**
 * @summary ProfilePolicyAuthorisationRule_pprFlags_consentRequired
 * @description
 * 
 * The LPA must get End User consent for these PPRs before installing the
 * Profile. If several rules match, the first match decides. SGP.22 v3.1
 * §2.9.2.1.
 * 
 * @constant
 */
export
const ProfilePolicyAuthorisationRule_pprFlags_consentRequired: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consentRequired
 * @description
 * 
 * The LPA must get End User consent for these PPRs before installing the
 * Profile. If several rules match, the first match decides. SGP.22 v3.1
 * §2.9.2.1.
 * 
 * @constant
 */
export
const consentRequired: number = ProfilePolicyAuthorisationRule_pprFlags_consentRequired; /* SHORT_NAMED_BIT */
export const _decode_ProfilePolicyAuthorisationRule_pprFlags = $._decodeBitString;
export const _encode_ProfilePolicyAuthorisationRule_pprFlags = $._encodeBitString;


/* eslint-enable */
