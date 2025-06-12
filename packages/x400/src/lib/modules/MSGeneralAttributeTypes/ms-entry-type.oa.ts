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
    EntryType,
    EntryType_delivered_message /* IMPORTED_LONG_NAMED_INTEGER */,
    delivered_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_delivered_report /* IMPORTED_LONG_NAMED_INTEGER */,
    delivered_report /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_returned_content /* IMPORTED_LONG_NAMED_INTEGER */,
    returned_content /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_submitted_message /* IMPORTED_LONG_NAMED_INTEGER */,
    submitted_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_submitted_probe /* IMPORTED_LONG_NAMED_INTEGER */,
    submitted_probe /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_draft_message /* IMPORTED_LONG_NAMED_INTEGER */,
    draft_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_auto_action_event /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_event /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryType,
    _encode_EntryType,
} from '../MSAbstractService/EntryType.ta.js';
export {
    EntryType,
    EntryType_delivered_message /* IMPORTED_LONG_NAMED_INTEGER */,
    delivered_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_delivered_report /* IMPORTED_LONG_NAMED_INTEGER */,
    delivered_report /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_returned_content /* IMPORTED_LONG_NAMED_INTEGER */,
    returned_content /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_submitted_message /* IMPORTED_LONG_NAMED_INTEGER */,
    submitted_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_submitted_probe /* IMPORTED_LONG_NAMED_INTEGER */,
    submitted_probe /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_draft_message /* IMPORTED_LONG_NAMED_INTEGER */,
    draft_message /* IMPORTED_SHORT_NAMED_INTEGER */,
    EntryType_auto_action_event /* IMPORTED_LONG_NAMED_INTEGER */,
    auto_action_event /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_EntryType,
    _encode_EntryType,
} from '../MSAbstractService/EntryType.ta.js';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
import { id_att_entry_type } from '../MSObjectIdentifiers/id-att-entry-type.va.js';
export { id_att_entry_type } from '../MSObjectIdentifiers/id-att-entry-type.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION ms_entry_type */
/**
 * @summary ms_entry_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-entry-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EntryType,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE
 *     integerOrderingMatch, -- rule not defined in 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-att-entry-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EntryType>}
 * @implements {X413ATTRIBUTE<EntryType>}
 */
export const ms_entry_type: X413ATTRIBUTE<EntryType> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EntryType,
    },
    encoderFor: {
        '&Type': _encode_EntryType,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_entry_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_entry_type */

/* eslint-enable */
