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
    AC_PPDU,
    _decode_AC_PPDU,
    _encode_AC_PPDU,
} from '../ISO8823-PRESENTATION/AC-PPDU.ta';
export {
    AC_PPDU,
    _decode_AC_PPDU,
    _encode_AC_PPDU,
} from '../ISO8823-PRESENTATION/AC-PPDU.ta';
import {
    ACA_PPDU,
    _decode_ACA_PPDU,
    _encode_ACA_PPDU,
} from '../ISO8823-PRESENTATION/ACA-PPDU.ta';
export {
    ACA_PPDU,
    _decode_ACA_PPDU,
    _encode_ACA_PPDU,
} from '../ISO8823-PRESENTATION/ACA-PPDU.ta';
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

/* START_OF_SYMBOL_DEFINITION Typed_data_type */
/**
 * @summary Typed_data_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Typed-data-type  ::=  CHOICE {
 *   acPPDU   [0] IMPLICIT AC-PPDU--  P-ALTER-CONTEXT request and indication -- ,
 *   acaPPDU  [1] IMPLICIT ACA-PPDU--  P-ALTER-CONTEXT response and confirm -- ,
 *   ttdPPDU  User-data --  P-TYPED-DATA request and indication
 * }
 * ```
 */
export type Typed_data_type =
    | { acPPDU: AC_PPDU } /* CHOICE_ALT_ROOT */
    | { acaPPDU: ACA_PPDU } /* CHOICE_ALT_ROOT */
    | { ttdPPDU: User_data } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Typed_data_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Typed_data_type */
let _cached_decoder_for_Typed_data_type: $.ASN1Decoder<Typed_data_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Typed_data_type */

/* START_OF_SYMBOL_DEFINITION _decode_Typed_data_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Typed_data_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Typed_data_type} The decoded data structure.
 */
export function _decode_Typed_data_type(el: _Element) {
    if (!_cached_decoder_for_Typed_data_type) {
        _cached_decoder_for_Typed_data_type = $._decode_inextensible_choice<Typed_data_type>(
            {
                'CONTEXT 0': [
                    'acPPDU',
                    $._decode_implicit<AC_PPDU>(() => _decode_AC_PPDU),
                ],
                'CONTEXT 1': [
                    'acaPPDU',
                    $._decode_implicit<ACA_PPDU>(() => _decode_ACA_PPDU),
                ],
                'APPLICATION 0': ['ttdPPDU', _decode_User_data],
                'APPLICATION 1': ['ttdPPDU', _decode_User_data],
            }
        );
    }
    return _cached_decoder_for_Typed_data_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Typed_data_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Typed_data_type */
let _cached_encoder_for_Typed_data_type: $.ASN1Encoder<Typed_data_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Typed_data_type */

/* START_OF_SYMBOL_DEFINITION _encode_Typed_data_type */
/**
 * @summary Encodes a(n) Typed_data_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Typed_data_type, encoded as an ASN.1 Element.
 */
export function _encode_Typed_data_type(
    value: Typed_data_type,
    elGetter: $.ASN1Encoder<Typed_data_type>
) {
    if (!_cached_encoder_for_Typed_data_type) {
        _cached_encoder_for_Typed_data_type = $._encode_choice<Typed_data_type>(
            {
                acPPDU: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AC_PPDU,
                    $.BER
                ),
                acaPPDU: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ACA_PPDU,
                    $.BER
                ),
                ttdPPDU: _encode_User_data,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Typed_data_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Typed_data_type */

/* eslint-enable */
