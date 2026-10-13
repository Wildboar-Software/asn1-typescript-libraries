/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_expectedEventInvocationIdentification
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/EventInvocationId.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parEventInvocationIdentification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parEventInvocationIdentification ::= SEQUENCE
 *    {  parameterName                    ParameterName
 *                                  (expectedEventInvocationIdentification)
 *    , parameterValue                    EventInvocationId
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parEventInvocationIdentification {
    /**
     * @summary `parameterName`.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @public
     * @readonly
     */
    readonly parameterValue: EventInvocationId;

    constructor (
        parameterName: ParameterName,
        parameterValue: EventInvocationId
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_expectedEventInvocationIdentification)])) {
            throw new ASN1Error("CltuGetParameter_parEventInvocationIdentification.parameterName violates ParameterName (expectedEventInvocationIdentification)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parEventInvocationIdentification
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parEventInvocationIdentification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parEventInvocationIdentification`.
     * @returns {CltuGetParameter_parEventInvocationIdentification}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parEventInvocationIdentification)]: (CltuGetParameter_parEventInvocationIdentification)[_K] }): CltuGetParameter_parEventInvocationIdentification {
        return new CltuGetParameter_parEventInvocationIdentification(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parEventInvocationIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parEventInvocationIdentification: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parEventInvocationIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parEventInvocationIdentification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parEventInvocationIdentification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parEventInvocationIdentification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parEventInvocationIdentification: $.ASN1Decoder<CltuGetParameter_parEventInvocationIdentification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parEventInvocationIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parEventInvocationIdentification (el: _Element): CltuGetParameter_parEventInvocationIdentification {
    if (!_cached_decoder_for_CltuGetParameter_parEventInvocationIdentification) { _cached_decoder_for_CltuGetParameter_parEventInvocationIdentification = function (el: _Element): CltuGetParameter_parEventInvocationIdentification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parEventInvocationIdentification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: EventInvocationId;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_EventInvocationId(sequence[1]);
    return new CltuGetParameter_parEventInvocationIdentification(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parEventInvocationIdentification(el);
}

let _cached_encoder_for_CltuGetParameter_parEventInvocationIdentification: $.ASN1Encoder<CltuGetParameter_parEventInvocationIdentification> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parEventInvocationIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parEventInvocationIdentification, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parEventInvocationIdentification (value: CltuGetParameter_parEventInvocationIdentification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parEventInvocationIdentification) { _cached_encoder_for_CltuGetParameter_parEventInvocationIdentification = function (value: CltuGetParameter_parEventInvocationIdentification, elGetter: $.ASN1Encoder<CltuGetParameter_parEventInvocationIdentification>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_EventInvocationId(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parEventInvocationIdentification(value, elGetter);
}


/* eslint-enable */
