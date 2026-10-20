/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
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

export const _decode_ChargingCharacteristics = (el: _Element): ChargingCharacteristics => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("ChargingCharacteristics violates SIZE constraint");
    }
    return value;
};

export
const _encode_ChargingCharacteristics: $.ASN1Encoder<ChargingCharacteristics> = $._encodeOctetString;

/* eslint-enable */
