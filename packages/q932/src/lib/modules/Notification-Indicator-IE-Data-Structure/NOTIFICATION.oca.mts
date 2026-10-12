/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { Code } from "../Notification-Indicator-IE-Data-Structure/Code.ta.mjs";


/**
 * @summary NOTIFICATION
 * @description
 * 
 * Information object class for one notification carried in the Notification
 * indicator information element. `&operationCode` is a local integer or a
 * global object identifier. `&ArgumentType` is the value that follows ARGUMENT
 * in the notification definition.
 *
 * Notifications do not change call state, need no response, and may be
 * discarded. Call-related notifications use an active call reference, in the
 * call-control message when they coincide with establishment or clearing, and
 * otherwise in NOTIFY. Call-independent notifications use NOTIFY on the dummy
 * call reference. Use of the full procedure in the user-to-network direction is
 * for further study.
 *
 * When octet 3 of the Notification indicator is the discriminator for an ASN.1
 * component (description value 3, or 64 for ISO), octets 4 onward are a
 * `NotificationDataStructure`. Non-standardized VPN notifications use that
 * structure, an object-identifier notification type, and only the discriminator
 * in the description field.
 *
 * ITU-T Rec. Q.932 (05/1998) §8.2.8, §9, and Annex D, D.5.2; ITU-T Rec. Q.932
 * (1998) Amd.1 (06/2000) Table 8-14 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NOTIFICATION ::= CLASS {
 *   &ArgumentType   OPTIONAL,
 *   &operationCode  Code UNIQUE OPTIONAL
 * }WITH SYNTAX {[ARGUMENT &ArgumentType]
 *               [CODE &operationCode]
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
     * Type of the notification argument. Omitted from the information object
     * when the notification has no argument. ITU-T Rec. Q.932 (1998) Amd.1
     * (06/2000) Table 8-14 bis.
     * 
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &operationCode
     * @description
     * 
     * Local integer or global object identifier that identifies the
     * notification. Non-standardized VPN notifications use an object
     * identifier. ITU-T Rec. Q.932 (05/1998) Annex D, D.5.2.
     * 
     */
    readonly "&operationCode"?: Code;
};

/* eslint-enable */
