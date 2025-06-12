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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
export {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    PerceivedSeverity_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_critical /* IMPORTED_LONG_ENUMERATION_ITEM */,
    critical /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_major /* IMPORTED_LONG_ENUMERATION_ITEM */,
    major /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_minor /* IMPORTED_LONG_ENUMERATION_ITEM */,
    minor /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_warning /* IMPORTED_LONG_ENUMERATION_ITEM */,
    warning /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_cleared /* IMPORTED_LONG_ENUMERATION_ITEM */,
    cleared /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/PerceivedSeverity.ta.mjs';
export {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    PerceivedSeverity_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_critical /* IMPORTED_LONG_ENUMERATION_ITEM */,
    critical /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_major /* IMPORTED_LONG_ENUMERATION_ITEM */,
    major /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_minor /* IMPORTED_LONG_ENUMERATION_ITEM */,
    minor /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_warning /* IMPORTED_LONG_ENUMERATION_ITEM */,
    warning /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    PerceivedSeverity_cleared /* IMPORTED_LONG_ENUMERATION_ITEM */,
    cleared /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/PerceivedSeverity.ta.mjs';
import {
    TrendIndication,
    _enum_for_TrendIndication,
    TrendIndication_lessSevere /* IMPORTED_LONG_ENUMERATION_ITEM */,
    lessSevere /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TrendIndication_noChange /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noChange /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TrendIndication_moreSevere /* IMPORTED_LONG_ENUMERATION_ITEM */,
    moreSevere /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TrendIndication,
    _encode_TrendIndication,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/TrendIndication.ta.mjs';
export {
    TrendIndication,
    _enum_for_TrendIndication,
    TrendIndication_lessSevere /* IMPORTED_LONG_ENUMERATION_ITEM */,
    lessSevere /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TrendIndication_noChange /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noChange /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TrendIndication_moreSevere /* IMPORTED_LONG_ENUMERATION_ITEM */,
    moreSevere /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TrendIndication,
    _encode_TrendIndication,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/TrendIndication.ta.mjs';
import {
    BackedUpStatus,
    _decode_BackedUpStatus,
    _encode_BackedUpStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/BackedUpStatus.ta.mjs';
export {
    BackedUpStatus,
    _decode_BackedUpStatus,
    _encode_BackedUpStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/BackedUpStatus.ta.mjs';
import {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProposedRepairActions.ta.mjs';
export {
    ProposedRepairActions,
    _decode_ProposedRepairActions,
    _encode_ProposedRepairActions,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProposedRepairActions.ta.mjs';
import {
    ThresholdInfo,
    _decode_ThresholdInfo,
    _encode_ThresholdInfo,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ThresholdInfo.ta.mjs';
export {
    ThresholdInfo,
    _decode_ThresholdInfo,
    _encode_ThresholdInfo,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ThresholdInfo.ta.mjs';
import {
    OtherInfo,
    _decode_OtherInfo,
    _encode_OtherInfo,
} from '../NotificationModule/OtherInfo.ta.mjs';
export {
    OtherInfo,
    _decode_OtherInfo,
    _encode_OtherInfo,
} from '../NotificationModule/OtherInfo.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ErrorInfo */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorInfo */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'perceivedSeverity',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'trendIndication',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'backedUpStatus',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'proposedRepairActions',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'thresholdInfo',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'otherInfo',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorInfo */
/**
 * @summary The Trailing Root Component Types of ErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorInfo */
/**
 * @summary The Extension Addition Component Types of ErrorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorInfo */
let _cached_decoder_for_ErrorInfo: $.ASN1Decoder<ErrorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorInfo} The decoded data structure.
 */
export function _decode_ErrorInfo(el: _Element) {
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
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
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
/* END_OF_SYMBOL_DEFINITION _decode_ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorInfo */
let _cached_encoder_for_ErrorInfo: $.ASN1Encoder<ErrorInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorInfo */
/**
 * @summary Encodes a(n) ErrorInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorInfo, encoded as an ASN.1 Element.
 */
export function _encode_ErrorInfo(
    value: ErrorInfo,
    elGetter: $.ASN1Encoder<ErrorInfo>
) {
    if (!_cached_encoder_for_ErrorInfo) {
        _cached_encoder_for_ErrorInfo = function (
            value: ErrorInfo,
            elGetter: $.ASN1Encoder<ErrorInfo>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_ErrorInfo */

/* eslint-enable */
