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
    ExpiryTimeField,
    _decode_ExpiryTimeField,
    _encode_ExpiryTimeField,
} from '../EDIMSInformationObjects/ExpiryTimeField.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.mjs';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.mjs';
import { id_hat_expiry_time } from '../EDIMSObjectIdentifiers/id-hat-expiry-time.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary expiry_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * expiry-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ExpiryTimeField,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch, -- not defined in version 1
 *
 *   NUMERATION              single-valued,
 *   ID                      id-hat-expiry-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ExpiryTimeField>}
 * @implements {X413ATTRIBUTE<ExpiryTimeField>}
 */
export const expiry_time: X413ATTRIBUTE<ExpiryTimeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ExpiryTimeField,
    },
    encoderFor: {
        '&Type': _encode_ExpiryTimeField,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_expiry_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
