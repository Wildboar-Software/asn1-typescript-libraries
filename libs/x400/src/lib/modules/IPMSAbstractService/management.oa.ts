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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import { change_auto_discard } from '../IPMSAbstractService/change-auto-discard.oa';
export { change_auto_discard } from '../IPMSAbstractService/change-auto-discard.oa';
import { change_auto_acknowledgment } from '../IPMSAbstractService/change-auto-acknowledgment.oa';
export { change_auto_acknowledgment } from '../IPMSAbstractService/change-auto-acknowledgment.oa';
import { change_auto_forwarding } from '../IPMSAbstractService/change-auto-forwarding.oa';
export { change_auto_forwarding } from '../IPMSAbstractService/change-auto-forwarding.oa';
import { id_pt_management } from '../IPMSObjectIdentifiers/id-pt-management.va';
export { id_pt_management } from '../IPMSObjectIdentifiers/id-pt-management.va';
import { PORT } from '../MTSAbstractService/PORT.oca';
export { PORT } from '../MTSAbstractService/PORT.oca';

/* START_OF_SYMBOL_DEFINITION management */
/**
 * @summary management
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * management PORT ::= {
 *   CONSUMER INVOKES
 *     {change-auto-discard | change-auto-acknowledgment | change-auto-forwarding}
 *   ID                id-pt-management
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const management: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Supplier': [
        change_auto_discard,
        change_auto_acknowledgment,
        change_auto_forwarding,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_management /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION management */

/* eslint-enable */
