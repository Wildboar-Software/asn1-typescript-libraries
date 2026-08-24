/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
/**
 * @summary APPLICATION_CONTEXT
 * @description
 *
 * Abbreviated X.881 APPLICATION-CONTEXT: bind op, invokable ops, and
 * the AC name OID signalled in OSI Bind. Presentation-context list
 * has exactly two entries (ACSE AS + Directory AS) with distinct odd
 * PCIs. Simultaneous Bind attempts yield two associations, not one.
 * Unknown extra parameters shall be ignored (extensibility).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APPLICATION-CONTEXT ::= CLASS {
 *   &bind-operation          OPERATION,
 *   &Operations              OPERATION,
 *   &applicationContextName  OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   BIND-OPERATION &bind-operation
 *   OPERATIONS &Operations
 *   APPLICATION CONTEXT NAME &applicationContextName }
 * ```
 *
 * @interface
 */
export interface APPLICATION_CONTEXT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "APPLICATION-CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof APPLICATION_CONTEXT]: $.ASN1Decoder<
                APPLICATION_CONTEXT[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof APPLICATION_CONTEXT]: $.ASN1Encoder<
                APPLICATION_CONTEXT[_K]
            >;
        }
    >;
    /**
     * @summary &bind-operation
     * @description
     *
     * Bind OPERATION for this AC (directoryBind, dSABind, dSAShadowBind,
     * or dSAOperationalBindingManagementBind).
     */
    readonly "&bind-operation"?: OPERATION;
    /**
     * @summary &Operations
     * @description
     *
     * Invokable Directory operations. DISP ACs subset these (supplier vs
     * consumer); IDM DISP does not. Set membership is not ordered.
     */
    readonly "&Operations"?: OPERATION[];
    /**
     * @summary &applicationContextName
     * @description
     *
     * UNIQUE OID signalled in OSI Bind. Unknown name ⇒ BindError
     * `application-context-name-not-supported`.
     */
    readonly "&applicationContextName"?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
