/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1CharactersError,
    ASN1SizeError,
    type NumericString
} from "@wildboar/asn1";
import { ub_international_isdn_number } from "../SelectedAttributeTypes/ub-international-isdn-number.va.mjs";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InternationalISDNNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalISDNNumber  ::= 
 *   NumericString(SIZE (1..ub-international-isdn-number))
 * ```
 */
export
type InternationalISDNNumber = NumericString; // NumericString

export
function _decode_InternationalISDNNumber (el: _Element): InternationalISDNNumber {
    const value = $._decodeNumericString(el);
    if (!/^[0-9 ]*$/u.test(value)) {
        throw new ASN1CharactersError("InternationalISDNNumber violates NumericString constraint");
    }
    if (value.length < 1 || value.length > ub_international_isdn_number) {
        throw new ASN1SizeError("InternationalISDNNumber violates SIZE constraint");
    }
    return value;
}

export
const _encode_InternationalISDNNumber: $.ASN1Encoder<InternationalISDNNumber> = $._encodeNumericString;

/* eslint-enable */
