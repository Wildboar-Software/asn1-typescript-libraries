/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1Error,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_maximumSlduLength
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";


function integerInRange (value: number | bigint, min: bigint, max: bigint): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return n >= min && n <= max;
}

function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CltuGetParameter_parMaximumCltuLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parMaximumCltuLength ::= SEQUENCE
 *    {  parameterName                    ParameterName (maximumSlduLength)
 *    ,  parameterValue                   INTEGER (12 .. 4096)
 *    }
 * ```
 * 
 * @class
 */
export
class CltuGetParameter_parMaximumCltuLength {
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
    readonly parameterValue: INTEGER;

    constructor (
        parameterName: ParameterName,
        parameterValue: INTEGER
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_maximumSlduLength)])) {
            throw new ASN1Error("CltuGetParameter_parMaximumCltuLength.parameterName violates ParameterName (maximumSlduLength)");
        }
        if (!integerInRange(parameterValue, 12n, 4096n)) {
            throw new ASN1OverflowError("CltuGetParameter_parMaximumCltuLength.parameterValue violates INTEGER (12..4096)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a CltuGetParameter_parMaximumCltuLength
     * @description
     * 
     * This takes an `object` and converts it to a `CltuGetParameter_parMaximumCltuLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuGetParameter_parMaximumCltuLength`.
     * @returns {CltuGetParameter_parMaximumCltuLength}
     */
    public static _from_object (_o: { [_K in keyof (CltuGetParameter_parMaximumCltuLength)]: (CltuGetParameter_parMaximumCltuLength)[_K] }): CltuGetParameter_parMaximumCltuLength {
        return new CltuGetParameter_parMaximumCltuLength(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of CltuGetParameter_parMaximumCltuLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuGetParameter_parMaximumCltuLength: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuGetParameter_parMaximumCltuLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuGetParameter_parMaximumCltuLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuGetParameter_parMaximumCltuLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuGetParameter_parMaximumCltuLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuGetParameter_parMaximumCltuLength: $.ASN1Decoder<CltuGetParameter_parMaximumCltuLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter_parMaximumCltuLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter_parMaximumCltuLength (el: _Element): CltuGetParameter_parMaximumCltuLength {
    if (!_cached_decoder_for_CltuGetParameter_parMaximumCltuLength) { _cached_decoder_for_CltuGetParameter_parMaximumCltuLength = function (el: _Element): CltuGetParameter_parMaximumCltuLength {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CltuGetParameter-parMaximumCltuLength contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: INTEGER;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = $._decodeInteger(sequence[1]);
    return new CltuGetParameter_parMaximumCltuLength(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_CltuGetParameter_parMaximumCltuLength(el);
}

let _cached_encoder_for_CltuGetParameter_parMaximumCltuLength: $.ASN1Encoder<CltuGetParameter_parMaximumCltuLength> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter_parMaximumCltuLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter_parMaximumCltuLength, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter_parMaximumCltuLength (value: CltuGetParameter_parMaximumCltuLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter_parMaximumCltuLength) { _cached_encoder_for_CltuGetParameter_parMaximumCltuLength = function (value: CltuGetParameter_parMaximumCltuLength, elGetter: $.ASN1Encoder<CltuGetParameter_parMaximumCltuLength>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuGetParameter_parMaximumCltuLength(value, elGetter);
}


/* eslint-enable */
