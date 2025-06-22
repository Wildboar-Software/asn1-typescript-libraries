/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    DocumentName,
    _decode_DocumentName,
    _encode_DocumentName,
} from '../DefinitionASN1Module/DocumentName.ta.mjs';
import {
    DocumentObjectIdentifier,
    _decode_DocumentObjectIdentifier,
    _encode_DocumentObjectIdentifier,
} from '../DefinitionASN1Module/DocumentObjectIdentifier.ta.mjs';

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


let _cached_decoder_for_TemplateLabel_documentId: $.ASN1Decoder<TemplateLabel_documentId> | null = null;


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


let _cached_encoder_for_TemplateLabel_documentId: $.ASN1Encoder<TemplateLabel_documentId> | null = null;


/**
 * @summary Encodes a(n) TemplateLabel_documentId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
