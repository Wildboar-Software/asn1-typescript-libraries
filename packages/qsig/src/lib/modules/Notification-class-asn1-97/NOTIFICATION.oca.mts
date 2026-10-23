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
 * Class used to define a notification carried in the Notification indicator
 * (ECMA-165 Annex B §B.2, §11.3.4). A notification is one-way, does not change
 * state at the Q reference point, and may be discarded if the terminal does not
 * recognise it (§4.27).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
     * @description
     *
     * Additional data for this notification, carried as `notificationArgument`
     * (ECMA-165 §11.3.4). Omitted when the notification has none.
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &argumentTypeOptional
     * @description
     *
     * Table B.2 includes this boolean in the class syntax so the argument can
     * be marked optional. ECMA-165 does not define any other use of the field.
     */
    readonly "&argumentTypeOptional"?: BOOLEAN;
    /**
     * @summary &notificationCode
     * @description
     *
     * Value that identifies the notification: a local integer assigned by ITU-T
     * or by ISO, or a global object identifier, including a
     * manufacturer-specific notification (ECMA-165 §11.3.4, §9.3).
     */
    readonly "&notificationCode"?: Code;
};

/* eslint-enable */
