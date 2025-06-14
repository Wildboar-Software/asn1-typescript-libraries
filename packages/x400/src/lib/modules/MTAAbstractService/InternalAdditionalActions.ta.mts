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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AdditionalActions,
    _decode_AdditionalActions,
    _encode_AdditionalActions,
} from '../MTAAbstractService/AdditionalActions.ta.mjs';
/* START_OF_SYMBOL_DEFINITION InternalAdditionalActions */
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
/* END_OF_SYMBOL_DEFINITION InternalAdditionalActions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalAdditionalActions */
let _cached_decoder_for_InternalAdditionalActions: $.ASN1Decoder<InternalAdditionalActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalAdditionalActions */

/* START_OF_SYMBOL_DEFINITION _decode_InternalAdditionalActions */
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
/* END_OF_SYMBOL_DEFINITION _decode_InternalAdditionalActions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalAdditionalActions */
let _cached_encoder_for_InternalAdditionalActions: $.ASN1Encoder<InternalAdditionalActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalAdditionalActions */

/* START_OF_SYMBOL_DEFINITION _encode_InternalAdditionalActions */
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

/* END_OF_SYMBOL_DEFINITION _encode_InternalAdditionalActions */

/* eslint-enable */
