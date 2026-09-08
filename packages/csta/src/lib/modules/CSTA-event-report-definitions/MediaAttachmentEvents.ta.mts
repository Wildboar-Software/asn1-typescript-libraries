/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MediaAttachedEvent, _decode_MediaAttachedEvent, _encode_MediaAttachedEvent } from "../CSTA-media-attached-event/MediaAttachedEvent.ta.mjs";
// export { MediaAttachedEvent, _decode_MediaAttachedEvent, _encode_MediaAttachedEvent } from "../CSTA-media-attached-event/MediaAttachedEvent.ta.mjs";
import { MediaDetachedEvent, _decode_MediaDetachedEvent, _encode_MediaDetachedEvent } from "../CSTA-media-detached-event/MediaDetachedEvent.ta.mjs";
// export { MediaDetachedEvent, _decode_MediaDetachedEvent, _encode_MediaDetachedEvent } from "../CSTA-media-detached-event/MediaDetachedEvent.ta.mjs";


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
