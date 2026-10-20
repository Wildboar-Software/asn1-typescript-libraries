/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFChargingIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFChargingIdentifier  ::=  OCTET STRING
 * ```
 */
export
type AFChargingIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_AFChargingIdentifier: $.ASN1Decoder<AFChargingIdentifier> = $._decodeOctetString;

export
const _encode_AFChargingIdentifier: $.ASN1Encoder<AFChargingIdentifier> = $._encodeOctetString;

/* eslint-enable */
