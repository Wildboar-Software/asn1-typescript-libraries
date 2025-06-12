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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NoSuchMORT */
/**
 * @summary NoSuchMORT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchMORT  ::=  SET OF ObjectInstance
 * ```
 */
export type NoSuchMORT = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NoSuchMORT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchMORT */
let _cached_decoder_for_NoSuchMORT: $.ASN1Decoder<NoSuchMORT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchMORT */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchMORT */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchMORT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchMORT} The decoded data structure.
 */
export function _decode_NoSuchMORT(el: _Element) {
    if (!_cached_decoder_for_NoSuchMORT) {
        _cached_decoder_for_NoSuchMORT = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_NoSuchMORT(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchMORT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchMORT */
let _cached_encoder_for_NoSuchMORT: $.ASN1Encoder<NoSuchMORT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchMORT */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchMORT */
/**
 * @summary Encodes a(n) NoSuchMORT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchMORT, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchMORT(
    value: NoSuchMORT,
    elGetter: $.ASN1Encoder<NoSuchMORT>
) {
    if (!_cached_encoder_for_NoSuchMORT) {
        _cached_encoder_for_NoSuchMORT = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_NoSuchMORT(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchMORT */

/* eslint-enable */
