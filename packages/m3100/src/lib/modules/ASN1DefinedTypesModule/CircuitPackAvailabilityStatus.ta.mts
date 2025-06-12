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
    AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AvailabilityStatus.ta.mjs';
export {
    AvailabilityStatus,
    _decode_AvailabilityStatus,
    _encode_AvailabilityStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AvailabilityStatus.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CircuitPackAvailabilityStatus */
/**
 * @summary CircuitPackAvailabilityStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CircuitPackAvailabilityStatus  ::=
 *   AvailabilityStatus(WITH COMPONENT (notInstalled))
 * ```
 */
export type CircuitPackAvailabilityStatus = AvailabilityStatus; // DefinedType
/* END_OF_SYMBOL_DEFINITION CircuitPackAvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitPackAvailabilityStatus */
let _cached_decoder_for_CircuitPackAvailabilityStatus: $.ASN1Decoder<CircuitPackAvailabilityStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CircuitPackAvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _decode_CircuitPackAvailabilityStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) CircuitPackAvailabilityStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CircuitPackAvailabilityStatus} The decoded data structure.
 */
export function _decode_CircuitPackAvailabilityStatus(el: _Element) {
    if (!_cached_decoder_for_CircuitPackAvailabilityStatus) {
        _cached_decoder_for_CircuitPackAvailabilityStatus = _decode_AvailabilityStatus;
    }
    return _cached_decoder_for_CircuitPackAvailabilityStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CircuitPackAvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitPackAvailabilityStatus */
let _cached_encoder_for_CircuitPackAvailabilityStatus: $.ASN1Encoder<CircuitPackAvailabilityStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CircuitPackAvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _encode_CircuitPackAvailabilityStatus */
/**
 * @summary Encodes a(n) CircuitPackAvailabilityStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitPackAvailabilityStatus, encoded as an ASN.1 Element.
 */
export function _encode_CircuitPackAvailabilityStatus(
    value: CircuitPackAvailabilityStatus,
    elGetter: $.ASN1Encoder<CircuitPackAvailabilityStatus>
) {
    if (!_cached_encoder_for_CircuitPackAvailabilityStatus) {
        _cached_encoder_for_CircuitPackAvailabilityStatus = _encode_AvailabilityStatus;
    }
    return _cached_encoder_for_CircuitPackAvailabilityStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CircuitPackAvailabilityStatus */

/* eslint-enable */
