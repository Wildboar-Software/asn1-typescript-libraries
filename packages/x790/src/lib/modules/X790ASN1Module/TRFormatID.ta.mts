/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TRFormatID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRFormatID  ::=  INTEGER
 * ```
 */
export
type TRFormatID = INTEGER;
export const _decode_TRFormatID: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_TRFormatID: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
