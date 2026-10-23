/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxCallResultLength } from "./maxCallResultLength.va.mjs";
import { minCallResultLength } from "./minCallResultLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallResult  ::=  OCTET STRING(SIZE (minCallResultLength..maxCallResultLength))
 * ```
 */
export
type CallResult = OCTET_STRING; // OctetStringType

export
function _decode_CallResult (el: _Element): CallResult {
    const value = $._decodeOctetString(el);
    if (value.length < minCallResultLength || value.length > maxCallResultLength) {
        throw new ASN1SizeError("CallResult violates SIZE constraint");
    }
    return value;
}

export
const _encode_CallResult: $.ASN1Encoder<CallResult> = $._encodeOctetString;

/* eslint-enable */
