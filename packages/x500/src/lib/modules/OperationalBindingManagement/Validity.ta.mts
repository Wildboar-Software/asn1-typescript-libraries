/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Validity_validFrom,
    _decode_Validity_validFrom,
    _encode_Validity_validFrom,
} from "../OperationalBindingManagement/Validity-validFrom.ta.mjs";
import {
    type Validity_validUntil,
    _decode_Validity_validUntil,
    _encode_Validity_validUntil,
} from "../OperationalBindingManagement/Validity-validUntil.ta.mjs";
import {
    type Time,
} from "../OperationalBindingManagement/Time.ta.mjs";
import {
    type Bound,
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
/**
 * @summary Validity
 * @description
 *
 * Binding lifetime. Empty SEQUENCE (or omitted `valid` on establish) means from
 * now until explicit termination. `validFrom` DEFAULT `now:NULL`; `validUntil`
 * DEFAULT `explicitTermination:NULL`. Explicit `time` uses `Time` (UTCTime year
 * window as on that type).
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. `Date` plays the role of VS Code `Position`. `now` and
 * `explicitTermination` (and omitted components, which take those
 * DEFAULTs) are treated as unbounded that side — they are not a
 * specific instant without an establishment clock. Unlike VS Code
 * `Range`, inverted `time` bounds are **not** swapped.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity ::= SEQUENCE {
 *   validFrom            [0]  CHOICE {
 *     now                  [0]  NULL,
 *     time                 [1]  Time,
 *     ...} DEFAULT now:NULL,
 *   validUntil           [1]  CHOICE {
 *     explicitTermination  [0]  NULL,
 *     time                 [1]  Time,
 *     ... } DEFAULT explicitTermination:NULL,
 *   ... }
 * ```
 *
 */
export class Validity {
    /**
     * @summary `validFrom`.
     * @public
     * @readonly
     */
    public readonly validFrom?: OPTIONAL<Validity_validFrom>;
    /**
     * @summary `validUntil`.
     * @public
     * @readonly
     */
    public readonly validUntil?: OPTIONAL<Validity_validUntil>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        validFrom?: OPTIONAL<Validity_validFrom>,
        validUntil?: OPTIONAL<Validity_validUntil>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.validFrom = validFrom;
        this.validUntil = validUntil;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Validity
     * @description
     *
     * This takes an `object` and converts it to a `Validity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Validity`.
     * @returns {Validity}
     */
    public static _from_object(
        _o: { [_K in keyof Validity]: Validity[_K] }
    ): Validity {
        return new Validity(
            _o.validFrom,
            _o.validUntil,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `validFrom`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validFrom(): Validity_validFrom {
        return { now: null };
    }
    /**
     * @summary Getter that returns the default value for `validUntil`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validUntil(): Validity_validUntil {
        return { explicitTermination: null };
    }

    /**
     * @summary Instant of an operational-binding `Time` CHOICE.
     * @param {Time} time UTCTime or GeneralizedTime.
     * @returns {Bound} Milliseconds since epoch.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _timeToBound (time: Time): Bound {
        if ("utcTime" in time) {
            return dateToBound(time.utcTime);
        }
        if ("generalizedTime" in time) {
            return dateToBound(time.generalizedTime);
        }
        throw new Error("unrecognized Validity Time alternative");
    }

    /**
     * @summary `Time` CHOICE from a millisecond bound.
     * @description
     *
     * Uses `utcTime` for years 1950–2049 and `generalizedTime`
     * otherwise (same year window as the `Time` type).
     *
     * @param {bigint} bound Milliseconds since epoch.
     * @returns {Time} The corresponding `Time`.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _boundToTime (bound: bigint): Time {
        const date = boundToDate(bound);
        if (date === undefined) {
            throw new Error("Validity Time bound is required");
        }
        const year = date.getUTCFullYear();
        if ((year >= 1950) && (year <= 2049)) {
            return { utcTime: date };
        }
        return { generalizedTime: date };
    }

    /**
     * @summary Whether `validFrom` is the `now` alternative.
     * @param {Validity_validFrom} value Start CHOICE.
     * @returns {boolean} `true` iff the `now` arm is selected.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _isNow (
        value: Validity_validFrom,
    ): value is { now: null } {
        return ("now" in value) && !("time" in value);
    }

    /**
     * @summary Whether `validFrom` is the `time` alternative.
     * @param {Validity_validFrom} value Start CHOICE.
     * @returns {boolean} `true` iff the `time` arm is a `Time` object.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _isFromTime (
        value: Validity_validFrom,
    ): value is { time: Time } {
        return ("time" in value)
            && !("now" in value)
            && (typeof value.time === "object")
            && (value.time !== null);
    }

    /**
     * @summary Whether `validUntil` is `explicitTermination`.
     * @param {Validity_validUntil} value End CHOICE.
     * @returns {boolean} `true` iff the `explicitTermination` arm is selected.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _isExplicitTermination (
        value: Validity_validUntil,
    ): value is { explicitTermination: null } {
        return ("explicitTermination" in value) && !("time" in value);
    }

    /**
     * @summary Whether `validUntil` is the `time` alternative.
     * @param {Validity_validUntil} value End CHOICE.
     * @returns {boolean} `true` iff the `time` arm is a `Time` object.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _isUntilTime (
        value: Validity_validUntil,
    ): value is { time: Time } {
        return ("time" in value)
            && !("explicitTermination" in value)
            && (typeof value.time === "object")
            && (value.time !== null);
    }

    /**
     * @summary Lower bound: `now` / omitted ⇒ unbounded.
     * @param {Validity_validFrom} [validFrom] Start CHOICE.
     * @returns {Bound} Start instant, or unbounded.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromBound (
        validFrom?: Validity_validFrom,
    ): Bound {
        const value = validFrom ?? Validity._default_value_for_validFrom;
        if (Validity._isNow(value)) {
            return undefined;
        }
        if (Validity._isFromTime(value)) {
            return Validity._timeToBound(value.time);
        }
        throw new Error("unrecognized Validity.validFrom alternative");
    }

    /**
     * @summary Upper bound: `explicitTermination` / omitted ⇒ unbounded.
     * @param {Validity_validUntil} [validUntil] End CHOICE.
     * @returns {Bound} End instant, or unbounded.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _untilBound (
        validUntil?: Validity_validUntil,
    ): Bound {
        const value = validUntil ?? Validity._default_value_for_validUntil;
        if (Validity._isExplicitTermination(value)) {
            return undefined;
        }
        if (Validity._isUntilTime(value)) {
            return Validity._timeToBound(value.time);
        }
        throw new Error("unrecognized Validity.validUntil alternative");
    }

    /**
     * @summary This lifetime as a 1-D interval, if alternatives are known.
     * @returns {Interval | undefined} Inclusive bounds, or `undefined`
     * if an unrecognized extension alternative is present.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval | undefined {
        try {
            return {
                start: Validity._fromBound(this.validFrom),
                end: Validity._untilBound(this.validUntil),
            };
        } catch {
            return undefined;
        }
    }

    /**
     * @summary Build a lifetime from 1-D interval bounds.
     * @param {Interval} interval Inclusive bounds.
     * @returns {Validity} DEFAULT `now` / `explicitTermination` omitted.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (interval: Interval): Validity {
        return new Validity(
            (interval.start === undefined)
                ? undefined
                : { time: Validity._boundToTime(interval.start) },
            (interval.end === undefined)
                ? undefined
                : { time: Validity._boundToTime(interval.end) },
        );
    }

    /**
     * @summary Compare this lifetime to another for ordering.
     * @description
     *
     * Unrecognized CHOICE alternatives sort after known values and
     * compare equal only to each other by object identity.
     *
     * @param {Validity} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: Validity): number {
        const a = this._interval();
        const b = other._interval();
        if ((a === undefined) && (b === undefined)) {
            return 0;
        }
        if (a === undefined) {
            return 1;
        }
        if (b === undefined) {
            return -1;
        }
        return compareIntervals(a, b);
    }

    /**
     * @summary Whether two lifetimes have the same effective bounds.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`). `now` equals omitted `validFrom`;
     * `explicitTermination` equals omitted `validUntil`. Compared as
     * instants for `time` alternatives.
     *
     * @param {Validity} other The other lifetime.
     * @returns {boolean} `true` iff both bounds match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: Validity): boolean {
        const a = this._interval();
        const b = other._interval();
        if ((a === undefined) || (b === undefined)) {
            return false;
        }
        return (compareIntervals(a, b) === 0);
    }

    /**
     * @summary Whether start is after end (matches no instant).
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. `now` until
     * `explicitTermination` is not empty. Unrecognized alternatives
     * are treated as empty.
     *
     * @returns {boolean} `true` iff both `time` bounds are inverted.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        const interval = this._interval();
        if (interval === undefined) {
            return true;
        }
        return isEmptyInterval(interval, false);
    }

    /**
     * @summary Whether this lifetime contains a date or another lifetime.
     * @description
     *
     * Copies VS Code `Range.contains`. Closed interval. `now` and
     * `explicitTermination` do not constrain that side.
     *
     * @param {Date | Validity} dateOrValidity A date or lifetime.
     * @returns {boolean} `true` iff every included instant is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (dateOrValidity: Date | Validity): boolean {
        const interval = this._interval();
        if (interval === undefined) {
            return false;
        }
        if (dateOrValidity instanceof Validity) {
            const other = dateOrValidity._interval();
            if (other === undefined) {
                return false;
            }
            return containsInterval(interval, other, false);
        }
        return containsPoint(
            interval,
            BigInt(dateOrValidity.getTime()),
            false,
        );
    }

    /**
     * @summary Whether this lifetime shares any instant with `other`.
     * @param {Validity} other The other lifetime.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: Validity): boolean {
        const a = this._interval();
        const b = other._interval();
        if ((a === undefined) || (b === undefined)) {
            return false;
        }
        return overlapsInterval(a, b, false);
    }

    /**
     * @summary Overlap of this lifetime and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`.
     *
     * @param {Validity} other The other lifetime.
     * @returns {Validity | undefined} The overlap, or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (other: Validity): Validity | undefined {
        const a = this._interval();
        const b = other._interval();
        if ((a === undefined) || (b === undefined)) {
            return undefined;
        }
        const overlap = intersectionOf(a, b, false);
        return overlap ? Validity._fromInterval(overlap) : undefined;
    }

    /**
     * @summary Smallest lifetime covering this lifetime and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. A gap is filled. `now` or
     * `explicitTermination` on either side stays unbounded.
     *
     * @param {Validity} other The other lifetime.
     * @returns {Validity} One lifetime spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (other: Validity): Validity {
        const a = this._interval();
        const b = other._interval();
        if ((a === undefined) || (b === undefined)) {
            throw new Error("Validity.union: unrecognized Time alternative");
        }
        return Validity._fromInterval(unionOf(a, b));
    }
}

/**
 * @summary The Leading Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Validity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "validFrom",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "validUntil",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Validity: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Validity: $.ComponentSpec[] = [];

let _cached_decoder_for_Validity: $.ASN1Decoder<Validity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity} The decoded data structure.
 */
export function _decode_Validity(el: _Element): Validity {
    if (!_cached_decoder_for_Validity) {
        _cached_decoder_for_Validity = function (el: _Element): Validity {
            let validFrom: OPTIONAL<Validity_validFrom> =
                Validity._default_value_for_validFrom;
            let validUntil: OPTIONAL<Validity_validUntil> =
                Validity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                validFrom: (_el: _Element): void => {
                    validFrom = $._decode_explicit<Validity_validFrom>(
                        () => _decode_Validity_validFrom
                    )(_el);
                },
                validUntil: (_el: _Element): void => {
                    validUntil = $._decode_explicit<Validity_validUntil>(
                        () => _decode_Validity_validUntil
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Validity,
                _extension_additions_list_spec_for_Validity,
                _root_component_type_list_2_spec_for_Validity,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Validity(
                validFrom,
                validUntil,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Validity(el);
}

let _cached_encoder_for_Validity: $.ASN1Encoder<Validity> | null = null;

/**
 * @summary Encodes a(n) Validity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity, encoded as an ASN.1 Element.
 */
export function _encode_Validity(
    value: Validity,
    elGetter: $.ASN1Encoder<Validity>
): _Element {
    if (!_cached_encoder_for_Validity) {
        _cached_encoder_for_Validity = function (
            value: Validity        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            $.deepEq(
                                value.validFrom,
                                Validity._default_value_for_validFrom
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Validity_validFrom,
                                      $.DER
                                  )(value.validFrom, $.DER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            $.deepEq(
                                value.validUntil,
                                Validity._default_value_for_validUntil
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Validity_validUntil,
                                      $.DER
                                  )(value.validUntil, $.DER),
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
    return _cached_encoder_for_Validity(value, elGetter);
}


/* eslint-enable */
