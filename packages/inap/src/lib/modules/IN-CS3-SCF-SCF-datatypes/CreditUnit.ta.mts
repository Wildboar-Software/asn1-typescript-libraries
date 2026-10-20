/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CreditUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreditUnit  ::=  INTEGER(0..maxCreditUnit)
 * ```
 */
export
type CreditUnit = INTEGER;

export
const _decode_CreditUnit: $.ASN1Decoder<CreditUnit> = $._decodeInteger;

export
const _encode_CreditUnit: $.ASN1Encoder<CreditUnit> = $._encodeInteger;

/* eslint-enable */
