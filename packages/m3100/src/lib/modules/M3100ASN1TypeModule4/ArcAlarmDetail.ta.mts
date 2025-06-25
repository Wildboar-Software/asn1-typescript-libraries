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
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
import {
    AlarmStatus,
    _decode_AlarmStatus,
    _encode_AlarmStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AlarmStatus.ta.mjs';
import {
    PerceivedSeverity,
    _enum_for_PerceivedSeverity,
    _decode_PerceivedSeverity,
    _encode_PerceivedSeverity,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/PerceivedSeverity.ta.mjs';
import {
    EventTime,
    _decode_EventTime,
    _encode_EventTime,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/EventTime.ta.mjs';


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


/**
 * @summary The Leading Root Component Types of ArcAlarmDetail
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ArcAlarmDetail: $.ComponentSpec[] = [
    new $.ComponentSpec('problem', false, $.hasAnyTag),
    new $.ComponentSpec(
        'alarmStatus',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'perceivedSeverity',
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
    /* FIXME: eventTime COULD_NOT_RESOLVE_TYPE_DEF */
];


/**
 * @summary The Trailing Root Component Types of ArcAlarmDetail
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ArcAlarmDetail: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ArcAlarmDetail
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ArcAlarmDetail: $.ComponentSpec[] = [];


let _cached_decoder_for_ArcAlarmDetail: $.ASN1Decoder<ArcAlarmDetail> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcAlarmDetail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcAlarmDetail} The decoded data structure.
 */
export function _decode_ArcAlarmDetail(el: _Element): ArcAlarmDetail {
    if (!_cached_decoder_for_ArcAlarmDetail) {
        _cached_decoder_for_ArcAlarmDetail = function (
            el: _Element
        ): ArcAlarmDetail {
            let problem!: ProbableCause;
            let alarmStatus!: AlarmStatus;
            let perceivedSeverity: OPTIONAL<PerceivedSeverity>;
            let eventTime: OPTIONAL<EventTime>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ArcAlarmDetail,
                _extension_additions_list_spec_for_ArcAlarmDetail,
                _root_component_type_list_2_spec_for_ArcAlarmDetail,
                undefined
            );
            return new ArcAlarmDetail (
                problem,
                alarmStatus,
                perceivedSeverity,
                eventTime
            );
        };
    }
    return _cached_decoder_for_ArcAlarmDetail(el);
}


let _cached_encoder_for_ArcAlarmDetail: $.ASN1Encoder<ArcAlarmDetail> | null = null;


/**
 * @summary Encodes a(n) ArcAlarmDetail into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcAlarmDetail, encoded as an ASN.1 Element.
 */
export function _encode_ArcAlarmDetail(
    value: ArcAlarmDetail,
    elGetter: $.ASN1Encoder<ArcAlarmDetail>
): _Element {
    if (!_cached_encoder_for_ArcAlarmDetail) {
        _cached_encoder_for_ArcAlarmDetail = function (
            value: ArcAlarmDetail        ): _Element {
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


/* eslint-enable */
