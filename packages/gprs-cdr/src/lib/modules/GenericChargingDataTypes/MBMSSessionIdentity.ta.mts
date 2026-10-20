/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMSSessionIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSSessionIdentity  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type MBMSSessionIdentity = OCTET_STRING; // OctetStringType

export
const _decode_MBMSSessionIdentity: $.ASN1Decoder<MBMSSessionIdentity> = $._decodeOctetString;

export
const _encode_MBMSSessionIdentity: $.ASN1Encoder<MBMSSessionIdentity> = $._encodeOctetString;

/* eslint-enable */
