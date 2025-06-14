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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/ENCRYPTED.ta.mjs';
import {
    EncryptionKey,
    _decode_EncryptionKey,
    _encode_EncryptionKey,
} from '../MTSAbstractService/EncryptionKey.ta.mjs';
import {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/CertificateAssertion.ta.mjs';
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificates.ta.mjs';
import {
    ExtendedCertificates,
    _decode_ExtendedCertificates,
    _encode_ExtendedCertificates,
} from '../MTSAbstractService/ExtendedCertificates.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EncryptionToken */
/**
 * @summary EncryptionToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionToken ::= SET {
 *   encryption-algorithm-identifier  AlgorithmIdentifier,
 *   encrypted-key                    ENCRYPTED{EncryptionKey},
 *   recipient-certificate-selector   [0]  CertificateAssertion OPTIONAL,
 *   recipient-certificate            [1]  Certificates OPTIONAL,
 *   originator-certificate-selector  [2]  CertificateAssertion OPTIONAL,
 *   originator-certificates          [3]  ExtendedCertificates OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class EncryptionToken {
    constructor(
        /**
         * @summary `encryption_algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly encryption_algorithm_identifier: AlgorithmIdentifier,
        /**
         * @summary `encrypted_key`.
         * @public
         * @readonly
         */
        readonly encrypted_key: ENCRYPTED<EncryptionKey>,
        /**
         * @summary `recipient_certificate_selector`.
         * @public
         * @readonly
         */
        readonly recipient_certificate_selector: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `recipient_certificate`.
         * @public
         * @readonly
         */
        readonly recipient_certificate: OPTIONAL<Certificates>,
        /**
         * @summary `originator_certificate_selector`.
         * @public
         * @readonly
         */
        readonly originator_certificate_selector: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `originator_certificates`.
         * @public
         * @readonly
         */
        readonly originator_certificates: OPTIONAL<ExtendedCertificates>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptionToken
     * @description
     *
     * This takes an `object` and converts it to a `EncryptionToken`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptionToken`.
     * @returns {EncryptionToken}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptionToken]: EncryptionToken[_K] }
    ): EncryptionToken {
        return new EncryptionToken(
            _o.encryption_algorithm_identifier,
            _o.encrypted_key,
            _o.recipient_certificate_selector,
            _o.recipient_certificate,
            _o.originator_certificate_selector,
            _o.originator_certificates,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptionToken */
/**
 * @summary The Leading Root Component Types of EncryptionToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptionToken: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'encryption-algorithm-identifier',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encrypted-key',
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipient-certificate-selector',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'recipient-certificate',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator-certificate-selector',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator-certificates',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptionToken */
/**
 * @summary The Trailing Root Component Types of EncryptionToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptionToken: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptionToken */
/**
 * @summary The Extension Addition Component Types of EncryptionToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptionToken: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionToken */
let _cached_decoder_for_EncryptionToken: $.ASN1Decoder<EncryptionToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptionToken */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionToken} The decoded data structure.
 */
export function _decode_EncryptionToken(el: _Element) {
    if (!_cached_decoder_for_EncryptionToken) {
        _cached_decoder_for_EncryptionToken = function (
            el: _Element
        ): EncryptionToken {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let encryption_algorithm_identifier!: AlgorithmIdentifier;
            let encrypted_key!: ENCRYPTED<EncryptionKey>;
            let recipient_certificate_selector: OPTIONAL<CertificateAssertion>;
            let recipient_certificate: OPTIONAL<Certificates>;
            let originator_certificate_selector: OPTIONAL<CertificateAssertion>;
            let originator_certificates: OPTIONAL<ExtendedCertificates>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'encryption-algorithm-identifier': (_el: _Element): void => {
                    encryption_algorithm_identifier = _decode_AlgorithmIdentifier(
                        _el
                    );
                },
                'encrypted-key': (_el: _Element): void => {
                    encrypted_key = _get_decoder_for_ENCRYPTED<EncryptionKey>(
                        _decode_EncryptionKey
                    )(_el);
                },
                'recipient-certificate-selector': (_el: _Element): void => {
                    recipient_certificate_selector = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'recipient-certificate': (_el: _Element): void => {
                    recipient_certificate = $._decode_implicit<Certificates>(
                        () => _decode_Certificates
                    )(_el);
                },
                'originator-certificate-selector': (_el: _Element): void => {
                    originator_certificate_selector = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'originator-certificates': (_el: _Element): void => {
                    originator_certificates = $._decode_implicit<ExtendedCertificates>(
                        () => _decode_ExtendedCertificates
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptionToken,
                _extension_additions_list_spec_for_EncryptionToken,
                _root_component_type_list_2_spec_for_EncryptionToken,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncryptionToken /* SET_CONSTRUCTOR_CALL */(
                encryption_algorithm_identifier,
                encrypted_key,
                recipient_certificate_selector,
                recipient_certificate,
                originator_certificate_selector,
                originator_certificates,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncryptionToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionToken */
let _cached_encoder_for_EncryptionToken: $.ASN1Encoder<EncryptionToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionToken */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptionToken */
/**
 * @summary Encodes a(n) EncryptionToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionToken, encoded as an ASN.1 Element.
 */
export function _encode_EncryptionToken(
    value: EncryptionToken,
    elGetter: $.ASN1Encoder<EncryptionToken>
) {
    if (!_cached_encoder_for_EncryptionToken) {
        _cached_encoder_for_EncryptionToken = function (
            value: EncryptionToken        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.encryption_algorithm_identifier,
                                $.BER
                            ),
                            /* REQUIRED   */ _get_encoder_for_ENCRYPTED<EncryptionKey>(
                                _encode_EncryptionKey
                            )(value.encrypted_key, $.BER),
                            /* IF_ABSENT  */ value.recipient_certificate_selector ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificateAssertion,
                                      $.BER
                                  )(
                                      value.recipient_certificate_selector,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.recipient_certificate ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Certificates,
                                      $.BER
                                  )(value.recipient_certificate, $.BER),
                            /* IF_ABSENT  */ value.originator_certificate_selector ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_CertificateAssertion,
                                      $.BER
                                  )(
                                      value.originator_certificate_selector,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.originator_certificates ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_ExtendedCertificates,
                                      $.BER
                                  )(value.originator_certificates, $.BER),
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
    return _cached_encoder_for_EncryptionToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptionToken */

/* eslint-enable */
