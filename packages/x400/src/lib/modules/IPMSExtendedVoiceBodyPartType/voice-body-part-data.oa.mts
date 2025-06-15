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
} from 'asn1-ts';
import {
    VoiceData,
    _decode_VoiceData,
    _encode_VoiceData,
} from '../IPMSExtendedVoiceBodyPartType/VoiceData.ta.mjs';
import { id_et_voice } from '../IPMSObjectIdentifiers/id-et-voice.va.mjs';
/**
 * @summary voice_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * voice-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<VoiceData>}
 * @implements {TYPE_IDENTIFIER<VoiceData>}
 */
export const voice_body_part_data: TYPE_IDENTIFIER<VoiceData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_VoiceData,
    },
    encoderFor: {
        '&Type': _encode_VoiceData,
    },
    '&id': id_et_voice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
