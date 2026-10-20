/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrafficSteeringPolicyIDDownlink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TrafficSteeringPolicyIDDownlink  ::=  OCTET STRING
 * ```
 */
export
type TrafficSteeringPolicyIDDownlink = OCTET_STRING; // OctetStringType

export
const _decode_TrafficSteeringPolicyIDDownlink: $.ASN1Decoder<TrafficSteeringPolicyIDDownlink> = $._decodeOctetString;

export
const _encode_TrafficSteeringPolicyIDDownlink: $.ASN1Encoder<TrafficSteeringPolicyIDDownlink> = $._encodeOctetString;

/* eslint-enable */
