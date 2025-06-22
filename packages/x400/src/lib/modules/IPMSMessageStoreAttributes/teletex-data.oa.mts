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
    TeletexData,
    _decode_TeletexData,
    _encode_TeletexData,
} from '../IPMSInformationObjects/TeletexData.ta.mjs';
import { id_bat_teletex_data } from '../IPMSObjectIdentifiers/id-bat-teletex-data.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary teletex_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-data X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  TeletexData,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-teletex-data
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<TeletexData>}
 * @implements {X413ATTRIBUTE<TeletexData>}
 */
export const teletex_data: X413ATTRIBUTE<TeletexData> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TeletexData,
    },
    encoderFor: {
        '&Type': _encode_TeletexData,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_teletex_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
