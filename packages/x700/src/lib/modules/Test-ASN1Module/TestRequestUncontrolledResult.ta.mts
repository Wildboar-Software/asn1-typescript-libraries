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
    TestOutcome,
    _decode_TestOutcome,
    _encode_TestOutcome,
} from '../Test-ASN1Module/TestOutcome.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
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
/* START_OF_SYMBOL_DEFINITION TestRequestUncontrolledResult */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestRequestUncontrolledResult */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mORTs',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestRequestUncontrolledResult */
/**
 * @summary The Trailing Root Component Types of TestRequestUncontrolledResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestRequestUncontrolledResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestRequestUncontrolledResult */
/**
 * @summary The Extension Addition Component Types of TestRequestUncontrolledResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestRequestUncontrolledResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestRequestUncontrolledResult */
let _cached_decoder_for_TestRequestUncontrolledResult: $.ASN1Decoder<TestRequestUncontrolledResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _decode_TestRequestUncontrolledResult */
/**
 * @summary Decodes an ASN.1 element into a(n) TestRequestUncontrolledResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestRequestUncontrolledResult} The decoded data structure.
 */
export function _decode_TestRequestUncontrolledResult(el: _Element) {
    if (!_cached_decoder_for_TestRequestUncontrolledResult) {
        _cached_decoder_for_TestRequestUncontrolledResult = function (
            el: _Element
        ): TestRequestUncontrolledResult {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let testOutcome: OPTIONAL<TestOutcome>;
            let mORTs: OPTIONAL<ObjectInstance[]>;
            let proposedRepairActions: OPTIONAL<ProposedRepairActions>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestRequestUncontrolledResult,
                _extension_additions_list_spec_for_TestRequestUncontrolledResult,
                _root_component_type_list_2_spec_for_TestRequestUncontrolledResult,
                undefined
            );
            return new TestRequestUncontrolledResult /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestRequestUncontrolledResult */
let _cached_encoder_for_TestRequestUncontrolledResult: $.ASN1Encoder<TestRequestUncontrolledResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestRequestUncontrolledResult */

/* START_OF_SYMBOL_DEFINITION _encode_TestRequestUncontrolledResult */
/**
 * @summary Encodes a(n) TestRequestUncontrolledResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestRequestUncontrolledResult, encoded as an ASN.1 Element.
 */
export function _encode_TestRequestUncontrolledResult(
    value: TestRequestUncontrolledResult,
    elGetter: $.ASN1Encoder<TestRequestUncontrolledResult>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_TestRequestUncontrolledResult */

/* eslint-enable */
