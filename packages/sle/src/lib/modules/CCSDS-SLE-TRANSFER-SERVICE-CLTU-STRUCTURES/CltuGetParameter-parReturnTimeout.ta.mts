/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_returnTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type TimeoutPeriod, _decode_TimeoutPeriod, _encode_TimeoutPeriod } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/TimeoutPeriod.ta.mjs";



/**
 * @summary CltuGetParameter_parReturnTimeout
 * @description
 * 
 * return-timeout-period: the maximum time, in seconds, from invoking a
 * confirmed FCLTU operation until the invoker receives the return. Annex A
 * constrains it to 1 through 600. If the return is still missing when the
 * period expires, the invoker sends CLTU-PEER-ABORT with diagnostic return
 * timeout. The period accounts for application performance and communications
 * delay, and generation of the return must not wait on a person. Set by service
 * management. CCSDS 912.1-B-5, table 3-11 and section 4.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parReturnTimeout ::= SEQUENCE
 *    {  parameterName                    ParameterName (returnTimeoutPeriod)
 *    ,  parameterValue                   TimeoutPeriod
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parReturnTimeout {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Must be `returnTimeoutPeriod`. Names the return-timeout-period parameter
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
     * Timeout in seconds, from 1 through 600. CCSDS 912.1-B-5, table 3-11 and
     * section 4.1.3.
     * @public
     * @readonly
     */
    readonly parameterValue: TimeoutPeriod;

    constructor (
        parameterName: ParameterName,
        parameterValue: TimeoutPeriod
    ) {
        if (parameterName !== ParameterName_returnTimeoutPeriod) {
            throw new ASN1Error("CltuGetParameter_parReturnTimeout.parameterName violates ParameterName (returnTimeoutPeriod)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parReturnTimeout
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parReturnTimeout`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parReturnTimeout`.
     * @returns {CltuGetParameter_parReturnTimeout}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parReturnTimeout)]: (CltuGetParameter_parReturnTimeout)[_K] }): CltuGetParameter_parReturnTimeout {
        return new CltuGetParameter_parReturnTimeout(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parReturnTimeout: $.ASN1Decoder<CltuGetParameter_parReturnTimeout> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parReturnTimeout
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parReturnTimeout (el: _Element): CltuGetParameter_parReturnTimeout {
    if (!_cached_decoder_for_CltuGetParameter_parReturnTimeout) { _cached_decoder_for_CltuGetParameter_parReturnTimeout = function (el: _Element): CltuGetParameter_parReturnTimeout {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parReturnTimeout contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: TimeoutPeriod;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_TimeoutPeriod(sequence[1]);
    return new CltuGetParameter_parReturnTimeout(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parReturnTimeout(el);
}

let _cached_encoder_for_CltuGetParameter_parReturnTimeout: $.ASN1Encoder<CltuGetParameter_parReturnTimeout> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parReturnTimeout into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parReturnTimeout, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parReturnTimeout (value: CltuGetParameter_parReturnTimeout, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parReturnTimeout) { _cached_encoder_for_CltuGetParameter_parReturnTimeout = function (value: CltuGetParameter_parReturnTimeout, _elGetter: $.ASN1Encoder<CltuGetParameter_parReturnTimeout>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_TimeoutPeriod(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parReturnTimeout(value, elGetter);
}


/* eslint-enable */
