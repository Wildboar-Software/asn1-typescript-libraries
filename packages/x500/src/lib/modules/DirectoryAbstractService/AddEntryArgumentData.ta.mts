/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta.mjs";
import {
    FamilyGrouping,
    FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _enum_for_FamilyGrouping,
} from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    ServiceControls,
    _decode_ServiceControls,
    _encode_ServiceControls,
} from "../DirectoryAbstractService/ServiceControls.ta.mjs";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";
import {
    Exclusions,
    _decode_Exclusions,
    _encode_Exclusions,
} from "../DistributedOperations/Exclusions.ta.mjs";
import {
    OperationProgress,
    _decode_OperationProgress,
    _encode_OperationProgress,
} from "../DistributedOperations/OperationProgress.ta.mjs";
import {
    ReferenceType,
    _decode_ReferenceType,
    _encode_ReferenceType,
    _enum_for_ReferenceType,
} from "../DistributedOperations/ReferenceType.ta.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    CommonArguments,
    _root_component_type_list_1_spec_for_CommonArguments,
    _root_component_type_list_2_spec_for_CommonArguments,
    _extension_additions_list_spec_for_CommonArguments,
} from "../DirectoryAbstractService/CommonArguments.ta.mjs";

/**
 * @summary AddEntryArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddEntryArgumentData ::= SET {
 *   object        [0]  Name,
 *   entry         [1]  SET OF Attribute{{SupportedAttributes}},
 *   targetSystem  [2]  AccessPoint OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonArguments }
 * ```
 *
 */
export class AddEntryArgumentData implements CommonArguments {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: Name,
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: Attribute[],
        /**
         * @summary `targetSystem`.
         * @public
         * @readonly
         */
        readonly targetSystem?: OPTIONAL<AccessPoint>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `serviceControls`.
         * @public
         * @readonly
         */
        readonly serviceControls?: OPTIONAL<ServiceControls> /* REPLICATED_COMPONENT */,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters?: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `requestor`.
         * @public
         * @readonly
         */
        readonly requestor?: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress?: OPTIONAL<OperationProgress> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs?: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `criticalExtensions`.
         * @public
         * @readonly
         */
        readonly criticalExtensions?: OPTIONAL<BIT_STRING> /* REPLICATED_COMPONENT */,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType?: OPTIONAL<ReferenceType> /* REPLICATED_COMPONENT */,
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions?: OPTIONAL<Exclusions> /* REPLICATED_COMPONENT */,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `operationContexts`.
         * @public
         * @readonly
         */
        readonly operationContexts?: OPTIONAL<ContextSelection> /* REPLICATED_COMPONENT */,
        /**
         * @summary `familyGrouping`.
         * @public
         * @readonly
         */
        readonly familyGrouping?: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a AddEntryArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `AddEntryArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddEntryArgumentData`.
     * @returns {AddEntryArgumentData}
     */
    public static _from_object(
        _o: { [_K in keyof AddEntryArgumentData]: AddEntryArgumentData[_K] }
    ): AddEntryArgumentData {
        return new AddEntryArgumentData(
            _o.object,
            _o.entry,
            _o.targetSystem,
            _o._unrecognizedExtensionsList,
            _o.serviceControls,
            _o.securityParameters,
            _o.requestor,
            _o.operationProgress,
            _o.aliasedRDNs,
            _o.criticalExtensions,
            _o.referenceType,
            _o.entryOnly,
            _o.exclusions,
            _o.nameResolveOnMaster,
            _o.operationContexts,
            _o.familyGrouping
        );
    }

    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls(): ServiceControls {
        return ServiceControls._from_object({});
    }
    /**
     * @summary Getter that returns the default value for `operationProgress`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_operationProgress(): OperationProgress {
        return OperationProgress._from_object({
            nameResolutionPhase:
                OperationProgress._enum_for_nameResolutionPhase.notStarted,
        });
    }
    /**
     * @summary Getter that returns the default value for `entryOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entryOnly(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `nameResolveOnMaster`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaster(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `familyGrouping`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_familyGrouping(): FamilyGrouping {
        return FamilyGrouping_entryOnly;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
    /**
     * @summary The enum used as the type of the component `familyGrouping`
     * @public
     * @static
     */

    public static _enum_for_familyGrouping = _enum_for_FamilyGrouping;
}

