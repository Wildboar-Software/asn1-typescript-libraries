/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_bitLockRequired
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_FspGetParameter_parBitLockRequired_parameterValue, _encode_FspGetParameter_parBitLockRequired_parameterValue, FspGetParameter_parBitLockRequired_parameterValue } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parBitLockRequired-parameterValue.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parBitLockRequired
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parBitLockRequired ::= SEQUENCE
 *    {  parameterName     ParameterName  (bitLockRequired)
 *    ,  parameterValue    INTEGER
 *       {  yes                     (0)
 *       ,  no                      (1)
 *       }
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parBitLockRequired {
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
    readonly parameterValue: FspGetParameter_parBitLockRequired_parameterValue;

    constructor (
        parameterName: ParameterName,
        parameterValue: FspGetParameter_parBitLockRequired_parameterValue
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_bitLockRequired)])) {
            throw new ASN1Error("FspGetParameter_parBitLockRequired.parameterName violates ParameterName (bitLockRequired)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parBitLockRequired
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parBitLockRequired`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parBitLockRequired`.
     * @returns {FspGetParameter_parBitLockRequired}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parBitLockRequired)]: (FspGetParameter_parBitLockRequired)[_K] }): FspGetParameter_parBitLockRequired {
        return new FspGetParameter_parBitLockRequired(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parBitLockRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parBitLockRequired: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parBitLockRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parBitLockRequired: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parBitLockRequired
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parBitLockRequired: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parBitLockRequired: $.ASN1Decoder<FspGetParameter_parBitLockRequired> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parBitLockRequired
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parBitLockRequired (el: _Element): FspGetParameter_parBitLockRequired {
    if (!_cached_decoder_for_FspGetParameter_parBitLockRequired) { _cached_decoder_for_FspGetParameter_parBitLockRequired = function (el: _Element): FspGetParameter_parBitLockRequired {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parBitLockRequired contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: FspGetParameter_parBitLockRequired_parameterValue;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_FspGetParameter_parBitLockRequired_parameterValue(sequence[1]);
    return new FspGetParameter_parBitLockRequired(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parBitLockRequired(el);
}

let _cached_encoder_for_FspGetParameter_parBitLockRequired: $.ASN1Encoder<FspGetParameter_parBitLockRequired> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parBitLockRequired into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parBitLockRequired, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parBitLockRequired (value: FspGetParameter_parBitLockRequired, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parBitLockRequired) { _cached_encoder_for_FspGetParameter_parBitLockRequired = function (value: FspGetParameter_parBitLockRequired, elGetter: $.ASN1Encoder<FspGetParameter_parBitLockRequired>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_FspGetParameter_parBitLockRequired_parameterValue(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parBitLockRequired(value, elGetter);
}


/* eslint-enable */
