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
    BindTokenSignedData,
    _decode_BindTokenSignedData,
    _encode_BindTokenSignedData,
} from '../MTSAbstractService/BindTokenSignedData.ta';
export {
    BindTokenSignedData,
    _decode_BindTokenSignedData,
    _encode_BindTokenSignedData,
} from '../MTSAbstractService/BindTokenSignedData.ta';
import {
    BindTokenEncryptedData,
    _decode_BindTokenEncryptedData,
    _encode_BindTokenEncryptedData,
} from '../MTSAbstractService/BindTokenEncryptedData.ta';
export {
    BindTokenEncryptedData,
    _decode_BindTokenEncryptedData,
    _encode_BindTokenEncryptedData,
} from '../MTSAbstractService/BindTokenEncryptedData.ta';

/* START_OF_SYMBOL_DEFINITION BindToken */
/**
 * @summary BindToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindToken  ::=  CHOICE {
 *   signed     [0]  BindTokenSignedData,
 *   encrypted  [1]  BindTokenEncryptedData
 * }
 * ```
 */
export type BindToken =
    | { signed: BindTokenSignedData } /* CHOICE_ALT_ROOT */
    | { encrypted: BindTokenEncryptedData } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BindToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindToken */
let _cached_decoder_for_BindToken: $.ASN1Decoder<BindToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindToken */

/* START_OF_SYMBOL_DEFINITION _decode_BindToken */
/**
 * @summary Decodes an ASN.1 element into a(n) BindToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindToken} The decoded data structure.
 */
export function _decode_BindToken(el: _Element) {
    if (!_cached_decoder_for_BindToken) {
        _cached_decoder_for_BindToken = $._decode_inextensible_choice<BindToken>(
            {
                'CONTEXT 0': [
                    'signed',
                    $._decode_implicit<BindTokenSignedData>(
                        () => _decode_BindTokenSignedData
                    ),
                ],
                'CONTEXT 1': [
                    'encrypted',
                    $._decode_implicit<BindTokenEncryptedData>(
                        () => _decode_BindTokenEncryptedData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BindToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindToken */
let _cached_encoder_for_BindToken: $.ASN1Encoder<BindToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindToken */

/* START_OF_SYMBOL_DEFINITION _encode_BindToken */
/**
 * @summary Encodes a(n) BindToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindToken, encoded as an ASN.1 Element.
 */
export function _encode_BindToken(
    value: BindToken,
    elGetter: $.ASN1Encoder<BindToken>
) {
    if (!_cached_encoder_for_BindToken) {
        _cached_encoder_for_BindToken = $._encode_choice<BindToken>(
            {
                signed: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_BindTokenSignedData,
                    $.BER
                ),
                encrypted: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_BindTokenEncryptedData,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BindToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindToken */

/* eslint-enable */
