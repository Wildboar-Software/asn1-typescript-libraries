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
    EDIBodyPart,
    _decode_EDIBodyPart,
    _encode_EDIBodyPart,
} from '../EDIMSInformationObjects/EDIBodyPart.ta';
export {
    EDIBodyPart,
    _decode_EDIBodyPart,
    _encode_EDIBodyPart,
} from '../EDIMSInformationObjects/EDIBodyPart.ta';
import {
    EDIMBodyPart,
    _decode_EDIMBodyPart,
    _encode_EDIMBodyPart,
} from '../EDIMSInformationObjects/EDIMBodyPart.ta';
export {
    EDIMBodyPart,
    _decode_EDIMBodyPart,
    _encode_EDIMBodyPart,
} from '../EDIMSInformationObjects/EDIMBodyPart.ta';

/* START_OF_SYMBOL_DEFINITION PrimaryBodyPart */
/**
 * @summary PrimaryBodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryBodyPart  ::=  CHOICE {
 *   edi-body-part   [0]  EDIBodyPart,
 *   forwarded-EDIM  [1]  EDIMBodyPart
 * }
 * ```
 */
export type PrimaryBodyPart =
    | { edi_body_part: EDIBodyPart } /* CHOICE_ALT_ROOT */
    | { forwarded_EDIM: EDIMBodyPart } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PrimaryBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryBodyPart */
let _cached_decoder_for_PrimaryBodyPart: $.ASN1Decoder<PrimaryBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryBodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_PrimaryBodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryBodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryBodyPart} The decoded data structure.
 */
export function _decode_PrimaryBodyPart(el: _Element) {
    if (!_cached_decoder_for_PrimaryBodyPart) {
        _cached_decoder_for_PrimaryBodyPart = $._decode_inextensible_choice<PrimaryBodyPart>(
            {
                'CONTEXT 0': [
                    'edi_body_part',
                    $._decode_implicit<EDIBodyPart>(() => _decode_EDIBodyPart),
                ],
                'CONTEXT 1': [
                    'forwarded_EDIM',
                    $._decode_implicit<EDIMBodyPart>(
                        () => _decode_EDIMBodyPart
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PrimaryBodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrimaryBodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryBodyPart */
let _cached_encoder_for_PrimaryBodyPart: $.ASN1Encoder<PrimaryBodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryBodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_PrimaryBodyPart */
/**
 * @summary Encodes a(n) PrimaryBodyPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryBodyPart, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryBodyPart(
    value: PrimaryBodyPart,
    elGetter: $.ASN1Encoder<PrimaryBodyPart>
) {
    if (!_cached_encoder_for_PrimaryBodyPart) {
        _cached_encoder_for_PrimaryBodyPart = $._encode_choice<PrimaryBodyPart>(
            {
                edi_body_part: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_EDIBodyPart,
                    $.BER
                ),
                forwarded_EDIM: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_EDIMBodyPart,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrimaryBodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrimaryBodyPart */

/* eslint-enable */
