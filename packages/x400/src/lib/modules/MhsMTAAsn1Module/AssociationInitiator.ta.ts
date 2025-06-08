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

/* START_OF_SYMBOL_DEFINITION AssociationInitiator */
/**
 * @summary AssociationInitiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationInitiator  ::=  INTEGER {local(0), remote(1)}
 * ```
 */
export type AssociationInitiator = INTEGER;
/* END_OF_SYMBOL_DEFINITION AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION AssociationInitiator_local */
/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const AssociationInitiator_local: AssociationInitiator = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AssociationInitiator_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary AssociationInitiator_local
 * @constant
 * @type {number}
 */
export const local: AssociationInitiator = AssociationInitiator_local; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION AssociationInitiator_remote */
/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const AssociationInitiator_remote: AssociationInitiator = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AssociationInitiator_remote */

/* START_OF_SYMBOL_DEFINITION remote */
/**
 * @summary AssociationInitiator_remote
 * @constant
 * @type {number}
 */
export const remote: AssociationInitiator = AssociationInitiator_remote; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION remote */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationInitiator */
let _cached_decoder_for_AssociationInitiator: $.ASN1Decoder<AssociationInitiator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION _decode_AssociationInitiator */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociationInitiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociationInitiator} The decoded data structure.
 */
export function _decode_AssociationInitiator(el: _Element) {
    if (!_cached_decoder_for_AssociationInitiator) {
        _cached_decoder_for_AssociationInitiator = $._decodeInteger;
    }
    return _cached_decoder_for_AssociationInitiator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationInitiator */
let _cached_encoder_for_AssociationInitiator: $.ASN1Encoder<AssociationInitiator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationInitiator */

/* START_OF_SYMBOL_DEFINITION _encode_AssociationInitiator */
/**
 * @summary Encodes a(n) AssociationInitiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociationInitiator, encoded as an ASN.1 Element.
 */
export function _encode_AssociationInitiator(
    value: AssociationInitiator,
    elGetter: $.ASN1Encoder<AssociationInitiator>
) {
    if (!_cached_encoder_for_AssociationInitiator) {
        _cached_encoder_for_AssociationInitiator = $._encodeInteger;
    }
    return _cached_encoder_for_AssociationInitiator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociationInitiator */

/* eslint-enable */
