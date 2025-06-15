/* eslint-disable */
import * as $ from "asn1-ts/dist/functional.mjs";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";
import { RuleIdentifier } from "../InformationFramework/RuleIdentifier.ta.mjs";
/**
 * @summary STRUCTURE_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * STRUCTURE-RULE ::= CLASS {
 *   &nameForm               NAME-FORM,
 *   &SuperiorStructureRules STRUCTURE-RULE.&id OPTIONAL,
 *   &id                     RuleIdentifier }
 * WITH SYNTAX {
 *   NAME FORM               &nameForm
 *   [SUPERIOR RULES         &SuperiorStructureRules]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface STRUCTURE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "STRUCTURE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof STRUCTURE_RULE]: $.ASN1Decoder<STRUCTURE_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof STRUCTURE_RULE]: $.ASN1Encoder<STRUCTURE_RULE[_K]>;
        }
    >;
    /**
     * @summary &nameForm
     */
    readonly "&nameForm"?: NAME_FORM;
    /**
     * @summary &SuperiorStructureRules
     */
    readonly "&SuperiorStructureRules"?: RuleIdentifier;
    /**
     * @summary &id
     */
    readonly "&id"?: RuleIdentifier;
}

/* eslint-enable */
