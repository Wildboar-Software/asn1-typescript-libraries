/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DayTimeBand,
    _decode_DayTimeBand,
    _encode_DayTimeBand,
} from "../SelectedAttributeTypes/DayTimeBand.ta.mjs";
import {
    Period_days,
    _decode_Period_days,
    _encode_Period_days,
} from "../SelectedAttributeTypes/Period-days.ta.mjs";
import {
    Period_months,
    _decode_Period_months,
    _encode_Period_months,
} from "../SelectedAttributeTypes/Period-months.ta.mjs";
import {
    Period_weeks,
    _decode_Period_weeks,
    _encode_Period_weeks,
} from "../SelectedAttributeTypes/Period-weeks.ta.mjs";
import isPositionalInt from "../../utils/isPositionalInt.mjs";

/**
 * @summary Period
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period ::= SEQUENCE {
 *   timesOfDay  [0]  SET SIZE (1..MAX) OF DayTimeBand OPTIONAL,
 *   days        [1]  CHOICE {
 *     intDay           SET OF INTEGER,
 *     bitDay           BIT STRING {
 *       sunday    (0),
 *       monday    (1),
 *       tuesday   (2),
 *       wednesday (3),
 *       thursday  (4),
 *       friday    (5),
 *       saturday  (6)},
 *     dayOf            XDayOf,
 *     ...} OPTIONAL,
 *   weeks       [2]  CHOICE {
 *     allWeeks         NULL,
 *     intWeek          SET OF INTEGER,
 *     bitWeek          BIT STRING {
 *       week1     (0),
 *       week2     (1),
 *       week3     (2),
 *       week4     (3),
 *       week5     (4)},
 *     ... } OPTIONAL,
 *   months      [3]  CHOICE {
 *     allMonths        NULL,
 *     intMonth         SET OF INTEGER,
 *     bitMonth         BIT STRING {
 *       january   (0),
 *       february  (1),
 *       march     (2),
 *       april     (3),
 *       may       (4),
 *       june      (5),
 *       july      (6),
 *       august    (7),
 *       september (8),
 *       october   (9),
 *       november  (10),
 *       december  (11)},
 *     ...} OPTIONAL,
 *   years       [4]  SET OF INTEGER(1000..MAX) OPTIONAL,
 *   ... }
 * ```
 *
 */
export class Period {
    constructor(
        /**
         * @summary `timesOfDay`.
         * @public
         * @readonly
         */
        readonly timesOfDay: OPTIONAL<DayTimeBand[]>,
        /**
         * @summary `days`.
         * @public
         * @readonly
         */
        readonly days: OPTIONAL<Period_days>,
        /**
         * @summary `weeks`.
         * @public
         * @readonly
         */
        readonly weeks: OPTIONAL<Period_weeks>,
        /**
         * @summary `months`.
         * @public
         * @readonly
         */
        readonly months: OPTIONAL<Period_months>,
        /**
         * @summary `years`.
         * @public
         * @readonly
         */
        readonly years: OPTIONAL<INTEGER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        if (
            (
                this.days
                && ("intDay" in this.days)
                && (
                    (
                        this.weeks
                        && (
                            (this.days.intDay.length > 7)
                            || !this.days.intDay.every(isPositionalInt(7))
                        )
                    )
                    || (
                        this.months
                        && (
                            (this.days.intDay.length > 31)
                            || !this.days.intDay.every(isPositionalInt(31))
                        )
                    )
                    || (
                        this.years
                        && (
                            (this.days.intDay.length > 366)
                            || !this.days.intDay.every(isPositionalInt(366))
                        )
                    )
                )
            )
            || (
                this.days
                && ("bitDay" in this.days)
                && (this.days.bitDay.length > 7)
            )
            || (
                this.weeks
                && ("intWeek" in this.weeks)
                && (
                    (
                        this.months
                        && (
                            (this.weeks.intWeek.length > 5)
                            || !this.weeks.intWeek.every(isPositionalInt(5))
                        )
                    )
                    || (
                        this.years
                        && (
                            (this.weeks.intWeek.length > 53)
                            || !this.weeks.intWeek.every(isPositionalInt(53))
                        )
                    )
                    || (
                        !this.months
                        && !this.years
                    )
                )
            )
            || (
                this.weeks
                && ("bitWeek" in this.weeks)
                && (this.weeks.bitWeek.length > 5)
            )
            || (
                this.months
                && ("intMonth" in this.months)
                && (
                    (this.months.intMonth.length > 12)
                    || !this.months.intMonth.every(isPositionalInt(12))
                )
            || (
                this.months
                && ("bitMonth" in this.months)
                && (this.months.bitMonth.length > 12)
            )
            ) || (
                this.days
                && !(
                    this.weeks
                    ?? this.months
                    ?? this.years
                )
            )
        ) {
            throw new Error();
        }
    }

