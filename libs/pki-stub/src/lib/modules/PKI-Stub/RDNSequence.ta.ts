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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '../PKI-Stub/RelativeDistinguishedName.ta';
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '../PKI-Stub/RelativeDistinguishedName.ta';

/* START_OF_SYMBOL_DEFINITION RDNSequence */
/**
 * @summary RDNSequence
 * @description
 *
 * A sequence of relative distinguished names in an order that descends from the
 * root of the DIT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence  ::=  SEQUENCE OF RelativeDistinguishedName
 * ```
 */
export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RDNSequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RDNSequence */
let _cached_decoder_for_RDNSequence: $.ASN1Decoder<RDNSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RDNSequence */

/* START_OF_SYMBOL_DEFINITION _decode_RDNSequence */
/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export function _decode_RDNSequence(el: _Element) {
    if (!_cached_decoder_for_RDNSequence) {
        _cached_decoder_for_RDNSequence = $._decodeSequenceOf<RelativeDistinguishedName>(
            () => _decode_RelativeDistinguishedName
        );
    }
    return _cached_decoder_for_RDNSequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RDNSequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RDNSequence */
let _cached_encoder_for_RDNSequence: $.ASN1Encoder<RDNSequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RDNSequence */

/* START_OF_SYMBOL_DEFINITION _encode_RDNSequence */
/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export function _encode_RDNSequence(
    value: RDNSequence,
    elGetter: $.ASN1Encoder<RDNSequence>
) {
    if (!_cached_encoder_for_RDNSequence) {
        _cached_encoder_for_RDNSequence = $._encodeSequenceOf<RelativeDistinguishedName>(
            () => _encode_RelativeDistinguishedName,
            $.BER
        );
    }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RDNSequence */

/* eslint-enable */
