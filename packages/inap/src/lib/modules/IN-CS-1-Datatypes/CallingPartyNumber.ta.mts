/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxCallingPartyNumberLength } from "./maxCallingPartyNumberLength.va.mjs";
import { minCallingPartyNumberLength } from "./minCallingPartyNumberLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallingPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyNumber  ::= 
 *   OCTET STRING(SIZE (minCallingPartyNumberLength..maxCallingPartyNumberLength))
 * ```
 */
export
type CallingPartyNumber = OCTET_STRING; // OctetStringType

export
function _decode_CallingPartyNumber (el: _Element): CallingPartyNumber {
    const value = $._decodeOctetString(el);
    if (value.length < minCallingPartyNumberLength || value.length > maxCallingPartyNumberLength) {
        throw new ASN1SizeError("CallingPartyNumber violates SIZE constraint");
    }
    return value;
}

export
const _encode_CallingPartyNumber: $.ASN1Encoder<CallingPartyNumber> = $._encodeOctetString;

/* eslint-enable */
