/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CTEID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTEID       ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type CTEID = OCTET_STRING; // OctetStringType

export
const _decode_CTEID: $.ASN1Decoder<CTEID> = $._decodeOctetString;

export
const _encode_CTEID: $.ASN1Encoder<CTEID> = $._encodeOctetString;

/* eslint-enable */
