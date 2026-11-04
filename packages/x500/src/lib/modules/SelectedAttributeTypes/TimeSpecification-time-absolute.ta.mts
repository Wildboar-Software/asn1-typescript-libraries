/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type GeneralizedTime,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Interval,
    boundToDate,
    compareIntervals,
    containsInterval,
    containsPoint,
    dateToBound,
    intersectionOf,
    isEmptyInterval,
    overlapsInterval,
    unionOf,
} from "../../utils/rangeAlgebra.mjs";
import { isoInterval } from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link TimeSpecification_time_absolute}.
 */
export type TimeSpecification_time_absoluteJSON = {
    startTime?: string;
    endTime?: string;
};

/**
 * @summary TimeSpecification_time_absolute
 * @description
 *
 * `startTime` = `endTime` ⇒ instant. Missing `endTime` ⇒ all times
 * after `startTime`. Missing `startTime` ⇒ no lower bound.
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. `Date` plays the role of VS Code `Position`. Both
 * present bounds are inclusive. Unlike VS Code `Range`, inverted
 * bounds are **not** swapped.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification-time-absolute ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class TimeSpecification_time_absolute {
    /**
     * @summary `startTime`.
     * @description
     *
     * Equal to `endTime` ⇒ instant.
     *
     * @public
     * @readonly
     */
    public readonly startTime?: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `endTime`.
     * @description
     *
     * Missing ⇒ all times after `startTime`.
     *
     * @public
     * @readonly
     */
    public readonly endTime?: OPTIONAL<GeneralizedTime>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        startTime?: OPTIONAL<GeneralizedTime>,
        endTime?: OPTIONAL<GeneralizedTime>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.startTime = startTime;
        this.endTime = endTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TimeSpecification_time_absolute
     * @description
     *
     * This takes an `object` and converts it to a `TimeSpecification_time_absolute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeSpecification_time_absolute`.
     * @returns {TimeSpecification_time_absolute}
     */
    public static _from_object(
        _o: {
                [_K in keyof TimeSpecification_time_absolute]: TimeSpecification_time_absolute[_K];
            }
    ): TimeSpecification_time_absolute {
        return new TimeSpecification_time_absolute(
            _o.startTime,
            _o.endTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary This absolute time as a 1-D interval.
     * @returns {Interval} Inclusive `startTime` / `endTime` bounds.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval {
        return {
            start: dateToBound(this.startTime),
            end: dateToBound(this.endTime),
        };
    }

    /**
     * @summary Build an absolute time from 1-D interval bounds.
     * @param {Interval} interval Inclusive bounds.
     * @returns {TimeSpecification_time_absolute} The corresponding value.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (
        interval: Interval,
    ): TimeSpecification_time_absolute {
        return new TimeSpecification_time_absolute(
            boundToDate(interval.start),
            boundToDate(interval.end),
        );
    }

    /**
     * @summary Compare this absolute time to another for ordering.
     * @param {TimeSpecification_time_absolute} other The comparefn `b`.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: TimeSpecification_time_absolute): number {
        return compareIntervals(this._interval(), other._interval());
    }

    /**
     * @summary Whether two absolute times have the same bounds.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`).
     *
     * @param {TimeSpecification_time_absolute} other The other value.
     * @returns {boolean} `true` iff both bounds match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: TimeSpecification_time_absolute): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether start is after end (matches no instant).
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. A single instant
     * (`startTime` = `endTime`) is not empty.
     *
     * @returns {boolean} `true` iff both bounds are present and inverted.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return isEmptyInterval(this._interval(), false);
    }

    /**
     * @summary Whether this absolute time contains a date or another value.
     * @description
     *
     * Copies VS Code `Range.contains`. Closed interval.
     *
     * @param {Date | TimeSpecification_time_absolute} dateOrAbsolute
     * A date or absolute time.
     * @returns {boolean} `true` iff every included instant is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (
        dateOrAbsolute: Date | TimeSpecification_time_absolute,
    ): boolean {
        if (dateOrAbsolute instanceof TimeSpecification_time_absolute) {
            return containsInterval(
                this._interval(),
                dateOrAbsolute._interval(),
                false,
            );
        }
        return containsPoint(
            this._interval(),
            BigInt(dateOrAbsolute.getTime()),
            false,
        );
    }

    /**
     * @summary Whether this absolute time shares any instant with `other`.
     * @param {TimeSpecification_time_absolute} other The other value.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: TimeSpecification_time_absolute): boolean {
        return overlapsInterval(this._interval(), other._interval(), false);
    }

    /**
     * @summary Overlap of this absolute time and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`.
     *
     * @param {TimeSpecification_time_absolute} other The other value.
     * @returns {TimeSpecification_time_absolute | undefined} The overlap,
     * or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (
        other: TimeSpecification_time_absolute,
    ): TimeSpecification_time_absolute | undefined {
        const overlap = intersectionOf(
            this._interval(),
            other._interval(),
            false,
        );
        return overlap
            ? TimeSpecification_time_absolute._fromInterval(overlap)
            : undefined;
    }

    /**
     * @summary Smallest absolute time covering this and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. A gap is filled.
     *
     * @param {TimeSpecification_time_absolute} other The other value.
     * @returns {TimeSpecification_time_absolute} One value spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (
        other: TimeSpecification_time_absolute,
    ): TimeSpecification_time_absolute {
        return TimeSpecification_time_absolute._fromInterval(
            unionOf(this._interval(), other._interval()),
        );
    }

    /**
     * @summary ISO 8601 time interval for this absolute time
     * @description
     *
     * `startTime/endTime`. A missing bound is left empty. Both present
     * bounds are inclusive. Unrecognized extensions are omitted.
     *
     * @returns The interval `start/end`
     * @function
     * @public
     */
    public toString(): string {
        return isoInterval(this.startTime, this.endTime);
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `GeneralizedTime` values are ISO 8601 timestamps. Absent optional
     * components are omitted. Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): TimeSpecification_time_absoluteJSON {
        const json: TimeSpecification_time_absoluteJSON = {};
        if (this.startTime !== undefined) {
            json.startTime = this.startTime.toISOString();
        }
        if (this.endTime !== undefined) {
            json.endTime = this.endTime.toISOString();
        }
        return json;
    }
}

/**
 * @summary The Leading Root Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startTime",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endTime",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TimeSpecification_time_absolute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeSpecification_time_absolute: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeSpecification_time_absolute: $.ASN1Decoder<TimeSpecification_time_absolute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time_absolute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification_time_absolute} The decoded data structure.
 */
export function _decode_TimeSpecification_time_absolute(el: _Element): TimeSpecification_time_absolute {
    if (!_cached_decoder_for_TimeSpecification_time_absolute) {
        _cached_decoder_for_TimeSpecification_time_absolute = function (
            el: _Element
        ): TimeSpecification_time_absolute {
            let startTime: OPTIONAL<GeneralizedTime>;
            let endTime: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startTime: (_el: _Element): void => {
                    startTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                endTime: (_el: _Element): void => {
                    endTime = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeSpecification_time_absolute,
                _extension_additions_list_spec_for_TimeSpecification_time_absolute,
                _root_component_type_list_2_spec_for_TimeSpecification_time_absolute,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TimeSpecification_time_absolute(
                startTime,
                endTime,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TimeSpecification_time_absolute(el);
}

let _cached_encoder_for_TimeSpecification_time_absolute: $.ASN1Encoder<TimeSpecification_time_absolute> | null = null;

/**
 * @summary Encodes a(n) TimeSpecification_time_absolute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time_absolute, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification_time_absolute(
    value: TimeSpecification_time_absolute,
    elGetter: $.ASN1Encoder<TimeSpecification_time_absolute>
): _Element {
    if (!_cached_encoder_for_TimeSpecification_time_absolute) {
        _cached_encoder_for_TimeSpecification_time_absolute = function (
            value: TimeSpecification_time_absolute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.startTime, $.DER),
                            /* IF_ABSENT  */ value.endTime === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.endTime, $.DER),
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
    return _cached_encoder_for_TimeSpecification_time_absolute(value, elGetter);
}


/* eslint-enable */
