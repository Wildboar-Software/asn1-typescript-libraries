/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    DeliveredIPNStatus,
    DeliveredIPNStatus_no_ipn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    no_ipn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_an_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    an_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_nrn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    nrn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_rn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_an_received /* IMPORTED_LONG_NAMED_INTEGER */,
    an_received /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_ipm_auto_forwarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_auto_forwarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_ipm_discarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_discarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_rn_received /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_received /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliveredIPNStatus,
    _encode_DeliveredIPNStatus,
} from '../IPMSMessageStoreAttributes/DeliveredIPNStatus.ta.mjs';
export {
    DeliveredIPNStatus,
    DeliveredIPNStatus_no_ipn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    no_ipn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_an_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    an_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_nrn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    nrn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_rn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_an_received /* IMPORTED_LONG_NAMED_INTEGER */,
    an_received /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_ipm_auto_forwarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_auto_forwarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_ipm_discarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_discarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    DeliveredIPNStatus_rn_received /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_received /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DeliveredIPNStatus,
    _encode_DeliveredIPNStatus,
} from '../IPMSMessageStoreAttributes/DeliveredIPNStatus.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_cat_delivered_ipn_summary } from '../IPMSObjectIdentifiers/id-cat-delivered-ipn-summary.va.mjs';
export { id_cat_delivered_ipn_summary } from '../IPMSObjectIdentifiers/id-cat-delivered-ipn-summary.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ac_delivered_ipn_summary */
/**
 * @summary ac_delivered_ipn_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-delivered-ipn-summary X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DeliveredIPNStatus,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-delivered-ipn-summary
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DeliveredIPNStatus>}
 * @implements {X413ATTRIBUTE<DeliveredIPNStatus>}
 */
export const ac_delivered_ipn_summary: X413ATTRIBUTE<DeliveredIPNStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DeliveredIPNStatus,
    },
    encoderFor: {
        '&Type': _encode_DeliveredIPNStatus,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_delivered_ipn_summary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ac_delivered_ipn_summary */

/* eslint-enable */
