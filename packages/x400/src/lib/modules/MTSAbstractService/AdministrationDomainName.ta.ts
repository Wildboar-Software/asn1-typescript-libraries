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

/* START_OF_SYMBOL_DEFINITION AdministrationDomainName */
/**
 * @summary AdministrationDomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrationDomainName  ::=  [APPLICATION 2]  CHOICE {
 *   numeric    NumericString(SIZE (0..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (0..ub-domain-name-length))
 * }
 * ```
 */
export type AdministrationDomainName =
    | { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AdministrationDomainName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrationDomainName */
let _cached_decoder_for_AdministrationDomainName: $.ASN1Decoder<AdministrationDomainName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrationDomainName */

/* START_OF_SYMBOL_DEFINITION _decode_AdministrationDomainName */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrationDomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrationDomainName} The decoded data structure.
 */
export function _decode_AdministrationDomainName(el: _Element) {
    if (!_cached_decoder_for_AdministrationDomainName) {
        _cached_decoder_for_AdministrationDomainName = $._decode_explicit<AdministrationDomainName>(
            () =>
                $._decode_inextensible_choice<AdministrationDomainName>({
                    'UNIVERSAL 18': ['numeric', $._decodeNumericString],
                    'UNIVERSAL 19': ['printable', $._decodePrintableString],
                })
        );
    }
    return _cached_decoder_for_AdministrationDomainName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministrationDomainName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrationDomainName */
let _cached_encoder_for_AdministrationDomainName: $.ASN1Encoder<AdministrationDomainName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrationDomainName */

/* START_OF_SYMBOL_DEFINITION _encode_AdministrationDomainName */
/**
 * @summary Encodes a(n) AdministrationDomainName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrationDomainName, encoded as an ASN.1 Element.
 */
export function _encode_AdministrationDomainName(
    value: AdministrationDomainName,
    elGetter: $.ASN1Encoder<AdministrationDomainName>
) {
    if (!_cached_encoder_for_AdministrationDomainName) {
        _cached_encoder_for_AdministrationDomainName = $._encode_explicit(
            _TagClass.application,
            2,
            () =>
                $._encode_choice<AdministrationDomainName>(
                    {
                        numeric: $._encodeNumericString,
                        printable: $._encodePrintableString,
                    },
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_AdministrationDomainName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministrationDomainName */

/* eslint-enable */
