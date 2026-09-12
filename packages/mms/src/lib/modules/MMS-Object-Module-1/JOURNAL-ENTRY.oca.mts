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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
import { MMS255String, _decode_MMS255String, _encode_MMS255String } from "../ISO-9506-MMS-1/MMS255String.ta.mjs";
// export { MMS255String, _decode_MMS255String, _encode_MMS255String } from "../ISO-9506-MMS-1/MMS255String.ta.mjs";
import { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { Journal_Variable, _decode_Journal_Variable, _encode_Journal_Variable } from "../MMS-Object-Module-1/Journal-Variable.ta.mjs";
// export { Journal_Variable, _decode_Journal_Variable, _encode_Journal_Variable } from "../MMS-Object-Module-1/Journal-Variable.ta.mjs";


/**
 * @summary JOURNAL_ENTRY
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JOURNAL-ENTRY ::= CLASS {
 *     &journal                   ObjectName,
 *     &entry                     OCTET STRING,
 *     &clientApplication         ApplicationReference,
 *     &timeStamp                 TimeOfDay,
 *     &orderOfReceipt            INTEGER UNIQUE,
 *     &informationType           ENUMERATED {
 *         annotation,
 *         event-data,
 *         data },
 *     -- The following attribute shall appear if and only if the
 *     -- value of &informationType is annotation.
 *     &textComment               MMS255String OPTIONAL,
 *     --The following attribute shall appear if and only if the
 *     -- value of &informationType is event-data.
 *     &eventTransitionRecord     SEQUENCE {
 *         name                      [0] ObjectName,
 *         currentState              [1] IMPLICIT EC-State
 *     } OPTIONAL,
 *     -- The following attribute shall appear if and only if the
 *     -- value of &informationType is data or event-data.
 *     &journalVariables          SEQUENCE OF Journal-Variable OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface JOURNAL_ENTRY {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "JOURNAL-ENTRY";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof JOURNAL_ENTRY]: $.ASN1Decoder<JOURNAL_ENTRY[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof JOURNAL_ENTRY]: $.ASN1Encoder<JOURNAL_ENTRY[_K]>;
    }>;
    /**
     * @summary &journal
     */
    readonly "&journal"?: ObjectName;
    /**
     * @summary &entry
     */
    readonly "&entry"?: OCTET_STRING;
    /**
     * @summary &clientApplication
     */
    readonly "&clientApplication"?: ApplicationReference;
    /**
     * @summary &timeStamp
     */
    readonly "&timeStamp"?: TimeOfDay;
    /**
     * @summary &orderOfReceipt
     */
    readonly "&orderOfReceipt"?: INTEGER;
    /**
     * @summary &informationType
     */
    readonly "&informationType"?: ENUMERATED;
    /**
     * @summary &textComment
     */
    readonly "&textComment"?: MMS255String;
    /**
     * @summary &eventTransitionRecord
     */
    readonly "&eventTransitionRecord"?: { name: OPTIONAL<ObjectName>; currentState: OPTIONAL<EC_State> };
    /**
     * @summary &journalVariables
     */
    readonly "&journalVariables"?: Journal_Variable[];
};

/* eslint-enable */
