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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TestOutcome,
    _decode_TestOutcome,
    _encode_TestOutcome,
} from '../Test-ASN1Module/TestOutcome.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module';
/**
 * @summary TestRequestUncontrolledResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestRequestUncontrolledResult ::= SEQUENCE {
 *   testOutcome            [0]  TestOutcome OPTIONAL,
 *   mORTs                  [1]  SET OF ObjectInstance OPTIONAL,
 *   proposedRepairActions  [2]  ProposedRepairActions OPTIONAL,
 *   additionalText         [3]  AdditionalText OPTIONAL,
 *   additionalInformation  [4]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 */
export class TestRequestUncontrolledResult {
    constructor(
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
        readonly mORTs: OPTIONAL<ObjectInstance[]>,
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
     * @summary Restructures an object into a TestRequestUncontrolledResult
     * @description
     *
     * This takes an `object` and converts it to a `TestRequestUncontrolledResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestRequestUncontrolledResult`.
     * @returns {TestRequestUncontrolledResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof TestRequestUncontrolledResult]: TestRequestUncontrolledResult[_K];
        }
    ): TestRequestUncontrolledResult {
        return new TestRequestUncontrolledResult(
            _o.testOutcome,
            _o.mORTs,
            _o.proposedRepairActions,
            _o.additionalText,
            _o.additionalInformation
        );
    }
}

/**
 * @summary The Leading Root Component Types of TestRequestUncontrolledResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestRequestUncontrolledResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'testOutcome',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'mORTs',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestRequestUncontrolledResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestRequestUncontrolledResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestRequestUncontrolledResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestRequestUncontrolledResult: $.ComponentSpec[] = [];

let _cached_decoder_for_TestRequestUncontrolledResult: $.ASN1Decoder<TestRequestUncontrolledResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestRequestUncontrolledResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestRequestUncontrolledResult} The decoded data structure.
 */
export function _decode_TestRequestUncontrolledResult(el: _Element): TestRequestUncontrolledResult {
    if (!_cached_decoder_for_TestRequestUncontrolledResult) {
        _cached_decoder_for_TestRequestUncontrolledResult = function (
            el: _Element
        ): TestRequestUncontrolledResult {
            let testOutcome: OPTIONAL<TestOutcome>;
            let mORTs: OPTIONAL<ObjectInstance[]>;
            let proposedRepairActions: OPTIONAL<ProposedRepairActions>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            const callbacks: $.DecodingMap = {
                testOutcome: (_el: _Element): void => {
                    testOutcome = $._decode_implicit<TestOutcome>(
                        () => _decode_TestOutcome
                    )(_el);
                },
                mORTs: (_el: _Element): void => {
                    mORTs = $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSetOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
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
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestRequestUncontrolledResult,
                _extension_additions_list_spec_for_TestRequestUncontrolledResult,
                _root_component_type_list_2_spec_for_TestRequestUncontrolledResult,
                undefined
            );
            return new TestRequestUncontrolledResult (
                testOutcome,
                mORTs,
                proposedRepairActions,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_TestRequestUncontrolledResult(el);
}

let _cached_encoder_for_TestRequestUncontrolledResult: $.ASN1Encoder<TestRequestUncontrolledResult> | null = null;

/**
 * @summary Encodes a(n) TestRequestUncontrolledResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestRequestUncontrolledResult, encoded as an ASN.1 Element.
 */
export function _encode_TestRequestUncontrolledResult(
    value: TestRequestUncontrolledResult,
    elGetter: $.ASN1Encoder<TestRequestUncontrolledResult>
): _Element {
    if (!_cached_encoder_for_TestRequestUncontrolledResult) {
        _cached_encoder_for_TestRequestUncontrolledResult = function (
            value: TestRequestUncontrolledResult        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.testOutcome === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_TestOutcome,
                                  $.BER
                              )(value.testOutcome, $.BER),
                        /* IF_ABSENT  */ value.mORTs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ObjectInstance>(
                                          () => _encode_ObjectInstance,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.mORTs, $.BER),
                        /* IF_ABSENT  */ value.proposedRepairActions ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ProposedRepairActions,
                                  $.BER
                              )(value.proposedRepairActions, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_AdditionalText,
                                  $.BER
                              )(value.additionalText, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestRequestUncontrolledResult(value, elGetter);
}


/* eslint-enable */
