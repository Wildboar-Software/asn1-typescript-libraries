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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    MixedModeBodyPart,
    _decode_MixedModeBodyPart,
    _encode_MixedModeBodyPart,
} from '../IPMSInformationObjects/MixedModeBodyPart.ta.mjs';
import { id_bat_mixed_mode_body_parts } from '../IPMSObjectIdentifiers/id-bat-mixed-mode-body-parts.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mixed_mode_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mixed-mode-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MixedModeBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-mixed-mode-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MixedModeBodyPart>}
 * @implements {X413ATTRIBUTE<MixedModeBodyPart>}
 */
export const mixed_mode_body_parts: X413ATTRIBUTE<MixedModeBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MixedModeBodyPart,
    },
    encoderFor: {
        '&Type': _encode_MixedModeBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_mixed_mode_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
