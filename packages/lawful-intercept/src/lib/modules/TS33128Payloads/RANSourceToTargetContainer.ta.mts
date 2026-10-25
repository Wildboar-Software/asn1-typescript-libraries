/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANSourceToTargetContainer
 * @description
 * 
 * Provides radio related information via the AMF in the HANDOVER REQUEST from
 * source to gaining NG-RAN node. See TS 38.413 [23] clause 9.3.1.21.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANSourceToTargetContainer  ::=  OCTET STRING
 * ```
 */
export
type RANSourceToTargetContainer = OCTET_STRING; // OctetStringType
export const _decode_RANSourceToTargetContainer: $.ASN1Decoder<RANSourceToTargetContainer> = $._decodeOctetString;
export const _encode_RANSourceToTargetContainer: $.ASN1Encoder<RANSourceToTargetContainer> = $._encodeOctetString;


/* eslint-enable */
