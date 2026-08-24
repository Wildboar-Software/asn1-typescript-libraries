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
    LatestDeliveryTime,
    _decode_LatestDeliveryTime,
    _encode_LatestDeliveryTime,
} from '../MTSAbstractService/LatestDeliveryTime.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_latest_delivery_time } from '../MSObjectIdentifiers/id-att-latest-delivery-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_latest_delivery_time
 * @description
 *
 * Information object `mt_latest_delivery_time`. This general-attribute contains the
 * latest-delivery-time argument of the Message-submission abstract-operation; it
 * indicates the time after which a message shall not be delivered to its recipient(s).
 * See 8.2.1.1.1.13 of X.411 | mt-latest-delivery-time ATTRIBUTE ::= { WITH
 * ATTRIBUTE-SYNTAX LatestDeliveryTime, EQUALITY MATCHING-RULE uTCTimeMatch, ORDERING
 * MATCHING-RULE uTCTimeOrderingMatch, NUMERATION… See ITU-T X.413 (1999), §11.2.32.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-latest-delivery-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   LatestDeliveryTime,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-latest-delivery-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<LatestDeliveryTime>}
 * @implements {X413ATTRIBUTE<LatestDeliveryTime>}
 */
export const mt_latest_delivery_time: X413ATTRIBUTE<LatestDeliveryTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_LatestDeliveryTime,
    },
    encoderFor: {
        '&Type': _encode_LatestDeliveryTime,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_latest_delivery_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
