/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseValue  ::= 
 *   OCTET STRING(SIZE (1))
 * ```
 */
export
type CauseValue = OCTET_STRING; // OctetStringType

export
const _decode_CauseValue: $.ASN1Decoder<CauseValue> = $._decodeOctetString;

export
const _encode_CauseValue: $.ASN1Encoder<CauseValue> = $._encodeOctetString;

/* eslint-enable */
