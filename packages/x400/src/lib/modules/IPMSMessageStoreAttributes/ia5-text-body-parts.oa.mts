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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    IA5TextBodyPart,
    _decode_IA5TextBodyPart,
    _encode_IA5TextBodyPart,
} from '../IPMSInformationObjects/IA5TextBodyPart.ta.mjs';
import { id_bat_ia5_text_body_parts } from '../IPMSObjectIdentifiers/id-bat-ia5-text-body-parts.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ia5_text_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5-text-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IA5TextBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-ia5-text-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IA5TextBodyPart>}
 * @implements {X413ATTRIBUTE<IA5TextBodyPart>}
 */
export const ia5_text_body_parts: X413ATTRIBUTE<IA5TextBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IA5TextBodyPart,
    },
    encoderFor: {
        '&Type': _encode_IA5TextBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_ia5_text_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
