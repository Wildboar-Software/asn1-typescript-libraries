/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { id_att_content_type } from '../MSObjectIdentifiers/id-att-content-type.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_content_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-content-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   OBJECT IDENTIFIER,
 *   EQUALITY MATCHING-RULE  objectIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-content-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {X413ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export const mt_content_type: X413ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeObjectIdentifier,
    },
    encoderFor: {
        '&Type': $._encodeObjectIdentifier,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
