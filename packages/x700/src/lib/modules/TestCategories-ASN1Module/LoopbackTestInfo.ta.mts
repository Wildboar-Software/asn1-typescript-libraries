/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
    GeneralizedTime,
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
    TestPatternSequence,
    _decode_TestPatternSequence,
    _encode_TestPatternSequence,
} from '../TestCategories-ASN1Module/TestPatternSequence.ta.mjs';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
import {
    LoopbackError,
    _decode_LoopbackError,
    _encode_LoopbackError,
} from '../TestCategories-ASN1Module/LoopbackError.ta.mjs';
/**
 * @summary LoopbackTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackTestInfo ::= SEQUENCE {
 *   loopbackData            TestPatternSequence OPTIONAL,
 *   testStartTime           GeneralizedTime OPTIONAL,
 *   testIntervalTime        [1]  Timespec OPTIONAL,
 *   reportingIntervalTime   [2]  Timespec OPTIONAL,
 *   loopbackType            OBJECT IDENTIFIER OPTIONAL,
 *   loopbackTimeout         [3]  Timespec OPTIONAL,
 *   loopbackErrorThreshold  LoopbackError OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LoopbackTestInfo {
    constructor(
        /**
         * @summary `loopbackData`.
         * @public
         * @readonly
         */
        readonly loopbackData: OPTIONAL<TestPatternSequence>,
        /**
         * @summary `testStartTime`.
         * @public
         * @readonly
         */
        readonly testStartTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `testIntervalTime`.
         * @public
         * @readonly
         */
        readonly testIntervalTime: OPTIONAL<Timespec>,
        /**
         * @summary `reportingIntervalTime`.
         * @public
         * @readonly
         */
        readonly reportingIntervalTime: OPTIONAL<Timespec>,
        /**
         * @summary `loopbackType`.
         * @public
         * @readonly
         */
        readonly loopbackType: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `loopbackTimeout`.
         * @public
         * @readonly
         */
        readonly loopbackTimeout: OPTIONAL<Timespec>,
        /**
         * @summary `loopbackErrorThreshold`.
         * @public
         * @readonly
         */
        readonly loopbackErrorThreshold: OPTIONAL<LoopbackError>
    ) {}

    /**
     * @summary Restructures an object into a LoopbackTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `LoopbackTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoopbackTestInfo`.
     * @returns {LoopbackTestInfo}
     */
    public static _from_object(
        _o: { [_K in keyof LoopbackTestInfo]: LoopbackTestInfo[_K] }
    ): LoopbackTestInfo {
        return new LoopbackTestInfo(
            _o.loopbackData,
            _o.testStartTime,
            _o.testIntervalTime,
            _o.reportingIntervalTime,
            _o.loopbackType,
            _o.loopbackTimeout,
            _o.loopbackErrorThreshold
        );
    }
}

/**
 * @summary The Leading Root Component Types of LoopbackTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LoopbackTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'loopbackData',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'testStartTime',
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        'testIntervalTime',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'reportingIntervalTime',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'loopbackType',
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'loopbackTimeout',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'loopbackErrorThreshold',
        true,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of LoopbackTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LoopbackTestInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of LoopbackTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LoopbackTestInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_LoopbackTestInfo: $.ASN1Decoder<LoopbackTestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackTestInfo} The decoded data structure.
 */
export function _decode_LoopbackTestInfo(el: _Element) {
    if (!_cached_decoder_for_LoopbackTestInfo) {
        _cached_decoder_for_LoopbackTestInfo = function (
            el: _Element
        ): LoopbackTestInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let loopbackData: OPTIONAL<TestPatternSequence>;
            let testStartTime: OPTIONAL<GeneralizedTime>;
            let testIntervalTime: OPTIONAL<Timespec>;
            let reportingIntervalTime: OPTIONAL<Timespec>;
            let loopbackType: OPTIONAL<OBJECT_IDENTIFIER>;
            let loopbackTimeout: OPTIONAL<Timespec>;
            let loopbackErrorThreshold: OPTIONAL<LoopbackError>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                loopbackData: (_el: _Element): void => {
                    loopbackData = _decode_TestPatternSequence(_el);
                },
                testStartTime: (_el: _Element): void => {
                    testStartTime = $._decodeGeneralizedTime(_el);
                },
                testIntervalTime: (_el: _Element): void => {
                    testIntervalTime = $._decode_explicit<Timespec>(
                        () => _decode_Timespec
                    )(_el);
                },
                reportingIntervalTime: (_el: _Element): void => {
                    reportingIntervalTime = $._decode_explicit<Timespec>(
                        () => _decode_Timespec
                    )(_el);
                },
                loopbackType: (_el: _Element): void => {
                    loopbackType = $._decodeObjectIdentifier(_el);
                },
                loopbackTimeout: (_el: _Element): void => {
                    loopbackTimeout = $._decode_explicit<Timespec>(
                        () => _decode_Timespec
                    )(_el);
                },
                loopbackErrorThreshold: (_el: _Element): void => {
                    loopbackErrorThreshold = _decode_LoopbackError(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LoopbackTestInfo,
                _extension_additions_list_spec_for_LoopbackTestInfo,
                _root_component_type_list_2_spec_for_LoopbackTestInfo,
                undefined
            );
            return new LoopbackTestInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                loopbackData,
                testStartTime,
                testIntervalTime,
                reportingIntervalTime,
                loopbackType,
                loopbackTimeout,
                loopbackErrorThreshold
            );
        };
    }
    return _cached_decoder_for_LoopbackTestInfo(el);
}

let _cached_encoder_for_LoopbackTestInfo: $.ASN1Encoder<LoopbackTestInfo> | null = null;

/**
 * @summary Encodes a(n) LoopbackTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackTestInfo(
    value: LoopbackTestInfo,
    elGetter: $.ASN1Encoder<LoopbackTestInfo>
) {
    if (!_cached_encoder_for_LoopbackTestInfo) {
        _cached_encoder_for_LoopbackTestInfo = function (
            value: LoopbackTestInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.loopbackData === undefined
                            ? undefined
                            : _encode_TestPatternSequence(
                                  value.loopbackData,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.testStartTime === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(
                                  value.testStartTime,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.testIntervalTime === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Timespec,
                                  $.BER
                              )(value.testIntervalTime, $.BER),
                        /* IF_ABSENT  */ value.reportingIntervalTime ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Timespec,
                                  $.BER
                              )(value.reportingIntervalTime, $.BER),
                        /* IF_ABSENT  */ value.loopbackType === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(
                                  value.loopbackType,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.loopbackTimeout === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Timespec,
                                  $.BER
                              )(value.loopbackTimeout, $.BER),
                        /* IF_ABSENT  */ value.loopbackErrorThreshold ===
                        undefined
                            ? undefined
                            : _encode_LoopbackError(
                                  value.loopbackErrorThreshold,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LoopbackTestInfo(value, elGetter);
}


/* eslint-enable */
