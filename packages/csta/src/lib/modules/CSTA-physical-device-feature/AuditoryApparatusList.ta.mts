/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { AuditoryApparatusList_Item, _decode_AuditoryApparatusList_Item, _encode_AuditoryApparatusList_Item } from "../CSTA-physical-device-feature/AuditoryApparatusList-Item.ta.mjs";



/**
 * @summary AuditoryApparatusList
 * @description
 *
 * Auditory apparatuses on a physical device (speakerphone, handset, headset,
 * etc.) and which speaker/microphone/hookswitch features they support. ECMA-285
 * §9.16.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList  ::=  SEQUENCE OF SEQUENCE 
 * {    auditoryApparatus     AuditoryApparatusID,
 *     auditoryApparatusType     ENUMERATED 
 *     {    speakerphone             (0),
 *         handset             (1),
 *         headset             (2),
 *         speakerOnlyPhone         (3),
 *         other                 (4) },
 * 
 *     speaker         BIT STRING 
 *     {    present             (0),
 *         volumeSettable             (1),
 *         volumeReadable             (2),
 *         muteSettable             (3),
 *         muteReadable             (4) },
 * 
 *     microphone         BIT STRING 
 *     {    present             (0),
 *         gainSettable             (1),
 *         gainReadable             (2),
 *         muteSettable             (3),
 *         muteReadable             (4) },
 * 
 *     hookswitch         BIT STRING 
 *     {    hookswitchSettable         (0),
 *         hookswitchOnHook         (1) },
 * 
 *     hookswitchID         HookswitchID }
 * ```
 */
export
type AuditoryApparatusList = AuditoryApparatusList_Item[]; // SequenceOfType

let _cached_decoder_for_AuditoryApparatusList: $.ASN1Decoder<AuditoryApparatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList (el: _Element): AuditoryApparatusList {
    if (!_cached_decoder_for_AuditoryApparatusList) { _cached_decoder_for_AuditoryApparatusList = $._decodeSequenceOf<AuditoryApparatusList_Item>(() => _decode_AuditoryApparatusList_Item); }
    return _cached_decoder_for_AuditoryApparatusList(el);
}

let _cached_encoder_for_AuditoryApparatusList: $.ASN1Encoder<AuditoryApparatusList> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList (value: AuditoryApparatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList) { _cached_encoder_for_AuditoryApparatusList = $._encodeSequenceOf<AuditoryApparatusList_Item>(() => _encode_AuditoryApparatusList_Item, $.BER); }
    return _cached_encoder_for_AuditoryApparatusList(value, elGetter);
}


/* eslint-enable */
