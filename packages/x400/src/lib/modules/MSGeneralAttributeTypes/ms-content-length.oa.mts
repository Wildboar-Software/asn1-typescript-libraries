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
    ContentLength,
    _decode_ContentLength,
    _encode_ContentLength,
} from '../MTSAbstractService/ContentLength.ta.mjs';
import { integerOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_content_length } from '../MSObjectIdentifiers/id-att-content-length.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_content_length
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-content-length X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ContentLength,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-content-length
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ContentLength>}
 * @implements {X413ATTRIBUTE<ContentLength>}
 */
export const ms_content_length: X413ATTRIBUTE<ContentLength> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ContentLength,
    },
    encoderFor: {
        '&Type': _encode_ContentLength,
    },
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content_length /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
