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
    OriginalContentIntegrityCheck,
    _decode_OriginalContentIntegrityCheck,
    _encode_OriginalContentIntegrityCheck,
} from '../IPMSSecurityExtensions/OriginalContentIntegrityCheck.ta.mjs';
import {
    OriginalMessageOriginAuthenticationCheck,
    _decode_OriginalMessageOriginAuthenticationCheck,
    _encode_OriginalMessageOriginAuthenticationCheck,
} from '../IPMSSecurityExtensions/OriginalMessageOriginAuthenticationCheck.ta.mjs';
import {
    OriginalMessageToken,
    _decode_OriginalMessageToken,
    _encode_OriginalMessageToken,
} from '../IPMSSecurityExtensions/OriginalMessageToken.ta.mjs';
/**
 * @summary IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IpnSecurityResponse-content-or-arguments-original-security-arguments ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class IpnSecurityResponse_content_or_arguments_original_security_arguments {
    constructor(
        /**
         * @summary `original_content_integrity_check`.
         * @public
         * @readonly
         */
        readonly original_content_integrity_check: OPTIONAL<OriginalContentIntegrityCheck>,
        /**
         * @summary `original_message_origin_authentication_check`.
         * @public
         * @readonly
         */
        readonly original_message_origin_authentication_check: OPTIONAL<OriginalMessageOriginAuthenticationCheck>,
        /**
         * @summary `original_message_token`.
         * @public
         * @readonly
         */
        readonly original_message_token: OPTIONAL<OriginalMessageToken>
    ) {}

    /**
     * @summary Restructures an object into a IpnSecurityResponse_content_or_arguments_original_security_arguments
     * @description
     *
     * This takes an `object` and converts it to a `IpnSecurityResponse_content_or_arguments_original_security_arguments`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpnSecurityResponse_content_or_arguments_original_security_arguments`.
     * @returns {IpnSecurityResponse_content_or_arguments_original_security_arguments}
     */
    public static _from_object(
        _o: {
            [_K in keyof IpnSecurityResponse_content_or_arguments_original_security_arguments]: IpnSecurityResponse_content_or_arguments_original_security_arguments[_K];
        }
    ): IpnSecurityResponse_content_or_arguments_original_security_arguments {
        return new IpnSecurityResponse_content_or_arguments_original_security_arguments(
            _o.original_content_integrity_check,
            _o.original_message_origin_authentication_check,
            _o.original_message_token
        );
    }
}

/**
 * @summary The Leading Root Component Types of IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'original-content-integrity-check',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'original-message-origin-authentication-check',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'original-message-token',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ComponentSpec[] = [];

let _cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ASN1Decoder<IpnSecurityResponse_content_or_arguments_original_security_arguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpnSecurityResponse_content_or_arguments_original_security_arguments} The decoded data structure.
 */
export function _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments(
    el: _Element
): IpnSecurityResponse_content_or_arguments_original_security_arguments {
    if (
        !_cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments
    ) {
        _cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments = function (
            el: _Element
        ): IpnSecurityResponse_content_or_arguments_original_security_arguments {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let original_content_integrity_check: OPTIONAL<OriginalContentIntegrityCheck>;
            let original_message_origin_authentication_check: OPTIONAL<OriginalMessageOriginAuthenticationCheck>;
            let original_message_token: OPTIONAL<OriginalMessageToken>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'original-content-integrity-check': (_el: _Element): void => {
                    original_content_integrity_check = $._decode_implicit<OriginalContentIntegrityCheck>(
                        () => _decode_OriginalContentIntegrityCheck
                    )(_el);
                },
                'original-message-origin-authentication-check': (
                    _el: _Element
                ): void => {
                    original_message_origin_authentication_check = $._decode_implicit<OriginalMessageOriginAuthenticationCheck>(
                        () => _decode_OriginalMessageOriginAuthenticationCheck
                    )(_el);
                },
                'original-message-token': (_el: _Element): void => {
                    original_message_token = $._decode_implicit<OriginalMessageToken>(
                        () => _decode_OriginalMessageToken
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments,
                _extension_additions_list_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments,
                _root_component_type_list_2_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments,
                undefined
            );
            return new IpnSecurityResponse_content_or_arguments_original_security_arguments /* SET_CONSTRUCTOR_CALL */(
                original_content_integrity_check,
                original_message_origin_authentication_check,
                original_message_token
            );
        };
    }
    return _cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments(
        el
    );
}

let _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments_original_security_arguments> | null = null;

/**
 * @summary Encodes a(n) IpnSecurityResponse_content_or_arguments_original_security_arguments into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpnSecurityResponse_content_or_arguments_original_security_arguments, encoded as an ASN.1 Element.
 */
export function _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments(
    value: IpnSecurityResponse_content_or_arguments_original_security_arguments,
    elGetter: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments_original_security_arguments>
): _Element {
    if (
        !_cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments
    ) {
        _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments = function (
            value: IpnSecurityResponse_content_or_arguments_original_security_arguments        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.original_content_integrity_check ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_OriginalContentIntegrityCheck,
                                  $.BER
                              )(value.original_content_integrity_check, $.BER),
                        /* IF_ABSENT  */ value.original_message_origin_authentication_check ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_OriginalMessageOriginAuthenticationCheck,
                                  $.BER
                              )(
                                  value.original_message_origin_authentication_check,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.original_message_token ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_OriginalMessageToken,
                                  $.BER
                              )(value.original_message_token, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments(
        value,
        elGetter
    );
}


/* eslint-enable */
