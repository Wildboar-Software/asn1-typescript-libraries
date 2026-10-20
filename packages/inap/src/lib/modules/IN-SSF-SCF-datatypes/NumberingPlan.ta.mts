/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberingPlan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberingPlan  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export
type NumberingPlan = OCTET_STRING; // OctetStringType

export
const _decode_NumberingPlan: $.ASN1Decoder<NumberingPlan> = $._decodeOctetString;

export
const _encode_NumberingPlan: $.ASN1Encoder<NumberingPlan> = $._encodeOctetString;

/* eslint-enable */
