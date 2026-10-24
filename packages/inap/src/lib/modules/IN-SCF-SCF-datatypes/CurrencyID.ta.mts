/* eslint-disable */
import {
    type PrintableString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyID  ::=  PrintableString(SIZE (3))
 * ```
 */
export
type CurrencyID = PrintableString; // PrintableString

export
function _decode_CurrencyID (el: _Element): CurrencyID {
    const value = $._decodePrintableString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("CurrencyID violates SIZE constraint");
    }
    return value;
}

export
const _encode_CurrencyID: $.ASN1Encoder<CurrencyID> = $._encodePrintableString;

/* eslint-enable */
