/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFSecurityParams, _decode_AFSecurityParams, _encode_AFSecurityParams } from "../TS33128Payloads/AFSecurityParams.ta.mjs";
// export { AFSecurityParams, _decode_AFSecurityParams, _encode_AFSecurityParams } from "../TS33128Payloads/AFSecurityParams.ta.mjs";


/**
 * @summary AFAuxiliarySecurityParameterEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFAuxiliarySecurityParameterEstablishment ::= SEQUENCE
 * {
 *     aFSecurityParams      [1] AFSecurityParams
 * }
 * ```
 * 
 * @class
 */
export
class AFAuxiliarySecurityParameterEstablishment {
    constructor (
        /**
         * @summary `aFSecurityParams`.
         * @public
         * @readonly
         */
        readonly aFSecurityParams: AFSecurityParams
    ) {}

    /**
     * @summary Restructures an object into a AFAuxiliarySecurityParameterEstablishment
     * @description
     * 
     * This takes an `object` and converts it to a `AFAuxiliarySecurityParameterEstablishment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFAuxiliarySecurityParameterEstablishment`.
     * @returns {AFAuxiliarySecurityParameterEstablishment}
     */
    public static _from_object (_o: { [_K in keyof (AFAuxiliarySecurityParameterEstablishment)]: (AFAuxiliarySecurityParameterEstablishment)[_K] }): AFAuxiliarySecurityParameterEstablishment {
        return new AFAuxiliarySecurityParameterEstablishment(_o.aFSecurityParams);
    }


}

/**
 * @summary The Leading Root Component Types of AFAuxiliarySecurityParameterEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFAuxiliarySecurityParameterEstablishment: $.ComponentSpec[] = [
    new $.ComponentSpec("aFSecurityParams", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AFAuxiliarySecurityParameterEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFAuxiliarySecurityParameterEstablishment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFAuxiliarySecurityParameterEstablishment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFAuxiliarySecurityParameterEstablishment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFAuxiliarySecurityParameterEstablishment: $.ASN1Decoder<AFAuxiliarySecurityParameterEstablishment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFAuxiliarySecurityParameterEstablishment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFAuxiliarySecurityParameterEstablishment (el: _Element): AFAuxiliarySecurityParameterEstablishment {
    if (!_cached_decoder_for_AFAuxiliarySecurityParameterEstablishment) { _cached_decoder_for_AFAuxiliarySecurityParameterEstablishment = function (el: _Element): AFAuxiliarySecurityParameterEstablishment {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("AFAuxiliarySecurityParameterEstablishment contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aFSecurityParams";
    let aFSecurityParams!: AFSecurityParams;
    aFSecurityParams = $._decode_implicit<AFSecurityParams>(() => _decode_AFSecurityParams)(sequence[0]);
    return new AFAuxiliarySecurityParameterEstablishment(
        aFSecurityParams,

    );
}; }
    return _cached_decoder_for_AFAuxiliarySecurityParameterEstablishment(el);
}

let _cached_encoder_for_AFAuxiliarySecurityParameterEstablishment: $.ASN1Encoder<AFAuxiliarySecurityParameterEstablishment> | null = null;

/**
 * @summary Encodes a(n) AFAuxiliarySecurityParameterEstablishment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFAuxiliarySecurityParameterEstablishment, encoded as an ASN.1 Element.
 */
export
function _encode_AFAuxiliarySecurityParameterEstablishment (value: AFAuxiliarySecurityParameterEstablishment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFAuxiliarySecurityParameterEstablishment) { _cached_encoder_for_AFAuxiliarySecurityParameterEstablishment = function (value: AFAuxiliarySecurityParameterEstablishment, elGetter: $.ASN1Encoder<AFAuxiliarySecurityParameterEstablishment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFSecurityParams, $.BER)(value.aFSecurityParams, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AFAuxiliarySecurityParameterEstablishment(value, elGetter);
}


/* eslint-enable */
