/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
    BOOLEAN,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";
// export { CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";
import { DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
// export { DialogueMode, _enum_for_DialogueMode, DialogueMode_structured /* IMPORTED_LONG_ENUMERATION_ITEM */, structured /* IMPORTED_SHORT_ENUMERATION_ITEM */, DialogueMode_unstructured /* IMPORTED_LONG_ENUMERATION_ITEM */, unstructured /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DialogueMode, _encode_DialogueMode } from "../TC-Notation-Extensions/DialogueMode.ta.mjs";
import { Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";
// export { Termination, _enum_for_Termination, Termination_basic /* IMPORTED_LONG_ENUMERATION_ITEM */, basic /* IMPORTED_SHORT_ENUMERATION_ITEM */, Termination_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Termination, _encode_Termination } from "../TC-Notation-Extensions/Termination.ta.mjs";


/**
 * @summary APPLICATION_CONTEXT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APPLICATION-CONTEXT ::= CLASS {
 *   &associationContract           CONTRACT,
 *   &dialogueMode                  DialogueMode,
 *   &termination                   Termination OPTIONAL,
 *   &componentGrouping             BOOLEAN DEFAULT TRUE,
 *   &dialogueAndComponentGrouping  BOOLEAN DEFAULT TRUE,
 *   &AdditionalASEs                OBJECT IDENTIFIER OPTIONAL,
 *   &AbstractSyntaxes              ABSTRACT-SYNTAX,
 *   &applicationContextName        OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   CONTRACT &associationContract
 *   DIALOGUE MODE &dialogueMode
 *   [TERMINATION &termination]
 *   [COMPONENT GROUPING ALLOWED &componentGrouping]
 *   [DIALOGUE WITH COMPONENTS ALLOWED &dialogueAndComponentGrouping]
 *   [ADDITIONAL ASES &AdditionalASEs]
 *   ABSTRACT SYNTAXES &AbstractSyntaxes
 *   APPLICATION CONTEXT NAME &applicationContextName
 * }
 * ```
 * 
 * @interface
 */
export
interface APPLICATION_CONTEXT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "APPLICATION-CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof APPLICATION_CONTEXT]: $.ASN1Decoder<APPLICATION_CONTEXT[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof APPLICATION_CONTEXT]: $.ASN1Encoder<APPLICATION_CONTEXT[_K]>;
    }>;
    /**
     * @summary &associationContract
     */
    readonly "&associationContract"?: CONTRACT;
    /**
     * @summary &dialogueMode
     */
    readonly "&dialogueMode"?: DialogueMode;
    /**
     * @summary &termination
     */
    readonly "&termination"?: Termination;
    /**
     * @summary &componentGrouping
     */
    readonly "&componentGrouping"?: BOOLEAN;
    /**
     * @summary &dialogueAndComponentGrouping
     */
    readonly "&dialogueAndComponentGrouping"?: BOOLEAN;
    /**
     * @summary &AdditionalASEs
     */
    readonly "&AdditionalASEs"?: OBJECT_IDENTIFIER;
    /**
     * @summary &AbstractSyntaxes
     */
    readonly "&AbstractSyntaxes"?: ABSTRACT_SYNTAX[];
    /**
     * @summary &applicationContextName
     */
    readonly "&applicationContextName"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
