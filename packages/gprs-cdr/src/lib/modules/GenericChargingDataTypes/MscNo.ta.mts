/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MscNo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MscNo       ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type MscNo = OCTET_STRING; // OctetStringType

export
const _decode_MscNo: $.ASN1Decoder<MscNo> = $._decodeOctetString;

export
const _encode_MscNo: $.ASN1Encoder<MscNo> = $._encodeOctetString;

/* eslint-enable */
