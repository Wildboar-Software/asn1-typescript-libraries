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

/* START_OF_SYMBOL_DEFINITION DataRate */
/**
 * @summary DataRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataRate  ::=  CHOICE {real  REAL,
 *                      oi    OBJECT IDENTIFIER
 * }
 * ```
 */
export type DataRate =
    | { real: REAL } /* CHOICE_ALT_ROOT */
    | { oi: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DataRate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataRate */
let _cached_decoder_for_DataRate: $.ASN1Decoder<DataRate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataRate */

/* START_OF_SYMBOL_DEFINITION _decode_DataRate */
/**
 * @summary Decodes an ASN.1 element into a(n) DataRate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataRate} The decoded data structure.
 */
export function _decode_DataRate(el: _Element) {
    if (!_cached_decoder_for_DataRate) {
        _cached_decoder_for_DataRate = $._decode_inextensible_choice<DataRate>({
            'UNIVERSAL 9': ['real', $._decodeReal],
            'UNIVERSAL 6': ['oi', $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_DataRate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataRate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataRate */
let _cached_encoder_for_DataRate: $.ASN1Encoder<DataRate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataRate */

/* START_OF_SYMBOL_DEFINITION _encode_DataRate */
/**
 * @summary Encodes a(n) DataRate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataRate, encoded as an ASN.1 Element.
 */
export function _encode_DataRate(
    value: DataRate,
    elGetter: $.ASN1Encoder<DataRate>
) {
    if (!_cached_encoder_for_DataRate) {
        _cached_encoder_for_DataRate = $._encode_choice<DataRate>(
            {
                real: $._encodeReal,
                oi: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataRate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataRate */

/* eslint-enable */
