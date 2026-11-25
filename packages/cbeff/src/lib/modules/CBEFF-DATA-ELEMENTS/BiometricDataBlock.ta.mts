/* eslint-disable */
import {
    type OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BiometricDataBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricDataBlock  ::=  OCTET STRING
 * ```
 */
export
type BiometricDataBlock = OCTET_STRING; // OctetStringType

export
const _decode_BiometricDataBlock: $.ASN1Decoder<BiometricDataBlock> = $._decodeOctetString;

export
const _encode_BiometricDataBlock: $.ASN1Encoder<BiometricDataBlock> = $._encodeOctetString;

/* eslint-enable */
