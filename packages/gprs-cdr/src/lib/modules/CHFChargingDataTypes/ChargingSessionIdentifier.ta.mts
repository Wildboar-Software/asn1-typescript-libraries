/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargingSessionIdentifier
 * @description
 *
 * This field holds the Session Identifier described in TS 32.290 [57].
 *
 * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
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
