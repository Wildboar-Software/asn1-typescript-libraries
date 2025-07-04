/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Token,
    _decode_Token,
    _encode_Token,
} from '../MTSAbstractService/Token.ta.mjs';
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/AuthenticationFramework';
import {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from '@wildboar/x500/CertificateExtensions';
/**
 * @summary StrongCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StrongCredentials ::= SET {
 *   bind-token               [0]  Token OPTIONAL,
 *   certificate              [1]  Certificates OPTIONAL,
 *   ...,
 *   certificate-selector     [2]  CertificateAssertion OPTIONAL
 * }
 * ```
 *
 */
export class StrongCredentials {
    constructor(
        /**
         * @summary `bind_token`.
         * @public
         * @readonly
         */
        readonly bind_token: OPTIONAL<Token>,
        /**
         * @summary `certificate`.
         * @public
         * @readonly
         */
        readonly certificate: OPTIONAL<Certificates>,
        /**
         * @summary `certificate_selector`.
         * @public
         * @readonly
         */
        readonly certificate_selector: OPTIONAL<CertificateAssertion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a StrongCredentials
     * @description
     *
     * This takes an `object` and converts it to a `StrongCredentials`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StrongCredentials`.
     * @returns {StrongCredentials}
     */
    public static _from_object(
        _o: { [_K in keyof StrongCredentials]: StrongCredentials[_K] }
    ): StrongCredentials {
        return new StrongCredentials(
            _o.bind_token,
            _o.certificate,
            _o.certificate_selector,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of StrongCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_StrongCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'bind-token',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'certificate',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of StrongCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_StrongCredentials: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of StrongCredentials
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_StrongCredentials: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'certificate-selector',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

let _cached_decoder_for_StrongCredentials: $.ASN1Decoder<StrongCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StrongCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StrongCredentials} The decoded data structure.
 */
export function _decode_StrongCredentials(el: _Element): StrongCredentials {
    if (!_cached_decoder_for_StrongCredentials) {
        _cached_decoder_for_StrongCredentials = function (
            el: _Element
        ): StrongCredentials {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let bind_token: OPTIONAL<Token>;
            let certificate: OPTIONAL<Certificates>;
            let certificate_selector: OPTIONAL<CertificateAssertion>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'bind-token': (_el: _Element): void => {
                    bind_token = $._decode_implicit<Token>(() => _decode_Token)(
                        _el
                    );
                },
                certificate: (_el: _Element): void => {
                    certificate = $._decode_implicit<Certificates>(
                        () => _decode_Certificates
                    )(_el);
                },
                'certificate-selector': (_el: _Element): void => {
                    certificate_selector = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_StrongCredentials,
                _extension_additions_list_spec_for_StrongCredentials,
                _root_component_type_list_2_spec_for_StrongCredentials,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new StrongCredentials /* SET_CONSTRUCTOR_CALL */(
                bind_token,
                certificate,
                certificate_selector,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_StrongCredentials(el);
}

let _cached_encoder_for_StrongCredentials: $.ASN1Encoder<StrongCredentials> | null = null;

/**
 * @summary Encodes a(n) StrongCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StrongCredentials, encoded as an ASN.1 Element.
 */
export function _encode_StrongCredentials(
    value: StrongCredentials,
    elGetter: $.ASN1Encoder<StrongCredentials>
): _Element {
    if (!_cached_encoder_for_StrongCredentials) {
        _cached_encoder_for_StrongCredentials = function (
            value: StrongCredentials        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.bind_token === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Token,
                                      $.BER
                                  )(value.bind_token, $.BER),
                            /* IF_ABSENT  */ value.certificate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Certificates,
                                      $.BER
                                  )(value.certificate, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.certificate_selector ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_CertificateAssertion,
                                      $.BER
                                  )(value.certificate_selector, $.BER),
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
    return _cached_encoder_for_StrongCredentials(value, elGetter);
}


/* eslint-enable */
