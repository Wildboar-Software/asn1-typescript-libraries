/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingSessionIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingSessionIdentifier  ::=  OCTET STRING
 * ```
 */
export
type ChargingSessionIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_ChargingSessionIdentifier: $.ASN1Decoder<ChargingSessionIdentifier> = $._decodeOctetString;

export
const _encode_ChargingSessionIdentifier: $.ASN1Encoder<ChargingSessionIdentifier> = $._encodeOctetString;

/* eslint-enable */
