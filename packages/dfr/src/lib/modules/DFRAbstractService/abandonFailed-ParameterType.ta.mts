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
import { AbandonProblem, _enum_for_AbandonProblem, _decode_AbandonProblem, _encode_AbandonProblem } from "../DFRAbstractService/AbandonProblem.ta.mjs";
import {
    type InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";


/**
 * @summary abandonFailed_ParameterType
 * @description
 *
 * Why Abandon failed, and the invoke-id of the target. ISO/IEC 10166-1:1991
 * §8.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * abandonFailed-ParameterType ::= SET {
 *         problem     [0] AbandonProblem,
 *         operation   [1] InvokeId
 *     }
 * ```
 * 
 * @class
 */
export
class abandonFailed_ParameterType {
    constructor (
        /**
         * @summary `problem`.
         * @description
         *
         * Why abandon failed.
         * @public
         * @readonly
         */
        readonly problem: AbandonProblem,
        /**
         * @summary `operation`.
         * @description
         *
         * Invoke-id of the operation that was not abandoned.
         * @public
         * @readonly
         */
        readonly operation: InvokeId
    ) {}

    /**
     * @summary Restructures an object into a abandonFailed_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `abandonFailed_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `abandonFailed_ParameterType`.
     * @returns {abandonFailed_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (abandonFailed_ParameterType)]: (abandonFailed_ParameterType)[_K] }): abandonFailed_ParameterType {
        return new abandonFailed_ParameterType(_o.problem, _o.operation);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_AbandonProblem;
}

/**
 * @summary The Leading Root Component Types of abandonFailed_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_abandonFailed_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("operation", false, $.hasTag(_TagClass.context, 1)),
];

/**
 * @summary The Trailing Root Component Types of abandonFailed_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_abandonFailed_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of abandonFailed_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_abandonFailed_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_abandonFailed_ParameterType: $.ASN1Decoder<abandonFailed_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) abandonFailed_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_abandonFailed_ParameterType (el: _Element): abandonFailed_ParameterType {
    if (!_cached_decoder_for_abandonFailed_ParameterType) { _cached_decoder_for_abandonFailed_ParameterType = function (el: _Element): abandonFailed_ParameterType {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let problem!: AbandonProblem;
    let operation!: InvokeId;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = $._decode_implicit<AbandonProblem>(() => _decode_AbandonProblem)(_el); },
        "operation": (_el: _Element): void => { operation = $._decode_implicit<InvokeId>(() => _decode_InvokeId)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_abandonFailed_ParameterType,
        _extension_additions_list_spec_for_abandonFailed_ParameterType,
        _root_component_type_list_2_spec_for_abandonFailed_ParameterType,
        undefined,
    );
    return new abandonFailed_ParameterType( /* SET_CONSTRUCTOR_CALL */
        problem,
        operation
    );
}; }
    return _cached_decoder_for_abandonFailed_ParameterType(el);
}

let _cached_encoder_for_abandonFailed_ParameterType: $.ASN1Encoder<abandonFailed_ParameterType> | null = null;

/**
 * @summary Encodes a(n) abandonFailed_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The abandonFailed_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_abandonFailed_ParameterType (value: abandonFailed_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_abandonFailed_ParameterType) { _cached_encoder_for_abandonFailed_ParameterType = function (value: abandonFailed_ParameterType): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AbandonProblem, $.BER)(value.problem, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InvokeId, $.BER)(value.operation, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_abandonFailed_ParameterType(value, elGetter);
}


/* eslint-enable */
