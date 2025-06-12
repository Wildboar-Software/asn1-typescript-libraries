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
    SecurityClassification,
    SecurityClassification_unmarked /* IMPORTED_LONG_NAMED_INTEGER */,
    unmarked /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_unclassified /* IMPORTED_LONG_NAMED_INTEGER */,
    unclassified /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_restricted /* IMPORTED_LONG_NAMED_INTEGER */,
    restricted /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_confidential /* IMPORTED_LONG_NAMED_INTEGER */,
    confidential /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_secret /* IMPORTED_LONG_NAMED_INTEGER */,
    secret /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_top_secret /* IMPORTED_LONG_NAMED_INTEGER */,
    top_secret /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from '../MTSAbstractService/SecurityClassification.ta.mjs';
export {
    SecurityClassification,
    SecurityClassification_unmarked /* IMPORTED_LONG_NAMED_INTEGER */,
    unmarked /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_unclassified /* IMPORTED_LONG_NAMED_INTEGER */,
    unclassified /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_restricted /* IMPORTED_LONG_NAMED_INTEGER */,
    restricted /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_confidential /* IMPORTED_LONG_NAMED_INTEGER */,
    confidential /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_secret /* IMPORTED_LONG_NAMED_INTEGER */,
    secret /* IMPORTED_SHORT_NAMED_INTEGER */,
    SecurityClassification_top_secret /* IMPORTED_LONG_NAMED_INTEGER */,
    top_secret /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from '../MTSAbstractService/SecurityClassification.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_att_security_classification } from '../MSObjectIdentifiers/id-att-security-classification.va.mjs';
export { id_att_security_classification } from '../MSObjectIdentifiers/id-att-security-classification.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mt_security_classification */
/**
 * @summary mt_security_classification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-security-classification X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SecurityClassification,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-security-classification
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SecurityClassification>}
 * @implements {X413ATTRIBUTE<SecurityClassification>}
 */
export const mt_security_classification: X413ATTRIBUTE<SecurityClassification> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SecurityClassification,
    },
    encoderFor: {
        '&Type': _encode_SecurityClassification,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_security_classification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_security_classification */

/* eslint-enable */
