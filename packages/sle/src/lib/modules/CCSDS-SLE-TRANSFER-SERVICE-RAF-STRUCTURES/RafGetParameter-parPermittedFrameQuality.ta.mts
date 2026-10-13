/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_permittedFrameQuality
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { PermittedFrameQualitySet, _decode_PermittedFrameQualitySet, _encode_PermittedFrameQualitySet } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/PermittedFrameQualitySet.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RafGetParameter_parPermittedFrameQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter-parPermittedFrameQuality ::= SEQUENCE
 *     {   parameterName                ParameterName (permittedFrameQuality)
 *     ,   parameterValue               PermittedFrameQualitySet
 *     }
 * ```
 * 
 * @class
 */
export
class RafGetParameter_parPermittedFrameQuality {
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
    readonly parameterValue: PermittedFrameQualitySet;

    constructor (
        parameterName: ParameterName,
        parameterValue: PermittedFrameQualitySet
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_permittedFrameQuality)])) {
            throw new ASN1Error("RafGetParameter_parPermittedFrameQuality.parameterName violates ParameterName (permittedFrameQuality)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RafGetParameter_parPermittedFrameQuality
     * @description
     * 
     * This takes an `object` and converts it to a `RafGetParameter_parPermittedFrameQuality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafGetParameter_parPermittedFrameQuality`.
     * @returns {RafGetParameter_parPermittedFrameQuality}
     */
    public static _from_object (_o: { [_K in keyof (RafGetParameter_parPermittedFrameQuality)]: (RafGetParameter_parPermittedFrameQuality)[_K] }): RafGetParameter_parPermittedFrameQuality {
        return new RafGetParameter_parPermittedFrameQuality(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RafGetParameter_parPermittedFrameQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafGetParameter_parPermittedFrameQuality: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of RafGetParameter_parPermittedFrameQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafGetParameter_parPermittedFrameQuality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafGetParameter_parPermittedFrameQuality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafGetParameter_parPermittedFrameQuality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafGetParameter_parPermittedFrameQuality: $.ASN1Decoder<RafGetParameter_parPermittedFrameQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter_parPermittedFrameQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter_parPermittedFrameQuality (el: _Element): RafGetParameter_parPermittedFrameQuality {
    if (!_cached_decoder_for_RafGetParameter_parPermittedFrameQuality) { _cached_decoder_for_RafGetParameter_parPermittedFrameQuality = function (el: _Element): RafGetParameter_parPermittedFrameQuality {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafGetParameter-parPermittedFrameQuality contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: PermittedFrameQualitySet;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_PermittedFrameQualitySet(sequence[1]);
    return new RafGetParameter_parPermittedFrameQuality(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RafGetParameter_parPermittedFrameQuality(el);
}

let _cached_encoder_for_RafGetParameter_parPermittedFrameQuality: $.ASN1Encoder<RafGetParameter_parPermittedFrameQuality> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter_parPermittedFrameQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter_parPermittedFrameQuality, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter_parPermittedFrameQuality (value: RafGetParameter_parPermittedFrameQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter_parPermittedFrameQuality) { _cached_encoder_for_RafGetParameter_parPermittedFrameQuality = function (value: RafGetParameter_parPermittedFrameQuality, elGetter: $.ASN1Encoder<RafGetParameter_parPermittedFrameQuality>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_PermittedFrameQualitySet(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafGetParameter_parPermittedFrameQuality(value, elGetter);
}


/* eslint-enable */
