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
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca';
export { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca';
import { ia5_text_body_part } from '../IPMSExtendedBodyPartTypes/ia5-text-body-part.oa';
export { ia5_text_body_part } from '../IPMSExtendedBodyPartTypes/ia5-text-body-part.oa';
import { g3_facsimile_body_part } from '../IPMSExtendedBodyPartTypes/g3-facsimile-body-part.oa';
export { g3_facsimile_body_part } from '../IPMSExtendedBodyPartTypes/g3-facsimile-body-part.oa';
import { g4_class1_body_part } from '../IPMSExtendedBodyPartTypes/g4-class1-body-part.oa';
export { g4_class1_body_part } from '../IPMSExtendedBodyPartTypes/g4-class1-body-part.oa';
import { teletex_body_part } from '../IPMSExtendedBodyPartTypes/teletex-body-part.oa';
export { teletex_body_part } from '../IPMSExtendedBodyPartTypes/teletex-body-part.oa';
import { videotex_body_part } from '../IPMSExtendedBodyPartTypes/videotex-body-part.oa';
export { videotex_body_part } from '../IPMSExtendedBodyPartTypes/videotex-body-part.oa';
import { encrypted_body_part } from '../IPMSExtendedBodyPartTypes/encrypted-body-part.oa';
export { encrypted_body_part } from '../IPMSExtendedBodyPartTypes/encrypted-body-part.oa';
import { message_body_part } from '../IPMSExtendedBodyPartTypes/message-body-part.oa';
export { message_body_part } from '../IPMSExtendedBodyPartTypes/message-body-part.oa';
import { mixed_mode_body_part } from '../IPMSExtendedBodyPartTypes/mixed-mode-body-part.oa';
export { mixed_mode_body_part } from '../IPMSExtendedBodyPartTypes/mixed-mode-body-part.oa';
import { bilaterally_defined_body_part } from '../IPMSExtendedBodyPartTypes/bilaterally-defined-body-part.oa';
export { bilaterally_defined_body_part } from '../IPMSExtendedBodyPartTypes/bilaterally-defined-body-part.oa';
import { nationally_defined_body_part } from '../IPMSExtendedBodyPartTypes/nationally-defined-body-part.oa';
export { nationally_defined_body_part } from '../IPMSExtendedBodyPartTypes/nationally-defined-body-part.oa';
import { general_text_body_part } from '../IPMSExtendedBodyPartTypes2/general-text-body-part.oa';
export { general_text_body_part } from '../IPMSExtendedBodyPartTypes2/general-text-body-part.oa';
import { file_transfer_body_part } from '../IPMSFileTransferBodyPartType/file-transfer-body-part.oa';
export { file_transfer_body_part } from '../IPMSFileTransferBodyPartType/file-transfer-body-part.oa';
import { voice_body_part } from '../IPMSExtendedVoiceBodyPartType/voice-body-part.oa';
export { voice_body_part } from '../IPMSExtendedVoiceBodyPartType/voice-body-part.oa';
import { report_body_part } from '../IPMSForwardedReportBodyPartType/report-body-part.oa';
export { report_body_part } from '../IPMSForwardedReportBodyPartType/report-body-part.oa';
import { notification_body_part } from '../IPMSForwardedReportBodyPartType/notification-body-part.oa';
export { notification_body_part } from '../IPMSForwardedReportBodyPartType/notification-body-part.oa';
// import { content_body_part } from '../IPMSForwardedContentBodyPartType/content-body-part.oa';
import { pkcs7_body_part } from '../PKCS7BodyPartType/pkcs7-body-part.oa';
export { pkcs7_body_part } from '../PKCS7BodyPartType/pkcs7-body-part.oa';

/* START_OF_SYMBOL_DEFINITION StandardBodyParts */
/**
 * @summary StandardBodyParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StandardBodyParts EXTENDED-BODY-PART-TYPE ::= {ia5-text-body-part | g3-facsimile-body-part | g4-class1-body-part |
 *    teletex-body-part | videotex-body-part | encrypted-body-part |
 *    message-body-part | mixed-mode-body-part | bilaterally-defined-body-part |
 *    nationally-defined-body-part | general-text-body-part |
 *    file-transfer-body-part | voice-body-part | report-body-part |
 *    notification-body-part |
 *    content-body-part{{1 2 3 -- RELATIVE-OID to be provided --}} |
 *    pkcs7-body-part, ...}
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE[]}
 *
 */
export const StandardBodyParts: EXTENDED_BODY_PART_TYPE[] = [
    ia5_text_body_part,
    g3_facsimile_body_part,
    g4_class1_body_part,
    teletex_body_part,
    videotex_body_part,
    encrypted_body_part,
    message_body_part,
    mixed_mode_body_part,
    bilaterally_defined_body_part,
    nationally_defined_body_part,
    general_text_body_part,
    file_transfer_body_part,
    voice_body_part,
    report_body_part,
    notification_body_part,
    // content_body_part,
    pkcs7_body_part,
];
/* END_OF_SYMBOL_DEFINITION StandardBodyParts */

/* eslint-enable */
