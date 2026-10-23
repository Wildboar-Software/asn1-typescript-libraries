/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary LanguageCode
 * @description
 * 
 * Three-character language code from ANSI/NISO Z39.53-1994. This is the term
 * for Use attribute HumanStringLanguage, and the language of human-readable
 * text in an Explain record and in a HumanString. This standard does not list
 * the codes. ANSI/NISO Z39.50-2003 §3.2.10.1.2; REC.1; ATR.1 note 2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LanguageCode  ::=  InternationalString
 * ```
 */
export
type LanguageCode = InternationalString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LanguageCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LanguageCode: $.ASN1Decoder<LanguageCode> = _decode_InternationalString;

/**
 * @summary Encodes a(n) LanguageCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguageCode, encoded as an ASN.1 Element.
 */
export const _encode_LanguageCode: (value: LanguageCode, elGetter: $.ASN1Encoder<any>) => _Element = _encode_InternationalString;


/* eslint-enable */
