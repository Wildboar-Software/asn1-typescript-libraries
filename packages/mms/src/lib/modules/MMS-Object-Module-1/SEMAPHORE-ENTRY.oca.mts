/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    NULL,
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
 * One owner or waiter of a semaphore.
 * Created by TakeControl, AttachToSemaphore, or locally. simple vs
 * modifier class; queued/owner/hung entry state. ISO 9506-1:2003 §16.1.3.
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
     * @description
     *
     * Unique among entries of the parent semaphore. ISO 9506-1:2003 §16.1.3.1.
     *
     */
    readonly "&entryID"?: OCTET_STRING;
    /**
     * @summary &class
     * @description
     *
     * modifier if created by AttachToSemaphore; else simple. ISO 9506-1:2003
     * §16.1.3.2.
     *
     */
    readonly "&class"?: SEMAPHORE_ENTRY_class;
    /**
     * @summary &semaphore
     * @description
     *
     * Semaphore requested or owned. ISO 9506-1:2003 §16.1.3.3.
     *
     */
    readonly "&semaphore"?: Identifier;
    /**
     * @summary &requester
     * @description
     *
     * Application Process that created this entry. ISO 9506-1:2003 §16.1.3.4.
     *
     */
    readonly "&requester"?: ApplicationReference;
    /**
     * @summary &aaIdentifier
     * @description
     *
     * AA on which the entry was created. Not reported by MMS. ISO 9506-1:2003
     * §16.1.3.5.
     *
     */
    readonly "&aaIdentifier"?: INTEGER;
    /**
     * @summary &invokeID
     * @description
     *
     * Transaction of the TakeControl or modified service. ISO 9506-1:2003
     * §16.1.3.6.
     *
     */
    readonly "&invokeID"?: INTEGER;
    /**
     * @summary &named-token
     * @description
     *
     * Pool semaphore only: related named token. ISO 9506-1:2003 §16.1.3.7.
     *
     */
    readonly "&named-token"?: Identifier;
    /**
     * @summary &priority
     * @description
     *
     * Queue priority 0..127 (0 highest, 64 normal). Treatment is a local
     * matter. ISO 9506-1:2003 §16.1.3.8.
     *
     */
    readonly "&priority"?: Priority;
    /**
     * @summary &entryState
     * @description
     *
     * queued (in requester list), owner (AA still up), or hung (AA lost). ISO
     * 9506-1:2003 §16.1.3.9.
     *
     */
    readonly "&entryState"?: SEMAPHORE_ENTRY_entryState;
    /**
     * @summary &remainingAcqDelay
     * @description
     *
     * Time a queued entry may wait, or forever. Only if queued. ISO 9506-1:2003
     * §16.1.3.10.
     *
     */
    readonly "&remainingAcqDelay"?: ({ time: Unsigned32 } | { forever: NULL });
    /**
     * @summary &remainingTimeOut
     * @description
     *
     * Ownership time remaining, or forever. Only if owner or hung. ISO
     * 9506-1:2003 §16.1.3.
     *
     */
    readonly "&remainingTimeOut"?: ({ time: Unsigned32 } | { forever: NULL });
    /**
     * @summary &abortOnTimeOut
     * @description
     *
     * Whether timeout aborts the modified service. ISO 9506-1:2003 §16.1.3.
     *
     */
    readonly "&abortOnTimeOut"?: BOOLEAN;
    /**
     * @summary &relinquishIfLost
     * @description
     *
     * Whether ownership is relinquished if the AA is lost (else hung). ISO
     * 9506-1:2003 §16.1.3, §16.1.
     *
     */
    readonly "&relinquishIfLost"?: BOOLEAN;
}

/**
 * @summary SEMAPHORE_ENTRY_class
 * @description
 *
 * One owner or waiter of a semaphore.
 * Created by TakeControl, AttachToSemaphore, or locally. simple vs
 * modifier class; queued/owner/hung entry state. ISO 9506-1:2003 §16.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEMAPHORE-ENTRY.&class ::= ENUMERATED {
 *     simple,
 *     modifier }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_SEMAPHORE_ENTRY_class {
    simple = 0,
    modifier = 1,
}

/**
 * @summary SEMAPHORE_ENTRY_class
 * @enum {number}
 */
export
type SEMAPHORE_ENTRY_class = _enum_for_SEMAPHORE_ENTRY_class;

/**
 * @summary SEMAPHORE_ENTRY_class
 * @enum {number}
 */
export
const SEMAPHORE_ENTRY_class = _enum_for_SEMAPHORE_ENTRY_class;

/**
 * @summary SEMAPHORE_ENTRY_class_simple
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_ENTRY_class_simple: SEMAPHORE_ENTRY_class = SEMAPHORE_ENTRY_class.simple; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary SEMAPHORE_ENTRY_class_modifier
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_ENTRY_class_modifier: SEMAPHORE_ENTRY_class = SEMAPHORE_ENTRY_class.modifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary SEMAPHORE_ENTRY_entryState
 * @description
 *
 * One owner or waiter of a semaphore.
 * Created by TakeControl, AttachToSemaphore, or locally. simple vs
 * modifier class; queued/owner/hung entry state. ISO 9506-1:2003 §16.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEMAPHORE-ENTRY.&entryState ::= ENUMERATED {
 *     queued,
 *     owner,
 *     hung }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_SEMAPHORE_ENTRY_entryState {
    queued = 0,
    owner = 1,
    hung = 2,
}

/**
 * @summary SEMAPHORE_ENTRY_entryState
 * @enum {number}
 */
export
type SEMAPHORE_ENTRY_entryState = _enum_for_SEMAPHORE_ENTRY_entryState;

/**
 * @summary SEMAPHORE_ENTRY_entryState
 * @enum {number}
 */
export
const SEMAPHORE_ENTRY_entryState = _enum_for_SEMAPHORE_ENTRY_entryState;

/**
 * @summary SEMAPHORE_ENTRY_entryState_queued
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_ENTRY_entryState_queued: SEMAPHORE_ENTRY_entryState = SEMAPHORE_ENTRY_entryState.queued; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary SEMAPHORE_ENTRY_entryState_owner
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_ENTRY_entryState_owner: SEMAPHORE_ENTRY_entryState = SEMAPHORE_ENTRY_entryState.owner; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary SEMAPHORE_ENTRY_entryState_hung
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_ENTRY_entryState_hung: SEMAPHORE_ENTRY_entryState = SEMAPHORE_ENTRY_entryState.hung; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
