/* eslint-disable */
import {
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RANSourceToTargetContainer
 * @description
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
