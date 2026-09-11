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



/**
 * @summary MAP_EXTENSION
 * @description
 *
 * Information object class for private MAP extensions. The extension OID shall
 * not exceed 16 octets and shall not have more than 16 components (3GPP TS
 * 29.002 V19.1.0 clause 17.7.11).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-EXTENSION ::= CLASS {
 *     &ExtensionType    OPTIONAL,
 *     &extensionId    OBJECT IDENTIFIER }
 * ```
 * 
 * @interface
 */
export
interface MAP_EXTENSION<
    ExtensionType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MAP-EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof MAP_EXTENSION<ExtensionType>]: $.ASN1Decoder<MAP_EXTENSION<ExtensionType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof MAP_EXTENSION<ExtensionType>]: $.ASN1Encoder<MAP_EXTENSION<ExtensionType>[_K]>;
    }>;
    /**
     * @summary &ExtensionType
     * @description
     *
     * Optional type of a private MAP extension, selected by `&extensionId`
     * (3GPP TS 29.002 V19.1.0 clause 17.7.11).
     */
    readonly "&ExtensionType": ExtensionType;
    /**
     * @summary &extensionId
     * @description
     *
     * OID identifying a private MAP extension. Length shall not exceed 16
     * octets and the number of components shall not exceed 16 (3GPP TS
     * 29.002 V19.1.0 clause 17.7.11).
     */
    readonly "&extensionId"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
