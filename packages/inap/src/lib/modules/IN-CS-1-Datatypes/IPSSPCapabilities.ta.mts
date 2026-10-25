/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxIPSSPCapabilitiesLength } from "./maxIPSSPCapabilitiesLength.va.mjs";
import { minIPSSPCapabilitiesLength } from "./minIPSSPCapabilitiesLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPSSPCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPSSPCapabilities  ::= 
 *   OCTET STRING(SIZE (minIPSSPCapabilitiesLength..maxIPSSPCapabilitiesLength))
 * ```
 */
export
type IPSSPCapabilities = OCTET_STRING; // OctetStringType

export
function _decode_IPSSPCapabilities (el: _Element): IPSSPCapabilities {
    const value = $._decodeOctetString(el);
    if (value.length < minIPSSPCapabilitiesLength || value.length > maxIPSSPCapabilitiesLength) {
        throw new ASN1SizeError("IPSSPCapabilities violates SIZE constraint");
    }
    return value;
}

export
const _encode_IPSSPCapabilities: $.ASN1Encoder<IPSSPCapabilities> = $._encodeOctetString;

/* eslint-enable */
