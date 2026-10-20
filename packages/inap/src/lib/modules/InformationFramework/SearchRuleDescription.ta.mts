/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { SearchRule, _decode_SearchRule, _encode_SearchRule } from "../InformationFramework/SearchRule.ta.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { ub_search } from "../UpperBounds/ub-search.va.mjs";
import { RequestAttribute, _decode_RequestAttribute, _encode_RequestAttribute } from "../InformationFramework/RequestAttribute.ta.mjs";
// export { RequestAttribute, _decode_RequestAttribute, _encode_RequestAttribute } from "../InformationFramework/RequestAttribute.ta.mjs";
import { AttributeCombination, _decode_AttributeCombination, _encode_AttributeCombination } from "../InformationFramework/AttributeCombination.ta.mjs";
// export { AttributeCombination, _decode_AttributeCombination, _encode_AttributeCombination } from "../InformationFramework/AttributeCombination.ta.mjs";
import { ResultAttribute, _decode_ResultAttribute, _encode_ResultAttribute } from "../InformationFramework/ResultAttribute.ta.mjs";
// export { ResultAttribute, _decode_ResultAttribute, _encode_ResultAttribute } from "../InformationFramework/ResultAttribute.ta.mjs";
import { ControlOptions, _decode_ControlOptions, _encode_ControlOptions } from "../InformationFramework/ControlOptions.ta.mjs";
// export { ControlOptions, _decode_ControlOptions, _encode_ControlOptions } from "../InformationFramework/ControlOptions.ta.mjs";
import { FamilyGrouping, _decode_FamilyGrouping, _encode_FamilyGrouping, _enum_for_FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
// export { FamilyGrouping, _enum_for_FamilyGrouping, FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, entryOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_compoundEntry /* IMPORTED_LONG_ENUMERATION_ITEM */, compoundEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_strands /* IMPORTED_LONG_ENUMERATION_ITEM */, strands /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_multiStrand /* IMPORTED_LONG_ENUMERATION_ITEM */, multiStrand /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FamilyGrouping, _encode_FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
import { FamilyReturn, _decode_FamilyReturn, _encode_FamilyReturn } from "../DirectoryAbstractService/FamilyReturn.ta.mjs";
// export { FamilyReturn, _decode_FamilyReturn, _encode_FamilyReturn } from "../DirectoryAbstractService/FamilyReturn.ta.mjs";
import { RelaxationPolicy, _decode_RelaxationPolicy, _encode_RelaxationPolicy } from "../InformationFramework/RelaxationPolicy.ta.mjs";
// export { RelaxationPolicy, _decode_RelaxationPolicy, _encode_RelaxationPolicy } from "../InformationFramework/RelaxationPolicy.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { AllowedSubset, _decode_AllowedSubset, _encode_AllowedSubset } from "../InformationFramework/AllowedSubset.ta.mjs";
// export { AllowedSubset, AllowedSubset_baseObject /* IMPORTED_LONG_NAMED_BIT */, AllowedSubset_oneLevel /* IMPORTED_LONG_NAMED_BIT */, AllowedSubset_wholeSubtree /* IMPORTED_LONG_NAMED_BIT */, _decode_AllowedSubset, _encode_AllowedSubset } from "../InformationFramework/AllowedSubset.ta.mjs";
import { ImposedSubset, _decode_ImposedSubset, _encode_ImposedSubset, _enum_for_ImposedSubset } from "../InformationFramework/ImposedSubset.ta.mjs";
// export { ImposedSubset, _enum_for_ImposedSubset, ImposedSubset_baseObject /* IMPORTED_LONG_ENUMERATION_ITEM */, ImposedSubset_oneLevel /* IMPORTED_LONG_ENUMERATION_ITEM */, ImposedSubset_wholeSubtree /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ImposedSubset, _encode_ImposedSubset } from "../InformationFramework/ImposedSubset.ta.mjs";
import { EntryLimit, _decode_EntryLimit, _encode_EntryLimit } from "../InformationFramework/EntryLimit.ta.mjs";
// export { EntryLimit, _decode_EntryLimit, _encode_EntryLimit } from "../InformationFramework/EntryLimit.ta.mjs";


/**
 * @summary SearchRuleDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF SearchRule,
 *   name         [28]  SET SIZE (1..MAX) OF DirectoryString{ub-search} OPTIONAL,
 *   description  [29]  DirectoryString{ub-search} OPTIONAL,
 *   obsolete     [30]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class SearchRuleDescription {
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: INTEGER /* REPLICATED_COMPONENT */;
    /**
     * @summary `dmdId`.
     * @public
     * @readonly
     */
    readonly dmdId: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */;
    /**
     * @summary `serviceType`.
     * @public
     * @readonly
     */
    readonly serviceType: OPTIONAL<OBJECT_IDENTIFIER> /* REPLICATED_COMPONENT */;
    /**
     * @summary `userClass`.
     * @public
     * @readonly
     */
    readonly userClass: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */;
    /**
     * @summary `inputAttributeTypes`.
     * @public
     * @readonly
     */
    readonly inputAttributeTypes: OPTIONAL<RequestAttribute[]> /* REPLICATED_COMPONENT */;
    /**
     * @summary `attributeCombination`.
     * @public
     * @readonly
     */
    readonly attributeCombination: OPTIONAL<AttributeCombination> /* REPLICATED_COMPONENT */;
    /**
     * @summary `outputAttributeTypes`.
     * @public
     * @readonly
     */
    readonly outputAttributeTypes: OPTIONAL<ResultAttribute[]> /* REPLICATED_COMPONENT */;
    /**
     * @summary `defaultControls`.
     * @public
     * @readonly
     */
    readonly defaultControls: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */;
    /**
     * @summary `mandatoryControls`.
     * @public
     * @readonly
     */
    readonly mandatoryControls: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */;
    /**
     * @summary `searchRuleControls`.
     * @public
     * @readonly
     */
    readonly searchRuleControls: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */;
    /**
     * @summary `familyGrouping`.
     * @public
     * @readonly
     */
    readonly familyGrouping: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */;
    /**
     * @summary `familyReturn`.
     * @public
     * @readonly
     */
    readonly familyReturn: OPTIONAL<FamilyReturn> /* REPLICATED_COMPONENT */;
    /**
     * @summary `relaxation`.
     * @public
     * @readonly
     */
    readonly relaxation: OPTIONAL<RelaxationPolicy> /* REPLICATED_COMPONENT */;
    /**
     * @summary `additionalControl`.
     * @public
     * @readonly
     */
    readonly additionalControl: OPTIONAL<AttributeType[]> /* REPLICATED_COMPONENT */;
    /**
     * @summary `allowedSubset`.
     * @public
     * @readonly
     */
    readonly allowedSubset: OPTIONAL<AllowedSubset> /* REPLICATED_COMPONENT */;
    /**
     * @summary `imposedSubset`.
     * @public
     * @readonly
     */
    readonly imposedSubset: OPTIONAL<ImposedSubset> /* REPLICATED_COMPONENT */;
    /**
     * @summary `entryLimit`.
     * @public
     * @readonly
     */
    readonly entryLimit: OPTIONAL<EntryLimit> /* REPLICATED_COMPONENT */;
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<DirectoryString[]>;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<DirectoryString>;
    /**
     * @summary `obsolete`.
     * @public
     * @readonly
     */
    readonly obsolete: OPTIONAL<BOOLEAN>;

    constructor (
        id: INTEGER /* REPLICATED_COMPONENT */,
        dmdId: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        serviceType: OPTIONAL<OBJECT_IDENTIFIER> /* REPLICATED_COMPONENT */,
        userClass: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        inputAttributeTypes: OPTIONAL<RequestAttribute[]> /* REPLICATED_COMPONENT */,
        attributeCombination: OPTIONAL<AttributeCombination> /* REPLICATED_COMPONENT */,
        outputAttributeTypes: OPTIONAL<ResultAttribute[]> /* REPLICATED_COMPONENT */,
        defaultControls: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */,
        mandatoryControls: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */,
        searchRuleControls: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */,
        familyGrouping: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */,
        familyReturn: OPTIONAL<FamilyReturn> /* REPLICATED_COMPONENT */,
        relaxation: OPTIONAL<RelaxationPolicy> /* REPLICATED_COMPONENT */,
        additionalControl: OPTIONAL<AttributeType[]> /* REPLICATED_COMPONENT */,
        allowedSubset: OPTIONAL<AllowedSubset> /* REPLICATED_COMPONENT */,
        imposedSubset: OPTIONAL<ImposedSubset> /* REPLICATED_COMPONENT */,
        entryLimit: OPTIONAL<EntryLimit> /* REPLICATED_COMPONENT */,
        name: OPTIONAL<DirectoryString[]>,
        description: OPTIONAL<DirectoryString>,
        obsolete: OPTIONAL<BOOLEAN>
    ) {
        this.id = id;
        this.dmdId = dmdId;
        this.serviceType = serviceType;
        this.userClass = userClass;
        this.inputAttributeTypes = inputAttributeTypes;
        this.attributeCombination = attributeCombination;
        this.outputAttributeTypes = outputAttributeTypes;
        this.defaultControls = defaultControls;
        this.mandatoryControls = mandatoryControls;
        this.searchRuleControls = searchRuleControls;
        this.familyGrouping = familyGrouping;
        this.familyReturn = familyReturn;
        this.relaxation = relaxation;
        this.additionalControl = additionalControl;
        this.allowedSubset = allowedSubset;
        this.imposedSubset = imposedSubset;
        this.entryLimit = entryLimit;
        this.name = name;
        this.description = description;
        this.obsolete = obsolete;
    }

    /**
     * @summary Restructures an object into a SearchRuleDescription
     * @description
     * 
     * This takes an `object` and converts it to a `SearchRuleDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRuleDescription`.
     * @returns {SearchRuleDescription}
     */
    public static _from_object (_o: { [_K in keyof (SearchRuleDescription)]: (SearchRuleDescription)[_K] }): SearchRuleDescription {
        return new SearchRuleDescription(_o.id, _o.dmdId, _o.serviceType, _o.userClass, _o.inputAttributeTypes, _o.attributeCombination, _o.outputAttributeTypes, _o.defaultControls, _o.mandatoryControls, _o.searchRuleControls, _o.familyGrouping, _o.familyReturn, _o.relaxation, _o.additionalControl, _o.allowedSubset, _o.imposedSubset, _o.entryLimit, _o.name, _o.description, _o.obsolete);
    }

    /**
     * @summary Getter that returns the default value for `attributeCombination`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attributeCombination () { return { and: [  ] }; }
    /**
     * @summary Getter that returns the default value for `allowedSubset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_allowedSubset () { return new Uint8ClampedArray([ 1, 1, 1 ]); }
    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete () { return false; }        /**
         * @summary The enum used as the type of the component `familyGrouping`
         * @public
         * @static
         */

    public static _enum_for_familyGrouping = _enum_for_FamilyGrouping;        /**
         * @summary The enum used as the type of the component `imposedSubset`
         * @public
         * @static
         */

    public static _enum_for_imposedSubset = _enum_for_ImposedSubset;
}

