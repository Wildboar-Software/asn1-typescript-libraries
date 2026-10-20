/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectingNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectingNumber  ::=  OCTET STRING
 * ```
 */
export
type RedirectingNumber = OCTET_STRING; // OctetStringType

export
const _decode_RedirectingNumber: $.ASN1Decoder<RedirectingNumber> = $._decodeOctetString;

export
const _encode_RedirectingNumber: $.ASN1Encoder<RedirectingNumber> = $._encodeOctetString;

/* eslint-enable */
