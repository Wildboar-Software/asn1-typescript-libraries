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
    ProbeTransferEnvelope,
    _decode_ProbeTransferEnvelope,
    _encode_ProbeTransferEnvelope,
} from '../MTAAbstractService/ProbeTransferEnvelope.ta.js';
export {
    ProbeTransferEnvelope,
    _decode_ProbeTransferEnvelope,
    _encode_ProbeTransferEnvelope,
} from '../MTAAbstractService/ProbeTransferEnvelope.ta.js';

/* START_OF_SYMBOL_DEFINITION Probe */
/**
 * @summary Probe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Probe  ::=  ProbeTransferEnvelope
 * ```
 */
export type Probe = ProbeTransferEnvelope; // DefinedType
/* END_OF_SYMBOL_DEFINITION Probe */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Probe */
let _cached_decoder_for_Probe: $.ASN1Decoder<Probe> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Probe */

/* START_OF_SYMBOL_DEFINITION _decode_Probe */
/**
 * @summary Decodes an ASN.1 element into a(n) Probe
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Probe} The decoded data structure.
 */
export function _decode_Probe(el: _Element) {
    if (!_cached_decoder_for_Probe) {
        _cached_decoder_for_Probe = _decode_ProbeTransferEnvelope;
    }
    return _cached_decoder_for_Probe(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Probe */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Probe */
let _cached_encoder_for_Probe: $.ASN1Encoder<Probe> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Probe */

/* START_OF_SYMBOL_DEFINITION _encode_Probe */
/**
 * @summary Encodes a(n) Probe into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Probe, encoded as an ASN.1 Element.
 */
export function _encode_Probe(value: Probe, elGetter: $.ASN1Encoder<Probe>) {
    if (!_cached_encoder_for_Probe) {
        _cached_encoder_for_Probe = _encode_ProbeTransferEnvelope;
    }
    return _cached_encoder_for_Probe(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Probe */

/* eslint-enable */
