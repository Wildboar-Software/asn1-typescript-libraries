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
import { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.js";
export { ParamOptions, _enum_for_ParamOptions, ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */, required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */, preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */, absent /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */, inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */, optional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ParamOptions, _encode_ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.js";
import { KeyUsage } from "@wildboar/x500/src/lib/modules/CertificateExtensions/KeyUsage.ta.js";


/* START_OF_SYMBOL_DEFINITION PUBLIC_KEY */
/**
 * @summary PUBLIC_KEY
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PUBLIC-KEY ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &KeyValue        OPTIONAL,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent,
 * &keyUsage        KeyUsage OPTIONAL,
 * &PrivateKey        OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [KEY &KeyValue]
 * [PARAMS [TYPE &Params] ARE &paramPresence]
 * [CERT-KEY-USAGE &keyUsage]
 * [PRIVATE-KEY &PrivateKey]
 * }
 * ```
 * 
 * @interface
 */
export
interface PUBLIC_KEY<
    KeyValue = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    PrivateKey = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "PUBLIC-KEY";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof PUBLIC_KEY<KeyValue,Params,PrivateKey>]: $.ASN1Decoder<PUBLIC_KEY<KeyValue,Params,PrivateKey>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof PUBLIC_KEY<KeyValue,Params,PrivateKey>]: $.ASN1Encoder<PUBLIC_KEY<KeyValue,Params,PrivateKey>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &KeyValue
     */
    readonly "&KeyValue": KeyValue;
    /**
     * @summary &Params
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     */
    readonly "&paramPresence"?: ParamOptions;
    /**
     * @summary &keyUsage
     */
    readonly "&keyUsage"?: KeyUsage;
    /**
     * @summary &PrivateKey
     */
    readonly "&PrivateKey": PrivateKey;
};
/* END_OF_SYMBOL_DEFINITION PUBLIC_KEY */

/* eslint-enable */
