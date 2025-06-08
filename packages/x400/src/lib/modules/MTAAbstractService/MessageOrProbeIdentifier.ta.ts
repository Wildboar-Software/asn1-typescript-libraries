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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta';
export {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION MessageOrProbeIdentifier */
/**
 * @summary MessageOrProbeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageOrProbeIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageOrProbeIdentifier = MTSIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageOrProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageOrProbeIdentifier */
let _cached_decoder_for_MessageOrProbeIdentifier: $.ASN1Decoder<MessageOrProbeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageOrProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MessageOrProbeIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageOrProbeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageOrProbeIdentifier} The decoded data structure.
 */
export function _decode_MessageOrProbeIdentifier(el: _Element) {
    if (!_cached_decoder_for_MessageOrProbeIdentifier) {
        _cached_decoder_for_MessageOrProbeIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_MessageOrProbeIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageOrProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageOrProbeIdentifier */
let _cached_encoder_for_MessageOrProbeIdentifier: $.ASN1Encoder<MessageOrProbeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageOrProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MessageOrProbeIdentifier */
/**
 * @summary Encodes a(n) MessageOrProbeIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageOrProbeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageOrProbeIdentifier(
    value: MessageOrProbeIdentifier,
    elGetter: $.ASN1Encoder<MessageOrProbeIdentifier>
) {
    if (!_cached_encoder_for_MessageOrProbeIdentifier) {
        _cached_encoder_for_MessageOrProbeIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_MessageOrProbeIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageOrProbeIdentifier */

/* eslint-enable */
