/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SkipCerts,
    _decode_SkipCerts,
    _encode_SkipCerts,
} from "../CertificateExtensions/SkipCerts.ta.mjs";
/**
 * @summary PolicyConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyConstraintsSyntax ::= SEQUENCE {
 *   requireExplicitPolicy  [0]  SkipCerts OPTIONAL,
 *   inhibitPolicyMapping   [1]  SkipCerts OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., requireExplicitPolicy PRESENT } |
 *    WITH COMPONENTS {..., inhibitPolicyMapping  PRESENT } )
 * ```
 *
 */
export class PolicyConstraintsSyntax {
    constructor(
        /**
         * @summary `requireExplicitPolicy`.
         * @public
         * @readonly
         */
        readonly requireExplicitPolicy: OPTIONAL<SkipCerts>,
        /**
         * @summary `inhibitPolicyMapping`.
         * @public
         * @readonly
         */
        readonly inhibitPolicyMapping: OPTIONAL<SkipCerts>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PolicyConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `PolicyConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PolicyConstraintsSyntax`.
     * @returns {PolicyConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof PolicyConstraintsSyntax]: PolicyConstraintsSyntax[_K];
            }
        >
    ): PolicyConstraintsSyntax {
        return new PolicyConstraintsSyntax(
            _o.requireExplicitPolicy,
            _o.inhibitPolicyMapping,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PolicyConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PolicyConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "requireExplicitPolicy",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "inhibitPolicyMapping",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of PolicyConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PolicyConstraintsSyntax: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PolicyConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PolicyConstraintsSyntax: $.ComponentSpec[] = [];

let _cached_decoder_for_PolicyConstraintsSyntax: $.ASN1Decoder<PolicyConstraintsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyConstraintsSyntax} The decoded data structure.
 */
export function _decode_PolicyConstraintsSyntax(el: _Element): PolicyConstraintsSyntax {
    if (!_cached_decoder_for_PolicyConstraintsSyntax) {
        _cached_decoder_for_PolicyConstraintsSyntax = function (
            el: _Element
        ): PolicyConstraintsSyntax {
            let requireExplicitPolicy: OPTIONAL<SkipCerts>;
            let inhibitPolicyMapping: OPTIONAL<SkipCerts>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                requireExplicitPolicy: (_el: _Element): void => {
                    requireExplicitPolicy = $._decode_implicit<SkipCerts>(
                        () => _decode_SkipCerts
                    )(_el);
                },
                inhibitPolicyMapping: (_el: _Element): void => {
                    inhibitPolicyMapping = $._decode_implicit<SkipCerts>(
                        () => _decode_SkipCerts
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyConstraintsSyntax,
                _extension_additions_list_spec_for_PolicyConstraintsSyntax,
                _root_component_type_list_2_spec_for_PolicyConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyConstraintsSyntax(
                requireExplicitPolicy,
                inhibitPolicyMapping,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyConstraintsSyntax(el);
}

let _cached_encoder_for_PolicyConstraintsSyntax: $.ASN1Encoder<PolicyConstraintsSyntax> | null = null;

/**
 * @summary Encodes a(n) PolicyConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PolicyConstraintsSyntax(
    value: PolicyConstraintsSyntax,
    elGetter: $.ASN1Encoder<PolicyConstraintsSyntax>
): _Element {
    if (!_cached_encoder_for_PolicyConstraintsSyntax) {
        _cached_encoder_for_PolicyConstraintsSyntax = function (
            value: PolicyConstraintsSyntax        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.requireExplicitPolicy ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_SkipCerts,
                                      $.DER
                                  )(value.requireExplicitPolicy, $.DER),
                            /* IF_ABSENT  */ value.inhibitPolicyMapping ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SkipCerts,
                                      $.DER
                                  )(value.inhibitPolicyMapping, $.DER),
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
    return _cached_encoder_for_PolicyConstraintsSyntax(value, elGetter);
}


/* eslint-enable */
