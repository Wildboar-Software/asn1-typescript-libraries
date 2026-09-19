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
import { AssistanceLocation, _enum_for_AssistanceLocation, _decode_AssistanceLocation, _encode_AssistanceLocation } from "../MachineReadableBiometricTestingAndReportingTestReport/AssistanceLocation.ta.mjs";
// export { AssistanceLocation, _enum_for_AssistanceLocation, AssistanceLocation_separate_from_transaction /* IMPORTED_LONG_ENUMERATION_ITEM */, separate_from_transaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, AssistanceLocation_interactively_with_transaction /* IMPORTED_LONG_ENUMERATION_ITEM */, interactively_with_transaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, AssistanceLocation_after_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, after_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AssistanceLocation, _encode_AssistanceLocation } from "../MachineReadableBiometricTestingAndReportingTestReport/AssistanceLocation.ta.mjs";
import { AssistanceMode, _enum_for_AssistanceMode, _decode_AssistanceMode, _encode_AssistanceMode } from "../MachineReadableBiometricTestingAndReportingTestReport/AssistanceMode.ta.mjs";
// export { AssistanceMode, _enum_for_AssistanceMode, AssistanceMode_physical /* IMPORTED_LONG_ENUMERATION_ITEM */, physical /* IMPORTED_SHORT_ENUMERATION_ITEM */, AssistanceMode_audio_only /* IMPORTED_LONG_ENUMERATION_ITEM */, audio_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, AssistanceMode_audio_video /* IMPORTED_LONG_ENUMERATION_ITEM */, audio_video /* IMPORTED_SHORT_ENUMERATION_ITEM */, AssistanceMode_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, AssistanceMode_video_only /* IMPORTED_LONG_ENUMERATION_ITEM */, video_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AssistanceMode, _encode_AssistanceMode } from "../MachineReadableBiometricTestingAndReportingTestReport/AssistanceMode.ta.mjs";
import { InstructionMode, _enum_for_InstructionMode, _decode_InstructionMode, _encode_InstructionMode } from "../MachineReadableBiometricTestingAndReportingTestReport/InstructionMode.ta.mjs";
// export { InstructionMode, _enum_for_InstructionMode, InstructionMode_written_manual /* IMPORTED_LONG_ENUMERATION_ITEM */, written_manual /* IMPORTED_SHORT_ENUMERATION_ITEM */, InstructionMode_poster /* IMPORTED_LONG_ENUMERATION_ITEM */, poster /* IMPORTED_SHORT_ENUMERATION_ITEM */, InstructionMode_video /* IMPORTED_LONG_ENUMERATION_ITEM */, video /* IMPORTED_SHORT_ENUMERATION_ITEM */, InstructionMode_personal /* IMPORTED_LONG_ENUMERATION_ITEM */, personal /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InstructionMode, _encode_InstructionMode } from "../MachineReadableBiometricTestingAndReportingTestReport/InstructionMode.ta.mjs";


/**
 * @summary AssistanceAndInstruction
 * @description
 *
 * Assistance location, assistance mode, and instructional mode of a
 * scenario test (Clause 6.5.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistanceAndInstruction ::= SEQUENCE {
 *     assistanceLocation  AssistanceLocation,
 *     assistanceMode      AssistanceMode,
 *     instructionMode     InstructionMode
 * }
 * ```
 * 
 * @class
 */
export
class AssistanceAndInstruction {
    constructor (
        /**
         * @summary `assistanceLocation`.
         * @description
         *
         * Before and separate from the transaction, during/interactively
         * with it, or after a failure (Clause 6.5.2, Annex C.3).
         *
         * @public
         * @readonly
         */
        readonly assistanceLocation: AssistanceLocation,
        /**
         * @summary `assistanceMode`.
         * @description
         *
         * How assistance was provided: physical, audio-only,
         * audio-video, none, or video-only (Clause 6.5.2). Annex C.3
         * describes this as human assistance to the subject.
         *
         * @public
         * @readonly
         */
        readonly assistanceMode: AssistanceMode,
        /**
         * @summary `instructionMode`.
         * @description
         *
         * Written manual, poster, video, or personal (Clause 6.5.2).
         * `video` covers slides or other sets of static images.
         *
         * @public
         * @readonly
         */
        readonly instructionMode: InstructionMode
    ) {}

    /**
     * @summary Restructures an object into a AssistanceAndInstruction
     * @description
     * 
     * This takes an `object` and converts it to a `AssistanceAndInstruction`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssistanceAndInstruction`.
     * @returns {AssistanceAndInstruction}
     */
    public static _from_object (_o: { [_K in keyof (AssistanceAndInstruction)]: (AssistanceAndInstruction)[_K] }): AssistanceAndInstruction {
        return new AssistanceAndInstruction(_o.assistanceLocation, _o.assistanceMode, _o.instructionMode);
    }

        /**
         * @summary The enum used as the type of the component `assistanceLocation`
         * @public
         * @static
         */

    public static _enum_for_assistanceLocation = _enum_for_AssistanceLocation;        /**
         * @summary The enum used as the type of the component `assistanceMode`
         * @public
         * @static
         */

    public static _enum_for_assistanceMode = _enum_for_AssistanceMode;        /**
         * @summary The enum used as the type of the component `instructionMode`
         * @public
         * @static
         */

    public static _enum_for_instructionMode = _enum_for_InstructionMode;
}

/**
 * @summary The Leading Root Component Types of AssistanceAndInstruction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AssistanceAndInstruction: $.ComponentSpec[] = [
    new $.ComponentSpec("assistanceLocation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("assistanceMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("instructionMode", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AssistanceAndInstruction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AssistanceAndInstruction: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AssistanceAndInstruction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AssistanceAndInstruction: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AssistanceAndInstruction: $.ASN1Decoder<AssistanceAndInstruction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssistanceAndInstruction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssistanceAndInstruction (el: _Element): AssistanceAndInstruction {
    if (!_cached_decoder_for_AssistanceAndInstruction) { _cached_decoder_for_AssistanceAndInstruction = function (el: _Element): AssistanceAndInstruction {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AssistanceAndInstruction contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "assistanceLocation";
    sequence[1].name = "assistanceMode";
    sequence[2].name = "instructionMode";
    let assistanceLocation!: AssistanceLocation;
    let assistanceMode!: AssistanceMode;
    let instructionMode!: InstructionMode;
    assistanceLocation = _decode_AssistanceLocation(sequence[0]);
    assistanceMode = _decode_AssistanceMode(sequence[1]);
    instructionMode = _decode_InstructionMode(sequence[2]);
    return new AssistanceAndInstruction(
        assistanceLocation,
        assistanceMode,
        instructionMode,

    );
}; }
    return _cached_decoder_for_AssistanceAndInstruction(el);
}

let _cached_encoder_for_AssistanceAndInstruction: $.ASN1Encoder<AssistanceAndInstruction> | null = null;

/**
 * @summary Encodes a(n) AssistanceAndInstruction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistanceAndInstruction, encoded as an ASN.1 Element.
 */
export
function _encode_AssistanceAndInstruction (value: AssistanceAndInstruction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssistanceAndInstruction) { _cached_encoder_for_AssistanceAndInstruction = function (value: AssistanceAndInstruction): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AssistanceLocation, $.BER)(value.assistanceLocation, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AssistanceMode, $.BER)(value.assistanceMode, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InstructionMode, $.BER)(value.instructionMode, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AssistanceAndInstruction(value, elGetter);
}


/* eslint-enable */
