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
import { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";


/**
 * @summary NAMED_VARIABLE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAMED-VARIABLE ::= CLASS {
 *     &name               ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl      Identifier,
 *     &typeDescription    TypeDescription,
 *     &value              Data,
 *     &accessMethod       ENUMERATED {
 *         public,
 *         anythingElse,
 *         ... },
 *     &address              Address OPTIONAL,
 *     -- The presence of this field shall correspond to the
 *     -- field &access Method having a value equal to public.
 *     -- The absence of this field shall correspond to the
 *     -- field &accessMethod having a value equal to anything except public.
 *     -- The following field shall occur
 *     -- if and only if the sem CBB has been negotiated.
 *     &meaning              ObjectName OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface NAMED_VARIABLE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAMED-VARIABLE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE]: $.ASN1Decoder<NAMED_VARIABLE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAMED_VARIABLE]: $.ASN1Encoder<NAMED_VARIABLE[_K]>;
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
     * @summary &typeDescription
     */
    readonly "&typeDescription"?: TypeDescription;
    /**
     * @summary &value
     */
    readonly "&value"?: Data;
    // FIXME: &accessMethod;
    /**
     * @summary &address
     */
    readonly "&address"?: Address;
    /**
     * @summary &meaning
     */
    readonly "&meaning"?: ObjectName;
};

/* eslint-enable */
