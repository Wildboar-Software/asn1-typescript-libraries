/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_returnTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { TimeoutPeriod, _decode_TimeoutPeriod, _encode_TimeoutPeriod } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/TimeoutPeriod.ta.mjs";



/**
 * @summary RafGetParameter_parReturnTimeout
 * @description
 * 
 * RAF-GET-PARAMETER value of `return-timeout-period`: the maximum seconds from
 * a confirmed RAF invocation until the return arrives. Service management sets
 * it. Expiry causes RAF-PEER-ABORT with diagnostic `return timeout`.
 * 
 * CCSDS 911.1-B-5, table 3-11 and section 4.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parReturnTimeout ::= SEQUENCE
 *     {   parameterName                ParameterName (returnTimeoutPeriod)
 *     ,   parameterValue               TimeoutPeriod
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parReturnTimeout {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `returnTimeoutPeriod`, selecting return-timeout-period in table
     * 3-11. CCSDS 911.1-B-5, annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * Return timeout in seconds, from 1 to 600. CCSDS 911.1-B-5, table 3-11 and
     * annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: TimeoutPeriod;

    constructor (
        parameterName: ParameterName,
        parameterValue: TimeoutPeriod
    ) {
        if (parameterName !== ParameterName_returnTimeoutPeriod) {
            throw new ASN1Error("RafGetParameter_parReturnTimeout.parameterName violates ParameterName (returnTimeoutPeriod)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parReturnTimeout
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parReturnTimeout`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parReturnTimeout`.
     * @returns {RafGetParameter_parReturnTimeout}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parReturnTimeout)]: (RafGetParameter_parReturnTimeout)[_K] }): RafGetParameter_parReturnTimeout {
        return new RafGetParameter_parReturnTimeout(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parReturnTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parReturnTimeout: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parReturnTimeout: $.ASN1Decoder<RafGetParameter_parReturnTimeout> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parReturnTimeout
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parReturnTimeout (el: _Element): RafGetParameter_parReturnTimeout {
    if (!_cached_decoder_for_RafGetParameter_parReturnTimeout) { _cached_decoder_for_RafGetParameter_parReturnTimeout = function (el: _Element): RafGetParameter_parReturnTimeout {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parReturnTimeout contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: TimeoutPeriod;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_TimeoutPeriod(sequence[1]);
    return new RafGetParameter_parReturnTimeout(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parReturnTimeout(el);
}

let _cached_encoder_for_RafGetParameter_parReturnTimeout: $.ASN1Encoder<RafGetParameter_parReturnTimeout> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parReturnTimeout into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parReturnTimeout, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parReturnTimeout (value: RafGetParameter_parReturnTimeout, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parReturnTimeout) { _cached_encoder_for_RafGetParameter_parReturnTimeout = function (value: RafGetParameter_parReturnTimeout, _elGetter: $.ASN1Encoder<RafGetParameter_parReturnTimeout>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_TimeoutPeriod(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parReturnTimeout(value, elGetter);
}


/* eslint-enable */
