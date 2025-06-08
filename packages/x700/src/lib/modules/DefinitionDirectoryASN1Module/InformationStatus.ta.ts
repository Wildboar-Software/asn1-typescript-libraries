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

/* START_OF_SYMBOL_DEFINITION _enum_for_InformationStatus */
/**
 * @summary InformationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```@enum {number}
 */
export enum _enum_for_InformationStatus {
    active = 0,
    deleted = 1,
    preliminary = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InformationStatus */

/* START_OF_SYMBOL_DEFINITION InformationStatus */
/**
 * @summary InformationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```@enum {number}
 */
export type InformationStatus = _enum_for_InformationStatus;
/* END_OF_SYMBOL_DEFINITION InformationStatus */

/* START_OF_SYMBOL_DEFINITION InformationStatus */
/**
 * @summary InformationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```@enum {number}
 */
export const InformationStatus = _enum_for_InformationStatus;
/* END_OF_SYMBOL_DEFINITION InformationStatus */

/* START_OF_SYMBOL_DEFINITION InformationStatus_active */
/**
 * @summary InformationStatus_active
 * @constant
 * @type {number}
 */
export const InformationStatus_active: InformationStatus =
    InformationStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationStatus_active */

/* START_OF_SYMBOL_DEFINITION active */
/**
 * @summary active
 * @constant
 * @type {number}
 */
export const active: InformationStatus =
    InformationStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION active */

/* START_OF_SYMBOL_DEFINITION InformationStatus_deleted */
/**
 * @summary InformationStatus_deleted
 * @constant
 * @type {number}
 */
export const InformationStatus_deleted: InformationStatus =
    InformationStatus.deleted; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationStatus_deleted */

/* START_OF_SYMBOL_DEFINITION deleted */
/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: InformationStatus =
    InformationStatus.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION deleted */

/* START_OF_SYMBOL_DEFINITION InformationStatus_preliminary */
/**
 * @summary InformationStatus_preliminary
 * @constant
 * @type {number}
 */
export const InformationStatus_preliminary: InformationStatus =
    InformationStatus.preliminary; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InformationStatus_preliminary */

/* START_OF_SYMBOL_DEFINITION preliminary */
/**
 * @summary preliminary
 * @constant
 * @type {number}
 */
export const preliminary: InformationStatus =
    InformationStatus.preliminary; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preliminary */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationStatus */
let _cached_decoder_for_InformationStatus: $.ASN1Decoder<InformationStatus> | null =
    null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_InformationStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationStatus} The decoded data structure.
 */
export function _decode_InformationStatus(el: _Element) {
    if (!_cached_decoder_for_InformationStatus) {
        _cached_decoder_for_InformationStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_InformationStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationStatus */
let _cached_encoder_for_InformationStatus: $.ASN1Encoder<InformationStatus> | null =
    null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_InformationStatus */
/**
 * @summary Encodes a(n) InformationStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationStatus, encoded as an ASN.1 Element.
 */
export function _encode_InformationStatus(
    value: InformationStatus,
    elGetter: $.ASN1Encoder<InformationStatus>
) {
    if (!_cached_encoder_for_InformationStatus) {
        _cached_encoder_for_InformationStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_InformationStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationStatus */

/* eslint-enable */
