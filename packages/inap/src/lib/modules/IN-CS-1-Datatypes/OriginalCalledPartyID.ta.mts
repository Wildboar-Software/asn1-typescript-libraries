/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minOriginalCalledPartyIDLength } from "./minOriginalCalledPartyIDLength.va.mjs";
import { maxOriginalCalledPartyIDLength } from "./maxOriginalCalledPartyIDLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginalCalledPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginalCalledPartyID  ::= 
 *   OCTET STRING
 *     (SIZE (minOriginalCalledPartyIDLength..maxOriginalCalledPartyIDLength))
 * ```
 */
export
type OriginalCalledPartyID = OCTET_STRING; // OctetStringType

export
function _decode_OriginalCalledPartyID (el: _Element): OriginalCalledPartyID {
    const value = $._decodeOctetString(el);
    if (value.length < minOriginalCalledPartyIDLength || value.length > maxOriginalCalledPartyIDLength) {
        throw new ASN1SizeError("OriginalCalledPartyID violates SIZE constraint");
    }
    return value;
}

export
const _encode_OriginalCalledPartyID: $.ASN1Encoder<OriginalCalledPartyID> = $._encodeOctetString;

/* eslint-enable */
