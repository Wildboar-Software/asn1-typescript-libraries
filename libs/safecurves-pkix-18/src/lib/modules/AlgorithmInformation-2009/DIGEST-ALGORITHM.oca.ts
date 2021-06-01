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
import * as $ from "asn1-ts/dist/node/functional";
import { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta";
export { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta";


/* START_OF_SYMBOL_DEFINITION DIGEST_ALGORITHM */
/**
 * @summary DIGEST_ALGORITHM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DIGEST-ALGORITHM ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [PARAMS [TYPE &Params] ARE &paramPresence ]
 * }
 * ```
 * 
 * @interface
 */
export
interface DIGEST_ALGORITHM<
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DIGEST-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DIGEST_ALGORITHM<Params>]: $.ASN1Decoder<DIGEST_ALGORITHM<Params>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DIGEST_ALGORITHM<Params>]: $.ASN1Encoder<DIGEST_ALGORITHM<Params>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Params
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     */
    readonly "&paramPresence"?: ParamOptions;
};
/* END_OF_SYMBOL_DEFINITION DIGEST_ALGORITHM */

/* eslint-enable */
