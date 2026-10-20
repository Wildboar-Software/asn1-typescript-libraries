/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlertingPattern
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertingPattern  ::=  OCTET STRING(SIZE (3))
 * ```
 */
export
type AlertingPattern = OCTET_STRING; // OctetStringType

export
const _decode_AlertingPattern: $.ASN1Decoder<AlertingPattern> = $._decodeOctetString;

export
const _encode_AlertingPattern: $.ASN1Encoder<AlertingPattern> = $._encodeOctetString;

/* eslint-enable */
