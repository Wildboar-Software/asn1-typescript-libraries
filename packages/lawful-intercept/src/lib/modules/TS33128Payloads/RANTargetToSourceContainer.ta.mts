/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANTargetToSourceContainer
 * @description
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
