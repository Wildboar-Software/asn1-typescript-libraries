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

/* START_OF_SYMBOL_DEFINITION PrivateDomainIdentifier */
/**
 * @summary PrivateDomainIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateDomainIdentifier  ::=  CHOICE {
 *   numeric    NumericString(SIZE (1..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (1..ub-domain-name-length))
 * }
 * ```
 */
export type PrivateDomainIdentifier =
    | { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PrivateDomainIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDomainIdentifier */
let _cached_decoder_for_PrivateDomainIdentifier: $.ASN1Decoder<PrivateDomainIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivateDomainIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_PrivateDomainIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDomainIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateDomainIdentifier} The decoded data structure.
 */
export function _decode_PrivateDomainIdentifier(el: _Element) {
    if (!_cached_decoder_for_PrivateDomainIdentifier) {
        _cached_decoder_for_PrivateDomainIdentifier = $._decode_inextensible_choice<PrivateDomainIdentifier>(
            {
                'UNIVERSAL 18': ['numeric', $._decodeNumericString],
                'UNIVERSAL 19': ['printable', $._decodePrintableString],
            }
        );
    }
    return _cached_decoder_for_PrivateDomainIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivateDomainIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDomainIdentifier */
let _cached_encoder_for_PrivateDomainIdentifier: $.ASN1Encoder<PrivateDomainIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivateDomainIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_PrivateDomainIdentifier */
/**
 * @summary Encodes a(n) PrivateDomainIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDomainIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PrivateDomainIdentifier(
    value: PrivateDomainIdentifier,
    elGetter: $.ASN1Encoder<PrivateDomainIdentifier>
) {
    if (!_cached_encoder_for_PrivateDomainIdentifier) {
        _cached_encoder_for_PrivateDomainIdentifier = $._encode_choice<PrivateDomainIdentifier>(
            {
                numeric: $._encodeNumericString,
                printable: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivateDomainIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivateDomainIdentifier */

/* eslint-enable */
