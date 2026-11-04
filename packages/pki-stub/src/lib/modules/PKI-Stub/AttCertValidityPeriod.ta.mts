/* eslint-disable */
import {
    type GeneralizedTime,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * JSON Encoding Rules encoding of {@link AttCertValidityPeriod}.
 */
export type AttCertValidityPeriodJSON = {
    notBeforeTime: string;
    notAfterTime: string;
};

/**
 * @summary AttCertValidityPeriod
 * @description
 *
 * Inclusive timespan during which an attribute certificate is considered valid.
 * Both bounds are `GeneralizedTime` (not the {@link Time} CHOICE used in
 * public-key certificates, so there is no UTCTime year-window).
 *
 * Range algebra copies what works from the VS Code `Range` API:
 * immutable bounds; `contains`, `isEqual` / `isEqualTo`,
 * `intersection`, and `union` derive new values instead of
 * mutating. `Date` plays the role of VS Code `Position`
 * (`notBeforeTime` as `start`, `notAfterTime` as `end`). Both bounds
 * are inclusive. Unlike VS Code `Range`, inverted bounds are **not**
 * swapped.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertValidityPeriod ::= SEQUENCE {
 *   notBeforeTime  GeneralizedTime,
 *   notAfterTime   GeneralizedTime,
 *   ... }
 * ```
 *
 */
export class AttCertValidityPeriod {
    /**
     * @summary `notBeforeTime`.
     * @public
     * @readonly
     */
    public readonly notBeforeTime: GeneralizedTime;

    /**
     * @summary `notAfterTime`.
     * @public
     * @readonly
     */
    public readonly notAfterTime: GeneralizedTime;

    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        notBeforeTime: GeneralizedTime,
        notAfterTime: GeneralizedTime,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.notBeforeTime = notBeforeTime;
        this.notAfterTime = notAfterTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AttCertValidityPeriod
     * @description
     *
     * This takes an `object` and converts it to a `AttCertValidityPeriod`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertValidityPeriod`.
     * @returns {AttCertValidityPeriod}
     */
    public static _from_object(
        _o: { [_K in keyof AttCertValidityPeriod]: AttCertValidityPeriod[_K] }
    ): AttCertValidityPeriod {
        return new AttCertValidityPeriod(
            _o.notBeforeTime,
            _o.notAfterTime,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Convert this `AttCertValidityPeriod` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `GeneralizedTime` values are encoded as ISO 8601 timestamps.
     * Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): AttCertValidityPeriodJSON {
        return {
            notBeforeTime: this.notBeforeTime.toISOString(),
            notAfterTime: this.notAfterTime.toISOString(),
        };
    }

    /**
     * @summary Decode a JSON encoding of an `AttCertValidityPeriod` loosely following ITU-T X.697 (JER)
     * @param json The JSON Encoding Rules encoding of this value
     * @returns The decoded `AttCertValidityPeriod`
     * @function
     * @public
     * @static
     */
    public static fromJSON(json: AttCertValidityPeriodJSON): AttCertValidityPeriod {
        if (
            (typeof json !== "object")
            || (json === null)
            || (typeof json.notBeforeTime !== "string")
            || (typeof json.notAfterTime !== "string")
        ) {
            throw new Error("invalid AttCertValidityPeriod json");
        }
        const notBeforeTime = new Date(json.notBeforeTime);
        const notAfterTime = new Date(json.notAfterTime);
        if (
            Number.isNaN(notBeforeTime.valueOf())
            || Number.isNaN(notAfterTime.valueOf())
        ) {
            throw new Error("invalid AttCertValidityPeriod json");
        }
        return new AttCertValidityPeriod(notBeforeTime, notAfterTime);
    }

    /**
     * @summary `true` if `notBeforeTime` and `notAfterTime` are the same instant.
     * @description
     *
     * Copies VS Code `Range.isEmpty` for a zero-width closed interval.
     *
     * @returns {boolean} `true` if `notBeforeTime` and `notAfterTime`
     * are the same instant.
     * @method
     */
    public get isEmpty(): boolean {
        return this.notBeforeTime.getTime() === this.notAfterTime.getTime();
    }

    /**
     * @summary Check if a date or period is contained in this period.
     * @description
     *
     * Copies VS Code `Range.contains`. Both bounds are inclusive.
     * When given another `AttCertValidityPeriod`, both of its bounds
     * must fall within this period.
     *
     * @param {Date | AttCertValidityPeriod} dateOrPeriod A date or period.
     * @returns {boolean} `true` if the date or period is inside or equal.
     * @method
     */
    public contains(dateOrPeriod: Date | AttCertValidityPeriod): boolean {
        if (dateOrPeriod instanceof AttCertValidityPeriod) {
            if (dateOrPeriod.notBeforeTime.getTime() > dateOrPeriod.notAfterTime.getTime()) {
                return false;
            }
            return (
                this.contains(dateOrPeriod.notBeforeTime)
                && this.contains(dateOrPeriod.notAfterTime)
            );
        }
        const t = dateOrPeriod.getTime();
        return (
            (t >= this.notBeforeTime.getTime())
            && (t <= this.notAfterTime.getTime())
        );
    }

    /**
     * @summary Check if `other` equals this period.
     * @description
     *
     * Copies VS Code `Range.isEqual`. Compared as instants.
     *
     * @param {AttCertValidityPeriod} other A period.
     * @returns {boolean} `true` when both bounds match as instants.
     * @method
     */
    public isEqual(other: AttCertValidityPeriod): boolean {
        return (
            (this.notBeforeTime.getTime() === other.notBeforeTime.getTime())
            && (this.notAfterTime.getTime() === other.notAfterTime.getTime())
        );
    }

    /**
     * @summary Check if `other` equals this period.
     * @description
     *
     * Alias of {@link AttCertValidityPeriod.isEqual} using the
     * `isEqualTo` name from this repo's `DayTimeBand` API.
     *
     * @param {AttCertValidityPeriod} other A period.
     * @returns {boolean} `true` when both bounds match as instants.
     * @method
     */
    public isEqualTo(other: AttCertValidityPeriod): boolean {
        return this.isEqual(other);
    }

    /**
     * @summary Whether this period shares any instant with `other`.
     * @param {AttCertValidityPeriod} other A period.
     * @returns {boolean} `true` iff the closed ranges intersect.
     * @method
     */
    public overlaps(other: AttCertValidityPeriod): boolean {
        return this.intersection(other) !== undefined;
    }

    /**
     * @summary Intersect `other` with this period.
     * @description
     *
     * Copies VS Code `Range.intersection`.
     *
     * @param {AttCertValidityPeriod} other A period.
     * @returns {AttCertValidityPeriod | undefined} The overlap, or `undefined`.
     * @method
     */
    public intersection(other: AttCertValidityPeriod): AttCertValidityPeriod | undefined {
        const startMs = Math.max(
            this.notBeforeTime.getTime(),
            other.notBeforeTime.getTime(),
        );
        const endMs = Math.min(
            this.notAfterTime.getTime(),
            other.notAfterTime.getTime(),
        );
        if (startMs > endMs) {
            return undefined;
        }
        return new AttCertValidityPeriod(new Date(startMs), new Date(endMs));
    }

    /**
     * @summary Compute the union of `other` with this period.
     * @description
     *
     * Copies VS Code `Range.union`.
     *
     * @param {AttCertValidityPeriod} other A period.
     * @returns {AttCertValidityPeriod} From the earlier start to the later end.
     * @method
     */
    public union(other: AttCertValidityPeriod): AttCertValidityPeriod {
        const startMs = Math.min(
            this.notBeforeTime.getTime(),
            other.notBeforeTime.getTime(),
        );
        const endMs = Math.max(
            this.notAfterTime.getTime(),
            other.notAfterTime.getTime(),
        );
        return new AttCertValidityPeriod(new Date(startMs), new Date(endMs));
    }

    /**
     * @summary ISO 8601 time interval for this validity period
     * @description
     *
     * `notBeforeTime/notAfterTime`, each an ISO 8601 instant in UTC. Both
     * bounds are inclusive. Unrecognized extensions are omitted.
     *
     * @returns The interval `start/end`
     * @function
     * @public
     */
    public toString(): string {
        const start: string = this.notBeforeTime.toISOString();
        const end: string = this.notAfterTime.toISOString();
        return `${start}/${end}`;
    }
}

/**
 * @summary The Leading Root Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttCertValidityPeriod: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "notBeforeTime",
            false,
            $.hasTag(_TagClass.universal, 24)
        ),
        new $.ComponentSpec(
            "notAfterTime",
            false,
            $.hasTag(_TagClass.universal, 24)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttCertValidityPeriod: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttCertValidityPeriod: $.ComponentSpec[] =
    [];


/**
 * @summary Decodes an ASN.1 element into a(n) AttCertValidityPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertValidityPeriod} The decoded data structure.
 */
export function _decode_AttCertValidityPeriod(el: _Element): AttCertValidityPeriod {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "AttCertValidityPeriod contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    sequence[0].name = "notBeforeTime";
    sequence[1].name = "notAfterTime";
    let notBeforeTime!: GeneralizedTime;
    let notAfterTime!: GeneralizedTime;
    notBeforeTime = $._decodeGeneralizedTime(sequence[0]);
    notAfterTime = $._decodeGeneralizedTime(sequence[1]);
    return new AttCertValidityPeriod(
        notBeforeTime,
        notAfterTime,
        sequence.slice(2)
    );
}


/**
 * @summary Encodes a(n) AttCertValidityPeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertValidityPeriod, encoded as an ASN.1 Element.
 */
export function _encode_AttCertValidityPeriod(value: AttCertValidityPeriod,
    _elGetter: $.ASN1Encoder<AttCertValidityPeriod>): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ $._encodeGeneralizedTime(
            value.notBeforeTime,
            $.BER
        ),
        /* REQUIRED   */ $._encodeGeneralizedTime(
            value.notAfterTime,
            $.BER
        ),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
