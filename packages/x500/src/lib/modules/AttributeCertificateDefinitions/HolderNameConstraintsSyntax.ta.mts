/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralSubtrees,
    _decode_GeneralSubtrees,
    _encode_GeneralSubtrees,
} from "../AttributeCertificateDefinitions/GeneralSubtrees.ta.mjs";
/**
 * @summary HolderNameConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HolderNameConstraintsSyntax ::= SEQUENCE {
 *   permittedSubtrees  [0]  GeneralSubtrees,
 *   excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class HolderNameConstraintsSyntax {
    constructor(
        /**
         * @summary `permittedSubtrees`.
         * @public
         * @readonly
         */
        readonly permittedSubtrees: GeneralSubtrees,
        /**
         * @summary `excludedSubtrees`.
         * @public
         * @readonly
         */
        readonly excludedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HolderNameConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `HolderNameConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HolderNameConstraintsSyntax`.
     * @returns {HolderNameConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof HolderNameConstraintsSyntax]: HolderNameConstraintsSyntax[_K];
            }
        >
    ): HolderNameConstraintsSyntax {
        return new HolderNameConstraintsSyntax(
            _o.permittedSubtrees,
            _o.excludedSubtrees,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of HolderNameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HolderNameConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "permittedSubtrees",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "excludedSubtrees",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of HolderNameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HolderNameConstraintsSyntax: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of HolderNameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HolderNameConstraintsSyntax: $.ComponentSpec[] = [];

let _cached_decoder_for_HolderNameConstraintsSyntax: $.ASN1Decoder<HolderNameConstraintsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HolderNameConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HolderNameConstraintsSyntax} The decoded data structure.
 */
export function _decode_HolderNameConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_HolderNameConstraintsSyntax) {
        _cached_decoder_for_HolderNameConstraintsSyntax = function (
            el: _Element
        ): HolderNameConstraintsSyntax {
            let permittedSubtrees!: GeneralSubtrees;
            let excludedSubtrees: OPTIONAL<GeneralSubtrees>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                permittedSubtrees: (_el: _Element): void => {
                    permittedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
                excludedSubtrees: (_el: _Element): void => {
                    excludedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_HolderNameConstraintsSyntax,
                _extension_additions_list_spec_for_HolderNameConstraintsSyntax,
                _root_component_type_list_2_spec_for_HolderNameConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new HolderNameConstraintsSyntax(
                permittedSubtrees,
                excludedSubtrees,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_HolderNameConstraintsSyntax(el);
}

let _cached_encoder_for_HolderNameConstraintsSyntax: $.ASN1Encoder<HolderNameConstraintsSyntax> | null = null;

/**
 * @summary Encodes a(n) HolderNameConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HolderNameConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_HolderNameConstraintsSyntax(
    value: HolderNameConstraintsSyntax,
    elGetter: $.ASN1Encoder<HolderNameConstraintsSyntax>
) {
    if (!_cached_encoder_for_HolderNameConstraintsSyntax) {
        _cached_encoder_for_HolderNameConstraintsSyntax = function (
            value: HolderNameConstraintsSyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_GeneralSubtrees,
                                $.DER
                            )(value.permittedSubtrees, $.DER),
                            /* IF_ABSENT  */ value.excludedSubtrees ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralSubtrees,
                                      $.DER
                                  )(value.excludedSubtrees, $.DER),
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
    return _cached_encoder_for_HolderNameConstraintsSyntax(value, elGetter);
}


/* eslint-enable */
