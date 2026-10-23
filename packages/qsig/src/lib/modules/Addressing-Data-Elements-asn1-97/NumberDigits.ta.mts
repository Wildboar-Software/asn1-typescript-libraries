/* eslint-disable */
import {
    NumericString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NumberDigits
 * @description
 *
 * The digits of a party number (ECMA-165 Annex B Table B.1). The numbering plan
 * is the PartyNumber alternative that contains these digits. Table B.1 limits
 * the string to between 1 and 20 numeric characters.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberDigits  ::=  NumericString (SIZE(1..20))
 * ```
 */
export
type NumberDigits = NumericString; // NumericString

export
const _decode_NumberDigits = (el: _Element): NumberDigits => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("NumberDigits violates SIZE constraint");
    }
    return value;
};

export
const _encode_NumberDigits: $.ASN1Encoder<NumberDigits> = $._encodeNumericString;

/* eslint-enable */
