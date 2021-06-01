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
    ResponderCredentials,
    _decode_ResponderCredentials,
    _encode_ResponderCredentials,
} from '../MTSAbstractService/ResponderCredentials.ta';
export {
    ResponderCredentials,
    _decode_ResponderCredentials,
    _encode_ResponderCredentials,
} from '../MTSAbstractService/ResponderCredentials.ta';

/* START_OF_SYMBOL_DEFINITION MTABindResult_authenticated */
/**
 * @summary MTABindResult_authenticated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTABindResult-authenticated ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class MTABindResult_authenticated {
    constructor(
        /**
         * @summary `responder_name`.
         * @public
         * @readonly
         */
        readonly responder_name: MTAName,
        /**
         * @summary `responder_credentials`.
         * @public
         * @readonly
         */
        readonly responder_credentials: ResponderCredentials
    ) {}

    /**
     * @summary Restructures an object into a MTABindResult_authenticated
     * @description
     *
     * This takes an `object` and converts it to a `MTABindResult_authenticated`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTABindResult_authenticated`.
     * @returns {MTABindResult_authenticated}
     */
    public static _from_object(
        _o: {
            [_K in keyof MTABindResult_authenticated]: MTABindResult_authenticated[_K];
        }
    ): MTABindResult_authenticated {
        return new MTABindResult_authenticated(
            _o.responder_name,
            _o.responder_credentials
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTABindResult_authenticated */
/**
 * @summary The Leading Root Component Types of MTABindResult_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MTABindResult_authenticated: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'responder-name',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'responder-credentials',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTABindResult_authenticated */
/**
 * @summary The Trailing Root Component Types of MTABindResult_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MTABindResult_authenticated: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTABindResult_authenticated */
/**
 * @summary The Extension Addition Component Types of MTABindResult_authenticated
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MTABindResult_authenticated: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindResult_authenticated */
let _cached_decoder_for_MTABindResult_authenticated: $.ASN1Decoder<MTABindResult_authenticated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _decode_MTABindResult_authenticated */
/**
 * @summary Decodes an ASN.1 element into a(n) MTABindResult_authenticated
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTABindResult_authenticated} The decoded data structure.
 */
export function _decode_MTABindResult_authenticated(el: _Element) {
    if (!_cached_decoder_for_MTABindResult_authenticated) {
        _cached_decoder_for_MTABindResult_authenticated = function (
            el: _Element
        ): MTABindResult_authenticated {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let responder_name!: MTAName;
            let responder_credentials!: ResponderCredentials;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'responder-name': (_el: _Element): void => {
                    responder_name = $._decode_implicit<MTAName>(
                        () => _decode_MTAName
                    )(_el);
                },
                'responder-credentials': (_el: _Element): void => {
                    responder_credentials = $._decode_explicit<ResponderCredentials>(
                        () => _decode_ResponderCredentials
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MTABindResult_authenticated,
                _extension_additions_list_spec_for_MTABindResult_authenticated,
                _root_component_type_list_2_spec_for_MTABindResult_authenticated,
                undefined
            );
            return new MTABindResult_authenticated /* SET_CONSTRUCTOR_CALL */(
                responder_name,
                responder_credentials
            );
        };
    }
    return _cached_decoder_for_MTABindResult_authenticated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindResult_authenticated */
let _cached_encoder_for_MTABindResult_authenticated: $.ASN1Encoder<MTABindResult_authenticated> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindResult_authenticated */

/* START_OF_SYMBOL_DEFINITION _encode_MTABindResult_authenticated */
/**
 * @summary Encodes a(n) MTABindResult_authenticated into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTABindResult_authenticated, encoded as an ASN.1 Element.
 */
export function _encode_MTABindResult_authenticated(
    value: MTABindResult_authenticated,
    elGetter: $.ASN1Encoder<MTABindResult_authenticated>
) {
    if (!_cached_encoder_for_MTABindResult_authenticated) {
        _cached_encoder_for_MTABindResult_authenticated = function (
            value: MTABindResult_authenticated,
            elGetter: $.ASN1Encoder<MTABindResult_authenticated>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_MTAName,
                            $.BER
                        )(value.responder_name, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ResponderCredentials,
                            $.BER
                        )(value.responder_credentials, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MTABindResult_authenticated(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTABindResult_authenticated */

/* eslint-enable */
