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
    MessageOrProbeIdentifier,
    _decode_MessageOrProbeIdentifier,
    _encode_MessageOrProbeIdentifier,
} from '../MTAAbstractService/MessageOrProbeIdentifier.ta';
export {
    MessageOrProbeIdentifier,
    _decode_MessageOrProbeIdentifier,
    _encode_MessageOrProbeIdentifier,
} from '../MTAAbstractService/MessageOrProbeIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION SubjectIdentifier */
/**
 * @summary SubjectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectIdentifier  ::=  MessageOrProbeIdentifier
 * ```
 */
export type SubjectIdentifier = MessageOrProbeIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION SubjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectIdentifier */
let _cached_decoder_for_SubjectIdentifier: $.ASN1Decoder<SubjectIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SubjectIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SubjectIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectIdentifier} The decoded data structure.
 */
export function _decode_SubjectIdentifier(el: _Element) {
    if (!_cached_decoder_for_SubjectIdentifier) {
        _cached_decoder_for_SubjectIdentifier = _decode_MessageOrProbeIdentifier;
    }
    return _cached_decoder_for_SubjectIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectIdentifier */
let _cached_encoder_for_SubjectIdentifier: $.ASN1Encoder<SubjectIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SubjectIdentifier */
/**
 * @summary Encodes a(n) SubjectIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SubjectIdentifier(
    value: SubjectIdentifier,
    elGetter: $.ASN1Encoder<SubjectIdentifier>
) {
    if (!_cached_encoder_for_SubjectIdentifier) {
        _cached_encoder_for_SubjectIdentifier = _encode_MessageOrProbeIdentifier;
    }
    return _cached_encoder_for_SubjectIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubjectIdentifier */

/* eslint-enable */
