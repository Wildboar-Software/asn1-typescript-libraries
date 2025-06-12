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
    ActivityCode_number,
    ActivityCode_number_approved /* IMPORTED_LONG_NAMED_INTEGER */,
    approved /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_assign /* IMPORTED_LONG_NAMED_INTEGER */,
    assign /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_cancel /* IMPORTED_LONG_NAMED_INTEGER */,
    cancel /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_clear /* IMPORTED_LONG_NAMED_INTEGER */,
    clear /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_close /* IMPORTED_LONG_NAMED_INTEGER */,
    close /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_defer /* IMPORTED_LONG_NAMED_INTEGER */,
    defer /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_dispatch /* IMPORTED_LONG_NAMED_INTEGER */,
    dispatch /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_refer /* IMPORTED_LONG_NAMED_INTEGER */,
    refer /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_release /* IMPORTED_LONG_NAMED_INTEGER */,
    release /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_re_open /* IMPORTED_LONG_NAMED_INTEGER */,
    re_open /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_repair /* IMPORTED_LONG_NAMED_INTEGER */,
    repair /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_test /* IMPORTED_LONG_NAMED_INTEGER */,
    test /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_transfer /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ActivityCode_number,
    _encode_ActivityCode_number,
} from '../X790ASN1Module/ActivityCode-number.ta.js';
export {
    ActivityCode_number,
    ActivityCode_number_approved /* IMPORTED_LONG_NAMED_INTEGER */,
    approved /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_assign /* IMPORTED_LONG_NAMED_INTEGER */,
    assign /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_cancel /* IMPORTED_LONG_NAMED_INTEGER */,
    cancel /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_clear /* IMPORTED_LONG_NAMED_INTEGER */,
    clear /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_close /* IMPORTED_LONG_NAMED_INTEGER */,
    close /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_defer /* IMPORTED_LONG_NAMED_INTEGER */,
    defer /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_dispatch /* IMPORTED_LONG_NAMED_INTEGER */,
    dispatch /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_refer /* IMPORTED_LONG_NAMED_INTEGER */,
    refer /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_release /* IMPORTED_LONG_NAMED_INTEGER */,
    release /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_re_open /* IMPORTED_LONG_NAMED_INTEGER */,
    re_open /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_repair /* IMPORTED_LONG_NAMED_INTEGER */,
    repair /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_test /* IMPORTED_LONG_NAMED_INTEGER */,
    test /* IMPORTED_SHORT_NAMED_INTEGER */,
    ActivityCode_number_transfer /* IMPORTED_LONG_NAMED_INTEGER */,
    transfer /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ActivityCode_number,
    _encode_ActivityCode_number,
} from '../X790ASN1Module/ActivityCode-number.ta.js';

/* START_OF_SYMBOL_DEFINITION ActivityCode */
/**
 * @summary ActivityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityCode  ::=  CHOICE {
 *   number
 *     INTEGER {approved(0), assign(1), cancel(2), clear(3), close(4), defer(5),
 *              dispatch(6), refer(7), release(8), re-open(9), repair(10),
 *              test(11), transfer(12)},
 *   identifier  OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type ActivityCode =
    | { number_: ActivityCode_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ActivityCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityCode */
let _cached_decoder_for_ActivityCode: $.ASN1Decoder<ActivityCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityCode */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityCode */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityCode} The decoded data structure.
 */
export function _decode_ActivityCode(el: _Element) {
    if (!_cached_decoder_for_ActivityCode) {
        _cached_decoder_for_ActivityCode = $._decode_extensible_choice<ActivityCode>(
            {
                'UNIVERSAL 2': ['number_', _decode_ActivityCode_number],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ActivityCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityCode */
let _cached_encoder_for_ActivityCode: $.ASN1Encoder<ActivityCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityCode */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityCode */
/**
 * @summary Encodes a(n) ActivityCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityCode, encoded as an ASN.1 Element.
 */
export function _encode_ActivityCode(
    value: ActivityCode,
    elGetter: $.ASN1Encoder<ActivityCode>
) {
    if (!_cached_encoder_for_ActivityCode) {
        _cached_encoder_for_ActivityCode = $._encode_choice<ActivityCode>(
            {
                number_: _encode_ActivityCode_number,
                identifier: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActivityCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityCode */

/* eslint-enable */
