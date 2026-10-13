/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_clcwGlobalVcId
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { ClcwGvcId, _decode_ClcwGvcId, _encode_ClcwGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/ClcwGvcId.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parClcwGlobalVcId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parClcwGlobalVcId ::= SEQUENCE
 *    {  parameterName     ParameterName  (clcwGlobalVcId)
 *    ,  parameterValue    ClcwGvcId
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parClcwGlobalVcId {
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
    readonly parameterValue: ClcwGvcId;

    constructor (
        parameterName: ParameterName,
        parameterValue: ClcwGvcId
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_clcwGlobalVcId)])) {
            throw new ASN1Error("FspGetParameter_parClcwGlobalVcId.parameterName violates ParameterName (clcwGlobalVcId)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parClcwGlobalVcId
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parClcwGlobalVcId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parClcwGlobalVcId`.
     * @returns {FspGetParameter_parClcwGlobalVcId}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parClcwGlobalVcId)]: (FspGetParameter_parClcwGlobalVcId)[_K] }): FspGetParameter_parClcwGlobalVcId {
        return new FspGetParameter_parClcwGlobalVcId(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parClcwGlobalVcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parClcwGlobalVcId: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parClcwGlobalVcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parClcwGlobalVcId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parClcwGlobalVcId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parClcwGlobalVcId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parClcwGlobalVcId: $.ASN1Decoder<FspGetParameter_parClcwGlobalVcId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parClcwGlobalVcId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parClcwGlobalVcId (el: _Element): FspGetParameter_parClcwGlobalVcId {
    if (!_cached_decoder_for_FspGetParameter_parClcwGlobalVcId) { _cached_decoder_for_FspGetParameter_parClcwGlobalVcId = function (el: _Element): FspGetParameter_parClcwGlobalVcId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parClcwGlobalVcId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: ClcwGvcId;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_ClcwGvcId(sequence[1]);
    return new FspGetParameter_parClcwGlobalVcId(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parClcwGlobalVcId(el);
}

let _cached_encoder_for_FspGetParameter_parClcwGlobalVcId: $.ASN1Encoder<FspGetParameter_parClcwGlobalVcId> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parClcwGlobalVcId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parClcwGlobalVcId, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parClcwGlobalVcId (value: FspGetParameter_parClcwGlobalVcId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parClcwGlobalVcId) { _cached_encoder_for_FspGetParameter_parClcwGlobalVcId = function (value: FspGetParameter_parClcwGlobalVcId, _elGetter: $.ASN1Encoder<FspGetParameter_parClcwGlobalVcId>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_ClcwGvcId(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parClcwGlobalVcId(value, elGetter);
}


/* eslint-enable */
