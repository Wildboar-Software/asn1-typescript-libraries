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
    MS_EIT,
    _decode_MS_EIT,
    _encode_MS_EIT,
} from '../MSAbstractService/MS-EIT.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/InformationFramework';
import { id_att_original_EITs } from '../MSObjectIdentifiers/id-att-original-EITs.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_original_EITs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-original-EITs X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX MS-EIT,
 *   EQUALITY MATCHING-RULE        objectIdentifierMatch,
 *   NUMERATION                    multi-valued,
 *   ID                            id-att-original-EITs
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MS_EIT>}
 * @implements {X413ATTRIBUTE<MS_EIT>}
 */
export const mt_original_EITs: X413ATTRIBUTE<MS_EIT> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MS_EIT,
    },
    encoderFor: {
        '&Type': _encode_MS_EIT,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_original_EITs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
