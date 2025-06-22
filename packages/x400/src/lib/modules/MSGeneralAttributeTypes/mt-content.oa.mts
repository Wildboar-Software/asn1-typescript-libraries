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
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
import { id_att_content } from '../MSObjectIdentifiers/id-att-content.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-content X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  Content,
 *   NUMERATION             single-valued,
 *   ID                     id-att-content
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<Content>}
 * @implements {X413ATTRIBUTE<Content>}
 */
export const mt_content: X413ATTRIBUTE<Content> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Content,
    },
    encoderFor: {
        '&Type': _encode_Content,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
