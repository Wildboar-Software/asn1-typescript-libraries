/* eslint-disable */
import {
    INTEGER,
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { NAMED_TOKEN } from "../MMS-Object-Module-1/NAMED-TOKEN.oca.mjs";
import { SEMAPHORE_ENTRY } from "../MMS-Object-Module-1/SEMAPHORE-ENTRY.oca.mjs";


/**
 * @summary SEMAPHORE
 * @description
 * 
 * Queue processor with owners and requesters
 * (Semaphore-Entry objects). token = identical tokens with a max owner
 * count; pool = named tokens mapped to real resources (predefined only).
 * Always has a matching network-triggered Event Condition of the same
 * name. ISO 9506-1:2003 §16.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SEMAPHORE ::= CLASS {
 *     &name                   ObjectName,
 *     -- shall be unique among all semaphores within the VMD
 *     &accessControl          Identifier,
 *     &class                  ENUMERATED { token, pool },
 *     -- If the value of &class is token, the following two fields shall appear
 *     &numberOfTokens         INTEGER OPTIONAL,
 *     &numberOfOwnedTokens    INTEGER OPTIONAL,
 *     -- If the value of &class is pool, the following field shall appear
 *     &NamedTokens            NAMED-TOKEN OPTIONAL,
 *     &Owners                 SEMAPHORE-ENTRY OPTIONAL,
 *     &Requesters             SEMAPHORE-ENTRY OPTIONAL,
 *     &eventCondition         ObjectName
 * }
 * ```
 * 
 * @interface
 */
export
interface SEMAPHORE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SEMAPHORE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SEMAPHORE]: $.ASN1Decoder<SEMAPHORE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SEMAPHORE]: $.ASN1Encoder<SEMAPHORE[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * VMD-specific semaphore name. ISO 9506-1:2003 §16.1.1.1.
     *
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating TakeControl, delete, and ACL change. ISO 9506-1:2003
     * §16.1.1.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &class
     * @description
     *
     * token or pool. ISO 9506-1:2003 §16.1.1.3.
     *
     */
    readonly "&class"?: SEMAPHORE_class;
    /**
     * @summary &numberOfTokens
     * @description
     *
     * Token class: maximum owners. ISO 9506-1:2003 §16.1.1.4.
     *
     */
    readonly "&numberOfTokens"?: INTEGER;
    /**
     * @summary &numberOfOwnedTokens
     * @description
     *
     * Token class: currently owned tokens. ISO 9506-1:2003 §16.1.1.5.
     *
     */
    readonly "&numberOfOwnedTokens"?: INTEGER;
    /**
     * @summary &NamedTokens
     * @description
     *
     * Pool class: named tokens. ISO 9506-1:2003 §16.1.1.6.
     *
     */
    readonly "&NamedTokens"?: NAMED_TOKEN[];
    /**
     * @summary &Owners
     * @description
     *
     * Semaphore-Entry objects that own this semaphore. ISO 9506-1:2003
     * §16.1.1.7.
     *
     */
    readonly "&Owners"?: SEMAPHORE_ENTRY[];
    /**
     * @summary &Requesters
     * @description
     *
     * Semaphore-Entry objects waiting for control. ISO 9506-1:2003 §16.1.1.8.
     *
     */
    readonly "&Requesters"?: SEMAPHORE_ENTRY[];
    /**
     * @summary &eventCondition
     * @description
     *
     * Matching network-triggered Event Condition of the same name; delete =
     * never; disabled; normalPriority/ normalSeverity. ISO 9506-1:2003
     * §16.1.1.9.
     *
     */
    readonly "&eventCondition"?: ObjectName;
}

/**
 * @summary SEMAPHORE_class
 * @description
 *
 * Queue processor with owners and requesters
 * (Semaphore-Entry objects). token = identical tokens with a max owner
 * count; pool = named tokens mapped to real resources (predefined only).
 * Always has a matching network-triggered Event Condition of the same
 * name. ISO 9506-1:2003 §16.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEMAPHORE.&class ::= ENUMERATED {
 *     token,
 *     pool }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_SEMAPHORE_class {
    token = 0,
    pool = 1,
}

/**
 * @summary SEMAPHORE_class
 * @enum {number}
 */
export
type SEMAPHORE_class = _enum_for_SEMAPHORE_class;

/**
 * @summary SEMAPHORE_class
 * @enum {number}
 */
export
const SEMAPHORE_class = _enum_for_SEMAPHORE_class;

/**
 * @summary SEMAPHORE_class_token
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_class_token: SEMAPHORE_class = SEMAPHORE_class.token; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary SEMAPHORE_class_pool
 * @constant
 * @type {number}
 */
export
const SEMAPHORE_class_pool: SEMAPHORE_class = SEMAPHORE_class.pool; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
