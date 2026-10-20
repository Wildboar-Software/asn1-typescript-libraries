/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ValidityPeriodRel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriodRel  ::=  INTEGER (0..255)
 * ```
 */
export
type ValidityPeriodRel = INTEGER;

export
const _decode_ValidityPeriodRel: $.ASN1Decoder<ValidityPeriodRel> = $._decodeInteger;

export
const _encode_ValidityPeriodRel: $.ASN1Encoder<ValidityPeriodRel> = $._encodeInteger;

/* eslint-enable */
