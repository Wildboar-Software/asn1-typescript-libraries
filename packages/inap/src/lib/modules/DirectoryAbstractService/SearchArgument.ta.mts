/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";
// export { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";
import { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";
// export { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DirectoryAbstractService/EntryInformationSelection.ta.mjs";
import { PagedResultsRequest, _decode_PagedResultsRequest, _encode_PagedResultsRequest } from "../DirectoryAbstractService/PagedResultsRequest.ta.mjs";
// export { PagedResultsRequest, _decode_PagedResultsRequest, _encode_PagedResultsRequest } from "../DirectoryAbstractService/PagedResultsRequest.ta.mjs";
import { RelaxationPolicy, _decode_RelaxationPolicy, _encode_RelaxationPolicy } from "../InformationFramework/RelaxationPolicy.ta.mjs";
// export { RelaxationPolicy, _decode_RelaxationPolicy, _encode_RelaxationPolicy } from "../InformationFramework/RelaxationPolicy.ta.mjs";
import { HierarchySelections, _decode_HierarchySelections, _encode_HierarchySelections } from "../DirectoryAbstractService/HierarchySelections.ta.mjs";
// export { HierarchySelections, HierarchySelections_self /* IMPORTED_LONG_NAMED_BIT */, self /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_children /* IMPORTED_LONG_NAMED_BIT */, children /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_parent /* IMPORTED_LONG_NAMED_BIT */, parent /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_hierarchy /* IMPORTED_LONG_NAMED_BIT */, hierarchy /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_top /* IMPORTED_LONG_NAMED_BIT */, top /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_subtree /* IMPORTED_LONG_NAMED_BIT */, subtree /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_siblings /* IMPORTED_LONG_NAMED_BIT */, siblings /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_siblingChildren /* IMPORTED_LONG_NAMED_BIT */, siblingChildren /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_siblingSubtree /* IMPORTED_LONG_NAMED_BIT */, siblingSubtree /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_all /* IMPORTED_LONG_NAMED_BIT */, all /* IMPORTED_SHORT_NAMED_BIT */, _decode_HierarchySelections, _encode_HierarchySelections } from "../DirectoryAbstractService/HierarchySelections.ta.mjs";
import { SearchControlOptions, _decode_SearchControlOptions, _encode_SearchControlOptions } from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
// export { SearchControlOptions, SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */, searchAliases /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_matchedValuesOnly /* IMPORTED_LONG_NAMED_BIT */, matchedValuesOnly /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_checkOverspecified /* IMPORTED_LONG_NAMED_BIT */, checkOverspecified /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_performExactly /* IMPORTED_LONG_NAMED_BIT */, performExactly /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_includeAllAreas /* IMPORTED_LONG_NAMED_BIT */, includeAllAreas /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_noSystemRelaxation /* IMPORTED_LONG_NAMED_BIT */, noSystemRelaxation /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_dnAttribute /* IMPORTED_LONG_NAMED_BIT */, dnAttribute /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_matchOnResidualName /* IMPORTED_LONG_NAMED_BIT */, matchOnResidualName /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_entryCount /* IMPORTED_LONG_NAMED_BIT */, entryCount /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_useSubset /* IMPORTED_LONG_NAMED_BIT */, useSubset /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_separateFamilyMembers /* IMPORTED_LONG_NAMED_BIT */, separateFamilyMembers /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_searchFamily /* IMPORTED_LONG_NAMED_BIT */, searchFamily /* IMPORTED_SHORT_NAMED_BIT */, _decode_SearchControlOptions, _encode_SearchControlOptions } from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary SearchArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {baseObject            [0]  Name,
 *           subset
 *             [1]  INTEGER {baseObject(0), oneLevel(1), wholeSubtree(2)}
 *               DEFAULT baseObject,
 *           filter                [2]  Filter DEFAULT and:{},
 *           searchAliases         [3]  BOOLEAN DEFAULT TRUE,
 *           selection             [4]  EntryInformationSelection DEFAULT {},
 *           pagedResults          [5]  PagedResultsRequest OPTIONAL,
 *           matchedValuesOnly     [6]  BOOLEAN DEFAULT FALSE,
 *           extendedFilter        [7]  Filter OPTIONAL,
 *           checkOverspecified    [8]  BOOLEAN DEFAULT FALSE,
 *           relaxation            [9]  RelaxationPolicy OPTIONAL,
 *           extendedArea          [10]  INTEGER OPTIONAL,
 *           hierarchySelections   [11]  HierarchySelections DEFAULT {self},
 *           searchControlOptions
 *             [12]  SearchControlOptions DEFAULT {searchAliases},
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type SearchArgument = OPTIONALLY_PROTECTED<{ baseObject: OPTIONAL<Name>; subset: INTEGER; filter: Filter; searchAliases: BOOLEAN; selection: EntryInformationSelection; pagedResults: PagedResultsRequest; matchedValuesOnly: BOOLEAN; extendedFilter: Filter; checkOverspecified: BOOLEAN; relaxation: RelaxationPolicy; extendedArea: INTEGER; hierarchySelections: HierarchySelections; searchControlOptions: SearchControlOptions; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_SearchArgument: $.ASN1Decoder<SearchArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchArgument (el: _Element): SearchArgument {
    if (!_cached_decoder_for_SearchArgument) { _cached_decoder_for_SearchArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ baseObject: OPTIONAL<Name>; subset: INTEGER; filter: Filter; searchAliases: BOOLEAN; selection: EntryInformationSelection; pagedResults: PagedResultsRequest; matchedValuesOnly: BOOLEAN; extendedFilter: Filter; checkOverspecified: BOOLEAN; relaxation: RelaxationPolicy; extendedArea: INTEGER; hierarchySelections: HierarchySelections; searchControlOptions: SearchControlOptions; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let baseObject!: Name;
    let subset: OPTIONAL<INTEGER> = OPTIONALLY_PROTECTED._default_value_for_subset;
    let filter: OPTIONAL<Filter> = OPTIONALLY_PROTECTED._default_value_for_filter;
    let searchAliases: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_searchAliases;
    let selection: OPTIONAL<EntryInformationSelection> = OPTIONALLY_PROTECTED._default_value_for_selection;
    let pagedResults: OPTIONAL<PagedResultsRequest>;
    let matchedValuesOnly: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_matchedValuesOnly;
    let extendedFilter: OPTIONAL<Filter>;
    let checkOverspecified: OPTIONAL<BOOLEAN> = OPTIONALLY_PROTECTED._default_value_for_checkOverspecified;
    let relaxation: OPTIONAL<RelaxationPolicy>;
    let extendedArea: OPTIONAL<INTEGER>;
    let hierarchySelections: OPTIONAL<HierarchySelections> = OPTIONALLY_PROTECTED._default_value_for_hierarchySelections;
    let searchControlOptions: OPTIONAL<SearchControlOptions> = OPTIONALLY_PROTECTED._default_value_for_searchControlOptions;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "baseObject": (_el: _Element): void => { baseObject = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "subset": (_el: _Element): void => { subset = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "filter": (_el: _Element): void => { filter = $._decode_explicit<Filter>(() => _decode_Filter)(_el); },
        "searchAliases": (_el: _Element): void => { searchAliases = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_explicit<EntryInformationSelection>(() => _decode_EntryInformationSelection)(_el); },
        "pagedResults": (_el: _Element): void => { pagedResults = $._decode_explicit<PagedResultsRequest>(() => _decode_PagedResultsRequest)(_el); },
        "matchedValuesOnly": (_el: _Element): void => { matchedValuesOnly = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "extendedFilter": (_el: _Element): void => { extendedFilter = $._decode_explicit<Filter>(() => _decode_Filter)(_el); },
        "checkOverspecified": (_el: _Element): void => { checkOverspecified = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "relaxation": (_el: _Element): void => { relaxation = $._decode_explicit<RelaxationPolicy>(() => _decode_RelaxationPolicy)(_el); },
        "extendedArea": (_el: _Element): void => { extendedArea = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "hierarchySelections": (_el: _Element): void => { hierarchySelections = $._decode_explicit<HierarchySelections>(() => _decode_HierarchySelections)(_el); },
        "searchControlOptions": (_el: _Element): void => { searchControlOptions = $._decode_explicit<SearchControlOptions>(() => _decode_SearchControlOptions)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED( /* SET_CONSTRUCTOR_CALL */
        baseObject,
        subset,
        filter,
        searchAliases,
        selection,
        pagedResults,
        matchedValuesOnly,
        extendedFilter,
        checkOverspecified,
        relaxation,
        extendedArea,
        hierarchySelections,
        searchControlOptions,
        _componentsOf
    );
}); }
    return _cached_decoder_for_SearchArgument(el);
}

let _cached_encoder_for_SearchArgument: $.ASN1Encoder<SearchArgument> | null = null;

/**
 * @summary Encodes a(n) SearchArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SearchArgument (value: SearchArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchArgument) { _cached_encoder_for_SearchArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ baseObject: OPTIONAL<Name>; subset: INTEGER; filter: Filter; searchAliases: BOOLEAN; selection: EntryInformationSelection; pagedResults: PagedResultsRequest; matchedValuesOnly: BOOLEAN; extendedFilter: Filter; checkOverspecified: BOOLEAN; relaxation: RelaxationPolicy; extendedArea: INTEGER; hierarchySelections: HierarchySelections; searchControlOptions: SearchControlOptions; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.baseObject, $.BER));
    if (value.subset !== undefined && !$.deepEq(value.subset, OPTIONALLY_PROTECTED._default_value_for_subset)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.subset, $.BER));
    }
    if (value.filter !== undefined && !$.deepEq(value.filter, OPTIONALLY_PROTECTED._default_value_for_filter)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => _encode_Filter, $.BER)(value.filter, $.BER));
    }
    if (value.searchAliases !== undefined && !$.deepEq(value.searchAliases, OPTIONALLY_PROTECTED._default_value_for_searchAliases)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.searchAliases, $.BER));
    }
    if (value.selection !== undefined && !$.deepEq(value.selection, OPTIONALLY_PROTECTED._default_value_for_selection)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 4, () => _encode_EntryInformationSelection, $.BER)(value.selection, $.BER));
    }
    if (value.pagedResults !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_PagedResultsRequest, $.BER)(value.pagedResults, $.BER));
    }
    if (value.matchedValuesOnly !== undefined && !$.deepEq(value.matchedValuesOnly, OPTIONALLY_PROTECTED._default_value_for_matchedValuesOnly)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.matchedValuesOnly, $.BER));
    }
    if (value.extendedFilter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_Filter, $.BER)(value.extendedFilter, $.BER));
    }
    if (value.checkOverspecified !== undefined && !$.deepEq(value.checkOverspecified, OPTIONALLY_PROTECTED._default_value_for_checkOverspecified)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.checkOverspecified, $.BER));
    }
    if (value.relaxation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_RelaxationPolicy, $.BER)(value.relaxation, $.BER));
    }
    if (value.extendedArea !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.extendedArea, $.BER));
    }
    if (value.hierarchySelections !== undefined && !$.deepEq(value.hierarchySelections, OPTIONALLY_PROTECTED._default_value_for_hierarchySelections)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 11, () => _encode_HierarchySelections, $.BER)(value.hierarchySelections, $.BER));
    }
    if (value.searchControlOptions !== undefined && !$.deepEq(value.searchControlOptions, OPTIONALLY_PROTECTED._default_value_for_searchControlOptions)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 12, () => _encode_SearchControlOptions, $.BER)(value.searchControlOptions, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_SearchArgument(value, elGetter);
}


/* eslint-enable */
