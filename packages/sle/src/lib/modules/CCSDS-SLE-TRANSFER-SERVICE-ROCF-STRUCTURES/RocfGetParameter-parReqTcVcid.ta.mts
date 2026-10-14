/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_requestedTcVcid
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { RequestedTcVcid, _decode_RequestedTcVcid, _encode_RequestedTcVcid } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedTcVcid.ta.mjs";



/**
 * @summary RocfGetParameter_parReqTcVcid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter-parReqTcVcid ::= SEQUENCE
 *    {  parameterName                 ParameterName (requestedTcVcid)
 *    ,  parameterValue                RequestedTcVcid
 *    }
 * ```
 * 
 * @class
 */
export
class RocfGetParameter_parReqTcVcid {
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
    readonly parameterValue: RequestedTcVcid;

    constructor (
        parameterName: ParameterName,
        parameterValue: RequestedTcVcid
    ) {
        if (parameterName !== ParameterName_requestedTcVcid) {
            throw new ASN1Error("RocfGetParameter_parReqTcVcid.parameterName violates ParameterName (requestedTcVcid)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RocfGetParameter_parReqTcVcid
     * @description
     * 
     * This takes an `object` and converts it to a `RocfGetParameter_parReqTcVcid`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfGetParameter_parReqTcVcid`.
     * @returns {RocfGetParameter_parReqTcVcid}
     */
    public static _from_object (_o: { [_K in keyof (RocfGetParameter_parReqTcVcid)]: (RocfGetParameter_parReqTcVcid)[_K] }): RocfGetParameter_parReqTcVcid {
        return new RocfGetParameter_parReqTcVcid(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RocfGetParameter_parReqTcVcid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfGetParameter_parReqTcVcid: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfGetParameter_parReqTcVcid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfGetParameter_parReqTcVcid: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfGetParameter_parReqTcVcid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfGetParameter_parReqTcVcid: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfGetParameter_parReqTcVcid: $.ASN1Decoder<RocfGetParameter_parReqTcVcid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter_parReqTcVcid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter_parReqTcVcid (el: _Element): RocfGetParameter_parReqTcVcid {
    if (!_cached_decoder_for_RocfGetParameter_parReqTcVcid) { _cached_decoder_for_RocfGetParameter_parReqTcVcid = function (el: _Element): RocfGetParameter_parReqTcVcid {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfGetParameter-parReqTcVcid contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: RequestedTcVcid;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_RequestedTcVcid(sequence[1]);
    return new RocfGetParameter_parReqTcVcid(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RocfGetParameter_parReqTcVcid(el);
}

let _cached_encoder_for_RocfGetParameter_parReqTcVcid: $.ASN1Encoder<RocfGetParameter_parReqTcVcid> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter_parReqTcVcid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter_parReqTcVcid, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter_parReqTcVcid (value: RocfGetParameter_parReqTcVcid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter_parReqTcVcid) { _cached_encoder_for_RocfGetParameter_parReqTcVcid = function (value: RocfGetParameter_parReqTcVcid, _elGetter: $.ASN1Encoder<RocfGetParameter_parReqTcVcid>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_RequestedTcVcid(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfGetParameter_parReqTcVcid(value, elGetter);
}


/* eslint-enable */
