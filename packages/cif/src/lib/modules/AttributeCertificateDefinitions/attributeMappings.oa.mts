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
import { AttributeMappings, _decode_AttributeMappings, _encode_AttributeMappings } from "../AttributeCertificateDefinitions/AttributeMappings.ta.mjs";
// export { AttributeMappings, _decode_AttributeMappings, _encode_AttributeMappings } from "../AttributeCertificateDefinitions/AttributeMappings.ta.mjs";
import { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va.mjs";
// export { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary attributeMappings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeMappings EXTENSION ::= {
 *   SYNTAX         AttributeMappings
 *   IDENTIFIED BY  id-ce-attributeMappings }
 * ```
 * 
 * @constant
 * @type {EXTENSION<AttributeMappings>}
 * @implements {EXTENSION<AttributeMappings>}
 */
export
const attributeMappings: EXTENSION<AttributeMappings> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeMappings,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeMappings,
    },
    "&id": id_ce_attributeMappings /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
