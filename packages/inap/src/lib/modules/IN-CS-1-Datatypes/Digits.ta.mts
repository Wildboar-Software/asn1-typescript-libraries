/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { minDigitsLength } from "./minDigitsLength.va.mjs";
import { maxDigitsLength } from "./maxDigitsLength.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Digits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Digits  ::=  OCTET STRING(SIZE (minDigitsLength..maxDigitsLength))
 * ```
 */
export
type Digits = OCTET_STRING; // OctetStringType

export
function _decode_Digits (el: _Element): Digits {
    const value = $._decodeOctetString(el);
    if (value.length < minDigitsLength || value.length > maxDigitsLength) {
        throw new ASN1SizeError("Digits violates SIZE constraint");
    }
    return value;
}

export
const _encode_Digits: $.ASN1Encoder<Digits> = $._encodeOctetString;

/* eslint-enable */
