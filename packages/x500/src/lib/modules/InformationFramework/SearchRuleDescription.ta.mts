/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    FamilyGrouping,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _enum_for_FamilyGrouping,
} from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
import {
    FamilyReturn,
    _decode_FamilyReturn,
    _encode_FamilyReturn,
} from "../DirectoryAbstractService/FamilyReturn.ta.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import {
    AllowedSubset,
    _decode_AllowedSubset,
    _encode_AllowedSubset,
} from "../ServiceAdministration/AllowedSubset.ta.mjs";
import {
    AttributeCombination,
    _decode_AttributeCombination,
    _encode_AttributeCombination,
} from "../ServiceAdministration/AttributeCombination.ta.mjs";
import {
    ControlOptions,
    _decode_ControlOptions,
    _encode_ControlOptions,
} from "../ServiceAdministration/ControlOptions.ta.mjs";
import {
    EntryLimit,
    _decode_EntryLimit,
    _encode_EntryLimit,
} from "../ServiceAdministration/EntryLimit.ta.mjs";
import {
    ImposedSubset,
    _decode_ImposedSubset,
    _encode_ImposedSubset,
    _enum_for_ImposedSubset,
} from "../ServiceAdministration/ImposedSubset.ta.mjs";
import {
    RelaxationPolicy,
    _decode_RelaxationPolicy,
    _encode_RelaxationPolicy,
} from "../ServiceAdministration/RelaxationPolicy.ta.mjs";
import {
    RequestAttribute,
    _decode_RequestAttribute,
    _encode_RequestAttribute,
} from "../ServiceAdministration/RequestAttribute.ta.mjs";
import {
    ResultAttribute,
    _decode_ResultAttribute,
    _encode_ResultAttribute,
} from "../ServiceAdministration/ResultAttribute.ta.mjs";
import {
    SearchRule,
} from "../ServiceAdministration/SearchRule.ta.mjs";
import {
    _root_component_type_list_1_spec_for_SearchRule,
} from "../ServiceAdministration/SearchRule.ta.mjs";

