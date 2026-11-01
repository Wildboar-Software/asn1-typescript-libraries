/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1CharactersError,
    ASN1SizeError,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DestinationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationIndicator  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export
type DestinationIndicator = PrintableString; // PrintableString

export
function _decode_DestinationIndicator (el: _Element): DestinationIndicator {
    const value = $._decodePrintableString(el);
    if (!/^[A-Za-z0-9 '()+,.\/:?=\-]*$/u.test(value)) {
        throw new ASN1CharactersError("DestinationIndicator violates PrintableString constraint");
    }
    if (value.length < 1) {
        throw new ASN1SizeError("DestinationIndicator violates SIZE constraint");
    }
    return value;
}

export
const _encode_DestinationIndicator: $.ASN1Encoder<DestinationIndicator> = $._encodePrintableString;

/* eslint-enable */
