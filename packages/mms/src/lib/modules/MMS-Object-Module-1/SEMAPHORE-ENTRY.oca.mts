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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary SEMAPHORE_ENTRY
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SEMAPHORE-ENTRY ::= CLASS {
 *     &entryID            OCTET STRING,
 *     -- this value shall be unique to the semaphore object
 *     -- that is the parent of this object
 *     &class              ENUMERATED {
 *         simple,
 *         modifier },
 *     &semaphore          Identifier,
 *     &requester          ApplicationReference,
 *     &aaIdentifier       INTEGER,
 *     &invokeID           INTEGER,
 *     -- The following field shall appear only if the semaphore is a pool semaphore
 *     &named-token        Identifier OPTIONAL,
 *     &priority           Priority,
 *     &entryState         ENUMERATED {
 *         queued,
 *         owner,
 *         hung },
 *     -- The following field shall appear only if the entryState has the value queued.
 *     &remainingAcqDelay  CHOICE {
 *         time            Unsigned32,
 *         forever         NULL } OPTIONAL,
 *     -- The following field shall appear
 *     -- only if the entryState has the value owner or hung.
 *     &remainingTimeOut   CHOICE {
 *         time            Unsigned32,
 *         forever         NULL } OPTIONAL,
 *     &abortOnTimeOut     BOOLEAN,
 *     &relinquishIfLost   BOOLEAN
 * }
 * ```
 * 
 * @interface
 */
export
interface SEMAPHORE_ENTRY {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SEMAPHORE-ENTRY";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SEMAPHORE_ENTRY]: $.ASN1Decoder<SEMAPHORE_ENTRY[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SEMAPHORE_ENTRY]: $.ASN1Encoder<SEMAPHORE_ENTRY[_K]>;
    }>;
    /**
     * @summary &entryID
     */
    readonly "&entryID"?: OCTET_STRING;
    // FIXME: &class;
    /**
     * @summary &semaphore
     */
    readonly "&semaphore"?: Identifier;
    /**
     * @summary &requester
     */
    readonly "&requester"?: ApplicationReference;
    /**
     * @summary &aaIdentifier
     */
    readonly "&aaIdentifier"?: INTEGER;
    /**
     * @summary &invokeID
     */
    readonly "&invokeID"?: INTEGER;
    /**
     * @summary &named-token
     */
    readonly "&named-token"?: Identifier;
    /**
     * @summary &priority
     */
    readonly "&priority"?: Priority;
    // FIXME: &entryState;
    /**
     * @summary &remainingAcqDelay
     */
    readonly "&remainingAcqDelay"?: ({ time: Unsigned32 } | { forever: NULL });
    /**
     * @summary &remainingTimeOut
     */
    readonly "&remainingTimeOut"?: ({ time: Unsigned32 } | { forever: NULL });
    /**
     * @summary &abortOnTimeOut
     */
    readonly "&abortOnTimeOut"?: BOOLEAN;
    /**
     * @summary &relinquishIfLost
     */
    readonly "&relinquishIfLost"?: BOOLEAN;
};

/* eslint-enable */
