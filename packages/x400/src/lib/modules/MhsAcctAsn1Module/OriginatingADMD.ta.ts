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
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.js';
export {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.js';

/* START_OF_SYMBOL_DEFINITION OriginatingADMD */
/**
 * @summary OriginatingADMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingADMD  ::=  AdministrationDomainName
 * ```
 */
export type OriginatingADMD = AdministrationDomainName; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatingADMD */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingADMD */
let _cached_decoder_for_OriginatingADMD: $.ASN1Decoder<OriginatingADMD> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingADMD */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatingADMD */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingADMD
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingADMD} The decoded data structure.
 */
export function _decode_OriginatingADMD(el: _Element) {
    if (!_cached_decoder_for_OriginatingADMD) {
        _cached_decoder_for_OriginatingADMD = _decode_AdministrationDomainName;
    }
    return _cached_decoder_for_OriginatingADMD(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatingADMD */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingADMD */
let _cached_encoder_for_OriginatingADMD: $.ASN1Encoder<OriginatingADMD> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingADMD */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatingADMD */
/**
 * @summary Encodes a(n) OriginatingADMD into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingADMD, encoded as an ASN.1 Element.
 */
export function _encode_OriginatingADMD(
    value: OriginatingADMD,
    elGetter: $.ASN1Encoder<OriginatingADMD>
) {
    if (!_cached_encoder_for_OriginatingADMD) {
        _cached_encoder_for_OriginatingADMD = _encode_AdministrationDomainName;
    }
    return _cached_encoder_for_OriginatingADMD(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatingADMD */

/* eslint-enable */
