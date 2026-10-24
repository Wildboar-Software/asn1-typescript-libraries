/* eslint-disable */
import {
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
import { type Entry, _decode_Entry, _encode_Entry } from "../IN-CS2-datatypes/Entry.ta.mjs";


/**
 * @summary INServiceCompatibilityResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * INServiceCompatibilityResponse  ::=  Entry
 * ```
 */
export
type INServiceCompatibilityResponse = Entry; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) INServiceCompatibilityResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_INServiceCompatibilityResponse: $.ASN1Decoder<INServiceCompatibilityResponse> = _decode_Entry;

/**
 * @summary Encodes a(n) INServiceCompatibilityResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The INServiceCompatibilityResponse, encoded as an ASN.1 Element.
 */
export const _encode_INServiceCompatibilityResponse: $.ASN1Encoder<INServiceCompatibilityResponse> = _encode_Entry;


/* eslint-enable */
