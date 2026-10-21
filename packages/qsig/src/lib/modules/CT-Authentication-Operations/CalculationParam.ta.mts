/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalculationParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalculationParam  ::=  OCTET STRING (SIZE(1..8))
 * ```
 */
export
type CalculationParam = OCTET_STRING; // OctetStringType

export
const _decode_CalculationParam: $.ASN1Decoder<CalculationParam> = $._decodeOctetString;

export
const _encode_CalculationParam: $.ASN1Encoder<CalculationParam> = $._encodeOctetString;

/* eslint-enable */
