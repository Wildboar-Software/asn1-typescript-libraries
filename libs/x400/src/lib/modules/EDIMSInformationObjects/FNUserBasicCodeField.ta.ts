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

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField */
/**
 * @summary FNUserBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUserBasicCodeField  ::=  INTEGER {
 *   unspecified(0), forwarded-for-archiving(1), forwarded-for-information(2),
 *   forwarded-for-additional-action(3), subscription-changed(4),
 *   heading-field-not-supported(5), bodypart-type-not-supported(6),
 *   message-type-not-supported(7), syntax-identifier-not-supported(8),
 *   interchange-sender-unknown(9), user-defined-reason(10)}(0..ub-reason-code)
 * ```
 */
export type FNUserBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_unspecified */
/**
 * @summary FNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_unspecified: FNUserBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary FNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: FNUserBasicCodeField = FNUserBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_forwarded_for_archiving */
/**
 * @summary FNUserBasicCodeField_forwarded_for_archiving
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_forwarded_for_archiving: FNUserBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_forwarded_for_archiving */

/* START_OF_SYMBOL_DEFINITION forwarded_for_archiving */
/**
 * @summary FNUserBasicCodeField_forwarded_for_archiving
 * @constant
 * @type {number}
 */
export const forwarded_for_archiving: FNUserBasicCodeField = FNUserBasicCodeField_forwarded_for_archiving; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_for_archiving */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_forwarded_for_information */
/**
 * @summary FNUserBasicCodeField_forwarded_for_information
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_forwarded_for_information: FNUserBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_forwarded_for_information */

/* START_OF_SYMBOL_DEFINITION forwarded_for_information */
/**
 * @summary FNUserBasicCodeField_forwarded_for_information
 * @constant
 * @type {number}
 */
export const forwarded_for_information: FNUserBasicCodeField = FNUserBasicCodeField_forwarded_for_information; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_for_information */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_forwarded_for_additional_action */
/**
 * @summary FNUserBasicCodeField_forwarded_for_additional_action
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_forwarded_for_additional_action: FNUserBasicCodeField = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_forwarded_for_additional_action */

/* START_OF_SYMBOL_DEFINITION forwarded_for_additional_action */
/**
 * @summary FNUserBasicCodeField_forwarded_for_additional_action
 * @constant
 * @type {number}
 */
export const forwarded_for_additional_action: FNUserBasicCodeField = FNUserBasicCodeField_forwarded_for_additional_action; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarded_for_additional_action */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_subscription_changed */
/**
 * @summary FNUserBasicCodeField_subscription_changed
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_subscription_changed: FNUserBasicCodeField = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_subscription_changed */

/* START_OF_SYMBOL_DEFINITION subscription_changed */
/**
 * @summary FNUserBasicCodeField_subscription_changed
 * @constant
 * @type {number}
 */
export const subscription_changed: FNUserBasicCodeField = FNUserBasicCodeField_subscription_changed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION subscription_changed */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_heading_field_not_supported */
/**
 * @summary FNUserBasicCodeField_heading_field_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_heading_field_not_supported: FNUserBasicCodeField = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_heading_field_not_supported */

/* START_OF_SYMBOL_DEFINITION heading_field_not_supported */
/**
 * @summary FNUserBasicCodeField_heading_field_not_supported
 * @constant
 * @type {number}
 */
export const heading_field_not_supported: FNUserBasicCodeField = FNUserBasicCodeField_heading_field_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION heading_field_not_supported */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_bodypart_type_not_supported */
/**
 * @summary FNUserBasicCodeField_bodypart_type_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_bodypart_type_not_supported: FNUserBasicCodeField = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_bodypart_type_not_supported */

/* START_OF_SYMBOL_DEFINITION bodypart_type_not_supported */
/**
 * @summary FNUserBasicCodeField_bodypart_type_not_supported
 * @constant
 * @type {number}
 */
export const bodypart_type_not_supported: FNUserBasicCodeField = FNUserBasicCodeField_bodypart_type_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION bodypart_type_not_supported */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_message_type_not_supported */
/**
 * @summary FNUserBasicCodeField_message_type_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_message_type_not_supported: FNUserBasicCodeField = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_message_type_not_supported */

/* START_OF_SYMBOL_DEFINITION message_type_not_supported */
/**
 * @summary FNUserBasicCodeField_message_type_not_supported
 * @constant
 * @type {number}
 */
export const message_type_not_supported: FNUserBasicCodeField = FNUserBasicCodeField_message_type_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_type_not_supported */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_syntax_identifier_not_supported */
/**
 * @summary FNUserBasicCodeField_syntax_identifier_not_supported
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_syntax_identifier_not_supported: FNUserBasicCodeField = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_syntax_identifier_not_supported */

/* START_OF_SYMBOL_DEFINITION syntax_identifier_not_supported */
/**
 * @summary FNUserBasicCodeField_syntax_identifier_not_supported
 * @constant
 * @type {number}
 */
export const syntax_identifier_not_supported: FNUserBasicCodeField = FNUserBasicCodeField_syntax_identifier_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION syntax_identifier_not_supported */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_interchange_sender_unknown */
/**
 * @summary FNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_interchange_sender_unknown: FNUserBasicCodeField = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_interchange_sender_unknown */

/* START_OF_SYMBOL_DEFINITION interchange_sender_unknown */
/**
 * @summary FNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const interchange_sender_unknown: FNUserBasicCodeField = FNUserBasicCodeField_interchange_sender_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interchange_sender_unknown */

/* START_OF_SYMBOL_DEFINITION FNUserBasicCodeField_user_defined_reason */
/**
 * @summary FNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const FNUserBasicCodeField_user_defined_reason: FNUserBasicCodeField = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FNUserBasicCodeField_user_defined_reason */

/* START_OF_SYMBOL_DEFINITION user_defined_reason */
/**
 * @summary FNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const user_defined_reason: FNUserBasicCodeField = FNUserBasicCodeField_user_defined_reason; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_defined_reason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUserBasicCodeField */
let _cached_decoder_for_FNUserBasicCodeField: $.ASN1Decoder<FNUserBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUserBasicCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNUserBasicCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUserBasicCodeField} The decoded data structure.
 */
export function _decode_FNUserBasicCodeField(el: _Element) {
    if (!_cached_decoder_for_FNUserBasicCodeField) {
        _cached_decoder_for_FNUserBasicCodeField = $._decodeInteger;
    }
    return _cached_decoder_for_FNUserBasicCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUserBasicCodeField */
let _cached_encoder_for_FNUserBasicCodeField: $.ASN1Encoder<FNUserBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUserBasicCodeField */
/**
 * @summary Encodes a(n) FNUserBasicCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUserBasicCodeField, encoded as an ASN.1 Element.
 */
export function _encode_FNUserBasicCodeField(
    value: FNUserBasicCodeField,
    elGetter: $.ASN1Encoder<FNUserBasicCodeField>
) {
    if (!_cached_encoder_for_FNUserBasicCodeField) {
        _cached_encoder_for_FNUserBasicCodeField = $._encodeInteger;
    }
    return _cached_encoder_for_FNUserBasicCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNUserBasicCodeField */

/* eslint-enable */
