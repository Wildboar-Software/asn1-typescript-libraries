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

/* START_OF_SYMBOL_DEFINITION GenericStrongCredentials */
/**
 * @summary GenericStrongCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenericStrongCredentials  ::=  EXTERNAL
 * ```
 */
export type GenericStrongCredentials = EXTERNAL; // ExternalType
/* END_OF_SYMBOL_DEFINITION GenericStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericStrongCredentials */
let _cached_decoder_for_GenericStrongCredentials: $.ASN1Decoder<GenericStrongCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenericStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _decode_GenericStrongCredentials */
/**
 * @summary Decodes an ASN.1 element into a(n) GenericStrongCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenericStrongCredentials} The decoded data structure.
 */
export function _decode_GenericStrongCredentials(el: _Element) {
    if (!_cached_decoder_for_GenericStrongCredentials) {
        _cached_decoder_for_GenericStrongCredentials = $._decodeExternal;
    }
    return _cached_decoder_for_GenericStrongCredentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GenericStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericStrongCredentials */
let _cached_encoder_for_GenericStrongCredentials: $.ASN1Encoder<GenericStrongCredentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenericStrongCredentials */

/* START_OF_SYMBOL_DEFINITION _encode_GenericStrongCredentials */
/**
 * @summary Encodes a(n) GenericStrongCredentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericStrongCredentials, encoded as an ASN.1 Element.
 */
export function _encode_GenericStrongCredentials(
    value: GenericStrongCredentials,
    elGetter: $.ASN1Encoder<GenericStrongCredentials>
) {
    if (!_cached_encoder_for_GenericStrongCredentials) {
        _cached_encoder_for_GenericStrongCredentials = $._encodeExternal;
    }
    return _cached_encoder_for_GenericStrongCredentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GenericStrongCredentials */

/* eslint-enable */
