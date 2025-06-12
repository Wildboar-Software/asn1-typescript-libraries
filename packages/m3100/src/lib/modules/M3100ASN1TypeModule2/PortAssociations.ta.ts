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
    PortAssociation,
    _decode_PortAssociation,
    _encode_PortAssociation,
} from '../M3100ASN1TypeModule2/PortAssociation.ta.js';
export {
    PortAssociation,
    _decode_PortAssociation,
    _encode_PortAssociation,
} from '../M3100ASN1TypeModule2/PortAssociation.ta.js';

/* START_OF_SYMBOL_DEFINITION PortAssociations */
/**
 * @summary PortAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortAssociations  ::=  SET OF PortAssociation
 * ```
 */
export type PortAssociations = PortAssociation[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION PortAssociations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PortAssociations */
let _cached_decoder_for_PortAssociations: $.ASN1Decoder<PortAssociations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PortAssociations */

/* START_OF_SYMBOL_DEFINITION _decode_PortAssociations */
/**
 * @summary Decodes an ASN.1 element into a(n) PortAssociations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortAssociations} The decoded data structure.
 */
export function _decode_PortAssociations(el: _Element) {
    if (!_cached_decoder_for_PortAssociations) {
        _cached_decoder_for_PortAssociations = $._decodeSetOf<PortAssociation>(
            () => _decode_PortAssociation
        );
    }
    return _cached_decoder_for_PortAssociations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PortAssociations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PortAssociations */
let _cached_encoder_for_PortAssociations: $.ASN1Encoder<PortAssociations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PortAssociations */

/* START_OF_SYMBOL_DEFINITION _encode_PortAssociations */
/**
 * @summary Encodes a(n) PortAssociations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortAssociations, encoded as an ASN.1 Element.
 */
export function _encode_PortAssociations(
    value: PortAssociations,
    elGetter: $.ASN1Encoder<PortAssociations>
) {
    if (!_cached_encoder_for_PortAssociations) {
        _cached_encoder_for_PortAssociations = $._encodeSetOf<PortAssociation>(
            () => _encode_PortAssociation,
            $.BER
        );
    }
    return _cached_encoder_for_PortAssociations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PortAssociations */

/* eslint-enable */
