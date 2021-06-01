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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTSAbstractService/RecipientName.ta';
export {
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTSAbstractService/RecipientName.ta';
import {
    TBSAsymmetricToken_name_mta,
    _decode_TBSAsymmetricToken_name_mta,
    _encode_TBSAsymmetricToken_name_mta,
} from '../MTSAbstractService/TBSAsymmetricToken-name-mta.ta';
export {
    TBSAsymmetricToken_name_mta,
    _decode_TBSAsymmetricToken_name_mta,
    _encode_TBSAsymmetricToken_name_mta,
} from '../MTSAbstractService/TBSAsymmetricToken-name-mta.ta';

/* START_OF_SYMBOL_DEFINITION TBSAsymmetricToken_name */
/**
 * @summary TBSAsymmetricToken_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAsymmetricToken-name  ::=  CHOICE {
 *     recipient-name  RecipientName,
 *     mta             [3] TBSAsymmetricToken-name-mta }
 * ```
 */
export type TBSAsymmetricToken_name =
    | { recipient_name: RecipientName } /* CHOICE_ALT_ROOT */
    | { mta: TBSAsymmetricToken_name_mta } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TBSAsymmetricToken_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSAsymmetricToken_name */
let _cached_decoder_for_TBSAsymmetricToken_name: $.ASN1Decoder<TBSAsymmetricToken_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSAsymmetricToken_name */

/* START_OF_SYMBOL_DEFINITION _decode_TBSAsymmetricToken_name */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSAsymmetricToken_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAsymmetricToken_name} The decoded data structure.
 */
export function _decode_TBSAsymmetricToken_name(el: _Element) {
    if (!_cached_decoder_for_TBSAsymmetricToken_name) {
        _cached_decoder_for_TBSAsymmetricToken_name = $._decode_inextensible_choice<TBSAsymmetricToken_name>(
            {
                'APPLICATION 0': ['recipient_name', _decode_RecipientName],
                'CONTEXT 3': [
                    'mta',
                    $._decode_implicit<TBSAsymmetricToken_name_mta>(
                        () => _decode_TBSAsymmetricToken_name_mta
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TBSAsymmetricToken_name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSAsymmetricToken_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSAsymmetricToken_name */
let _cached_encoder_for_TBSAsymmetricToken_name: $.ASN1Encoder<TBSAsymmetricToken_name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSAsymmetricToken_name */

/* START_OF_SYMBOL_DEFINITION _encode_TBSAsymmetricToken_name */
/**
 * @summary Encodes a(n) TBSAsymmetricToken_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAsymmetricToken_name, encoded as an ASN.1 Element.
 */
export function _encode_TBSAsymmetricToken_name(
    value: TBSAsymmetricToken_name,
    elGetter: $.ASN1Encoder<TBSAsymmetricToken_name>
) {
    if (!_cached_encoder_for_TBSAsymmetricToken_name) {
        _cached_encoder_for_TBSAsymmetricToken_name = $._encode_choice<TBSAsymmetricToken_name>(
            {
                recipient_name: _encode_RecipientName,
                mta: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TBSAsymmetricToken_name_mta,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBSAsymmetricToken_name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSAsymmetricToken_name */

/* eslint-enable */
