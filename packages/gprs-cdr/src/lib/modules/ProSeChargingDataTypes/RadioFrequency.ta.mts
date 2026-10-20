/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RadioFrequency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RadioFrequency  ::=  OCTET STRING
 * ```
 */
export
type RadioFrequency = OCTET_STRING; // OctetStringType

export
const _decode_RadioFrequency: $.ASN1Decoder<RadioFrequency> = $._decodeOctetString;

export
const _encode_RadioFrequency: $.ASN1Encoder<RadioFrequency> = $._encodeOctetString;

/* eslint-enable */
