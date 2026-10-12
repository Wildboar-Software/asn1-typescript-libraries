/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BarometricPressure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BarometricPressure  ::=  INTEGER (30000..115000)
 * ```
 */
export
type BarometricPressure = INTEGER;
export const _decode_BarometricPressure: $.ASN1Decoder<BarometricPressure> = $._decodeInteger;
export const _encode_BarometricPressure: $.ASN1Encoder<BarometricPressure> = $._encodeInteger;


/* eslint-enable */
