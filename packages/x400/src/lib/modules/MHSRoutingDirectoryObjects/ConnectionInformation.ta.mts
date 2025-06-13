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
import { id_ac_mts_transfer } from '../MHSProtocolObjectIdentifiers/id-ac-mts-transfer.va.mjs';
export { id_ac_mts_transfer } from '../MHSProtocolObjectIdentifiers/id-ac-mts-transfer.va.mjs';
import {
    AuthenticationMethod,
    AuthenticationMethod_no_authentication /* IMPORTED_LONG_NAMED_INTEGER */,
    no_authentication /* IMPORTED_SHORT_NAMED_INTEGER */,
    AuthenticationMethod_simple_password /* IMPORTED_LONG_NAMED_INTEGER */,
    simple_password /* IMPORTED_SHORT_NAMED_INTEGER */,
    AuthenticationMethod_strong_authentication /* IMPORTED_LONG_NAMED_INTEGER */,
    strong_authentication /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AuthenticationMethod,
    _encode_AuthenticationMethod,
} from '../MHSRoutingDirectoryObjects/AuthenticationMethod.ta.mjs';
export {
    AuthenticationMethod,
    AuthenticationMethod_no_authentication /* IMPORTED_LONG_NAMED_INTEGER */,
    no_authentication /* IMPORTED_SHORT_NAMED_INTEGER */,
    AuthenticationMethod_simple_password /* IMPORTED_LONG_NAMED_INTEGER */,
    simple_password /* IMPORTED_SHORT_NAMED_INTEGER */,
    AuthenticationMethod_strong_authentication /* IMPORTED_LONG_NAMED_INTEGER */,
    strong_authentication /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AuthenticationMethod,
    _encode_AuthenticationMethod,
} from '../MHSRoutingDirectoryObjects/AuthenticationMethod.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ConnectionInformation */
/**
 * @summary ConnectionInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionInformation ::= SET {
 *   application-context       [0]  OBJECT IDENTIFIER DEFAULT id-ac-mts-transfer,
 *   profiles                  [1]  SET OF OBJECT IDENTIFIER OPTIONAL,
 *   dn-used-in-a-associate    [2]  BOOLEAN DEFAULT TRUE,
 *   network-address-reliable  [3]  BOOLEAN DEFAULT TRUE,
 *   authentication-method     [4]  AuthenticationMethod DEFAULT simple-password,
 *   weighting-factors         [5]  INSTANCE OF TYPE-IDENTIFIER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ConnectionInformation {
    constructor(
        /**
         * @summary `application_context`.
         * @public
         * @readonly
         */
        readonly application_context: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `profiles`.
         * @public
         * @readonly
         */
        readonly profiles: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `dn_used_in_a_associate`.
         * @public
         * @readonly
         */
        readonly dn_used_in_a_associate: OPTIONAL<BOOLEAN>,
        /**
         * @summary `network_address_reliable`.
         * @public
         * @readonly
         */
        readonly network_address_reliable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `authentication_method`.
         * @public
         * @readonly
         */
        readonly authentication_method: OPTIONAL<AuthenticationMethod>,
        /**
         * @summary `weighting_factors`.
         * @public
         * @readonly
         */
        readonly weighting_factors: OPTIONAL<INSTANCE_OF>
    ) {}

    /**
     * @summary Restructures an object into a ConnectionInformation
     * @description
     *
     * This takes an `object` and converts it to a `ConnectionInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionInformation`.
     * @returns {ConnectionInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ConnectionInformation]: ConnectionInformation[_K] }
    ): ConnectionInformation {
        return new ConnectionInformation(
            _o.application_context,
            _o.profiles,
            _o.dn_used_in_a_associate,
            _o.network_address_reliable,
            _o.authentication_method,
            _o.weighting_factors
        );
    }

    /**
     * @summary Getter that returns the default value for `application_context`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_application_context(): OBJECT_IDENTIFIER {
        return id_ac_mts_transfer;
    }
    /**
     * @summary Getter that returns the default value for `dn_used_in_a_associate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dn_used_in_a_associate(): BOOLEAN {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `network_address_reliable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_network_address_reliable(): BOOLEAN {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `authentication_method`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_authentication_method(): AuthenticationMethod {
        return simple_password;
    }
}
/* END_OF_SYMBOL_DEFINITION ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectionInformation */
/**
 * @summary The Leading Root Component Types of ConnectionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectionInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'application-context',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'profiles',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dn-used-in-a-associate',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'network-address-reliable',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'authentication-method',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'weighting-factors',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectionInformation */
