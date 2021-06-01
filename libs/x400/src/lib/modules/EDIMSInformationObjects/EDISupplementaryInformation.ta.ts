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

/* START_OF_SYMBOL_DEFINITION EDISupplementaryInformation */
/**
 * @summary EDISupplementaryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDISupplementaryInformation  ::=
 *   TeletexString(SIZE (1..ub-supplementary-info-length))
 * ```
 */
export type EDISupplementaryInformation = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION EDISupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDISupplementaryInformation */
let _cached_decoder_for_EDISupplementaryInformation: $.ASN1Decoder<EDISupplementaryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDISupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _decode_EDISupplementaryInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) EDISupplementaryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDISupplementaryInformation} The decoded data structure.
 */
export function _decode_EDISupplementaryInformation(el: _Element) {
    if (!_cached_decoder_for_EDISupplementaryInformation) {
        _cached_decoder_for_EDISupplementaryInformation =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_EDISupplementaryInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDISupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDISupplementaryInformation */
let _cached_encoder_for_EDISupplementaryInformation: $.ASN1Encoder<EDISupplementaryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDISupplementaryInformation */

/* START_OF_SYMBOL_DEFINITION _encode_EDISupplementaryInformation */
/**
 * @summary Encodes a(n) EDISupplementaryInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDISupplementaryInformation, encoded as an ASN.1 Element.
 */
export function _encode_EDISupplementaryInformation(
    value: EDISupplementaryInformation,
    elGetter: $.ASN1Encoder<EDISupplementaryInformation>
) {
    if (!_cached_encoder_for_EDISupplementaryInformation) {
        _cached_encoder_for_EDISupplementaryInformation =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_EDISupplementaryInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDISupplementaryInformation */

/* eslint-enable */
