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
    CorrelatedDeliveredEDINs,
    _decode_CorrelatedDeliveredEDINs,
    _encode_CorrelatedDeliveredEDINs,
} from '../EDIMSMessageStoreAttributes/CorrelatedDeliveredEDINs.ta.mjs';
import { id_cat_correlated_delivered_edins } from '../EDIMSObjectIdentifiers/id-cat-correlated-delivered-edins.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_correlated_delivered_edins
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-correlated-delivered-edins X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  CorrelatedDeliveredEDINs,
 *   NUMERATION             multi-valued,
 *   ID                     id-cat-correlated-delivered-edins
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CorrelatedDeliveredEDINs>}
 * @implements {X413ATTRIBUTE<CorrelatedDeliveredEDINs>}
 */
export const ac_correlated_delivered_edins: X413ATTRIBUTE<CorrelatedDeliveredEDINs> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CorrelatedDeliveredEDINs,
    },
    encoderFor: {
        '&Type': _encode_CorrelatedDeliveredEDINs,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_correlated_delivered_edins /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
