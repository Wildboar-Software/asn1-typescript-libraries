/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_subcarrierToBitRateRatio
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { SubcarrierDivisor, _decode_SubcarrierDivisor, _encode_SubcarrierDivisor } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/SubcarrierDivisor.ta.mjs";



/**
 * @summary CltuGetParameter_parSubcarrierToBitRateRatio
 * @description
 * 
 * subcarrier-to-bit-rate-ratio: when a subcarrier is used, the ratio of the
 * subcarrier frequency to the uplink bit rate. A value of one means the data
 * are modulated directly onto the carrier. The Annex A comment calls the same
 * value the divisor of the subcarrier frequency. Set by service management.
 * CCSDS 912.1-B-5, table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parSubcarrierToBitRateRatio ::= SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (subcarrierToBitRateRatio)
 *    ,  parameterValue                   SubcarrierDivisor
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parSubcarrierToBitRateRatio {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `subcarrierToBitRateRatio`. Names the
     * subcarrier-to-bit-rate-ratio parameter requested by CLTU-GET-PARAMETER.
     * CCSDS 912.1-B-5, section 3.10.2.5 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Subcarrier frequency divided by the uplink bit rate. One means direct
     * carrier modulation. CCSDS 912.1-B-5, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: SubcarrierDivisor;

    constructor (
        parameterName: ParameterName,
        parameterValue: SubcarrierDivisor
    ) {
        if (parameterName !== ParameterName_subcarrierToBitRateRatio) {
            throw new ASN1Error("CltuGetParameter_parSubcarrierToBitRateRatio.parameterName violates ParameterName (subcarrierToBitRateRatio)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parSubcarrierToBitRateRatio
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parSubcarrierToBitRateRatio`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parSubcarrierToBitRateRatio`.
     * @returns {CltuGetParameter_parSubcarrierToBitRateRatio}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parSubcarrierToBitRateRatio)]: (CltuGetParameter_parSubcarrierToBitRateRatio)[_K] }): CltuGetParameter_parSubcarrierToBitRateRatio {
        return new CltuGetParameter_parSubcarrierToBitRateRatio(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parSubcarrierToBitRateRatio
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parSubcarrierToBitRateRatio: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parSubcarrierToBitRateRatio
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parSubcarrierToBitRateRatio: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parSubcarrierToBitRateRatio
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parSubcarrierToBitRateRatio: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parSubcarrierToBitRateRatio: $.ASN1Decoder<CltuGetParameter_parSubcarrierToBitRateRatio> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parSubcarrierToBitRateRatio
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parSubcarrierToBitRateRatio (el: _Element): CltuGetParameter_parSubcarrierToBitRateRatio {
    if (!_cached_decoder_for_CltuGetParameter_parSubcarrierToBitRateRatio) { _cached_decoder_for_CltuGetParameter_parSubcarrierToBitRateRatio = function (el: _Element): CltuGetParameter_parSubcarrierToBitRateRatio {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parSubcarrierToBitRateRatio contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: SubcarrierDivisor;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_SubcarrierDivisor(sequence[1]);
    return new CltuGetParameter_parSubcarrierToBitRateRatio(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parSubcarrierToBitRateRatio(el);
}

let _cached_encoder_for_CltuGetParameter_parSubcarrierToBitRateRatio: $.ASN1Encoder<CltuGetParameter_parSubcarrierToBitRateRatio> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parSubcarrierToBitRateRatio into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parSubcarrierToBitRateRatio, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parSubcarrierToBitRateRatio (value: CltuGetParameter_parSubcarrierToBitRateRatio, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parSubcarrierToBitRateRatio) { _cached_encoder_for_CltuGetParameter_parSubcarrierToBitRateRatio = function (value: CltuGetParameter_parSubcarrierToBitRateRatio, _elGetter: $.ASN1Encoder<CltuGetParameter_parSubcarrierToBitRateRatio>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_SubcarrierDivisor(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parSubcarrierToBitRateRatio(value, elGetter);
}


/* eslint-enable */
