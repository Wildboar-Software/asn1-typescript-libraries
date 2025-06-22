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
    AdditionalActions,
    _decode_AdditionalActions,
    _encode_AdditionalActions,
} from '../MTAAbstractService/AdditionalActions.ta.mjs';
/**
 * @summary InternalAdditionalActions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalAdditionalActions  ::=  AdditionalActions
 * ```
 */
export type InternalAdditionalActions = AdditionalActions; // DefinedType

let _cached_decoder_for_InternalAdditionalActions: $.ASN1Decoder<InternalAdditionalActions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternalAdditionalActions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalAdditionalActions} The decoded data structure.
 */
export function _decode_InternalAdditionalActions(el: _Element) {
    if (!_cached_decoder_for_InternalAdditionalActions) {
        _cached_decoder_for_InternalAdditionalActions = _decode_AdditionalActions;
    }
    return _cached_decoder_for_InternalAdditionalActions(el);
}

let _cached_encoder_for_InternalAdditionalActions: $.ASN1Encoder<InternalAdditionalActions> | null = null;

/**
 * @summary Encodes a(n) InternalAdditionalActions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalAdditionalActions, encoded as an ASN.1 Element.
 */
export function _encode_InternalAdditionalActions(
    value: InternalAdditionalActions,
    elGetter: $.ASN1Encoder<InternalAdditionalActions>
) {
    if (!_cached_encoder_for_InternalAdditionalActions) {
        _cached_encoder_for_InternalAdditionalActions = _encode_AdditionalActions;
    }
    return _cached_encoder_for_InternalAdditionalActions(value, elGetter);
}


/* eslint-enable */
