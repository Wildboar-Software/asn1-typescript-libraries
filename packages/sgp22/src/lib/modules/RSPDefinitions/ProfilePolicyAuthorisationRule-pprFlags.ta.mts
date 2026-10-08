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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfilePolicyAuthorisationRule-pprFlags ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfilePolicyAuthorisationRule_pprFlags = BIT_STRING;

/**
 * @summary ProfilePolicyAuthorisationRule_pprFlags_consentRequired
 * @constant
 */
export
const ProfilePolicyAuthorisationRule_pprFlags_consentRequired: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consentRequired
 * @constant
 */
export
const consentRequired: number = ProfilePolicyAuthorisationRule_pprFlags_consentRequired; /* SHORT_NAMED_BIT */
export const _decode_ProfilePolicyAuthorisationRule_pprFlags = $._decodeBitString;
export const _encode_ProfilePolicyAuthorisationRule_pprFlags = $._encodeBitString;


/* eslint-enable */
