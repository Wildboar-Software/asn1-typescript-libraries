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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { CONTRACT } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONTRACT.oca.mjs';
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
/* START_OF_SYMBOL_DEFINITION APPLICATION_CONTEXT */
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
     * @summary &dialogueMode
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
     * @summary &applicationContextName
     */
    readonly '&applicationContextName'?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION APPLICATION_CONTEXT */

/* eslint-enable */
