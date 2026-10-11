/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUES1APID  ::=  INTEGER (0..16777215)
 * ```
 */
export
type RANUES1APID = INTEGER;

export const _decode_RANUES1APID: $.ASN1Decoder<RANUES1APID> = $._decodeInteger;

export const _encode_RANUES1APID: $.ASN1Encoder<RANUES1APID> = $._encodeInteger;


/* eslint-enable */
