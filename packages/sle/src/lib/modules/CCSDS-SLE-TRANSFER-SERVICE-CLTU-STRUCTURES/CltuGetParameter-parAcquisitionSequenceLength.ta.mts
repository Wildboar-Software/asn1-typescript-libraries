/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_acquisitionSequenceLength
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { IntUnsignedShort, _decode_IntUnsignedShort, _encode_IntUnsignedShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedShort.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parAcquisitionSequenceLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parAcquisitionSequenceLength ::= SEQUENCE
 *    {  parameterName                    ParameterName(acquisitionSequenceLength)
 *    , parameterValue                    IntUnsignedShort
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parAcquisitionSequenceLength {
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
    readonly parameterValue: IntUnsignedShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntUnsignedShort
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_acquisitionSequenceLength)])) {
            throw new ASN1Error("CltuGetParameter_parAcquisitionSequenceLength.parameterName violates ParameterName (acquisitionSequenceLength)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parAcquisitionSequenceLength
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parAcquisitionSequenceLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parAcquisitionSequenceLength`.
     * @returns {CltuGetParameter_parAcquisitionSequenceLength}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parAcquisitionSequenceLength)]: (CltuGetParameter_parAcquisitionSequenceLength)[_K] }): CltuGetParameter_parAcquisitionSequenceLength {
        return new CltuGetParameter_parAcquisitionSequenceLength(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parAcquisitionSequenceLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parAcquisitionSequenceLength: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parAcquisitionSequenceLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parAcquisitionSequenceLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parAcquisitionSequenceLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parAcquisitionSequenceLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parAcquisitionSequenceLength: $.ASN1Decoder<CltuGetParameter_parAcquisitionSequenceLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parAcquisitionSequenceLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parAcquisitionSequenceLength (el: _Element): CltuGetParameter_parAcquisitionSequenceLength {
    if (!_cached_decoder_for_CltuGetParameter_parAcquisitionSequenceLength) { _cached_decoder_for_CltuGetParameter_parAcquisitionSequenceLength = function (el: _Element): CltuGetParameter_parAcquisitionSequenceLength {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parAcquisitionSequenceLength contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntUnsignedShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntUnsignedShort(sequence[1]);
    return new CltuGetParameter_parAcquisitionSequenceLength(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parAcquisitionSequenceLength(el);
}

let _cached_encoder_for_CltuGetParameter_parAcquisitionSequenceLength: $.ASN1Encoder<CltuGetParameter_parAcquisitionSequenceLength> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parAcquisitionSequenceLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parAcquisitionSequenceLength, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parAcquisitionSequenceLength (value: CltuGetParameter_parAcquisitionSequenceLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parAcquisitionSequenceLength) { _cached_encoder_for_CltuGetParameter_parAcquisitionSequenceLength = function (value: CltuGetParameter_parAcquisitionSequenceLength, _elGetter: $.ASN1Encoder<CltuGetParameter_parAcquisitionSequenceLength>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parAcquisitionSequenceLength(value, elGetter);
}


/* eslint-enable */
