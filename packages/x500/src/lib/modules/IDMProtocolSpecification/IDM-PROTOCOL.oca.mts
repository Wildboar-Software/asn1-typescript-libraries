/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
/**
 * @summary IDM_PROTOCOL
 * @description
 *
 * Bind operation, request/response operations, and a unique
 * `protocolID`. The ID also selects the application context, so there
 * is one IDM-PROTOCOL per AC. Bind ARGUMENT/RESULT/ERRORS map to
 * bind / bindResult / bindError PDUs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDM-PROTOCOL ::= CLASS {
 *   &bind-operation  OPERATION,
 *   &Operations      OPERATION,
 *   &id              OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   BIND-OPERATION   &bind-operation
 *   OPERATIONS       &Operations
 *   ID               &id }
 * ```
 *
 * @interface
 */
export interface IDM_PROTOCOL {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "IDM-PROTOCOL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof IDM_PROTOCOL]: $.ASN1Decoder<IDM_PROTOCOL[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof IDM_PROTOCOL]: $.ASN1Encoder<IDM_PROTOCOL[_K]>;
        }
    >;
    /**
     * @summary &bind-operation
     * @description
     *
     * Bind OPERATION whose ARGUMENT/RESULT/ERRORS map to bind /
     * bindResult / bindError PDUs.
     */
    readonly "&bind-operation"?: OPERATION;
    /**
     * @summary &Operations
     * @description
     *
     * Operations allowed in request / result / error PDUs. Set membership
     * is not ordered.
     */
    readonly "&Operations"?: OPERATION[];
    /**
     * @summary &id
     * @description
     *
     * UNIQUE protocol OID. Also selects the application context — one
     * IDM-PROTOCOL per AC.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
