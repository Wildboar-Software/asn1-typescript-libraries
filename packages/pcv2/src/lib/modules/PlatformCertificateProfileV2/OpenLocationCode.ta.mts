/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OpenLocationCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OpenLocationCode  ::=  PrintableString
 * ```
 */
export
type OpenLocationCode = PrintableString; // PrintableString

export
const _decode_OpenLocationCode: $.ASN1Decoder<OpenLocationCode> = $._decodePrintableString;

export
const _encode_OpenLocationCode: $.ASN1Encoder<OpenLocationCode> = $._encodePrintableString;

/* eslint-enable */
