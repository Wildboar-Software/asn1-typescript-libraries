/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TrafficSteeringPolicyIDDownlink
 * @description
 *
 * This field contains traffic steering policy identifier in the downlink
 * direction as specified in TS 23.203[203].
 *
 * The P-GW, PCEF, or TDF sends the identifier it used to steer the service
 * data flow to a set of service functions, based on the PCC rule (clause
 * 5.2.1.3).
 * 
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.73cAb.
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
