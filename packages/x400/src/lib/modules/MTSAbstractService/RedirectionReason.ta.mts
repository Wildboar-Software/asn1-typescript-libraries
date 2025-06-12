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

/* START_OF_SYMBOL_DEFINITION _enum_for_RedirectionReason */
export enum _enum_for_RedirectionReason {
    recipient_assigned_alternate_recipient = 0,
    originator_requested_alternate_recipient = 1,
    recipient_MD_assigned_alternate_recipient = 2,
    directory_look_up = 3,
    alias = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RedirectionReason */

/* START_OF_SYMBOL_DEFINITION RedirectionReason */
/**
 * @summary RedirectionReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionReason  ::=  ENUMERATED {
 *   recipient-assigned-alternate-recipient(0),
 *   originator-requested-alternate-recipient(1),
 *   recipient-MD-assigned-alternate-recipient(2),
 *   -- The following values may not be supported by implementations of earlier versions of this Service Definition
 *   directory-look-up(3), alias(4), ...
 *   }
 * ```@enum {number}
 */
export type RedirectionReason = _enum_for_RedirectionReason | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RedirectionReason */

/* START_OF_SYMBOL_DEFINITION RedirectionReason_recipient_assigned_alternate_recipient */
/**
 * @summary RedirectionReason_recipient_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const RedirectionReason_recipient_assigned_alternate_recipient: RedirectionReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RedirectionReason_recipient_assigned_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION recipient_assigned_alternate_recipient */
/**
 * @summary recipient_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const recipient_assigned_alternate_recipient: RedirectionReason = RedirectionReason_recipient_assigned_alternate_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_assigned_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION RedirectionReason_originator_requested_alternate_recipient */
/**
 * @summary RedirectionReason_originator_requested_alternate_recipient
 * @constant
 * @type {number}
 */
export const RedirectionReason_originator_requested_alternate_recipient: RedirectionReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RedirectionReason_originator_requested_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION originator_requested_alternate_recipient */
/**
 * @summary originator_requested_alternate_recipient
 * @constant
 * @type {number}
 */
export const originator_requested_alternate_recipient: RedirectionReason = RedirectionReason_originator_requested_alternate_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION originator_requested_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION RedirectionReason_recipient_MD_assigned_alternate_recipient */
/**
 * @summary RedirectionReason_recipient_MD_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const RedirectionReason_recipient_MD_assigned_alternate_recipient: RedirectionReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RedirectionReason_recipient_MD_assigned_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION recipient_MD_assigned_alternate_recipient */
/**
 * @summary recipient_MD_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const recipient_MD_assigned_alternate_recipient: RedirectionReason = RedirectionReason_recipient_MD_assigned_alternate_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION recipient_MD_assigned_alternate_recipient */

/* START_OF_SYMBOL_DEFINITION RedirectionReason_directory_look_up */
/**
 * @summary RedirectionReason_directory_look_up
 * @constant
 * @type {number}
 */
export const RedirectionReason_directory_look_up: RedirectionReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RedirectionReason_directory_look_up */

/* START_OF_SYMBOL_DEFINITION directory_look_up */
/**
 * @summary directory_look_up
 * @constant
 * @type {number}
 */
export const directory_look_up: RedirectionReason = RedirectionReason_directory_look_up; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION directory_look_up */

/* START_OF_SYMBOL_DEFINITION RedirectionReason_alias */
/**
 * @summary RedirectionReason_alias
 * @constant
 * @type {number}
 */
export const RedirectionReason_alias: RedirectionReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RedirectionReason_alias */

/* START_OF_SYMBOL_DEFINITION alias */
/**
 * @summary alias
 * @constant
 * @type {number}
 */
export const alias: RedirectionReason = RedirectionReason_alias; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alias */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionReason */
let _cached_decoder_for_RedirectionReason: $.ASN1Decoder<RedirectionReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionReason */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectionReason */
/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionReason} The decoded data structure.
 */
export function _decode_RedirectionReason(el: _Element) {
    if (!_cached_decoder_for_RedirectionReason) {
        _cached_decoder_for_RedirectionReason = $._decodeEnumerated;
    }
    return _cached_decoder_for_RedirectionReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RedirectionReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionReason */
let _cached_encoder_for_RedirectionReason: $.ASN1Encoder<RedirectionReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionReason */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectionReason */
/**
 * @summary Encodes a(n) RedirectionReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionReason, encoded as an ASN.1 Element.
 */
export function _encode_RedirectionReason(
    value: RedirectionReason,
    elGetter: $.ASN1Encoder<RedirectionReason>
) {
    if (!_cached_encoder_for_RedirectionReason) {
        _cached_encoder_for_RedirectionReason = $._encodeEnumerated;
    }
    return _cached_encoder_for_RedirectionReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RedirectionReason */

/* eslint-enable */
