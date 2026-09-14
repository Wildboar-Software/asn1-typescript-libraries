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
import { NamedSchemes_Union0_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union0-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union0_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union0-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union1_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union1-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union1_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union1-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union2_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union2-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union2_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union2-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union3_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union3-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union3_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union3-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union4_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union4-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union4_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union4-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union5_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union5-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union5_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union5-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union6_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union6-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union6_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union6-Intersection0-Element.oa.mjs";
import { NamedSchemes_Union7_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union7-Intersection0-Element.oa.mjs";
// export { NamedSchemes_Union7_Intersection0_Element } from "../ANSI-X9-42/NamedSchemes-Union7-Intersection0-Element.oa.mjs";


/**
 * @summary NamedSchemes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedSchemes KEY-AGREEMENT ::= {
 * { OID  dhStatic-sha1 } |        -- { dhStatic, {id-sha1,NULL} }
 * { OID  dhEphem-sha1  } |        -- { dhEphem, {id-sha1,NULL} }
 * { OID dhOneFlow-sha1 } |     -- { dhOneFlow, {id-sha1,NULL} }
 * { OID  dhHybrid1-sha1 } |    -- { dhHybrid1, {id-sha1,NULL} }
 * { OID  dhHybrid2-sha1 } |    -- { dhHybrid2, {id-sha1,NULL} }
 * { OID dhHybridOneFlow-sha1 } | -- { dhHybridOneFlow, {id-sha1,NULL} }
 * { OID mqv2-sha1    } |        -- { mqv2,    {id-sha1,NULL} }
 * { OID mqv1-sha1    },        -- { mqv1,    {id-sha1,NULL} }
 * ...
 * }
 * ```
 * 
 * @constant
 * @type {KEY_AGREEMENT[]}
 * 
 */
export
const NamedSchemes: (KEY_AGREEMENT)[] = [ ...NamedSchemes_Union0_Intersection0_Element, ...NamedSchemes_Union1_Intersection0_Element, ...NamedSchemes_Union2_Intersection0_Element, ...NamedSchemes_Union3_Intersection0_Element, ...NamedSchemes_Union4_Intersection0_Element, ...NamedSchemes_Union5_Intersection0_Element, ...NamedSchemes_Union6_Intersection0_Element, ...NamedSchemes_Union7_Intersection0_Element, ];

/* eslint-enable */
