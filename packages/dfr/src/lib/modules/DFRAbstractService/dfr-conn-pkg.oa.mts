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
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
// export { emptyBind } from "../Remote-Operations-Useful-Definitions/emptyBind.oa.mjs";
import { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
// export { emptyUnbind } from "../Remote-Operations-Useful-Definitions/emptyUnbind.oa.mjs";
import { dfrBind } from "../DFRAbstractService/dfrBind.oa.mjs";
// export { dfrBind } from "../DFRAbstractService/dfrBind.oa.mjs";
import { type CONNECTION_PACKAGE } from "../Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs";


/**
 * @summary dfr_conn_pkg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-conn-pkg CONNECTION-PACKAGE ::= {
 *     BIND                dfrBind
 *     -- Empty unbind
 * }
 * ```
 * 
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export
const dfr_conn_pkg: CONNECTION_PACKAGE = {
    class: "CONNECTION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&bind": dfrBind /* OBJECT_FIELD_SETTING */,
    "&unbind": emptyUnbind /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&responderCanUnbind": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&unbindCanFail": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
