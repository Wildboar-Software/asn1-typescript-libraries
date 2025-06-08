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
    RelatedObject,
    _decode_RelatedObject,
    _encode_RelatedObject,
} from '../X790ASN1Module/RelatedObject.ta';
export {
    RelatedObject,
    _decode_RelatedObject,
    _encode_RelatedObject,
} from '../X790ASN1Module/RelatedObject.ta';

/* START_OF_SYMBOL_DEFINITION UnavailableServicePtr */
/**
 * @summary UnavailableServicePtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnavailableServicePtr  ::=  RelatedObject
 * ```
 */
export type UnavailableServicePtr = RelatedObject; // DefinedType
/* END_OF_SYMBOL_DEFINITION UnavailableServicePtr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnavailableServicePtr */
let _cached_decoder_for_UnavailableServicePtr: $.ASN1Decoder<UnavailableServicePtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnavailableServicePtr */

/* START_OF_SYMBOL_DEFINITION _decode_UnavailableServicePtr */
/**
 * @summary Decodes an ASN.1 element into a(n) UnavailableServicePtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnavailableServicePtr} The decoded data structure.
 */
export function _decode_UnavailableServicePtr(el: _Element) {
    if (!_cached_decoder_for_UnavailableServicePtr) {
        _cached_decoder_for_UnavailableServicePtr = _decode_RelatedObject;
    }
    return _cached_decoder_for_UnavailableServicePtr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnavailableServicePtr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnavailableServicePtr */
let _cached_encoder_for_UnavailableServicePtr: $.ASN1Encoder<UnavailableServicePtr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnavailableServicePtr */

/* START_OF_SYMBOL_DEFINITION _encode_UnavailableServicePtr */
/**
 * @summary Encodes a(n) UnavailableServicePtr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailableServicePtr, encoded as an ASN.1 Element.
 */
export function _encode_UnavailableServicePtr(
    value: UnavailableServicePtr,
    elGetter: $.ASN1Encoder<UnavailableServicePtr>
) {
    if (!_cached_encoder_for_UnavailableServicePtr) {
        _cached_encoder_for_UnavailableServicePtr = _encode_RelatedObject;
    }
    return _cached_encoder_for_UnavailableServicePtr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnavailableServicePtr */

/* eslint-enable */
