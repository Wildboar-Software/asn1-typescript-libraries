/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCSCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSCause    ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type LCSCause = OCTET_STRING; // OctetStringType

export
const _decode_LCSCause: $.ASN1Decoder<LCSCause> = $._decodeOctetString;

export
const _encode_LCSCause: $.ASN1Encoder<LCSCause> = $._encodeOctetString;

/* eslint-enable */
