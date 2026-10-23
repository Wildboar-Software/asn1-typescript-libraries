/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalculationParam
 * @description
 *
 * Parameter used when calculating the authentication session key from the real
 * authentication key. It may be transferred to the CTM user during both SS-CTAT
 * and SS-CTAN (ECMA-243 §6.3.1). ECMA-243 does not define that calculation
 * (§1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
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
