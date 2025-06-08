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
    EDIApplicationSecurityExtension,
    _decode_EDIApplicationSecurityExtension,
    _encode_EDIApplicationSecurityExtension,
} from '../EDIMSInformationObjects/EDIApplicationSecurityExtension.ta';
export {
    EDIApplicationSecurityExtension,
    _decode_EDIApplicationSecurityExtension,
    _encode_EDIApplicationSecurityExtension,
} from '../EDIMSInformationObjects/EDIApplicationSecurityExtension.ta';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
import { id_hat_edi_application_security_extensions } from '../EDIMSObjectIdentifiers/id-hat-edi-application-security-extensions.va';
export { id_hat_edi_application_security_extensions } from '../EDIMSObjectIdentifiers/id-hat-edi-application-security-extensions.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION edi_application_security_extensions */
/**
 * @summary edi_application_security_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-application-security-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIApplicationSecurityExtension,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-edi-application-security-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIApplicationSecurityExtension>}
 * @implements {X413ATTRIBUTE<EDIApplicationSecurityExtension>}
 */
export const edi_application_security_extensions: X413ATTRIBUTE<EDIApplicationSecurityExtension> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIApplicationSecurityExtension,
    },
    encoderFor: {
        '&Type': _encode_EDIApplicationSecurityExtension,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_edi_application_security_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_application_security_extensions */

/* eslint-enable */
