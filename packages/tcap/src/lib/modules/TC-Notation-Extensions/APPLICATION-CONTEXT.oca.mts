/* eslint-disable */
import {
    BOOLEAN,
    OBJECT_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import type { CONTRACT } from '@wildboar/rose';
import {
    DialogueMode,
    _enum_for_DialogueMode,
    _decode_DialogueMode,
    _encode_DialogueMode,
} from '../TC-Notation-Extensions/DialogueMode.ta.mjs';
import {
    Termination,
    _enum_for_Termination,
    _decode_Termination,
    _encode_Termination,
} from '../TC-Notation-Extensions/Termination.ta.mjs';

/**
 * @summary APPLICATION_CONTEXT
 * @description
 *
 * Information object class for a TC application context.
 * `&applicationContextName` is the OBJECT IDENTIFIER carried
 * in AARQ, AARE, and AUDT. `&dialogueMode` selects structured
 * vs unstructured dialogue (Q.773 §3.2). The class itself is
 * defined in Q.775 / Q.680–Q.683, not in Q.773. ITU-T Rec.
 * Q.773 (06/97)
 * [§3.2](https://www.itu.int/rec/T-REC-Q.773-199706-I).
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
export interface APPLICATION_CONTEXT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'APPLICATION-CONTEXT';
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
     * @summary &associationContract
     */
    readonly '&associationContract'?: CONTRACT;
    /**
     * @summary `&dialogueMode`
     * @description
     *
     * Structured (`DialoguePDU`) or unstructured
     * (`UniDialoguePDU`) per Q.773 §3.2.
     */
    readonly '&dialogueMode'?: DialogueMode;
    /**
     * @summary &termination
     */
    readonly '&termination'?: Termination;
    /**
     * @summary &componentGrouping
     */
    readonly '&componentGrouping'?: BOOLEAN;
    /**
     * @summary &dialogueAndComponentGrouping
     */
    readonly '&dialogueAndComponentGrouping'?: BOOLEAN;
    /**
     * @summary &AdditionalASEs
     */
    readonly '&AdditionalASEs'?: OBJECT_IDENTIFIER;
    /**
     * @summary &AbstractSyntaxes
     */
    readonly '&AbstractSyntaxes'?: ABSTRACT_SYNTAX[];
    /**
     * @summary `&applicationContextName`
     * @description
     *
     * Value of `application-context-name` in AARQ, AARE, and
     * AUDT (Q.773 Tables 38, 39, 61).
     */
    readonly '&applicationContextName'?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
