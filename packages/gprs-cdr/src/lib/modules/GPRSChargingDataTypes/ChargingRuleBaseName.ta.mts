/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingRuleBaseName
 * @description
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
