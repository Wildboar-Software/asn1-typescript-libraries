/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minRedirectingPartyIDLength } from "./minRedirectingPartyIDLength.va.mjs";
import { maxRedirectingPartyIDLength } from "./maxRedirectingPartyIDLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectingPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectingPartyID  ::= 
 *   OCTET STRING(SIZE (minRedirectingPartyIDLength..maxRedirectingPartyIDLength))
 * ```
 */
export
type RedirectingPartyID = OCTET_STRING; // OctetStringType

export
function _decode_RedirectingPartyID (el: _Element): RedirectingPartyID {
    const value = $._decodeOctetString(el);
    if (value.length < minRedirectingPartyIDLength || value.length > maxRedirectingPartyIDLength) {
        throw new ASN1SizeError("RedirectingPartyID violates SIZE constraint");
    }
    return value;
}

export
const _encode_RedirectingPartyID: $.ASN1Encoder<RedirectingPartyID> = $._encodeOctetString;

/* eslint-enable */
