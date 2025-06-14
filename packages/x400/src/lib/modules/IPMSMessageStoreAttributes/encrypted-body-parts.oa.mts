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
    EncryptedBodyPart,
    _decode_EncryptedBodyPart,
    _encode_EncryptedBodyPart,
} from '../IPMSInformationObjects/EncryptedBodyPart.ta.mjs';
import { id_bat_encrypted_body_parts } from '../IPMSObjectIdentifiers/id-bat-encrypted-body-parts.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION encrypted_body_parts */
/**
 * @summary encrypted_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EncryptedBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-encrypted-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EncryptedBodyPart>}
 * @implements {X413ATTRIBUTE<EncryptedBodyPart>}
 */
export const encrypted_body_parts: X413ATTRIBUTE<EncryptedBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EncryptedBodyPart,
    },
    encoderFor: {
        '&Type': _encode_EncryptedBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_encrypted_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION encrypted_body_parts */

/* eslint-enable */
