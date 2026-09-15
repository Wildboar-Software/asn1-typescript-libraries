/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
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
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { Journal_Variable, _decode_Journal_Variable, _encode_Journal_Variable } from "../MMS-Object-Module-1/Journal-Variable.ta.mjs";
// export { Journal_Variable, _decode_Journal_Variable, _encode_Journal_Variable } from "../MMS-Object-Module-1/Journal-Variable.ta.mjs";


/**
 * @summary JOURNAL_ENTRY
 * @description
 * 
 * One Journal record: annotation text,
 * event-data (transition plus optional variables), or data (variables
 * only). &entry plus &timeStamp uniquely identify it within the Journal.
 * ISO 9506-1:2003 §23.1.2.
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
     * @description
     *
     * Containing Journal. ISO 9506-1:2003 §23.1.2.1.
     *
     */
    readonly "&journal"?: ObjectName;
    /**
     * @summary &entry
     * @description
     *
     * Server-assigned id unique within the Journal; used when timestamps
     * collide. Never changed. ISO 9506-1:2003 §23.1.2.2.
     *
     */
    readonly "&entry"?: OCTET_STRING;
    /**
     * @summary &clientApplication
     * @description
     *
     * AP that caused creation of this entry. ISO 9506-1:2003 §23.1.2.3.
     *
     */
    readonly "&clientApplication"?: ApplicationReference;
    /**
     * @summary &timeStamp
     * @description
     *
     * Time of day the entry was created (intended as time of the recorded
     * condition). ISO 9506-1:2003 §23.1.2.4.
     *
     */
    readonly "&timeStamp"?: TimeOfDay;
    /**
     * @summary &orderOfReceipt
     * @description
     *
     * Monotonic order among entries with the same timestamp and journal. ISO
     * 9506-1:2003 §23.1.2.5.
     *
     */
    readonly "&orderOfReceipt"?: INTEGER;
    /**
     * @summary &informationType
     * @description
     *
     * annotation (text), event-data (event + optional variables), or data
     * (variables). ISO 9506-1:2003 §23.1.2.6.
     *
     */
    readonly "&informationType"?: JOURNAL_ENTRY_informationType;
    /**
     * @summary &textComment
     * @description
     *
     * annotation only: comment, 0..255 characters. ISO 9506-1:2003 §23.1.2.7.
     *
     */
    readonly "&textComment"?: MMS255String;
    /**
     * @summary &eventTransitionRecord
     * @description
     *
     * event-data only: Event Condition name and resulting EC-State. ISO
     * 9506-1:2003 §23.1.2.8.
     *
     */
    readonly "&eventTransitionRecord"?: { name: OPTIONAL<ObjectName>; currentState: OPTIONAL<EC_State> };
    /**
     * @summary &journalVariables
     * @description
     *
     * data or event-data: zero or more tagged values. ISO 9506-1:2003
     * §23.1.2.9.
     *
     */
    readonly "&journalVariables"?: Journal_Variable[];
}

/**
 * @summary JOURNAL_ENTRY_informationType
 * @description
 *
 * One Journal record: annotation text,
 * event-data (transition plus optional variables), or data (variables
 * only). &entry plus &timeStamp uniquely identify it within the Journal.
 * ISO 9506-1:2003 §23.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JOURNAL-ENTRY.&informationType ::= ENUMERATED {
 *     annotation,
 *     event-data,
 *     data }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_JOURNAL_ENTRY_informationType {
    annotation = 0,
    event_data = 1,
    data = 2,
}

/**
 * @summary JOURNAL_ENTRY_informationType
 * @enum {number}
 */
export
type JOURNAL_ENTRY_informationType = _enum_for_JOURNAL_ENTRY_informationType;

/**
 * @summary JOURNAL_ENTRY_informationType
 * @enum {number}
 */
export
const JOURNAL_ENTRY_informationType = _enum_for_JOURNAL_ENTRY_informationType;

/**
 * @summary JOURNAL_ENTRY_informationType_annotation
 * @constant
 * @type {number}
 */
export
const JOURNAL_ENTRY_informationType_annotation: JOURNAL_ENTRY_informationType = JOURNAL_ENTRY_informationType.annotation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary JOURNAL_ENTRY_informationType_event_data
 * @constant
 * @type {number}
 */
export
const JOURNAL_ENTRY_informationType_event_data: JOURNAL_ENTRY_informationType = JOURNAL_ENTRY_informationType.event_data; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary JOURNAL_ENTRY_informationType_data
 * @constant
 * @type {number}
 */
export
const JOURNAL_ENTRY_informationType_data: JOURNAL_ENTRY_informationType = JOURNAL_ENTRY_informationType.data; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
