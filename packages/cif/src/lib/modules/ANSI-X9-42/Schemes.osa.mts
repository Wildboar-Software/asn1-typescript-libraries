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
import { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
// export { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
import { Schemes_Union0_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union0-Intersection0-Element.oa.mjs";
// export { Schemes_Union0_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union0-Intersection0-Element.oa.mjs";
import { Schemes_Union1_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union1-Intersection0-Element.oa.mjs";
// export { Schemes_Union1_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union1-Intersection0-Element.oa.mjs";
import { Schemes_Union2_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union2-Intersection0-Element.oa.mjs";
// export { Schemes_Union2_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union2-Intersection0-Element.oa.mjs";
import { Schemes_Union3_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union3-Intersection0-Element.oa.mjs";
// export { Schemes_Union3_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union3-Intersection0-Element.oa.mjs";
import { Schemes_Union4_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union4-Intersection0-Element.oa.mjs";
// export { Schemes_Union4_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union4-Intersection0-Element.oa.mjs";
import { Schemes_Union5_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union5-Intersection0-Element.oa.mjs";
// export { Schemes_Union5_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union5-Intersection0-Element.oa.mjs";
import { Schemes_Union6_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union6-Intersection0-Element.oa.mjs";
// export { Schemes_Union6_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union6-Intersection0-Element.oa.mjs";
import { Schemes_Union7_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union7-Intersection0-Element.oa.mjs";
// export { Schemes_Union7_Intersection0_Element } from "../ANSI-X9-42/Schemes-Union7-Intersection0-Element.oa.mjs";
import { NamedSchemes } from "../ANSI-X9-42/NamedSchemes.osa.mjs";
// export { NamedSchemes } from "../ANSI-X9-42/NamedSchemes.osa.mjs";


/**
 * @summary Schemes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Schemes KEY-AGREEMENT ::= {
 * { OID dhStatic     PARMS SchemeParameters } |
 * { OID dhEphem    PARMS SchemeParameters } |
 * { OID dhOneFlow    PARMS SchemeParameters } |
 * { OID dhHybrid1    PARMS SchemeParameters } |
 * { OID dhHybrid2    PARMS SchemeParameters } |
 * { OID dhHybridOneFlow PARMS SchemeParameters } |
 * { OID mqv2        PARMS  SchemeParameters } |
 * { OID mqv1        PARMS  SchemeParameters } |
 * --
 * NamedSchemes,
 * ...
 * }
 * ```
 * 
 * @constant
 * @type {KEY_AGREEMENT[]}
 * 
 */
export
const Schemes: (KEY_AGREEMENT)[] = [ ...Schemes_Union0_Intersection0_Element, ...Schemes_Union1_Intersection0_Element, ...Schemes_Union2_Intersection0_Element, ...Schemes_Union3_Intersection0_Element, ...Schemes_Union4_Intersection0_Element, ...Schemes_Union5_Intersection0_Element, ...Schemes_Union6_Intersection0_Element, ...Schemes_Union7_Intersection0_Element, ...NamedSchemes, ];

/* eslint-enable */
