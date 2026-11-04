/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Interval,
    adjacencyOf,
    boundToIntegerBytes,
    compareIntervals,
    containsInterval,
    containsPoint,
    euclideanMod,
    integerBytesToBound,
    integerToBound,
    intersectionOf,
    isEmptyInterval,
    overlapsInterval,
    sameIntegerBytes,
    unionOf,
} from "../../utils/rangeAlgebra.mjs";
import {
    integerBytesToJSON,
    integerBytesToString,
} from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link NumberRange}.
 */
export type NumberRangeJSON = {
    startingNumber?: number | string;
    endingNumber?: number | string;
    modulus?: number | string;
};

/**
 * @summary NumberRange
 * @description
 *
 * CRL-scope numeric range. After optional `modulus`, in-scope if ≥
 * `startingNumber` (when present) and < `endingNumber` (when present) —
 * ending is exclusive (X.509). Omitted bound = unbounded that side. Serials
 * unique per issuer, not sequential. Contrast CertificateGroupNumberRange
 * (inclusive).
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. The integer (after optional modulus) plays the role of
 * VS Code `Position`. Unlike VS Code `Range`, inverted bounds are
 * **not** swapped, and `endingNumber` is exclusive. `intersection`
 * and `union` require the same `modulus` (including both omitted);
 * differing moduli cannot share one modular line.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER OPTIONAL,
 *   endingNumber    [1]  INTEGER OPTIONAL,
 *   modulus              INTEGER OPTIONAL,
 *   ... }
 * ```
 *
 */
