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
import { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.js';
export { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.js';
import { OPERATION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.js';
export { OPERATION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.js';
import { origination } from '../IPMSAbstractService/origination.oa.js';
export { origination } from '../IPMSAbstractService/origination.oa.js';
import { reception } from '../IPMSAbstractService/reception.oa.js';
export { reception } from '../IPMSAbstractService/reception.oa.js';
import { management } from '../IPMSAbstractService/management.oa.js';
export { management } from '../IPMSAbstractService/management.oa.js';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.js';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.js';

/* START_OF_SYMBOL_DEFINITION ipms_access_contract */
/**
 * @summary ipms_access_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipms-access-contract CONTRACT ::= {
 *   INITIATOR CONSUMER OF  {origination | reception | management}
 * }
 * ```
 *
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export const ipms_access_contract: CONTRACT = {
    class: 'CONTRACT',
    decoderFor: {},
    encoderFor: {},
    '&InitiatorConsumerOf': [
        origination,
        reception,
        management,
    ] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipms_access_contract */

/* eslint-enable */
