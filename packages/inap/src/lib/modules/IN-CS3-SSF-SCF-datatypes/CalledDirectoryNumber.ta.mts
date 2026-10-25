/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledDirectoryNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledDirectoryNumber  ::= 
 *   OCTET STRING
 * ```
 */
export
type CalledDirectoryNumber = OCTET_STRING; // OctetStringType

export
const _decode_CalledDirectoryNumber: $.ASN1Decoder<CalledDirectoryNumber> = $._decodeOctetString;

export
const _encode_CalledDirectoryNumber: $.ASN1Encoder<CalledDirectoryNumber> = $._encodeOctetString;

/* eslint-enable */
