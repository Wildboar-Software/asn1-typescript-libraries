/* eslint-disable */
import {
    type IA5String,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";


/**
 * @summary METHOD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * METHOD ::= CLASS {
 *   &InputAttributes   ATTRIBUTE OPTIONAL,
 *   &SpecificInput     type OPTIONAL,
 *   &OutputAttributes  ATTRIBUTE OPTIONAL,
 *   &SpecificOutput    type OPTIONAL,
 *   &description       IA5String OPTIONAL,
 *   --EDITOR: newlines are used later on when describing the BEHAVIOUR
 *   --but newlines are not allowed by PrintableString.
 *   &id                OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [INPUT ATTRIBUTES &InputAttributes]
 *   [SPECIFIC-INPUT &SpecificInput]
 *   [OUTPUT ATTRIBUTES &OutputAttributes]
 *   [SPECIFIC-OUTPUT &SpecificOutput]
 *   [BEHAVIOUR &description]
 *   ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface METHOD<
    SpecificInput = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    SpecificOutput = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "METHOD";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof METHOD<SpecificInput,SpecificOutput>]: $.ASN1Decoder<METHOD<SpecificInput,SpecificOutput>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof METHOD<SpecificInput,SpecificOutput>]: $.ASN1Encoder<METHOD<SpecificInput,SpecificOutput>[_K]>;
    }>;
    /**
     * @summary &InputAttributes
     */
    readonly "&InputAttributes"?: ATTRIBUTE[];
    /**
     * @summary &SpecificInput
     */
    readonly "&SpecificInput": SpecificInput;
    /**
     * @summary &OutputAttributes
     */
    readonly "&OutputAttributes"?: ATTRIBUTE[];
    /**
     * @summary &SpecificOutput
     */
    readonly "&SpecificOutput": SpecificOutput;
    /**
     * @summary &description
     */
    readonly "&description"?: IA5String;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
