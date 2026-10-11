/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BitrateBinKBPS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BitrateBinKBPS  ::=  OCTET STRING
 * ```
 */
export
type BitrateBinKBPS = OCTET_STRING; // OctetStringType

export const _decode_BitrateBinKBPS: $.ASN1Decoder<BitrateBinKBPS> = $._decodeOctetString;

export const _encode_BitrateBinKBPS: $.ASN1Encoder<BitrateBinKBPS> = $._encodeOctetString;

/* eslint-enable */
