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
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta';
export {
    TestSessionId,
    _decode_TestSessionId,
    _encode_TestSessionId,
} from '../Test-ASN1Module/TestSessionId.ta';

/* START_OF_SYMBOL_DEFINITION NoSuchTestSessionId */
/**
 * @summary NoSuchTestSessionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchTestSessionId  ::=  TestSessionId
 * ```
 */
export type NoSuchTestSessionId = TestSessionId; // DefinedType
/* END_OF_SYMBOL_DEFINITION NoSuchTestSessionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchTestSessionId */
let _cached_decoder_for_NoSuchTestSessionId: $.ASN1Decoder<NoSuchTestSessionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchTestSessionId */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchTestSessionId */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchTestSessionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchTestSessionId} The decoded data structure.
 */
export function _decode_NoSuchTestSessionId(el: _Element) {
    if (!_cached_decoder_for_NoSuchTestSessionId) {
        _cached_decoder_for_NoSuchTestSessionId = _decode_TestSessionId;
    }
    return _cached_decoder_for_NoSuchTestSessionId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchTestSessionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchTestSessionId */
let _cached_encoder_for_NoSuchTestSessionId: $.ASN1Encoder<NoSuchTestSessionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchTestSessionId */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchTestSessionId */
/**
 * @summary Encodes a(n) NoSuchTestSessionId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchTestSessionId, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchTestSessionId(
    value: NoSuchTestSessionId,
    elGetter: $.ASN1Encoder<NoSuchTestSessionId>
) {
    if (!_cached_encoder_for_NoSuchTestSessionId) {
        _cached_encoder_for_NoSuchTestSessionId = _encode_TestSessionId;
    }
    return _cached_encoder_for_NoSuchTestSessionId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchTestSessionId */

/* eslint-enable */
