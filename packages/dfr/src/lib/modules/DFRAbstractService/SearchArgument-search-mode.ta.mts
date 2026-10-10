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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";


/**
 * @summary SearchArgument_search_mode
 * @description
 *
 * How this Search runs. ISO/IEC 10166-1:1991 §8.2.8.1.
 *
 * - `continue_`: reuse domain, criteria, and continuation from
 *   the named SRL; append hits to that SRL.
 * - `update`: verify and refresh the named SRL's current content.
 * - `new_search_stored`: caller supplies options; store them and
 *   the result in the named SRL.
 * - `non_stored_search`: caller supplies options; result is
 *   returned only, not stored.
 *
 * `search-domain` and `search-criteria` shall be present for
 * `new_search_stored` and `non_stored_search`, and absent for
 * `continue_` and `update`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgument-search-mode ::= CHOICE {
 *         continue            [0] DfrEntryName,
 *         -- Continue the search with all Options (search domain,
 *         -- search criteria and continuation context) from the
 *         -- search result list specified by the DfrEntryName.
 *         -- The result will be added to the present content of
 *         -- this search result list.
 *         update              [1] DfrEntryName,
 *         -- The present content of the search result list
 *         -- is verified and possibly updated.
 *         new-search-stored   [2] DfrEntryName,
 *         -- All Options are supplied by the requestor in the
 *         -- subsequent Parameters; they are stored in the search
 *         -- result List specified, where the result is then
 *         -- also stored.
 *         non-stored-search   [3] NULL
 *     }
 * ```
 */
export
type SearchArgument_search_mode =
    { continue_: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { update: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { new_search_stored: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { non_stored_search: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SearchArgument_search_mode: $.ASN1Decoder<SearchArgument_search_mode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgument_search_mode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchArgument_search_mode (el: _Element): SearchArgument_search_mode {
    if (!_cached_decoder_for_SearchArgument_search_mode) { _cached_decoder_for_SearchArgument_search_mode = $._decode_inextensible_choice<SearchArgument_search_mode>({
    "CONTEXT 0": [ "continue_", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 1": [ "update", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 2": [ "new_search_stored", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 3": [ "non_stored_search", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_SearchArgument_search_mode(el);
}

let _cached_encoder_for_SearchArgument_search_mode: $.ASN1Encoder<SearchArgument_search_mode> | null = null;

/**
 * @summary Encodes a(n) SearchArgument_search_mode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgument_search_mode, encoded as an ASN.1 Element.
 */
export
function _encode_SearchArgument_search_mode (value: SearchArgument_search_mode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchArgument_search_mode) { _cached_encoder_for_SearchArgument_search_mode = $._encode_choice<SearchArgument_search_mode>({
    "continue_": $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER),
    "update": $._encode_explicit(_TagClass.context, 1, () => _encode_DfrEntryName, $.BER),
    "new_search_stored": $._encode_explicit(_TagClass.context, 2, () => _encode_DfrEntryName, $.BER),
    "non_stored_search": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_SearchArgument_search_mode(value, elGetter);
}


/* eslint-enable */
