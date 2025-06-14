/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
import {
    SpecificProblems,
    _decode_SpecificProblems,
    _encode_SpecificProblems,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SpecificProblems.ta.mjs';
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/PerceivedSeverity.ta.mjs';
import {
    BackedUpStatus,
    _decode_BackedUpStatus,
    _encode_BackedUpStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/BackedUpStatus.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    TrendIndication,
    _enum_for_TrendIndication,
    _decode_TrendIndication,
    _encode_TrendIndication,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/TrendIndication.ta.mjs';
import {
    ThresholdInfo,
    _decode_ThresholdInfo,
    _encode_ThresholdInfo,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ThresholdInfo.ta.mjs';
import {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta.mjs';
import {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta.mjs';
import {
    AttributeValueChangeDefinition,
    _decode_AttributeValueChangeDefinition,
    _encode_AttributeValueChangeDefinition,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeValueChangeDefinition.ta.mjs';
import {
    MonitoredAttributes,
    _decode_MonitoredAttributes,
    _encode_MonitoredAttributes,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/MonitoredAttributes.ta.mjs';
import {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProposedRepairActions.ta.mjs';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta.mjs';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlarmInfo */
/**
 * @summary AlarmInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmInfo ::= SEQUENCE {
 *   probableCause            ProbableCause,
 *   specificProblems         [1]  SpecificProblems OPTIONAL,
 *   perceivedSeverity        PerceivedSeverity,
 *   backedUpStatus           BackedUpStatus OPTIONAL,
 *   backUpObject             [2]  ObjectInstance OPTIONAL,
 *   trendIndication          [3]  TrendIndication OPTIONAL,
 *   thresholdInfo            [4]  ThresholdInfo OPTIONAL,
 *   notificationIdentifier   [5]  NotificationIdentifier OPTIONAL,
 *   correlatedNotifications  [6]  CorrelatedNotifications OPTIONAL,
 *   stateChangeDefinition    [7]  AttributeValueChangeDefinition OPTIONAL,
 *   monitoredAttributes      [8]  MonitoredAttributes OPTIONAL,
 *   proposedRepairActions    [9]  ProposedRepairActions OPTIONAL,
 *   additionalText           AdditionalText OPTIONAL,
 *   additionalInformation    [10]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlarmInfo {
    constructor(
        /**
         * @summary `probableCause`.
         * @public
         * @readonly
         */
        readonly probableCause: ProbableCause,
        /**
         * @summary `specificProblems`.
         * @public
         * @readonly
         */
        readonly specificProblems: OPTIONAL<SpecificProblems>,
        /**
         * @summary `perceivedSeverity`.
         * @public
         * @readonly
         */
        readonly perceivedSeverity: PerceivedSeverity,
        /**
         * @summary `backedUpStatus`.
         * @public
         * @readonly
         */
        readonly backedUpStatus: OPTIONAL<BackedUpStatus>,
        /**
         * @summary `backUpObject`.
         * @public
         * @readonly
         */
        readonly backUpObject: OPTIONAL<ObjectInstance>,
        /**
         * @summary `trendIndication`.
         * @public
         * @readonly
         */
        readonly trendIndication: OPTIONAL<TrendIndication>,
        /**
         * @summary `thresholdInfo`.
         * @public
         * @readonly
         */
        readonly thresholdInfo: OPTIONAL<ThresholdInfo>,
        /**
         * @summary `notificationIdentifier`.
         * @public
         * @readonly
         */
        readonly notificationIdentifier: OPTIONAL<NotificationIdentifier>,
        /**
         * @summary `correlatedNotifications`.
         * @public
         * @readonly
         */
        readonly correlatedNotifications: OPTIONAL<CorrelatedNotifications>,
        /**
         * @summary `stateChangeDefinition`.
         * @public
         * @readonly
         */
        readonly stateChangeDefinition: OPTIONAL<AttributeValueChangeDefinition>,
        /**
         * @summary `monitoredAttributes`.
         * @public
         * @readonly
         */
        readonly monitoredAttributes: OPTIONAL<MonitoredAttributes>,
        /**
         * @summary `proposedRepairActions`.
         * @public
         * @readonly
         */
        readonly proposedRepairActions: OPTIONAL<ProposedRepairActions>,
        /**
         * @summary `additionalText`.
         * @public
         * @readonly
         */
        readonly additionalText: OPTIONAL<AdditionalText>,
        /**
         * @summary `additionalInformation`.
         * @public
         * @readonly
         */
        readonly additionalInformation: OPTIONAL<AdditionalInformation>
    ) {}

    /**
     * @summary Restructures an object into a AlarmInfo
     * @description
     *
     * This takes an `object` and converts it to a `AlarmInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlarmInfo`.
     * @returns {AlarmInfo}
     */
    public static _from_object(
        _o: { [_K in keyof AlarmInfo]: AlarmInfo[_K] }
    ): AlarmInfo {
        return new AlarmInfo(
            _o.probableCause,
            _o.specificProblems,
            _o.perceivedSeverity,
            _o.backedUpStatus,
            _o.backUpObject,
            _o.trendIndication,
            _o.thresholdInfo,
            _o.notificationIdentifier,
            _o.correlatedNotifications,
            _o.stateChangeDefinition,
            _o.monitoredAttributes,
            _o.proposedRepairActions,
            _o.additionalText,
            _o.additionalInformation
        );
    }

    /**
     * @summary The enum used as the type of the component `perceivedSeverity`
     * @public
     * @static
     */

    public static _enum_for_perceivedSeverity = _enum_for_PerceivedSeverity;
    /**
     * @summary The enum used as the type of the component `trendIndication`
     * @public
     * @static
     */

    public static _enum_for_trendIndication = _enum_for_TrendIndication;
}
/* END_OF_SYMBOL_DEFINITION AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlarmInfo */
/**
 * @summary The Leading Root Component Types of AlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlarmInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'probableCause',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'specificProblems',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'perceivedSeverity',
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'backedUpStatus',
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'backUpObject',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'trendIndication',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'thresholdInfo',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'stateChangeDefinition',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'monitoredAttributes',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlarmInfo */
/**
 * @summary The Trailing Root Component Types of AlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlarmInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlarmInfo */
/**
 * @summary The Extension Addition Component Types of AlarmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlarmInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmInfo */
let _cached_decoder_for_AlarmInfo: $.ASN1Decoder<AlarmInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmInfo} The decoded data structure.
 */
export function _decode_AlarmInfo(el: _Element) {
    if (!_cached_decoder_for_AlarmInfo) {
        _cached_decoder_for_AlarmInfo = function (el: _Element): AlarmInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let probableCause!: ProbableCause;
            let specificProblems: OPTIONAL<SpecificProblems>;
            let perceivedSeverity!: PerceivedSeverity;
            let backedUpStatus: OPTIONAL<BackedUpStatus>;
            let backUpObject: OPTIONAL<ObjectInstance>;
            let trendIndication: OPTIONAL<TrendIndication>;
            let thresholdInfo: OPTIONAL<ThresholdInfo>;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let stateChangeDefinition: OPTIONAL<AttributeValueChangeDefinition>;
            let monitoredAttributes: OPTIONAL<MonitoredAttributes>;
            let proposedRepairActions: OPTIONAL<ProposedRepairActions>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                probableCause: (_el: _Element): void => {
                    probableCause = _decode_ProbableCause(_el);
                },
                specificProblems: (_el: _Element): void => {
                    specificProblems = $._decode_implicit<SpecificProblems>(
                        () => _decode_SpecificProblems
                    )(_el);
                },
                perceivedSeverity: (_el: _Element): void => {
                    perceivedSeverity = _decode_PerceivedSeverity(_el);
                },
                backedUpStatus: (_el: _Element): void => {
                    backedUpStatus = _decode_BackedUpStatus(_el);
                },
                backUpObject: (_el: _Element): void => {
                    backUpObject = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                trendIndication: (_el: _Element): void => {
                    trendIndication = $._decode_implicit<TrendIndication>(
                        () => _decode_TrendIndication
                    )(_el);
                },
                thresholdInfo: (_el: _Element): void => {
                    thresholdInfo = $._decode_implicit<ThresholdInfo>(
                        () => _decode_ThresholdInfo
                    )(_el);
                },
                notificationIdentifier: (_el: _Element): void => {
                    notificationIdentifier = $._decode_implicit<NotificationIdentifier>(
                        () => _decode_NotificationIdentifier
                    )(_el);
                },
                correlatedNotifications: (_el: _Element): void => {
                    correlatedNotifications = $._decode_implicit<CorrelatedNotifications>(
                        () => _decode_CorrelatedNotifications
                    )(_el);
                },
                stateChangeDefinition: (_el: _Element): void => {
                    stateChangeDefinition = $._decode_implicit<AttributeValueChangeDefinition>(
                        () => _decode_AttributeValueChangeDefinition
                    )(_el);
                },
                monitoredAttributes: (_el: _Element): void => {
                    monitoredAttributes = $._decode_implicit<MonitoredAttributes>(
                        () => _decode_MonitoredAttributes
                    )(_el);
                },
                proposedRepairActions: (_el: _Element): void => {
                    proposedRepairActions = $._decode_implicit<ProposedRepairActions>(
                        () => _decode_ProposedRepairActions
                    )(_el);
                },
                additionalText: (_el: _Element): void => {
                    additionalText = _decode_AdditionalText(_el);
                },
                additionalInformation: (_el: _Element): void => {
                    additionalInformation = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlarmInfo,
                _extension_additions_list_spec_for_AlarmInfo,
                _root_component_type_list_2_spec_for_AlarmInfo,
                undefined
            );
            return new AlarmInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                probableCause,
                specificProblems,
                perceivedSeverity,
                backedUpStatus,
                backUpObject,
                trendIndication,
                thresholdInfo,
                notificationIdentifier,
                correlatedNotifications,
                stateChangeDefinition,
                monitoredAttributes,
                proposedRepairActions,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_AlarmInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmInfo */
let _cached_encoder_for_AlarmInfo: $.ASN1Encoder<AlarmInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmInfo */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmInfo */
/**
 * @summary Encodes a(n) AlarmInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmInfo, encoded as an ASN.1 Element.
 */
export function _encode_AlarmInfo(
    value: AlarmInfo,
    elGetter: $.ASN1Encoder<AlarmInfo>
) {
    if (!_cached_encoder_for_AlarmInfo) {
        _cached_encoder_for_AlarmInfo = function (
            value: AlarmInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbableCause(
                            value.probableCause,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.specificProblems === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SpecificProblems,
                                  $.BER
                              )(value.specificProblems, $.BER),
                        /* REQUIRED   */ _encode_PerceivedSeverity(
                            value.perceivedSeverity,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.backedUpStatus === undefined
                            ? undefined
                            : _encode_BackedUpStatus(
                                  value.backedUpStatus,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.backUpObject === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ObjectInstance,
                                  $.BER
                              )(value.backUpObject, $.BER),
                        /* IF_ABSENT  */ value.trendIndication === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_TrendIndication,
                                  $.BER
                              )(value.trendIndication, $.BER),
                        /* IF_ABSENT  */ value.thresholdInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ThresholdInfo,
                                  $.BER
                              )(value.thresholdInfo, $.BER),
                        /* IF_ABSENT  */ value.notificationIdentifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_NotificationIdentifier,
                                  $.BER
                              )(value.notificationIdentifier, $.BER),
                        /* IF_ABSENT  */ value.correlatedNotifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                        /* IF_ABSENT  */ value.stateChangeDefinition ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_AttributeValueChangeDefinition,
                                  $.BER
                              )(value.stateChangeDefinition, $.BER),
                        /* IF_ABSENT  */ value.monitoredAttributes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_MonitoredAttributes,
                                  $.BER
                              )(value.monitoredAttributes, $.BER),
                        /* IF_ABSENT  */ value.proposedRepairActions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_ProposedRepairActions,
                                  $.BER
                              )(value.proposedRepairActions, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : _encode_AdditionalText(
                                  value.additionalText,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlarmInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmInfo */

/* eslint-enable */
