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
    EDINotificationIndicator,
    _enum_for_EDINotificationIndicator,
    _decode_EDINotificationIndicator,
    _encode_EDINotificationIndicator,
} from '../EDIMSMessageStoreAttributes/EDINotificationIndicator.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_sat_edi_notification_indicator } from '../EDIMSObjectIdentifiers/id-sat-edi-notification-indicator.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION edi_notification_indicator */
/**
 * @summary edi_notification_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-notification-indicator X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINotificationIndicator,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-sat-edi-notification-indicator
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINotificationIndicator>}
 * @implements {X413ATTRIBUTE<EDINotificationIndicator>}
 */
export const edi_notification_indicator: X413ATTRIBUTE<EDINotificationIndicator> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINotificationIndicator,
    },
    encoderFor: {
        '&Type': _encode_EDINotificationIndicator,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_edi_notification_indicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_notification_indicator */

/* eslint-enable */
