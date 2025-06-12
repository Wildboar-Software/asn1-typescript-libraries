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
    NAddress,
    _decode_NAddress,
    _encode_NAddress,
} from '../NLM/NAddress.ta.mjs';
export {
    NAddress,
    _decode_NAddress,
    _encode_NAddress,
} from '../NLM/NAddress.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NAddresses */
/**
 * @summary NAddresses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddresses  ::=  SET OF NAddress
 * ```
 */
export type NAddresses = NAddress[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddresses */
let _cached_decoder_for_NAddresses: $.ASN1Decoder<NAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddresses */

/* START_OF_SYMBOL_DEFINITION _decode_NAddresses */
/**
 * @summary Decodes an ASN.1 element into a(n) NAddresses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NAddresses} The decoded data structure.
 */
export function _decode_NAddresses(el: _Element) {
    if (!_cached_decoder_for_NAddresses) {
        _cached_decoder_for_NAddresses = $._decodeSetOf<NAddress>(
            () => _decode_NAddress
        );
    }
    return _cached_decoder_for_NAddresses(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NAddresses */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddresses */
let _cached_encoder_for_NAddresses: $.ASN1Encoder<NAddresses> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddresses */

/* START_OF_SYMBOL_DEFINITION _encode_NAddresses */
/**
 * @summary Encodes a(n) NAddresses into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAddresses, encoded as an ASN.1 Element.
 */
export function _encode_NAddresses(
    value: NAddresses,
    elGetter: $.ASN1Encoder<NAddresses>
) {
    if (!_cached_encoder_for_NAddresses) {
        _cached_encoder_for_NAddresses = $._encodeSetOf<NAddress>(
            () => _encode_NAddress,
            $.BER
        );
    }
    return _cached_encoder_for_NAddresses(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NAddresses */

/* eslint-enable */
