/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minLocationNumberLength } from "./minLocationNumberLength.va.mjs";
import { maxLocationNumberLength } from "./maxLocationNumberLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationNumber  ::= 
 *   OCTET STRING(SIZE (minLocationNumberLength..maxLocationNumberLength))
 * ```
 */
export
type LocationNumber = OCTET_STRING; // OctetStringType

export
function _decode_LocationNumber (el: _Element): LocationNumber {
    const value = $._decodeOctetString(el);
    if (value.length < minLocationNumberLength || value.length > maxLocationNumberLength) {
        throw new ASN1SizeError("LocationNumber violates SIZE constraint");
    }
    return value;
}

export
const _encode_LocationNumber: $.ASN1Encoder<LocationNumber> = $._encodeOctetString;

/* eslint-enable */
