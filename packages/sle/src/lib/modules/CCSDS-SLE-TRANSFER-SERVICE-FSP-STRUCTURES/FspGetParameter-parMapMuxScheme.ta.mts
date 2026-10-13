/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_mapMuxScheme
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_MuxScheme, _encode_MuxScheme, MuxScheme } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MuxScheme.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspGetParameter_parMapMuxScheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parMapMuxScheme ::= SEQUENCE
 *    {  parameterName     ParameterName (mapMuxScheme)
 *    ,  parameterValue    MuxScheme
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parMapMuxScheme {
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
    readonly parameterValue: MuxScheme;

    constructor (
        parameterName: ParameterName,
        parameterValue: MuxScheme
    ) {
        if (!integerIsOneOf(parameterName, [BigInt(ParameterName_mapMuxScheme)])) {
            throw new ASN1Error("FspGetParameter_parMapMuxScheme.parameterName violates ParameterName (mapMuxScheme)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parMapMuxScheme
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parMapMuxScheme`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parMapMuxScheme`.
     * @returns {FspGetParameter_parMapMuxScheme}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parMapMuxScheme)]: (FspGetParameter_parMapMuxScheme)[_K] }): FspGetParameter_parMapMuxScheme {
        return new FspGetParameter_parMapMuxScheme(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parMapMuxScheme
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parMapMuxScheme: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parMapMuxScheme
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parMapMuxScheme: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parMapMuxScheme
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parMapMuxScheme: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parMapMuxScheme: $.ASN1Decoder<FspGetParameter_parMapMuxScheme> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parMapMuxScheme
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parMapMuxScheme (el: _Element): FspGetParameter_parMapMuxScheme {
    if (!_cached_decoder_for_FspGetParameter_parMapMuxScheme) { _cached_decoder_for_FspGetParameter_parMapMuxScheme = function (el: _Element): FspGetParameter_parMapMuxScheme {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parMapMuxScheme contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: MuxScheme;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_MuxScheme(sequence[1]);
    return new FspGetParameter_parMapMuxScheme(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parMapMuxScheme(el);
}

let _cached_encoder_for_FspGetParameter_parMapMuxScheme: $.ASN1Encoder<FspGetParameter_parMapMuxScheme> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parMapMuxScheme into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parMapMuxScheme, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parMapMuxScheme (value: FspGetParameter_parMapMuxScheme, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parMapMuxScheme) { _cached_encoder_for_FspGetParameter_parMapMuxScheme = function (value: FspGetParameter_parMapMuxScheme, _elGetter: $.ASN1Encoder<FspGetParameter_parMapMuxScheme>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_MuxScheme(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parMapMuxScheme(value, elGetter);
}


/* eslint-enable */
