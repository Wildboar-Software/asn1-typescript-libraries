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
import { HolderNameConstraintsSyntax, _decode_HolderNameConstraintsSyntax, _encode_HolderNameConstraintsSyntax } from "../AttributeCertificateDefinitions/HolderNameConstraintsSyntax.ta.mjs";
// export { HolderNameConstraintsSyntax, _decode_HolderNameConstraintsSyntax, _encode_HolderNameConstraintsSyntax } from "../AttributeCertificateDefinitions/HolderNameConstraintsSyntax.ta.mjs";
import { id_ce_holderNameConstraints } from "../AttributeCertificateDefinitions/id-ce-holderNameConstraints.va.mjs";
// export { id_ce_holderNameConstraints } from "../AttributeCertificateDefinitions/id-ce-holderNameConstraints.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary holderNameConstraints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * holderNameConstraints EXTENSION ::= {
 *   SYNTAX         HolderNameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-holderNameConstraints }
 * ```
 * 
 * @constant
 * @type {EXTENSION<HolderNameConstraintsSyntax>}
 * @implements {EXTENSION<HolderNameConstraintsSyntax>}
 */
export
const holderNameConstraints: EXTENSION<HolderNameConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_HolderNameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_HolderNameConstraintsSyntax,
    },
    "&id": id_ce_holderNameConstraints /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
