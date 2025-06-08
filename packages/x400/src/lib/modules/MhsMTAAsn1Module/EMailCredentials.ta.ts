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
    EMailSimpleCredentials,
    _decode_EMailSimpleCredentials,
    _encode_EMailSimpleCredentials,
} from '../MhsMTAAsn1Module/EMailSimpleCredentials.ta';
export {
    EMailSimpleCredentials,
    _decode_EMailSimpleCredentials,
    _encode_EMailSimpleCredentials,
} from '../MhsMTAAsn1Module/EMailSimpleCredentials.ta';
import {
    EMailStrongCredentials,
    _decode_EMailStrongCredentials,
    _encode_EMailStrongCredentials,
} from '../MhsMTAAsn1Module/EMailStrongCredentials.ta';
export {
    EMailStrongCredentials,
    _decode_EMailStrongCredentials,
    _encode_EMailStrongCredentials,
} from '../MhsMTAAsn1Module/EMailStrongCredentials.ta';

/* START_OF_SYMBOL_DEFINITION EMailCredentials */
/**
 * @summary EMailCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailCredentials  ::=  CHOICE {
 *   simple  EMailSimpleCredentials,
 *   strong  EMailStrongCredentials
 * }
 * ```
 */
export type EMailCredentials =
    | { simple: EMailSimpleCredentials } /* CHOICE_ALT_ROOT */
    | { strong: EMailStrongCredentials } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailCredentials */
let _cached_decoder_for_EMailCredentials: $.ASN1Decoder<EMailCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_EMailCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailCredentials} The decoded data structure.
 */
export function _decode_EMailCredentials(el: _Element) {
    if (!_cached_decoder_for_EMailCredentials) {
        _cached_decoder_for_EMailCredentials = $._decode_inextensible_choice<EMailCredentials>(
            {
                'UNIVERSAL 22': ['simple', _decode_EMailSimpleCredentials],
                'UNIVERSAL 4': ['simple', _decode_EMailSimpleCredentials],
                'CONTEXT 0': ['strong', _decode_EMailStrongCredentials],
                'CONTEXT 1': ['strong', _decode_EMailStrongCredentials],
            }
        );
    }
    return _cached_decoder_for_EMailCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailCredentials */
let _cached_encoder_for_EMailCredentials: $.ASN1Encoder<EMailCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_EMailCredentials */
/**
 * @summary Encodes a(n) EMailCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailCredentials, encoded as an ASN.1 Element.
 */
export function _encode_EMailCredentials(
    value: EMailCredentials,
    elGetter: $.ASN1Encoder<EMailCredentials>
) {
    if (!_cached_encoder_for_EMailCredentials) {
        _cached_encoder_for_EMailCredentials = $._encode_choice<EMailCredentials>(
            {
                simple: _encode_EMailSimpleCredentials,
                strong: _encode_EMailStrongCredentials,
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailCredentials */

/* eslint-enable */
