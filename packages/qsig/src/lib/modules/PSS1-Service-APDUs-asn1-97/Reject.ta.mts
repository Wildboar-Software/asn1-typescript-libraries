/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeIdOrNull, _decode_InvokeIdOrNull, _encode_InvokeIdOrNull } from "../PSS1-Service-APDUs-asn1-97/InvokeIdOrNull.ta.mjs";
import { Reject_problem, _decode_Reject_problem, _encode_Reject_problem } from "../PSS1-Service-APDUs-asn1-97/Reject-problem.ta.mjs";

/**
 * @summary Reject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reject ::= SEQUENCE {
 *     invokeId InvokeIdOrNull,
 *     problem CHOICE {
 *         general [0] GeneralProblem,
 *         invoke [1] InvokeProblem,
 *         returnResult [2] ReturnResultProblem,
 *         returnError [3] ReturnErrorProblem
 *     }
 * }
 *     (
 *         CONSTRAINED BY {
 *             -- must conform to the above definition --
 *         }
 *         ! RejectProblem: general-mistypedPDU
 *     )
 * ```
 * 
 * @class
 */
export
class Reject {
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeIdOrNull;
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: Reject_problem;

    constructor (
        invokeId: InvokeIdOrNull,
        problem: Reject_problem
    ) {
        this.invokeId = invokeId;
        this.problem = problem;
    }

    /**
     * @summary Restructures an object into a Reject
     * @description
     * 
     * This takes an `object` and converts it to a `Reject`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Reject`.
     * @returns {Reject}
     */
    public static _from_object (_o: { [_K in keyof (Reject)]: (Reject)[_K] }): Reject {
        return new Reject(_o.invokeId, _o.problem);
    }

}

/**
 * @summary The Leading Root Component Types of Reject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Reject: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag),
    new $.ComponentSpec("problem", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of Reject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Reject: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Reject
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Reject: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Reject: $.ASN1Decoder<Reject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reject (el: _Element): Reject {
    if (!_cached_decoder_for_Reject) { _cached_decoder_for_Reject = function (el: _Element): Reject {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Reject contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokeId";
    sequence[1].name = "problem";
    let invokeId!: InvokeIdOrNull;
    let problem!: Reject_problem;
    invokeId = _decode_InvokeIdOrNull(sequence[0]);
    problem = _decode_Reject_problem(sequence[1]);
    return new Reject(
        invokeId,
        problem,

    );
}; }
    return _cached_decoder_for_Reject(el);
}

let _cached_encoder_for_Reject: $.ASN1Encoder<Reject> | null = null;

/**
 * @summary Encodes a(n) Reject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reject, encoded as an ASN.1 Element.
 */
export
function _encode_Reject (value: Reject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reject) { _cached_encoder_for_Reject = function (value: Reject, _elGetter: $.ASN1Encoder<Reject>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_InvokeIdOrNull(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_Reject_problem(value.problem, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Reject(value, elGetter);
}

/* eslint-enable */
