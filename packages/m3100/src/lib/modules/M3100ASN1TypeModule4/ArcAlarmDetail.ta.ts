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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta';
export {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta';
import {
    AlarmStatus,
    _decode_AlarmStatus,
    _encode_AlarmStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AlarmStatus.ta';
export {
    AlarmStatus,
    _decode_AlarmStatus,
    _encode_AlarmStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AlarmStatus.ta';
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
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/PerceivedSeverity.ta';
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
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/PerceivedSeverity.ta';
import {
    EventTime,
    _decode_EventTime,
    _encode_EventTime,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/EventTime.ta';

/* START_OF_SYMBOL_DEFINITION ArcAlarmDetail */
/**
 * @summary ArcAlarmDetail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcAlarmDetail ::= SEQUENCE {
 *   problem            ProbableCause,
 *   alarmStatus        AlarmStatus,
 *   perceivedSeverity  PerceivedSeverity OPTIONAL,
 *   -- must be present unless <unassigned> (i.e. not an alarm)
 *   eventTime          EventTime OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ArcAlarmDetail {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ProbableCause,
        /**
         * @summary `alarmStatus`.
         * @public
         * @readonly
         */
        readonly alarmStatus: AlarmStatus,
        /**
         * @summary `perceivedSeverity`.
         * @public
         * @readonly
         */
        readonly perceivedSeverity: OPTIONAL<PerceivedSeverity>,
        /**
         * @summary `eventTime`.
         * @public
         * @readonly
         */
        readonly eventTime: OPTIONAL<EventTime>
    ) {}

    /**
     * @summary Restructures an object into a ArcAlarmDetail
     * @description
     *
     * This takes an `object` and converts it to a `ArcAlarmDetail`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ArcAlarmDetail`.
     * @returns {ArcAlarmDetail}
     */
    public static _from_object(
        _o: { [_K in keyof ArcAlarmDetail]: ArcAlarmDetail[_K] }
    ): ArcAlarmDetail {
        return new ArcAlarmDetail(
            _o.problem,
            _o.alarmStatus,
            _o.perceivedSeverity,
            _o.eventTime
        );
    }

    /**
     * @summary The enum used as the type of the component `perceivedSeverity`
     * @public
     * @static
     */

    public static _enum_for_perceivedSeverity = _enum_for_PerceivedSeverity;
}
/* END_OF_SYMBOL_DEFINITION ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ArcAlarmDetail */
/**
 * @summary The Leading Root Component Types of ArcAlarmDetail
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ArcAlarmDetail: $.ComponentSpec[] = [
    new $.ComponentSpec('problem', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'alarmStatus',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'perceivedSeverity',
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    /* FIXME: eventTime COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ArcAlarmDetail */
/**
 * @summary The Trailing Root Component Types of ArcAlarmDetail
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ArcAlarmDetail: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ArcAlarmDetail */
/**
 * @summary The Extension Addition Component Types of ArcAlarmDetail
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ArcAlarmDetail: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcAlarmDetail */
let _cached_decoder_for_ArcAlarmDetail: $.ASN1Decoder<ArcAlarmDetail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _decode_ArcAlarmDetail */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcAlarmDetail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcAlarmDetail} The decoded data structure.
 */
export function _decode_ArcAlarmDetail(el: _Element) {
    if (!_cached_decoder_for_ArcAlarmDetail) {
        _cached_decoder_for_ArcAlarmDetail = function (
            el: _Element
        ): ArcAlarmDetail {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: ProbableCause;
            let alarmStatus!: AlarmStatus;
            let perceivedSeverity: OPTIONAL<PerceivedSeverity>;
            let eventTime: OPTIONAL<EventTime>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = _decode_ProbableCause(_el);
                },
                alarmStatus: (_el: _Element): void => {
                    alarmStatus = _decode_AlarmStatus(_el);
                },
                perceivedSeverity: (_el: _Element): void => {
                    perceivedSeverity = _decode_PerceivedSeverity(_el);
                },
                eventTime: (_el: _Element): void => {
                    eventTime = _decode_EventTime(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ArcAlarmDetail,
                _extension_additions_list_spec_for_ArcAlarmDetail,
                _root_component_type_list_2_spec_for_ArcAlarmDetail,
                undefined
            );
            return new ArcAlarmDetail /* SEQUENCE_CONSTRUCTOR_CALL */(
                problem,
                alarmStatus,
                perceivedSeverity,
                eventTime
            );
        };
    }
    return _cached_decoder_for_ArcAlarmDetail(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcAlarmDetail */
let _cached_encoder_for_ArcAlarmDetail: $.ASN1Encoder<ArcAlarmDetail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcAlarmDetail */

/* START_OF_SYMBOL_DEFINITION _encode_ArcAlarmDetail */
/**
 * @summary Encodes a(n) ArcAlarmDetail into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcAlarmDetail, encoded as an ASN.1 Element.
 */
export function _encode_ArcAlarmDetail(
    value: ArcAlarmDetail,
    elGetter: $.ASN1Encoder<ArcAlarmDetail>
) {
    if (!_cached_encoder_for_ArcAlarmDetail) {
        _cached_encoder_for_ArcAlarmDetail = function (
            value: ArcAlarmDetail,
            elGetter: $.ASN1Encoder<ArcAlarmDetail>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProbableCause(
                            value.problem,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlarmStatus(
                            value.alarmStatus,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.perceivedSeverity === undefined
                            ? undefined
                            : _encode_PerceivedSeverity(
                                  value.perceivedSeverity,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.eventTime === undefined
                            ? undefined
                            : _encode_EventTime(value.eventTime, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ArcAlarmDetail(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcAlarmDetail */

/* eslint-enable */
