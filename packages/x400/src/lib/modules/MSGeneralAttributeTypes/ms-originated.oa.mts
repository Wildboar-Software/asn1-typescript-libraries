/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { id_att_ms_originated } from '../MSObjectIdentifiers/id-att-ms-originated.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_originated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-originated X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  NULL,
 *   NUMERATION             single-valued,
 *   ID                     id-att-ms-originated
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NULL>}
 * @implements {X413ATTRIBUTE<NULL>}
 */
export const ms_originated: X413ATTRIBUTE<NULL> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_ms_originated /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
