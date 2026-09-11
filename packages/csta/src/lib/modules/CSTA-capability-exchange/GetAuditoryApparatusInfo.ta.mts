/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetAuditoryApparatusInfo
 * @description
 * Capability bitmap for the Get Auditory Apparatus Information service
 * (ECMA-269 C.12.2, ECMA-285 §9.10). Presence of this entry in
 * `PhysDevServList` means the SF supports that service. Each set bit is an
 * optional parameter, enumerated value, initial connection state, or
 * miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAuditoryApparatusInfo  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     auditoryApparatusTypeSpeakerphone     ( 2),     -- optional parameters
 *     auditoryApparatusTypeHandset         ( 3),     -- optional parameters
 *     auditoryApparatusTypeHeadset         ( 4),     -- optional parameters
 *     auditoryApparatusTypeSpeakerOnlyPhone     ( 5),     -- optional parameters
 *     auditoryApparatusTypeother         ( 6),     -- optional parameters
 *     speakerPresent                 ( 7),     -- optional parameters
 *     speakerVolumeSettable             ( 8),     -- optional parameters
 *     speakerVolumeReadable             ( 9),     -- optional parameters
 *     speakerMuteSettable             (10),     -- optional parameters
 *     speakerMuteReadable             (11),     -- optional parameters
 *     microphonePresent             (12),     -- optional parameters
 *     microphoneGainSettable             (13),     -- optional parameters
 *     microphoneGainReadable             (14),     -- optional parameters
 *     microphoneMuteSettable             (15),     -- optional parameters
 *     microphoneMuteReadable             (16),     -- optional parameters
 *     hookswitchSettable             (17),     -- optional parameters
 *     hookswitchOnHook             (18),     -- optional parameters
 *     privateDataInAck             (19) }
 * ```
 */
export
type GetAuditoryApparatusInfo = BIT_STRING;

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatus
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_auditoryApparatus`.
 */
export
const auditoryApparatus: number = GetAuditoryApparatusInfo_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.2).
 */
export
const GetAuditoryApparatusInfo_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_privateData`.
 */
export
const privateData: number = GetAuditoryApparatusInfo_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeSpeakerphone
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone`.
 */
export
const auditoryApparatusTypeSpeakerphone: number = GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerphone; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeHandset
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeHandset: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeHandset
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_auditoryApparatusTypeHandset`.
 */
export
const auditoryApparatusTypeHandset: number = GetAuditoryApparatusInfo_auditoryApparatusTypeHandset; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeHeadset
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset`.
 */
export
const auditoryApparatusTypeHeadset: number = GetAuditoryApparatusInfo_auditoryApparatusTypeHeadset; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeSpeakerOnlyPhone
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone`.
 */
export
const auditoryApparatusTypeSpeakerOnlyPhone: number = GetAuditoryApparatusInfo_auditoryApparatusTypeSpeakerOnlyPhone; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_auditoryApparatusTypeother
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_auditoryApparatusTypeother: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatusTypeother
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_auditoryApparatusTypeother`.
 */
export
const auditoryApparatusTypeother: number = GetAuditoryApparatusInfo_auditoryApparatusTypeother; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerPresent
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_speakerPresent: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary speakerPresent
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_speakerPresent`.
 */
export
const speakerPresent: number = GetAuditoryApparatusInfo_speakerPresent; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerVolumeSettable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_speakerVolumeSettable: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeSettable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_speakerVolumeSettable`.
 */
export
const speakerVolumeSettable: number = GetAuditoryApparatusInfo_speakerVolumeSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerVolumeReadable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_speakerVolumeReadable: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolumeReadable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_speakerVolumeReadable`.
 */
export
const speakerVolumeReadable: number = GetAuditoryApparatusInfo_speakerVolumeReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerMuteSettable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_speakerMuteSettable: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary speakerMuteSettable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_speakerMuteSettable`.
 */
export
const speakerMuteSettable: number = GetAuditoryApparatusInfo_speakerMuteSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_speakerMuteReadable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_speakerMuteReadable: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary speakerMuteReadable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_speakerMuteReadable`.
 */
export
const speakerMuteReadable: number = GetAuditoryApparatusInfo_speakerMuteReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphonePresent
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_microphonePresent: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary microphonePresent
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_microphonePresent`.
 */
export
const microphonePresent: number = GetAuditoryApparatusInfo_microphonePresent; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneGainSettable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_microphoneGainSettable: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainSettable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_microphoneGainSettable`.
 */
export
const microphoneGainSettable: number = GetAuditoryApparatusInfo_microphoneGainSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneGainReadable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_microphoneGainReadable: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary microphoneGainReadable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_microphoneGainReadable`.
 */
export
const microphoneGainReadable: number = GetAuditoryApparatusInfo_microphoneGainReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneMuteSettable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_microphoneMuteSettable: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMuteSettable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_microphoneMuteSettable`.
 */
export
const microphoneMuteSettable: number = GetAuditoryApparatusInfo_microphoneMuteSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_microphoneMuteReadable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_microphoneMuteReadable: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary microphoneMuteReadable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_microphoneMuteReadable`.
 */
export
const microphoneMuteReadable: number = GetAuditoryApparatusInfo_microphoneMuteReadable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_hookswitchSettable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_hookswitchSettable: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchSettable
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_hookswitchSettable`.
 */
export
const hookswitchSettable: number = GetAuditoryApparatusInfo_hookswitchSettable; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_hookswitchOnHook
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_hookswitchOnHook: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary hookswitchOnHook
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_hookswitchOnHook`.
 */
export
const hookswitchOnHook: number = GetAuditoryApparatusInfo_hookswitchOnHook; /* SHORT_NAMED_BIT */

/**
 * @summary GetAuditoryApparatusInfo_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.2).
 */
export
const GetAuditoryApparatusInfo_privateDataInAck: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetAuditoryApparatusInfo_privateDataInAck`.
 */
export
const privateDataInAck: number = GetAuditoryApparatusInfo_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetAuditoryApparatusInfo: $.ASN1Decoder<GetAuditoryApparatusInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAuditoryApparatusInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAuditoryApparatusInfo (el: _Element): GetAuditoryApparatusInfo {
    if (!_cached_decoder_for_GetAuditoryApparatusInfo) { _cached_decoder_for_GetAuditoryApparatusInfo = $._decodeBitString; }
    return _cached_decoder_for_GetAuditoryApparatusInfo(el);
}

let _cached_encoder_for_GetAuditoryApparatusInfo: $.ASN1Encoder<GetAuditoryApparatusInfo> | null = null;

/**
 * @summary Encodes a(n) GetAuditoryApparatusInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAuditoryApparatusInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GetAuditoryApparatusInfo (value: GetAuditoryApparatusInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAuditoryApparatusInfo) { _cached_encoder_for_GetAuditoryApparatusInfo = $._encodeBitString; }
    return _cached_encoder_for_GetAuditoryApparatusInfo(value, elGetter);
}


/* eslint-enable */
