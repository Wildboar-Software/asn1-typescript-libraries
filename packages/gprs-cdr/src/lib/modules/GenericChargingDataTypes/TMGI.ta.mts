/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TMGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TMGI        ::=  OCTET STRING
 * ```
 */
export
type TMGI = OCTET_STRING; // OctetStringType

export
const _decode_TMGI: $.ASN1Decoder<TMGI> = $._decodeOctetString;

export
const _encode_TMGI: $.ASN1Encoder<TMGI> = $._encodeOctetString;

/* eslint-enable */