export class NumberRange {
    /**
     * @summary `startingNumber`.
     * @description
     *
     * Inclusive lower bound after optional modulus. Omitted = no lower
     * bound.
     *
     * @public
     * @readonly
     */
    public readonly startingNumber?: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `endingNumber`.
     * @description
     *
     * Exclusive upper bound after optional modulus (X.509: less than).
     * Omitted = no upper bound.
     *
     * @public
     * @readonly
     */
    public readonly endingNumber?: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `modulus`.
     * @description
     *
     * If present, reduce the serial/key-id modulo this before range check.
     *
     * @public
     * @readonly
     */
    public readonly modulus?: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        startingNumber?: OPTIONAL<OCTET_STRING>,
        endingNumber?: OPTIONAL<OCTET_STRING>,
        modulus?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.startingNumber = startingNumber;
        this.endingNumber = endingNumber;
        this.modulus = modulus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NumberRange
     * @description
     *
     * This takes an `object` and converts it to a `NumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberRange`.
     * @returns {NumberRange}
     */
    public static _from_object(
        _o: { [_K in keyof NumberRange]: NumberRange[_K] }
    ): NumberRange {
        return new NumberRange(
            _o.startingNumber,
            _o.endingNumber,
            _o.modulus,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary This range as a 1-D interval in reduced space.
     * @description
     *
     * Bounds are the encoded `startingNumber` / `endingNumber`
     * themselves (already in post-modulus space per X.509).
     *
     * @returns {Interval} Half-open `[start, end)` bounds.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval {
        return {
            start: integerBytesToBound(this.startingNumber),
            end: integerBytesToBound(this.endingNumber),
        };
    }

    /**
     * @summary Build a range from 1-D interval bounds.
     * @param {Interval} interval Half-open bounds.
     * @param {OCTET_STRING} [modulus] Shared modulus, if any.
     * @returns {NumberRange} The corresponding range.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (
        interval: Interval,
        modulus?: OCTET_STRING,
    ): NumberRange {
        return new NumberRange(
            boundToIntegerBytes(interval.start),
            boundToIntegerBytes(interval.end),
            modulus,
        );
    }

    /**
     * @summary Whether `other` uses the same modulus as this range.
     * @param {NumberRange} other The other range.
     * @returns {boolean} `true` iff both omitted or equal as integers.
     * @function
     * @author Cursor Grok 4.6
     */
    public sameModulus (other: NumberRange): boolean {
        return sameIntegerBytes(this.modulus, other.modulus);
    }

    /**
     * @summary Compare this range to another for ordering.
     * @description
     *
     * Orders by start, then end, then modulus (omitted first).
     *
     * @param {NumberRange} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: NumberRange): number {
        const timeDiff = compareIntervals(
            this._interval(),
            other._interval(),
        );
        if (timeDiff !== 0) {
            return timeDiff;
        }
        const aMod = integerBytesToBound(this.modulus);
        const bMod = integerBytesToBound(other.modulus);
        if (aMod === undefined && bMod === undefined) {
            return 0;
        }
        if (aMod === undefined) {
            return -1;
        }
        if (bMod === undefined) {
            return 1;
        }
        if (aMod < bMod) {
            return -1;
        }
        if (aMod > bMod) {
            return 1;
        }
        return 0;
    }

    /**
     * @summary Whether two ranges have the same bounds and modulus.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`). Compared numerically, not by DER encoding.
     *
     * @param {NumberRange} other The other range.
     * @returns {boolean} `true` iff bounds and modulus match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: NumberRange): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether the half-open interval matches no integer.
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. Empty when both
     * bounds are present and `startingNumber >= endingNumber`
     * (exclusive end). One-sided ranges are not empty.
     *
     * @returns {boolean} `true` iff the reduced interval is empty.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return isEmptyInterval(this._interval(), true);
    }

    /**
     * @summary Reduce `n` by this range's modulus, if any.
     * @param {bigint} n The integer.
     * @returns {bigint} `n` modulo `modulus`, or `n`.
     * @function
     * @author Cursor Grok 4.6
     */
    private _reduce (n: bigint): bigint {
        const modulus = integerBytesToBound(this.modulus);
        return (modulus === undefined) ? n : euclideanMod(n, modulus);
    }

    /**
     * @summary Whether this range contains an integer or another range.
     * @description
     *
     * Copies VS Code `Range.contains`. After optional modulus, a
     * point is in-scope if ≥ `startingNumber` (when present) and
     * < `endingNumber` (when present). Another `NumberRange` is
     * contained only when moduli match and its reduced interval is
     * a subset.
     *
     * @param {INTEGER | OCTET_STRING | NumberRange} valueOrRange
     * A serial, INTEGER encoding, or range.
     * @returns {boolean} `true` iff every included integer is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (
        valueOrRange: INTEGER | OCTET_STRING | NumberRange,
    ): boolean {
        if (valueOrRange instanceof NumberRange) {
            if (!this.sameModulus(valueOrRange)) {
                return false;
            }
            return containsInterval(
                this._interval(),
                valueOrRange._interval(),
                true,
            );
        }
        const n = (valueOrRange instanceof Uint8Array)
            ? integerBytesToBound(valueOrRange)
            : integerToBound(valueOrRange);
        if (n === undefined) {
            return false;
        }
        return containsPoint(this._interval(), this._reduce(n), true);
    }

    /**
     * @summary Whether this range shares any integer with `other`.
     * @description
     *
     * False when moduli differ: the ranges are not on the same
     * modular line.
     *
     * @param {NumberRange} other The other range.
     * @returns {boolean} `true` iff the half-open ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: NumberRange): boolean {
        if (!this.sameModulus(other)) {
            return false;
        }
        return overlapsInterval(this._interval(), other._interval(), true);
    }

    /**
     * @summary Overlap of this range and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`. Returns `undefined` when
     * moduli differ or the half-open intervals do not overlap.
     *
     * @param {NumberRange} other The other range.
     * @returns {NumberRange | undefined} The overlap, or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (other: NumberRange): NumberRange | undefined {
        if (!this.sameModulus(other)) {
            return undefined;
        }
        const overlap = intersectionOf(
            this._interval(),
            other._interval(),
            true,
        );
        return overlap
            ? NumberRange._fromInterval(overlap, this.modulus)
            : undefined;
    }

    /**
     * @summary Smallest range covering this range and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. A gap is filled. Throws if the
     * moduli differ, because the result would not be one modular
     * `NumberRange`.
     *
     * @param {NumberRange} other The other range.
     * @returns {NumberRange} One range spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (other: NumberRange): NumberRange {
        if (!this.sameModulus(other)) {
            throw new Error("NumberRange.union: modulus values differ");
        }
        return this.merge(other);
    }

    /**
     * @summary Whether `other` abuts this range with no gap or overlap.
     * @description
     *
     * Adjacent means one exclusive end equals the other's start.
     * False when moduli differ.
     *
     * @param {NumberRange} other The other range.
     * @returns {number} `-1` if `other` is adjacent below; `1` if
     * adjacent above; `0` if not adjacent.
     * @function
     * @author Cursor Grok 4.6
     */
    public isAdjacentTo (other: NumberRange): -1 | 0 | 1 {
        if (!this.sameModulus(other)) {
            return 0;
        }
        return adjacencyOf(this._interval(), other._interval(), true);
    }

    /**
     * @summary Covering interval of this range and `other`.
     * @description
     *
     * Assumes the same modulus. A gap is filled.
     *
     * @param {NumberRange} other The other range.
     * @returns {NumberRange} One range spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public merge (other: NumberRange): NumberRange {
        if (!this.sameModulus(other)) {
            throw new Error("NumberRange.merge: modulus values differ");
        }
        return NumberRange._fromInterval(
            unionOf(this._interval(), other._interval()),
            this.modulus,
        );
    }

    /**
     * @summary Flatten overlapping and adjacent `NumberRange`s.
     * @description
     *
     * Sorts by start, end, then modulus. Merges a pair only when
     * they share a modulus and `overlap` or `isAdjacentTo`. Empty
     * ranges are dropped. Ranges with different moduli stay
     * separate even if their numeric bounds overlap.
     *
     * @param {readonly NumberRange[]} ranges Any order.
     * @returns {NumberRange[]} Disjoint, non-adjacent ranges, sorted.
     * @function
     * @author Cursor Grok 4.6
     */
    public static flatten (ranges: readonly NumberRange[]): NumberRange[] {
        const sorted = ranges
            .filter((range): boolean => !range.isEmpty())
            .sort((a, b) => a.compare(b));
        const count = sorted.length;
        if (count === 0) {
            return [];
        }
        if (count === 1) {
            return [ sorted[0] ];
        }
        const out: NumberRange[] = [ sorted[0] ];
        for (let i = 1; i < count; i++) {
            const last = out[out.length - 1];
            const next = sorted[i];
            if (
                last.sameModulus(next)
                && (last.overlaps(next) || last.isAdjacentTo(next))
            ) {
                out[out.length - 1] = last.merge(next);
            } else {
                out.push(next);
            }
        }
        return out;
    }

    /**
     * @summary Half-open integer interval for this range
     * @description
     *
     * `[startingNumber,endingNumber)` with an omitted bound left empty.
     * When `modulus` is present, ` mod N` is appended. Unrecognized
     * extensions are omitted.
     *
     * @returns The interval, optionally with a modulus
     * @function
     * @public
     */
    public toString(): string {
        const start = integerBytesToString(this.startingNumber);
        const end = integerBytesToString(this.endingNumber);
        let text = `[${start},${end})`;
        if (this.modulus !== undefined) {
            text += ` mod ${integerBytesToString(this.modulus)}`;
        }
        return text;
    }

    /**
     * @summary Convert this `NumberRange` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * INTEGER components are JSON numbers, or decimal strings when they
     * are not JSON-safe. Absent optional components are omitted.
     * Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): NumberRangeJSON {
        const json: NumberRangeJSON = {};
        const startingNumber = integerBytesToJSON(this.startingNumber);
        const endingNumber = integerBytesToJSON(this.endingNumber);
        const modulus = integerBytesToJSON(this.modulus);
        if (startingNumber !== undefined) {
            json.startingNumber = startingNumber;
        }
        if (endingNumber !== undefined) {
            json.endingNumber = endingNumber;
        }
        if (modulus !== undefined) {
            json.modulus = modulus;
        }
        return json;
    }
}

/**
 * @summary The Leading Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startingNumber",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "endingNumber",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "modulus",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumberRange: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumberRange: $.ComponentSpec[] = [];

let _cached_decoder_for_NumberRange: $.ASN1Decoder<NumberRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberRange} The decoded data structure.
 */
export function _decode_NumberRange(el: _Element): NumberRange {
    if (!_cached_decoder_for_NumberRange) {
        _cached_decoder_for_NumberRange = function (el: _Element): NumberRange {
            let startingNumber: OPTIONAL<OCTET_STRING>;
            let endingNumber: OPTIONAL<OCTET_STRING>;
            let modulus: OPTIONAL<OCTET_STRING>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                startingNumber: (_el: _Element): void => {
                    startingNumber = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeBigInt
                    )(_el);
                },
                endingNumber: (_el: _Element): void => {
                    endingNumber = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeBigInt
                    )(_el);
                },
                modulus: (_el: _Element): void => {
                    modulus = $._decodeBigInt(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumberRange,
                _extension_additions_list_spec_for_NumberRange,
                _root_component_type_list_2_spec_for_NumberRange,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NumberRange(
                startingNumber,
                endingNumber,
                modulus,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NumberRange(el);
}

let _cached_encoder_for_NumberRange: $.ASN1Encoder<NumberRange> | null = null;

/**
 * @summary Encodes a(n) NumberRange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberRange, encoded as an ASN.1 Element.
 */
export function _encode_NumberRange(
    value: NumberRange,
    elGetter: $.ASN1Encoder<NumberRange>
): _Element {
    if (!_cached_encoder_for_NumberRange) {
        _cached_encoder_for_NumberRange = function (
            value: NumberRange        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startingNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBigInt,
                                      $.DER
                                  )(value.startingNumber, $.DER),
                            /* IF_ABSENT  */ value.endingNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBigInt,
                                      $.DER
                                  )(value.endingNumber, $.DER),
                            /* IF_ABSENT  */ value.modulus === undefined
                                ? undefined
                                : $._encodeBigInt(value.modulus, $.DER),
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
    return _cached_encoder_for_NumberRange(value, elGetter);
}


/* eslint-enable */
