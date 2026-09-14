/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
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
import { ProgramInvocationState, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
// export { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { Control_State, _decode_Control_State, _encode_Control_State } from "../MMS-Object-Module-1/Control-State.ta.mjs";
// export { Control_State, Control_State_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlling /* IMPORTED_LONG_NAMED_INTEGER */, controlling /* IMPORTED_SHORT_NAMED_INTEGER */, Control_State_controlled /* IMPORTED_LONG_NAMED_INTEGER */, controlled /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Control_State, _encode_Control_State } from "../MMS-Object-Module-1/Control-State.ta.mjs";
import { Running_Mode, _decode_Running_Mode, _encode_Running_Mode } from "../MMS-Object-Module-1/Running-Mode.ta.mjs";
// export { Running_Mode, Running_Mode_free_run /* IMPORTED_LONG_NAMED_INTEGER */, free_run /* IMPORTED_SHORT_NAMED_INTEGER */, Running_Mode_cycle_limited /* IMPORTED_LONG_NAMED_INTEGER */, cycle_limited /* IMPORTED_SHORT_NAMED_INTEGER */, Running_Mode_step_limited /* IMPORTED_LONG_NAMED_INTEGER */, step_limited /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Running_Mode, _encode_Running_Mode } from "../MMS-Object-Module-1/Running-Mode.ta.mjs";


/**
 * @summary PROGRAM_INVOCATION
 * @description
 * 
 * An execution thread over one or more
 * Domains plus control information. Closest MMS analogue of a task in a
 * multi-tasking environment. May be predefined or created/deleted by MMS
 * or locally. Reusable PIs return to idle after completion; others
 * become unrunnable. ISO 9506-1:2003 §12.1.
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
     * @description
     *
     * Unique PI name within the VMD. ISO 9506-1:2003 §12.1.1.1.
     *
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &programInvocationState
     * @description
     *
     * Principal PI state. ISO 9506-1:2003 §12.1.1.2.
     *
     */
    readonly "&programInvocationState"?: ProgramInvocationState;
    /**
     * @summary &Domains
     * @description
     *
     * Subordinate Domains; at least one. ISO 9506-1:2003 §12.1.1.3.
     *
     */
    readonly "&Domains"?: Identifier;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating execute, delete, and ACL change. ISO 9506-1:2003 §12.1.1.4.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &reusable
     * @description
     *
     * true = return to idle after normal completion; false = become unrunnable.
     * ISO 9506-1:2003 §12.1.1.5.
     *
     */
    readonly "&reusable"?: BOOLEAN;
    /**
     * @summary &monitor
     * @description
     *
     * If true, Event Management notifies enrolled clients when the PI leaves
     * running (auto Event Condition/Action/ Enrollment of the same name). ISO
     * 9506-1:2003 §12.1.1.6.
     *
     */
    readonly "&monitor"?: BOOLEAN;
    /**
     * @summary &eventCondition
     * @description
     *
     * If monitoring: monitored EC named as this PI; enabled; unspecified
     * monitored variable (PI running); M_Deletable. ISO 9506-1:2003 §12.1.1.7.
     *
     */
    readonly "&eventCondition"?: Identifier;
    /**
     * @summary &eventAction
     * @description
     *
     * If monitoring: Event Action that runs GetProgramInvocationAttributes. ISO
     * 9506-1:2003 §12.1.1.8.
     *
     */
    readonly "&eventAction"?: Identifier;
    /**
     * @summary &eventEnrollment
     * @description
     *
     * If monitoring: notification enrollment on active-to-idle. ISO 9506-1:2003
     * §12.1.1.9.
     *
     */
    readonly "&eventEnrollment"?: Identifier;
    /**
     * @summary &executionArgument
     * @description
     *
     * Argument string supplied at Start/Resume. ISO 9506-1:2003 §12.1.1.
     *
     */
    readonly "&executionArgument"?: MMSString;
    /**
     * @summary &errorCode
     * @description
     *
     * csr CBB: implementation error code. ISO 9506-1:2003 §12.1.1.
     *
     */
    readonly "&errorCode"?: INTEGER;
    /**
     * @summary &control
     * @description
     *
     * csr CBB: normal, controlling, or controlled. ISO 9506-1:2003 §12.1.1.12.
     *
     */
    readonly "&control"?: Control_State;
    /**
     * @summary &controlling-Program-Invocation
     * @description
     *
     * Present iff &control is controlled: the controlling PI. ISO 9506-1:2003
     * §12.1.1.13.
     *
     */
    readonly "&controlling-Program-Invocation"?: Identifier;
    /**
     * @summary &Controlled-Program-Invocations
     * @description
     *
     * Present iff &control is controlling: coupled controlled PIs (may be
     * empty). ISO 9506-1:2003 §12.1.1.14.
     *
     */
    readonly "&Controlled-Program-Invocations"?: Identifier;
    /**
     * @summary &program-Location
     * @description
     *
     * csr, controlling: optional source-line notation; format in the CIS. ISO
     * 9506-1:2003 §12.1.1.15.
     *
     */
    readonly "&program-Location"?: MMSString;
    /**
     * @summary &running-Mode
     * @description
     *
     * csr, controlling: free-run / cycle-limited / step-limited. ISO
     * 9506-1:2003 §12.1.1.16.
     *
     */
    readonly "&running-Mode"?: Running_Mode;
    /**
     * @summary &remaining-Cycle-Count
     * @description
     *
     * csr, cycle-limited: cycles left. ISO 9506-1:2003 §12.1.1.17.
     *
     */
    readonly "&remaining-Cycle-Count"?: INTEGER;
    /**
     * @summary &remaining-Step-Count
     * @description
     *
     * csr, step-limited: steps left. ISO 9506-1:2003 §12.1.1.18.
     *
     */
    readonly "&remaining-Step-Count"?: INTEGER;
};

/* eslint-enable */
