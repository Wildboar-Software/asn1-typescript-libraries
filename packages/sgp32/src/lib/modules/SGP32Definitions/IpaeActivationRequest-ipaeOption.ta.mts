/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaeActivationRequest_ipaeOption
 * @description
 * 
 * Options byte of `IpaeActivationRequest`. `activateIpae` set to 1 requests
 * activation of IPAe. SGP.32 v1.2, section 3.8.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationRequest-ipaeOption ::= BIT STRING {
 *     activateIpae(0) -- IPAe activation
 * }
 * ```
 */
export
type IpaeActivationRequest_ipaeOption = BIT_STRING;

/**
 * @summary IpaeActivationRequest_ipaeOption_activateIpae
 * @description
 * Set to 1 to request activation of the IPA in the eUICC. SGP.32 v1.2, section
 * 3.8.4.
 * @constant
 */
export
const IpaeActivationRequest_ipaeOption_activateIpae: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activateIpae
 * @description
 * Set to 1 to request activation of IPAe. SGP.32 v1.2, section 3.8.4.
 * @constant
 */
export
const activateIpae: number = IpaeActivationRequest_ipaeOption_activateIpae; /* SHORT_NAMED_BIT */
export const _decode_IpaeActivationRequest_ipaeOption: $.ASN1Decoder<IpaeActivationRequest_ipaeOption> = $._decodeBitString;
export const _encode_IpaeActivationRequest_ipaeOption: $.ASN1Encoder<IpaeActivationRequest_ipaeOption> = $._encodeBitString;


/* eslint-enable */
