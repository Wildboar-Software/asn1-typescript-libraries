/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
// export { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { Control_State, Control_State_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlling /* IMPORTED_LONG_NAMED_INTEGER */, controlling /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlled /* IMPORTED_LONG_NAMED_INTEGER */, controlled /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Control_State, _encode_Control_State } from "../MMS-Object-Module-1/Control-State.ta.mjs";
// export { Control_State, Control_State_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlling /* IMPORTED_LONG_NAMED_INTEGER */, controlling /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlled /* IMPORTED_LONG_NAMED_INTEGER */, controlled /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Control_State, _encode_Control_State } from "../MMS-Object-Module-1/Control-State.ta.mjs";
import { Running_Mode, Running_Mode_free_run /* IMPORTED_LONG_NAMED_INTEGER */, free_run /* IMPORTED_SHORT_NAMED_INTEGER */, Running_Mode_cycle_limited /* IMPORTED_LONG_NAMED_INTEGER */, cycle_limited /* IMPORTED_SHORT_NAMED_INTEGER */, Running_Mode_step_limited /* IMPORTED_LONG_NAMED_INTEGER */, step_limited /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Running_Mode, _encode_Running_Mode } from "../MMS-Object-Module-1/Running-Mode.ta.mjs";
// export { Running_Mode, Running_Mode_free_run /* IMPORTED_LONG_NAMED_INTEGER */, free_run /* IMPORTED_SHORT_NAMED_INTEGER */, Running_Mode_cycle_limited /* IMPORTED_LONG_NAMED_INTEGER */, cycle_limited /* IMPORTED_SHORT_NAMED_INTEGER */, Running_Mode_step_limited /* IMPORTED_LONG_NAMED_INTEGER */, step_limited /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Running_Mode, _encode_Running_Mode } from "../MMS-Object-Module-1/Running-Mode.ta.mjs";


/**
 * @summary PROGRAM_INVOCATION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PROGRAM-INVOCATION ::= CLASS {
 *     &name                             Identifier,
 *     -- shall be unique among all Program Invocations
 *     &programInvocationState           ProgramInvocationState,
 *     &Domains                          Identifier,
 *     &accessControl                    Identifier,
 *     &reusable                         BOOLEAN,
 *     &monitor                          BOOLEAN,
 *     -- The following three fields shall all be present if the value of
 *     -- monitor is true.
 *     -- If present, the &name field of each object instance
 *     -- shall have a value equal to the
 *     -- &name field of this instance of the PROGRAM-INVOCATION.
 *     &eventCondition                   Identifier OPTIONAL,
 *     &eventAction                      Identifier OPTIONAL,
 *     &eventEnrollment                  Identifier OPTIONAL,
 *     &executionArgument                MMSString,
 *     &errorCode                        INTEGER,
 *     &control                          Control-State,
 *     -- The following field shall be present
 *     -- if and only if the value of the &control field is controlled.
 *     &controlling-Program-Invocation Identifier,
 *     -- The following two fields shall be present
 *     -- if and only if the value of the &control field is controlling.
 *     &Controlled-Program-Invocations Identifier,
 *     &program-Location                 MMSString OPTIONAL,
 *     &running-Mode                     Running-Mode,
 *     -- The following field shall be present
 *     -- if and only if the value of the &running-Mode field is cycle-limited
 *     &remaining-Cycle-Count            INTEGER OPTIONAL,
 * 
 *     -- The following field shall be present
 *     -- if and only if the value of the &running-Mode field is step-limited
 *     &remaining-Step-Count             INTEGER OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface PROGRAM_INVOCATION {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "PROGRAM-INVOCATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof PROGRAM_INVOCATION]: $.ASN1Decoder<PROGRAM_INVOCATION[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof PROGRAM_INVOCATION]: $.ASN1Encoder<PROGRAM_INVOCATION[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &programInvocationState
     */
    readonly "&programInvocationState"?: ProgramInvocationState;
    /**
     * @summary &Domains
     */
    readonly "&Domains"?: Identifier;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &reusable
     */
    readonly "&reusable"?: BOOLEAN;
    /**
     * @summary &monitor
     */
    readonly "&monitor"?: BOOLEAN;
    /**
     * @summary &eventCondition
     */
    readonly "&eventCondition"?: Identifier;
    /**
     * @summary &eventAction
     */
    readonly "&eventAction"?: Identifier;
    /**
     * @summary &eventEnrollment
     */
    readonly "&eventEnrollment"?: Identifier;
    /**
     * @summary &executionArgument
     */
    readonly "&executionArgument"?: MMSString;
    /**
     * @summary &errorCode
     */
    readonly "&errorCode"?: INTEGER;
    /**
     * @summary &control
     */
    readonly "&control"?: Control_State;
    /**
     * @summary &controlling-Program-Invocation
     */
    readonly "&controlling-Program-Invocation"?: Identifier;
    /**
     * @summary &Controlled-Program-Invocations
     */
    readonly "&Controlled-Program-Invocations"?: Identifier;
    /**
     * @summary &program-Location
     */
    readonly "&program-Location"?: MMSString;
    /**
     * @summary &running-Mode
     */
    readonly "&running-Mode"?: Running_Mode;
    /**
     * @summary &remaining-Cycle-Count
     */
    readonly "&remaining-Cycle-Count"?: INTEGER;
    /**
     * @summary &remaining-Step-Count
     */
    readonly "&remaining-Step-Count"?: INTEGER;
};

/* eslint-enable */
