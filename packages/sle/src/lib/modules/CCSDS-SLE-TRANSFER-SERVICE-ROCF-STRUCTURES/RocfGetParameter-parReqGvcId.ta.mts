/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_requestedGvcid
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RequestedGvcId, _decode_RequestedGvcId, _encode_RequestedGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedGvcId.ta.mjs";



/**
 * @summary RocfGetParameter_parReqGvcId
 * @description
 * 
 * Successful ROCF-GET-PARAMETER result for the requested global VCID. While
 * the instance is in state 3 (active), this is the value from the most recent
 * ROCF-START. Otherwise it is the first element of the permitted global-VCID
 * set.
 *
 * CCSDS 911.5-B-4, table 3-11 and section 3.4.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parReqGvcId ::= SEQUENCE
 *    {  parameterName                 ParameterName (requestedGvcid)
 *    ,  parameterValue                RequestedGvcId
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parReqGvcId {
    /**
     * @summary `parameterName`.
     * @description
     * 
     * Fixed to requestedGvcid. CCSDS 911.5-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * 
     * Global VCID currently in effect for OCF extraction while the instance is
     * active, or the first permitted global VCID while it is not.
     *
     * CCSDS 911.5-B-4, table 3-11 and section 3.4.2.7.
     * @public
     * @readonly
     */
    readonly parameterValue: RequestedGvcId;

    constructor (
        parameterName: ParameterName,
        parameterValue: RequestedGvcId
    ) {
        if (parameterName !== ParameterName_requestedGvcid) {
            throw new ASN1Error("RocfGetParameter_parReqGvcId.parameterName violates ParameterName (requestedGvcid)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parReqGvcId
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parReqGvcId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parReqGvcId`.
     * @returns {RocfGetParameter_parReqGvcId}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parReqGvcId)]: (RocfGetParameter_parReqGvcId)[_K] }): RocfGetParameter_parReqGvcId {
        return new RocfGetParameter_parReqGvcId(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parReqGvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parReqGvcId: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parReqGvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parReqGvcId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parReqGvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parReqGvcId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parReqGvcId: $.ASN1Decoder<RocfGetParameter_parReqGvcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parReqGvcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parReqGvcId (el: _Element): RocfGetParameter_parReqGvcId {
    if (!_cached_decoder_for_RocfGetParameter_parReqGvcId) { _cached_decoder_for_RocfGetParameter_parReqGvcId = function (el: _Element): RocfGetParameter_parReqGvcId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parReqGvcId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RequestedGvcId;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RequestedGvcId(sequence[1]);
    return new RocfGetParameter_parReqGvcId(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parReqGvcId(el);
}

let _cached_encoder_for_RocfGetParameter_parReqGvcId: $.ASN1Encoder<RocfGetParameter_parReqGvcId> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parReqGvcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parReqGvcId, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parReqGvcId (value: RocfGetParameter_parReqGvcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parReqGvcId) { _cached_encoder_for_RocfGetParameter_parReqGvcId = function (value: RocfGetParameter_parReqGvcId, _elGetter: $.ASN1Encoder<RocfGetParameter_parReqGvcId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RequestedGvcId(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parReqGvcId(value, elGetter);
}


/* eslint-enable */
