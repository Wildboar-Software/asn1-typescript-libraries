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

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions */
/**
 * @summary IPMAutoForwardOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoForwardOptions  ::=  BIT STRING {
 *   forward-all-object-types(0), -- forward-all-object-types 'one', forward IPMs only 'zero'
 *   include-returned-content(1), -- include-returned-content 'one', exclude 'zero'
 *   include-returned-ipm(2), -- include-returned-ipm 'one', exclude 'zero'
 *   forwarded-content-prohibited(3), -- forwarded-content-prohibited 'one', allowed'zero'
 *   preserve-retrieval-status(4), -- preserve-retrieval-status 'one', change 'zero'
 *   delete-delivered-object(5)
 * }
 * ```
 */
export type IPMAutoForwardOptions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions */

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_forward_all_object_types */
/**
 * @summary IPMAutoForwardOptions_forward_all_object_types
 * @constant
 */
export const IPMAutoForwardOptions_forward_all_object_types: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_forward_all_object_types */

/* START_OF_SYMBOL_DEFINITION forward_all_object_types */
/**
 * @summary forward_all_object_types
 * @constant
 */
export const forward_all_object_types: number = IPMAutoForwardOptions_forward_all_object_types; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION forward_all_object_types */

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_include_returned_content */
/**
 * @summary IPMAutoForwardOptions_include_returned_content
 * @constant
 */
export const IPMAutoForwardOptions_include_returned_content: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_include_returned_content */

/* START_OF_SYMBOL_DEFINITION include_returned_content */
/**
 * @summary include_returned_content
 * @constant
 */
export const include_returned_content: number = IPMAutoForwardOptions_include_returned_content; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION include_returned_content */

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_include_returned_ipm */
/**
 * @summary IPMAutoForwardOptions_include_returned_ipm
 * @constant
 */
export const IPMAutoForwardOptions_include_returned_ipm: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_include_returned_ipm */

/* START_OF_SYMBOL_DEFINITION include_returned_ipm */
/**
 * @summary include_returned_ipm
 * @constant
 */
export const include_returned_ipm: number = IPMAutoForwardOptions_include_returned_ipm; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION include_returned_ipm */

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_forwarded_content_prohibited */
/**
 * @summary IPMAutoForwardOptions_forwarded_content_prohibited
 * @constant
 */
export const IPMAutoForwardOptions_forwarded_content_prohibited: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_forwarded_content_prohibited */

/* START_OF_SYMBOL_DEFINITION forwarded_content_prohibited */
/**
 * @summary forwarded_content_prohibited
 * @constant
 */
export const forwarded_content_prohibited: number = IPMAutoForwardOptions_forwarded_content_prohibited; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION forwarded_content_prohibited */

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_preserve_retrieval_status */
/**
 * @summary IPMAutoForwardOptions_preserve_retrieval_status
 * @constant
 */
export const IPMAutoForwardOptions_preserve_retrieval_status: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_preserve_retrieval_status */

/* START_OF_SYMBOL_DEFINITION preserve_retrieval_status */
/**
 * @summary preserve_retrieval_status
 * @constant
 */
export const preserve_retrieval_status: number = IPMAutoForwardOptions_preserve_retrieval_status; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION preserve_retrieval_status */

/* START_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_delete_delivered_object */
/**
 * @summary IPMAutoForwardOptions_delete_delivered_object
 * @constant
 */
export const IPMAutoForwardOptions_delete_delivered_object: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION IPMAutoForwardOptions_delete_delivered_object */

/* START_OF_SYMBOL_DEFINITION delete_delivered_object */
/**
 * @summary delete_delivered_object
 * @constant
 */
export const delete_delivered_object: number = IPMAutoForwardOptions_delete_delivered_object; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delete_delivered_object */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAutoForwardOptions */
let _cached_decoder_for_IPMAutoForwardOptions: $.ASN1Decoder<IPMAutoForwardOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMAutoForwardOptions */

/* START_OF_SYMBOL_DEFINITION _decode_IPMAutoForwardOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMAutoForwardOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMAutoForwardOptions} The decoded data structure.
 */
export function _decode_IPMAutoForwardOptions(el: _Element) {
    if (!_cached_decoder_for_IPMAutoForwardOptions) {
        _cached_decoder_for_IPMAutoForwardOptions = $._decodeBitString;
    }
    return _cached_decoder_for_IPMAutoForwardOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMAutoForwardOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAutoForwardOptions */
let _cached_encoder_for_IPMAutoForwardOptions: $.ASN1Encoder<IPMAutoForwardOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMAutoForwardOptions */

/* START_OF_SYMBOL_DEFINITION _encode_IPMAutoForwardOptions */
/**
 * @summary Encodes a(n) IPMAutoForwardOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMAutoForwardOptions, encoded as an ASN.1 Element.
 */
export function _encode_IPMAutoForwardOptions(
    value: IPMAutoForwardOptions,
    elGetter: $.ASN1Encoder<IPMAutoForwardOptions>
) {
    if (!_cached_encoder_for_IPMAutoForwardOptions) {
        _cached_encoder_for_IPMAutoForwardOptions = $._encodeBitString;
    }
    return _cached_encoder_for_IPMAutoForwardOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMAutoForwardOptions */

/* eslint-enable */
