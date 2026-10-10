/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
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
import { ModifierStep, _decode_ModifierStep, _encode_ModifierStep } from "../MMS-Object-Module-1/ModifierStep.ta.mjs";
import { ConfirmedServiceRequest, _decode_ConfirmedServiceRequest, _encode_ConfirmedServiceRequest } from "../ISO-9506-MMS-1/ConfirmedServiceRequest.ta.mjs";


/**
 * @summary TRANSACTION
 * @description
 * 
 * Governs processing of one confirmed MMS
 * service indication. Created when the VMD receives a confirmed-service
 * indication (or as part of event-action processing) and deleted after
 * the response primitive. Count is bounded by negotiated outstanding
 * services. ISO 9506-1:2003 §7.3.
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
     * @description
     *
     * Integer identifying this transaction on its Application Association
     * (unique on that AA). ISO 9506-1:2003 §7.3.1.1.
     *
     */
    readonly "&invokeID"?: INTEGER;
    /**
     * @summary &Pre-executionModifiers
     * @description
     *
     * Ordered modifiers that must succeed before the confirmed service runs.
     * May be empty. ISO 9506-1:2003 §7.3.1.2.
     *
     */
    readonly "&Pre-executionModifiers"?: ModifierStep;
    /**
     * @summary &currentModifier
     * @description
     *
     * Semaphore-Entry or Event-Enrollment of the modifier now executing; none
     * if the pre-execution list is empty. ISO 9506-1:2003 §7.3.1.3.
     *
     */
    readonly "&currentModifier"?: ({ modifier: ModifierStep } | { none: NULL });
    /**
     * @summary &confirmedService-Request
     * @description
     *
     * Pending confirmed service and its arguments. ISO 9506-1:2003 §7.3.1.4.
     *
     */
    readonly "&confirmedService-Request"?: ConfirmedServiceRequest;
    /**
     * @summary &Post-executionModifiers
     * @description
     *
     * Semaphore-Entry objects owned because of processed AttachToSemaphore
     * modifiers (reverse of pre-execution order). Event-condition modifiers do
     * not appear. ISO 9506-1:2003 §7.3.1.5.
     *
     */
    readonly "&Post-executionModifiers"?: ModifierStep;
    /**
     * @summary &cancelable
     * @description
     *
     * Whether Cancel may abort this service. Initially true; the server may set
     * false after pre-execution modifiers, and shall have set false before
     * post-execution. ISO 9506-1:2003 §7.3.1.6, §7.3.2.6.
     *
     */
    readonly "&cancelable"?: BOOLEAN;
};

/* eslint-enable */
