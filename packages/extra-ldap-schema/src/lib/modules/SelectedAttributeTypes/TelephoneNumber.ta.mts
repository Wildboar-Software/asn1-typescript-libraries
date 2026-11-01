/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1CharactersError,
    ASN1SizeError,
    type PrintableString
} from "@wildboar/asn1";
import { ub_telephone_number } from "../SelectedAttributeTypes/ub-telephone-number.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephoneNumber  ::=  PrintableString(SIZE (1..ub-telephone-number))
 * ```
 */
export
type TelephoneNumber = PrintableString; // PrintableString

export
function _decode_TelephoneNumber (el: _Element): TelephoneNumber {
    const value = $._decodePrintableString(el);
    if (!/^[A-Za-z0-9 '()+,.\/:?=\-]*$/u.test(value)) {
        throw new ASN1CharactersError("TelephoneNumber violates PrintableString constraint");
    }
    if (value.length < 1 || value.length > ub_telephone_number) {
        throw new ASN1SizeError("TelephoneNumber violates SIZE constraint");
    }
    return value;
}

export
const _encode_TelephoneNumber: $.ASN1Encoder<TelephoneNumber> = $._encodePrintableString;

/* eslint-enable */
