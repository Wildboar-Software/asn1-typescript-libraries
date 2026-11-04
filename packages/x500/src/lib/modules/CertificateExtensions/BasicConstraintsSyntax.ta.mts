/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    type INTEGER,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { integerToJSON, integerToString } from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link BasicConstraintsSyntax}.
 */
export type BasicConstraintsSyntaxJSON = {
    cA?: boolean;
    pathLenConstraint?: number | string;
};

/**
 * @summary BasicConstraintsSyntax
 * @description
 *
 * `cA` DEFAULT FALSE. `pathLenConstraint` only if `cA` TRUE, else absent.
 * 0 = this CA may issue only end-entity certs (no subordinate CAs). Absent
 * pathLen = no path-length limit from this cert. CA certs shall include this
 * with `cA` TRUE and critical (v3). Empty SEQUENCE (default `cA` FALSE) marks
 * an end entity. Missing extension entirely also means end-entity.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicConstraintsSyntax ::= SEQUENCE {
 *   cA                 BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint  INTEGER(0..MAX) OPTIONAL,
 *   ... }
 * ```
 *
 */
export class BasicConstraintsSyntax {
    /**
     * @summary `cA`.
     * @description
     *
     * DEFAULT FALSE. TRUE required (and critical) on CA certs. keyCertSign
     * requires this TRUE.
     *
     * @public
     * @readonly
     */
    public readonly cA?: OPTIONAL<BOOLEAN>;
    /**
     * @summary `pathLenConstraint`.
     * @description
     *
     * Only if cA TRUE. 0 = issue end-entity certs only. Absent = no limit
     * from this cert.
     *
     * @public
     * @readonly
     */
    public readonly pathLenConstraint?: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        cA?: OPTIONAL<BOOLEAN>,
        pathLenConstraint?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cA = cA;
        this.pathLenConstraint = pathLenConstraint;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a BasicConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `BasicConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicConstraintsSyntax`.
     * @returns {BasicConstraintsSyntax}
     */
    public static _from_object(
        _o: { [_K in keyof BasicConstraintsSyntax]: BasicConstraintsSyntax[_K] }
    ): BasicConstraintsSyntax {
        return new BasicConstraintsSyntax(
            _o.cA,
            _o.pathLenConstraint,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `cA`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_cA(): BOOLEAN {
        return false;
    }

    /**
     * @summary ASN.1 value notation for these basic constraints
     * @description
     *
     * DEFAULT `cA` FALSE is omitted. Unrecognized extensions are omitted.
     *
     * @returns `{ cA TRUE, pathLenConstraint 0 }` or a subset
     * @function
     * @public
     */
    public toString(): string {
        const parts: string[] = [];
        if (this.cA === true) {
            parts.push("cA TRUE");
        }
        if (this.pathLenConstraint !== undefined) {
            parts.push(`pathLenConstraint ${integerToString(this.pathLenConstraint)}`);
        }
        return parts.length ? `{ ${parts.join(", ")} }` : "{}";
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * DEFAULT `cA` FALSE is omitted. Unrecognized extensions are not
     * represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): BasicConstraintsSyntaxJSON {
        const json: BasicConstraintsSyntaxJSON = {};
        if (this.cA === true) {
            json.cA = true;
        }
        if (this.pathLenConstraint !== undefined) {
            json.pathLenConstraint = integerToJSON(this.pathLenConstraint);
        }
        return json;
    }
}

/**
 * @summary The Leading Root Component Types of BasicConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BasicConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cA",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        "pathLenConstraint",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of BasicConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BasicConstraintsSyntax: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BasicConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BasicConstraintsSyntax: $.ComponentSpec[] = [];

let _cached_decoder_for_BasicConstraintsSyntax: $.ASN1Decoder<BasicConstraintsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BasicConstraintsSyntax} The decoded data structure.
 */
export function _decode_BasicConstraintsSyntax(el: _Element): BasicConstraintsSyntax {
    if (!_cached_decoder_for_BasicConstraintsSyntax) {
        _cached_decoder_for_BasicConstraintsSyntax = function (
            el: _Element
        ): BasicConstraintsSyntax {
            let cA: OPTIONAL<BOOLEAN> =
                BasicConstraintsSyntax._default_value_for_cA;
            let pathLenConstraint: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                cA: (_el: _Element): void => {
                    cA = $._decodeBoolean(_el);
                },
                pathLenConstraint: (_el: _Element): void => {
                    pathLenConstraint = $._decodeInteger(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BasicConstraintsSyntax,
                _extension_additions_list_spec_for_BasicConstraintsSyntax,
                _root_component_type_list_2_spec_for_BasicConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BasicConstraintsSyntax(
                cA,
                pathLenConstraint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BasicConstraintsSyntax(el);
}

let _cached_encoder_for_BasicConstraintsSyntax: $.ASN1Encoder<BasicConstraintsSyntax> | null = null;

/**
 * @summary Encodes a(n) BasicConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_BasicConstraintsSyntax(
    value: BasicConstraintsSyntax,
    elGetter: $.ASN1Encoder<BasicConstraintsSyntax>
): _Element {
    if (!_cached_encoder_for_BasicConstraintsSyntax) {
        _cached_encoder_for_BasicConstraintsSyntax = function (
            value: BasicConstraintsSyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.cA === undefined ||
                            $.deepEq(
                                value.cA,
                                BasicConstraintsSyntax._default_value_for_cA
                            )
                                ? undefined
                                : $._encodeBoolean(value.cA, $.DER),
                            /* IF_ABSENT  */ value.pathLenConstraint ===
                            undefined
                                ? undefined
                                : $._encodeInteger(
                                      value.pathLenConstraint,
                                      $.DER
                                  ),
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
    return _cached_encoder_for_BasicConstraintsSyntax(value, elGetter);
}


/* eslint-enable */
