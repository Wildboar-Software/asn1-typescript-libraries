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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
export {
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SynchronizationProtocolID */
/**
 * @summary SynchronizationProtocolID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizationProtocolID  ::=  SimpleNameType
 * ```
 */
export type SynchronizationProtocolID = SimpleNameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION SynchronizationProtocolID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SynchronizationProtocolID */
let _cached_decoder_for_SynchronizationProtocolID: $.ASN1Decoder<SynchronizationProtocolID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SynchronizationProtocolID */

/* START_OF_SYMBOL_DEFINITION _decode_SynchronizationProtocolID */
/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizationProtocolID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizationProtocolID} The decoded data structure.
 */
export function _decode_SynchronizationProtocolID(el: _Element) {
    if (!_cached_decoder_for_SynchronizationProtocolID) {
        _cached_decoder_for_SynchronizationProtocolID = _decode_SimpleNameType;
    }
    return _cached_decoder_for_SynchronizationProtocolID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SynchronizationProtocolID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SynchronizationProtocolID */
let _cached_encoder_for_SynchronizationProtocolID: $.ASN1Encoder<SynchronizationProtocolID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SynchronizationProtocolID */

/* START_OF_SYMBOL_DEFINITION _encode_SynchronizationProtocolID */
/**
 * @summary Encodes a(n) SynchronizationProtocolID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizationProtocolID, encoded as an ASN.1 Element.
 */
export function _encode_SynchronizationProtocolID(
    value: SynchronizationProtocolID,
    elGetter: $.ASN1Encoder<SynchronizationProtocolID>
) {
    if (!_cached_encoder_for_SynchronizationProtocolID) {
        _cached_encoder_for_SynchronizationProtocolID = _encode_SimpleNameType;
    }
    return _cached_encoder_for_SynchronizationProtocolID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SynchronizationProtocolID */

/* eslint-enable */
