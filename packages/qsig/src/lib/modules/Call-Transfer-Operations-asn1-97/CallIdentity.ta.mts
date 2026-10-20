/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentity  ::=  NumericString (SIZE(1..4))
 * ```
 */
export
type CallIdentity = NumericString; // NumericString

export
const _decode_CallIdentity: $.ASN1Decoder<CallIdentity> = $._decodeNumericString;

export
const _encode_CallIdentity: $.ASN1Encoder<CallIdentity> = $._encodeNumericString;

/* eslint-enable */
