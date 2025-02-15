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
import { ROS_OBJECT_CLASS } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca';
export { ROS_OBJECT_CLASS } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca';
export { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca';
import { mts_access_contract_88 } from '../MTSAbstractService88/mts-access-contract-88.oa';
export { mts_access_contract_88 } from '../MTSAbstractService88/mts-access-contract-88.oa';
import { mts_forced_access_contract_88 } from '../MTSAbstractService88/mts-forced-access-contract-88.oa';
export { mts_forced_access_contract_88 } from '../MTSAbstractService88/mts-forced-access-contract-88.oa';
import { id_ot_mts_user } from '../MTSObjectIdentifiers/id-ot-mts-user.va';
export { id_ot_mts_user } from '../MTSObjectIdentifiers/id-ot-mts-user.va';
import { MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca';
export { MHS_OBJECT } from '../MTSAbstractService/MHS-OBJECT.oca';

/* START_OF_SYMBOL_DEFINITION mts_user_88 */
/**
 * @summary mts_user_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-user-88 MHS-OBJECT ::= {
 *   INITIATES  {mts-access-contract-88}
 *   RESPONDS   {mts-forced-access-contract-88}
 *   ID         {id-ot-mts-user  88}
 * }
 * ```
 *
 * @constant
 * @type {MHS_OBJECT}
 * @implements {MHS_OBJECT}
 */
export const mts_user_88: MHS_OBJECT = {
    class: 'ROS-OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Initiates': [mts_access_contract_88] /* OBJECT_FIELD_SETTING */,
    '&Responds': [mts_forced_access_contract_88] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [88],
        id_ot_mts_user
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mts_user_88 */

/* eslint-enable */