/**
 * @summary The Trailing Root Component Types of ConnectionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectionInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectionInformation */
/**
 * @summary The Extension Addition Component Types of ConnectionInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectionInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionInformation */
let _cached_decoder_for_ConnectionInformation: $.ASN1Decoder<ConnectionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectionInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionInformation} The decoded data structure.
 */
export function _decode_ConnectionInformation(el: _Element) {
    if (!_cached_decoder_for_ConnectionInformation) {
        _cached_decoder_for_ConnectionInformation = function (
            el: _Element
        ): ConnectionInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let application_context: OPTIONAL<OBJECT_IDENTIFIER> =
                ConnectionInformation._default_value_for_application_context;
            let profiles: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let dn_used_in_a_associate: OPTIONAL<BOOLEAN> =
                ConnectionInformation._default_value_for_dn_used_in_a_associate;
            let network_address_reliable: OPTIONAL<BOOLEAN> =
                ConnectionInformation._default_value_for_network_address_reliable;
            let authentication_method: OPTIONAL<AuthenticationMethod> =
                ConnectionInformation._default_value_for_authentication_method;
            let weighting_factors: OPTIONAL<INSTANCE_OF>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'application-context': (_el: _Element): void => {
                    application_context = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                profiles: (_el: _Element): void => {
                    profiles = $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                'dn-used-in-a-associate': (_el: _Element): void => {
                    dn_used_in_a_associate = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'network-address-reliable': (_el: _Element): void => {
                    network_address_reliable = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'authentication-method': (_el: _Element): void => {
                    authentication_method = $._decode_implicit<AuthenticationMethod>(
                        () => _decode_AuthenticationMethod
                    )(_el);
                },
                'weighting-factors': (_el: _Element): void => {
                    weighting_factors = $._decode_implicit<INSTANCE_OF>(
                        () => $._decodeInstanceOf
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConnectionInformation,
                _extension_additions_list_spec_for_ConnectionInformation,
                _root_component_type_list_2_spec_for_ConnectionInformation,
                undefined
            );
            return new ConnectionInformation /* SET_CONSTRUCTOR_CALL */(
                application_context,
                profiles,
                dn_used_in_a_associate,
                network_address_reliable,
                authentication_method,
                weighting_factors
            );
        };
    }
    return _cached_decoder_for_ConnectionInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionInformation */
let _cached_encoder_for_ConnectionInformation: $.ASN1Encoder<ConnectionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectionInformation */
/**
 * @summary Encodes a(n) ConnectionInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionInformation, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionInformation(
    value: ConnectionInformation,
    elGetter: $.ASN1Encoder<ConnectionInformation>
) {
    if (!_cached_encoder_for_ConnectionInformation) {
        _cached_encoder_for_ConnectionInformation = function (
            value: ConnectionInformation,
            elGetter: $.ASN1Encoder<ConnectionInformation>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.application_context ===
                            undefined ||
                        $.deepEq(
                            value.application_context,
                            ConnectionInformation._default_value_for_application_context
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.application_context, $.BER),
                        /* IF_ABSENT  */ value.profiles === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.profiles, $.BER),
                        /* IF_DEFAULT */ value.dn_used_in_a_associate ===
                            undefined ||
                        $.deepEq(
                            value.dn_used_in_a_associate,
                            ConnectionInformation._default_value_for_dn_used_in_a_associate
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.dn_used_in_a_associate, $.BER),
                        /* IF_DEFAULT */ value.network_address_reliable ===
                            undefined ||
                        $.deepEq(
                            value.network_address_reliable,
                            ConnectionInformation._default_value_for_network_address_reliable
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.network_address_reliable, $.BER),
                        /* IF_DEFAULT */ value.authentication_method ===
                            undefined ||
                        $.deepEq(
                            value.authentication_method,
                            ConnectionInformation._default_value_for_authentication_method
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_AuthenticationMethod,
                                  $.BER
                              )(value.authentication_method, $.BER),
                        /* IF_ABSENT  */ value.weighting_factors === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => $._encodeInstanceOf,
                                  $.BER
                              )(value.weighting_factors, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectionInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectionInformation */

/* eslint-enable */
