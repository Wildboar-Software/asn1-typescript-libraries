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
} from '@wildboar/asn1';
import { voice_body_part_parameters } from '../IPMSExtendedVoiceBodyPartType/voice-body-part-parameters.oa.mjs';
import { voice_body_part_data } from '../IPMSExtendedVoiceBodyPartType/voice-body-part-data.oa.mjs';
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
/**
 * @summary voice_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * voice-body-part EXTENDED-BODY-PART-TYPE ::= {
 *   PARAMETERS  {VoiceParameters
 *                IDENTIFIED BY  id-ep-voice},
 *   DATA        {VoiceData
 *                IDENTIFIED BY  id-et-voice}
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE}
 * @implements {EXTENDED_BODY_PART_TYPE}
 */
export const voice_body_part: EXTENDED_BODY_PART_TYPE = {
    class: 'EXTENDED-BODY-PART-TYPE',
    decoderFor: {},
    encoderFor: {},
    '&parameters': voice_body_part_parameters /* OBJECT_FIELD_SETTING */,
    '&data': voice_body_part_data /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
