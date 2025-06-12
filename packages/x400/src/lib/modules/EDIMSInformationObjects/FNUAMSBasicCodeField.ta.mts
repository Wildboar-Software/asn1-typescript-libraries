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

/* START_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField */
/**
 * @summary FNUAMSBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   onward-routing(1),
 *   -- used whenever the UA decides to re-route the subject EDIM for local reasons
 *   edim-recipient-unknown(2), edim-originator-unknown(3), forwarded-by-edi-ms(4)
 * }(0..ub-reason-code)
 * ```
 */
export type FNUAMSBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_unspecified */
/**
 * @summary FNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_unspecified: FNUAMSBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary FNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: FNUAMSBasicCodeField = FNUAMSBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_onward_routing */
/**
 * @summary FNUAMSBasicCodeField_onward_routing
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_onward_routing: FNUAMSBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_onward_routing */

/* START_OF_SYMBOL_DEFINITION onward_routing */
/**
 * @summary FNUAMSBasicCodeField_onward_routing
 * @constant
 * @type {number}
 */
export const onward_routing: FNUAMSBasicCodeField = FNUAMSBasicCodeField_onward_routing; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION onward_routing */

/* START_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_edim_recipient_unknown */
/**
 * @summary FNUAMSBasicCodeField_edim_recipient_unknown
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_edim_recipient_unknown: FNUAMSBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_edim_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION edim_recipient_unknown */
/**
 * @summary FNUAMSBasicCodeField_edim_recipient_unknown
 * @constant
 * @type {number}
 */
export const edim_recipient_unknown: FNUAMSBasicCodeField = FNUAMSBasicCodeField_edim_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_edim_originator_unknown */
/**
 * @summary FNUAMSBasicCodeField_edim_originator_unknown
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_edim_originator_unknown: FNUAMSBasicCodeField = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_edim_originator_unknown */

/* START_OF_SYMBOL_DEFINITION edim_originator_unknown */
/**
 * @summary FNUAMSBasicCodeField_edim_originator_unknown
 * @constant
 * @type {number}
 */
export const edim_originator_unknown: FNUAMSBasicCodeField = FNUAMSBasicCodeField_edim_originator_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edim_originator_unknown */

/* START_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_forwarded_by_edi_ms */
/**
 * @summary FNUAMSBasicCodeField_forwarded_by_edi_ms
 * @constant
 * @type {number}
 */
export const FNUAMSBasicCodeField_forwarded_by_edi_ms: FNUAMSBasicCodeField = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUAMSBasicCodeField_forwarded_by_edi_ms */

/* START_OF_SYMBOL_DEFINITION forwarded_by_edi_ms */
/**
 * @summary FNUAMSBasicCodeField_forwarded_by_edi_ms
 * @constant
 * @type {number}
 */
export const forwarded_by_edi_ms: FNUAMSBasicCodeField = FNUAMSBasicCodeField_forwarded_by_edi_ms; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_by_edi_ms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSBasicCodeField */
let _cached_decoder_for_FNUAMSBasicCodeField: $.ASN1Decoder<FNUAMSBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUAMSBasicCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNUAMSBasicCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUAMSBasicCodeField} The decoded data structure.
 */
export function _decode_FNUAMSBasicCodeField(el: _Element) {
    if (!_cached_decoder_for_FNUAMSBasicCodeField) {
        _cached_decoder_for_FNUAMSBasicCodeField = $._decodeInteger;
    }
    return _cached_decoder_for_FNUAMSBasicCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSBasicCodeField */
let _cached_encoder_for_FNUAMSBasicCodeField: $.ASN1Encoder<FNUAMSBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUAMSBasicCodeField */
/**
 * @summary Encodes a(n) FNUAMSBasicCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUAMSBasicCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNUAMSBasicCodeField(
    value: FNUAMSBasicCodeField,
    elGetter: $.ASN1Encoder<FNUAMSBasicCodeField>
) {
    if (!_cached_encoder_for_FNUAMSBasicCodeField) {
        _cached_encoder_for_FNUAMSBasicCodeField = $._encodeInteger;
    }
    return _cached_encoder_for_FNUAMSBasicCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNUAMSBasicCodeField */

/* eslint-enable */
