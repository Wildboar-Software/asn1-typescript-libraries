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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
/**
 * @summary CommonArguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonArguments ::= SET {
 *   serviceControls      [30]  ServiceControls    DEFAULT {},
 *   securityParameters   [29]  SecurityParameters OPTIONAL,
 *   requestor            [28]  DistinguishedName  OPTIONAL,
 *   operationProgress    [27]  OperationProgress
 *                              DEFAULT {nameResolutionPhase notStarted},
 *   aliasedRDNs          [26]  INTEGER            OPTIONAL,
 *   criticalExtensions   [25]  BIT STRING         OPTIONAL,
 *   referenceType        [24]  ReferenceType      OPTIONAL,
 *   entryOnly            [23]  BOOLEAN            DEFAULT TRUE,
 *   exclusions           [22]  Exclusions         OPTIONAL,
 *   nameResolveOnMaster  [21]  BOOLEAN            DEFAULT FALSE,
 *   operationContexts    [20]  ContextSelection   OPTIONAL,
 *   familyGrouping       [19]  FamilyGrouping     DEFAULT entryOnly,
 *   ... }
 * ```
 *
 */
export class CommonArguments {
    constructor(
        /**
         * @summary `serviceControls`.
         * @public
         * @readonly
         */
        readonly serviceControls?: OPTIONAL<ServiceControls>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters?: OPTIONAL<SecurityParameters>,
        /**
         * @summary `requestor`.
         * @public
         * @readonly
         */
        readonly requestor?: OPTIONAL<DistinguishedName>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress?: OPTIONAL<OperationProgress>,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs?: OPTIONAL<INTEGER>,
        /**
         * @summary `criticalExtensions`.
         * @public
         * @readonly
         */
        readonly criticalExtensions?: OPTIONAL<BIT_STRING>,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType?: OPTIONAL<ReferenceType>,
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions?: OPTIONAL<Exclusions>,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `operationContexts`.
         * @public
         * @readonly
         */
        readonly operationContexts?: OPTIONAL<ContextSelection>,
        /**
         * @summary `familyGrouping`.
         * @public
         * @readonly
         */
        readonly familyGrouping?: OPTIONAL<FamilyGrouping>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonArguments
     * @description
     *
     * This takes an `object` and converts it to a `CommonArguments`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonArguments`.
     * @returns {CommonArguments}
     */
    public static _from_object(
        _o: { [_K in keyof CommonArguments]: CommonArguments[_K] }
    ): CommonArguments {
        return new CommonArguments(
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
            _o.familyGrouping,
            _o._unrecognizedExtensionsList
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
        return true;
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
 * @summary The Leading Root Component Types of CommonArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonArguments: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serviceControls",
        true,
        $.hasTag(_TagClass.context, 30)
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 29)
    ),
    new $.ComponentSpec(
        "requestor",
        true,
        $.hasTag(_TagClass.context, 28)
    ),
    new $.ComponentSpec(
        "operationProgress",
        true,
        $.hasTag(_TagClass.context, 27)
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 26)
    ),
    new $.ComponentSpec(
        "criticalExtensions",
        true,
        $.hasTag(_TagClass.context, 25)
    ),
    new $.ComponentSpec(
        "referenceType",
        true,
        $.hasTag(_TagClass.context, 24)
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 23)
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 22)
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 21)
    ),
    new $.ComponentSpec(
        "operationContexts",
        true,
        $.hasTag(_TagClass.context, 20)
    ),
    new $.ComponentSpec(
        "familyGrouping",
        true,
        $.hasTag(_TagClass.context, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of CommonArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonArguments: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CommonArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonArguments: $.ComponentSpec[] = [];

let _cached_decoder_for_CommonArguments: $.ASN1Decoder<CommonArguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonArguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonArguments} The decoded data structure.
 */
export function _decode_CommonArguments(el: _Element): CommonArguments {
    if (!_cached_decoder_for_CommonArguments) {
        _cached_decoder_for_CommonArguments = function (
            el: _Element
        ): CommonArguments {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let serviceControls: OPTIONAL<ServiceControls> =
                CommonArguments._default_value_for_serviceControls;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let requestor: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                CommonArguments._default_value_for_operationProgress;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let criticalExtensions: OPTIONAL<BIT_STRING>;
            let referenceType: OPTIONAL<ReferenceType>;
            let entryOnly: OPTIONAL<BOOLEAN> =
                CommonArguments._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                CommonArguments._default_value_for_nameResolveOnMaster;
            let operationContexts: OPTIONAL<ContextSelection>;
            let familyGrouping: OPTIONAL<FamilyGrouping> =
                CommonArguments._default_value_for_familyGrouping;
            let _unrecognizedExtensionsList: _Element[] = [];
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
                _root_component_type_list_1_spec_for_CommonArguments,
                _extension_additions_list_spec_for_CommonArguments,
                _root_component_type_list_2_spec_for_CommonArguments,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonArguments(
                /* SET_CONSTRUCTOR_CALL */ serviceControls,
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
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonArguments(el);
}

let _cached_encoder_for_CommonArguments: $.ASN1Encoder<CommonArguments> | null = null;

/**
 * @summary Encodes a(n) CommonArguments into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonArguments, encoded as an ASN.1 Element.
 */
export function _encode_CommonArguments(
    value: CommonArguments,
    elGetter: $.ASN1Encoder<CommonArguments>
): _Element {
    if (!_cached_encoder_for_CommonArguments) {
        _cached_encoder_for_CommonArguments = function (
            value: CommonArguments        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                CommonArguments._default_value_for_serviceControls
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
                                CommonArguments._default_value_for_operationProgress
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
                                CommonArguments._default_value_for_entryOnly
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
                                CommonArguments._default_value_for_nameResolveOnMaster
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
                                CommonArguments._default_value_for_familyGrouping
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      $.BER
                                  )(value.familyGrouping, $.BER),
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
    return _cached_encoder_for_CommonArguments(value, elGetter);
}


/* eslint-enable */
