/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    OriginalContentIntegrityCheck,
    _decode_OriginalContentIntegrityCheck,
    _encode_OriginalContentIntegrityCheck,
} from '../IPMSSecurityExtensions/OriginalContentIntegrityCheck.ta.mjs';
export {
    OriginalContentIntegrityCheck,
    _decode_OriginalContentIntegrityCheck,
    _encode_OriginalContentIntegrityCheck,
} from '../IPMSSecurityExtensions/OriginalContentIntegrityCheck.ta.mjs';
import {
    OriginalMessageOriginAuthenticationCheck,
    _decode_OriginalMessageOriginAuthenticationCheck,
    _encode_OriginalMessageOriginAuthenticationCheck,
} from '../IPMSSecurityExtensions/OriginalMessageOriginAuthenticationCheck.ta.mjs';
export {
    OriginalMessageOriginAuthenticationCheck,
    _decode_OriginalMessageOriginAuthenticationCheck,
    _encode_OriginalMessageOriginAuthenticationCheck,
} from '../IPMSSecurityExtensions/OriginalMessageOriginAuthenticationCheck.ta.mjs';
import {
    OriginalMessageToken,
    _decode_OriginalMessageToken,
    _encode_OriginalMessageToken,
} from '../IPMSSecurityExtensions/OriginalMessageToken.ta.mjs';
export {
    OriginalMessageToken,
    _decode_OriginalMessageToken,
    _encode_OriginalMessageToken,
} from '../IPMSSecurityExtensions/OriginalMessageToken.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IpnSecurityResponse_content_or_arguments_original_security_arguments */
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
/* END_OF_SYMBOL_DEFINITION IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'original-message-origin-authentication-check',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'original-message-token',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */
/**
 * @summary The Trailing Root Component Types of IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */
/**
 * @summary The Extension Addition Component Types of IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */
let _cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ASN1Decoder<IpnSecurityResponse_content_or_arguments_original_security_arguments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments */
/**
 * @summary Decodes an ASN.1 element into a(n) IpnSecurityResponse_content_or_arguments_original_security_arguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IpnSecurityResponse_content_or_arguments_original_security_arguments} The decoded data structure.
 */
export function _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments(
    el: _Element
) {
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
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
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
/* END_OF_SYMBOL_DEFINITION _decode_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */
let _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments_original_security_arguments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* START_OF_SYMBOL_DEFINITION _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments */
/**
 * @summary Encodes a(n) IpnSecurityResponse_content_or_arguments_original_security_arguments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpnSecurityResponse_content_or_arguments_original_security_arguments, encoded as an ASN.1 Element.
 */
export function _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments(
    value: IpnSecurityResponse_content_or_arguments_original_security_arguments,
    elGetter: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments_original_security_arguments>
) {
    if (
        !_cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments
    ) {
        _cached_encoder_for_IpnSecurityResponse_content_or_arguments_original_security_arguments = function (
            value: IpnSecurityResponse_content_or_arguments_original_security_arguments,
            elGetter: $.ASN1Encoder<IpnSecurityResponse_content_or_arguments_original_security_arguments>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_IpnSecurityResponse_content_or_arguments_original_security_arguments */

/* eslint-enable */
