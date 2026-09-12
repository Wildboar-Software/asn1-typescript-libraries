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
import { ULState, ULState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_uploading /* IMPORTED_LONG_NAMED_INTEGER */, uploading /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_uploaded /* IMPORTED_LONG_NAMED_INTEGER */, uploaded /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u1 /* IMPORTED_LONG_NAMED_INTEGER */, u1 /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u2 /* IMPORTED_LONG_NAMED_INTEGER */, u2 /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u3 /* IMPORTED_LONG_NAMED_INTEGER */, u3 /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u4 /* IMPORTED_LONG_NAMED_INTEGER */, u4 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ULState, _encode_ULState } from "../MMS-Object-Module-1/ULState.ta.mjs";
// export { ULState, ULState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_uploading /* IMPORTED_LONG_NAMED_INTEGER */, uploading /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_uploaded /* IMPORTED_LONG_NAMED_INTEGER */, uploaded /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u1 /* IMPORTED_LONG_NAMED_INTEGER */, u1 /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u2 /* IMPORTED_LONG_NAMED_INTEGER */, u2 /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u3 /* IMPORTED_LONG_NAMED_INTEGER */, u3 /* IMPORTED_SHORT_NAMED_INTEGER */, ULState_u4 /* IMPORTED_LONG_NAMED_INTEGER */, u4 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ULState, _encode_ULState } from "../MMS-Object-Module-1/ULState.ta.mjs";


/**
 * @summary ULSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ULSM ::= CLASS {
 *     &ulsmID          INTEGER UNIQUE,
 *     -- shall be unique among all ULSM's within this application association
 *     &domain          Identifier,
 *     &ulsmState       ULState
 * }
 * ```
 * 
 * @interface
 */
export
interface ULSM {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ULSM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ULSM]: $.ASN1Decoder<ULSM[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ULSM]: $.ASN1Encoder<ULSM[_K]>;
    }>;
    /**
     * @summary &ulsmID
     */
    readonly "&ulsmID"?: INTEGER;
    /**
     * @summary &domain
     */
    readonly "&domain"?: Identifier;
    /**
     * @summary &ulsmState
     */
    readonly "&ulsmState"?: ULState;
};

/* eslint-enable */
