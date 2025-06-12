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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { emptyBind } from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/emptyBind.oa.mjs';
export { emptyBind } from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/emptyBind.oa.mjs';
import { emptyUnbind } from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs';
export { emptyUnbind } from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs';
import { ms_bind } from '../MSAbstractService/ms-bind.oa.mjs';
export { ms_bind } from '../MSAbstractService/ms-bind.oa.mjs';
import { ms_unbind } from '../MSAbstractService/ms-unbind.oa.mjs';
export { ms_unbind } from '../MSAbstractService/ms-unbind.oa.mjs';
import { id_cp_ms_connection } from '../MSObjectIdentifiers/id-cp-ms-connection.va.mjs';
export { id_cp_ms_connection } from '../MSObjectIdentifiers/id-cp-ms-connection.va.mjs';
import { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs';
export { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION ms_connect */
/**
 * @summary ms_connect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-connect CONNECTION-PACKAGE ::= {
 *   BIND    ms-bind
 *   UNBIND  ms-unbind
 *   ID      id-cp-ms-connection
 * }
 * ```
 *
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export const ms_connect: CONNECTION_PACKAGE = {
    class: 'CONNECTION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&bind': ms_bind /* OBJECT_FIELD_SETTING */,
    '&unbind': ms_unbind /* OBJECT_FIELD_SETTING */,
    '&id': id_cp_ms_connection /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&responderCanUnbind': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&unbindCanFail': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_connect */

/* eslint-enable */
