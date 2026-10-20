/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGId       ::=  OCTET STRING ( SIZE( 4 ) )
 * ```
 */
export
type CSGId = OCTET_STRING; // OctetStringType

export
const _decode_CSGId: $.ASN1Decoder<CSGId> = $._decodeOctetString;

export
const _encode_CSGId: $.ASN1Encoder<CSGId> = $._encodeOctetString;

/* eslint-enable */
