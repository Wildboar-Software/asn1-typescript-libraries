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
    DocumentName,
    _decode_DocumentName,
    _encode_DocumentName,
} from '../DefinitionASN1Module/DocumentName.ta.js';
export {
    DocumentName,
    _decode_DocumentName,
    _encode_DocumentName,
} from '../DefinitionASN1Module/DocumentName.ta.js';
import {
    DocumentObjectIdentifier,
    _decode_DocumentObjectIdentifier,
    _encode_DocumentObjectIdentifier,
} from '../DefinitionASN1Module/DocumentObjectIdentifier.ta.js';
export {
    DocumentObjectIdentifier,
    _decode_DocumentObjectIdentifier,
    _encode_DocumentObjectIdentifier,
} from '../DefinitionASN1Module/DocumentObjectIdentifier.ta.js';

/* START_OF_SYMBOL_DEFINITION TemplateLabel_documentId */
/**
 * @summary TemplateLabel_documentId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TemplateLabel-documentId ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TemplateLabel_documentId =
    | { documentName: DocumentName } /* CHOICE_ALT_ROOT */
    | {
          documentObjectIdentifier: DocumentObjectIdentifier;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TemplateLabel_documentId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TemplateLabel_documentId */
let _cached_decoder_for_TemplateLabel_documentId: $.ASN1Decoder<TemplateLabel_documentId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TemplateLabel_documentId */

/* START_OF_SYMBOL_DEFINITION _decode_TemplateLabel_documentId */
/**
 * @summary Decodes an ASN.1 element into a(n) TemplateLabel_documentId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TemplateLabel_documentId} The decoded data structure.
 */
export function _decode_TemplateLabel_documentId(el: _Element) {
    if (!_cached_decoder_for_TemplateLabel_documentId) {
        _cached_decoder_for_TemplateLabel_documentId = $._decode_inextensible_choice<TemplateLabel_documentId>(
            {
                'UNIVERSAL 25': ['documentName', _decode_DocumentName],
                'UNIVERSAL 6': [
                    'documentObjectIdentifier',
                    _decode_DocumentObjectIdentifier,
                ],
                'UNIVERSAL 5': [
                    'documentObjectIdentifier',
                    _decode_DocumentObjectIdentifier,
                ],
            }
        );
    }
    return _cached_decoder_for_TemplateLabel_documentId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TemplateLabel_documentId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TemplateLabel_documentId */
let _cached_encoder_for_TemplateLabel_documentId: $.ASN1Encoder<TemplateLabel_documentId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TemplateLabel_documentId */

/* START_OF_SYMBOL_DEFINITION _encode_TemplateLabel_documentId */
/**
 * @summary Encodes a(n) TemplateLabel_documentId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateLabel_documentId, encoded as an ASN.1 Element.
 */
export function _encode_TemplateLabel_documentId(
    value: TemplateLabel_documentId,
    elGetter: $.ASN1Encoder<TemplateLabel_documentId>
) {
    if (!_cached_encoder_for_TemplateLabel_documentId) {
        _cached_encoder_for_TemplateLabel_documentId = $._encode_choice<TemplateLabel_documentId>(
            {
                documentName: _encode_DocumentName,
                documentObjectIdentifier: _encode_DocumentObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TemplateLabel_documentId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TemplateLabel_documentId */

/* eslint-enable */
