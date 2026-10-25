/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QoSInformation
 * @description
 * 
 * APN-AMBR uplink and downlink for the IP-CAN session (table 6.1.3.1).
 * Applicable only when charging per IP-CAN session is active. It is not
 * the per-bearer EPC QoS, which is carried in the traffic-volume and
 * service-data containers and does not include the APN-AMBR (table
 * 6.1.3.2).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoSInformation  ::=  OCTET STRING ( SIZE( 4 .. 255 ) )
 * ```
 */
export
type QoSInformation = OCTET_STRING; // OctetStringType

export const _decode_QoSInformation = (el: _Element): QoSInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 255) {
        throw new ASN1SizeError("QoSInformation violates SIZE constraint");
    }
    return value;
};

export
const _encode_QoSInformation: $.ASN1Encoder<QoSInformation> = $._encodeOctetString;

/* eslint-enable */
