/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BDBIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDBIndex  ::=  OCTET STRING (SIZE (0..65535))
 * ```
 */
export
type BDBIndex = OCTET_STRING; // OctetStringType

export
const _decode_BDBIndex: $.ASN1Decoder<BDBIndex> = $._decodeOctetString;

export
const _encode_BDBIndex: $.ASN1Encoder<BDBIndex> = $._encodeOctetString;

/* eslint-enable */
