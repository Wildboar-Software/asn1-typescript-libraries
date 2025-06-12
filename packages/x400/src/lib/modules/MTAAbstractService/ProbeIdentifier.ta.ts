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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.js';
export {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.js';

/* START_OF_SYMBOL_DEFINITION ProbeIdentifier */
/**
 * @summary ProbeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeIdentifier  ::=  MTSIdentifier
 * ```
 */
export type ProbeIdentifier = MTSIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeIdentifier */
let _cached_decoder_for_ProbeIdentifier: $.ASN1Decoder<ProbeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ProbeIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ProbeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeIdentifier} The decoded data structure.
 */
export function _decode_ProbeIdentifier(el: _Element) {
    if (!_cached_decoder_for_ProbeIdentifier) {
        _cached_decoder_for_ProbeIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_ProbeIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeIdentifier */
let _cached_encoder_for_ProbeIdentifier: $.ASN1Encoder<ProbeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ProbeIdentifier */
/**
 * @summary Encodes a(n) ProbeIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ProbeIdentifier(
    value: ProbeIdentifier,
    elGetter: $.ASN1Encoder<ProbeIdentifier>
) {
    if (!_cached_encoder_for_ProbeIdentifier) {
        _cached_encoder_for_ProbeIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_ProbeIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProbeIdentifier */

/* eslint-enable */
