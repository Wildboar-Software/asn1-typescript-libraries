/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectReason  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type RedirectReason = OCTET_STRING; // OctetStringType

export
const _decode_RedirectReason: $.ASN1Decoder<RedirectReason> = $._decodeOctetString;

export
const _encode_RedirectReason: $.ASN1Encoder<RedirectReason> = $._encodeOctetString;

/* eslint-enable */
