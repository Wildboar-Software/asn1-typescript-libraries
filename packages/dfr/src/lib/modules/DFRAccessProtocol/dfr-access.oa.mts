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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";
import { type REALIZATION } from "../Remote-Operations-Information-Objects-extensions/REALIZATION.oca.mjs";
import { dfr_contract } from "../DFRAbstractService/dfr-contract.oa.mjs";
// export { dfr_contract } from "../DFRAbstractService/dfr-contract.oa.mjs";
import { acse } from "../Remote-Operations-Realizations/acse.oa.mjs";
// export { acse } from "../Remote-Operations-Realizations/acse.oa.mjs";
import { pData } from "../Remote-Operations-Realizations/pData.oa.mjs";
// export { pData } from "../Remote-Operations-Realizations/pData.oa.mjs";
import { acse_abstract_syntax } from "../Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs";
// export { acse_abstract_syntax } from "../Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs";
import { dfrse_basic_abstract_syntax } from "../DFRAccessProtocol/dfrse-basic-abstract-syntax.oa.mjs";
// export { dfrse_basic_abstract_syntax } from "../DFRAccessProtocol/dfrse-basic-abstract-syntax.oa.mjs";
import { dfrse_ext_abstract_syntax } from "../DFRAccessProtocol/dfrse-ext-abstract-syntax.oa.mjs";
// export { dfrse_ext_abstract_syntax } from "../DFRAccessProtocol/dfrse-ext-abstract-syntax.oa.mjs";
import { id_ac_dfr_access } from "../DFRProtocolObjectIdentifiers/id-ac-dfr-access.va.mjs";
// export { id_ac_dfr_access } from "../DFRProtocolObjectIdentifiers/id-ac-dfr-access.va.mjs";
import { type APPLICATION_CONTEXT } from "../Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary dfr_access
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-access APPLICATION-CONTEXT ::= {
 *     CONTRACT                    dfr-contract
 *     ESTABLISHED BY              acse
 *     INFORMATION TRANSFER BY     pData
 *     ABSTRACT SYNTAXES {
 *         acse-abstract-syntax
 *         | dfrse-basic-abstract-syntax
 *         | dfrse-ext-abstract-syntax
 *     }
 *     APPLICATION CONTEXT NAME    id-ac-dfr-access
 * }
 * ```
 * 
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export
const dfr_access: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&associationContract": dfr_contract /* OBJECT_FIELD_SETTING */,
    "&associationRealization": acse /* OBJECT_FIELD_SETTING */,
    "&transferRealization": pData /* OBJECT_FIELD_SETTING */,
    "&AbstractSyntaxes": [ acse_abstract_syntax, dfrse_basic_abstract_syntax, dfrse_ext_abstract_syntax, ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_dfr_access /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&probe": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&acknowledge": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
