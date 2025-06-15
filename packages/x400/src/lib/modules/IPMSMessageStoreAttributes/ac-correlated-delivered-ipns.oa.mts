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
    CorrelatedDeliveredIPNs,
    _decode_CorrelatedDeliveredIPNs,
    _encode_CorrelatedDeliveredIPNs,
} from '../IPMSMessageStoreAttributes/CorrelatedDeliveredIPNs.ta.mjs';
import { id_cat_correlated_delivered_ipns } from '../IPMSObjectIdentifiers/id-cat-correlated-delivered-ipns.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_correlated_delivered_ipns
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-correlated-delivered-ipns X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  CorrelatedDeliveredIPNs,
 *   NUMERATION             multi-valued,
 *   ID                     id-cat-correlated-delivered-ipns
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CorrelatedDeliveredIPNs>}
 * @implements {X413ATTRIBUTE<CorrelatedDeliveredIPNs>}
 */
export const ac_correlated_delivered_ipns: X413ATTRIBUTE<CorrelatedDeliveredIPNs> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CorrelatedDeliveredIPNs,
    },
    encoderFor: {
        '&Type': _encode_CorrelatedDeliveredIPNs,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_correlated_delivered_ipns /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
