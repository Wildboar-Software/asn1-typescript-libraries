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
import { ModifierStep, _decode_ModifierStep, _encode_ModifierStep } from "../MMS-Object-Module-1/ModifierStep.ta.mjs";
// export { ModifierStep, _decode_ModifierStep, _encode_ModifierStep } from "../MMS-Object-Module-1/ModifierStep.ta.mjs";
import { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";
// export { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";


/**
 * @summary TRANSACTION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRANSACTION ::= CLASS {
 *     &invokeID                   INTEGER UNIQUE,
 *     &Pre-executionModifiers     ModifierStep OPTIONAL,
 *     &currentModifier            CHOICE {
 *         modifier                    ModifierStep,
 *         none                        NULL },
 *     &confirmedService-Request   ConfirmedServiceRequest,
 *     &Post-executionModifiers    ModifierStep OPTIONAL,
 *     &cancelable                 BOOLEAN
 * }
 * ```
 * 
 * @interface
 */
export
interface TRANSACTION {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "TRANSACTION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof TRANSACTION]: $.ASN1Decoder<TRANSACTION[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof TRANSACTION]: $.ASN1Encoder<TRANSACTION[_K]>;
    }>;
    /**
     * @summary &invokeID
     */
    readonly "&invokeID"?: INTEGER;
    /**
     * @summary &Pre-executionModifiers
     */
    readonly "&Pre-executionModifiers"?: ModifierStep;
    /**
     * @summary &currentModifier
     */
    readonly "&currentModifier"?: ({ modifier: ModifierStep } | { none: NULL });
    /**
     * @summary &confirmedService-Request
     */
    readonly "&confirmedService-Request"?: ConfirmedServiceRequest;
    /**
     * @summary &Post-executionModifiers
     */
    readonly "&Post-executionModifiers"?: ModifierStep;
    /**
     * @summary &cancelable
     */
    readonly "&cancelable"?: BOOLEAN;
};

/* eslint-enable */
