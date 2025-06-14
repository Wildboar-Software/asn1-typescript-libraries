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
/* START_OF_SYMBOL_DEFINITION MessageRetrievalPDUs88 */
/**
 * @summary MessageRetrievalPDUs88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageRetrievalPDUs88  ::=  ROS-SingleAS{{MSInvokeIds}, retrieval-88}
 * ```
 */
export type MessageRetrievalPDUs88 = ROS_SingleAS; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageRetrievalPDUs88 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageRetrievalPDUs88 */
let _cached_decoder_for_MessageRetrievalPDUs88: $.ASN1Decoder<MessageRetrievalPDUs88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageRetrievalPDUs88 */

/* START_OF_SYMBOL_DEFINITION _decode_MessageRetrievalPDUs88 */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageRetrievalPDUs88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageRetrievalPDUs88} The decoded data structure.
 */
export function _decode_MessageRetrievalPDUs88(el: _Element) {
    if (!_cached_decoder_for_MessageRetrievalPDUs88) {
        _cached_decoder_for_MessageRetrievalPDUs88 = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MessageRetrievalPDUs88(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageRetrievalPDUs88 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageRetrievalPDUs88 */
let _cached_encoder_for_MessageRetrievalPDUs88: $.ASN1Encoder<MessageRetrievalPDUs88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageRetrievalPDUs88 */

/* START_OF_SYMBOL_DEFINITION _encode_MessageRetrievalPDUs88 */
/**
 * @summary Encodes a(n) MessageRetrievalPDUs88 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageRetrievalPDUs88, encoded as an ASN.1 Element.
 */
export function _encode_MessageRetrievalPDUs88(
    value: MessageRetrievalPDUs88,
    elGetter: $.ASN1Encoder<MessageRetrievalPDUs88>
) {
    if (!_cached_encoder_for_MessageRetrievalPDUs88) {
        _cached_encoder_for_MessageRetrievalPDUs88 = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MessageRetrievalPDUs88(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageRetrievalPDUs88 */

/* eslint-enable */
