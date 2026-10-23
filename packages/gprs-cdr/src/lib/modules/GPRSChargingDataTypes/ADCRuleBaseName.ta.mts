/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ADCRuleBaseName
 * @description
 *
 * ADC Rule Base Name is the reference to group of ADC rules predefined at
 * the TDF. This field is included if any of the ADC rules, which usage is
 * reported within this service data container, was activated by using the
 * ADC Rule Base Name as specified in TS 29.212 [220]. In case multiple ADC
 * Rule Base Names activate ADC rules, which usage is reported within this
 * service data container, the TDF shall include only one occurrence to the
 * service data container.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
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
