/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANTargetToSourceContainer
 * @description
 * 
 * Provides radio related information from gaining to losing NG-RAN node that
 * the AMF receives from the gaining RAN Node in the HANDOVER REQUEST
 * ACKNOWLEDGE message. See TS 38.413 [23] clause 9.3.1.21.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANTargetToSourceContainer  ::=  OCTET STRING
 * ```
 */
export
type RANTargetToSourceContainer = OCTET_STRING; // OctetStringType
export const _decode_RANTargetToSourceContainer: $.ASN1Decoder<RANTargetToSourceContainer> = $._decodeOctetString;
export const _encode_RANTargetToSourceContainer: $.ASN1Encoder<RANTargetToSourceContainer> = $._encodeOctetString;


/* eslint-enable */
