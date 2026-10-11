/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { dfr_contract } from "../DFRAbstractService/dfr-contract.oa.mjs";
import { acse } from "../Remote-Operations-Realizations/acse.oa.mjs";
import { pData } from "../Remote-Operations-Realizations/pData.oa.mjs";
import { acse_abstract_syntax } from "../Remote-Operations-Abstract-Syntaxes/acse-abstract-syntax.oa.mjs";
import { dfrse_basic_abstract_syntax } from "../DFRAccessProtocol/dfrse-basic-abstract-syntax.oa.mjs";
import { dfrse_ext_abstract_syntax } from "../DFRAccessProtocol/dfrse-ext-abstract-syntax.oa.mjs";
import { id_ac_dfr_access } from "../DFRProtocolObjectIdentifiers/id-ac-dfr-access.va.mjs";
import { type APPLICATION_CONTEXT } from "../Remote-Operations-Information-Objects-extensions/APPLICATION-CONTEXT.oca.mjs";


/**
 * @summary dfr_access
 * @description
 *
 * Application context without RTSE: ACSE + ROSE, initiator consumes the DFR
 * port. Abstract syntaxes: ACSE, DFRSE (with basic attributes), and optional
 * extension-attribute syntax (negotiable). ISO/IEC 10166-2:1991 §6. Other
 * attribute-set syntaxes may also be negotiated.
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
