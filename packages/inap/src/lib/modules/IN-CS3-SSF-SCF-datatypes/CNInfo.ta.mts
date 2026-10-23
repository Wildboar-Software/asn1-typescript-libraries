/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CNInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNInfo  ::=  OCTET STRING
 * ```
 */
export
type CNInfo = OCTET_STRING; // OctetStringType

export
const _decode_CNInfo: $.ASN1Decoder<CNInfo> = $._decodeOctetString;

export
const _encode_CNInfo: $.ASN1Encoder<CNInfo> = $._encodeOctetString;

/* eslint-enable */