    /**
     * @summary Restructures an object into a Period
     * @description
     *
     * This takes an `object` and converts it to a `Period`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Period`.
     * @returns {Period}
     */
    public static _from_object(
        _o: { [_K in keyof Period]: Period[_K] }
    ): Period {
        return new Period(
            _o.timesOfDay,
            _o.days,
            _o.weeks,
            _o.months,
            _o.years,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of Period
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Period: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "timesOfDay",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "days",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "weeks",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "months",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "years",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of Period
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Period: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Period
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Period: $.ComponentSpec[] = [];

let _cached_decoder_for_Period: $.ASN1Decoder<Period> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period} The decoded data structure.
 */
export function _decode_Period(el: _Element): Period {
    if (!_cached_decoder_for_Period) {
        _cached_decoder_for_Period = function (el: _Element): Period {
            let timesOfDay: OPTIONAL<DayTimeBand[]>;
            let days: OPTIONAL<Period_days>;
            let weeks: OPTIONAL<Period_weeks>;
            let months: OPTIONAL<Period_months>;
            let years: OPTIONAL<INTEGER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                timesOfDay: (_el: _Element): void => {
                    timesOfDay = $._decode_explicit<DayTimeBand[]>(() =>
                        $._decodeSetOf<DayTimeBand>(() => _decode_DayTimeBand)
                    )(_el);
                },
                days: (_el: _Element): void => {
                    days = $._decode_explicit<Period_days>(
                        () => _decode_Period_days
                    )(_el);
                },
                weeks: (_el: _Element): void => {
                    weeks = $._decode_explicit<Period_weeks>(
                        () => _decode_Period_weeks
                    )(_el);
                },
                months: (_el: _Element): void => {
                    months = $._decode_explicit<Period_months>(
                        () => _decode_Period_months
                    )(_el);
                },
                years: (_el: _Element): void => {
                    years = $._decode_explicit<INTEGER[]>(() =>
                        $._decodeSetOf<INTEGER>(() => $._decodeInteger)
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Period,
                _extension_additions_list_spec_for_Period,
                _root_component_type_list_2_spec_for_Period,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Period(
                timesOfDay,
                days,
                weeks,
                months,
                years,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Period(el);
}

let _cached_encoder_for_Period: $.ASN1Encoder<Period> | null = null;

/**
 * @summary Encodes a(n) Period into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period, encoded as an ASN.1 Element.
 */
export function _encode_Period(value: Period, elGetter: $.ASN1Encoder<Period>): _Element {
    if (!_cached_encoder_for_Period) {
        _cached_encoder_for_Period = function (
            value: Period        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.timesOfDay === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSetOf<DayTimeBand>(
                                              () => _encode_DayTimeBand,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.timesOfDay, $.DER),
                            /* IF_ABSENT  */ value.days === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Period_days,
                                      $.DER
                                  )(value.days, $.DER),
                            /* IF_ABSENT  */ value.weeks === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_Period_weeks,
                                      $.DER
                                  )(value.weeks, $.DER),
                            /* IF_ABSENT  */ value.months === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Period_months,
                                      $.DER
                                  )(value.months, $.DER),
                            /* IF_ABSENT  */ value.years === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<INTEGER>(
                                              () => $._encodeInteger,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.years, $.DER),
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
    return _cached_encoder_for_Period(value, elGetter);
}


/* eslint-enable */
