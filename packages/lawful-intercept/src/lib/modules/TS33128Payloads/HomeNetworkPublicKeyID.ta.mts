/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkPublicKeyID
 * @description
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
