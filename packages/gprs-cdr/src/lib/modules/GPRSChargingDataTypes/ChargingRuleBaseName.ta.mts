/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingRuleBaseName
 * @description
 *
 * Charging Rule Base Name is the reference to group of PCC rules predefined
 * at the PCEF. This field is included if any of the PCC rules, which usage
 * is reported within this service data container, was activated by using the
 * Charging Rule Base Name as specified in TS 29.212 [220]. In case multiple
 * Charging Rule Base Names activate PCC rules, which usage is reported
 * within this service data container, the P-GW/IPE-CDR shall include only
 * one occurrence to the service data container.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingRuleBaseName  ::=  IA5String
 * ```
 */
export
type ChargingRuleBaseName = IA5String; // IA5String

export
const _decode_ChargingRuleBaseName: $.ASN1Decoder<ChargingRuleBaseName> = $._decodeIA5String;

export
const _encode_ChargingRuleBaseName: $.ASN1Encoder<ChargingRuleBaseName> = $._encodeIA5String;

/* eslint-enable */