/**
 * @summary The Leading Root Component Types of SearchRuleDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("dmdId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("userClass", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("inputAttributeTypes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attributeCombination", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("outputAttributeTypes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("defaultControls", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mandatoryControls", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("searchRuleControls", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("familyGrouping", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("familyReturn", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("relaxation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("additionalControl", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("allowedSubset", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("imposedSubset", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("entryLimit", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("obsolete", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of SearchRuleDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchRuleDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchRuleDescription: $.ASN1Decoder<SearchRuleDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchRuleDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchRuleDescription (el: _Element): SearchRuleDescription {
    if (!_cached_decoder_for_SearchRuleDescription) { _cached_decoder_for_SearchRuleDescription = function (el: _Element): SearchRuleDescription {
    let id!: INTEGER;
    let dmdId!: OBJECT_IDENTIFIER;
    let serviceType: OPTIONAL<OBJECT_IDENTIFIER>;
    let userClass: OPTIONAL<INTEGER>;
    let inputAttributeTypes: OPTIONAL<RequestAttribute[]>;
    let attributeCombination: OPTIONAL<AttributeCombination> = SearchRuleDescription._default_value_for_attributeCombination;
    let outputAttributeTypes: OPTIONAL<ResultAttribute[]>;
    let defaultControls: OPTIONAL<ControlOptions>;
    let mandatoryControls: OPTIONAL<ControlOptions>;
    let searchRuleControls: OPTIONAL<ControlOptions>;
    let familyGrouping: OPTIONAL<FamilyGrouping>;
    let familyReturn: OPTIONAL<FamilyReturn>;
    let relaxation: OPTIONAL<RelaxationPolicy>;
    let additionalControl: OPTIONAL<AttributeType[]>;
    let allowedSubset: OPTIONAL<AllowedSubset> = SearchRuleDescription._default_value_for_allowedSubset;
    let imposedSubset: OPTIONAL<ImposedSubset>;
    let entryLimit: OPTIONAL<EntryLimit>;
    let name: OPTIONAL<DirectoryString[]>;
    let description: OPTIONAL<DirectoryString>;
    let obsolete: OPTIONAL<BOOLEAN> = SearchRuleDescription._default_value_for_obsolete;
    const callbacks: $.DecodingMap = {
        "id": (_el: _Element): void => { id = $._decodeInteger(_el); },
        "dmdId": (_el: _Element): void => { dmdId = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "serviceType": (_el: _Element): void => { serviceType = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "userClass": (_el: _Element): void => { userClass = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "inputAttributeTypes": (_el: _Element): void => { inputAttributeTypes = $._decode_explicit<RequestAttribute[]>(() => $._decodeSequenceOf<RequestAttribute>(() => _decode_RequestAttribute))(_el); },
        "attributeCombination": (_el: _Element): void => { attributeCombination = $._decode_explicit<AttributeCombination>(() => _decode_AttributeCombination)(_el); },
        "outputAttributeTypes": (_el: _Element): void => { outputAttributeTypes = $._decode_explicit<ResultAttribute[]>(() => $._decodeSequenceOf<ResultAttribute>(() => _decode_ResultAttribute))(_el); },
        "defaultControls": (_el: _Element): void => { defaultControls = $._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "mandatoryControls": (_el: _Element): void => { mandatoryControls = $._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "searchRuleControls": (_el: _Element): void => { searchRuleControls = $._decode_explicit<ControlOptions>(() => _decode_ControlOptions)(_el); },
        "familyGrouping": (_el: _Element): void => { familyGrouping = $._decode_explicit<FamilyGrouping>(() => _decode_FamilyGrouping)(_el); },
        "familyReturn": (_el: _Element): void => { familyReturn = $._decode_explicit<FamilyReturn>(() => _decode_FamilyReturn)(_el); },
        "relaxation": (_el: _Element): void => { relaxation = $._decode_explicit<RelaxationPolicy>(() => _decode_RelaxationPolicy)(_el); },
        "additionalControl": (_el: _Element): void => { additionalControl = $._decode_explicit<AttributeType[]>(() => $._decodeSequenceOf<AttributeType>(() => _decode_AttributeType))(_el); },
        "allowedSubset": (_el: _Element): void => { allowedSubset = $._decode_explicit<AllowedSubset>(() => _decode_AllowedSubset)(_el); },
        "imposedSubset": (_el: _Element): void => { imposedSubset = $._decode_explicit<ImposedSubset>(() => _decode_ImposedSubset)(_el); },
        "entryLimit": (_el: _Element): void => { entryLimit = $._decode_explicit<EntryLimit>(() => _decode_EntryLimit)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<DirectoryString[]>(() => $._decodeSetOf<DirectoryString>(() => _decode_DirectoryString))(_el); },
        "description": (_el: _Element): void => { description = $._decode_explicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "obsolete": (_el: _Element): void => { obsolete = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchRuleDescription,
        _extension_additions_list_spec_for_SearchRuleDescription,
        _root_component_type_list_2_spec_for_SearchRuleDescription,
        undefined,
    );
    return new SearchRuleDescription(
        id,
        dmdId,
        serviceType,
        userClass,
        inputAttributeTypes,
        attributeCombination,
        outputAttributeTypes,
        defaultControls,
        mandatoryControls,
        searchRuleControls,
        familyGrouping,
        familyReturn,
        relaxation,
        additionalControl,
        allowedSubset,
        imposedSubset,
        entryLimit,
        name,
        description,
        obsolete
    );
}; }
    return _cached_decoder_for_SearchRuleDescription(el);
}

let _cached_encoder_for_SearchRuleDescription: $.ASN1Encoder<SearchRuleDescription> | null = null;

/**
 * @summary Encodes a(n) SearchRuleDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRuleDescription, encoded as an ASN.1 Element.
 */
