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
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta.mjs';

/* START_OF_SYMBOL_DEFINITION UniversalPosteRestanteAddress */
/**
 * @summary UniversalPosteRestanteAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPosteRestanteAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPosteRestanteAddress = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPosteRestanteAddress */
let _cached_decoder_for_UniversalPosteRestanteAddress: $.ASN1Decoder<UniversalPosteRestanteAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPosteRestanteAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPosteRestanteAddress} The decoded data structure.
 */
export function _decode_UniversalPosteRestanteAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalPosteRestanteAddress) {
        _cached_decoder_for_UniversalPosteRestanteAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPosteRestanteAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPosteRestanteAddress */
let _cached_encoder_for_UniversalPosteRestanteAddress: $.ASN1Encoder<UniversalPosteRestanteAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPosteRestanteAddress */
/**
 * @summary Encodes a(n) UniversalPosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPosteRestanteAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPosteRestanteAddress(
    value: UniversalPosteRestanteAddress,
    elGetter: $.ASN1Encoder<UniversalPosteRestanteAddress>
) {
    if (!_cached_encoder_for_UniversalPosteRestanteAddress) {
        _cached_encoder_for_UniversalPosteRestanteAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPosteRestanteAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPosteRestanteAddress */

/* eslint-enable */
