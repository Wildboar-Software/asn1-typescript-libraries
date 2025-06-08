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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';

/* START_OF_SYMBOL_DEFINITION DerivedFrom */
/**
 * @summary DerivedFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DerivedFrom  ::=  TemplateList
 * ```
 */
export type DerivedFrom = TemplateList; // DefinedType
/* END_OF_SYMBOL_DEFINITION DerivedFrom */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DerivedFrom */
let _cached_decoder_for_DerivedFrom: $.ASN1Decoder<DerivedFrom> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DerivedFrom */

/* START_OF_SYMBOL_DEFINITION _decode_DerivedFrom */
/**
 * @summary Decodes an ASN.1 element into a(n) DerivedFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DerivedFrom} The decoded data structure.
 */
export function _decode_DerivedFrom(el: _Element) {
    if (!_cached_decoder_for_DerivedFrom) {
        _cached_decoder_for_DerivedFrom = _decode_TemplateList;
    }
    return _cached_decoder_for_DerivedFrom(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DerivedFrom */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DerivedFrom */
let _cached_encoder_for_DerivedFrom: $.ASN1Encoder<DerivedFrom> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DerivedFrom */

/* START_OF_SYMBOL_DEFINITION _encode_DerivedFrom */
/**
 * @summary Encodes a(n) DerivedFrom into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DerivedFrom, encoded as an ASN.1 Element.
 */
export function _encode_DerivedFrom(
    value: DerivedFrom,
    elGetter: $.ASN1Encoder<DerivedFrom>
) {
    if (!_cached_encoder_for_DerivedFrom) {
        _cached_encoder_for_DerivedFrom = _encode_TemplateList;
    }
    return _cached_encoder_for_DerivedFrom(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DerivedFrom */

/* eslint-enable */
