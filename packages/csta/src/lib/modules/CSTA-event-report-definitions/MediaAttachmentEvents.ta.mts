/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { MediaAttachedEvent, _decode_MediaAttachedEvent, _encode_MediaAttachedEvent } from "../CSTA-media-attached-event/MediaAttachedEvent.ta.mjs";

import { MediaDetachedEvent, _decode_MediaDetachedEvent, _encode_MediaDetachedEvent } from "../CSTA-media-detached-event/MediaDetachedEvent.ta.mjs";



/**
 * @summary MediaAttachmentEvents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaAttachmentEvents  ::=  CHOICE
 * {    mediaAttached             [ 0] IMPLICIT MediaAttachedEvent,
 *     mediaDetached             [ 1] IMPLICIT MediaDetachedEvent }
 * ```
 */
export
type MediaAttachmentEvents =
    { mediaAttached: MediaAttachedEvent } /* CHOICE_ALT_ROOT */
    | { mediaDetached: MediaDetachedEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MediaAttachmentEvents: $.ASN1Decoder<MediaAttachmentEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaAttachmentEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaAttachmentEvents (el: _Element): MediaAttachmentEvents {
    if (!_cached_decoder_for_MediaAttachmentEvents) { _cached_decoder_for_MediaAttachmentEvents = $._decode_inextensible_choice<MediaAttachmentEvents>({
    "CONTEXT 0": [ "mediaAttached", $._decode_implicit<MediaAttachedEvent>(() => _decode_MediaAttachedEvent) ],
    "CONTEXT 1": [ "mediaDetached", $._decode_implicit<MediaDetachedEvent>(() => _decode_MediaDetachedEvent) ]
}); }
    return _cached_decoder_for_MediaAttachmentEvents(el);
}

let _cached_encoder_for_MediaAttachmentEvents: $.ASN1Encoder<MediaAttachmentEvents> | null = null;

/**
 * @summary Encodes a(n) MediaAttachmentEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaAttachmentEvents, encoded as an ASN.1 Element.
 */
export
function _encode_MediaAttachmentEvents (value: MediaAttachmentEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaAttachmentEvents) { _cached_encoder_for_MediaAttachmentEvents = $._encode_choice<MediaAttachmentEvents>({
    "mediaAttached": $._encode_implicit(_TagClass.context, 0, () => _encode_MediaAttachedEvent, $.BER),
    "mediaDetached": $._encode_implicit(_TagClass.context, 1, () => _encode_MediaDetachedEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_MediaAttachmentEvents(value, elGetter);
}


/* eslint-enable */
