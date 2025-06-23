/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BasicConstraintsSyntax
 * @description
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
 * @class
 */
export class BasicConstraintsSyntax {
    constructor(
        /**
         * @summary `cA`.
         * @public
         * @readonly
         */
        readonly cA: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pathLenConstraint`.
         * @public
         * @readonly
         */
        readonly pathLenConstraint: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
    public static get _default_value_for_cA() {
        return false;
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
export function _decode_BasicConstraintsSyntax(el: _Element) {
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
) {
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
