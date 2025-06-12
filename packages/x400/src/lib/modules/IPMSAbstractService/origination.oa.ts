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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
import { originate_probe } from '../IPMSAbstractService/originate-probe.oa.js';
export { originate_probe } from '../IPMSAbstractService/originate-probe.oa.js';
import { originate_ipm } from '../IPMSAbstractService/originate-ipm.oa.js';
export { originate_ipm } from '../IPMSAbstractService/originate-ipm.oa.js';
import { originate_rn } from '../IPMSAbstractService/originate-rn.oa.js';
export { originate_rn } from '../IPMSAbstractService/originate-rn.oa.js';
import { originate_on } from '../IPMSAbstractService/originate-on.oa.js';
export { originate_on } from '../IPMSAbstractService/originate-on.oa.js';
import { id_pt_origination } from '../IPMSObjectIdentifiers/id-pt-origination.va.js';
export { id_pt_origination } from '../IPMSObjectIdentifiers/id-pt-origination.va.js';
import { PORT } from '../MTSAbstractService/PORT.oca.js';
export { PORT } from '../MTSAbstractService/PORT.oca.js';

/* START_OF_SYMBOL_DEFINITION origination */
/**
 * @summary origination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * origination PORT ::= {
 *   CONSUMER INVOKES
 *     {originate-probe | originate-ipm | originate-rn | originate-on}
 *   ID                id-pt-origination
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const origination: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Supplier': [
        originate_probe,
        originate_ipm,
        originate_rn,
        originate_on,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_origination /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION origination */

/* eslint-enable */
