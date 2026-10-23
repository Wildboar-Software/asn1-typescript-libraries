/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HoldCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldCause  ::=  OCTET STRING
 * ```
 */
export
type HoldCause = OCTET_STRING; // OctetStringType

export
const _decode_HoldCause: $.ASN1Decoder<HoldCause> = $._decodeOctetString;

export
const _encode_HoldCause: $.ASN1Encoder<HoldCause> = $._encodeOctetString;

/* eslint-enable */
