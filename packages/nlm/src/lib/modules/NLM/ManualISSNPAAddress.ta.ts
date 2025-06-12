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
    SNPAAddress,
    _decode_SNPAAddress,
    _encode_SNPAAddress,
} from '../NLM/SNPAAddress.ta.js';
export {
    SNPAAddress,
    _decode_SNPAAddress,
    _encode_SNPAAddress,
} from '../NLM/SNPAAddress.ta.js';

/* START_OF_SYMBOL_DEFINITION ManualISSNPAAddress */
/**
 * @summary ManualISSNPAAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualISSNPAAddress  ::=  SET OF SNPAAddress
 * ```
 */
export type ManualISSNPAAddress = SNPAAddress[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ManualISSNPAAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualISSNPAAddress */
let _cached_decoder_for_ManualISSNPAAddress: $.ASN1Decoder<ManualISSNPAAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualISSNPAAddress */

/* START_OF_SYMBOL_DEFINITION _decode_ManualISSNPAAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) ManualISSNPAAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualISSNPAAddress} The decoded data structure.
 */
export function _decode_ManualISSNPAAddress(el: _Element) {
    if (!_cached_decoder_for_ManualISSNPAAddress) {
        _cached_decoder_for_ManualISSNPAAddress = $._decodeSetOf<SNPAAddress>(
            () => _decode_SNPAAddress
        );
    }
    return _cached_decoder_for_ManualISSNPAAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManualISSNPAAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualISSNPAAddress */
let _cached_encoder_for_ManualISSNPAAddress: $.ASN1Encoder<ManualISSNPAAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualISSNPAAddress */

/* START_OF_SYMBOL_DEFINITION _encode_ManualISSNPAAddress */
/**
 * @summary Encodes a(n) ManualISSNPAAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualISSNPAAddress, encoded as an ASN.1 Element.
 */
export function _encode_ManualISSNPAAddress(
    value: ManualISSNPAAddress,
    elGetter: $.ASN1Encoder<ManualISSNPAAddress>
) {
    if (!_cached_encoder_for_ManualISSNPAAddress) {
        _cached_encoder_for_ManualISSNPAAddress = $._encodeSetOf<SNPAAddress>(
            () => _encode_SNPAAddress,
            $.BER
        );
    }
    return _cached_encoder_for_ManualISSNPAAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManualISSNPAAddress */

/* eslint-enable */
