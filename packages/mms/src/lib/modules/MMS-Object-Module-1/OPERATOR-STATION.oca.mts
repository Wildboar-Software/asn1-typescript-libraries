/* eslint-disable */
import {
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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary OPERATOR_STATION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPERATOR-STATION ::= CLASS {
 *     &name                   Identifier,
 *     -- shall be unique within its range of specification (VMD)
 *     &accessControl          Identifier,
 *     &stationType            ENUMERATED {
 *         entry,
 *         display,
 *         entry-display },
 *     -- The following field shall appear if stationType is entry or entry-display
 *     &inputBuffer            MMSString OPTIONAL,
 *     -- The following field shall appear if stationType is display or entry-display
 *     &outputBuffers          SEQUENCE OF MMSString OPTIONAL,
 *     &state                  ENUMERATED {
 *         idle,
 *         display-prompt-data,
 *         waiting-for-input,
 *         input-buffer-filled,
 *         output-buffers-filled }
 * }
 * ```
 * 
 * @interface
 */
export
interface OPERATOR_STATION {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPERATOR-STATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof OPERATOR_STATION]: $.ASN1Decoder<OPERATOR_STATION[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof OPERATOR_STATION]: $.ASN1Encoder<OPERATOR_STATION[_K]>;
    }>;
    /**
     * @summary &name
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &stationType
     */
    readonly "&stationType"?: OPERATOR_STATION_stationType;
    /**
     * @summary &inputBuffer
     */
    readonly "&inputBuffer"?: MMSString;
    /**
     * @summary &outputBuffers
     */
    readonly "&outputBuffers"?: MMSString[];
    /**
     * @summary &state
     */
    readonly "&state"?: OPERATOR_STATION_state;
}

/**
 * @summary OPERATOR_STATION_stationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATOR-STATION.&stationType ::= ENUMERATED {
 *     entry,
 *     display,
 *     entry-display }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_OPERATOR_STATION_stationType {
    entry = 0,
    display = 1,
    entry_display = 2,
}

/**
 * @summary OPERATOR_STATION_stationType
 * @enum {number}
 */
export
type OPERATOR_STATION_stationType = _enum_for_OPERATOR_STATION_stationType;

/**
 * @summary OPERATOR_STATION_stationType
 * @enum {number}
 */
export
const OPERATOR_STATION_stationType = _enum_for_OPERATOR_STATION_stationType;

/**
 * @summary OPERATOR_STATION_stationType_entry
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_stationType_entry: OPERATOR_STATION_stationType = OPERATOR_STATION_stationType.entry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_stationType_display
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_stationType_display: OPERATOR_STATION_stationType = OPERATOR_STATION_stationType.display; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_stationType_entry_display
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_stationType_entry_display: OPERATOR_STATION_stationType = OPERATOR_STATION_stationType.entry_display; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_state
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATOR-STATION.&state ::= ENUMERATED {
 *     idle,
 *     display-prompt-data,
 *     waiting-for-input,
 *     input-buffer-filled,
 *     output-buffers-filled }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_OPERATOR_STATION_state {
    idle = 0,
    display_prompt_data = 1,
    waiting_for_input = 2,
    input_buffer_filled = 3,
    output_buffers_filled = 4,
}

/**
 * @summary OPERATOR_STATION_state
 * @enum {number}
 */
export
type OPERATOR_STATION_state = _enum_for_OPERATOR_STATION_state;

/**
 * @summary OPERATOR_STATION_state
 * @enum {number}
 */
export
const OPERATOR_STATION_state = _enum_for_OPERATOR_STATION_state;

/**
 * @summary OPERATOR_STATION_state_idle
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_state_idle: OPERATOR_STATION_state = OPERATOR_STATION_state.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_state_display_prompt_data
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_state_display_prompt_data: OPERATOR_STATION_state = OPERATOR_STATION_state.display_prompt_data; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_state_waiting_for_input
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_state_waiting_for_input: OPERATOR_STATION_state = OPERATOR_STATION_state.waiting_for_input; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_state_input_buffer_filled
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_state_input_buffer_filled: OPERATOR_STATION_state = OPERATOR_STATION_state.input_buffer_filled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary OPERATOR_STATION_state_output_buffers_filled
 * @constant
 * @type {number}
 */
export
const OPERATOR_STATION_state_output_buffers_filled: OPERATOR_STATION_state = OPERATOR_STATION_state.output_buffers_filled; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
