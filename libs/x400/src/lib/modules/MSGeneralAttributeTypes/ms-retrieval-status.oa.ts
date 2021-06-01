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
    RetrievalStatus,
    new_ /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalStatus_listed /* IMPORTED_LONG_NAMED_INTEGER */,
    listed /* IMPORTED_SHORT_NAMED_INTEGER */,
    RetrievalStatus_processed /* IMPORTED_LONG_NAMED_INTEGER */,
    processed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RetrievalStatus,
    _encode_RetrievalStatus,
} from '../MSAbstractService/RetrievalStatus.ta';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { id_att_retrieval_status } from '../MSObjectIdentifiers/id-att-retrieval-status.va';
export { id_att_retrieval_status } from '../MSObjectIdentifiers/id-att-retrieval-status.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION ms_retrieval_status */
/**
 * @summary ms_retrieval_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-retrieval-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RetrievalStatus,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-retrieval-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RetrievalStatus>}
 * @implements {X413ATTRIBUTE<RetrievalStatus>}
 */
export const ms_retrieval_status: X413ATTRIBUTE<RetrievalStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RetrievalStatus,
    },
    encoderFor: {
        '&Type': _encode_RetrievalStatus,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_retrieval_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_retrieval_status */

/* eslint-enable */
