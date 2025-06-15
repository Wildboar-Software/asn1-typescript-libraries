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
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.mjs';
import { contentIdentifierMatch } from '../MSMatchingRules/contentIdentifierMatch.oa.mjs';
import { id_att_content_identifier } from '../MSObjectIdentifiers/id-att-content-identifier.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_content_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-content-identifier X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ContentIdentifier,
 *   EQUALITY MATCHING-RULE  contentIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-content-identifier
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ContentIdentifier>}
 * @implements {X413ATTRIBUTE<ContentIdentifier>}
 */
export const mt_content_identifier: X413ATTRIBUTE<ContentIdentifier> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ContentIdentifier,
    },
    encoderFor: {
        '&Type': _encode_ContentIdentifier,
    },
    '&equalityMatch': contentIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
