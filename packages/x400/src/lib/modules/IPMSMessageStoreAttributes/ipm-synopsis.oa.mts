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
    IPMSynopsis,
    _decode_IPMSynopsis,
    _encode_IPMSynopsis,
} from '../IPMSMessageStoreAttributes/IPMSynopsis.ta.mjs';
import { id_sat_ipm_synopsis } from '../IPMSObjectIdentifiers/id-sat-ipm-synopsis.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ipm_synopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-synopsis X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IPMSynopsis,
 *   NUMERATION             single-valued,
 *   ID                     id-sat-ipm-synopsis
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMSynopsis>}
 * @implements {X413ATTRIBUTE<IPMSynopsis>}
 */
export const ipm_synopsis: X413ATTRIBUTE<IPMSynopsis> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMSynopsis,
    },
    encoderFor: {
        '&Type': _encode_IPMSynopsis,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_ipm_synopsis /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
