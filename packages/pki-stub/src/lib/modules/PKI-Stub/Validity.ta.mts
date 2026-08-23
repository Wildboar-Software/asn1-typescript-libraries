/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../PKI-Stub/Time.ta.mjs";
import getDateFromTime from "../../../getDateFromTime.mjs";
import getTimeFromDate from "../../../getTimeFromDate.mjs";
import {
    timeFromJSON,
    timeToJSON,
    type TimeJSON,
} from "../../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link Validity}.
 */
export type ValidityJSON = {
    notBefore: TimeJSON;
    notAfter: TimeJSON;
};

/**
 * @summary Validity
 * @description
 *
 * Inclusive interval during which the CA warrants that it will maintain status
 * information for the public-key certificate. `notBefore` and `notAfter` are
 * {@link Time} values; UTCTime years must be expanded before comparison (see
 * {@link Time}).
 *
 * Treated analogously to VS Code's `Range`, with `Date` playing the role of
 * `Position` (`notBefore` as `start`, `notAfter` as `end`). Both bounds are
 * inclusive.
 *
 * ### ASN.1 Definition:
 */
export class Validity {
    constructor(
        /**
         * @summary `notBefore`.
         * @public
         * @readonly
         */
        readonly notBefore: Time,
        /**
         * @summary `notAfter`.
         * @public
         * @readonly
         */
        readonly notAfter: Time,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
            _o.notBefore,
            _o.notAfter,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Convert this `Validity` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Each `Time` alternative is encoded as a wrapped choice whose value is an
     * ISO 8601 timestamp. Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): ValidityJSON {
        return {
            notBefore: timeToJSON(this.notBefore),
            notAfter: timeToJSON(this.notAfter),
        };
    }

    /**
     * @summary Decode a JSON encoding of a `Validity` loosely following ITU-T X.697 (JER)
     * @param json The JSON Encoding Rules encoding of this value
     * @returns The decoded `Validity`
     * @function
     * @public
     * @static
     */
    public static fromJSON(json: ValidityJSON): Validity {
        if (
            (typeof json !== "object")
            || (json === null)
        ) {
            throw new Error("invalid Validity json");
        }
        return new Validity(
            timeFromJSON(json.notBefore),
            timeFromJSON(json.notAfter),
        );
    }

    /**
     * @summary `true` if `notBefore` and `notAfter` are the same instant.
     * @returns {boolean} `true` if `notBefore` and `notAfter` are the same instant.
     * @method
     */
    public get isEmpty(): boolean {
        return this.notBeforeAsDate().getTime() === this.notAfterAsDate().getTime();
    }

    /**
     * @summary Convert `notBefore` to a `Date`.
     * @returns {Date} The `Date` representation of `notBefore`.
     * @method
     */
    public notBeforeAsDate(): Date {
        return getDateFromTime(this.notBefore);
    }

    /**
     * @summary Convert `notAfter` to a `Date`.
     * @returns {Date} The `Date` representation of `notAfter`.
     * @method
     */
    public notAfterAsDate(): Date {
        return getDateFromTime(this.notAfter);
    }

    /**
     * @summary Check if a date or validity period is contained in this period.
     * @description
     *
     * Both bounds are inclusive. When given another `Validity`, both of its
     * bounds must fall within this period.
     *
     * @param {Date | Validity} dateOrValidity A date or validity period.
     * @returns {boolean} `true` if the date or period is inside or equal to this period.
     * @method
     */
    public contains(dateOrValidity: Date | Validity): boolean {
        if (dateOrValidity instanceof Validity) {
            return (
                this.contains(dateOrValidity.notBeforeAsDate())
                && this.contains(dateOrValidity.notAfterAsDate())
            );
        }
        const t = dateOrValidity.getTime();
        return (
            (t >= this.notBeforeAsDate().getTime())
            && (t <= this.notAfterAsDate().getTime())
        );
    }

    /**
     * @summary Check if `other` equals this validity period.
     * @param {Validity} other A validity period.
     * @returns {boolean} `true` when both bounds match as instants.
     * @method
     */
    public isEqual(other: Validity): boolean {
        return (
            (this.notBeforeAsDate().getTime() === other.notBeforeAsDate().getTime())
            && (this.notAfterAsDate().getTime() === other.notAfterAsDate().getTime())
        );
    }

    /**
     * @summary Intersect `other` with this period.
     * @param {Validity} other A validity period.
     * @returns {Validity | undefined} The overlap, or `undefined` if there is none.
     * @method
     */
    public intersection(other: Validity): Validity | undefined {
        const startMs = Math.max(
            this.notBeforeAsDate().getTime(),
            other.notBeforeAsDate().getTime(),
        );
        const endMs = Math.min(
            this.notAfterAsDate().getTime(),
            other.notAfterAsDate().getTime(),
        );
        if (startMs > endMs) {
            return undefined;
        }
        return new Validity(
            getTimeFromDate(new Date(startMs)),
            getTimeFromDate(new Date(endMs)),
        );
    }

    /**
     * @summary Compute the union of `other` with this period.
     * @param {Validity} other A validity period.
     * @returns {Validity} A period from the earlier `notBefore` to the later `notAfter`.
     * @method
     */
    public union(other: Validity): Validity {
        const startMs = Math.min(
            this.notBeforeAsDate().getTime(),
            other.notBeforeAsDate().getTime(),
        );
        const endMs = Math.max(
            this.notAfterAsDate().getTime(),
            other.notAfterAsDate().getTime(),
        );
        return new Validity(
            getTimeFromDate(new Date(startMs)),
            getTimeFromDate(new Date(endMs)),
        );
    }

    /**
     * @summary Derive a new validity period from this one.
     * @param {Date} [notBefore] New start date; defaults to the current `notBefore`.
     * @param {Date} [notAfter] New end date; defaults to the current `notAfter`.
     * @returns {Validity} A validity period with the given bounds, or `this` if unchanged.
     * @method
     */
    public with(notBefore?: Date, notAfter?: Date): Validity {
        return new Validity(
            notBefore !== undefined
                ? getTimeFromDate(notBefore)
                : this.notBefore,
            notAfter !== undefined
                ? getTimeFromDate(notAfter)
                : this.notAfter,
        );
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
export const _root_component_type_list_1_spec_for_Validity: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "notBefore",
            false,
            $.hasAnyTag
        ),
        new $.ComponentSpec(
            "notAfter",
            false,
            $.hasAnyTag
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
export const _root_component_type_list_2_spec_for_Validity: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Validity: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) Validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity} The decoded data structure.
 */
export function _decode_Validity(el: _Element): Validity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "Validity contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    sequence[0].name = "notBefore";
    sequence[1].name = "notAfter";
    let notBefore!: Time;
    let notAfter!: Time;
    notBefore = _decode_Time(sequence[0]);
    notAfter = _decode_Time(sequence[1]);
    return new Validity(notBefore, notAfter, sequence.slice(2));
}

/**
 * @summary Encodes a(n) Validity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity, encoded as an ASN.1 Element.
 */
export function _encode_Validity(value: Validity,
    _elGetter: $.ASN1Encoder<Validity>): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ _encode_Time(
            value.notBefore,
            $.BER
        ),
        /* REQUIRED   */ _encode_Time(
            value.notAfter,
            $.BER
        ),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