/**
 * @summary The Leading Root Component Types of AddEntryArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddEntryArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "entry",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "targetSystem",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    ..._root_component_type_list_1_spec_for_CommonArguments,
];

/**
 * @summary The Trailing Root Component Types of AddEntryArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddEntryArgumentData: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonArguments,
];

/**
 * @summary The Extension Addition Component Types of AddEntryArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddEntryArgumentData: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonArguments,
];

let _cached_decoder_for_AddEntryArgumentData: $.ASN1Decoder<AddEntryArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddEntryArgumentData} The decoded data structure.
 */
export function _decode_AddEntryArgumentData(el: _Element): AddEntryArgumentData {
    if (!_cached_decoder_for_AddEntryArgumentData) {
        _cached_decoder_for_AddEntryArgumentData = function (
            el: _Element
        ): AddEntryArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let entry!: Attribute[];
            let targetSystem: OPTIONAL<AccessPoint>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let serviceControls: OPTIONAL<ServiceControls> =
                AddEntryArgumentData._default_value_for_serviceControls;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let requestor: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                AddEntryArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let criticalExtensions: OPTIONAL<BIT_STRING>;
            let referenceType: OPTIONAL<ReferenceType>;
            let entryOnly: OPTIONAL<BOOLEAN> =
                AddEntryArgumentData._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                AddEntryArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: OPTIONAL<ContextSelection>;
            let familyGrouping: OPTIONAL<FamilyGrouping> =
                AddEntryArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                object: (_el: _Element): void => {
                    object = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                entry: (_el: _Element): void => {
                    entry = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                targetSystem: (_el: _Element): void => {
                    targetSystem = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                serviceControls: (_el: _Element): void => {
                    serviceControls = $._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                requestor: (_el: _Element): void => {
                    requestor = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: _Element): void => {
                    criticalExtensions = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                entryOnly: (_el: _Element): void => {
                    entryOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: _Element): void => {
                    exclusions = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                operationContexts: (_el: _Element): void => {
                    operationContexts = $._decode_explicit<ContextSelection>(
                        () => _decode_ContextSelection
                    )(_el);
                },
                familyGrouping: (_el: _Element): void => {
                    familyGrouping = $._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddEntryArgumentData,
                _extension_additions_list_spec_for_AddEntryArgumentData,
                _root_component_type_list_2_spec_for_AddEntryArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddEntryArgumentData(
                /* SET_CONSTRUCTOR_CALL */ object,
                entry,
                targetSystem,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_AddEntryArgumentData(el);
}

let _cached_encoder_for_AddEntryArgumentData: $.ASN1Encoder<AddEntryArgumentData> | null = null;

/**
 * @summary Encodes a(n) AddEntryArgumentData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_AddEntryArgumentData(
    value: AddEntryArgumentData,
    elGetter: $.ASN1Encoder<AddEntryArgumentData>
): _Element {
    if (!_cached_encoder_for_AddEntryArgumentData) {
        _cached_encoder_for_AddEntryArgumentData = function (
            value: AddEntryArgumentData        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.object, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () =>
                                    $._encodeSetOf<Attribute>(
                                        () => _encode_Attribute,
                                        $.BER
                                    ),
                                $.BER
                            )(value.entry, $.BER),
                            /* IF_ABSENT  */ value.targetSystem === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AccessPoint,
                                      $.BER
                                  )(value.targetSystem, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                AddEntryArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      $.BER
                                  )(value.serviceControls, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.requestor, $.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            $.deepEq(
                                value.operationProgress,
                                AddEntryArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      $.BER
                                  )(value.operationProgress, $.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      26,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.aliasedRDNs, $.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      25,
                                      () => $._encodeBitString,
                                      $.BER
                                  )(value.criticalExtensions, $.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      $.BER
                                  )(value.referenceType, $.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                AddEntryArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      23,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.entryOnly, $.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.exclusions, $.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                AddEntryArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      21,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.nameResolveOnMaster, $.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      $.BER
                                  )(value.operationContexts, $.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            $.deepEq(
                                value.familyGrouping,
                                AddEntryArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      $.BER
                                  )(value.familyGrouping, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddEntryArgumentData(value, elGetter);
}


/* eslint-enable */
