/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta.mjs";
/**
 * @summary CertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificatePair ::= SEQUENCE {
 *   issuedToThisCA  [0]  Certificate OPTIONAL,
 *   issuedByThisCA  [1]  Certificate OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS { ..., issuedToThisCA PRESENT} |
 *    WITH COMPONENTS { ..., issuedByThisCA PRESENT})
 * ```
 *
 * @class
 */
export class CertificatePair {
    constructor(
        /**
         * @summary `issuedToThisCA`.
         * @public
         * @readonly
         */
        readonly issuedToThisCA: OPTIONAL<Certificate>,
        /**
         * @summary `issuedByThisCA`.
         * @public
         * @readonly
         */
        readonly issuedByThisCA: OPTIONAL<Certificate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificatePair
     * @description
     *
     * This takes an `object` and converts it to a `CertificatePair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePair`.
     * @returns {CertificatePair}
     */
    public static _from_object(
        _o: { [_K in keyof CertificatePair]: CertificatePair[_K] }
    ): CertificatePair {
        return new CertificatePair(
            _o.issuedToThisCA,
            _o.issuedByThisCA,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificatePair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificatePair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuedToThisCA",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "issuedByThisCA",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificatePair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificatePair: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificatePair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificatePair: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificatePair: $.ASN1Decoder<CertificatePair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePair} The decoded data structure.
 */
export function _decode_CertificatePair(el: _Element): CertificatePair {
    if (!_cached_decoder_for_CertificatePair) {
        _cached_decoder_for_CertificatePair = function (
            el: _Element
        ): CertificatePair {
            let issuedToThisCA: OPTIONAL<Certificate>;
            let issuedByThisCA: OPTIONAL<Certificate>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                issuedToThisCA: (_el: _Element): void => {
                    issuedToThisCA = $._decode_explicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                issuedByThisCA: (_el: _Element): void => {
                    issuedByThisCA = $._decode_explicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePair,
                _extension_additions_list_spec_for_CertificatePair,
                _root_component_type_list_2_spec_for_CertificatePair,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePair(
                issuedToThisCA,
                issuedByThisCA,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePair(el);
}

let _cached_encoder_for_CertificatePair: $.ASN1Encoder<CertificatePair> | null = null;

/**
 * @summary Encodes a(n) CertificatePair into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePair, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePair(
    value: CertificatePair,
    elGetter: $.ASN1Encoder<CertificatePair>
): _Element {
    if (!_cached_encoder_for_CertificatePair) {
        _cached_encoder_for_CertificatePair = function (
            value: CertificatePair        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCA === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Certificate,
                                      $.DER
                                  )(value.issuedToThisCA, $.DER),
                            /* IF_ABSENT  */ value.issuedByThisCA === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Certificate,
                                      $.DER
                                  )(value.issuedByThisCA, $.DER),
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
    return _cached_encoder_for_CertificatePair(value, elGetter);
}


/* eslint-enable */
