/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
/**
 * @summary DIT_CONTEXT_USE_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DIT-CONTEXT-USE-RULE ::= CLASS {
 *   &attributeType      ATTRIBUTE.&id UNIQUE,
 *   &Mandatory          CONTEXT OPTIONAL,
 *   &Optional           CONTEXT OPTIONAL}
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE      &attributeType
 *   [MANDATORY CONTEXTS &Mandatory]
 *   [OPTIONAL CONTEXTS  &Optional] }
 * ```
 *
 * @interface
 */
export interface DIT_CONTEXT_USE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DIT-CONTEXT-USE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof DIT_CONTEXT_USE_RULE]: $.ASN1Decoder<
                DIT_CONTEXT_USE_RULE[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof DIT_CONTEXT_USE_RULE]: $.ASN1Encoder<
                DIT_CONTEXT_USE_RULE[_K]
            >;
        }
    >;
    /**
     * @summary &attributeType
     */
    readonly "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Mandatory
     */
    readonly "&Mandatory"?: CONTEXT[];
    /**
     * @summary &Optional
     */
    readonly "&Optional"?: CONTEXT[];
}

/* eslint-enable */
