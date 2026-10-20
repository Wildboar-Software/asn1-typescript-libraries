/* eslint-disable */
import {
    OPTIONAL,
    TRUE_BIT,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceControlOptions, _decode_ServiceControlOptions, _encode_ServiceControlOptions } from "../DirectoryAbstractService/ServiceControlOptions.ta.mjs";
// export { ServiceControlOptions, ServiceControlOptions_preferChaining /* IMPORTED_LONG_NAMED_BIT */, preferChaining /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_chainingProhibited /* IMPORTED_LONG_NAMED_BIT */, chainingProhibited /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_localScope /* IMPORTED_LONG_NAMED_BIT */, localScope /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_dontUseCopy /* IMPORTED_LONG_NAMED_BIT */, dontUseCopy /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_dontDereferenceAliases /* IMPORTED_LONG_NAMED_BIT */, dontDereferenceAliases /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_subentries /* IMPORTED_LONG_NAMED_BIT */, subentries /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_copyShallDo /* IMPORTED_LONG_NAMED_BIT */, copyShallDo /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_partialNameResolution /* IMPORTED_LONG_NAMED_BIT */, partialNameResolution /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_manageDSAIT /* IMPORTED_LONG_NAMED_BIT */, manageDSAIT /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_noSubtypeMatch /* IMPORTED_LONG_NAMED_BIT */, noSubtypeMatch /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_noSubtypeSelection /* IMPORTED_LONG_NAMED_BIT */, noSubtypeSelection /* IMPORTED_SHORT_NAMED_BIT */, ServiceControlOptions_countFamily /* IMPORTED_LONG_NAMED_BIT */, countFamily /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServiceControlOptions, _encode_ServiceControlOptions } from "../DirectoryAbstractService/ServiceControlOptions.ta.mjs";
import { SearchControlOptions, SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */, _decode_SearchControlOptions, _encode_SearchControlOptions } from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
// export { SearchControlOptions, SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */, searchAliases /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_matchedValuesOnly /* IMPORTED_LONG_NAMED_BIT */, matchedValuesOnly /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_checkOverspecified /* IMPORTED_LONG_NAMED_BIT */, checkOverspecified /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_performExactly /* IMPORTED_LONG_NAMED_BIT */, performExactly /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_includeAllAreas /* IMPORTED_LONG_NAMED_BIT */, includeAllAreas /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_noSystemRelaxation /* IMPORTED_LONG_NAMED_BIT */, noSystemRelaxation /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_dnAttribute /* IMPORTED_LONG_NAMED_BIT */, dnAttribute /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_matchOnResidualName /* IMPORTED_LONG_NAMED_BIT */, matchOnResidualName /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_entryCount /* IMPORTED_LONG_NAMED_BIT */, entryCount /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_useSubset /* IMPORTED_LONG_NAMED_BIT */, useSubset /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_separateFamilyMembers /* IMPORTED_LONG_NAMED_BIT */, separateFamilyMembers /* IMPORTED_SHORT_NAMED_BIT */, SearchControlOptions_searchFamily /* IMPORTED_LONG_NAMED_BIT */, searchFamily /* IMPORTED_SHORT_NAMED_BIT */, _decode_SearchControlOptions, _encode_SearchControlOptions } from "../DirectoryAbstractService/SearchControlOptions.ta.mjs";
import { HierarchySelections, _decode_HierarchySelections, _encode_HierarchySelections } from "../DirectoryAbstractService/HierarchySelections.ta.mjs";
// export { HierarchySelections, HierarchySelections_self /* IMPORTED_LONG_NAMED_BIT */, self /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_children /* IMPORTED_LONG_NAMED_BIT */, children /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_parent /* IMPORTED_LONG_NAMED_BIT */, parent /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_hierarchy /* IMPORTED_LONG_NAMED_BIT */, hierarchy /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_top /* IMPORTED_LONG_NAMED_BIT */, top /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_subtree /* IMPORTED_LONG_NAMED_BIT */, subtree /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_siblings /* IMPORTED_LONG_NAMED_BIT */, siblings /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_siblingChildren /* IMPORTED_LONG_NAMED_BIT */, siblingChildren /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_siblingSubtree /* IMPORTED_LONG_NAMED_BIT */, siblingSubtree /* IMPORTED_SHORT_NAMED_BIT */, HierarchySelections_all /* IMPORTED_LONG_NAMED_BIT */, all /* IMPORTED_SHORT_NAMED_BIT */, _decode_HierarchySelections, _encode_HierarchySelections } from "../DirectoryAbstractService/HierarchySelections.ta.mjs";


