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

/* START_OF_SYMBOL_DEFINITION OrgLevel */
/**
 * @summary OrgLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrgLevel  ::=  INTEGER {
 *   no-escalation(0), first-level(1), second-level(2), third-level(3),
 *   fourth-level(4), fifth-level(5), sixth-level(6)}
 * ```
 */
export type OrgLevel = INTEGER;
/* END_OF_SYMBOL_DEFINITION OrgLevel */

/* START_OF_SYMBOL_DEFINITION OrgLevel_no_escalation */
/**
 * @summary OrgLevel_no_escalation
 * @constant
 * @type {number}
 */
export const OrgLevel_no_escalation: OrgLevel = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_no_escalation */

/* START_OF_SYMBOL_DEFINITION no_escalation */
/**
 * @summary OrgLevel_no_escalation
 * @constant
 * @type {number}
 */
export const no_escalation: OrgLevel = OrgLevel_no_escalation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_escalation */

/* START_OF_SYMBOL_DEFINITION OrgLevel_first_level */
/**
 * @summary OrgLevel_first_level
 * @constant
 * @type {number}
 */
export const OrgLevel_first_level: OrgLevel = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_first_level */

/* START_OF_SYMBOL_DEFINITION first_level */
/**
 * @summary OrgLevel_first_level
 * @constant
 * @type {number}
 */
export const first_level: OrgLevel = OrgLevel_first_level; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION first_level */

/* START_OF_SYMBOL_DEFINITION OrgLevel_second_level */
/**
 * @summary OrgLevel_second_level
 * @constant
 * @type {number}
 */
export const OrgLevel_second_level: OrgLevel = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_second_level */

/* START_OF_SYMBOL_DEFINITION second_level */
/**
 * @summary OrgLevel_second_level
 * @constant
 * @type {number}
 */
export const second_level: OrgLevel = OrgLevel_second_level; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION second_level */

/* START_OF_SYMBOL_DEFINITION OrgLevel_third_level */
/**
 * @summary OrgLevel_third_level
 * @constant
 * @type {number}
 */
export const OrgLevel_third_level: OrgLevel = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_third_level */

/* START_OF_SYMBOL_DEFINITION third_level */
/**
 * @summary OrgLevel_third_level
 * @constant
 * @type {number}
 */
export const third_level: OrgLevel = OrgLevel_third_level; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION third_level */

/* START_OF_SYMBOL_DEFINITION OrgLevel_fourth_level */
/**
 * @summary OrgLevel_fourth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_fourth_level: OrgLevel = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_fourth_level */

/* START_OF_SYMBOL_DEFINITION fourth_level */
/**
 * @summary OrgLevel_fourth_level
 * @constant
 * @type {number}
 */
export const fourth_level: OrgLevel = OrgLevel_fourth_level; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION fourth_level */

/* START_OF_SYMBOL_DEFINITION OrgLevel_fifth_level */
/**
 * @summary OrgLevel_fifth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_fifth_level: OrgLevel = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_fifth_level */

/* START_OF_SYMBOL_DEFINITION fifth_level */
/**
 * @summary OrgLevel_fifth_level
 * @constant
 * @type {number}
 */
export const fifth_level: OrgLevel = OrgLevel_fifth_level; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION fifth_level */

/* START_OF_SYMBOL_DEFINITION OrgLevel_sixth_level */
/**
 * @summary OrgLevel_sixth_level
 * @constant
 * @type {number}
 */
export const OrgLevel_sixth_level: OrgLevel = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OrgLevel_sixth_level */

/* START_OF_SYMBOL_DEFINITION sixth_level */
/**
 * @summary OrgLevel_sixth_level
 * @constant
 * @type {number}
 */
export const sixth_level: OrgLevel = OrgLevel_sixth_level; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION sixth_level */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrgLevel */
let _cached_decoder_for_OrgLevel: $.ASN1Decoder<OrgLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrgLevel */

/* START_OF_SYMBOL_DEFINITION _decode_OrgLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) OrgLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrgLevel} The decoded data structure.
 */
export function _decode_OrgLevel(el: _Element) {
    if (!_cached_decoder_for_OrgLevel) {
        _cached_decoder_for_OrgLevel = $._decodeInteger;
    }
    return _cached_decoder_for_OrgLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrgLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrgLevel */
let _cached_encoder_for_OrgLevel: $.ASN1Encoder<OrgLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrgLevel */

/* START_OF_SYMBOL_DEFINITION _encode_OrgLevel */
/**
 * @summary Encodes a(n) OrgLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrgLevel, encoded as an ASN.1 Element.
 */
export function _encode_OrgLevel(
    value: OrgLevel,
    elGetter: $.ASN1Encoder<OrgLevel>
) {
    if (!_cached_encoder_for_OrgLevel) {
        _cached_encoder_for_OrgLevel = $._encodeInteger;
    }
    return _cached_encoder_for_OrgLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrgLevel */

/* eslint-enable */
