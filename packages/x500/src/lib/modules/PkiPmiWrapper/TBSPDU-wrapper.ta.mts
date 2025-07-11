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
    PkiPath,
    _decode_PkiPath,
    _encode_PkiPath,
} from "../AuthenticationFramework/PkiPath.ta.mjs";
import {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    _decode_Version,
    _encode_Version,
} from "../AuthenticationFramework/Version.ta.mjs";
import {
    SignedAttributes,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
} from "../PkiPmiWrapper/SignedAttributes.ta.mjs";
import {
    TBSPDU_wrapper_conf,
    _decode_TBSPDU_wrapper_conf,
    _encode_TBSPDU_wrapper_conf,
} from "../PkiPmiWrapper/TBSPDU-wrapper-conf.ta.mjs";
/**
 * @summary TBSPDU_wrapper
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSPDU-wrapper ::= SEQUENCE  {
 *   version               Version DEFAULT v1,
 *   signatureAlgorithm    AlgorithmIdentifier {{SupportedSignatureAlgorithms}},
 *   certPath         [0]  IMPLICIT PkiPath,
 *   signedAttrs      [1]  IMPLICIT SignedAttributes OPTIONAL,
 *   conf                  CHOICE {
 *     clear            [2]  WrappedPDUInfo,
 *     protected        [3]  EncryptedInfo,
 *    ... },
 *   ... }
 * ```
 *
 */
export class TBSPDU_wrapper {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `certPath`.
         * @public
         * @readonly
         */
        readonly certPath: PkiPath,
        /**
         * @summary `signedAttrs`.
         * @public
         * @readonly
         */
        readonly signedAttrs: OPTIONAL<SignedAttributes>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TBSPDU_wrapper_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSPDU_wrapper
     * @description
     *
     * This takes an `object` and converts it to a `TBSPDU_wrapper`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSPDU_wrapper`.
     * @returns {TBSPDU_wrapper}
     */
    public static _from_object(
        _o: { [_K in keyof TBSPDU_wrapper]: TBSPDU_wrapper[_K] }
    ): TBSPDU_wrapper {
        return new TBSPDU_wrapper(
            _o.version,
            _o.signatureAlgorithm,
            _o.certPath,
            _o.signedAttrs,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version(): Version {
        return v1;
    }
}

/**
 * @summary The Leading Root Component Types of TBSPDU_wrapper
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSPDU_wrapper: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "certPath",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "signedAttrs",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of TBSPDU_wrapper
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSPDU_wrapper: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TBSPDU_wrapper
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSPDU_wrapper: $.ComponentSpec[] = [];

let _cached_decoder_for_TBSPDU_wrapper: $.ASN1Decoder<TBSPDU_wrapper> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSPDU_wrapper
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSPDU_wrapper} The decoded data structure.
 */
export function _decode_TBSPDU_wrapper(el: _Element): TBSPDU_wrapper {
    if (!_cached_decoder_for_TBSPDU_wrapper) {
        _cached_decoder_for_TBSPDU_wrapper = function (
            el: _Element
        ): TBSPDU_wrapper {
            let version: OPTIONAL<Version> =
                TBSPDU_wrapper._default_value_for_version;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let certPath!: PkiPath;
            let signedAttrs: OPTIONAL<SignedAttributes>;
            let conf!: TBSPDU_wrapper_conf;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                certPath: (_el: _Element): void => {
                    certPath = $._decode_implicit<PkiPath>(
                        () => _decode_PkiPath
                    )(_el);
                },
                signedAttrs: (_el: _Element): void => {
                    signedAttrs = $._decode_implicit<SignedAttributes>(
                        () => _decode_SignedAttributes
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TBSPDU_wrapper_conf(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSPDU_wrapper,
                _extension_additions_list_spec_for_TBSPDU_wrapper,
                _root_component_type_list_2_spec_for_TBSPDU_wrapper,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSPDU_wrapper(
                version,
                signatureAlgorithm,
                certPath,
                signedAttrs,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBSPDU_wrapper(el);
}

let _cached_encoder_for_TBSPDU_wrapper: $.ASN1Encoder<TBSPDU_wrapper> | null = null;

/**
 * @summary Encodes a(n) TBSPDU_wrapper into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSPDU_wrapper, encoded as an ASN.1 Element.
 */
export function _encode_TBSPDU_wrapper(
    value: TBSPDU_wrapper,
    elGetter: $.ASN1Encoder<TBSPDU_wrapper>
): _Element {
    if (!_cached_encoder_for_TBSPDU_wrapper) {
        _cached_encoder_for_TBSPDU_wrapper = function (
            value: TBSPDU_wrapper        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TBSPDU_wrapper._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.DER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signatureAlgorithm,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_PkiPath,
                                $.DER
                            )(value.certPath, $.DER),
                            /* IF_ABSENT  */ value.signedAttrs === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SignedAttributes,
                                      $.DER
                                  )(value.signedAttrs, $.DER),
                            /* REQUIRED   */ _encode_TBSPDU_wrapper_conf(
                                value.conf,
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
    return _cached_encoder_for_TBSPDU_wrapper(value, elGetter);
}


/* eslint-enable */
