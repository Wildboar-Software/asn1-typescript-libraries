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
    CrossReferencingInformationSubField,
    _decode_CrossReferencingInformationSubField,
    _encode_CrossReferencingInformationSubField,
} from '../EDIMSInformationObjects/CrossReferencingInformationSubField.ta.mjs';
export {
    CrossReferencingInformationSubField,
    _decode_CrossReferencingInformationSubField,
    _encode_CrossReferencingInformationSubField,
} from '../EDIMSInformationObjects/CrossReferencingInformationSubField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CrossReferencingInformationField */
/**
 * @summary CrossReferencingInformationField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossReferencingInformationField  ::=  SET OF CrossReferencingInformationSubField
 * ```
 */
export type CrossReferencingInformationField = CrossReferencingInformationSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CrossReferencingInformationField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossReferencingInformationField */
let _cached_decoder_for_CrossReferencingInformationField: $.ASN1Decoder<CrossReferencingInformationField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossReferencingInformationField */

/* START_OF_SYMBOL_DEFINITION _decode_CrossReferencingInformationField */
/**
 * @summary Decodes an ASN.1 element into a(n) CrossReferencingInformationField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossReferencingInformationField} The decoded data structure.
 */
export function _decode_CrossReferencingInformationField(el: _Element) {
    if (!_cached_decoder_for_CrossReferencingInformationField) {
        _cached_decoder_for_CrossReferencingInformationField = $._decodeSetOf<CrossReferencingInformationSubField>(
            () => _decode_CrossReferencingInformationSubField
        );
    }
    return _cached_decoder_for_CrossReferencingInformationField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CrossReferencingInformationField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossReferencingInformationField */
let _cached_encoder_for_CrossReferencingInformationField: $.ASN1Encoder<CrossReferencingInformationField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossReferencingInformationField */

/* START_OF_SYMBOL_DEFINITION _encode_CrossReferencingInformationField */
/**
 * @summary Encodes a(n) CrossReferencingInformationField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossReferencingInformationField, encoded as an ASN.1 Element.
 */
export function _encode_CrossReferencingInformationField(
    value: CrossReferencingInformationField,
    elGetter: $.ASN1Encoder<CrossReferencingInformationField>
) {
    if (!_cached_encoder_for_CrossReferencingInformationField) {
        _cached_encoder_for_CrossReferencingInformationField = $._encodeSetOf<CrossReferencingInformationSubField>(
            () => _encode_CrossReferencingInformationSubField,
            $.BER
        );
    }
    return _cached_encoder_for_CrossReferencingInformationField(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CrossReferencingInformationField */

/* eslint-enable */
