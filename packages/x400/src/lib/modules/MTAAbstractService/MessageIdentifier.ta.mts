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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageIdentifier */
/**
 * @summary MessageIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageIdentifier = MTSIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageIdentifier */
let _cached_decoder_for_MessageIdentifier: $.ASN1Decoder<MessageIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MessageIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageIdentifier} The decoded data structure.
 */
export function _decode_MessageIdentifier(el: _Element) {
    if (!_cached_decoder_for_MessageIdentifier) {
        _cached_decoder_for_MessageIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_MessageIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageIdentifier */
let _cached_encoder_for_MessageIdentifier: $.ASN1Encoder<MessageIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MessageIdentifier */
/**
 * @summary Encodes a(n) MessageIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageIdentifier(
    value: MessageIdentifier,
    elGetter: $.ASN1Encoder<MessageIdentifier>
) {
    if (!_cached_encoder_for_MessageIdentifier) {
        _cached_encoder_for_MessageIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_MessageIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageIdentifier */

/* eslint-enable */
