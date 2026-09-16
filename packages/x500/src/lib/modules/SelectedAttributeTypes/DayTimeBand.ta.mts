/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DayTime,
    _decode_DayTime,
    _encode_DayTime,
} from "../SelectedAttributeTypes/DayTime.ta.mjs";

/**
 * @summary DayTimeBand
 * @description
 *
 * Rec. ITU-T X.520 (10/2019) | ISO/IEC 9594-6:2020, clause 10.2
 * (`temporalContext`): a period of time during a **single** civil day,
 * as a member of `Period.timesOfDay`.
 * [X.520 (2019)](https://www.itu.int/rec/T-REC-X.520-201910-I/en).
 * After X.520 (2019) Amd.1 (10/2024) NOTE 1, the ASN.1 lives in
 * X.501 `UsefulDefinitions`; matching rules stay in X.520 10.2.
 * [Amd.1](https://www.itu.int/rec/T-REC-X.520-201910-I-Amd1/en).
 *
 * `startDayTime` DEFAULT `{hour 0}` (00:00:00). `endDayTime` DEFAULT
 * `{hour 23, minute 59, second 59}`. `DayTime.hour` is `0..23`.
 *
 * `timesOfDay` is `SET SIZE (1..MAX) OF DayTimeBand`. A night that
 * crosses midnight is **two** bands on each allowed day: one ending
 * at 23:59:59 and one starting at 00:00:00. Morning hours do not
 * belong to the previous calendar day unless that day is also
 * selected (`days` / `weeks` / `months` / `years`).
 *
 * 10.2 does not constrain `startDayTime <= endDayTime` and does not
 * define wrap when start is after end. This implementation does
 * **not** treat `start > end` as overnight: membership is the closed
 * interval from start to end on that day's clock, so an inverted
 * band matches no instant.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DayTimeBand ::= SEQUENCE {
 *   startDayTime  [0]  DayTime DEFAULT {hour 0},
 *   endDayTime    [1]  DayTime DEFAULT {hour 23, minute 59, second 59},
 *   ... }
 * ```
 *
 */
