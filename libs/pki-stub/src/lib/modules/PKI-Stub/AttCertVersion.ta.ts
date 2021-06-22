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

/* START_OF_SYMBOL_DEFINITION AttCertVersion */
/**
 * @summary AttCertVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertVersion  ::=  INTEGER {v2(1)}
 * ```
 */
export type AttCertVersion = INTEGER;
/* END_OF_SYMBOL_DEFINITION AttCertVersion */

/* START_OF_SYMBOL_DEFINITION AttCertVersion_v2 */
/**
 * @summary AttCertVersion_v2
 * @constant
 * @type {number}
 */
export const AttCertVersion_v2: AttCertVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttCertVersion_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary AttCertVersion_v2
 * @constant
 * @type {number}
 */
export const v2: AttCertVersion = AttCertVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttCertVersion */
let _cached_decoder_for_AttCertVersion: $.ASN1Decoder<AttCertVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttCertVersion */

/* START_OF_SYMBOL_DEFINITION _decode_AttCertVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertVersion} The decoded data structure.
 */
export function _decode_AttCertVersion(el: _Element) {
    if (!_cached_decoder_for_AttCertVersion) {
        _cached_decoder_for_AttCertVersion = $._decodeInteger;
    }
    return _cached_decoder_for_AttCertVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttCertVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttCertVersion */
let _cached_encoder_for_AttCertVersion: $.ASN1Encoder<AttCertVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttCertVersion */

/* START_OF_SYMBOL_DEFINITION _encode_AttCertVersion */
/**
 * @summary Encodes a(n) AttCertVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertVersion, encoded as an ASN.1 Element.
 */
export function _encode_AttCertVersion(
    value: AttCertVersion,
    elGetter: $.ASN1Encoder<AttCertVersion>
) {
    if (!_cached_encoder_for_AttCertVersion) {
        _cached_encoder_for_AttCertVersion = $._encodeInteger;
    }
    return _cached_encoder_for_AttCertVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttCertVersion */

/* eslint-enable */
