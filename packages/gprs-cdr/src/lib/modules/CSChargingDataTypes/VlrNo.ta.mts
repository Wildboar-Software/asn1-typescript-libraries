/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VlrNo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VlrNo       ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type VlrNo = OCTET_STRING; // OctetStringType

export
const _decode_VlrNo: $.ASN1Decoder<VlrNo> = $._decodeOctetString;

export
const _encode_VlrNo: $.ASN1Encoder<VlrNo> = $._encodeOctetString;

/* eslint-enable */
