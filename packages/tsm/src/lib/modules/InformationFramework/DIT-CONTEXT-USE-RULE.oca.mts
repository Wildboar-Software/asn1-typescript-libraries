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
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
// export { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";


/**
 * @summary DIT_CONTEXT_USE_RULE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DIT-CONTEXT-USE-RULE ::= CLASS {
 *   &attributeType      ATTRIBUTE.&id UNIQUE,
 *   &Mandatory          CONTEXT OPTIONAL,
 *   &Optional           CONTEXT OPTIONAL}
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE      &attributeType
 *   [MANDATORY CONTEXTS &Mandatory]
 *   [OPTIONAL CONTEXTS  &Optional] }
 * ```
 * 
 * @interface
 */
export
interface DIT_CONTEXT_USE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DIT-CONTEXT-USE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DIT_CONTEXT_USE_RULE]: $.ASN1Decoder<DIT_CONTEXT_USE_RULE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DIT_CONTEXT_USE_RULE]: $.ASN1Encoder<DIT_CONTEXT_USE_RULE[_K]>;
    }>;
    /**
     * @summary &attributeType
     */
    readonly "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Mandatory
     */
    readonly "&Mandatory"?: CONTEXT[];
    /**
     * @summary &Optional
     */
    readonly "&Optional"?: CONTEXT[];
};

/* eslint-enable */
