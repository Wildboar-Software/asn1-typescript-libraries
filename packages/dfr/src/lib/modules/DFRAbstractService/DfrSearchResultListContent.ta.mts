/* eslint-disable */
import {
    NULL,
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
import { DfrSearchResultListContent_produced, _decode_DfrSearchResultListContent_produced, _encode_DfrSearchResultListContent_produced } from "../DFRAbstractService/DfrSearchResultListContent-produced.ta.mjs";


/**
 * @summary DfrSearchResultListContent
 * @description
 *
 * Stored Search result: `empty` until a search has been produced; otherwise
 * timestamps, matching entries, optional ordering, and the domain/criteria
 * used so the search can be continued or updated. ISO/IEC 10166-1:1991
 * §6.3.5.1, §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrSearchResultListContent  ::=  CHOICE {
 *     empty                     NULL,
 *     produced                  SEQUENCE {
 *         start-date-and-time     [0] GeneralizedTime,
 *         end-date-and-time       [1] GeneralizedTime,
 *         object-list             [2] DfrEntryList,
 *         ordering                [3] OrderingRule OPTIONAL,
 *         search-domain           [4] SearchDomain,
 *         search-criteria         [5] SearchCriteria
 *     }
 * }
 * ```
 */
export
type DfrSearchResultListContent =
    { empty: NULL } /* CHOICE_ALT_ROOT */
    | { produced: DfrSearchResultListContent_produced } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DfrSearchResultListContent: $.ASN1Decoder<DfrSearchResultListContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrSearchResultListContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrSearchResultListContent (el: _Element): DfrSearchResultListContent {
    if (!_cached_decoder_for_DfrSearchResultListContent) { _cached_decoder_for_DfrSearchResultListContent = $._decode_inextensible_choice<DfrSearchResultListContent>({
    "UNIVERSAL 5": [ "empty", $._decodeNull ],
    "UNIVERSAL 16": [ "produced", _decode_DfrSearchResultListContent_produced ]
}); }
    return _cached_decoder_for_DfrSearchResultListContent(el);
}

let _cached_encoder_for_DfrSearchResultListContent: $.ASN1Encoder<DfrSearchResultListContent> | null = null;

/**
 * @summary Encodes a(n) DfrSearchResultListContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrSearchResultListContent, encoded as an ASN.1 Element.
 */
export
function _encode_DfrSearchResultListContent (value: DfrSearchResultListContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrSearchResultListContent) { _cached_encoder_for_DfrSearchResultListContent = $._encode_choice<DfrSearchResultListContent>({
    "empty": $._encodeNull,
    "produced": _encode_DfrSearchResultListContent_produced,
}, $.BER); }
    return _cached_encoder_for_DfrSearchResultListContent(value, elGetter);
}


/* eslint-enable */
