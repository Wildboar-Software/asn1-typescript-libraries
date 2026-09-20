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
import { ServiceProblem, _enum_for_ServiceProblem, _decode_ServiceProblem, _encode_ServiceProblem } from "../DFRAbstractService/ServiceProblem.ta.mjs";


/**
 * @summary serviceError_ParameterType
 * @description
 *
 * Service problem only. ISO/IEC 10166-1:1991 §8.3.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceError-ParameterType ::= SEQUENCE {
 *         problem [0] ServiceProblem
 *     }
 * ```
 * 
 * @class
 */
export
class serviceError_ParameterType {
    constructor (
        /**
         * @summary `problem`.
         * @description
         *
         * Operational reason the request failed.
         * @public
         * @readonly
         */
        readonly problem: ServiceProblem
    ) {}

    /**
     * @summary Restructures an object into a serviceError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `serviceError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `serviceError_ParameterType`.
     * @returns {serviceError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (serviceError_ParameterType)]: (serviceError_ParameterType)[_K] }): serviceError_ParameterType {
        return new serviceError_ParameterType(_o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_ServiceProblem;
}

/**
 * @summary The Leading Root Component Types of serviceError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_serviceError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of serviceError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_serviceError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of serviceError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_serviceError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_serviceError_ParameterType: $.ASN1Decoder<serviceError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) serviceError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_serviceError_ParameterType (el: _Element): serviceError_ParameterType {
    if (!_cached_decoder_for_serviceError_ParameterType) { _cached_decoder_for_serviceError_ParameterType = function (el: _Element): serviceError_ParameterType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("serviceError-ParameterType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "problem";
    let problem!: ServiceProblem;
    problem = $._decode_implicit<ServiceProblem>(() => _decode_ServiceProblem)(sequence[0]);
    return new serviceError_ParameterType(
        problem,

    );
}; }
    return _cached_decoder_for_serviceError_ParameterType(el);
}

let _cached_encoder_for_serviceError_ParameterType: $.ASN1Encoder<serviceError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) serviceError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The serviceError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_serviceError_ParameterType (value: serviceError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_serviceError_ParameterType) { _cached_encoder_for_serviceError_ParameterType = function (value: serviceError_ParameterType): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_serviceError_ParameterType(value, elGetter);
}


/* eslint-enable */
