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
    EDINStatus,
    EDINStatus_nn_requested /* IMPORTED_LONG_NAMED_BIT */,
    nn_requested /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_fn_requested /* IMPORTED_LONG_NAMED_BIT */,
    fn_requested /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_pn_requested /* IMPORTED_LONG_NAMED_BIT */,
    pn_requested /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_nn_issued /* IMPORTED_LONG_NAMED_BIT */,
    nn_issued /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_fn_issued /* IMPORTED_LONG_NAMED_BIT */,
    fn_issued /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_pn_issued /* IMPORTED_LONG_NAMED_BIT */,
    pn_issued /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EDINStatus,
    _encode_EDINStatus,
} from '../EDIMSMessageStoreAttributes/EDINStatus.ta';
export {
    EDINStatus,
    EDINStatus_nn_requested /* IMPORTED_LONG_NAMED_BIT */,
    nn_requested /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_fn_requested /* IMPORTED_LONG_NAMED_BIT */,
    fn_requested /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_pn_requested /* IMPORTED_LONG_NAMED_BIT */,
    pn_requested /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_nn_issued /* IMPORTED_LONG_NAMED_BIT */,
    nn_issued /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_fn_issued /* IMPORTED_LONG_NAMED_BIT */,
    fn_issued /* IMPORTED_SHORT_NAMED_BIT */,
    EDINStatus_pn_issued /* IMPORTED_LONG_NAMED_BIT */,
    pn_issued /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_EDINStatus,
    _encode_EDINStatus,
} from '../EDIMSMessageStoreAttributes/EDINStatus.ta';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
import { id_cat_submitted_edin_status } from '../EDIMSObjectIdentifiers/id-cat-submitted-edin-status.va';
export { id_cat_submitted_edin_status } from '../EDIMSObjectIdentifiers/id-cat-submitted-edin-status.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION ac_submitted_edin_status */
/**
 * @summary ac_submitted_edin_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-submitted-edin-status X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINStatus,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-cat-submitted-edin-status
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINStatus>}
 * @implements {X413ATTRIBUTE<EDINStatus>}
 */
export const ac_submitted_edin_status: X413ATTRIBUTE<EDINStatus> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINStatus,
    },
    encoderFor: {
        '&Type': _encode_EDINStatus,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_submitted_edin_status /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ac_submitted_edin_status */

/* eslint-enable */
