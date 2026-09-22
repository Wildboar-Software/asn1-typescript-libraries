/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SuccessResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuccessResult ::= SEQUENCE {
 *     aid [APPLICATION 15] OCTET STRING (SIZE (5..16)), -- AID of ISD-P
 *     simaResponse OCTET STRING -- contains (multiple) 'EUICCResponse' as defined in [5]
 * }
 * ```
 * 
 * @class
 */
export
class SuccessResult {
    constructor (
        /**
         * @summary `aid`.
         * @public
         * @readonly
         */
        readonly aid: OCTET_STRING,
        /**
         * @summary `simaResponse`.
         * @public
         * @readonly
         */
        readonly simaResponse: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a SuccessResult
     * @description
     * 
     * This takes an `object` and converts it to a `SuccessResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuccessResult`.
     * @returns {SuccessResult}
     */
    public static _from_object (_o: { [_K in keyof (SuccessResult)]: (SuccessResult)[_K] }): SuccessResult {
        return new SuccessResult(_o.aid, _o.simaResponse);
    }


}

/**
 * @summary The Leading Root Component Types of SuccessResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuccessResult: $.ComponentSpec[] = [
    new $.ComponentSpec("aid", false, $.hasTag(_TagClass.application, 15)),
    new $.ComponentSpec("simaResponse", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of SuccessResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuccessResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuccessResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SuccessResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuccessResult: $.ASN1Decoder<SuccessResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuccessResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuccessResult (el: _Element): SuccessResult {
    if (!_cached_decoder_for_SuccessResult) { _cached_decoder_for_SuccessResult = function (el: _Element): SuccessResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SuccessResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aid";
    sequence[1].name = "simaResponse";
    let aid!: OCTET_STRING;
    let simaResponse!: OCTET_STRING;
    aid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    simaResponse = $._decodeOctetString(sequence[1]);
    return new SuccessResult(
        aid,
        simaResponse,

    );
}; }
    return _cached_decoder_for_SuccessResult(el);
}

let _cached_encoder_for_SuccessResult: $.ASN1Encoder<SuccessResult> | null = null;

/**
 * @summary Encodes a(n) SuccessResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuccessResult, encoded as an ASN.1 Element.
 */
export
function _encode_SuccessResult (value: SuccessResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuccessResult) { _cached_encoder_for_SuccessResult = function (value: SuccessResult, elGetter: $.ASN1Encoder<SuccessResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 15, () => $._encodeOctetString, $.BER)(value.aid, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.simaResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SuccessResult(value, elGetter);
}


/* eslint-enable */
