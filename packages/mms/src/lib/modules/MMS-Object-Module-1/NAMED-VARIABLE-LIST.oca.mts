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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { VARIABLE_LIST_ITEM } from "../MMS-Object-Module-1/VARIABLE-LIST-ITEM.oca.mjs";
// export { VARIABLE_LIST_ITEM } from "../MMS-Object-Module-1/VARIABLE-LIST-ITEM.oca.mjs";


/**
 * @summary NAMED_VARIABLE_LIST
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-VARIABLE-LIST ::= CLASS {
 *     &name                   ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl          Identifier,
 *     &listOfVariables        VARIABLE-LIST-ITEM
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_VARIABLE_LIST {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-VARIABLE-LIST";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE_LIST]: $.ASN1Decoder<NAMED_VARIABLE_LIST[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE_LIST]: $.ASN1Encoder<NAMED_VARIABLE_LIST[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &listOfVariables
     */
    readonly "&listOfVariables"?: VARIABLE_LIST_ITEM;
};

/* eslint-enable */
