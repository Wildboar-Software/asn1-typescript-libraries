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
    ObsoletedIPMsSubfield,
    _decode_ObsoletedIPMsSubfield,
    _encode_ObsoletedIPMsSubfield,
} from '../IPMSInformationObjects/ObsoletedIPMsSubfield.ta';
export {
    ObsoletedIPMsSubfield,
    _decode_ObsoletedIPMsSubfield,
    _encode_ObsoletedIPMsSubfield,
} from '../IPMSInformationObjects/ObsoletedIPMsSubfield.ta';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa';
export { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa';
import { id_hat_obsoleted_IPMs } from '../IPMSObjectIdentifiers/id-hat-obsoleted-IPMs.va';
export { id_hat_obsoleted_IPMs } from '../IPMSObjectIdentifiers/id-hat-obsoleted-IPMs.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION obsoleted_IPMs */
/**
 * @summary obsoleted_IPMs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * obsoleted-IPMs X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ObsoletedIPMsSubfield,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-obsoleted-IPMs
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ObsoletedIPMsSubfield>}
 * @implements {X413ATTRIBUTE<ObsoletedIPMsSubfield>}
 */
export const obsoleted_IPMs: X413ATTRIBUTE<ObsoletedIPMsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ObsoletedIPMsSubfield,
    },
    encoderFor: {
        '&Type': _encode_ObsoletedIPMsSubfield,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_obsoleted_IPMs /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION obsoleted_IPMs */

/* eslint-enable */
