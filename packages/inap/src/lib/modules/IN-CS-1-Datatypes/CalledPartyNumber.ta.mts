/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minCalledPartyNumberLength } from "./minCalledPartyNumberLength.va.mjs";
import { maxCalledPartyNumberLength } from "./maxCalledPartyNumberLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyNumber  ::= 
 *   OCTET STRING(SIZE (minCalledPartyNumberLength..maxCalledPartyNumberLength))
 * ```
 */
export
type CalledPartyNumber = OCTET_STRING; // OctetStringType

export
function _decode_CalledPartyNumber (el: _Element): CalledPartyNumber {
    const value = $._decodeOctetString(el);
    if (value.length < minCalledPartyNumberLength || value.length > maxCalledPartyNumberLength) {
        throw new ASN1SizeError("CalledPartyNumber violates SIZE constraint");
    }
    return value;
}

export
const _encode_CalledPartyNumber: $.ASN1Encoder<CalledPartyNumber> = $._encodeOctetString;

/* eslint-enable */
