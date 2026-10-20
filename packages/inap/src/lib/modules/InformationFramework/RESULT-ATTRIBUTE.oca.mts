/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { OutputValues } from "../InformationFramework/OutputValues.ta.mjs";
// export { OutputValues, _decode_OutputValues, _encode_OutputValues } from "../InformationFramework/OutputValues.ta.mjs";
import { ContextProfile } from "../InformationFramework/ContextProfile.ta.mjs";
// export { ContextProfile, _decode_ContextProfile, _encode_ContextProfile } from "../InformationFramework/ContextProfile.ta.mjs";


/**
 * @summary RESULT_ATTRIBUTE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RESULT-ATTRIBUTE ::= CLASS {
 *   &attributeType  ATTRIBUTE.&id,
 *   &outputValues   OutputValues OPTIONAL,
 *   &contexts       ContextProfile OPTIONAL
 * }
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE &attributeType
 *   [OUTPUT VALUES &outputValues]
 *   [CONTEXTS &contexts]
 * }
 * ```
 * 
 * @interface
 */
export
interface RESULT_ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "RESULT-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof RESULT_ATTRIBUTE]: $.ASN1Decoder<RESULT_ATTRIBUTE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof RESULT_ATTRIBUTE]: $.ASN1Encoder<RESULT_ATTRIBUTE[_K]>;
    }>;
    /**
     * @summary &attributeType
     */
    readonly "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &outputValues
     */
    readonly "&outputValues"?: OutputValues;
    /**
     * @summary &contexts
     */
    readonly "&contexts"?: ContextProfile;
};

/* eslint-enable */
