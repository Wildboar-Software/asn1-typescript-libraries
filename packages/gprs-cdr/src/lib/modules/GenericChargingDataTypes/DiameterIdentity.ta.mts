/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiameterIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiameterIdentity  ::=  OCTET STRING
 * ```
 */
export
type DiameterIdentity = OCTET_STRING; // OctetStringType

export
const _decode_DiameterIdentity: $.ASN1Decoder<DiameterIdentity> = $._decodeOctetString;

export
const _encode_DiameterIdentity: $.ASN1Encoder<DiameterIdentity> = $._encodeOctetString;

/* eslint-enable */
