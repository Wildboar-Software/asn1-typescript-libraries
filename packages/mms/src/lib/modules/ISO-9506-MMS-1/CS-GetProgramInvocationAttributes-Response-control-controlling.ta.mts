/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
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
import { CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, _decode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, _encode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control-controlling-runningMode.ta.mjs";
// export { CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, _decode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, _encode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response-control-controlling-runningMode.ta.mjs";


/**
 * @summary CS_GetProgramInvocationAttributes_Response_control_controlling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-GetProgramInvocationAttributes-Response-control-controlling ::= SEQUENCE {
 *     controlledPI [0] IMPLICIT SEQUENCE OF Identifier,
 *     programLocation [1] IMPLICIT VisibleString OPTIONAL,
 *     runningMode [2] CHOICE {
 *         freeRunning [0] IMPLICIT NULL,
 *         cycleLimited [1] IMPLICIT INTEGER,
 *         stepLimited [2] IMPLICIT INTEGER
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class CS_GetProgramInvocationAttributes_Response_control_controlling {
    constructor (
        /**
         * @summary `controlledPI`.
         * @public
         * @readonly
         */
        readonly controlledPI: Identifier[],
        /**
         * @summary `programLocation`.
         * @public
         * @readonly
         */
        readonly programLocation: OPTIONAL<VisibleString>,
        /**
         * @summary `runningMode`.
         * @public
         * @readonly
         */
        readonly runningMode: CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode
    ) {}

    /**
     * @summary Restructures an object into a CS_GetProgramInvocationAttributes_Response_control_controlling
     * @description
     * 
     * This takes an `object` and converts it to a `CS_GetProgramInvocationAttributes_Response_control_controlling`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_GetProgramInvocationAttributes_Response_control_controlling`.
     * @returns {CS_GetProgramInvocationAttributes_Response_control_controlling}
     */
    public static _from_object (_o: { [_K in keyof (CS_GetProgramInvocationAttributes_Response_control_controlling)]: (CS_GetProgramInvocationAttributes_Response_control_controlling)[_K] }): CS_GetProgramInvocationAttributes_Response_control_controlling {
        return new CS_GetProgramInvocationAttributes_Response_control_controlling(_o.controlledPI, _o.programLocation, _o.runningMode);
    }


}

/**
 * @summary The Leading Root Component Types of CS_GetProgramInvocationAttributes_Response_control_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_GetProgramInvocationAttributes_Response_control_controlling: $.ComponentSpec[] = [
    new $.ComponentSpec("controlledPI", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("programLocation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("runningMode", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CS_GetProgramInvocationAttributes_Response_control_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_GetProgramInvocationAttributes_Response_control_controlling: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_GetProgramInvocationAttributes_Response_control_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_GetProgramInvocationAttributes_Response_control_controlling: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling: $.ASN1Decoder<CS_GetProgramInvocationAttributes_Response_control_controlling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_GetProgramInvocationAttributes_Response_control_controlling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_GetProgramInvocationAttributes_Response_control_controlling (el: _Element): CS_GetProgramInvocationAttributes_Response_control_controlling {
    if (!_cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling) { _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling = function (el: _Element): CS_GetProgramInvocationAttributes_Response_control_controlling {
    let controlledPI!: Identifier[];
    let programLocation: OPTIONAL<VisibleString>;
    let runningMode!: CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode;
    const callbacks: $.DecodingMap = {
        "controlledPI": (_el: _Element): void => { controlledPI = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); },
        "programLocation": (_el: _Element): void => { programLocation = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "runningMode": (_el: _Element): void => { runningMode = $._decode_explicit<CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode>(() => _decode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CS_GetProgramInvocationAttributes_Response_control_controlling,
        _extension_additions_list_spec_for_CS_GetProgramInvocationAttributes_Response_control_controlling,
        _root_component_type_list_2_spec_for_CS_GetProgramInvocationAttributes_Response_control_controlling,
        undefined,
    );
    return new CS_GetProgramInvocationAttributes_Response_control_controlling(
        controlledPI,
        programLocation,
        runningMode
    );
}; }
    return _cached_decoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling(el);
}

let _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling: $.ASN1Encoder<CS_GetProgramInvocationAttributes_Response_control_controlling> | null = null;

/**
 * @summary Encodes a(n) CS_GetProgramInvocationAttributes_Response_control_controlling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_GetProgramInvocationAttributes_Response_control_controlling, encoded as an ASN.1 Element.
 */
export
function _encode_CS_GetProgramInvocationAttributes_Response_control_controlling (value: CS_GetProgramInvocationAttributes_Response_control_controlling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling) { _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling = function (value: CS_GetProgramInvocationAttributes_Response_control_controlling): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.controlledPI, $.BER),
            /* IF_ABSENT  */ ((value.programLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.programLocation, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_CS_GetProgramInvocationAttributes_Response_control_controlling_runningMode, $.BER)(value.runningMode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_GetProgramInvocationAttributes_Response_control_controlling(value, elGetter);
}


/* eslint-enable */
