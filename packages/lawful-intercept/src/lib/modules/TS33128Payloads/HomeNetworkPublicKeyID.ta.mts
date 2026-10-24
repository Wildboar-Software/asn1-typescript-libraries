/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkPublicKeyID
 * @description
 * 
 * Identifies the public key used when generating the SUCI. See TS 23.003 [19]
 * clause 2.2B. This parameter shall be encoded as an OCTET STRING with a single
 * octet containing the Home Network Public Key ID described in 23.003 [19]
 * clause 2.2B.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HomeNetworkPublicKeyID  ::=  OCTET STRING
 * ```
 */
export
type HomeNetworkPublicKeyID = OCTET_STRING; // OctetStringType
export const _decode_HomeNetworkPublicKeyID: $.ASN1Decoder<HomeNetworkPublicKeyID> = $._decodeOctetString;
export const _encode_HomeNetworkPublicKeyID: $.ASN1Encoder<HomeNetworkPublicKeyID> = $._encodeOctetString;


/* eslint-enable */
