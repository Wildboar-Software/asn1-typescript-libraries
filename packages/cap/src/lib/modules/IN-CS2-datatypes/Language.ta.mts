/* eslint-disable */
import {
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Language
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Language  ::=  PrintableString(SIZE (3))
 * ```
 */
export
type Language = PrintableString; // PrintableString
export const _decode_Language = (el: _Element): Language => {
    const value = $._decodePrintableString(el);
    if (value.length !== 3) {
        throw new ASN1SizeError("Language violates SIZE constraint");
    }
    return value;
};
export const _encode_Language = $._encodePrintableString;


/* eslint-enable */
