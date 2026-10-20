/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NSAPSubaddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSAPSubaddress  ::=  OCTET STRING (SIZE(1..20))
 * ```
 */
export
type NSAPSubaddress = OCTET_STRING; // OctetStringType

export
const _decode_NSAPSubaddress: $.ASN1Decoder<NSAPSubaddress> = $._decodeOctetString;

export
const _encode_NSAPSubaddress: $.ASN1Encoder<NSAPSubaddress> = $._encodeOctetString;

/* eslint-enable */
