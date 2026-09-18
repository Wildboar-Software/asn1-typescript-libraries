/* eslint-disable */
import {
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Date
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Date  ::=  VisibleString
 * ```
 */
export
type Date = VisibleString; // VisibleString


/**
 * @summary Decodes an ASN.1 element into a(n) Date
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Date = $._decodeVisibleString;


/**
 * @summary Encodes a(n) Date into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date, encoded as an ASN.1 Element.
 */
export const _encode_Date = $._encodeVisibleString;


/* eslint-enable */
