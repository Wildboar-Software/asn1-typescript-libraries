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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
export {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
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

/* START_OF_SYMBOL_DEFINITION MTABindArgument_authenticated */
/**
 * @summary MTABindArgument_authenticated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTABindArgument-authenticated ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class MTABindArgument_authenticated {
    constructor(
        /**
         * @summary `initiator_name`.
         * @public
         * @readonly
         */
        readonly initiator_name: MTAName,
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
        readonly security_context: OPTIONAL<SecurityContext>
    ) {}

    /**
     * @summary Restructures an object into a MTABindArgument_authenticated
     * @description
     *
     * This takes an `object` and converts it to a `MTABindArgument_authenticated`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTABindArgument_authenticated`.
     * @returns {MTABindArgument_authenticated}
     */
    public static _from_object(
        _o: {
            [_K in keyof MTABindArgument_authenticated]: MTABindArgument_authenticated[_K];
        }
    ): MTABindArgument_authenticated {
        return new MTABindArgument_authenticated(
            _o.initiator_name,
            _o.initiator_credentials,
            _o.security_context
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTABindArgument_authenticated */
/**
 * @summary The Leading Root Component Types of MTABindArgument_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTABindArgument_authenticated: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'initiator-name',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'initiator-credentials',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'security-context',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTABindArgument_authenticated */
/**
 * @summary The Trailing Root Component Types of MTABindArgument_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTABindArgument_authenticated: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTABindArgument_authenticated */
/**
 * @summary The Extension Addition Component Types of MTABindArgument_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTABindArgument_authenticated: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindArgument_authenticated */
let _cached_decoder_for_MTABindArgument_authenticated: $.ASN1Decoder<MTABindArgument_authenticated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _decode_MTABindArgument_authenticated */
/**
 * @summary Decodes an ASN.1 element into a(n) MTABindArgument_authenticated
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTABindArgument_authenticated} The decoded data structure.
 */
export function _decode_MTABindArgument_authenticated(el: _Element) {
    if (!_cached_decoder_for_MTABindArgument_authenticated) {
        _cached_decoder_for_MTABindArgument_authenticated = function (
            el: _Element
        ): MTABindArgument_authenticated {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let initiator_name!: MTAName;
            let initiator_credentials!: InitiatorCredentials;
            let security_context: OPTIONAL<SecurityContext>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'initiator-name': (_el: _Element): void => {
                    initiator_name = $._decode_implicit<MTAName>(
                        () => _decode_MTAName
                    )(_el);
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MTABindArgument_authenticated,
                _extension_additions_list_spec_for_MTABindArgument_authenticated,
                _root_component_type_list_2_spec_for_MTABindArgument_authenticated,
                undefined
            );
            return new MTABindArgument_authenticated /* SET_CONSTRUCTOR_CALL */(
                initiator_name,
                initiator_credentials,
                security_context
            );
        };
    }
    return _cached_decoder_for_MTABindArgument_authenticated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindArgument_authenticated */
let _cached_encoder_for_MTABindArgument_authenticated: $.ASN1Encoder<MTABindArgument_authenticated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindArgument_authenticated */

/* START_OF_SYMBOL_DEFINITION _encode_MTABindArgument_authenticated */
/**
 * @summary Encodes a(n) MTABindArgument_authenticated into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTABindArgument_authenticated, encoded as an ASN.1 Element.
 */
export function _encode_MTABindArgument_authenticated(
    value: MTABindArgument_authenticated,
    elGetter: $.ASN1Encoder<MTABindArgument_authenticated>
) {
    if (!_cached_encoder_for_MTABindArgument_authenticated) {
        _cached_encoder_for_MTABindArgument_authenticated = function (
            value: MTABindArgument_authenticated,
            elGetter: $.ASN1Encoder<MTABindArgument_authenticated>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MTAName,
                            $.BER
                        )(value.initiator_name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_InitiatorCredentials,
                            $.BER
                        )(value.initiator_credentials, $.BER),
                        /* IF_ABSENT  */ value.security_context === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SecurityContext,
                                  $.BER
                              )(value.security_context, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MTABindArgument_authenticated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTABindArgument_authenticated */

/* eslint-enable */
