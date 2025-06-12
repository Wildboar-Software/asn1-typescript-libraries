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
    Packages,
    _decode_Packages,
    _encode_Packages,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/Packages.ta.js';
export {
    Packages,
    _decode_Packages,
    _encode_Packages,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/Packages.ta.js';

/* START_OF_SYMBOL_DEFINITION SupportedConditionalPackageList */
/**
 * @summary SupportedConditionalPackageList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedConditionalPackageList  ::=  Packages
 * ```
 */
export type SupportedConditionalPackageList = Packages; // DefinedType
/* END_OF_SYMBOL_DEFINITION SupportedConditionalPackageList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedConditionalPackageList */
let _cached_decoder_for_SupportedConditionalPackageList: $.ASN1Decoder<SupportedConditionalPackageList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedConditionalPackageList */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedConditionalPackageList */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedConditionalPackageList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedConditionalPackageList} The decoded data structure.
 */
export function _decode_SupportedConditionalPackageList(el: _Element) {
    if (!_cached_decoder_for_SupportedConditionalPackageList) {
        _cached_decoder_for_SupportedConditionalPackageList = _decode_Packages;
    }
    return _cached_decoder_for_SupportedConditionalPackageList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedConditionalPackageList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedConditionalPackageList */
let _cached_encoder_for_SupportedConditionalPackageList: $.ASN1Encoder<SupportedConditionalPackageList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedConditionalPackageList */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedConditionalPackageList */
/**
 * @summary Encodes a(n) SupportedConditionalPackageList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedConditionalPackageList, encoded as an ASN.1 Element.
 */
export function _encode_SupportedConditionalPackageList(
    value: SupportedConditionalPackageList,
    elGetter: $.ASN1Encoder<SupportedConditionalPackageList>
) {
    if (!_cached_encoder_for_SupportedConditionalPackageList) {
        _cached_encoder_for_SupportedConditionalPackageList = _encode_Packages;
    }
    return _cached_encoder_for_SupportedConditionalPackageList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedConditionalPackageList */

/* eslint-enable */
