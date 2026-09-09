/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { MediaServiceCapsList_Item, _decode_MediaServiceCapsList_Item, _encode_MediaServiceCapsList_Item } from "../CSTA-capability-exchange/MediaServiceCapsList-Item.ta.mjs";



/**
 * @summary MediaServiceCapsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServiceCapsList  ::=  SEQUENCE OF SEQUENCE
 * {     mediaServiceType             MediaServiceType,
 *     mediaServiceVersion             INTEGER             OPTIONAL,
 *     mediaServiceInstance             MediaServiceInstanceID         OPTIONAL,
 *     connectionMode                 ConnectionModeBMap         OPTIONAL,
 *     mediaStreamIDSupported             BOOLEAN }
 * ```
 */
export
type MediaServiceCapsList = MediaServiceCapsList_Item[]; // SequenceOfType

let _cached_decoder_for_MediaServiceCapsList: $.ASN1Decoder<MediaServiceCapsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServiceCapsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServiceCapsList (el: _Element): MediaServiceCapsList {
    if (!_cached_decoder_for_MediaServiceCapsList) { _cached_decoder_for_MediaServiceCapsList = $._decodeSequenceOf<MediaServiceCapsList_Item>(() => _decode_MediaServiceCapsList_Item); }
    return _cached_decoder_for_MediaServiceCapsList(el);
}

let _cached_encoder_for_MediaServiceCapsList: $.ASN1Encoder<MediaServiceCapsList> | null = null;

/**
 * @summary Encodes a(n) MediaServiceCapsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServiceCapsList, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServiceCapsList (value: MediaServiceCapsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServiceCapsList) { _cached_encoder_for_MediaServiceCapsList = $._encodeSequenceOf<MediaServiceCapsList_Item>(() => _encode_MediaServiceCapsList_Item, $.BER); }
    return _cached_encoder_for_MediaServiceCapsList(value, elGetter);
}


/* eslint-enable */