export
function _encode_SearchRuleDescription (value: SearchRuleDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchRuleDescription) { _cached_encoder_for_SearchRuleDescription = function (value: SearchRuleDescription, elGetter: $.ASN1Encoder<SearchRuleDescription>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeInteger(value.id, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.dmdId, $.BER));
    if (value.serviceType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.serviceType, $.BER));
    }
    if (value.userClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.userClass, $.BER));
    }
    if (value.inputAttributeTypes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeSequenceOf<RequestAttribute>(() => _encode_RequestAttribute, $.BER), $.BER)(value.inputAttributeTypes, $.BER));
    }
    if (value.attributeCombination !== undefined && !$.deepEq(value.attributeCombination, SearchRuleDescription._default_value_for_attributeCombination)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 4, () => _encode_AttributeCombination, $.BER)(value.attributeCombination, $.BER));
    }
    if (value.outputAttributeTypes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => $._encodeSequenceOf<ResultAttribute>(() => _encode_ResultAttribute, $.BER), $.BER)(value.outputAttributeTypes, $.BER));
    }
    if (value.defaultControls !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_ControlOptions, $.BER)(value.defaultControls, $.BER));
    }
    if (value.mandatoryControls !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_ControlOptions, $.BER)(value.mandatoryControls, $.BER));
    }
    if (value.searchRuleControls !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_ControlOptions, $.BER)(value.searchRuleControls, $.BER));
    }
    if (value.familyGrouping !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_FamilyGrouping, $.BER)(value.familyGrouping, $.BER));
    }
    if (value.familyReturn !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_FamilyReturn, $.BER)(value.familyReturn, $.BER));
    }
    if (value.relaxation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_RelaxationPolicy, $.BER)(value.relaxation, $.BER));
    }
    if (value.additionalControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 12, () => $._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.additionalControl, $.BER));
    }
    if (value.allowedSubset !== undefined && !$.deepEq(value.allowedSubset, SearchRuleDescription._default_value_for_allowedSubset)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 13, () => _encode_AllowedSubset, $.BER)(value.allowedSubset, $.BER));
    }
    if (value.imposedSubset !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_ImposedSubset, $.BER)(value.imposedSubset, $.BER));
    }
    if (value.entryLimit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 15, () => _encode_EntryLimit, $.BER)(value.entryLimit, $.BER));
    }
    if (value.name !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 28, () => $._encodeSetOf<DirectoryString>(() => _encode_DirectoryString, $.BER), $.BER)(value.name, $.BER));
    }
    if (value.description !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 29, () => _encode_DirectoryString, $.BER)(value.description, $.BER));
    }
    if (value.obsolete !== undefined && !$.deepEq(value.obsolete, SearchRuleDescription._default_value_for_obsolete)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 30, () => $._encodeBoolean, $.BER)(value.obsolete, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SearchRuleDescription(value, elGetter);
}


/* eslint-enable */
