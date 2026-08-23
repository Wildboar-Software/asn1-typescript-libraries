/* eslint-disable */
import {
    GeneralizedTime,
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
 * Timespan within which an attribute certificate is valid.
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
    constructor(
        /**
         * @summary `notBeforeTime`.
         * @public
         * @readonly
         */
        readonly notBeforeTime: GeneralizedTime,
        /**
         * @summary `notAfterTime`.
         * @public
         * @readonly
         */
        readonly notAfterTime: GeneralizedTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
