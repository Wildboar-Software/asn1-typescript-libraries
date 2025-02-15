/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta';
export {
    TestInvocationId,
    _decode_TestInvocationId,
    _encode_TestInvocationId,
} from '../Test-ASN1Module/TestInvocationId.ta';
import {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta';
export {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta';
import {
    TestOutcome,
    TestOutcome_inconclusive /* IMPORTED_LONG_NAMED_INTEGER */,
    inconclusive /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_pass /* IMPORTED_LONG_NAMED_INTEGER */,
    pass /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_fail /* IMPORTED_LONG_NAMED_INTEGER */,
    fail /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_timed_out /* IMPORTED_LONG_NAMED_INTEGER */,
    timed_out /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_premature_termination /* IMPORTED_LONG_NAMED_INTEGER */,
    premature_termination /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestOutcome,
    _encode_TestOutcome,
} from '../Test-ASN1Module/TestOutcome.ta';
export {
    TestOutcome,
    TestOutcome_inconclusive /* IMPORTED_LONG_NAMED_INTEGER */,
    inconclusive /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_pass /* IMPORTED_LONG_NAMED_INTEGER */,
    pass /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_fail /* IMPORTED_LONG_NAMED_INTEGER */,
    fail /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_timed_out /* IMPORTED_LONG_NAMED_INTEGER */,
    timed_out /* IMPORTED_SHORT_NAMED_INTEGER */,
    TestOutcome_premature_termination /* IMPORTED_LONG_NAMED_INTEGER */,
    premature_termination /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TestOutcome,
    _encode_TestOutcome,
} from '../Test-ASN1Module/TestOutcome.ta';
import {
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta';
export {
    MORTs,
    _decode_MORTs,
    _encode_MORTs,
} from '../Test-ASN1Module/MORTs.ta';
import {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta';
export {
    AssociatedObjects,
    _decode_AssociatedObjects,
    _encode_AssociatedObjects,
} from '../Test-ASN1Module/AssociatedObjects.ta';
import {
    MonitoredAttributes,
    _decode_MonitoredAttributes,
    _encode_MonitoredAttributes,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/MonitoredAttributes.ta';
export {
    MonitoredAttributes,
    _decode_MonitoredAttributes,
    _encode_MonitoredAttributes,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/MonitoredAttributes.ta';
import {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProposedRepairActions.ta';
export {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProposedRepairActions.ta';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta';
export {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';
export {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';
import {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta';
export {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta';
import {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta';
export {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta';

/* START_OF_SYMBOL_DEFINITION TestResultInfo */
/**
 * @summary TestResultInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestResultInfo ::= SEQUENCE {
 *   testInvocationId         [0]  TestInvocationId OPTIONAL,
 *   testSessionId            [1]  TestSessionId OPTIONAL,
 *   testOutcome              [2]  TestOutcome OPTIONAL,
 *   mORTs                    [3]  MORTs OPTIONAL,
 *   associatedObjects        [4]  AssociatedObjects OPTIONAL,
 *   monitoredAttributes      [5]  MonitoredAttributes OPTIONAL,
 *   proposedRepairActions    [6]  ProposedRepairActions OPTIONAL,
 *   additionalText           [7]  AdditionalText OPTIONAL,
 *   additionalInformation    [8]  AdditionalInformation OPTIONAL,
 *   notificationIdentifier   [9]  NotificationIdentifier OPTIONAL,
 *   correlatedNotifications  [10]  CorrelatedNotifications OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class TestResultInfo {
    constructor(
        /**
         * @summary `testInvocationId`.
         * @public
         * @readonly
         */
        readonly testInvocationId: OPTIONAL<TestInvocationId>,
        /**
         * @summary `testSessionId`.
         * @public
         * @readonly
         */
        readonly testSessionId: OPTIONAL<TestSessionId>,
        /**
         * @summary `testOutcome`.
         * @public
         * @readonly
         */
        readonly testOutcome: OPTIONAL<TestOutcome>,
        /**
         * @summary `mORTs`.
         * @public
         * @readonly
         */
        readonly mORTs: OPTIONAL<MORTs>,
        /**
         * @summary `associatedObjects`.
         * @public
         * @readonly
         */
        readonly associatedObjects: OPTIONAL<AssociatedObjects>,
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
        readonly additionalInformation: OPTIONAL<AdditionalInformation>,
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
        readonly correlatedNotifications: OPTIONAL<CorrelatedNotifications>
    ) {}

    /**
     * @summary Restructures an object into a TestResultInfo
     * @description
     *
     * This takes an `object` and converts it to a `TestResultInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestResultInfo`.
     * @returns {TestResultInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TestResultInfo]: TestResultInfo[_K] }
    ): TestResultInfo {
        return new TestResultInfo(
            _o.testInvocationId,
            _o.testSessionId,
            _o.testOutcome,
            _o.mORTs,
            _o.associatedObjects,
            _o.monitoredAttributes,
            _o.proposedRepairActions,
            _o.additionalText,
            _o.additionalInformation,
            _o.notificationIdentifier,
            _o.correlatedNotifications
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestResultInfo */
/**
 * @summary The Leading Root Component Types of TestResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestResultInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testInvocationId',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'testSessionId',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'testOutcome',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mORTs',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'associatedObjects',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'monitoredAttributes',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestResultInfo */
/**
 * @summary The Trailing Root Component Types of TestResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestResultInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestResultInfo */
/**
 * @summary The Extension Addition Component Types of TestResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestResultInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestResultInfo */
let _cached_decoder_for_TestResultInfo: $.ASN1Decoder<TestResultInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TestResultInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TestResultInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestResultInfo} The decoded data structure.
 */
export function _decode_TestResultInfo(el: _Element) {
    if (!_cached_decoder_for_TestResultInfo) {
        _cached_decoder_for_TestResultInfo = function (
            el: _Element
        ): TestResultInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let testInvocationId: OPTIONAL<TestInvocationId>;
            let testSessionId: OPTIONAL<TestSessionId>;
            let testOutcome: OPTIONAL<TestOutcome>;
            let mORTs: OPTIONAL<MORTs>;
            let associatedObjects: OPTIONAL<AssociatedObjects>;
            let monitoredAttributes: OPTIONAL<MonitoredAttributes>;
            let proposedRepairActions: OPTIONAL<ProposedRepairActions>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                testInvocationId: (_el: _Element): void => {
                    testInvocationId = $._decode_explicit<TestInvocationId>(
                        () => _decode_TestInvocationId
                    )(_el);
                },
                testSessionId: (_el: _Element): void => {
                    testSessionId = $._decode_implicit<TestSessionId>(
                        () => _decode_TestSessionId
                    )(_el);
                },
                testOutcome: (_el: _Element): void => {
                    testOutcome = $._decode_implicit<TestOutcome>(
                        () => _decode_TestOutcome
                    )(_el);
                },
                mORTs: (_el: _Element): void => {
                    mORTs = $._decode_implicit<MORTs>(() => _decode_MORTs)(_el);
                },
                associatedObjects: (_el: _Element): void => {
                    associatedObjects = $._decode_implicit<AssociatedObjects>(
                        () => _decode_AssociatedObjects
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
                    additionalText = $._decode_implicit<AdditionalText>(
                        () => _decode_AdditionalText
                    )(_el);
                },
                additionalInformation: (_el: _Element): void => {
                    additionalInformation = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestResultInfo,
                _extension_additions_list_spec_for_TestResultInfo,
                _root_component_type_list_2_spec_for_TestResultInfo,
                undefined
            );
            return new TestResultInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                testInvocationId,
                testSessionId,
                testOutcome,
                mORTs,
                associatedObjects,
                monitoredAttributes,
                proposedRepairActions,
                additionalText,
                additionalInformation,
                notificationIdentifier,
                correlatedNotifications
            );
        };
    }
    return _cached_decoder_for_TestResultInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestResultInfo */
let _cached_encoder_for_TestResultInfo: $.ASN1Encoder<TestResultInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestResultInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TestResultInfo */
/**
 * @summary Encodes a(n) TestResultInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestResultInfo, encoded as an ASN.1 Element.
 */
export function _encode_TestResultInfo(
    value: TestResultInfo,
    elGetter: $.ASN1Encoder<TestResultInfo>
) {
    if (!_cached_encoder_for_TestResultInfo) {
        _cached_encoder_for_TestResultInfo = function (
            value: TestResultInfo,
            elGetter: $.ASN1Encoder<TestResultInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.testInvocationId === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TestInvocationId,
                                  $.BER
                              )(value.testInvocationId, $.BER),
                        /* IF_ABSENT  */ value.testSessionId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TestSessionId,
                                  $.BER
                              )(value.testSessionId, $.BER),
                        /* IF_ABSENT  */ value.testOutcome === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TestOutcome,
                                  $.BER
                              )(value.testOutcome, $.BER),
                        /* IF_ABSENT  */ value.mORTs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_MORTs,
                                  $.BER
                              )(value.mORTs, $.BER),
                        /* IF_ABSENT  */ value.associatedObjects === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_AssociatedObjects,
                                  $.BER
                              )(value.associatedObjects, $.BER),
                        /* IF_ABSENT  */ value.monitoredAttributes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_MonitoredAttributes,
                                  $.BER
                              )(value.monitoredAttributes, $.BER),
                        /* IF_ABSENT  */ value.proposedRepairActions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_ProposedRepairActions,
                                  $.BER
                              )(value.proposedRepairActions, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_AdditionalText,
                                  $.BER
                              )(value.additionalText, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                        /* IF_ABSENT  */ value.notificationIdentifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_NotificationIdentifier,
                                  $.BER
                              )(value.notificationIdentifier, $.BER),
                        /* IF_ABSENT  */ value.correlatedNotifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestResultInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestResultInfo */

/* eslint-enable */
