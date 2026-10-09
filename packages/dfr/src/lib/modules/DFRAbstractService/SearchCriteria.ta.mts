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
import { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";


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

let _cached_decoder_for_SearchCriteria: $.ASN1Decoder<SearchCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchCriteria (el: _Element): SearchCriteria {
    if (!_cached_decoder_for_SearchCriteria) { _cached_decoder_for_SearchCriteria = _decode_Filter; }
    return _cached_decoder_for_SearchCriteria(el);
}

let _cached_encoder_for_SearchCriteria: $.ASN1Encoder<SearchCriteria> | null = null;

/**
 * @summary Encodes a(n) SearchCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_SearchCriteria (value: SearchCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchCriteria) { _cached_encoder_for_SearchCriteria = _encode_Filter; }
    return _cached_encoder_for_SearchCriteria(value, elGetter);
}


/* eslint-enable */
