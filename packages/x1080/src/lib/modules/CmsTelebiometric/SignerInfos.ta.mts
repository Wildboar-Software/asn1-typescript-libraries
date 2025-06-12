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
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from '../CmsTelebiometric/SignerInfo.ta.mjs';
export {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from '../CmsTelebiometric/SignerInfo.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SignerInfos */
/**
 * @summary SignerInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfos  ::=  SET (SIZE (1)) OF SignerInfo
 * ```
 */
export type SignerInfos = SignerInfo[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SignerInfos */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfos */
let _cached_decoder_for_SignerInfos: $.ASN1Decoder<SignerInfos> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfos */

/* START_OF_SYMBOL_DEFINITION _decode_SignerInfos */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfos} The decoded data structure.
 */
export function _decode_SignerInfos(el: _Element) {
    if (!_cached_decoder_for_SignerInfos) {
        _cached_decoder_for_SignerInfos = $._decodeSetOf<SignerInfo>(
            () => _decode_SignerInfo
        );
    }
    return _cached_decoder_for_SignerInfos(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerInfos */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfos */
let _cached_encoder_for_SignerInfos: $.ASN1Encoder<SignerInfos> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfos */

/* START_OF_SYMBOL_DEFINITION _encode_SignerInfos */
/**
 * @summary Encodes a(n) SignerInfos into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfos, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfos(
    value: SignerInfos,
    elGetter: $.ASN1Encoder<SignerInfos>
) {
    if (!_cached_encoder_for_SignerInfos) {
        _cached_encoder_for_SignerInfos = $._encodeSetOf<SignerInfo>(
            () => _encode_SignerInfo,
            $.BER
        );
    }
    return _cached_encoder_for_SignerInfos(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerInfos */

/* eslint-enable */
