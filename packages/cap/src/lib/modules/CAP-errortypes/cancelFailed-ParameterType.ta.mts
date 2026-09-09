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
import { type InvokeID, _decode_InvokeID, _encode_InvokeID } from "../CAP-datatypes/InvokeID.ta.mjs";
import { cancelFailed_ParameterType_problem, _enum_for_cancelFailed_ParameterType_problem, cancelFailed_ParameterType_problem_unknownOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, cancelFailed_ParameterType_problem_tooLate /* IMPORTED_LONG_ENUMERATION_ITEM */, tooLate /* IMPORTED_SHORT_ENUMERATION_ITEM */, cancelFailed_ParameterType_problem_operationNotCancellable /* IMPORTED_LONG_ENUMERATION_ITEM */, operationNotCancellable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_cancelFailed_ParameterType_problem, _encode_cancelFailed_ParameterType_problem } from "../CAP-errortypes/cancelFailed-ParameterType-problem.ta.mjs";
// export { cancelFailed_ParameterType_problem, _enum_for_cancelFailed_ParameterType_problem, cancelFailed_ParameterType_problem_unknownOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, cancelFailed_ParameterType_problem_tooLate /* IMPORTED_LONG_ENUMERATION_ITEM */, tooLate /* IMPORTED_SHORT_ENUMERATION_ITEM */, cancelFailed_ParameterType_problem_operationNotCancellable /* IMPORTED_LONG_ENUMERATION_ITEM */, operationNotCancellable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_cancelFailed_ParameterType_problem, _encode_cancelFailed_ParameterType_problem } from "../CAP-errortypes/cancelFailed-ParameterType-problem.ta.mjs";


/**
 * @summary cancelFailed_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType ::= SEQUENCE {
 *     problem            [0] ENUMERATED {
 *         unknownOperation    (0),
 *         tooLate             (1),
 *         operationNotCancellable    (2)
 *         },
 *     operation        [1] InvokeID,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class cancelFailed_ParameterType {
    constructor (
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: cancelFailed_ParameterType_problem,
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: InvokeID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a cancelFailed_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `cancelFailed_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `cancelFailed_ParameterType`.
     * @returns {cancelFailed_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (cancelFailed_ParameterType)]: (cancelFailed_ParameterType)[_K] }): cancelFailed_ParameterType {
        return new cancelFailed_ParameterType(_o.problem, _o.operation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_cancelFailed_ParameterType_problem;
}

/**
 * @summary The Leading Root Component Types of cancelFailed_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("operation", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of cancelFailed_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of cancelFailed_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_cancelFailed_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_cancelFailed_ParameterType: $.ASN1Decoder<cancelFailed_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) cancelFailed_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_cancelFailed_ParameterType (el: _Element): cancelFailed_ParameterType {
    if (!_cached_decoder_for_cancelFailed_ParameterType) { _cached_decoder_for_cancelFailed_ParameterType = function (el: _Element): cancelFailed_ParameterType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("cancelFailed-ParameterType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "problem";
    sequence[1].name = "operation";
    let problem!: cancelFailed_ParameterType_problem;
    let operation!: InvokeID;
    problem = $._decode_implicit<cancelFailed_ParameterType_problem>(() => _decode_cancelFailed_ParameterType_problem)(sequence[0]);
    operation = $._decode_implicit<InvokeID>(() => _decode_InvokeID)(sequence[1]);
    return new cancelFailed_ParameterType(
        problem,
        operation,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_cancelFailed_ParameterType(el);
}

let _cached_encoder_for_cancelFailed_ParameterType: $.ASN1Encoder<cancelFailed_ParameterType> | null = null;

/**
 * @summary Encodes a(n) cancelFailed_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The cancelFailed_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_cancelFailed_ParameterType (value: cancelFailed_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_cancelFailed_ParameterType) { _cached_encoder_for_cancelFailed_ParameterType = function (value: cancelFailed_ParameterType, elGetter: $.ASN1Encoder<cancelFailed_ParameterType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_cancelFailed_ParameterType_problem, $.BER)(value.problem, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InvokeID, $.BER)(value.operation, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_cancelFailed_ParameterType(value, elGetter);
}


/* eslint-enable */
