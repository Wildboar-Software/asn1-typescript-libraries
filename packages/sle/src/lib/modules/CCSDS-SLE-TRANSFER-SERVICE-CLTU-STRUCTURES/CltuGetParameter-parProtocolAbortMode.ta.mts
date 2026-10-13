/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_protocolAbortMode
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_CltuGetParameter_parProtocolAbortMode_parameterValue, _encode_CltuGetParameter_parProtocolAbortMode_parameterValue, CltuGetParameter_parProtocolAbortMode_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parProtocolAbortMode-parameterValue.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parProtocolAbortMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parProtocolAbortMode ::= SEQUENCE
 *    {  parameterName                    ParameterName (protocolAbortMode)
 *    ,  parameterValue                   INTEGER
 *       {  abort                                  (0)
 *       ,  continue                               (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parProtocolAbortMode {
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
    readonly parameterValue: CltuGetParameter_parProtocolAbortMode_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: CltuGetParameter_parProtocolAbortMode_parameterValue
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_protocolAbortMode)])) {
            throw new ASN1Error("CltuGetParameter_parProtocolAbortMode.parameterName violates ParameterName (protocolAbortMode)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parProtocolAbortMode
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parProtocolAbortMode`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parProtocolAbortMode`.
     * @returns {CltuGetParameter_parProtocolAbortMode}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parProtocolAbortMode)]: (CltuGetParameter_parProtocolAbortMode)[_K] }): CltuGetParameter_parProtocolAbortMode {
        return new CltuGetParameter_parProtocolAbortMode(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parProtocolAbortMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parProtocolAbortMode: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parProtocolAbortMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parProtocolAbortMode: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parProtocolAbortMode
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parProtocolAbortMode: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parProtocolAbortMode: $.ASN1Decoder<CltuGetParameter_parProtocolAbortMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parProtocolAbortMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parProtocolAbortMode (el: _Element): CltuGetParameter_parProtocolAbortMode {
    if (!_cached_decoder_for_CltuGetParameter_parProtocolAbortMode) { _cached_decoder_for_CltuGetParameter_parProtocolAbortMode = function (el: _Element): CltuGetParameter_parProtocolAbortMode {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parProtocolAbortMode contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: CltuGetParameter_parProtocolAbortMode_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_CltuGetParameter_parProtocolAbortMode_parameterValue(sequence[1]);
    return new CltuGetParameter_parProtocolAbortMode(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parProtocolAbortMode(el);
}

let _cached_encoder_for_CltuGetParameter_parProtocolAbortMode: $.ASN1Encoder<CltuGetParameter_parProtocolAbortMode> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parProtocolAbortMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parProtocolAbortMode, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parProtocolAbortMode (value: CltuGetParameter_parProtocolAbortMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parProtocolAbortMode) { _cached_encoder_for_CltuGetParameter_parProtocolAbortMode = function (value: CltuGetParameter_parProtocolAbortMode, _elGetter: $.ASN1Encoder<CltuGetParameter_parProtocolAbortMode>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_CltuGetParameter_parProtocolAbortMode_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parProtocolAbortMode(value, elGetter);
}


/* eslint-enable */
