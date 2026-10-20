/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ADCRuleBaseName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADCRuleBaseName  ::=  IA5String
 * ```
 */
export
type ADCRuleBaseName = IA5String; // IA5String

export
const _decode_ADCRuleBaseName: $.ASN1Decoder<ADCRuleBaseName> = $._decodeIA5String;

export
const _encode_ADCRuleBaseName: $.ASN1Encoder<ADCRuleBaseName> = $._encodeIA5String;

/* eslint-enable */
