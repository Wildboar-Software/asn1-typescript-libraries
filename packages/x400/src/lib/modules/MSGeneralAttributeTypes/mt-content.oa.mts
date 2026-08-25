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
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_content
 * @description
 *
 * This general-attribute contains the complete content of a message as submitted by the
 * MS-message-submission abstract- operation, or as delivered by the Message-delivery
 * abstract-operation, or as presented in the returned-content of the Report-delivery
 * abstract-operation. In this last case, the content general-attribute is created in the
 * returned-content child- entry, and not in the delivered-report entry itself. See ITU-T
 * X.413 (1999), §11.2.11.
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
