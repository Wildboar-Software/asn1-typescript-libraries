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
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    SubmittedIPNStatus,
    SubmittedIPNStatus_no_ipn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    no_ipn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_nrn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    nrn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_nrn_with_ipm_return_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    nrn_with_ipm_return_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_rn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_rn_with_ipm_return_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_with_ipm_return_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_ipm_auto_forwarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_auto_forwarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_ipm_discarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_discarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_rn_sent /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_sent /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SubmittedIPNStatus,
    _encode_SubmittedIPNStatus,
} from '../IPMSMessageStoreAttributes/SubmittedIPNStatus.ta.js';
export {
    SubmittedIPNStatus,
    SubmittedIPNStatus_no_ipn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    no_ipn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_nrn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    nrn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_nrn_with_ipm_return_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    nrn_with_ipm_return_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_rn_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_rn_with_ipm_return_requested /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_with_ipm_return_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_ipm_auto_forwarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_auto_forwarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_ipm_discarded /* IMPORTED_LONG_NAMED_INTEGER */,
    ipm_discarded /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubmittedIPNStatus_rn_sent /* IMPORTED_LONG_NAMED_INTEGER */,
    rn_sent /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SubmittedIPNStatus,
    _encode_SubmittedIPNStatus,
} from '../IPMSMessageStoreAttributes/SubmittedIPNStatus.ta.js';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
import { id_cat_submitted_ipn_status } from '../IPMSObjectIdentifiers/id-cat-submitted-ipn-status.va.js';
export { id_cat_submitted_ipn_status } from '../IPMSObjectIdentifiers/id-cat-submitted-ipn-status.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION ac_submitted_ipn_status */
/**
 * @summary ac_submitted_ipn_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-submitted-ipn-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SubmittedIPNStatus,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-cat-submitted-ipn-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubmittedIPNStatus>}
 * @implements {X413ATTRIBUTE<SubmittedIPNStatus>}
 */
export const ac_submitted_ipn_status: X413ATTRIBUTE<SubmittedIPNStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubmittedIPNStatus,
    },
    encoderFor: {
        '&Type': _encode_SubmittedIPNStatus,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_submitted_ipn_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ac_submitted_ipn_status */

/* eslint-enable */
