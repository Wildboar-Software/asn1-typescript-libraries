/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Code } from "../Notification-class-asn1-97/Code.ta.mjs";

/**
 * @summary NOTIFICATION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NOTIFICATION ::= CLASS {
 *     &ArgumentType OPTIONAL,
 *     &argumentTypeOptional BOOLEAN OPTIONAL,
 *     &notificationCode Code UNIQUE
 * }
 * WITH SYNTAX {
 *     [
 *         ARGUMENT &ArgumentType [OPTIONAL &argumentTypeOptional]
 *     ]
 *     CODE &notificationCode
 * }
 * ```
 * 
 * @interface
 */
export
interface NOTIFICATION<
    ArgumentType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NOTIFICATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NOTIFICATION<ArgumentType>]: $.ASN1Decoder<NOTIFICATION<ArgumentType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NOTIFICATION<ArgumentType>]: $.ASN1Encoder<NOTIFICATION<ArgumentType>[_K]>;
    }>;
    /**
     * @summary &ArgumentType
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &argumentTypeOptional
     */
    readonly "&argumentTypeOptional"?: BOOLEAN;
    /**
     * @summary &notificationCode
     */
    readonly "&notificationCode"?: Code;
};

/* eslint-enable */
