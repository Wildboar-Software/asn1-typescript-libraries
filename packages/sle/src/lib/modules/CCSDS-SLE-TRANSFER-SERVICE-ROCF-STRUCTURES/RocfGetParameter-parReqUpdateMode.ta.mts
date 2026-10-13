/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_requestedUpdateMode
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RequestedUpdateMode, _decode_RequestedUpdateMode, _encode_RequestedUpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedUpdateMode.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RocfGetParameter_parReqUpdateMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parReqUpdateMode ::= SEQUENCE
 *    {  parameterName                 ParameterName (requestedUpdateMode)
 *    ,  parameterValue                RequestedUpdateMode
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parReqUpdateMode {
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
    readonly parameterValue: RequestedUpdateMode;

    constructor (
        parameterName: ParameterName,
        parameterValue: RequestedUpdateMode
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_requestedUpdateMode)])) {
            throw new ASN1Error("RocfGetParameter_parReqUpdateMode.parameterName violates ParameterName (requestedUpdateMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parReqUpdateMode
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parReqUpdateMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parReqUpdateMode`.
     * @returns {RocfGetParameter_parReqUpdateMode}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parReqUpdateMode)]: (RocfGetParameter_parReqUpdateMode)[_K] }): RocfGetParameter_parReqUpdateMode {
        return new RocfGetParameter_parReqUpdateMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parReqUpdateMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parReqUpdateMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parReqUpdateMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parReqUpdateMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parReqUpdateMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parReqUpdateMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parReqUpdateMode: $.ASN1Decoder<RocfGetParameter_parReqUpdateMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parReqUpdateMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parReqUpdateMode (el: _Element): RocfGetParameter_parReqUpdateMode {
    if (!_cached_decoder_for_RocfGetParameter_parReqUpdateMode) { _cached_decoder_for_RocfGetParameter_parReqUpdateMode = function (el: _Element): RocfGetParameter_parReqUpdateMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parReqUpdateMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RequestedUpdateMode;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RequestedUpdateMode(sequence[1]);
    return new RocfGetParameter_parReqUpdateMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parReqUpdateMode(el);
}

let _cached_encoder_for_RocfGetParameter_parReqUpdateMode: $.ASN1Encoder<RocfGetParameter_parReqUpdateMode> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parReqUpdateMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parReqUpdateMode, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parReqUpdateMode (value: RocfGetParameter_parReqUpdateMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parReqUpdateMode) { _cached_encoder_for_RocfGetParameter_parReqUpdateMode = function (value: RocfGetParameter_parReqUpdateMode, elGetter: $.ASN1Encoder<RocfGetParameter_parReqUpdateMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RequestedUpdateMode(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parReqUpdateMode(value, elGetter);
}


/* eslint-enable */
