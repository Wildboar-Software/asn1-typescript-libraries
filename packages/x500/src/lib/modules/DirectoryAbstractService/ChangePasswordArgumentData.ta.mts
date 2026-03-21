/* eslint-disable */
import type { OPTIONAL, INTEGER, BIT_STRING, BOOLEAN } from "@wildboar/asn1";
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta.mjs";
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
    CommonArguments,
    _root_component_type_list_1_spec_for_CommonArguments,
    _root_component_type_list_2_spec_for_CommonArguments,
    _extension_additions_list_spec_for_CommonArguments,
} from "../DirectoryAbstractService/CommonArguments.ta.mjs";

/**
 * @summary ChangePasswordArgumentData
 * @description
 * 
 * Note that the official ASN.1 SEQUENCE does NOT include the
 * `COMPONENTS OF CommonArguments`. Since I believe this to be a mistake, I
 * have added this component to the sequence here. Since the common
 * arguments have such high-numbered context-specific tags, it is unlikely
 * that they will accidentally collide with a future definition of the
 * specification.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangePasswordArgumentData ::= SEQUENCE {
 *   object   [0]  DistinguishedName,
 *   oldPwd   [1]  UserPwd,
 *   newPwd   [2]  UserPwd,
 *   ... }
 * ```
 *
 */
export class ChangePasswordArgumentData implements CommonArguments {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: DistinguishedName,
        /**
         * @summary `oldPwd`.
         * @public
         * @readonly
         */
        readonly oldPwd: UserPwd,
        /**
         * @summary `newPwd`.
         * @public
         * @readonly
         */
        readonly newPwd: UserPwd,
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
     * @summary Restructures an object into a ChangePasswordArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `ChangePasswordArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangePasswordArgumentData`.
     * @returns {ChangePasswordArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ChangePasswordArgumentData]: ChangePasswordArgumentData[_K];
            }
        >
    ): ChangePasswordArgumentData {
        return new ChangePasswordArgumentData(
            _o.object,
            _o.oldPwd,
            _o.newPwd,
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
 * @summary The Leading Root Component Types of ChangePasswordArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChangePasswordArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "oldPwd",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "newPwd",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    ..._root_component_type_list_1_spec_for_CommonArguments,
];

/**
 * @summary The Trailing Root Component Types of ChangePasswordArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChangePasswordArgumentData: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonArguments,
];

/**
 * @summary The Extension Addition Component Types of ChangePasswordArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChangePasswordArgumentData: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonArguments,
];

let _cached_decoder_for_ChangePasswordArgumentData: $.ASN1Decoder<ChangePasswordArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangePasswordArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangePasswordArgumentData} The decoded data structure.
 */
export function _decode_ChangePasswordArgumentData(el: _Element): ChangePasswordArgumentData {
    if (!_cached_decoder_for_ChangePasswordArgumentData) {
        _cached_decoder_for_ChangePasswordArgumentData = function (
            el: _Element
        ): ChangePasswordArgumentData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "ChangePasswordArgumentData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "object";
            sequence[1].name = "oldPwd";
            sequence[2].name = "newPwd";
            let object!: DistinguishedName;
            let oldPwd!: UserPwd;
            let newPwd!: UserPwd;
            object = $._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[0]);
            oldPwd = $._decode_explicit<UserPwd>(() => _decode_UserPwd)(
                sequence[1]
            );
            newPwd = $._decode_explicit<UserPwd>(() => _decode_UserPwd)(
                sequence[2]
            );

            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: _Element[] = [];
            let serviceControls: OPTIONAL<ServiceControls> =
                ChangePasswordArgumentData._default_value_for_serviceControls;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let requestor: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                ChangePasswordArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let criticalExtensions: OPTIONAL<BIT_STRING>;
            let referenceType: OPTIONAL<ReferenceType>;
            let entryOnly: OPTIONAL<BOOLEAN> =
                ChangePasswordArgumentData._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                ChangePasswordArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: OPTIONAL<ContextSelection>;
            let familyGrouping: OPTIONAL<FamilyGrouping> =
                ChangePasswordArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
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
                _root_component_type_list_1_spec_for_ChangePasswordArgumentData,
                _extension_additions_list_spec_for_ChangePasswordArgumentData,
                _root_component_type_list_2_spec_for_ChangePasswordArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChangePasswordArgumentData(
                object,
                oldPwd,
                newPwd,
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
                familyGrouping,
            );
        };
    }
    return _cached_decoder_for_ChangePasswordArgumentData(el);
}

let _cached_encoder_for_ChangePasswordArgumentData: $.ASN1Encoder<ChangePasswordArgumentData> | null = null;

/**
 * @summary Encodes a(n) ChangePasswordArgumentData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePasswordArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_ChangePasswordArgumentData(
    value: ChangePasswordArgumentData,
    elGetter: $.ASN1Encoder<ChangePasswordArgumentData>
): _Element {
    if (!_cached_encoder_for_ChangePasswordArgumentData) {
        _cached_encoder_for_ChangePasswordArgumentData = function (
            value: ChangePasswordArgumentData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.object, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_UserPwd,
                                $.BER
                            )(value.oldPwd, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_UserPwd,
                                $.BER
                            )(value.newPwd, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                ChangePasswordArgumentData._default_value_for_serviceControls
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
                                ChangePasswordArgumentData._default_value_for_operationProgress
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
                                ChangePasswordArgumentData._default_value_for_entryOnly
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
                                ChangePasswordArgumentData._default_value_for_nameResolveOnMaster
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
                                ChangePasswordArgumentData._default_value_for_familyGrouping
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
    return _cached_encoder_for_ChangePasswordArgumentData(value, elGetter);
}


/* eslint-enable */
