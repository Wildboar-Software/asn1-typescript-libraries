/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_expectedSlduIdentification
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parExpectSlduId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parExpectSlduId ::= SEQUENCE
 *    {  parameterName     ParameterName  (expectedSlduIdentification)
 *    ,  parameterValue    PacketIdentification
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parExpectSlduId {
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
    readonly parameterValue: PacketIdentification;

    constructor (
        parameterName: ParameterName,
        parameterValue: PacketIdentification
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_expectedSlduIdentification)])) {
            throw new ASN1Error("FspGetParameter_parExpectSlduId.parameterName violates ParameterName (expectedSlduIdentification)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parExpectSlduId
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parExpectSlduId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parExpectSlduId`.
     * @returns {FspGetParameter_parExpectSlduId}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parExpectSlduId)]: (FspGetParameter_parExpectSlduId)[_K] }): FspGetParameter_parExpectSlduId {
        return new FspGetParameter_parExpectSlduId(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parExpectSlduId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parExpectSlduId: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parExpectSlduId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parExpectSlduId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parExpectSlduId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parExpectSlduId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parExpectSlduId: $.ASN1Decoder<FspGetParameter_parExpectSlduId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parExpectSlduId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parExpectSlduId (el: _Element): FspGetParameter_parExpectSlduId {
    if (!_cached_decoder_for_FspGetParameter_parExpectSlduId) { _cached_decoder_for_FspGetParameter_parExpectSlduId = function (el: _Element): FspGetParameter_parExpectSlduId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parExpectSlduId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: PacketIdentification;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_PacketIdentification(sequence[1]);
    return new FspGetParameter_parExpectSlduId(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parExpectSlduId(el);
}

let _cached_encoder_for_FspGetParameter_parExpectSlduId: $.ASN1Encoder<FspGetParameter_parExpectSlduId> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parExpectSlduId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parExpectSlduId, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parExpectSlduId (value: FspGetParameter_parExpectSlduId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parExpectSlduId) { _cached_encoder_for_FspGetParameter_parExpectSlduId = function (value: FspGetParameter_parExpectSlduId, _elGetter: $.ASN1Encoder<FspGetParameter_parExpectSlduId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_PacketIdentification(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parExpectSlduId(value, elGetter);
}


/* eslint-enable */
