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
import { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
export { EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
import { ia5_text_body_part } from '../IPMSExtendedBodyPartTypes/ia5-text-body-part.oa.mjs';
export { ia5_text_body_part } from '../IPMSExtendedBodyPartTypes/ia5-text-body-part.oa.mjs';
import { g3_facsimile_body_part } from '../IPMSExtendedBodyPartTypes/g3-facsimile-body-part.oa.mjs';
export { g3_facsimile_body_part } from '../IPMSExtendedBodyPartTypes/g3-facsimile-body-part.oa.mjs';
import { g4_class1_body_part } from '../IPMSExtendedBodyPartTypes/g4-class1-body-part.oa.mjs';
export { g4_class1_body_part } from '../IPMSExtendedBodyPartTypes/g4-class1-body-part.oa.mjs';
import { teletex_body_part } from '../IPMSExtendedBodyPartTypes/teletex-body-part.oa.mjs';
export { teletex_body_part } from '../IPMSExtendedBodyPartTypes/teletex-body-part.oa.mjs';
import { videotex_body_part } from '../IPMSExtendedBodyPartTypes/videotex-body-part.oa.mjs';
export { videotex_body_part } from '../IPMSExtendedBodyPartTypes/videotex-body-part.oa.mjs';
import { encrypted_body_part } from '../IPMSExtendedBodyPartTypes/encrypted-body-part.oa.mjs';
export { encrypted_body_part } from '../IPMSExtendedBodyPartTypes/encrypted-body-part.oa.mjs';
import { message_body_part } from '../IPMSExtendedBodyPartTypes/message-body-part.oa.mjs';
export { message_body_part } from '../IPMSExtendedBodyPartTypes/message-body-part.oa.mjs';
import { mixed_mode_body_part } from '../IPMSExtendedBodyPartTypes/mixed-mode-body-part.oa.mjs';
export { mixed_mode_body_part } from '../IPMSExtendedBodyPartTypes/mixed-mode-body-part.oa.mjs';
import { bilaterally_defined_body_part } from '../IPMSExtendedBodyPartTypes/bilaterally-defined-body-part.oa.mjs';
export { bilaterally_defined_body_part } from '../IPMSExtendedBodyPartTypes/bilaterally-defined-body-part.oa.mjs';
import { nationally_defined_body_part } from '../IPMSExtendedBodyPartTypes/nationally-defined-body-part.oa.mjs';
export { nationally_defined_body_part } from '../IPMSExtendedBodyPartTypes/nationally-defined-body-part.oa.mjs';
import { general_text_body_part } from '../IPMSExtendedBodyPartTypes2/general-text-body-part.oa.mjs';
export { general_text_body_part } from '../IPMSExtendedBodyPartTypes2/general-text-body-part.oa.mjs';
import { file_transfer_body_part } from '../IPMSFileTransferBodyPartType/file-transfer-body-part.oa.mjs';
export { file_transfer_body_part } from '../IPMSFileTransferBodyPartType/file-transfer-body-part.oa.mjs';
import { voice_body_part } from '../IPMSExtendedVoiceBodyPartType/voice-body-part.oa.mjs';
export { voice_body_part } from '../IPMSExtendedVoiceBodyPartType/voice-body-part.oa.mjs';
import { report_body_part } from '../IPMSForwardedReportBodyPartType/report-body-part.oa.mjs';
export { report_body_part } from '../IPMSForwardedReportBodyPartType/report-body-part.oa.mjs';
import { notification_body_part } from '../IPMSForwardedReportBodyPartType/notification-body-part.oa.mjs';
export { notification_body_part } from '../IPMSForwardedReportBodyPartType/notification-body-part.oa.mjs';
// import { content_body_part } from '../IPMSForwardedContentBodyPartType/content-body-part.oa.mjs';
import { pkcs7_body_part } from '../PKCS7BodyPartType/pkcs7-body-part.oa.mjs';
export { pkcs7_body_part } from '../PKCS7BodyPartType/pkcs7-body-part.oa.mjs';

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
