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
import { SearchDomain_Item, _decode_SearchDomain_Item, _encode_SearchDomain_Item } from "../DFRAbstractService/SearchDomain-Item.ta.mjs";
// export { SearchDomain_Item, _decode_SearchDomain_Item, _encode_SearchDomain_Item } from "../DFRAbstractService/SearchDomain-Item.ta.mjs";


/**
 * @summary SearchDomain
 * @description
 *
 * SEQUENCE OF subdomains: previous SRL and/or a group subtree with descent and
 * dereferencing depths. Bound to this document store; external referents are
 * never dereferenced. ISO/IEC 10166-1:1991 §8.1.6.4, §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchDomain  ::=  SEQUENCE OF CHOICE {
 *     previous-result [0] DfrEntryName,
 *     -- specifies an entry of "DFR-Search-Result-List" class
 *     scope           [1] SEQUENCE {
 *         root                [0] DfrEntryName,
 *         descent-depth       [1] INTEGER OPTIONAL,
 *         --default means the whole subtree
 *         dereferencing-depth [2] INTEGER DEFAULT 0
 *         -- default means no dereferencing
 *     }
 * }
 * ```
 */
export
type SearchDomain = SearchDomain_Item[]; // SequenceOfType

let _cached_decoder_for_SearchDomain: $.ASN1Decoder<SearchDomain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchDomain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchDomain (el: _Element): SearchDomain {
    if (!_cached_decoder_for_SearchDomain) { _cached_decoder_for_SearchDomain = $._decodeSequenceOf<SearchDomain_Item>(() => _decode_SearchDomain_Item); }
    return _cached_decoder_for_SearchDomain(el);
}

let _cached_encoder_for_SearchDomain: $.ASN1Encoder<SearchDomain> | null = null;

/**
 * @summary Encodes a(n) SearchDomain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchDomain, encoded as an ASN.1 Element.
 */
export
function _encode_SearchDomain (value: SearchDomain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchDomain) { _cached_encoder_for_SearchDomain = $._encodeSequenceOf<SearchDomain_Item>(() => _encode_SearchDomain_Item, $.BER); }
    return _cached_encoder_for_SearchDomain(value, elGetter);
}


/* eslint-enable */
