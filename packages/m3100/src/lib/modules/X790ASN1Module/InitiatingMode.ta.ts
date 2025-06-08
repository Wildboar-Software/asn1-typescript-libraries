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

/* START_OF_SYMBOL_DEFINITION InitiatingMode */
/**
 * @summary InitiatingMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiatingMode  ::=  INTEGER {
 *   -- Integer values are to be registered in the standard.
 *   managerDirect(0), managerIndirect(1), agentOriginated(2),
 *   managerIndirectEMail(4), managerIndirectFax(5), managerIndirectPersonal(6),
 *   managerIndirectPhone(7)}
 * ```
 */
export type InitiatingMode = INTEGER;
/* END_OF_SYMBOL_DEFINITION InitiatingMode */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerDirect */
/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerDirect: InitiatingMode = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerDirect */

/* START_OF_SYMBOL_DEFINITION managerDirect */
/**
 * @summary InitiatingMode_managerDirect
 * @constant
 * @type {number}
 */
export const managerDirect: InitiatingMode = InitiatingMode_managerDirect; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerDirect */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirect */
/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirect: InitiatingMode = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirect */

/* START_OF_SYMBOL_DEFINITION managerIndirect */
/**
 * @summary InitiatingMode_managerIndirect
 * @constant
 * @type {number}
 */
export const managerIndirect: InitiatingMode = InitiatingMode_managerIndirect; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirect */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_agentOriginated */
/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export const InitiatingMode_agentOriginated: InitiatingMode = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_agentOriginated */

/* START_OF_SYMBOL_DEFINITION agentOriginated */
/**
 * @summary InitiatingMode_agentOriginated
 * @constant
 * @type {number}
 */
export const agentOriginated: InitiatingMode = InitiatingMode_agentOriginated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION agentOriginated */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectEMail */
/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectEMail: InitiatingMode = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectEMail */

/* START_OF_SYMBOL_DEFINITION managerIndirectEMail */
/**
 * @summary InitiatingMode_managerIndirectEMail
 * @constant
 * @type {number}
 */
export const managerIndirectEMail: InitiatingMode = InitiatingMode_managerIndirectEMail; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectEMail */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectFax */
/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectFax: InitiatingMode = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectFax */

/* START_OF_SYMBOL_DEFINITION managerIndirectFax */
/**
 * @summary InitiatingMode_managerIndirectFax
 * @constant
 * @type {number}
 */
export const managerIndirectFax: InitiatingMode = InitiatingMode_managerIndirectFax; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectFax */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPersonal */
/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectPersonal: InitiatingMode = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPersonal */

/* START_OF_SYMBOL_DEFINITION managerIndirectPersonal */
/**
 * @summary InitiatingMode_managerIndirectPersonal
 * @constant
 * @type {number}
 */
export const managerIndirectPersonal: InitiatingMode = InitiatingMode_managerIndirectPersonal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectPersonal */

/* START_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPhone */
/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export const InitiatingMode_managerIndirectPhone: InitiatingMode = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InitiatingMode_managerIndirectPhone */

/* START_OF_SYMBOL_DEFINITION managerIndirectPhone */
/**
 * @summary InitiatingMode_managerIndirectPhone
 * @constant
 * @type {number}
 */
export const managerIndirectPhone: InitiatingMode = InitiatingMode_managerIndirectPhone; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION managerIndirectPhone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiatingMode */
let _cached_decoder_for_InitiatingMode: $.ASN1Decoder<InitiatingMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitiatingMode */

/* START_OF_SYMBOL_DEFINITION _decode_InitiatingMode */
/**
 * @summary Decodes an ASN.1 element into a(n) InitiatingMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitiatingMode} The decoded data structure.
 */
export function _decode_InitiatingMode(el: _Element) {
    if (!_cached_decoder_for_InitiatingMode) {
        _cached_decoder_for_InitiatingMode = $._decodeInteger;
    }
    return _cached_decoder_for_InitiatingMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitiatingMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiatingMode */
let _cached_encoder_for_InitiatingMode: $.ASN1Encoder<InitiatingMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitiatingMode */

/* START_OF_SYMBOL_DEFINITION _encode_InitiatingMode */
/**
 * @summary Encodes a(n) InitiatingMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiatingMode, encoded as an ASN.1 Element.
 */
export function _encode_InitiatingMode(
    value: InitiatingMode,
    elGetter: $.ASN1Encoder<InitiatingMode>
) {
    if (!_cached_encoder_for_InitiatingMode) {
        _cached_encoder_for_InitiatingMode = $._encodeInteger;
    }
    return _cached_encoder_for_InitiatingMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitiatingMode */

/* eslint-enable */
