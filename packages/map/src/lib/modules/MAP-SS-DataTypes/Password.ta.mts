/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Password
 * @description
 *
 * Four numeric digits. New password after registration or current password for
 * SS control (3GPP TS 29.002 V19.1.0 clauses 7.6.4.20–7.6.4.21 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Password  ::=  NumericString
 *     (FROM ("0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"))
 *     (SIZE (4))
 * ```
 */
export
type Password = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) Password
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Password = (el: _Element): Password => {
    const value = $._decodeNumericString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("Password violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Password into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Password, encoded as an ASN.1 Element.
 */
export const _encode_Password = $._encodeNumericString;


/* eslint-enable */
