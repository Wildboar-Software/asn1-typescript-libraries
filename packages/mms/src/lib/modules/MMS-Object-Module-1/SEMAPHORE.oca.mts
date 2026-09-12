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
import { NAMED_TOKEN } from "../MMS-Object-Module-1/NAMED-TOKEN.oca.mjs";
// export { NAMED_TOKEN } from "../MMS-Object-Module-1/NAMED-TOKEN.oca.mjs";
import { SEMAPHORE_ENTRY } from "../MMS-Object-Module-1/SEMAPHORE-ENTRY.oca.mjs";
// export { SEMAPHORE_ENTRY } from "../MMS-Object-Module-1/SEMAPHORE-ENTRY.oca.mjs";


/**
 * @summary SEMAPHORE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SEMAPHORE ::= CLASS {
 *     &name                   ObjectName,
 *     -- shall be unique among all semaphores within the VMD
 *     &accessControl          Identifier,
 *     &class                  ENUMERATED { token, pool },
 *     -- If the value of &class is token, the following two fields shall appear
 *     &numberOfTokens         INTEGER OPTIONAL,
 *     &numberOfOwnedTokens    INTEGER OPTIONAL,
 *     -- If the value of &class is pool, the following field shall appear
 *     &NamedTokens            NAMED-TOKEN OPTIONAL,
 *     &Owners                 SEMAPHORE-ENTRY OPTIONAL,
 *     &Requesters             SEMAPHORE-ENTRY OPTIONAL,
 *     &eventCondition         ObjectName
 * }
 * ```
 * 
 * @interface
 */
export
interface SEMAPHORE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SEMAPHORE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SEMAPHORE]: $.ASN1Decoder<SEMAPHORE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SEMAPHORE]: $.ASN1Encoder<SEMAPHORE[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    // FIXME: &class;
    /**
     * @summary &numberOfTokens
     */
    readonly "&numberOfTokens"?: INTEGER;
    /**
     * @summary &numberOfOwnedTokens
     */
    readonly "&numberOfOwnedTokens"?: INTEGER;
    /**
     * @summary &NamedTokens
     */
    readonly "&NamedTokens"?: NAMED_TOKEN[];
    /**
     * @summary &Owners
     */
    readonly "&Owners"?: SEMAPHORE_ENTRY[];
    /**
     * @summary &Requesters
     */
    readonly "&Requesters"?: SEMAPHORE_ENTRY[];
    /**
     * @summary &eventCondition
     */
    readonly "&eventCondition"?: ObjectName;
};

/* eslint-enable */
