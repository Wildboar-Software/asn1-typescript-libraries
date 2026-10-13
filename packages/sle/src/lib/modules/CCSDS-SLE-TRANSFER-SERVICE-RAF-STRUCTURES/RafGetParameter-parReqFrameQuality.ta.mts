/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_requestedFrameQuality
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RafGetParameter_parReqFrameQuality_parameterValue, _decode_RafGetParameter_parReqFrameQuality_parameterValue, _encode_RafGetParameter_parReqFrameQuality_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReqFrameQuality-parameterValue.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RafGetParameter_parReqFrameQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parReqFrameQuality ::= SEQUENCE
 *     {   parameterName                ParameterName (requestedFrameQuality)
 *     ,   parameterValue               INTEGER
 *         {   goodFramesOnly                (0)
 *         ,   erredFrameOnly                (1)
 *         ,   allFrames                     (2)
 *         }
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parReqFrameQuality {
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
    readonly parameterValue: RafGetParameter_parReqFrameQuality_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: RafGetParameter_parReqFrameQuality_parameterValue
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_requestedFrameQuality)])) {
            throw new ASN1Error("RafGetParameter_parReqFrameQuality.parameterName violates ParameterName (requestedFrameQuality)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parReqFrameQuality
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parReqFrameQuality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parReqFrameQuality`.
     * @returns {RafGetParameter_parReqFrameQuality}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parReqFrameQuality)]: (RafGetParameter_parReqFrameQuality)[_K] }): RafGetParameter_parReqFrameQuality {
        return new RafGetParameter_parReqFrameQuality(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parReqFrameQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parReqFrameQuality: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parReqFrameQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parReqFrameQuality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parReqFrameQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parReqFrameQuality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parReqFrameQuality: $.ASN1Decoder<RafGetParameter_parReqFrameQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parReqFrameQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parReqFrameQuality (el: _Element): RafGetParameter_parReqFrameQuality {
    if (!_cached_decoder_for_RafGetParameter_parReqFrameQuality) { _cached_decoder_for_RafGetParameter_parReqFrameQuality = function (el: _Element): RafGetParameter_parReqFrameQuality {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parReqFrameQuality contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RafGetParameter_parReqFrameQuality_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RafGetParameter_parReqFrameQuality_parameterValue(sequence[1]);
    return new RafGetParameter_parReqFrameQuality(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parReqFrameQuality(el);
}

let _cached_encoder_for_RafGetParameter_parReqFrameQuality: $.ASN1Encoder<RafGetParameter_parReqFrameQuality> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parReqFrameQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parReqFrameQuality, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parReqFrameQuality (value: RafGetParameter_parReqFrameQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parReqFrameQuality) { _cached_encoder_for_RafGetParameter_parReqFrameQuality = function (value: RafGetParameter_parReqFrameQuality, elGetter: $.ASN1Encoder<RafGetParameter_parReqFrameQuality>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RafGetParameter_parReqFrameQuality_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parReqFrameQuality(value, elGetter);
}


/* eslint-enable */
