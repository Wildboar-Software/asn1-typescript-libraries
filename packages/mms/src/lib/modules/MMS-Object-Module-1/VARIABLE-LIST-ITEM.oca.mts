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
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";
// export { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";


/**
 * @summary VARIABLE_LIST_ITEM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VARIABLE-LIST-ITEM ::= CLASS {
 *     -- one and only one of the following two lines shall appear
 *     &unnamedItem        Address OPTIONAL,
 *     &namedItem          ObjectName OPTIONAL,
 *     -- the following specification may be included
 *     &alternateAccess      AlternateAccess OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface VARIABLE_LIST_ITEM {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "VARIABLE-LIST-ITEM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof VARIABLE_LIST_ITEM]: $.ASN1Decoder<VARIABLE_LIST_ITEM[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof VARIABLE_LIST_ITEM]: $.ASN1Encoder<VARIABLE_LIST_ITEM[_K]>;
    }>;
    /**
     * @summary &unnamedItem
     */
    readonly "&unnamedItem"?: Address;
    /**
     * @summary &namedItem
     */
    readonly "&namedItem"?: ObjectName;
    /**
     * @summary &alternateAccess
     */
    readonly "&alternateAccess"?: AlternateAccess;
};

/* eslint-enable */
