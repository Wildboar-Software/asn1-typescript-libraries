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
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageSecurityLabel */
/**
 * @summary MessageSecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSecurityLabel  ::=  SecurityLabel
 * ```
 */
export type MessageSecurityLabel = SecurityLabel; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSecurityLabel */
let _cached_decoder_for_MessageSecurityLabel: $.ASN1Decoder<MessageSecurityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSecurityLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSecurityLabel} The decoded data structure.
 */
export function _decode_MessageSecurityLabel(el: _Element) {
    if (!_cached_decoder_for_MessageSecurityLabel) {
        _cached_decoder_for_MessageSecurityLabel = _decode_SecurityLabel;
    }
    return _cached_decoder_for_MessageSecurityLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSecurityLabel */
let _cached_encoder_for_MessageSecurityLabel: $.ASN1Encoder<MessageSecurityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSecurityLabel */
/**
 * @summary Encodes a(n) MessageSecurityLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_MessageSecurityLabel(
    value: MessageSecurityLabel,
    elGetter: $.ASN1Encoder<MessageSecurityLabel>
) {
    if (!_cached_encoder_for_MessageSecurityLabel) {
        _cached_encoder_for_MessageSecurityLabel = _encode_SecurityLabel;
    }
    return _cached_encoder_for_MessageSecurityLabel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSecurityLabel */

/* eslint-enable */
