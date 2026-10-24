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
import { type Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";


/**
 * @summary SearchCriteria
 * @description
 *
 * Directory Filter applied to each entry in the search domain. TRUE ⇒ the
 * entry is a hit. Same as ISO/IEC 9594-3 Filter. ISO/IEC 10166-1:1991 §3.2.28,
 * §8.1.6.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchCriteria  ::=  Filter
 * ```
 */
export
type SearchCriteria = Filter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SearchCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SearchCriteria: $.ASN1Decoder<SearchCriteria> = _decode_Filter;

/**
 * @summary Encodes a(n) SearchCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchCriteria, encoded as an ASN.1 Element.
 */
export const _encode_SearchCriteria: $.ASN1Encoder<SearchCriteria> = _encode_Filter;


/* eslint-enable */
