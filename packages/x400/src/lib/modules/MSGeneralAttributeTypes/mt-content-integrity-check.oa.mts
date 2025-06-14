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
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.mjs';
import { id_att_content_integrity_check } from '../MSObjectIdentifiers/id-att-content-integrity-check.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mt_content_integrity_check */
/**
 * @summary mt_content_integrity_check
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-content-integrity-check X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ContentIntegrityCheck,
 *   NUMERATION             single-valued,
 *   ID                     id-att-content-integrity-check
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ContentIntegrityCheck>}
 * @implements {X413ATTRIBUTE<ContentIntegrityCheck>}
 */
export const mt_content_integrity_check: X413ATTRIBUTE<ContentIntegrityCheck> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ContentIntegrityCheck,
    },
    encoderFor: {
        '&Type': _encode_ContentIntegrityCheck,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_content_integrity_check /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_content_integrity_check */

/* eslint-enable */
