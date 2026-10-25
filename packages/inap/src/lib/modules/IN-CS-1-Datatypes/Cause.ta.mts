/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxCauseLength } from "./maxCauseLength.va.mjs";
import { minCauseLength } from "./minCauseLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Cause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Cause  ::=  OCTET STRING(SIZE (minCauseLength..maxCauseLength))
 * ```
 */
export
type Cause = OCTET_STRING; // OctetStringType

export
function _decode_Cause (el: _Element): Cause {
    const value = $._decodeOctetString(el);
    if (value.length < minCauseLength || value.length > maxCauseLength) {
        throw new ASN1SizeError("Cause violates SIZE constraint");
    }
    return value;
}

export
const _encode_Cause: $.ASN1Encoder<Cause> = $._encodeOctetString;

/* eslint-enable */
