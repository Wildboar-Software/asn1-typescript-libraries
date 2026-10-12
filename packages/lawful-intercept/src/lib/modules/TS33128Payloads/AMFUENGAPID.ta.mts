/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUENGAPID  ::=  INTEGER (0..1099511627775)
 * ```
 */
export
type AMFUENGAPID = INTEGER;
export const _decode_AMFUENGAPID: $.ASN1Decoder<AMFUENGAPID> = $._decodeInteger;
export const _encode_AMFUENGAPID: $.ASN1Encoder<AMFUENGAPID> = $._encodeInteger;


/* eslint-enable */
