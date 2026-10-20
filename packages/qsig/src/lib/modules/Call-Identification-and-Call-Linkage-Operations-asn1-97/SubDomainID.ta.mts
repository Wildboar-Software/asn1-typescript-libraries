/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubDomainID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubDomainID  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type SubDomainID = OCTET_STRING; // OctetStringType

export
const _decode_SubDomainID: $.ASN1Decoder<SubDomainID> = $._decodeOctetString;

export
const _encode_SubDomainID: $.ASN1Encoder<SubDomainID> = $._encodeOctetString;

/* eslint-enable */
