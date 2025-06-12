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
    AuthorizationInformation,
    _decode_AuthorizationInformation,
    _encode_AuthorizationInformation,
} from '../EDIMSInformationObjects/AuthorizationInformation.ta.mjs';
export {
    AuthorizationInformation,
    _decode_AuthorizationInformation,
    _encode_AuthorizationInformation,
} from '../EDIMSInformationObjects/AuthorizationInformation.ta.mjs';
import {
    AuthorizationInformationQualifier,
    _decode_AuthorizationInformationQualifier,
    _encode_AuthorizationInformationQualifier,
} from '../EDIMSInformationObjects/AuthorizationInformationQualifier.ta.mjs';
export {
    AuthorizationInformationQualifier,
    _decode_AuthorizationInformationQualifier,
    _encode_AuthorizationInformationQualifier,
} from '../EDIMSInformationObjects/AuthorizationInformationQualifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AuthorizationInformationField */
/**
 * @summary AuthorizationInformationField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationInformationField ::= SEQUENCE {
 *   authorization-information            [0]  AuthorizationInformation,
 *   authorization-information-qualifier
 *     [1]  AuthorizationInformationQualifier OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AuthorizationInformationField {
    constructor(
        /**
         * @summary `authorization_information`.
         * @public
         * @readonly
         */
        readonly authorization_information: AuthorizationInformation,
        /**
         * @summary `authorization_information_qualifier`.
         * @public
         * @readonly
         */
        readonly authorization_information_qualifier: OPTIONAL<AuthorizationInformationQualifier>
    ) {}

    /**
     * @summary Restructures an object into a AuthorizationInformationField
     * @description
     *
     * This takes an `object` and converts it to a `AuthorizationInformationField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizationInformationField`.
     * @returns {AuthorizationInformationField}
     */
    public static _from_object(
        _o: {
            [_K in keyof AuthorizationInformationField]: AuthorizationInformationField[_K];
        }
    ): AuthorizationInformationField {
        return new AuthorizationInformationField(
            _o.authorization_information,
            _o.authorization_information_qualifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthorizationInformationField */
/**
 * @summary The Leading Root Component Types of AuthorizationInformationField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthorizationInformationField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'authorization-information',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'authorization-information-qualifier',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthorizationInformationField */
/**
 * @summary The Trailing Root Component Types of AuthorizationInformationField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthorizationInformationField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthorizationInformationField */
/**
 * @summary The Extension Addition Component Types of AuthorizationInformationField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthorizationInformationField: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationInformationField */
let _cached_decoder_for_AuthorizationInformationField: $.ASN1Decoder<AuthorizationInformationField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _decode_AuthorizationInformationField */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationInformationField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationInformationField} The decoded data structure.
 */
export function _decode_AuthorizationInformationField(el: _Element) {
    if (!_cached_decoder_for_AuthorizationInformationField) {
        _cached_decoder_for_AuthorizationInformationField = function (
            el: _Element
        ): AuthorizationInformationField {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let authorization_information!: AuthorizationInformation;
            let authorization_information_qualifier: OPTIONAL<AuthorizationInformationQualifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'authorization-information': (_el: _Element): void => {
                    authorization_information = $._decode_implicit<AuthorizationInformation>(
                        () => _decode_AuthorizationInformation
                    )(_el);
                },
                'authorization-information-qualifier': (
                    _el: _Element
                ): void => {
                    authorization_information_qualifier = $._decode_implicit<AuthorizationInformationQualifier>(
                        () => _decode_AuthorizationInformationQualifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthorizationInformationField,
                _extension_additions_list_spec_for_AuthorizationInformationField,
                _root_component_type_list_2_spec_for_AuthorizationInformationField,
                undefined
            );
            return new AuthorizationInformationField /* SEQUENCE_CONSTRUCTOR_CALL */(
                authorization_information,
                authorization_information_qualifier
            );
        };
    }
    return _cached_decoder_for_AuthorizationInformationField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationInformationField */
let _cached_encoder_for_AuthorizationInformationField: $.ASN1Encoder<AuthorizationInformationField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthorizationInformationField */

/* START_OF_SYMBOL_DEFINITION _encode_AuthorizationInformationField */
/**
 * @summary Encodes a(n) AuthorizationInformationField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationInformationField, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationInformationField(
    value: AuthorizationInformationField,
    elGetter: $.ASN1Encoder<AuthorizationInformationField>
) {
    if (!_cached_encoder_for_AuthorizationInformationField) {
        _cached_encoder_for_AuthorizationInformationField = function (
            value: AuthorizationInformationField,
            elGetter: $.ASN1Encoder<AuthorizationInformationField>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AuthorizationInformation,
                            $.BER
                        )(value.authorization_information, $.BER),
                        /* IF_ABSENT  */ value.authorization_information_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_AuthorizationInformationQualifier,
                                  $.BER
                              )(
                                  value.authorization_information_qualifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthorizationInformationField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthorizationInformationField */

/* eslint-enable */
