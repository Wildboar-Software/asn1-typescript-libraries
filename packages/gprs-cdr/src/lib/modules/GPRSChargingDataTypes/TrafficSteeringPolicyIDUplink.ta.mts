/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrafficSteeringPolicyIDUplink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficSteeringPolicyIDUplink  ::=  OCTET STRING
 * ```
 */
export
type TrafficSteeringPolicyIDUplink = OCTET_STRING; // OctetStringType

export
const _decode_TrafficSteeringPolicyIDUplink: $.ASN1Decoder<TrafficSteeringPolicyIDUplink> = $._decodeOctetString;

export
const _encode_TrafficSteeringPolicyIDUplink: $.ASN1Encoder<TrafficSteeringPolicyIDUplink> = $._encodeOctetString;

/* eslint-enable */