/**
 * @summary ControlOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlOptions ::= SEQUENCE {
 *   serviceControls   [0]  ServiceControlOptions DEFAULT {},
 *   searchOptions     [1]  SearchControlOptions DEFAULT {searchAliases},
 *   hierarchyOptions  [2]  HierarchySelections OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ControlOptions {
    /**
     * @summary `serviceControls`.
     * @public
     * @readonly
     */
    readonly serviceControls: OPTIONAL<ServiceControlOptions>;
    /**
     * @summary `searchOptions`.
     * @public
     * @readonly
     */
    readonly searchOptions: OPTIONAL<SearchControlOptions>;
    /**
     * @summary `hierarchyOptions`.
     * @public
     * @readonly
     */
    readonly hierarchyOptions: OPTIONAL<HierarchySelections>;

    constructor (
        serviceControls: OPTIONAL<ServiceControlOptions>,
        searchOptions: OPTIONAL<SearchControlOptions>,
        hierarchyOptions: OPTIONAL<HierarchySelections>
    ) {
        this.serviceControls = serviceControls;
        this.searchOptions = searchOptions;
        this.hierarchyOptions = hierarchyOptions;
    }

    /**
     * @summary Restructures an object into a ControlOptions
     * @description
     * 
     * This takes an `object` and converts it to a `ControlOptions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlOptions`.
     * @returns {ControlOptions}
     */
    public static _from_object (_o: { [_K in keyof (ControlOptions)]: (ControlOptions)[_K] }): ControlOptions {
        return new ControlOptions(_o.serviceControls, _o.searchOptions, _o.hierarchyOptions);
    }

    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `searchOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_searchOptions () { return (() => { const _ret = new Uint8ClampedArray(11); _ret[SearchControlOptions_searchAliases] = TRUE_BIT;return _ret; })(); }
}

/**
 * @summary The Leading Root Component Types of ControlOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlOptions: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceControls", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("searchOptions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("hierarchyOptions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ControlOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlOptions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlOptions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlOptions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlOptions: $.ASN1Decoder<ControlOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlOptions (el: _Element): ControlOptions {
    if (!_cached_decoder_for_ControlOptions) { _cached_decoder_for_ControlOptions = function (el: _Element): ControlOptions {
    let serviceControls: OPTIONAL<ServiceControlOptions> = ControlOptions._default_value_for_serviceControls;
    let searchOptions: OPTIONAL<SearchControlOptions> = ControlOptions._default_value_for_searchOptions;
    let hierarchyOptions: OPTIONAL<HierarchySelections>;
    const callbacks: $.DecodingMap = {
        "serviceControls": (_el: _Element): void => { serviceControls = $._decode_explicit<ServiceControlOptions>(() => _decode_ServiceControlOptions)(_el); },
        "searchOptions": (_el: _Element): void => { searchOptions = $._decode_explicit<SearchControlOptions>(() => _decode_SearchControlOptions)(_el); },
        "hierarchyOptions": (_el: _Element): void => { hierarchyOptions = $._decode_explicit<HierarchySelections>(() => _decode_HierarchySelections)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ControlOptions,
        _extension_additions_list_spec_for_ControlOptions,
        _root_component_type_list_2_spec_for_ControlOptions,
        undefined,
    );
    return new ControlOptions(
        serviceControls,
        searchOptions,
        hierarchyOptions
    );
}; }
    return _cached_decoder_for_ControlOptions(el);
}

let _cached_encoder_for_ControlOptions: $.ASN1Encoder<ControlOptions> | null = null;

/**
 * @summary Encodes a(n) ControlOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlOptions, encoded as an ASN.1 Element.
 */
export
function _encode_ControlOptions (value: ControlOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlOptions) { _cached_encoder_for_ControlOptions = function (value: ControlOptions, elGetter: $.ASN1Encoder<ControlOptions>): _Element {
    const _components: _Element[] = [];
    if (value.serviceControls !== undefined && !$.deepEq(value.serviceControls, ControlOptions._default_value_for_serviceControls)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 0, () => _encode_ServiceControlOptions, $.BER)(value.serviceControls, $.BER));
    }
    if (value.searchOptions !== undefined && !$.deepEq(value.searchOptions, ControlOptions._default_value_for_searchOptions)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 1, () => _encode_SearchControlOptions, $.BER)(value.searchOptions, $.BER));
    }
    if (value.hierarchyOptions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_HierarchySelections, $.BER)(value.hierarchyOptions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ControlOptions(value, elGetter);
}


/* eslint-enable */
