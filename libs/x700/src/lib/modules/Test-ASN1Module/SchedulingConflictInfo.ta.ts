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
    StartTime,
    _decode_StartTime,
    _encode_StartTime,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/StartTime.ta';
export {
    StartTime,
    _decode_StartTime,
    _encode_StartTime,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/StartTime.ta';
import {
    EndTime,
    _decode_EndTime,
    _encode_EndTime,
} from '../Test-ASN1Module/EndTime.ta';
export {
    EndTime,
    _decode_EndTime,
    _encode_EndTime,
} from '../Test-ASN1Module/EndTime.ta';
import {
    ActualStartTime,
    _decode_ActualStartTime,
    _encode_ActualStartTime,
} from '../Test-ASN1Module/ActualStartTime.ta';
export {
    ActualStartTime,
    _decode_ActualStartTime,
    _encode_ActualStartTime,
} from '../Test-ASN1Module/ActualStartTime.ta';
import {
    ActualStopTime,
    _decode_ActualStopTime,
    _encode_ActualStopTime,
} from '../Test-ASN1Module/ActualStopTime.ta';
export {
    ActualStopTime,
    _decode_ActualStopTime,
    _encode_ActualStopTime,
} from '../Test-ASN1Module/ActualStopTime.ta';
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

/* START_OF_SYMBOL_DEFINITION SchedulingConflictInfo */
/**
 * @summary SchedulingConflictInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchedulingConflictInfo ::= SEQUENCE {
 *   testInvocationId       TestInvocationId,
 *   testSessionId          [1]  TestSessionId OPTIONAL,
 *   startTime              StartTime,
 *   endTime                EndTime,
 *   actualStartTime        ActualStartTime,
 *   actualStopTime         ActualStopTime,
 *   additionalText         [6]  AdditionalText OPTIONAL,
 *   additionalInformation  [7]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SchedulingConflictInfo {
    constructor(
        /**
         * @summary `testInvocationId`.
         * @public
         * @readonly
         */
        readonly testInvocationId: TestInvocationId,
        /**
         * @summary `testSessionId`.
         * @public
         * @readonly
         */
        readonly testSessionId: OPTIONAL<TestSessionId>,
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: StartTime,
        /**
         * @summary `endTime`.
         * @public
         * @readonly
         */
        readonly endTime: EndTime,
        /**
         * @summary `actualStartTime`.
         * @public
         * @readonly
         */
        readonly actualStartTime: ActualStartTime,
        /**
         * @summary `actualStopTime`.
         * @public
         * @readonly
         */
        readonly actualStopTime: ActualStopTime,
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
     * @summary Restructures an object into a SchedulingConflictInfo
     * @description
     *
     * This takes an `object` and converts it to a `SchedulingConflictInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchedulingConflictInfo`.
     * @returns {SchedulingConflictInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SchedulingConflictInfo]: SchedulingConflictInfo[_K] }
    ): SchedulingConflictInfo {
        return new SchedulingConflictInfo(
            _o.testInvocationId,
            _o.testSessionId,
            _o.startTime,
            _o.endTime,
            _o.actualStartTime,
            _o.actualStopTime,
            _o.additionalText,
            _o.additionalInformation
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchedulingConflictInfo */
/**
 * @summary The Leading Root Component Types of SchedulingConflictInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SchedulingConflictInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testInvocationId',
        false,
        $.hasAnyTag,
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
        'startTime',
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec('endTime', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'actualStartTime',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'actualStopTime',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchedulingConflictInfo */
/**
 * @summary The Trailing Root Component Types of SchedulingConflictInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SchedulingConflictInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchedulingConflictInfo */
/**
 * @summary The Extension Addition Component Types of SchedulingConflictInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SchedulingConflictInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingConflictInfo */
let _cached_decoder_for_SchedulingConflictInfo: $.ASN1Decoder<SchedulingConflictInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SchedulingConflictInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingConflictInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingConflictInfo} The decoded data structure.
 */
export function _decode_SchedulingConflictInfo(el: _Element) {
    if (!_cached_decoder_for_SchedulingConflictInfo) {
        _cached_decoder_for_SchedulingConflictInfo = function (
            el: _Element
        ): SchedulingConflictInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let testInvocationId!: TestInvocationId;
            let testSessionId: OPTIONAL<TestSessionId>;
            let startTime!: StartTime;
            let endTime!: EndTime;
            let actualStartTime!: ActualStartTime;
            let actualStopTime!: ActualStopTime;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                testInvocationId: (_el: _Element): void => {
                    testInvocationId = _decode_TestInvocationId(_el);
                },
                testSessionId: (_el: _Element): void => {
                    testSessionId = $._decode_implicit<TestSessionId>(
                        () => _decode_TestSessionId
                    )(_el);
                },
                startTime: (_el: _Element): void => {
                    startTime = _decode_StartTime(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = _decode_EndTime(_el);
                },
                actualStartTime: (_el: _Element): void => {
                    actualStartTime = _decode_ActualStartTime(_el);
                },
                actualStopTime: (_el: _Element): void => {
                    actualStopTime = _decode_ActualStopTime(_el);
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchedulingConflictInfo,
                _extension_additions_list_spec_for_SchedulingConflictInfo,
                _root_component_type_list_2_spec_for_SchedulingConflictInfo,
                undefined
            );
            return new SchedulingConflictInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                testInvocationId,
                testSessionId,
                startTime,
                endTime,
                actualStartTime,
                actualStopTime,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_SchedulingConflictInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingConflictInfo */
let _cached_encoder_for_SchedulingConflictInfo: $.ASN1Encoder<SchedulingConflictInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchedulingConflictInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SchedulingConflictInfo */
/**
 * @summary Encodes a(n) SchedulingConflictInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingConflictInfo, encoded as an ASN.1 Element.
 */
export function _encode_SchedulingConflictInfo(
    value: SchedulingConflictInfo,
    elGetter: $.ASN1Encoder<SchedulingConflictInfo>
) {
    if (!_cached_encoder_for_SchedulingConflictInfo) {
        _cached_encoder_for_SchedulingConflictInfo = function (
            value: SchedulingConflictInfo,
            elGetter: $.ASN1Encoder<SchedulingConflictInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TestInvocationId(
                            value.testInvocationId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.testSessionId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TestSessionId,
                                  $.BER
                              )(value.testSessionId, $.BER),
                        /* REQUIRED   */ _encode_StartTime(
                            value.startTime,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EndTime(value.endTime, $.BER),
                        /* REQUIRED   */ _encode_ActualStartTime(
                            value.actualStartTime,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ActualStopTime(
                            value.actualStopTime,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_AdditionalText,
                                  $.BER
                              )(value.additionalText, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SchedulingConflictInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchedulingConflictInfo */

/* eslint-enable */
