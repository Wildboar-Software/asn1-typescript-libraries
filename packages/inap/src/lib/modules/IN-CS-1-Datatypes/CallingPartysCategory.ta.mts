/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartysCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartysCategory  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type CallingPartysCategory = OCTET_STRING; // OctetStringType

export
const _decode_CallingPartysCategory: $.ASN1Decoder<CallingPartysCategory> = $._decodeOctetString;

export
const _encode_CallingPartysCategory: $.ASN1Encoder<CallingPartysCategory> = $._encodeOctetString;

/* eslint-enable */
