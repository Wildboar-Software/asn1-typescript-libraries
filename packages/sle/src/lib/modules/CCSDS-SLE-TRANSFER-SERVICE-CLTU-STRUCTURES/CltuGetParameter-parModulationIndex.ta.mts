/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_modulationIndex
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type ModulationIndex, _decode_ModulationIndex, _encode_ModulationIndex } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ModulationIndex.ta.mjs";



/**
 * @summary CltuGetParameter_parModulationIndex
 * @description
 * 
 * modulation-index: the peak angle by which the RF carrier is phase shifted
 * from the unmodulated carrier, in milliradians (10^-3 rad). Set by service
 * management. CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parModulationIndex ::= SEQUENCE
 *    {  parameterName                    ParameterName (modulationIndex)
 *    ,  parameterValue                   ModulationIndex
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parModulationIndex {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `modulationIndex`. Names the modulation-index parameter requested
     * by CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section 3.10.2.5 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Peak carrier phase shift in milliradians. CCSDS 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: ModulationIndex;

    constructor (
        parameterName: ParameterName,
        parameterValue: ModulationIndex
    ) {
        if (parameterName !== ParameterName_modulationIndex) {
            throw new ASN1Error("CltuGetParameter_parModulationIndex.parameterName violates ParameterName (modulationIndex)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parModulationIndex
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parModulationIndex`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parModulationIndex`.
     * @returns {CltuGetParameter_parModulationIndex}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parModulationIndex)]: (CltuGetParameter_parModulationIndex)[_K] }): CltuGetParameter_parModulationIndex {
        return new CltuGetParameter_parModulationIndex(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parModulationIndex
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parModulationIndex: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parModulationIndex
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parModulationIndex: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parModulationIndex
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parModulationIndex: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parModulationIndex: $.ASN1Decoder<CltuGetParameter_parModulationIndex> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parModulationIndex
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parModulationIndex (el: _Element): CltuGetParameter_parModulationIndex {
    if (!_cached_decoder_for_CltuGetParameter_parModulationIndex) { _cached_decoder_for_CltuGetParameter_parModulationIndex = function (el: _Element): CltuGetParameter_parModulationIndex {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parModulationIndex contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ModulationIndex;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ModulationIndex(sequence[1]);
    return new CltuGetParameter_parModulationIndex(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parModulationIndex(el);
}

let _cached_encoder_for_CltuGetParameter_parModulationIndex: $.ASN1Encoder<CltuGetParameter_parModulationIndex> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parModulationIndex into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parModulationIndex, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parModulationIndex (value: CltuGetParameter_parModulationIndex, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parModulationIndex) { _cached_encoder_for_CltuGetParameter_parModulationIndex = function (value: CltuGetParameter_parModulationIndex, _elGetter: $.ASN1Encoder<CltuGetParameter_parModulationIndex>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ModulationIndex(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parModulationIndex(value, elGetter);
}


/* eslint-enable */
