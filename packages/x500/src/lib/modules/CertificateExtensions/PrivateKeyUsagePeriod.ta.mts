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

/**
 * @summary PrivateKeyUsagePeriod
 * @description
 *
 * At least one of notBefore/notAfter (WITH COMPONENTS). Always
 * non-critical. GeneralizedTime. Period may differ from cert Validity;
 * typically the private-key sign period is shorter. Signing keys only.
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqualTo` (VS Code: `isEqual`),
 * `intersection`, and `union` derive new values instead of
 * mutating. `Date` plays the role of VS Code `Position`
 * (`notBefore` as `start`, `notAfter` as `end`). Both present bounds
 * are inclusive. An omitted bound is unbounded that side. Unlike
 * VS Code `Range`, inverted bounds are **not** swapped.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyUsagePeriod ::= SEQUENCE {
 *   notBefore  [0]  GeneralizedTime OPTIONAL,
 *   notAfter   [1]  GeneralizedTime OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., notBefore  PRESENT } |
 *    WITH COMPONENTS {..., notAfter   PRESENT } )
 * ```
 *
 */
export class PrivateKeyUsagePeriod {
    /**
     * @summary `notBefore`.
     * @description
     *
     * Earliest signing time. Omitted = no extra lower bound beyond cert
     * validity. At least one bound required.
     *
     * @public
     * @readonly
     */
    public readonly notBefore?: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `notAfter`.
     * @description
     *
     * Latest signing time. Omitted = no extra upper bound beyond cert
     * validity. Typically shorter than cert notAfter.
     *
     * @public
     * @readonly
     */
    public readonly notAfter?: OPTIONAL<GeneralizedTime>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        notBefore?: OPTIONAL<GeneralizedTime>,
        notAfter?: OPTIONAL<GeneralizedTime>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.notBefore = notBefore;
        this.notAfter = notAfter;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PrivateKeyUsagePeriod
     * @description
     *
     * This takes an `object` and converts it to a `PrivateKeyUsagePeriod`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateKeyUsagePeriod`.
     * @returns {PrivateKeyUsagePeriod}
     */
    public static _from_object(
        _o: { [_K in keyof PrivateKeyUsagePeriod]: PrivateKeyUsagePeriod[_K] }
    ): PrivateKeyUsagePeriod {
        return new PrivateKeyUsagePeriod(
            _o.notBefore,
            _o.notAfter,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary This period as a 1-D interval.
     * @returns {Interval} Inclusive `notBefore` / `notAfter` bounds.
     * @function
     * @author Cursor Grok 4.6
     */
    private _interval (): Interval {
        return {
            start: dateToBound(this.notBefore),
            end: dateToBound(this.notAfter),
        };
    }

    /**
     * @summary Build a period from 1-D interval bounds.
     * @param {Interval} interval Inclusive bounds.
     * @returns {PrivateKeyUsagePeriod} The corresponding period.
     * @function
     * @author Cursor Grok 4.6
     */
    private static _fromInterval (
        interval: Interval,
    ): PrivateKeyUsagePeriod {
        return new PrivateKeyUsagePeriod(
            boundToDate(interval.start),
            boundToDate(interval.end),
        );
    }

    /**
     * @summary Compare this period to another for ordering.
     * @description
     *
     * Orders by `notBefore`, then `notAfter`. Omitted bounds are
     * unbounded (−∞ start / +∞ end).
     *
     * @param {PrivateKeyUsagePeriod} other The comparefn `b` argument.
     * @returns {number} Negative, `0`, or positive.
     * @function
     * @author Cursor Grok 4.6
     */
    public compare (other: PrivateKeyUsagePeriod): number {
        return compareIntervals(this._interval(), other._interval());
    }

    /**
     * @summary Whether two periods have the same bounds.
     * @description
     *
     * Copies VS Code `Range.isEqual` (named `isEqualTo` like
     * `DayTimeBand`). Omitted bounds match omitted bounds.
     *
     * @param {PrivateKeyUsagePeriod} other The other period.
     * @returns {boolean} `true` iff both bounds match.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEqualTo (other: PrivateKeyUsagePeriod): boolean {
        return (this.compare(other) === 0);
    }

    /**
     * @summary Whether start is after end (matches no instant).
     * @description
     *
     * Copies VS Code `Range.isEmpty` in spirit. Emptiness here is
     * inverted bounds, not a zero-width range. A period covering a
     * single instant is not empty. A one-sided or unbounded period
     * is not empty.
     *
     * @returns {boolean} `true` iff both bounds are present and inverted.
     * @function
     * @author Cursor Grok 4.6
     */
    public isEmpty (): boolean {
        return isEmptyInterval(this._interval(), false);
    }

    /**
     * @summary Whether this period contains a date or another period.
     * @description
     *
     * Copies VS Code `Range.contains`. Closed interval. An omitted
     * bound does not constrain that side. An empty (inverted) period
     * contains nothing. An empty `other` period is not contained.
     *
     * @param {Date | PrivateKeyUsagePeriod} dateOrPeriod A date or period.
     * @returns {boolean} `true` iff every included instant is in this.
     * @function
     * @author Cursor Grok 4.6
     */
    public contains (
        dateOrPeriod: Date | PrivateKeyUsagePeriod,
    ): boolean {
        if (dateOrPeriod instanceof PrivateKeyUsagePeriod) {
            return containsInterval(
                this._interval(),
                dateOrPeriod._interval(),
                false,
            );
        }
        return containsPoint(
            this._interval(),
            BigInt(dateOrPeriod.getTime()),
            false,
        );
    }

    /**
     * @summary Whether this period shares any instant with `other`.
     * @param {PrivateKeyUsagePeriod} other The other period.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @function
     * @author Cursor Grok 4.6
     */
    public overlaps (other: PrivateKeyUsagePeriod): boolean {
        return overlapsInterval(this._interval(), other._interval(), false);
    }

    /**
     * @summary Overlap of this period and `other`, if any.
     * @description
     *
     * Copies VS Code `Range.intersection`. Returns `undefined` when
     * the periods do not share an instant.
     *
     * @param {PrivateKeyUsagePeriod} other The other period.
     * @returns {PrivateKeyUsagePeriod | undefined} The overlap, or `undefined`.
     * @function
     * @author Cursor Grok 4.6
     */
    public intersection (
        other: PrivateKeyUsagePeriod,
    ): PrivateKeyUsagePeriod | undefined {
        const overlap = intersectionOf(
            this._interval(),
            other._interval(),
            false,
        );
        return overlap
            ? PrivateKeyUsagePeriod._fromInterval(overlap)
            : undefined;
    }

    /**
     * @summary Smallest period covering this period and `other`.
     * @description
     *
     * Copies VS Code `Range.union`. Start is the earlier start; end
     * is the later end. A gap between the periods is filled.
     *
     * @param {PrivateKeyUsagePeriod} other The other period.
     * @returns {PrivateKeyUsagePeriod} One period spanning both.
     * @function
     * @author Cursor Grok 4.6
     */
    public union (other: PrivateKeyUsagePeriod): PrivateKeyUsagePeriod {
        return PrivateKeyUsagePeriod._fromInterval(
            unionOf(this._interval(), other._interval()),
        );
    }
}

/**
 * @summary The Leading Root Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notBefore",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "notAfter",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PrivateKeyUsagePeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivateKeyUsagePeriod: $.ComponentSpec[] = [];

let _cached_decoder_for_PrivateKeyUsagePeriod: $.ASN1Decoder<PrivateKeyUsagePeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyUsagePeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyUsagePeriod} The decoded data structure.
 */
export function _decode_PrivateKeyUsagePeriod(el: _Element): PrivateKeyUsagePeriod {
    if (!_cached_decoder_for_PrivateKeyUsagePeriod) {
        _cached_decoder_for_PrivateKeyUsagePeriod = function (
            el: _Element
        ): PrivateKeyUsagePeriod {
            let notBefore: OPTIONAL<GeneralizedTime>;
            let notAfter: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                notBefore: (_el: _Element): void => {
                    notBefore = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                notAfter: (_el: _Element): void => {
                    notAfter = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod,
                _extension_additions_list_spec_for_PrivateKeyUsagePeriod,
                _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateKeyUsagePeriod(
                notBefore,
                notAfter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateKeyUsagePeriod(el);
}

let _cached_encoder_for_PrivateKeyUsagePeriod: $.ASN1Encoder<PrivateKeyUsagePeriod> | null = null;

/**
 * @summary Encodes a(n) PrivateKeyUsagePeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyUsagePeriod, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyUsagePeriod(
    value: PrivateKeyUsagePeriod,
    elGetter: $.ASN1Encoder<PrivateKeyUsagePeriod>
): _Element {
    if (!_cached_encoder_for_PrivateKeyUsagePeriod) {
        _cached_encoder_for_PrivateKeyUsagePeriod = function (
            value: PrivateKeyUsagePeriod        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.notBefore === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.notBefore, $.DER),
                            /* IF_ABSENT  */ value.notAfter === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.notAfter, $.DER),
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
    return _cached_encoder_for_PrivateKeyUsagePeriod(value, elGetter);
}


/* eslint-enable */
