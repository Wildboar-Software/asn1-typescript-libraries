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
    IPM,
    _decode_IPM,
    _encode_IPM,
} from '../IPMSInformationObjects/IPM.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageData */
/**
 * @summary MessageData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageData  ::=  IPM
 * ```
 */
export type MessageData = IPM; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageData */
let _cached_decoder_for_MessageData: $.ASN1Decoder<MessageData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _decode_MessageData */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageData} The decoded data structure.
 */
export function _decode_MessageData(el: _Element) {
    if (!_cached_decoder_for_MessageData) {
        _cached_decoder_for_MessageData = _decode_IPM;
    }
    return _cached_decoder_for_MessageData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageData */
let _cached_encoder_for_MessageData: $.ASN1Encoder<MessageData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageData */

/* START_OF_SYMBOL_DEFINITION _encode_MessageData */
/**
 * @summary Encodes a(n) MessageData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageData, encoded as an ASN.1 Element.
 */
export function _encode_MessageData(
    value: MessageData,
    elGetter: $.ASN1Encoder<MessageData>
) {
    if (!_cached_encoder_for_MessageData) {
        _cached_encoder_for_MessageData = _encode_IPM;
    }
    return _cached_encoder_for_MessageData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageData */

/* eslint-enable */
