/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { Name, _decode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { EntryInformation, _decode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
// export { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
import { PartialOutcomeQualifier, _decode_PartialOutcomeQualifier } from "../DirectoryAbstractService/PartialOutcomeQualifier.ta.mjs";
// export { PartialOutcomeQualifier, _decode_PartialOutcomeQualifier, _encode_PartialOutcomeQualifier } from "../DirectoryAbstractService/PartialOutcomeQualifier.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary SearchResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResult  ::= 
 *   OPTIONALLY-PROTECTED
 *     {CHOICE {searchInfo
 *                SET {name                     Name OPTIONAL,
 *                     entries                  [0]  SET OF EntryInformation,
 *                     partialOutcomeQualifier
 *                       [2]  PartialOutcomeQualifier OPTIONAL,
 *                     altMatching              [3]  BOOLEAN DEFAULT FALSE,
 *                     COMPONENTS OF CommonResults},
 *              uncorrelatedSearchInfo  [0]  SET OF SearchResult}}
 * ```
 */
export
type SearchResult = OPTIONALLY_PROTECTED<({ searchInfo: { name: Name; entries: OPTIONAL<EntryInformation[]>; partialOutcomeQualifier: PartialOutcomeQualifier; altMatching: BOOLEAN; _componentsOf: CommonResults } } | { uncorrelatedSearchInfo: SearchResult[] })>; // DefinedType

let _cached_decoder_for_SearchResult: $.ASN1Decoder<SearchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchResult (el: _Element): SearchResult {
    if (!_cached_decoder_for_SearchResult) { _cached_decoder_for_SearchResult = _get_decoder_for_OPTIONALLY_PROTECTED<({ searchInfo: { name: Name; entries: OPTIONAL<EntryInformation[]>; partialOutcomeQualifier: PartialOutcomeQualifier; altMatching: BOOLEAN; _componentsOf: CommonResults } } | { uncorrelatedSearchInfo: SearchResult[] })>($._decode_inextensible_choice<OPTIONALLY_PROTECTED>({
    "UNIVERSAL 17": [ "searchInfo", function (el: _Element): searchInfo {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let name: OPTIONAL<Name>;
    let entries!: EntryInformation[];
    let partialOutcomeQualifier: OPTIONAL<PartialOutcomeQualifier>;
    let altMatching: OPTIONAL<BOOLEAN> = searchInfo._default_value_for_altMatching;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "entries": (_el: _Element): void => { entries = $._decode_explicit<EntryInformation[]>(() => $._decodeSetOf<EntryInformation>(() => _decode_EntryInformation))(_el); },
        "partialOutcomeQualifier": (_el: _Element): void => { partialOutcomeQualifier = $._decode_explicit<PartialOutcomeQualifier>(() => _decode_PartialOutcomeQualifier)(_el); },
        "altMatching": (_el: _Element): void => { altMatching = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_searchInfo,
        _extension_additions_list_spec_for_searchInfo,
        _root_component_type_list_2_spec_for_searchInfo,
        undefined,
    );
    return new searchInfo( /* SET_CONSTRUCTOR_CALL */
        name,
        entries,
        partialOutcomeQualifier,
        altMatching,
        _componentsOf
    );
} ],
    "CONTEXT 0": [ "uncorrelatedSearchInfo", $._decode_explicit<SearchResult[]>(() => $._decodeSetOf<SearchResult>(() => _decode_SearchResult)) ]
})); }
    return _cached_decoder_for_SearchResult(el);
}

let _cached_encoder_for_SearchResult: $.ASN1Encoder<SearchResult> | null = null;

/**
 * @summary Encodes a(n) SearchResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult, encoded as an ASN.1 Element.
 */
export
function _encode_SearchResult (value: SearchResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchResult) { _cached_encoder_for_SearchResult = _get_encoder_for_OPTIONALLY_PROTECTED<({ searchInfo: { name: Name; entries: OPTIONAL<EntryInformation[]>; partialOutcomeQualifier: PartialOutcomeQualifier; altMatching: BOOLEAN; _componentsOf: CommonResults } } | { uncorrelatedSearchInfo: SearchResult[] })>($._encode_choice<OPTIONALLY_PROTECTED>({
    // FIXME: case (searchInfo): return /* COULD_NOT_COMPILE_TYPE_ENCODER */;
    "uncorrelatedSearchInfo": $._encode_explicit(_TagClass.context, 0, () => $._encodeSetOf<SearchResult>(() => _encode_SearchResult, $.BER), $.BER),
}, $.BER)); }
    return _cached_encoder_for_SearchResult(value, elGetter);
}


/* eslint-enable */