export class DayTimeBand {
    constructor(
        /**
         * @summary `startDayTime`.
         * @description
         *
         * DEFAULT {hour 0}.
         *
         * @public
         * @readonly
         */
        readonly startDayTime?: OPTIONAL<DayTime>,
        /**
         * @summary `endDayTime`.
         * @description
         *
         * DEFAULT {hour 23, minute 59, second 59}.
         *
         * @public
         * @readonly
         */
        readonly endDayTime?: OPTIONAL<DayTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DayTimeBand
     * @description
     *
     * This takes an `object` and converts it to a `DayTimeBand`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayTimeBand`.
     * @returns {DayTimeBand}
     */
    public static _from_object(
        _o: { [_K in keyof DayTimeBand]: DayTimeBand[_K] }
    ): DayTimeBand {
        return new DayTimeBand(
            _o.startDayTime,
            _o.endDayTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary DEFAULT `startDayTime` (`{hour 0}`).
     * @constant
     * @author Cursor Grok 4.6
     */
    public static readonly START_OF_DAY: DayTime = new DayTime(0);

    /**
     * @summary DEFAULT `endDayTime` (`{hour 23, minute 59, second 59}`).
     * @constant
     * @author Cursor Grok 4.6
     */
    public static readonly END_OF_DAY: DayTime = new DayTime(23, 59, 59);

    /**
     * @summary Getter that returns the default value for `startDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_startDayTime(): DayTime {
        return DayTimeBand.START_OF_DAY;
    }
    /**
     * @summary Getter that returns the default value for `endDayTime`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_endDayTime(): DayTime {
        return DayTimeBand.END_OF_DAY;
    }

    /**
     * @summary Whether `startDayTime` is 00:00:00.
     * @description
     *
     * Absent `startDayTime` is DEFAULT `{hour 0}` (minute and second
     * DEFAULT 0). Present `{hour 0}` is the same instant.
     *
     * @returns {boolean} `true` if the band starts at midnight.
     * @function
     * @author Cursor Grok 4.6
     */
    public isStartOfDay (): boolean {
        return (this.startDayTime === undefined)
            || this.startDayTime.isEqualTo(DayTimeBand.START_OF_DAY);
    }

    /**
     * @summary Whether `endDayTime` is 23:59:59.
     * @description
     *
     * Absent `endDayTime` is DEFAULT `{hour 23, minute 59, second 59}`.
     * Present `{hour 23}` is 23:00:00, not the end of the day, because
     * `DayTime` minute and second default to 0.
     *
     * @returns {boolean} `true` if the band ends at 23:59:59.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEndOfDay (): boolean {
        return (this.endDayTime === undefined)
            || this.endDayTime.isEqualTo(DayTimeBand.END_OF_DAY);
    }

    /**
     * @summary Compare this band to another for SET ordering.
     * @description
     *
     * Orders by start, then end. Missing ends use the `DayTimeBand`
     * DEFAULTs (`START_OF_DAY` / `END_OF_DAY`).
     *
     * Suitable as `Array.prototype.sort`'s comparefn. For an ascending
     * sort, pass `this` as argument `a` and `other` as argument `b`:
     * `(a, b) => a.compare(b)`. Negative means `this` (`a`) starts
     * (or, if starts match, ends) earlier and sorts first; `0` means
     * equal; positive means `this` sorts after `other` (`b`).
     *
     * @param {DayTimeBand} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: DayTimeBand): number {
        const startDiff = (this.startDayTime ?? DayTimeBand.START_OF_DAY)
            .compare(other.startDayTime ?? DayTimeBand.START_OF_DAY);
        if (startDiff !== 0) {
            return startDiff;
        }
        return (this.endDayTime ?? DayTimeBand.END_OF_DAY)
            .compare(other.endDayTime ?? DayTimeBand.END_OF_DAY);
    }

    /**
     * @summary Whether two bands cover the same start and end.
     * @param {DayTimeBand} other The other band.
     * @returns {boolean} `true` iff start and end match, applying DEFAULTs.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: DayTimeBand): boolean {
        return (this.compare(other) === 0);
    }
}

/**
 * @summary The Leading Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DayTimeBand: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startDayTime",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endDayTime",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DayTimeBand: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DayTimeBand
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DayTimeBand: $.ComponentSpec[] = [];

let _cached_decoder_for_DayTimeBand: $.ASN1Decoder<DayTimeBand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayTimeBand
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DayTimeBand} The decoded data structure.
 */
export function _decode_DayTimeBand(el: _Element): DayTimeBand {
    if (!_cached_decoder_for_DayTimeBand) {
        _cached_decoder_for_DayTimeBand = function (el: _Element): DayTimeBand {
            let startDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_startDayTime;
            let endDayTime: OPTIONAL<DayTime> =
                DayTimeBand._default_value_for_endDayTime;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startDayTime: (_el: _Element): void => {
                    startDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
                endDayTime: (_el: _Element): void => {
                    endDayTime = $._decode_explicit<DayTime>(
                        () => _decode_DayTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DayTimeBand,
                _extension_additions_list_spec_for_DayTimeBand,
                _root_component_type_list_2_spec_for_DayTimeBand,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DayTimeBand(
                startDayTime,
                endDayTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DayTimeBand(el);
}

let _cached_encoder_for_DayTimeBand: $.ASN1Encoder<DayTimeBand> | null = null;

/**
 * @summary Encodes a(n) DayTimeBand into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayTimeBand, encoded as an ASN.1 Element.
 */
export function _encode_DayTimeBand(
    value: DayTimeBand,
    elGetter: $.ASN1Encoder<DayTimeBand>
): _Element {
    if (!_cached_encoder_for_DayTimeBand) {
        _cached_encoder_for_DayTimeBand = function (
            value: DayTimeBand        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.startDayTime === undefined ||
                            $.deepEq(
                                value.startDayTime,
                                DayTimeBand._default_value_for_startDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DayTime,
                                      $.DER
                                  )(value.startDayTime, $.DER),
                            /* IF_DEFAULT */ value.endDayTime === undefined ||
                            $.deepEq(
                                value.endDayTime,
                                DayTimeBand._default_value_for_endDayTime
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DayTime,
                                      $.DER
                                  )(value.endDayTime, $.DER),
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
    return _cached_encoder_for_DayTimeBand(value, elGetter);
}


/* eslint-enable */
