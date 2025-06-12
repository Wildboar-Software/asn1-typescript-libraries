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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OptionalIdentifier */
/**
 * @summary OptionalIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalIdentifier  ::=  CHOICE {present  Identifier,
 *                                absent   NULL
 * }
 * ```
 */
export type OptionalIdentifier =
    | { present: Identifier } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OptionalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalIdentifier */
let _cached_decoder_for_OptionalIdentifier: $.ASN1Decoder<OptionalIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionalIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalIdentifier} The decoded data structure.
 */
export function _decode_OptionalIdentifier(el: _Element) {
    if (!_cached_decoder_for_OptionalIdentifier) {
        _cached_decoder_for_OptionalIdentifier = $._decode_inextensible_choice<OptionalIdentifier>(
            {
                'UNIVERSAL 19': ['present', _decode_Identifier],
                'UNIVERSAL 5': ['absent', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_OptionalIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalIdentifier */
let _cached_encoder_for_OptionalIdentifier: $.ASN1Encoder<OptionalIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalIdentifier */
/**
 * @summary Encodes a(n) OptionalIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_OptionalIdentifier(
    value: OptionalIdentifier,
    elGetter: $.ASN1Encoder<OptionalIdentifier>
) {
    if (!_cached_encoder_for_OptionalIdentifier) {
        _cached_encoder_for_OptionalIdentifier = $._encode_choice<OptionalIdentifier>(
            {
                present: _encode_Identifier,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OptionalIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionalIdentifier */

/* eslint-enable */
