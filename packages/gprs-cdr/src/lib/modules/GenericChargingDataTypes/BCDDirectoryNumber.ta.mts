/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BCDDirectoryNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCDDirectoryNumber  ::=  OCTET STRING
 * ```
 */
export
type BCDDirectoryNumber = OCTET_STRING; // OctetStringType

export
const _decode_BCDDirectoryNumber: $.ASN1Decoder<BCDDirectoryNumber> = $._decodeOctetString;

export
const _encode_BCDDirectoryNumber: $.ASN1Encoder<BCDDirectoryNumber> = $._encodeOctetString;

/* eslint-enable */
