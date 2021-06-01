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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta';
export {
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta';
import {
    InitiatorCredentials,
    _decode_InitiatorCredentials,
    _encode_InitiatorCredentials,
} from '../MTSAbstractService/InitiatorCredentials.ta';
export {
    InitiatorCredentials,
    _decode_InitiatorCredentials,
    _encode_InitiatorCredentials,
} from '../MTSAbstractService/InitiatorCredentials.ta';
import {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta';
export {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta';
import {
    Restrictions,
    _decode_Restrictions,
    _encode_Restrictions,
} from '../MSAbstractService/Restrictions.ta';
export {
    Restrictions,
    _decode_Restrictions,
    _encode_Restrictions,
} from '../MSAbstractService/Restrictions.ta';
import {
    RegistrationIdentifier,
    _decode_RegistrationIdentifier,
    _encode_RegistrationIdentifier,
} from '../MSAbstractService/RegistrationIdentifier.ta';
export {
    RegistrationIdentifier,
    _decode_RegistrationIdentifier,
    _encode_RegistrationIdentifier,
} from '../MSAbstractService/RegistrationIdentifier.ta';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta';
export {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta';

/* START_OF_SYMBOL_DEFINITION MSBindArgument */
/**
 * @summary MSBindArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSBindArgument ::= SET {
 *   initiator-name              ORAddressAndOrDirectoryName,
 *   initiator-credentials       [2]  InitiatorCredentials,
 *   security-context            [3] IMPLICIT SecurityContext OPTIONAL,
 *   fetch-restrictions          [4]  Restrictions OPTIONAL -- default is none--,
 *   ms-configuration-request    [5]  BOOLEAN DEFAULT FALSE,
 *   -- 1994 extensions
 *   ua-registration-identifier  [6]  RegistrationIdentifier OPTIONAL,
 *   bind-extensions             [7]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MSBindArgument {
    constructor(
        /**
         * @summary `initiator_name`.
         * @public
         * @readonly
         */
        readonly initiator_name: ORAddressAndOrDirectoryName,
        /**
         * @summary `initiator_credentials`.
         * @public
         * @readonly
         */
        readonly initiator_credentials: InitiatorCredentials,
        /**
         * @summary `security_context`.
         * @public
         * @readonly
         */
        readonly security_context: OPTIONAL<SecurityContext>,
        /**
         * @summary `fetch_restrictions`.
         * @public
         * @readonly
         */
        readonly fetch_restrictions: OPTIONAL<Restrictions>,
        /**
         * @summary `ms_configuration_request`.
         * @public
         * @readonly
         */
        readonly ms_configuration_request: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ua_registration_identifier`.
         * @public
         * @readonly
         */
        readonly ua_registration_identifier: OPTIONAL<RegistrationIdentifier>,
        /**
         * @summary `bind_extensions`.
         * @public
         * @readonly
         */
        readonly bind_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a MSBindArgument
     * @description
     *
     * This takes an `object` and converts it to a `MSBindArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSBindArgument`.
     * @returns {MSBindArgument}
     */
    public static _from_object(
        _o: { [_K in keyof MSBindArgument]: MSBindArgument[_K] }
    ): MSBindArgument {
        return new MSBindArgument(
            _o.initiator_name,
            _o.initiator_credentials,
            _o.security_context,
            _o.fetch_restrictions,
            _o.ms_configuration_request,
            _o.ua_registration_identifier,
            _o.bind_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `ms_configuration_request`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_ms_configuration_request() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MSBindArgument */
/**
 * @summary The Leading Root Component Types of MSBindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MSBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'initiator-name',
        false,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'initiator-credentials',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-context',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'fetch-restrictions',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ms-configuration-request',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'ua-registration-identifier',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bind-extensions',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MSBindArgument */
/**
 * @summary The Trailing Root Component Types of MSBindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MSBindArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MSBindArgument */
/**
 * @summary The Extension Addition Component Types of MSBindArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MSBindArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSBindArgument */
let _cached_decoder_for_MSBindArgument: $.ASN1Decoder<MSBindArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _decode_MSBindArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) MSBindArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSBindArgument} The decoded data structure.
 */
export function _decode_MSBindArgument(el: _Element) {
    if (!_cached_decoder_for_MSBindArgument) {
        _cached_decoder_for_MSBindArgument = function (
            el: _Element
        ): MSBindArgument {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let initiator_name!: ORAddressAndOrDirectoryName;
            let initiator_credentials!: InitiatorCredentials;
            let security_context: OPTIONAL<SecurityContext>;
            let fetch_restrictions: OPTIONAL<Restrictions>;
            let ms_configuration_request: OPTIONAL<BOOLEAN> =
                MSBindArgument._default_value_for_ms_configuration_request;
            let ua_registration_identifier: OPTIONAL<RegistrationIdentifier>;
            let bind_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'initiator-name': (_el: _Element): void => {
                    initiator_name = _decode_ORAddressAndOrDirectoryName(_el);
                },
                'initiator-credentials': (_el: _Element): void => {
                    initiator_credentials = $._decode_explicit<InitiatorCredentials>(
                        () => _decode_InitiatorCredentials
                    )(_el);
                },
                'security-context': (_el: _Element): void => {
                    security_context = $._decode_implicit<SecurityContext>(
                        () => _decode_SecurityContext
                    )(_el);
                },
                'fetch-restrictions': (_el: _Element): void => {
                    fetch_restrictions = $._decode_explicit<Restrictions>(
                        () => _decode_Restrictions
                    )(_el);
                },
                'ms-configuration-request': (_el: _Element): void => {
                    ms_configuration_request = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'ua-registration-identifier': (_el: _Element): void => {
                    ua_registration_identifier = $._decode_explicit<RegistrationIdentifier>(
                        () => _decode_RegistrationIdentifier
                    )(_el);
                },
                'bind-extensions': (_el: _Element): void => {
                    bind_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MSBindArgument,
                _extension_additions_list_spec_for_MSBindArgument,
                _root_component_type_list_2_spec_for_MSBindArgument,
                undefined
            );
            return new MSBindArgument /* SET_CONSTRUCTOR_CALL */(
                initiator_name,
                initiator_credentials,
                security_context,
                fetch_restrictions,
                ms_configuration_request,
                ua_registration_identifier,
                bind_extensions
            );
        };
    }
    return _cached_decoder_for_MSBindArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSBindArgument */
let _cached_encoder_for_MSBindArgument: $.ASN1Encoder<MSBindArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSBindArgument */

/* START_OF_SYMBOL_DEFINITION _encode_MSBindArgument */
/**
 * @summary Encodes a(n) MSBindArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSBindArgument, encoded as an ASN.1 Element.
 */
export function _encode_MSBindArgument(
    value: MSBindArgument,
    elGetter: $.ASN1Encoder<MSBindArgument>
) {
    if (!_cached_encoder_for_MSBindArgument) {
        _cached_encoder_for_MSBindArgument = function (
            value: MSBindArgument,
            elGetter: $.ASN1Encoder<MSBindArgument>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOrDirectoryName(
                            value.initiator_name,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_InitiatorCredentials,
                            $.BER
                        )(value.initiator_credentials, $.BER),
                        /* IF_ABSENT  */ value.security_context === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_SecurityContext,
                                  $.BER
                              )(value.security_context, $.BER),
                        /* IF_ABSENT  */ value.fetch_restrictions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_Restrictions,
                                  $.BER
                              )(value.fetch_restrictions, $.BER),
                        /* IF_DEFAULT */ value.ms_configuration_request ===
                            undefined ||
                        $.deepEq(
                            value.ms_configuration_request,
                            MSBindArgument._default_value_for_ms_configuration_request
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.ms_configuration_request, $.BER),
                        /* IF_ABSENT  */ value.ua_registration_identifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_RegistrationIdentifier,
                                  $.BER
                              )(value.ua_registration_identifier, $.BER),
                        /* IF_ABSENT  */ value.bind_extensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.bind_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MSBindArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSBindArgument */

/* eslint-enable */
