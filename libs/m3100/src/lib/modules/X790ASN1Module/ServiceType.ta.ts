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

/* START_OF_SYMBOL_DEFINITION ServiceType */
/**
 * @summary ServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceType  ::=  CHOICE {
 *   int     INTEGER,
 *   string  PrintableString,
 *   oid     OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type ServiceType =
    | { int: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: PrintableString } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceType */
let _cached_decoder_for_ServiceType: $.ASN1Decoder<ServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceType */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceType */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceType} The decoded data structure.
 */
export function _decode_ServiceType(el: _Element) {
    if (!_cached_decoder_for_ServiceType) {
        _cached_decoder_for_ServiceType = $._decode_extensible_choice<ServiceType>(
            {
                'UNIVERSAL 2': ['int', $._decodeInteger],
                'UNIVERSAL 19': ['string_', $._decodePrintableString],
                'UNIVERSAL 6': ['oid', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ServiceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceType */
let _cached_encoder_for_ServiceType: $.ASN1Encoder<ServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceType */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceType */
/**
 * @summary Encodes a(n) ServiceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceType, encoded as an ASN.1 Element.
 */
export function _encode_ServiceType(
    value: ServiceType,
    elGetter: $.ASN1Encoder<ServiceType>
) {
    if (!_cached_encoder_for_ServiceType) {
        _cached_encoder_for_ServiceType = $._encode_choice<ServiceType>(
            {
                int: $._encodeInteger,
                string_: $._encodePrintableString,
                oid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ServiceType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceType */

/* eslint-enable */
