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
    NationallyDefinedBodyPart,
    _decode_NationallyDefinedBodyPart,
    _encode_NationallyDefinedBodyPart,
} from '../IPMSInformationObjects/NationallyDefinedBodyPart.ta.mjs';
import { id_bat_nationally_defined_body_parts } from '../IPMSObjectIdentifiers/id-bat-nationally-defined-body-parts.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary nationally_defined_body_parts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nationally-defined-body-parts X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  NationallyDefinedBodyPart,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-nationally-defined-body-parts
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NationallyDefinedBodyPart>}
 * @implements {X413ATTRIBUTE<NationallyDefinedBodyPart>}
 */
export const nationally_defined_body_parts: X413ATTRIBUTE<NationallyDefinedBodyPart> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NationallyDefinedBodyPart,
    },
    encoderFor: {
        '&Type': _encode_NationallyDefinedBodyPart,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_nationally_defined_body_parts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
