/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    OidOrAttr,
    _decode_OidOrAttr,
    _encode_OidOrAttr,
} from "../AuthenticationFramework/OidOrAttr.ta.mjs";
/**
 * @summary SupportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedPublicKeyAlgorithms ::= SEQUENCE {
 *   algorithmIdentifier      AlgorithmIdentifier{{SupportedPublicKeyAlgos}},
 *   minKeySize               INTEGER,
 *   extensions          [0]  SEQUENCE SIZE (1..MAX) OF OidOrAttr OPTIONAL,
 *   ... }
 * ```
 *
 */
export class SupportedPublicKeyAlgorithms {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `minKeySize`.
         * @public
         * @readonly
         */
        readonly minKeySize: INTEGER,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<OidOrAttr[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupportedPublicKeyAlgorithms
     * @description
     *
     * This takes an `object` and converts it to a `SupportedPublicKeyAlgorithms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedPublicKeyAlgorithms`.
     * @returns {SupportedPublicKeyAlgorithms}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof SupportedPublicKeyAlgorithms]: SupportedPublicKeyAlgorithms[_K];
            }
    ): SupportedPublicKeyAlgorithms {
        return new SupportedPublicKeyAlgorithms(
            _o.algorithmIdentifier,
            _o.minKeySize,
            _o.extensions,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SupportedPublicKeyAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupportedPublicKeyAlgorithms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "minKeySize",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of SupportedPublicKeyAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupportedPublicKeyAlgorithms: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SupportedPublicKeyAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupportedPublicKeyAlgorithms: $.ComponentSpec[] = [];

let _cached_decoder_for_SupportedPublicKeyAlgorithms: $.ASN1Decoder<SupportedPublicKeyAlgorithms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedPublicKeyAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedPublicKeyAlgorithms} The decoded data structure.
 */
export function _decode_SupportedPublicKeyAlgorithms(el: _Element): SupportedPublicKeyAlgorithms {
    if (!_cached_decoder_for_SupportedPublicKeyAlgorithms) {
        _cached_decoder_for_SupportedPublicKeyAlgorithms = function (
            el: _Element
        ): SupportedPublicKeyAlgorithms {
            let algorithmIdentifier!: AlgorithmIdentifier;
            let minKeySize!: INTEGER;
            let extensions: OPTIONAL<OidOrAttr[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                algorithmIdentifier: (_el: _Element): void => {
                    algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                minKeySize: (_el: _Element): void => {
                    minKeySize = $._decodeInteger(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_explicit<OidOrAttr[]>(() =>
                        $._decodeSequenceOf<OidOrAttr>(() => _decode_OidOrAttr)
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupportedPublicKeyAlgorithms,
                _extension_additions_list_spec_for_SupportedPublicKeyAlgorithms,
                _root_component_type_list_2_spec_for_SupportedPublicKeyAlgorithms,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupportedPublicKeyAlgorithms(
                algorithmIdentifier,
                minKeySize,
                extensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupportedPublicKeyAlgorithms(el);
}

let _cached_encoder_for_SupportedPublicKeyAlgorithms: $.ASN1Encoder<SupportedPublicKeyAlgorithms> | null = null;

/**
 * @summary Encodes a(n) SupportedPublicKeyAlgorithms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedPublicKeyAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_SupportedPublicKeyAlgorithms(
    value: SupportedPublicKeyAlgorithms,
    elGetter: $.ASN1Encoder<SupportedPublicKeyAlgorithms>
): _Element {
    if (!_cached_encoder_for_SupportedPublicKeyAlgorithms) {
        _cached_encoder_for_SupportedPublicKeyAlgorithms = function (
            value: SupportedPublicKeyAlgorithms        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithmIdentifier,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.minKeySize,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.extensions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<OidOrAttr>(
                                              () => _encode_OidOrAttr,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.extensions, $.DER),
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
    return _cached_encoder_for_SupportedPublicKeyAlgorithms(value, elGetter);
}


/* eslint-enable */
