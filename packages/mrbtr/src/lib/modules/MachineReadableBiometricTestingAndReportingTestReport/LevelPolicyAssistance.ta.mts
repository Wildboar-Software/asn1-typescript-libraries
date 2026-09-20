/* eslint-disable */
import {
    OPTIONAL,
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
import { LevelEffortAndDecisionPolicy, _decode_LevelEffortAndDecisionPolicy, _encode_LevelEffortAndDecisionPolicy } from "../MachineReadableBiometricTestingAndReportingTestReport/LevelEffortAndDecisionPolicy.ta.mjs";
import { AssistanceAndInstruction, _decode_AssistanceAndInstruction, _encode_AssistanceAndInstruction } from "../MachineReadableBiometricTestingAndReportingTestReport/AssistanceAndInstruction.ta.mjs";


/**
 * @summary LevelPolicyAssistance
 * @description
 *
 * Level of effort, decision policy, assistance, and instructional mode
 * of a scenario test (Clause 6.5.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LevelPolicyAssistance ::= SEQUENCE {
 *     levelEffortAndDecisionPolicy    LevelEffortAndDecisionPolicy,
 *     assistanceAndInstruction        AssistanceAndInstruction OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LevelPolicyAssistance {
    constructor (
        /**
         * @summary `levelEffortAndDecisionPolicy`.
         * @description
         *
         * Enrolment and comparison policies (min/max attempts and max
         * duration). A transaction consists of one or more attempts
         * (Clause 6.5.2, Annex C.3).
         *
         * @public
         * @readonly
         */
        readonly levelEffortAndDecisionPolicy: LevelEffortAndDecisionPolicy,
        /**
         * @summary `assistanceAndInstruction`.
         * @description
         *
         * Where assistance was given, how, and how subjects were
         * instructed (Clause 6.5.2).
         *
         * @public
         * @readonly
         */
        readonly assistanceAndInstruction: OPTIONAL<AssistanceAndInstruction>
    ) {}

    /**
     * @summary Restructures an object into a LevelPolicyAssistance
     * @description
     * 
     * This takes an `object` and converts it to a `LevelPolicyAssistance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LevelPolicyAssistance`.
     * @returns {LevelPolicyAssistance}
     */
    public static _from_object (_o: { [_K in keyof (LevelPolicyAssistance)]: (LevelPolicyAssistance)[_K] }): LevelPolicyAssistance {
        return new LevelPolicyAssistance(_o.levelEffortAndDecisionPolicy, _o.assistanceAndInstruction);
    }


}

/**
 * @summary The Leading Root Component Types of LevelPolicyAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LevelPolicyAssistance: $.ComponentSpec[] = [
    new $.ComponentSpec("levelEffortAndDecisionPolicy", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("assistanceAndInstruction", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LevelPolicyAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LevelPolicyAssistance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LevelPolicyAssistance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LevelPolicyAssistance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LevelPolicyAssistance: $.ASN1Decoder<LevelPolicyAssistance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LevelPolicyAssistance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LevelPolicyAssistance (el: _Element): LevelPolicyAssistance {
    if (!_cached_decoder_for_LevelPolicyAssistance) { _cached_decoder_for_LevelPolicyAssistance = function (el: _Element): LevelPolicyAssistance {
    let levelEffortAndDecisionPolicy!: LevelEffortAndDecisionPolicy;
    let assistanceAndInstruction: OPTIONAL<AssistanceAndInstruction>;
    const callbacks: $.DecodingMap = {
        "levelEffortAndDecisionPolicy": (_el: _Element): void => { levelEffortAndDecisionPolicy = _decode_LevelEffortAndDecisionPolicy(_el); },
        "assistanceAndInstruction": (_el: _Element): void => { assistanceAndInstruction = _decode_AssistanceAndInstruction(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LevelPolicyAssistance,
        _extension_additions_list_spec_for_LevelPolicyAssistance,
        _root_component_type_list_2_spec_for_LevelPolicyAssistance,
        undefined,
    );
    return new LevelPolicyAssistance(
        levelEffortAndDecisionPolicy,
        assistanceAndInstruction
    );
}; }
    return _cached_decoder_for_LevelPolicyAssistance(el);
}

let _cached_encoder_for_LevelPolicyAssistance: $.ASN1Encoder<LevelPolicyAssistance> | null = null;

/**
 * @summary Encodes a(n) LevelPolicyAssistance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LevelPolicyAssistance, encoded as an ASN.1 Element.
 */
export
function _encode_LevelPolicyAssistance (value: LevelPolicyAssistance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LevelPolicyAssistance) { _cached_encoder_for_LevelPolicyAssistance = function (value: LevelPolicyAssistance): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_LevelEffortAndDecisionPolicy, $.BER)(value.levelEffortAndDecisionPolicy, $.BER),
            /* IF_ABSENT */ ((value.assistanceAndInstruction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AssistanceAndInstruction, $.BER)(value.assistanceAndInstruction, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LevelPolicyAssistance(value, elGetter);
}


/* eslint-enable */
