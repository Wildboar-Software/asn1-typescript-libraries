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
 * @constant
 */
export
const IpaeActivationRequest_ipaeOption_activateIpae: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activateIpae
 * @constant
 */
export
const activateIpae: number = IpaeActivationRequest_ipaeOption_activateIpae; /* SHORT_NAMED_BIT */
export const _decode_IpaeActivationRequest_ipaeOption: $.ASN1Decoder<IpaeActivationRequest_ipaeOption> = $._decodeBitString;
export const _encode_IpaeActivationRequest_ipaeOption: $.ASN1Encoder<IpaeActivationRequest_ipaeOption> = $._encodeBitString;


/* eslint-enable */
