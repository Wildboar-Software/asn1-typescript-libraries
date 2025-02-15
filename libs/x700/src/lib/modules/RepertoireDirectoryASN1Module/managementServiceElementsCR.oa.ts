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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa';
export { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa';
import { sMASE } from '../RepertoireDirectoryASN1Module/sMASE.oa';
export { sMASE } from '../RepertoireDirectoryASN1Module/sMASE.oa';
import { cMISE } from '../RepertoireDirectoryASN1Module/cMISE.oa';
export { cMISE } from '../RepertoireDirectoryASN1Module/cMISE.oa';
import { CONTENT_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTENT-RULE.oca';
export { CONTENT_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTENT-RULE.oca';

/* START_OF_SYMBOL_DEFINITION managementServiceElementsCR */
/**
 * @summary managementServiceElementsCR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementServiceElementsCR CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   applicationEntity.&id
 *   AUXILIARY OBJECT-CLASSES  {sMASE | cMISE}
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export const managementServiceElementsCR: CONTENT_RULE = {
    class: 'CONTENT-RULE',
    decoderFor: {},
    encoderFor: {},
    '&structuralClass':
        applicationEntity[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Auxiliaries': [sMASE, cMISE] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION managementServiceElementsCR */

/* eslint-enable */
