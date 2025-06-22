/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    VoiceParameters,
    _decode_VoiceParameters,
    _encode_VoiceParameters,
} from '../IPMSExtendedVoiceBodyPartType/VoiceParameters.ta.mjs';
import { id_ep_voice } from '../IPMSObjectIdentifiers/id-ep-voice.va.mjs';
/**
 * @summary voice_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * voice-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<VoiceParameters>}
 * @implements {TYPE_IDENTIFIER<VoiceParameters>}
 */
export const voice_body_part_parameters: TYPE_IDENTIFIER<VoiceParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_VoiceParameters,
    },
    encoderFor: {
        '&Type': _encode_VoiceParameters,
    },
    '&id': id_ep_voice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
