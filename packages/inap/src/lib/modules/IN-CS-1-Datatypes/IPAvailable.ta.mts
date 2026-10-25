/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { maxIPAvailableLength } from "./maxIPAvailableLength.va.mjs";
import { minIPAvailableLength } from "./minIPAvailableLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAvailable  ::=  OCTET STRING(SIZE (minIPAvailableLength..maxIPAvailableLength))
 * ```
 */
export
type IPAvailable = OCTET_STRING; // OctetStringType

export
function _decode_IPAvailable (el: _Element): IPAvailable {
    const value = $._decodeOctetString(el);
    if (value.length < minIPAvailableLength || value.length > maxIPAvailableLength) {
        throw new ASN1SizeError("IPAvailable violates SIZE constraint");
    }
    return value;
}

export
const _encode_IPAvailable: $.ASN1Encoder<IPAvailable> = $._encodeOctetString;

/* eslint-enable */
