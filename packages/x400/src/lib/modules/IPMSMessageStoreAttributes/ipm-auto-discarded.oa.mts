/* eslint-disable */
import {
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { booleanMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_sat_ipm_auto_discarded } from '../IPMSObjectIdentifiers/id-sat-ipm-auto-discarded.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ipm_auto_discarded
 * @description
 *
 * Information object `ipm_auto_discarded`. The IPM Auto-discarded attribute may be
 * present in entries of the Delivery-log entry-class, and indicates whether the
 * corresponding entry of the Delivery entry-class was deleted as a result of the
 * performance of the IPM auto-discard auto- action.  An… See ITU-T X.420 (1999), §19.6.1.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-discarded X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   BOOLEAN,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-sat-ipm-auto-discarded
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<BOOLEAN>}
 * @implements {X413ATTRIBUTE<BOOLEAN>}
 */
export const ipm_auto_discarded: X413ATTRIBUTE<BOOLEAN> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeBoolean,
    },
    encoderFor: {
        '&Type': $._encodeBoolean,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_ipm_auto_discarded /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
