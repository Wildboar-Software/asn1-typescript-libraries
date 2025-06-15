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
    DLExpansionProhibited,
    _enum_for_DLExpansionProhibited,
    _decode_DLExpansionProhibited,
    _encode_DLExpansionProhibited,
} from '../MTSAbstractService/DLExpansionProhibited.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_att_dl_expansion_prohibited } from '../MSObjectIdentifiers/id-att-dl-expansion-prohibited.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_dl_expansion_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-dl-expansion-prohibited X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DLExpansionProhibited,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-dl-expansion-prohibited
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DLExpansionProhibited>}
 * @implements {X413ATTRIBUTE<DLExpansionProhibited>}
 */
export const mt_dl_expansion_prohibited: X413ATTRIBUTE<DLExpansionProhibited> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DLExpansionProhibited,
    },
    encoderFor: {
        '&Type': _encode_DLExpansionProhibited,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_dl_expansion_prohibited /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
