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
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/ROS-SingleAS.ta.mjs';
/**
 * @summary MessageRetrievalPDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageRetrievalPDUs  ::=
 *   ROS-SingleAS{{MSInvokeIds}, retrieval}
 * ```
 */
export type MessageRetrievalPDUs = ROS_SingleAS; // DefinedType

let _cached_decoder_for_MessageRetrievalPDUs: $.ASN1Decoder<MessageRetrievalPDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageRetrievalPDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageRetrievalPDUs} The decoded data structure.
 */
export function _decode_MessageRetrievalPDUs(el: _Element) {
    if (!_cached_decoder_for_MessageRetrievalPDUs) {
        _cached_decoder_for_MessageRetrievalPDUs = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MessageRetrievalPDUs(el);
}

let _cached_encoder_for_MessageRetrievalPDUs: $.ASN1Encoder<MessageRetrievalPDUs> | null = null;

/**
 * @summary Encodes a(n) MessageRetrievalPDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageRetrievalPDUs, encoded as an ASN.1 Element.
 */
export function _encode_MessageRetrievalPDUs(
    value: MessageRetrievalPDUs,
    elGetter: $.ASN1Encoder<MessageRetrievalPDUs>
) {
    if (!_cached_encoder_for_MessageRetrievalPDUs) {
        _cached_encoder_for_MessageRetrievalPDUs = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MessageRetrievalPDUs(value, elGetter);
}


/* eslint-enable */
