/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../AsymmetricKeyPackageModuleV1/Attributes.ta.mjs";
import {
    PrivateKey,
    _decode_PrivateKey,
    _encode_PrivateKey,
} from "../AsymmetricKeyPackageModuleV1/PrivateKey.ta.mjs";
import {
    PrivateKeyAlgorithmIdentifier,
    _decode_PrivateKeyAlgorithmIdentifier,
    _encode_PrivateKeyAlgorithmIdentifier,
} from "../AsymmetricKeyPackageModuleV1/PrivateKeyAlgorithmIdentifier.ta.mjs";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../AsymmetricKeyPackageModuleV1/Version.ta.mjs";
import {
    PublicKey,
    _decode_PublicKey,
    _encode_PublicKey,
} from "../AsymmetricKeyPackageModuleV1/PublicKey.ta.mjs";


/**
 * @summary OneAsymmetricKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneAsymmetricKey ::= SEQUENCE {
 *     version                   Version,
 *     privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
 *     privateKey                PrivateKey,
 *     attributes            [0] Attributes OPTIONAL,
 *     ...,
 *     [[2: publicKey        [1] PublicKey OPTIONAL ]],
 *     ...
 * }
 * ```
 *
 */
export class OneAsymmetricKey {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `privateKeyAlgorithm`.
         * @public
         * @readonly
         */
        readonly privateKeyAlgorithm: PrivateKeyAlgorithmIdentifier,
        /**
         * @summary `privateKey`.
         * @public
         * @readonly
         */
        readonly privateKey: PrivateKey,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<Attributes>,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: OPTIONAL<PublicKey>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OneAsymmetricKey
     * @description
     *
     * This takes an `object` and converts it to a `OneAsymmetricKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OneAsymmetricKey`.
     * @returns {OneAsymmetricKey}
     */
    public static _from_object(
        _o: { [_K in keyof OneAsymmetricKey]: OneAsymmetricKey[_K] }
    ): OneAsymmetricKey {
        return new OneAsymmetricKey(
            _o.version,
            _o.privateKeyAlgorithm,
            _o.privateKey,
            _o.attributes,
            _o.publicKey,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of OneAsymmetricKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OneAsymmetricKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "privateKeyAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "privateKey",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "attributes",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of OneAsymmetricKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OneAsymmetricKey: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of OneAsymmetricKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OneAsymmetricKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "publicKey",
        true,
        $.hasTag(_TagClass.context, 1),
        0,
        2
    ),
];


let _cached_decoder_for_OneAsymmetricKey: $.ASN1Decoder<OneAsymmetricKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OneAsymmetricKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OneAsymmetricKey} The decoded data structure.
 */
export function _decode_OneAsymmetricKey(el: _Element): OneAsymmetricKey {
    if (!_cached_decoder_for_OneAsymmetricKey) {
        _cached_decoder_for_OneAsymmetricKey = function (
            el: _Element
        ): OneAsymmetricKey {
            let version!: Version;
            let privateKeyAlgorithm!: PrivateKeyAlgorithmIdentifier;
            let privateKey!: PrivateKey;
            let attributes: OPTIONAL<Attributes>;
            let publicKey: OPTIONAL<PublicKey>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                privateKeyAlgorithm: (_el: _Element): void => {
                    privateKeyAlgorithm = _decode_PrivateKeyAlgorithmIdentifier(
                        _el
                    );
                },
                privateKey: (_el: _Element): void => {
                    privateKey = _decode_PrivateKey(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
                publicKey: (_el: _Element): void => {
                    publicKey = $._decode_implicit<PublicKey>(
                        () => _decode_PublicKey
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OneAsymmetricKey,
                _extension_additions_list_spec_for_OneAsymmetricKey,
                _root_component_type_list_2_spec_for_OneAsymmetricKey,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new OneAsymmetricKey(
                version,
                privateKeyAlgorithm,
                privateKey,
                attributes,
                publicKey,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_OneAsymmetricKey(el);
}


let _cached_encoder_for_OneAsymmetricKey: $.ASN1Encoder<OneAsymmetricKey> | null = null;


/**
 * @summary Encodes a(n) OneAsymmetricKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OneAsymmetricKey, encoded as an ASN.1 Element.
 */
export function _encode_OneAsymmetricKey(
    value: OneAsymmetricKey,
    elGetter: $.ASN1Encoder<OneAsymmetricKey>
): _Element {
    if (!_cached_encoder_for_OneAsymmetricKey) {
        _cached_encoder_for_OneAsymmetricKey = function (
            value: OneAsymmetricKey        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Version(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_PrivateKeyAlgorithmIdentifier(
                                value.privateKeyAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_PrivateKey(
                                value.privateKey,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.attributes === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Attributes,
                                      $.BER
                                  )(value.attributes, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.publicKey === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_PublicKey,
                                  $.BER
                              )(value.publicKey, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OneAsymmetricKey(value, elGetter);
}


/* eslint-enable */
