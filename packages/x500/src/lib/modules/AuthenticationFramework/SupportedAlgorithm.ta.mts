/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
} from "../CertificateExtensions/CertificatePoliciesSyntax.ta.mjs";
import {
    KeyUsage,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta.mjs";
/**
 * @summary SupportedAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAlgorithm ::= SEQUENCE {
 *   algorithmIdentifier              AlgorithmIdentifier{{SupportedAlgorithms}},
 *   intendedUsage               [0]  KeyUsage OPTIONAL,
 *   intendedCertificatePolicies [1]  CertificatePoliciesSyntax OPTIONAL,
 *   ... }
 * ```
 *
 */
export class SupportedAlgorithm {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `intendedUsage`.
         * @public
         * @readonly
         */
        readonly intendedUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `intendedCertificatePolicies`.
         * @public
         * @readonly
         */
        readonly intendedCertificatePolicies: OPTIONAL<CertificatePoliciesSyntax>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupportedAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `SupportedAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedAlgorithm`.
     * @returns {SupportedAlgorithm}
     */
    public static _from_object(
        _o: { [_K in keyof SupportedAlgorithm]: SupportedAlgorithm[_K] }
    ): SupportedAlgorithm {
        return new SupportedAlgorithm(
            _o.algorithmIdentifier,
            _o.intendedUsage,
            _o.intendedCertificatePolicies,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SupportedAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupportedAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "intendedUsage",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "intendedCertificatePolicies",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of SupportedAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupportedAlgorithm: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SupportedAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupportedAlgorithm: $.ComponentSpec[] = [];

let _cached_decoder_for_SupportedAlgorithm: $.ASN1Decoder<SupportedAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedAlgorithm} The decoded data structure.
 */
export function _decode_SupportedAlgorithm(el: _Element): SupportedAlgorithm {
    if (!_cached_decoder_for_SupportedAlgorithm) {
        _cached_decoder_for_SupportedAlgorithm = function (
            el: _Element
        ): SupportedAlgorithm {
            let algorithmIdentifier!: AlgorithmIdentifier;
            let intendedUsage: OPTIONAL<KeyUsage>;
            let intendedCertificatePolicies: OPTIONAL<CertificatePoliciesSyntax>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                algorithmIdentifier: (_el: _Element): void => {
                    algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                intendedUsage: (_el: _Element): void => {
                    intendedUsage = $._decode_explicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                intendedCertificatePolicies: (_el: _Element): void => {
                    intendedCertificatePolicies = $._decode_explicit<CertificatePoliciesSyntax>(
                        () => _decode_CertificatePoliciesSyntax
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupportedAlgorithm,
                _extension_additions_list_spec_for_SupportedAlgorithm,
                _root_component_type_list_2_spec_for_SupportedAlgorithm,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupportedAlgorithm(
                algorithmIdentifier,
                intendedUsage,
                intendedCertificatePolicies,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupportedAlgorithm(el);
}

let _cached_encoder_for_SupportedAlgorithm: $.ASN1Encoder<SupportedAlgorithm> | null = null;

/**
 * @summary Encodes a(n) SupportedAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_SupportedAlgorithm(
    value: SupportedAlgorithm,
    elGetter: $.ASN1Encoder<SupportedAlgorithm>
): _Element {
    if (!_cached_encoder_for_SupportedAlgorithm) {
        _cached_encoder_for_SupportedAlgorithm = function (
            value: SupportedAlgorithm        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.intendedUsage === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_KeyUsage,
                                      $.DER
                                  )(value.intendedUsage, $.DER),
                            /* IF_ABSENT  */ value.intendedCertificatePolicies ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CertificatePoliciesSyntax,
                                      $.DER
                                  )(value.intendedCertificatePolicies, $.DER),
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
    return _cached_encoder_for_SupportedAlgorithm(value, elGetter);
}


/* eslint-enable */
