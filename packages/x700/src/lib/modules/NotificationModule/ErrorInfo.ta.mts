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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module';
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module';
import {
    TrendIndication,
    _enum_for_TrendIndication,
    _decode_TrendIndication,
    _encode_TrendIndication,
} from '@wildboar/attribute-asn1module';
import {
    BackedUpStatus,
    _decode_BackedUpStatus,
    _encode_BackedUpStatus,
} from '@wildboar/attribute-asn1module';
import {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module';
import {
    ThresholdInfo,
    _decode_ThresholdInfo,
    _encode_ThresholdInfo,
} from '@wildboar/attribute-asn1module';
import {
    OtherInfo,
    _decode_OtherInfo,
    _encode_OtherInfo,
} from '../NotificationModule/OtherInfo.ta.mjs';
/**
 * @summary ErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorInfo ::= SET {
 *   probableCause          [0]  ProbableCause OPTIONAL,
 *   perceivedSeverity      [1]  PerceivedSeverity OPTIONAL,
 *   trendIndication        [2]  TrendIndication OPTIONAL,
 *   backedUpStatus         [3]  BackedUpStatus OPTIONAL,
 *   proposedRepairActions  [4]  ProposedRepairActions OPTIONAL,
 *   thresholdInfo          [5]  ThresholdInfo OPTIONAL,
 *   otherInfo              [6]  OtherInfo OPTIONAL
 * }
 * ```
 *
 */
export class ErrorInfo {
    constructor(
        /**
         * @summary `probableCause`.
         * @public
         * @readonly
         */
        readonly probableCause: OPTIONAL<ProbableCause>,
        /**
         * @summary `perceivedSeverity`.
         * @public
         * @readonly
         */
        readonly perceivedSeverity: OPTIONAL<PerceivedSeverity>,
        /**
         * @summary `trendIndication`.
         * @public
         * @readonly
         */
        readonly trendIndication: OPTIONAL<TrendIndication>,
        /**
         * @summary `backedUpStatus`.
         * @public
         * @readonly
         */
        readonly backedUpStatus: OPTIONAL<BackedUpStatus>,
        /**
         * @summary `proposedRepairActions`.
         * @public
         * @readonly
         */
        readonly proposedRepairActions: OPTIONAL<ProposedRepairActions>,
        /**
         * @summary `thresholdInfo`.
         * @public
         * @readonly
         */
        readonly thresholdInfo: OPTIONAL<ThresholdInfo>,
        /**
         * @summary `otherInfo`.
         * @public
         * @readonly
         */
        readonly otherInfo: OPTIONAL<OtherInfo>
    ) {}

    /**
     * @summary Restructures an object into a ErrorInfo
     * @description
     *
     * This takes an `object` and converts it to a `ErrorInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorInfo`.
     * @returns {ErrorInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ErrorInfo]: ErrorInfo[_K] }
    ): ErrorInfo {
        return new ErrorInfo(
            _o.probableCause,
            _o.perceivedSeverity,
            _o.trendIndication,
            _o.backedUpStatus,
            _o.proposedRepairActions,
            _o.thresholdInfo,
            _o.otherInfo
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

/**
 * @summary The Leading Root Component Types of ErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ErrorInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'probableCause',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'perceivedSeverity',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'trendIndication',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'backedUpStatus',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'thresholdInfo',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'otherInfo',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
];

/**
 * @summary The Trailing Root Component Types of ErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ErrorInfo: $.ASN1Decoder<ErrorInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorInfo} The decoded data structure.
 */
export function _decode_ErrorInfo(el: _Element): ErrorInfo {
    if (!_cached_decoder_for_ErrorInfo) {
        _cached_decoder_for_ErrorInfo = function (el: _Element): ErrorInfo {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let probableCause: OPTIONAL<ProbableCause>;
            let perceivedSeverity: OPTIONAL<PerceivedSeverity>;
            let trendIndication: OPTIONAL<TrendIndication>;
            let backedUpStatus: OPTIONAL<BackedUpStatus>;
            let proposedRepairActions: OPTIONAL<ProposedRepairActions>;
            let thresholdInfo: OPTIONAL<ThresholdInfo>;
            let otherInfo: OPTIONAL<OtherInfo>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                probableCause: (_el: _Element): void => {
                    probableCause = $._decode_explicit<ProbableCause>(
                        () => _decode_ProbableCause
                    )(_el);
                },
                perceivedSeverity: (_el: _Element): void => {
                    perceivedSeverity = $._decode_explicit<PerceivedSeverity>(
                        () => _decode_PerceivedSeverity
                    )(_el);
                },
                trendIndication: (_el: _Element): void => {
                    trendIndication = $._decode_explicit<TrendIndication>(
                        () => _decode_TrendIndication
                    )(_el);
                },
                backedUpStatus: (_el: _Element): void => {
                    backedUpStatus = $._decode_explicit<BackedUpStatus>(
                        () => _decode_BackedUpStatus
                    )(_el);
                },
                proposedRepairActions: (_el: _Element): void => {
                    proposedRepairActions = $._decode_explicit<ProposedRepairActions>(
                        () => _decode_ProposedRepairActions
                    )(_el);
                },
                thresholdInfo: (_el: _Element): void => {
                    thresholdInfo = $._decode_explicit<ThresholdInfo>(
                        () => _decode_ThresholdInfo
                    )(_el);
                },
                otherInfo: (_el: _Element): void => {
                    otherInfo = $._decode_explicit<OtherInfo>(
                        () => _decode_OtherInfo
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ErrorInfo,
                _extension_additions_list_spec_for_ErrorInfo,
                _root_component_type_list_2_spec_for_ErrorInfo,
                undefined
            );
            return new ErrorInfo /* SET_CONSTRUCTOR_CALL */(
                probableCause,
                perceivedSeverity,
                trendIndication,
                backedUpStatus,
                proposedRepairActions,
                thresholdInfo,
                otherInfo
            );
        };
    }
    return _cached_decoder_for_ErrorInfo(el);
}

let _cached_encoder_for_ErrorInfo: $.ASN1Encoder<ErrorInfo> | null = null;

/**
 * @summary Encodes a(n) ErrorInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorInfo, encoded as an ASN.1 Element.
 */
export function _encode_ErrorInfo(
    value: ErrorInfo,
    elGetter: $.ASN1Encoder<ErrorInfo>
): _Element {
    if (!_cached_encoder_for_ErrorInfo) {
        _cached_encoder_for_ErrorInfo = function (
            value: ErrorInfo        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.probableCause === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ProbableCause,
                                  $.BER
                              )(value.probableCause, $.BER),
                        /* IF_ABSENT  */ value.perceivedSeverity === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_PerceivedSeverity,
                                  $.BER
                              )(value.perceivedSeverity, $.BER),
                        /* IF_ABSENT  */ value.trendIndication === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TrendIndication,
                                  $.BER
                              )(value.trendIndication, $.BER),
                        /* IF_ABSENT  */ value.backedUpStatus === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_BackedUpStatus,
                                  $.BER
                              )(value.backedUpStatus, $.BER),
                        /* IF_ABSENT  */ value.proposedRepairActions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_ProposedRepairActions,
                                  $.BER
                              )(value.proposedRepairActions, $.BER),
                        /* IF_ABSENT  */ value.thresholdInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_ThresholdInfo,
                                  $.BER
                              )(value.thresholdInfo, $.BER),
                        /* IF_ABSENT  */ value.otherInfo === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_OtherInfo,
                                  $.BER
                              )(value.otherInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ErrorInfo(value, elGetter);
}


/* eslint-enable */
