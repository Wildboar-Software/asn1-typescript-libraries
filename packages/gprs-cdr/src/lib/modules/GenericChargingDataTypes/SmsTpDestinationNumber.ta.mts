/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SmsTpDestinationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsTpDestinationNumber  ::=  OCTET STRING
 * ```
 */
export
type SmsTpDestinationNumber = OCTET_STRING; // OctetStringType

export
const _decode_SmsTpDestinationNumber: $.ASN1Decoder<SmsTpDestinationNumber> = $._decodeOctetString;

export
const _encode_SmsTpDestinationNumber: $.ASN1Encoder<SmsTpDestinationNumber> = $._encodeOctetString;

/* eslint-enable */
