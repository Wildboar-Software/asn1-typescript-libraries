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
    DeferredDeliveryCancellationTime,
    _decode_DeferredDeliveryCancellationTime,
    _encode_DeferredDeliveryCancellationTime,
} from '../MSGeneralAttributeTypes/DeferredDeliveryCancellationTime.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.mjs';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.mjs';
import { id_att_deferred_delivery_cancellation_time } from '../MSObjectIdentifiers/id-att-deferred-delivery-cancellation-time.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ms_deferred_delivery_cancellation_time */
/**
 * @summary ms_deferred_delivery_cancellation_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-deferred-delivery-cancellation-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DeferredDeliveryCancellationTime,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-deferred-delivery-cancellation-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DeferredDeliveryCancellationTime>}
 * @implements {X413ATTRIBUTE<DeferredDeliveryCancellationTime>}
 */
export const ms_deferred_delivery_cancellation_time: X413ATTRIBUTE<DeferredDeliveryCancellationTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DeferredDeliveryCancellationTime,
    },
    encoderFor: {
        '&Type': _encode_DeferredDeliveryCancellationTime,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_deferred_delivery_cancellation_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_deferred_delivery_cancellation_time */

/* eslint-enable */
