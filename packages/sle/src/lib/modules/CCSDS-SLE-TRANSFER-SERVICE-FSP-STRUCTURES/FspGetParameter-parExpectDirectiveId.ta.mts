/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_expectedDirectiveIdentification
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parExpectDirectiveId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parExpectDirectiveId ::= SEQUENCE
 *    {  parameterName     ParameterName  (expectedDirectiveIdentification)
 *    ,  parameterValue    IntUnsignedLong
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parExpectDirectiveId {
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
    readonly parameterValue: IntUnsignedLong;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntUnsignedLong
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_expectedDirectiveIdentification)])) {
            throw new ASN1Error("FspGetParameter_parExpectDirectiveId.parameterName violates ParameterName (expectedDirectiveIdentification)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parExpectDirectiveId
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parExpectDirectiveId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parExpectDirectiveId`.
     * @returns {FspGetParameter_parExpectDirectiveId}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parExpectDirectiveId)]: (FspGetParameter_parExpectDirectiveId)[_K] }): FspGetParameter_parExpectDirectiveId {
        return new FspGetParameter_parExpectDirectiveId(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parExpectDirectiveId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parExpectDirectiveId: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parExpectDirectiveId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parExpectDirectiveId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parExpectDirectiveId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parExpectDirectiveId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parExpectDirectiveId: $.ASN1Decoder<FspGetParameter_parExpectDirectiveId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parExpectDirectiveId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parExpectDirectiveId (el: _Element): FspGetParameter_parExpectDirectiveId {
    if (!_cached_decoder_for_FspGetParameter_parExpectDirectiveId) { _cached_decoder_for_FspGetParameter_parExpectDirectiveId = function (el: _Element): FspGetParameter_parExpectDirectiveId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parExpectDirectiveId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntUnsignedLong;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntUnsignedLong(sequence[1]);
    return new FspGetParameter_parExpectDirectiveId(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parExpectDirectiveId(el);
}

let _cached_encoder_for_FspGetParameter_parExpectDirectiveId: $.ASN1Encoder<FspGetParameter_parExpectDirectiveId> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parExpectDirectiveId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parExpectDirectiveId, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parExpectDirectiveId (value: FspGetParameter_parExpectDirectiveId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parExpectDirectiveId) { _cached_encoder_for_FspGetParameter_parExpectDirectiveId = function (value: FspGetParameter_parExpectDirectiveId, elGetter: $.ASN1Encoder<FspGetParameter_parExpectDirectiveId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parExpectDirectiveId(value, elGetter);
}


/* eslint-enable */
