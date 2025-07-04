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
    IA5TextData,
    _decode_IA5TextData,
    _encode_IA5TextData,
} from '../IPMSInformationObjects/IA5TextData.ta.mjs';
import { id_bat_ia5_text_data } from '../IPMSObjectIdentifiers/id-bat-ia5-text-data.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ia5_text_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5-text-data X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IA5TextData,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-ia5-text-data
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IA5TextData>}
 * @implements {X413ATTRIBUTE<IA5TextData>}
 */
export const ia5_text_data: X413ATTRIBUTE<IA5TextData> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IA5TextData,
    },
    encoderFor: {
        '&Type': _encode_IA5TextData,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_ia5_text_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
