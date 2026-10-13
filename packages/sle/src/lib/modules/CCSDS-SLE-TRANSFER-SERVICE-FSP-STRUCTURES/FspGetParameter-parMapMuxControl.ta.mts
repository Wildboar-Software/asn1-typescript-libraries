/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_mapMuxControl
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { MuxControl, _decode_MuxControl, _encode_MuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MuxControl.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parMapMuxControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parMapMuxControl ::= SEQUENCE
 *    {  parameterName     ParameterName (mapMuxControl)
 *    ,  parameterValue    MuxControl
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parMapMuxControl {
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
    readonly parameterValue: MuxControl;

    constructor (
        parameterName: ParameterName,
        parameterValue: MuxControl
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_mapMuxControl)])) {
            throw new ASN1Error("FspGetParameter_parMapMuxControl.parameterName violates ParameterName (mapMuxControl)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parMapMuxControl
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parMapMuxControl`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parMapMuxControl`.
     * @returns {FspGetParameter_parMapMuxControl}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parMapMuxControl)]: (FspGetParameter_parMapMuxControl)[_K] }): FspGetParameter_parMapMuxControl {
        return new FspGetParameter_parMapMuxControl(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parMapMuxControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parMapMuxControl: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parMapMuxControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parMapMuxControl: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parMapMuxControl
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parMapMuxControl: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parMapMuxControl: $.ASN1Decoder<FspGetParameter_parMapMuxControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parMapMuxControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parMapMuxControl (el: _Element): FspGetParameter_parMapMuxControl {
    if (!_cached_decoder_for_FspGetParameter_parMapMuxControl) { _cached_decoder_for_FspGetParameter_parMapMuxControl = function (el: _Element): FspGetParameter_parMapMuxControl {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parMapMuxControl contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: MuxControl;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_MuxControl(sequence[1]);
    return new FspGetParameter_parMapMuxControl(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parMapMuxControl(el);
}

let _cached_encoder_for_FspGetParameter_parMapMuxControl: $.ASN1Encoder<FspGetParameter_parMapMuxControl> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parMapMuxControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parMapMuxControl, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parMapMuxControl (value: FspGetParameter_parMapMuxControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parMapMuxControl) { _cached_encoder_for_FspGetParameter_parMapMuxControl = function (value: FspGetParameter_parMapMuxControl, elGetter: $.ASN1Encoder<FspGetParameter_parMapMuxControl>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_MuxControl(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parMapMuxControl(value, elGetter);
}


/* eslint-enable */
