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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    EDIMSEntryType,
    _enum_for_EDIMSEntryType,
    EDIMSEntryType_edim /* IMPORTED_LONG_ENUMERATION_ITEM */,
    edim /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDIMSEntryType_pn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    pn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDIMSEntryType_nn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    nn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDIMSEntryType_fn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    fn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EDIMSEntryType,
    _encode_EDIMSEntryType,
} from '../EDIMSMessageStoreAttributes/EDIMSEntryType.ta';
export {
    EDIMSEntryType,
    _enum_for_EDIMSEntryType,
    EDIMSEntryType_edim /* IMPORTED_LONG_ENUMERATION_ITEM */,
    edim /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDIMSEntryType_pn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    pn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDIMSEntryType_nn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    nn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EDIMSEntryType_fn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    fn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EDIMSEntryType,
    _encode_EDIMSEntryType,
} from '../EDIMSMessageStoreAttributes/EDIMSEntryType.ta';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { id_sat_edims_entry_type } from '../EDIMSObjectIdentifiers/id-sat-edims-entry-type.va';
export { id_sat_edims_entry_type } from '../EDIMSObjectIdentifiers/id-sat-edims-entry-type.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION edims_entry_type */
/**
 * @summary edims_entry_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edims-entry-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIMSEntryType,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-sat-edims-entry-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIMSEntryType>}
 * @implements {X413ATTRIBUTE<EDIMSEntryType>}
 */
export const edims_entry_type: X413ATTRIBUTE<EDIMSEntryType> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIMSEntryType,
    },
    encoderFor: {
        '&Type': _encode_EDIMSEntryType,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_edims_entry_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edims_entry_type */

/* eslint-enable */
