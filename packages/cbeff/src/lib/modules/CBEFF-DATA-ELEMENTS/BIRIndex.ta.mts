/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BIRIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIRIndex  ::=  OCTET STRING (SIZE(0..65535))
 * ```
 */
export
type BIRIndex = OCTET_STRING; // OctetStringType

export
const _decode_BIRIndex: $.ASN1Decoder<BIRIndex> = $._decodeOctetString;

export
const _encode_BIRIndex: $.ASN1Encoder<BIRIndex> = $._encodeOctetString;

/* eslint-enable */
