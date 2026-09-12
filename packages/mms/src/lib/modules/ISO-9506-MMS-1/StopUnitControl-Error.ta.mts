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


/**
 * @summary StopUnitControl_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopUnitControl-Error ::= SEQUENCE {
 *    programInvocationName         [0] IMPLICIT Identifier OPTIONAL,
 *    programInvocationState        [1] IMPLICIT ProgramInvocationState OPTIONAL  }
 * ```
 * 
 * @class
 */
export
class StopUnitControl_Error {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: OPTIONAL<Identifier>,
        /**
         * @summary `programInvocationState`.
         * @public
         * @readonly
         */
        readonly programInvocationState: OPTIONAL<ProgramInvocationState>
    ) {}

    /**
     * @summary Restructures an object into a StopUnitControl_Error
     * @description
     * 
     * This takes an `object` and converts it to a `StopUnitControl_Error`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StopUnitControl_Error`.
     * @returns {StopUnitControl_Error}
     */
    public static _from_object (_o: { [_K in keyof (StopUnitControl_Error)]: (StopUnitControl_Error)[_K] }): StopUnitControl_Error {
        return new StopUnitControl_Error(_o.programInvocationName, _o.programInvocationState);
    }


}

/**
 * @summary The Leading Root Component Types of StopUnitControl_Error
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StopUnitControl_Error: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("programInvocationState", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of StopUnitControl_Error
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StopUnitControl_Error: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StopUnitControl_Error
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StopUnitControl_Error: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StopUnitControl_Error: $.ASN1Decoder<StopUnitControl_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopUnitControl_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopUnitControl_Error (el: _Element): StopUnitControl_Error {
    if (!_cached_decoder_for_StopUnitControl_Error) { _cached_decoder_for_StopUnitControl_Error = function (el: _Element): StopUnitControl_Error {
    let programInvocationName: OPTIONAL<Identifier>;
    let programInvocationState: OPTIONAL<ProgramInvocationState>;
    const callbacks: $.DecodingMap = {
        "programInvocationName": (_el: _Element): void => { programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "programInvocationState": (_el: _Element): void => { programInvocationState = $._decode_implicit<ProgramInvocationState>(() => _decode_ProgramInvocationState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StopUnitControl_Error,
        _extension_additions_list_spec_for_StopUnitControl_Error,
        _root_component_type_list_2_spec_for_StopUnitControl_Error,
        undefined,
    );
    return new StopUnitControl_Error(
        programInvocationName,
        programInvocationState
    );
}; }
    return _cached_decoder_for_StopUnitControl_Error(el);
}

let _cached_encoder_for_StopUnitControl_Error: $.ASN1Encoder<StopUnitControl_Error> | null = null;

/**
 * @summary Encodes a(n) StopUnitControl_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopUnitControl_Error, encoded as an ASN.1 Element.
 */
export
function _encode_StopUnitControl_Error (value: StopUnitControl_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopUnitControl_Error) { _cached_encoder_for_StopUnitControl_Error = function (value: StopUnitControl_Error, elGetter: $.ASN1Encoder<StopUnitControl_Error>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.programInvocationName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER)),
            /* IF_ABSENT  */ ((value.programInvocationState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ProgramInvocationState, $.BER)(value.programInvocationState, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StopUnitControl_Error(value, elGetter);
}


/* eslint-enable */
