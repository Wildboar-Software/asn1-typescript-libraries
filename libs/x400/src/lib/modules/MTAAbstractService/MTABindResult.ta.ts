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
    MTABindResult_authenticated,
    _decode_MTABindResult_authenticated,
    _encode_MTABindResult_authenticated,
} from '../MTAAbstractService/MTABindResult-authenticated.ta';
export {
    MTABindResult_authenticated,
    _decode_MTABindResult_authenticated,
    _encode_MTABindResult_authenticated,
} from '../MTAAbstractService/MTABindResult-authenticated.ta';

/* START_OF_SYMBOL_DEFINITION MTABindResult */
/**
 * @summary MTABindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTABindResult  ::=  CHOICE {
 *   unauthenticated  NULL, -- if no authentication is required
 *   authenticated
 *     [1]  SET {-- if authentication is required--responder-name
 *                                                   [0]  MTAName,
 *                                                 responder-credentials
 *                                                   [1]  ResponderCredentials
 *                                                          (WITH COMPONENTS {
 *                                                             ...,
 *                                                             protected  ABSENT
 *                                                           })}
 * }
 * ```
 */
export type MTABindResult =
    | { unauthenticated: NULL } /* CHOICE_ALT_ROOT */
    | { authenticated: MTABindResult_authenticated } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MTABindResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindResult */
let _cached_decoder_for_MTABindResult: $.ASN1Decoder<MTABindResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTABindResult */

/* START_OF_SYMBOL_DEFINITION _decode_MTABindResult */
/**
 * @summary Decodes an ASN.1 element into a(n) MTABindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTABindResult} The decoded data structure.
 */
export function _decode_MTABindResult(el: _Element) {
    if (!_cached_decoder_for_MTABindResult) {
        _cached_decoder_for_MTABindResult = $._decode_inextensible_choice<MTABindResult>(
            {
                'UNIVERSAL 5': ['unauthenticated', $._decodeNull],
                'CONTEXT 1': [
                    'authenticated',
                    $._decode_implicit<MTABindResult_authenticated>(
                        () => _decode_MTABindResult_authenticated
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MTABindResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTABindResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindResult */
let _cached_encoder_for_MTABindResult: $.ASN1Encoder<MTABindResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTABindResult */

/* START_OF_SYMBOL_DEFINITION _encode_MTABindResult */
/**
 * @summary Encodes a(n) MTABindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTABindResult, encoded as an ASN.1 Element.
 */
export function _encode_MTABindResult(
    value: MTABindResult,
    elGetter: $.ASN1Encoder<MTABindResult>
) {
    if (!_cached_encoder_for_MTABindResult) {
        _cached_encoder_for_MTABindResult = $._encode_choice<MTABindResult>(
            {
                unauthenticated: $._encodeNull,
                authenticated: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MTABindResult_authenticated,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTABindResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTABindResult */

/* eslint-enable */
