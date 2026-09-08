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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
// export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { RuleIdentifier, _decode_RuleIdentifier, _encode_RuleIdentifier } from "../InformationFramework/RuleIdentifier.ta.mjs";
// export { RuleIdentifier, _decode_RuleIdentifier, _encode_RuleIdentifier } from "../InformationFramework/RuleIdentifier.ta.mjs";


/**
 * @summary STRUCTURE_RULE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STRUCTURE-RULE ::= CLASS {
 *   &nameForm               NAME-FORM,
 *   &SuperiorStructureRules STRUCTURE-RULE.&id OPTIONAL,
 *   &id                     RuleIdentifier }
 * WITH SYNTAX {
 *   NAME FORM               &nameForm
 *   [SUPERIOR RULES         &SuperiorStructureRules]
 *   ID                      &id }
 * ```
 * 
 * @interface
 */
export
interface STRUCTURE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "STRUCTURE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof STRUCTURE_RULE]: $.ASN1Decoder<STRUCTURE_RULE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof STRUCTURE_RULE]: $.ASN1Encoder<STRUCTURE_RULE[_K]>;
    }>;
    /**
     * @summary &nameForm
     */
    readonly "&nameForm"?: NAME_FORM;
    /**
     * @summary &SuperiorStructureRules
     */
    readonly "&SuperiorStructureRules"?: RuleIdentifier;
    /**
     * @summary &id
     */
    readonly "&id"?: RuleIdentifier;
};

/* eslint-enable */
