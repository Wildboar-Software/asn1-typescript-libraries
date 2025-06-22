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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    CrossReferencingInformationSubField,
    _decode_CrossReferencingInformationSubField,
    _encode_CrossReferencingInformationSubField,
} from '../EDIMSInformationObjects/CrossReferencingInformationSubField.ta.mjs';
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

let _cached_decoder_for_CrossReferencingInformationField: $.ASN1Decoder<CrossReferencingInformationField> | null = null;

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

let _cached_encoder_for_CrossReferencingInformationField: $.ASN1Encoder<CrossReferencingInformationField> | null = null;

/**
 * @summary Encodes a(n) CrossReferencingInformationField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
