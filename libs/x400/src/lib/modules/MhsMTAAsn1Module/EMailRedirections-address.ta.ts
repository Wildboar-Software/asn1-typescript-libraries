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
import {
    EMailMtsUserName,
    _decode_EMailMtsUserName,
    _encode_EMailMtsUserName,
} from '../MhsMTAAsn1Module/EMailMtsUserName.ta';
export {
    EMailMtsUserName,
    _decode_EMailMtsUserName,
    _encode_EMailMtsUserName,
} from '../MhsMTAAsn1Module/EMailMtsUserName.ta';

/* START_OF_SYMBOL_DEFINITION EMailRedirections_address */
/**
 * @summary EMailRedirections_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EMailRedirections-address ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EMailRedirections_address =
    | { none: NULL } /* CHOICE_ALT_ROOT */
    | { email_addr: EMailMtsUserName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EMailRedirections_address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailRedirections_address */
let _cached_decoder_for_EMailRedirections_address: $.ASN1Decoder<EMailRedirections_address> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EMailRedirections_address */

/* START_OF_SYMBOL_DEFINITION _decode_EMailRedirections_address */
/**
 * @summary Decodes an ASN.1 element into a(n) EMailRedirections_address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EMailRedirections_address} The decoded data structure.
 */
export function _decode_EMailRedirections_address(el: _Element) {
    if (!_cached_decoder_for_EMailRedirections_address) {
        _cached_decoder_for_EMailRedirections_address = $._decode_inextensible_choice<EMailRedirections_address>(
            {
                'UNIVERSAL 5': ['none', $._decodeNull],
                'CONTEXT 0': ['email_addr', _decode_EMailMtsUserName],
                'CONTEXT 1': ['email_addr', _decode_EMailMtsUserName],
            }
        );
    }
    return _cached_decoder_for_EMailRedirections_address(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EMailRedirections_address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailRedirections_address */
let _cached_encoder_for_EMailRedirections_address: $.ASN1Encoder<EMailRedirections_address> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EMailRedirections_address */

/* START_OF_SYMBOL_DEFINITION _encode_EMailRedirections_address */
/**
 * @summary Encodes a(n) EMailRedirections_address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMailRedirections_address, encoded as an ASN.1 Element.
 */
export function _encode_EMailRedirections_address(
    value: EMailRedirections_address,
    elGetter: $.ASN1Encoder<EMailRedirections_address>
) {
    if (!_cached_encoder_for_EMailRedirections_address) {
        _cached_encoder_for_EMailRedirections_address = $._encode_choice<EMailRedirections_address>(
            {
                none: $._encodeNull,
                email_addr: _encode_EMailMtsUserName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_EMailRedirections_address(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EMailRedirections_address */

/* eslint-enable */
