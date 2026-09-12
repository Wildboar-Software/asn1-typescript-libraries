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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";


/**
 * @summary DATA_EXCHANGE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DATA-EXCHANGE ::= CLASS {
 *     &name                   Identifier,
 *     -- this field shall be unique among all Data Exchange objects within the VMD
 *     &inUse                  BOOLEAN,
 *     &accessControl          Identifier,
 *     &request                SEQUENCE OF TypeDescription,
 *     &response               SEQUENCE OF TypeDescription,
 *     &linked                 BOOLEAN,
 *     -- The following attribute shall appear if an only if
 *     -- the value of &linked is true.
 *     &programInvocation      Identifier
 * }
 * ```
 * 
 * @interface
 */
export
interface DATA_EXCHANGE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DATA-EXCHANGE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DATA_EXCHANGE]: $.ASN1Decoder<DATA_EXCHANGE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DATA_EXCHANGE]: $.ASN1Encoder<DATA_EXCHANGE[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &inUse
     */
    readonly "&inUse"?: BOOLEAN;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &request
     */
    readonly "&request"?: TypeDescription[];
    /**
     * @summary &response
     */
    readonly "&response"?: TypeDescription[];
    /**
     * @summary &linked
     */
    readonly "&linked"?: BOOLEAN;
    /**
     * @summary &programInvocation
     */
    readonly "&programInvocation"?: Identifier;
};

/* eslint-enable */
