/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import { type APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca.mjs";
/**
 * @summary OP_BINDING_COOP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OP-BINDING-COOP ::= CLASS {
 *   &applContext  APPLICATION-CONTEXT,
 *   &Operations   OPERATION OPTIONAL }
 * WITH SYNTAX {
 *                 &applContext
 *   [APPLIES TO   &Operations] }
 * ```
 *
 * @interface
 */
export interface OP_BINDING_COOP {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OP-BINDING-COOP";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OP_BINDING_COOP]: $.ASN1Decoder<OP_BINDING_COOP[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OP_BINDING_COOP]: $.ASN1Encoder<OP_BINDING_COOP[_K]>;
        }
    >;
    /**
     * @summary &applContext
     */
    readonly "&applContext"?: APPLICATION_CONTEXT;
    /**
     * @summary &Operations
     */
    readonly "&Operations"?: OPERATION[];
}

/* eslint-enable */
