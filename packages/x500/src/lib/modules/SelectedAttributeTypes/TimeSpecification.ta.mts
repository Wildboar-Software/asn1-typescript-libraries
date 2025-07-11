/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TimeSpecification_time,
    _decode_TimeSpecification_time,
    _encode_TimeSpecification_time,
} from "../SelectedAttributeTypes/TimeSpecification-time.ta.mjs";
import {
    TimeZone,
    _decode_TimeZone,
    _encode_TimeZone,
} from "../SelectedAttributeTypes/TimeZone.ta.mjs";
/**
 * @summary TimeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification ::= SEQUENCE {
 *   time           CHOICE {
 *     absolute       SEQUENCE {
 *       startTime [0]  GeneralizedTime OPTIONAL,
 *       endTime   [1]  GeneralizedTime OPTIONAL,
 *       ... },
 *     periodic      SET SIZE (1..MAX) OF Period},
 *   notThisTime   BOOLEAN DEFAULT FALSE,
 *   timeZone      TimeZone OPTIONAL,
 *   ... }
 * ```
 *
 */
export class TimeSpecification {
    constructor(
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeSpecification_time,
        /**
         * @summary `notThisTime`.
         * @public
         * @readonly
         */
        readonly notThisTime: OPTIONAL<BOOLEAN>,
        /**
         * @summary `timeZone`.
         * @public
         * @readonly
         */
        readonly timeZone: OPTIONAL<TimeZone>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TimeSpecification
     * @description
     *
     * This takes an `object` and converts it to a `TimeSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeSpecification`.
     * @returns {TimeSpecification}
     */
    public static _from_object(
        _o: { [_K in keyof TimeSpecification]: TimeSpecification[_K] }
    ): TimeSpecification {
        return new TimeSpecification(
            _o.time,
            _o.notThisTime,
            _o.timeZone,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `notThisTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_notThisTime(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of TimeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("time", false, $.hasAnyTag),
    new $.ComponentSpec(
        "notThisTime",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        "timeZone",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of TimeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeSpecification: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TimeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeSpecification: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeSpecification: $.ASN1Decoder<TimeSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification} The decoded data structure.
 */
export function _decode_TimeSpecification(el: _Element): TimeSpecification {
    if (!_cached_decoder_for_TimeSpecification) {
        _cached_decoder_for_TimeSpecification = function (
            el: _Element
        ): TimeSpecification {
            let time!: TimeSpecification_time;
            let notThisTime: OPTIONAL<BOOLEAN> =
                TimeSpecification._default_value_for_notThisTime;
            let timeZone: OPTIONAL<TimeZone>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                time: (_el: _Element): void => {
                    time = _decode_TimeSpecification_time(_el);
                },
                notThisTime: (_el: _Element): void => {
                    notThisTime = $._decodeBoolean(_el);
                },
                timeZone: (_el: _Element): void => {
                    timeZone = _decode_TimeZone(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeSpecification,
                _extension_additions_list_spec_for_TimeSpecification,
                _root_component_type_list_2_spec_for_TimeSpecification,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeSpecification(
                time,
                notThisTime,
                timeZone,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeSpecification(el);
}

let _cached_encoder_for_TimeSpecification: $.ASN1Encoder<TimeSpecification> | null = null;

/**
 * @summary Encodes a(n) TimeSpecification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification(
    value: TimeSpecification,
    elGetter: $.ASN1Encoder<TimeSpecification>
): _Element {
    if (!_cached_encoder_for_TimeSpecification) {
        _cached_encoder_for_TimeSpecification = function (
            value: TimeSpecification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TimeSpecification_time(
                                value.time,
                                $.DER
                            ),
                            /* IF_DEFAULT */ value.notThisTime === undefined ||
                            $.deepEq(
                                value.notThisTime,
                                TimeSpecification._default_value_for_notThisTime
                            )
                                ? undefined
                                : $._encodeBoolean(value.notThisTime, $.DER),
                            /* IF_ABSENT  */ value.timeZone === undefined
                                ? undefined
                                : _encode_TimeZone(value.timeZone, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TimeSpecification(value, elGetter);
}


/* eslint-enable */
