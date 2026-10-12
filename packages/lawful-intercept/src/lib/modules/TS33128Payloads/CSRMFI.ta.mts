/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSRMFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSRMFI  ::=  BOOLEAN
 * ```
 */
export
type CSRMFI = BOOLEAN; // BooleanType
export const _decode_CSRMFI: $.ASN1Decoder<CSRMFI> = $._decodeBoolean;
export const _encode_CSRMFI: $.ASN1Encoder<CSRMFI> = $._encodeBoolean;


/* eslint-enable */
