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

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField */
/**
 * @summary NNUserBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUserBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   syntax-error(1), -- used when the user discovers a syntax error
 *
 *   -- within the EDI interchange
 *   interchange-sender-unknown(2),
 *   interchange-recipient-unknown(3), -- used when the UA cannot find a valid
 *
 *   -- interchange recipient in the Recipient
 *   -- Specifier
 *   invalid-heading-field(4), invalid-bodypart-type(5), invalid-message-type(6),
 *   functional-group-not-supported(7),
 *   subscription-terminated(8), -- unknown to EDIMS-User service
 *   no-bilateral-agreement(9), user-defined-reason(10)}(0..ub-reason-code)
 * ```
 */
export type NNUserBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_unspecified */
/**
 * @summary NNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_unspecified: NNUserBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary NNUserBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: NNUserBasicCodeField = NNUserBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_syntax_error */
/**
 * @summary NNUserBasicCodeField_syntax_error
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_syntax_error: NNUserBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_syntax_error */

/* START_OF_SYMBOL_DEFINITION syntax_error */
/**
 * @summary NNUserBasicCodeField_syntax_error
 * @constant
 * @type {number}
 */
export const syntax_error: NNUserBasicCodeField = NNUserBasicCodeField_syntax_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION syntax_error */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_interchange_sender_unknown */
/**
 * @summary NNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_interchange_sender_unknown: NNUserBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_interchange_sender_unknown */

/* START_OF_SYMBOL_DEFINITION interchange_sender_unknown */
/**
 * @summary NNUserBasicCodeField_interchange_sender_unknown
 * @constant
 * @type {number}
 */
export const interchange_sender_unknown: NNUserBasicCodeField = NNUserBasicCodeField_interchange_sender_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interchange_sender_unknown */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_interchange_recipient_unknown */
/**
 * @summary NNUserBasicCodeField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_interchange_recipient_unknown: NNUserBasicCodeField = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_interchange_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION interchange_recipient_unknown */
/**
 * @summary NNUserBasicCodeField_interchange_recipient_unknown
 * @constant
 * @type {number}
 */
export const interchange_recipient_unknown: NNUserBasicCodeField = NNUserBasicCodeField_interchange_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interchange_recipient_unknown */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_invalid_heading_field */
/**
 * @summary NNUserBasicCodeField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_heading_field: NNUserBasicCodeField = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_invalid_heading_field */

/* START_OF_SYMBOL_DEFINITION invalid_heading_field */
/**
 * @summary NNUserBasicCodeField_invalid_heading_field
 * @constant
 * @type {number}
 */
export const invalid_heading_field: NNUserBasicCodeField = NNUserBasicCodeField_invalid_heading_field; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_heading_field */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_invalid_bodypart_type */
/**
 * @summary NNUserBasicCodeField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_bodypart_type: NNUserBasicCodeField = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_invalid_bodypart_type */

/* START_OF_SYMBOL_DEFINITION invalid_bodypart_type */
/**
 * @summary NNUserBasicCodeField_invalid_bodypart_type
 * @constant
 * @type {number}
 */
export const invalid_bodypart_type: NNUserBasicCodeField = NNUserBasicCodeField_invalid_bodypart_type; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_bodypart_type */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_invalid_message_type */
/**
 * @summary NNUserBasicCodeField_invalid_message_type
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_invalid_message_type: NNUserBasicCodeField = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_invalid_message_type */

/* START_OF_SYMBOL_DEFINITION invalid_message_type */
/**
 * @summary NNUserBasicCodeField_invalid_message_type
 * @constant
 * @type {number}
 */
export const invalid_message_type: NNUserBasicCodeField = NNUserBasicCodeField_invalid_message_type; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_message_type */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_functional_group_not_supported */
/**
 * @summary NNUserBasicCodeField_functional_group_not_supported
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_functional_group_not_supported: NNUserBasicCodeField = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_functional_group_not_supported */

/* START_OF_SYMBOL_DEFINITION functional_group_not_supported */
/**
 * @summary NNUserBasicCodeField_functional_group_not_supported
 * @constant
 * @type {number}
 */
export const functional_group_not_supported: NNUserBasicCodeField = NNUserBasicCodeField_functional_group_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION functional_group_not_supported */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_subscription_terminated */
/**
 * @summary NNUserBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_subscription_terminated: NNUserBasicCodeField = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_subscription_terminated */

/* START_OF_SYMBOL_DEFINITION subscription_terminated */
/**
 * @summary NNUserBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const subscription_terminated: NNUserBasicCodeField = NNUserBasicCodeField_subscription_terminated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION subscription_terminated */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_no_bilateral_agreement */
/**
 * @summary NNUserBasicCodeField_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_no_bilateral_agreement: NNUserBasicCodeField = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_no_bilateral_agreement */

/* START_OF_SYMBOL_DEFINITION no_bilateral_agreement */
/**
 * @summary NNUserBasicCodeField_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const no_bilateral_agreement: NNUserBasicCodeField = NNUserBasicCodeField_no_bilateral_agreement; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_bilateral_agreement */

/* START_OF_SYMBOL_DEFINITION NNUserBasicCodeField_user_defined_reason */
/**
 * @summary NNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const NNUserBasicCodeField_user_defined_reason: NNUserBasicCodeField = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUserBasicCodeField_user_defined_reason */

/* START_OF_SYMBOL_DEFINITION user_defined_reason */
/**
 * @summary NNUserBasicCodeField_user_defined_reason
 * @constant
 * @type {number}
 */
export const user_defined_reason: NNUserBasicCodeField = NNUserBasicCodeField_user_defined_reason; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_defined_reason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserBasicCodeField */
let _cached_decoder_for_NNUserBasicCodeField: $.ASN1Decoder<NNUserBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUserBasicCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNUserBasicCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUserBasicCodeField} The decoded data structure.
 */
export function _decode_NNUserBasicCodeField(el: _Element) {
    if (!_cached_decoder_for_NNUserBasicCodeField) {
        _cached_decoder_for_NNUserBasicCodeField = $._decodeInteger;
    }
    return _cached_decoder_for_NNUserBasicCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserBasicCodeField */
let _cached_encoder_for_NNUserBasicCodeField: $.ASN1Encoder<NNUserBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUserBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUserBasicCodeField */
/**
 * @summary Encodes a(n) NNUserBasicCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUserBasicCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNUserBasicCodeField(
    value: NNUserBasicCodeField,
    elGetter: $.ASN1Encoder<NNUserBasicCodeField>
) {
    if (!_cached_encoder_for_NNUserBasicCodeField) {
        _cached_encoder_for_NNUserBasicCodeField = $._encodeInteger;
    }
    return _cached_encoder_for_NNUserBasicCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNUserBasicCodeField */

/* eslint-enable */
