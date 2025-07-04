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
    BilaterallyDefinedBodyPart,
    _decode_BilaterallyDefinedBodyPart,
    _encode_BilaterallyDefinedBodyPart,
} from '../IPMSInformationObjects/BilaterallyDefinedBodyPart.ta.mjs';
import { id_bat_bilaterally_defined_body_parts } from '../IPMSObjectIdentifiers/id-bat-bilaterally-defined-body-parts.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary bilaterally_defined_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bilaterally-defined-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  BilaterallyDefinedBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-bilaterally-defined-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<BilaterallyDefinedBodyPart>}
 * @implements {X413ATTRIBUTE<BilaterallyDefinedBodyPart>}
 */
export const bilaterally_defined_body_parts: X413ATTRIBUTE<BilaterallyDefinedBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_BilaterallyDefinedBodyPart,
    },
    encoderFor: {
        '&Type': _encode_BilaterallyDefinedBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_bilaterally_defined_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
