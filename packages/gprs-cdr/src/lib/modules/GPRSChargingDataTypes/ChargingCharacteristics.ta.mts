/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingCharacteristics  ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type ChargingCharacteristics = OCTET_STRING; // OctetStringType

export
const _decode_ChargingCharacteristics: $.ASN1Decoder<ChargingCharacteristics> = $._decodeOctetString;

export
const _encode_ChargingCharacteristics: $.ASN1Encoder<ChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
