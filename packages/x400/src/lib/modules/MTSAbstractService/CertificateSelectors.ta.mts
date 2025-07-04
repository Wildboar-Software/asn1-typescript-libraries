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
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from '@wildboar/x500/CertificateExtensions';
/**
 * @summary CertificateSelectors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSelectors ::= SET {
 *   encryption-recipient           [0]  CertificateAssertion OPTIONAL,
 *   encryption-originator          [1]  CertificateAssertion OPTIONAL,
 *   content-integrity-check        [2]  CertificateAssertion OPTIONAL,
 *   token-signature                [3]  CertificateAssertion OPTIONAL,
 *   message-origin-authentication  [4]  CertificateAssertion OPTIONAL
 * }
 * ```
 *
 */
export class CertificateSelectors {
    constructor(
        /**
         * @summary `encryption_recipient`.
         * @public
         * @readonly
         */
        readonly encryption_recipient: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `encryption_originator`.
         * @public
         * @readonly
         */
        readonly encryption_originator: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `content_integrity_check`.
         * @public
         * @readonly
         */
        readonly content_integrity_check: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `token_signature`.
         * @public
         * @readonly
         */
        readonly token_signature: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `message_origin_authentication`.
         * @public
         * @readonly
         */
        readonly message_origin_authentication: OPTIONAL<CertificateAssertion>
    ) {}

    /**
     * @summary Restructures an object into a CertificateSelectors
     * @description
     *
     * This takes an `object` and converts it to a `CertificateSelectors`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateSelectors`.
     * @returns {CertificateSelectors}
     */
    public static _from_object(
        _o: { [_K in keyof CertificateSelectors]: CertificateSelectors[_K] }
    ): CertificateSelectors {
        return new CertificateSelectors(
            _o.encryption_recipient,
            _o.encryption_originator,
            _o.content_integrity_check,
            _o.token_signature,
            _o.message_origin_authentication
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificateSelectors
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateSelectors: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'encryption-recipient',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'encryption-originator',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'content-integrity-check',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'token-signature',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'message-origin-authentication',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificateSelectors
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateSelectors: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificateSelectors
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateSelectors: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateSelectors: $.ASN1Decoder<CertificateSelectors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSelectors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSelectors} The decoded data structure.
 */
export function _decode_CertificateSelectors(el: _Element): CertificateSelectors {
    if (!_cached_decoder_for_CertificateSelectors) {
        _cached_decoder_for_CertificateSelectors = function (
            el: _Element
        ): CertificateSelectors {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let encryption_recipient: OPTIONAL<CertificateAssertion>;
            let encryption_originator: OPTIONAL<CertificateAssertion>;
            let content_integrity_check: OPTIONAL<CertificateAssertion>;
            let token_signature: OPTIONAL<CertificateAssertion>;
            let message_origin_authentication: OPTIONAL<CertificateAssertion>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'encryption-recipient': (_el: _Element): void => {
                    encryption_recipient = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'encryption-originator': (_el: _Element): void => {
                    encryption_originator = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'content-integrity-check': (_el: _Element): void => {
                    content_integrity_check = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'token-signature': (_el: _Element): void => {
                    token_signature = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'message-origin-authentication': (_el: _Element): void => {
                    message_origin_authentication = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateSelectors,
                _extension_additions_list_spec_for_CertificateSelectors,
                _root_component_type_list_2_spec_for_CertificateSelectors,
                undefined
            );
            return new CertificateSelectors /* SET_CONSTRUCTOR_CALL */(
                encryption_recipient,
                encryption_originator,
                content_integrity_check,
                token_signature,
                message_origin_authentication
            );
        };
    }
    return _cached_decoder_for_CertificateSelectors(el);
}

let _cached_encoder_for_CertificateSelectors: $.ASN1Encoder<CertificateSelectors> | null = null;

/**
 * @summary Encodes a(n) CertificateSelectors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSelectors, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSelectors(
    value: CertificateSelectors,
    elGetter: $.ASN1Encoder<CertificateSelectors>
): _Element {
    if (!_cached_encoder_for_CertificateSelectors) {
        _cached_encoder_for_CertificateSelectors = function (
            value: CertificateSelectors        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.encryption_recipient ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.encryption_recipient, $.BER),
                        /* IF_ABSENT  */ value.encryption_originator ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.encryption_originator, $.BER),
                        /* IF_ABSENT  */ value.content_integrity_check ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.content_integrity_check, $.BER),
                        /* IF_ABSENT  */ value.token_signature === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.token_signature, $.BER),
                        /* IF_ABSENT  */ value.message_origin_authentication ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.message_origin_authentication, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificateSelectors(value, elGetter);
}


/* eslint-enable */
