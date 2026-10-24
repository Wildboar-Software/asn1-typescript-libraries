/* eslint-disable */
import {
    ASN1Element as _Element,
    type BOOLEAN,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ContextCombination } from "../ServiceAdministration/ContextCombination.ta.mjs";
import { ContextProfile } from "../ServiceAdministration/ContextProfile.ta.mjs";
import { MatchingUse } from "../ServiceAdministration/MatchingUse.ta.mjs";
/**
 * @summary REQUEST_ATTRIBUTE
 * @description
 *
 * Information-object class documenting a request-attribute-profile.
 * `&includeSubtypes` DEFAULT FALSE. Empty selected/default value SETs have the
 * same empty-vs-omitted meanings as `RequestAttribute`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REQUEST-ATTRIBUTE ::= CLASS {
 *   &attributeType         ATTRIBUTE.&id,
 *   &SelectedValues        ATTRIBUTE.&Type                 type OPTIONAL,
 *   &DefaultValues         SEQUENCE {
 *     entryType              OBJECT-CLASS.&id            type OPTIONAL,
 *     values                 SEQUENCE OF ATTRIBUTE.&Type } OPTIONAL,
 *   &contexts              SEQUENCE OF ContextProfile      type OPTIONAL,
 *   &contextCombination    ContextCombination              type OPTIONAL,
 *   &MatchingUse           MatchingUse                     type OPTIONAL,
 *   &includeSubtypes       BOOLEAN                         DEFAULT FALSE }
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE         &attributeType
 *   [SELECTED VALUES       &SelectedValues]
 *   [DEFAULT VALUES        &DefaultValues]
 *   [CONTEXTS              &contexts]
 *   [CONTEXT COMBINATION   &contextCombination]
 *   [MATCHING USE          &MatchingUse]
 *   [INCLUDE SUBTYPES      &includeSubtypes] }
 * ```
 *
 * @interface
 */
export interface REQUEST_ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "REQUEST-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof REQUEST_ATTRIBUTE]: $.ASN1Decoder<
                REQUEST_ATTRIBUTE[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof REQUEST_ATTRIBUTE]: $.ASN1Encoder<
                REQUEST_ATTRIBUTE[_K]
            >;
        }
    >;
    /**
     * @summary &attributeType
     */
    readonly "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &SelectedValues
     */
    readonly "&SelectedValues"?: _Element;
    /**
     * @summary &DefaultValues
     */
    readonly "&DefaultValues"?: {
        entryType: OBJECT_IDENTIFIER;
        values: OPTIONAL<_Element[]>;
    };
    /**
     * @summary &contexts
     */
    readonly "&contexts"?: ContextProfile[];
    /**
     * @summary &contextCombination
     */
    readonly "&contextCombination"?: ContextCombination;
    /**
     * @summary &MatchingUse
     */
    readonly "&MatchingUse"?: MatchingUse;
    /**
     * @summary &includeSubtypes
     */
    readonly "&includeSubtypes"?: BOOLEAN;
}

/* eslint-enable */
