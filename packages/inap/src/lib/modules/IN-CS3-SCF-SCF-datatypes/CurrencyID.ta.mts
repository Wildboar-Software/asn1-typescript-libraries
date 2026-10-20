/* eslint-disable */
import {
    PrintableString
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
const _decode_CurrencyID: $.ASN1Decoder<CurrencyID> = $._decodePrintableString;

export
const _encode_CurrencyID: $.ASN1Encoder<CurrencyID> = $._encodePrintableString;

/* eslint-enable */
