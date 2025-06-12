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
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from '../MTSAbstractService/StrongCredentials.ta.mjs';
export {
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from '../MTSAbstractService/StrongCredentials.ta.mjs';
import {
    GenericStrongCredentials,
    _decode_GenericStrongCredentials,
    _encode_GenericStrongCredentials,
} from '../MhsMTAAsn1Module/GenericStrongCredentials.ta.mjs';
export {
    GenericStrongCredentials,
    _decode_GenericStrongCredentials,
    _encode_GenericStrongCredentials,
} from '../MhsMTAAsn1Module/GenericStrongCredentials.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EMailStrongCredentials */
/**
 * @summary EMailStrongCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailStrongCredentials  ::=  CHOICE {
 *   x400StrongCredentials     [0]  StrongCredentials,
 *   genericStrongCredentials  [1]  GenericStrongCredentials
 * }
 * ```
 */
export type EMailStrongCredentials =
    | { x400StrongCredentials: StrongCredentials } /* CHOICE_ALT_ROOT */
    | {
          genericStrongCredentials: GenericStrongCredentials;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailStrongCredentials */
let _cached_decoder_for_EMailStrongCredentials: $.ASN1Decoder<EMailStrongCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_EMailStrongCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailStrongCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailStrongCredentials} The decoded data structure.
 */
export function _decode_EMailStrongCredentials(el: _Element) {
    if (!_cached_decoder_for_EMailStrongCredentials) {
        _cached_decoder_for_EMailStrongCredentials = $._decode_inextensible_choice<EMailStrongCredentials>(
            {
                'CONTEXT 0': [
                    'x400StrongCredentials',
                    $._decode_implicit<StrongCredentials>(
                        () => _decode_StrongCredentials
                    ),
                ],
                'CONTEXT 1': [
                    'genericStrongCredentials',
                    $._decode_implicit<GenericStrongCredentials>(
                        () => _decode_GenericStrongCredentials
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EMailStrongCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailStrongCredentials */
let _cached_encoder_for_EMailStrongCredentials: $.ASN1Encoder<EMailStrongCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_EMailStrongCredentials */
/**
 * @summary Encodes a(n) EMailStrongCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailStrongCredentials, encoded as an ASN.1 Element.
 */
export function _encode_EMailStrongCredentials(
    value: EMailStrongCredentials,
    elGetter: $.ASN1Encoder<EMailStrongCredentials>
) {
    if (!_cached_encoder_for_EMailStrongCredentials) {
        _cached_encoder_for_EMailStrongCredentials = $._encode_choice<EMailStrongCredentials>(
            {
                x400StrongCredentials: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_StrongCredentials,
                    $.BER
                ),
                genericStrongCredentials: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GenericStrongCredentials,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailStrongCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailStrongCredentials */

/* eslint-enable */
