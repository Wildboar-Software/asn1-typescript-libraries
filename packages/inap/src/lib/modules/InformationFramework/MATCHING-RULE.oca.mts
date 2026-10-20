/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";


/**
 * @summary MATCHING_RULE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MATCHING-RULE ::= CLASS {
 *   &ParentMatchingRules   MATCHING-RULE.&id OPTIONAL,
 *   &AssertionType         OPTIONAL,
 *   &uniqueMatchIndicator  ATTRIBUTE.&id OPTIONAL,
 *   &id                    OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [PARENT &ParentMatchingRules]
 *   [SYNTAX &AssertionType]
 *   [UNIQUE-MATCH-INDICATOR &uniqueMatchIndicator]
 *   ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface MATCHING_RULE<
    AssertionType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MATCHING-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Decoder<MATCHING_RULE<AssertionType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Encoder<MATCHING_RULE<AssertionType>[_K]>;
    }>;
    /**
     * @summary &ParentMatchingRules
     */
    readonly "&ParentMatchingRules"?: OBJECT_IDENTIFIER;
    /**
     * @summary &AssertionType
     */
    readonly "&AssertionType": AssertionType;
    /**
     * @summary &uniqueMatchIndicator
     */
    readonly "&uniqueMatchIndicator"?: OBJECT_IDENTIFIER;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
