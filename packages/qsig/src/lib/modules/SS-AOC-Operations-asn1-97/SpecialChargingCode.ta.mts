/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpecialChargingCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecialChargingCode  ::=  INTEGER (1..10)
 * ```
 */
export
type SpecialChargingCode = INTEGER;

export
const _decode_SpecialChargingCode: $.ASN1Decoder<SpecialChargingCode> = $._decodeInteger;

export
const _encode_SpecialChargingCode: $.ASN1Encoder<SpecialChargingCode> = $._encodeInteger;

/* eslint-enable */