/**
 * @summary SearchRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF      SearchRule,
 *   name         [28]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description  [29]  UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SearchRuleDescription extends SearchRule {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        override readonly id: INTEGER /* REPLICATED_COMPONENT */,
        /**
         * @summary `dmdId`.
         * @public
         * @readonly
         */
        override readonly dmdId: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        override readonly serviceType?: OPTIONAL<OBJECT_IDENTIFIER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `userClass`.
         * @public
         * @readonly
         */
        override readonly userClass?: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `inputAttributeTypes`.
         * @public
         * @readonly
         */
        override readonly inputAttributeTypes?: OPTIONAL<
            RequestAttribute[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `attributeCombination`.
         * @public
         * @readonly
         */
        override readonly attributeCombination?: OPTIONAL<AttributeCombination> /* REPLICATED_COMPONENT */,
        /**
         * @summary `outputAttributeTypes`.
         * @public
         * @readonly
         */
        override readonly outputAttributeTypes?: OPTIONAL<
            ResultAttribute[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `defaultControls`.
         * @public
         * @readonly
         */
        override readonly defaultControls?: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */,
        /**
         * @summary `mandatoryControls`.
         * @public
         * @readonly
         */
        override readonly mandatoryControls?: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */,
        /**
         * @summary `searchRuleControls`.
         * @public
         * @readonly
         */
        override readonly searchRuleControls?: OPTIONAL<ControlOptions> /* REPLICATED_COMPONENT */,
        /**
         * @summary `familyGrouping`.
         * @public
         * @readonly
         */
        override readonly familyGrouping?: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */,
        /**
         * @summary `familyReturn`.
         * @public
         * @readonly
         */
        override readonly familyReturn?: OPTIONAL<FamilyReturn> /* REPLICATED_COMPONENT */,
        /**
         * @summary `relaxation`.
         * @public
         * @readonly
         */
        override readonly relaxation?: OPTIONAL<RelaxationPolicy> /* REPLICATED_COMPONENT */,
        /**
         * @summary `additionalControl`.
         * @public
         * @readonly
         */
        override readonly additionalControl?: OPTIONAL<
            AttributeType[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `allowedSubset`.
         * @public
         * @readonly
         */
        override readonly allowedSubset?: OPTIONAL<AllowedSubset> /* REPLICATED_COMPONENT */,
        /**
         * @summary `imposedSubset`.
         * @public
         * @readonly
         */
        override readonly imposedSubset?: OPTIONAL<ImposedSubset> /* REPLICATED_COMPONENT */,
        /**
         * @summary `entryLimit`.
         * @public
         * @readonly
         */
        override readonly entryLimit?: OPTIONAL<EntryLimit> /* REPLICATED_COMPONENT */,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name?: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description?: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        override readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        super(
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
        );
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
    public static override _from_object(
        _o: { [_K in keyof SearchRuleDescription]: SearchRuleDescription[_K] }
    ): SearchRuleDescription {
        return new SearchRuleDescription(
            _o.id,
            _o.dmdId,
            _o.serviceType,
            _o.userClass,
            _o.inputAttributeTypes,
            _o.attributeCombination,
            _o.outputAttributeTypes,
            _o.defaultControls,
            _o.mandatoryControls,
            _o.searchRuleControls,
            _o.familyGrouping,
            _o.familyReturn,
            _o.relaxation,
            _o.additionalControl,
            _o.allowedSubset,
            _o.imposedSubset,
            _o.entryLimit,
            _o.name,
            _o.description,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `attributeCombination`.
     * @public
     * @static
     * @method
     */
    public static override get _default_value_for_attributeCombination(): AttributeCombination {
        return { and: [] };
    }
    /**
     * @summary Getter that returns the default value for `allowedSubset`.
     * @public
     * @static
     * @method
     */
    public static override get _default_value_for_allowedSubset(): AllowedSubset {
        return new Uint8ClampedArray([1, 1, 1]);
    }
    /**
     * @summary The enum used as the type of the component `familyGrouping`
     * @public
     * @static
     */
    public static override _enum_for_familyGrouping = _enum_for_FamilyGrouping;
    /**
     * @summary The enum used as the type of the component `imposedSubset`
     * @public
     * @static
     */
    public static override _enum_for_imposedSubset = _enum_for_ImposedSubset;
}

/**
 * @summary The Leading Root Component Types of SearchRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRuleDescription: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_SearchRule,
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 28)
    ),
    new $.ComponentSpec(
        "description",
        true,
        $.hasTag(_TagClass.context, 29)
    ),
];

/**
 * @summary The Trailing Root Component Types of SearchRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRuleDescription: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SearchRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRuleDescription: $.ComponentSpec[] = [];

let _cached_decoder_for_SearchRuleDescription: $.ASN1Decoder<SearchRuleDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRuleDescription} The decoded data structure.
 */
export function _decode_SearchRuleDescription(el: _Element) {
    if (!_cached_decoder_for_SearchRuleDescription) {
        _cached_decoder_for_SearchRuleDescription = function (
            el: _Element
        ): SearchRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let id!: INTEGER;
            let dmdId!: OBJECT_IDENTIFIER;
            let serviceType: OPTIONAL<OBJECT_IDENTIFIER>;
            let userClass: OPTIONAL<INTEGER>;
            let inputAttributeTypes: OPTIONAL<RequestAttribute[]>;
            let attributeCombination: OPTIONAL<AttributeCombination> =
                SearchRuleDescription._default_value_for_attributeCombination;
            let outputAttributeTypes: OPTIONAL<ResultAttribute[]>;
            let defaultControls: OPTIONAL<ControlOptions>;
            let mandatoryControls: OPTIONAL<ControlOptions>;
            let searchRuleControls: OPTIONAL<ControlOptions>;
            let familyGrouping: OPTIONAL<FamilyGrouping>;
            let familyReturn: OPTIONAL<FamilyReturn>;
            let relaxation: OPTIONAL<RelaxationPolicy>;
            let additionalControl: OPTIONAL<AttributeType[]>;
            let allowedSubset: OPTIONAL<AllowedSubset> =
                SearchRuleDescription._default_value_for_allowedSubset;
            let imposedSubset: OPTIONAL<ImposedSubset>;
            let entryLimit: OPTIONAL<EntryLimit>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                id: (_el: _Element): void => {
                    id = $._decodeInteger(_el);
                },
                dmdId: (_el: _Element): void => {
                    dmdId = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                serviceType: (_el: _Element): void => {
                    serviceType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                userClass: (_el: _Element): void => {
                    userClass = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                inputAttributeTypes: (_el: _Element): void => {
                    inputAttributeTypes = $._decode_explicit<
                        RequestAttribute[]
                    >(() =>
                        $._decodeSequenceOf<RequestAttribute>(
                            () => _decode_RequestAttribute
                        )
                    )(_el);
                },
                attributeCombination: (_el: _Element): void => {
                    attributeCombination = $._decode_explicit<AttributeCombination>(
                        () => _decode_AttributeCombination
                    )(_el);
                },
                outputAttributeTypes: (_el: _Element): void => {
                    outputAttributeTypes = $._decode_explicit<
                        ResultAttribute[]
                    >(() =>
                        $._decodeSequenceOf<ResultAttribute>(
                            () => _decode_ResultAttribute
                        )
                    )(_el);
                },
                defaultControls: (_el: _Element): void => {
                    defaultControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                mandatoryControls: (_el: _Element): void => {
                    mandatoryControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                searchRuleControls: (_el: _Element): void => {
                    searchRuleControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                familyGrouping: (_el: _Element): void => {
                    familyGrouping = $._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
                familyReturn: (_el: _Element): void => {
                    familyReturn = $._decode_explicit<FamilyReturn>(
                        () => _decode_FamilyReturn
                    )(_el);
                },
                relaxation: (_el: _Element): void => {
                    relaxation = $._decode_explicit<RelaxationPolicy>(
                        () => _decode_RelaxationPolicy
                    )(_el);
                },
                additionalControl: (_el: _Element): void => {
                    additionalControl = $._decode_explicit<AttributeType[]>(
                        () =>
                            $._decodeSequenceOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allowedSubset: (_el: _Element): void => {
                    allowedSubset = $._decode_explicit<AllowedSubset>(
                        () => _decode_AllowedSubset
                    )(_el);
                },
                imposedSubset: (_el: _Element): void => {
                    imposedSubset = $._decode_explicit<ImposedSubset>(
                        () => _decode_ImposedSubset
                    )(_el);
                },
                entryLimit: (_el: _Element): void => {
                    entryLimit = $._decode_explicit<EntryLimit>(
                        () => _decode_EntryLimit
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<UnboundedDirectoryString[]>(() =>
                        $._decodeSetOf<UnboundedDirectoryString>(
                            () => _decode_UnboundedDirectoryString
                        )
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = $._decode_explicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchRuleDescription,
                _extension_additions_list_spec_for_SearchRuleDescription,
                _root_component_type_list_2_spec_for_SearchRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchRuleDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ id,
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
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SearchRuleDescription(el);
}

let _cached_encoder_for_SearchRuleDescription: $.ASN1Encoder<SearchRuleDescription> | null = null;

/**
 * @summary Encodes a(n) SearchRuleDescription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_SearchRuleDescription(
    value: SearchRuleDescription,
    elGetter: $.ASN1Encoder<SearchRuleDescription>
) {
    if (!_cached_encoder_for_SearchRuleDescription) {
        _cached_encoder_for_SearchRuleDescription = function (
            value: SearchRuleDescription        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.id, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.dmdId, $.BER),
                            /* IF_ABSENT  */ value.serviceType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.serviceType, $.BER),
                            /* IF_ABSENT  */ value.userClass === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.userClass, $.BER),
                            /* IF_ABSENT  */ value.inputAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSequenceOf<RequestAttribute>(
                                              () => _encode_RequestAttribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.inputAttributeTypes, $.BER),
                            /* IF_DEFAULT */ value.attributeCombination ===
                                undefined ||
                            $.deepEq(
                                value.attributeCombination,
                                SearchRuleDescription._default_value_for_attributeCombination
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_AttributeCombination,
                                      $.BER
                                  )(value.attributeCombination, $.BER),
                            /* IF_ABSENT  */ value.outputAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSequenceOf<ResultAttribute>(
                                              () => _encode_ResultAttribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.outputAttributeTypes, $.BER),
                            /* IF_ABSENT  */ value.defaultControls === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.defaultControls, $.BER),
                            /* IF_ABSENT  */ value.mandatoryControls ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.mandatoryControls, $.BER),
                            /* IF_ABSENT  */ value.searchRuleControls ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.searchRuleControls, $.BER),
                            /* IF_ABSENT  */ value.familyGrouping === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_FamilyGrouping,
                                      $.BER
                                  )(value.familyGrouping, $.BER),
                            /* IF_ABSENT  */ value.familyReturn === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_FamilyReturn,
                                      $.BER
                                  )(value.familyReturn, $.BER),
                            /* IF_ABSENT  */ value.relaxation === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_RelaxationPolicy,
                                      $.BER
                                  )(value.relaxation, $.BER),
                            /* IF_ABSENT  */ value.additionalControl ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () =>
                                          $._encodeSequenceOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.additionalControl, $.BER),
                            /* IF_DEFAULT */ value.allowedSubset ===
                                undefined ||
                            $.deepEq(
                                value.allowedSubset,
                                SearchRuleDescription._default_value_for_allowedSubset
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      13,
                                      () => _encode_AllowedSubset,
                                      $.BER
                                  )(value.allowedSubset, $.BER),
                            /* IF_ABSENT  */ value.imposedSubset === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_ImposedSubset,
                                      $.BER
                                  )(value.imposedSubset, $.BER),
                            /* IF_ABSENT  */ value.entryLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      15,
                                      () => _encode_EntryLimit,
                                      $.BER
                                  )(value.entryLimit, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () =>
                                          $._encodeSetOf<UnboundedDirectoryString>(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.description, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SearchRuleDescription(value, elGetter);
}


/* eslint-enable */
