/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  OCTET STRING
 * ```
 */
export
type FailureCause = OCTET_STRING; // OctetStringType

export
const _decode_FailureCause: $.ASN1Decoder<FailureCause> = $._decodeOctetString;

export
const _encode_FailureCause: $.ASN1Encoder<FailureCause> = $._encodeOctetString;

/* eslint-enable */
