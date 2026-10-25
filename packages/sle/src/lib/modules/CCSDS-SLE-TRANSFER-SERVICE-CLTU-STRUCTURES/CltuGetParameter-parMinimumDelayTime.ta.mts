/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_minimumDelayTime
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type Duration, _decode_Duration, _encode_Duration } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Duration.ta.mjs";



/**
 * @summary CltuGetParameter_parMinimumDelayTime
 * @description
 * 
 * minimum-delay-time: the smallest delay-time the provider accepts between
 * consecutive CLTUs. delay-time is specified in microseconds (section
 * 3.6.2.8.1), and a CLTU-TRANSFER-DATA whose delay-time is below this floor is
 * rejected with diagnostic invalid delay time. Set by service management. CCSDS
 * 912.1-B-5, table 3-11 and section 3.6.2.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parMinimumDelayTime ::= SEQUENCE
 *    {  parameterName                    ParameterName (minimumDelayTime)
 *    ,  parameterValue                   Duration
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parMinimumDelayTime {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `minimumDelayTime`. Names the minimum-delay-time parameter
     * requested by CLTU-GET-PARAMETER. CCSDS 912.1-B-5, section 3.10.2.5 and
     * table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Floor applied to delay-time. A smaller delay-time is diagnostic invalid
     * delay time. CCSDS 912.1-B-5, sections 3.6.2.8 and 3.6.2.13.
     * @public
     * @readonly
     */
    readonly parameterValue: Duration;

    constructor (
        parameterName: ParameterName,
        parameterValue: Duration
    ) {
        if (parameterName !== ParameterName_minimumDelayTime) {
            throw new ASN1Error("CltuGetParameter_parMinimumDelayTime.parameterName violates ParameterName (minimumDelayTime)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parMinimumDelayTime
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parMinimumDelayTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parMinimumDelayTime`.
     * @returns {CltuGetParameter_parMinimumDelayTime}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parMinimumDelayTime)]: (CltuGetParameter_parMinimumDelayTime)[_K] }): CltuGetParameter_parMinimumDelayTime {
        return new CltuGetParameter_parMinimumDelayTime(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parMinimumDelayTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parMinimumDelayTime: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parMinimumDelayTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parMinimumDelayTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parMinimumDelayTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parMinimumDelayTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parMinimumDelayTime: $.ASN1Decoder<CltuGetParameter_parMinimumDelayTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parMinimumDelayTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parMinimumDelayTime (el: _Element): CltuGetParameter_parMinimumDelayTime {
    if (!_cached_decoder_for_CltuGetParameter_parMinimumDelayTime) { _cached_decoder_for_CltuGetParameter_parMinimumDelayTime = function (el: _Element): CltuGetParameter_parMinimumDelayTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parMinimumDelayTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: Duration;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_Duration(sequence[1]);
    return new CltuGetParameter_parMinimumDelayTime(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parMinimumDelayTime(el);
}

let _cached_encoder_for_CltuGetParameter_parMinimumDelayTime: $.ASN1Encoder<CltuGetParameter_parMinimumDelayTime> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parMinimumDelayTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parMinimumDelayTime, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parMinimumDelayTime (value: CltuGetParameter_parMinimumDelayTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parMinimumDelayTime) { _cached_encoder_for_CltuGetParameter_parMinimumDelayTime = function (value: CltuGetParameter_parMinimumDelayTime, _elGetter: $.ASN1Encoder<CltuGetParameter_parMinimumDelayTime>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_Duration(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parMinimumDelayTime(value, elGetter);
}


/* eslint-enable */
