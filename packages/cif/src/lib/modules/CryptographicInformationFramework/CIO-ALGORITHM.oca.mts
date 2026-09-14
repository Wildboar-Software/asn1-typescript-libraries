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
import { Operations, Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */, compute_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */, compute_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */, verify_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */, verify_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_encipher /* IMPORTED_LONG_NAMED_BIT */, encipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_decipher /* IMPORTED_LONG_NAMED_BIT */, decipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_hash /* IMPORTED_LONG_NAMED_BIT */, hash /* IMPORTED_SHORT_NAMED_BIT */, Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */, generate_key /* IMPORTED_SHORT_NAMED_BIT */, Operations_derive_key /* IMPORTED_LONG_NAMED_BIT */, derive_key /* IMPORTED_SHORT_NAMED_BIT */, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";
// export { Operations, Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */, compute_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */, compute_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */, verify_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */, verify_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_encipher /* IMPORTED_LONG_NAMED_BIT */, encipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_decipher /* IMPORTED_LONG_NAMED_BIT */, decipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_hash /* IMPORTED_LONG_NAMED_BIT */, hash /* IMPORTED_SHORT_NAMED_BIT */, Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */, generate_key /* IMPORTED_SHORT_NAMED_BIT */, Operations_derive_key /* IMPORTED_LONG_NAMED_BIT */, derive_key /* IMPORTED_SHORT_NAMED_BIT */, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";


/**
 * @summary CIO_ALGORITHM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIO-ALGORITHM ::= CLASS {
 *     &id INTEGER UNIQUE,
 *     &Parameters,
 *     &Operations Operations,
 *     &objectIdentifier OBJECT IDENTIFIER OPTIONAL
 * } WITH SYNTAX {
 *     PARAMETERS &Parameters
 *     OPERATIONS &Operations
 *     ID &id
 *     [OID &objectIdentifier]
 * }
 * ```
 * 
 * @interface
 */
export
interface CIO_ALGORITHM<
    Parameters = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CIO-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof CIO_ALGORITHM<Parameters>]: $.ASN1Decoder<CIO_ALGORITHM<Parameters>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof CIO_ALGORITHM<Parameters>]: $.ASN1Encoder<CIO_ALGORITHM<Parameters>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
    /**
     * @summary &Parameters
     */
    readonly "&Parameters": Parameters;
    /**
     * @summary &Operations
     */
    readonly "&Operations"?: Operations;
    /**
     * @summary &objectIdentifier
     */
    readonly "&objectIdentifier"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
