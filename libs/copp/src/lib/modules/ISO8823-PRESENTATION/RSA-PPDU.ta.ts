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
    Presentation_context_identifier_list,
    _decode_Presentation_context_identifier_list,
    _encode_Presentation_context_identifier_list,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier-list.ta';
export {
    Presentation_context_identifier_list,
    _decode_Presentation_context_identifier_list,
    _encode_Presentation_context_identifier_list,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier-list.ta';
import {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta';
export {
    User_data,
    _decode_User_data,
    _encode_User_data,
} from '../ISO8823-PRESENTATION/User-data.ta';

/* START_OF_SYMBOL_DEFINITION RSA_PPDU */
/**
 * @summary RSA_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSA-PPDU ::= SEQUENCE {
 *   presentation-context-identifier-list
 *     [0] IMPLICIT Presentation-context-identifier-list OPTIONAL,
 *   user-data                             User-data OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RSA_PPDU {
    constructor(
        /**
         * @summary `presentation_context_identifier_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier_list: OPTIONAL<Presentation_context_identifier_list>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<User_data>
    ) {}

    /**
     * @summary Restructures an object into a RSA_PPDU
     * @description
     *
     * This takes an `object` and converts it to a `RSA_PPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSA_PPDU`.
     * @returns {RSA_PPDU}
     */
    public static _from_object(
        _o: { [_K in keyof RSA_PPDU]: RSA_PPDU[_K] }
    ): RSA_PPDU {
        return new RSA_PPDU(
            _o.presentation_context_identifier_list,
            _o.user_data
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSA_PPDU */
/**
 * @summary The Leading Root Component Types of RSA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSA_PPDU: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'presentation-context-identifier-list',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec('user-data', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSA_PPDU */
/**
 * @summary The Trailing Root Component Types of RSA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSA_PPDU: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSA_PPDU */
/**
 * @summary The Extension Addition Component Types of RSA_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSA_PPDU: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RSA_PPDU */
let _cached_decoder_for_RSA_PPDU: $.ASN1Decoder<RSA_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _decode_RSA_PPDU */
/**
 * @summary Decodes an ASN.1 element into a(n) RSA_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSA_PPDU} The decoded data structure.
 */
export function _decode_RSA_PPDU(el: _Element) {
    if (!_cached_decoder_for_RSA_PPDU) {
        _cached_decoder_for_RSA_PPDU = function (el: _Element): RSA_PPDU {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let presentation_context_identifier_list: OPTIONAL<Presentation_context_identifier_list>;
            let user_data: OPTIONAL<User_data>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'presentation-context-identifier-list': (
                    _el: _Element
                ): void => {
                    presentation_context_identifier_list = $._decode_implicit<Presentation_context_identifier_list>(
                        () => _decode_Presentation_context_identifier_list
                    )(_el);
                },
                'user-data': (_el: _Element): void => {
                    user_data = _decode_User_data(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSA_PPDU,
                _extension_additions_list_spec_for_RSA_PPDU,
                _root_component_type_list_2_spec_for_RSA_PPDU,
                undefined
            );
            return new RSA_PPDU /* SEQUENCE_CONSTRUCTOR_CALL */(
                presentation_context_identifier_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_RSA_PPDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RSA_PPDU */
let _cached_encoder_for_RSA_PPDU: $.ASN1Encoder<RSA_PPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RSA_PPDU */

/* START_OF_SYMBOL_DEFINITION _encode_RSA_PPDU */
/**
 * @summary Encodes a(n) RSA_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSA_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_RSA_PPDU(
    value: RSA_PPDU,
    elGetter: $.ASN1Encoder<RSA_PPDU>
) {
    if (!_cached_encoder_for_RSA_PPDU) {
        _cached_encoder_for_RSA_PPDU = function (
            value: RSA_PPDU,
            elGetter: $.ASN1Encoder<RSA_PPDU>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.presentation_context_identifier_list ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_Presentation_context_identifier_list,
                                  $.BER
                              )(
                                  value.presentation_context_identifier_list,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_User_data(value.user_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RSA_PPDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RSA_PPDU */

/* eslint-enable */
