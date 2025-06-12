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
    MTABindArgument_authenticated,
    _decode_MTABindArgument_authenticated,
    _encode_MTABindArgument_authenticated,
} from '../MTAAbstractService/MTABindArgument-authenticated.ta.js';
export {
    MTABindArgument_authenticated,
    _decode_MTABindArgument_authenticated,
    _encode_MTABindArgument_authenticated,
} from '../MTAAbstractService/MTABindArgument-authenticated.ta.js';

/* START_OF_SYMBOL_DEFINITION MTABindArgument */
/**
 * @summary MTABindArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTABindArgument  ::=  CHOICE {
 *   unauthenticated  NULL, -- if no authentication is required
 *   authenticated
 *     [1]  SET {-- if authentication is required--initiator-name
 *                                                   [0]  MTAName,
 *                                                 initiator-credentials
 *                                                   [1]  InitiatorCredentials
 *                                                          (WITH COMPONENTS {
 *                                                             ...,
 *                                                             protected  ABSENT
 *                                                           }),
 *                                                 security-context
 *                                                   [2]  SecurityContext OPTIONAL
 *   }
 * }
 * ```
 */
export type MTABindArgument =
    | { unauthenticated: NULL } /* CHOICE_ALT_ROOT */
    | { authenticated: MTABindArgument_authenticated } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MTABindArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindArgument */
let _cached_decoder_for_MTABindArgument: $.ASN1Decoder<MTABindArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindArgument */

/* START_OF_SYMBOL_DEFINITION _decode_MTABindArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) MTABindArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTABindArgument} The decoded data structure.
 */
export function _decode_MTABindArgument(el: _Element) {
    if (!_cached_decoder_for_MTABindArgument) {
        _cached_decoder_for_MTABindArgument = $._decode_inextensible_choice<MTABindArgument>(
            {
                'UNIVERSAL 5': ['unauthenticated', $._decodeNull],
                'CONTEXT 1': [
                    'authenticated',
                    $._decode_implicit<MTABindArgument_authenticated>(
                        () => _decode_MTABindArgument_authenticated
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MTABindArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTABindArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindArgument */
let _cached_encoder_for_MTABindArgument: $.ASN1Encoder<MTABindArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindArgument */

/* START_OF_SYMBOL_DEFINITION _encode_MTABindArgument */
/**
 * @summary Encodes a(n) MTABindArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTABindArgument, encoded as an ASN.1 Element.
 */
export function _encode_MTABindArgument(
    value: MTABindArgument,
    elGetter: $.ASN1Encoder<MTABindArgument>
) {
    if (!_cached_encoder_for_MTABindArgument) {
        _cached_encoder_for_MTABindArgument = $._encode_choice<MTABindArgument>(
            {
                unauthenticated: $._encodeNull,
                authenticated: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MTABindArgument_authenticated,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTABindArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTABindArgument */

/* eslint-enable */
