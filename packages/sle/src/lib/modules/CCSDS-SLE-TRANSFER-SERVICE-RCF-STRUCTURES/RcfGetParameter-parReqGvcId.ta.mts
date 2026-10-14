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
import { RequestedGvcId, _decode_RequestedGvcId, _encode_RequestedGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RequestedGvcId.ta.mjs";



/**
 * @summary RcfGetParameter_parReqGvcId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parReqGvcId ::= SEQUENCE
 *     { parameterName                 ParameterName (requestedGvcid)
 *     , parameterValue                RequestedGvcId
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parReqGvcId {
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
    readonly parameterValue: RequestedGvcId;

    constructor (
        parameterName: ParameterName,
        parameterValue: RequestedGvcId
    ) {
        if (parameterName !== ParameterName_requestedGvcid) {
            throw new ASN1Error("RcfGetParameter_parReqGvcId.parameterName violates ParameterName (requestedGvcid)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parReqGvcId
     * @description
     * 
     * This takes an `object` and converts it to a `RcfGetParameter_parReqGvcId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parReqGvcId`.
     * @returns {RcfGetParameter_parReqGvcId}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parReqGvcId)]: (RcfGetParameter_parReqGvcId)[_K] }): RcfGetParameter_parReqGvcId {
        return new RcfGetParameter_parReqGvcId(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parReqGvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parReqGvcId: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parReqGvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parReqGvcId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parReqGvcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parReqGvcId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parReqGvcId: $.ASN1Decoder<RcfGetParameter_parReqGvcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parReqGvcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parReqGvcId (el: _Element): RcfGetParameter_parReqGvcId {
    if (!_cached_decoder_for_RcfGetParameter_parReqGvcId) { _cached_decoder_for_RcfGetParameter_parReqGvcId = function (el: _Element): RcfGetParameter_parReqGvcId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parReqGvcId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RequestedGvcId;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RequestedGvcId(sequence[1]);
    return new RcfGetParameter_parReqGvcId(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parReqGvcId(el);
}

let _cached_encoder_for_RcfGetParameter_parReqGvcId: $.ASN1Encoder<RcfGetParameter_parReqGvcId> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parReqGvcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parReqGvcId, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parReqGvcId (value: RcfGetParameter_parReqGvcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parReqGvcId) { _cached_encoder_for_RcfGetParameter_parReqGvcId = function (value: RcfGetParameter_parReqGvcId, _elGetter: $.ASN1Encoder<RcfGetParameter_parReqGvcId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RequestedGvcId(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parReqGvcId(value, elGetter);
}


/* eslint-enable */
