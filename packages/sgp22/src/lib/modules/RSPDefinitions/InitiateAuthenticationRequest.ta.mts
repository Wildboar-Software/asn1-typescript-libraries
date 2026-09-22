/* eslint-disable */
import {
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
import { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "../RSPDefinitions/EUICCInfo1.ta.mjs";
// export { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "../RSPDefinitions/EUICCInfo1.ta.mjs";


/**
 * @summary InitiateAuthenticationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationRequest ::= [57] SEQUENCE { -- Tag 'BF39'
 *     euiccChallenge [1] Octet16, -- random eUICC challenge
 *     smdpAddress [3] UTF8String,
 *     euiccInfo1 EUICCInfo1
 * }
 * ```
 * 
 * @class
 */
export
class InitiateAuthenticationRequest {
    constructor (
        /**
         * @summary `euiccChallenge`.
         * @public
         * @readonly
         */
        readonly euiccChallenge: Octet16,
        /**
         * @summary `smdpAddress`.
         * @public
         * @readonly
         */
        readonly smdpAddress: UTF8String,
        /**
         * @summary `euiccInfo1`.
         * @public
         * @readonly
         */
        readonly euiccInfo1: EUICCInfo1
    ) {}

    /**
     * @summary Restructures an object into a InitiateAuthenticationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateAuthenticationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateAuthenticationRequest`.
     * @returns {InitiateAuthenticationRequest}
     */
    public static _from_object (_o: { [_K in keyof (InitiateAuthenticationRequest)]: (InitiateAuthenticationRequest)[_K] }): InitiateAuthenticationRequest {
        return new InitiateAuthenticationRequest(_o.euiccChallenge, _o.smdpAddress, _o.euiccInfo1);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateAuthenticationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateAuthenticationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccChallenge", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("smdpAddress", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("euiccInfo1", false, $.hasTag(_TagClass.context, 32))
];

/**
 * @summary The Trailing Root Component Types of InitiateAuthenticationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateAuthenticationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateAuthenticationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateAuthenticationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateAuthenticationRequest: $.ASN1Decoder<InitiateAuthenticationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAuthenticationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAuthenticationRequest (el: _Element): InitiateAuthenticationRequest {
    if (!_cached_decoder_for_InitiateAuthenticationRequest) { _cached_decoder_for_InitiateAuthenticationRequest = $._decode_implicit<InitiateAuthenticationRequest>(() => function (el: _Element): InitiateAuthenticationRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("InitiateAuthenticationRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccChallenge";
    sequence[1].name = "smdpAddress";
    sequence[2].name = "euiccInfo1";
    let euiccChallenge!: Octet16;
    let smdpAddress!: UTF8String;
    let euiccInfo1!: EUICCInfo1;
    euiccChallenge = $._decode_implicit<Octet16>(() => _decode_Octet16)(sequence[0]);
    smdpAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    euiccInfo1 = _decode_EUICCInfo1(sequence[2]);
    return new InitiateAuthenticationRequest(
        euiccChallenge,
        smdpAddress,
        euiccInfo1,

    );
}); }
    return _cached_decoder_for_InitiateAuthenticationRequest(el);
}

let _cached_encoder_for_InitiateAuthenticationRequest: $.ASN1Encoder<InitiateAuthenticationRequest> | null = null;

/**
 * @summary Encodes a(n) InitiateAuthenticationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAuthenticationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAuthenticationRequest (value: InitiateAuthenticationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAuthenticationRequest) { _cached_encoder_for_InitiateAuthenticationRequest = $._encode_implicit(_TagClass.context, 57, () => function (value: InitiateAuthenticationRequest, elGetter: $.ASN1Encoder<InitiateAuthenticationRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Octet16, $.BER)(value.euiccChallenge, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.smdpAddress, $.BER),
            /* REQUIRED   */ _encode_EUICCInfo1(value.euiccInfo1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_InitiateAuthenticationRequest(value, elGetter);
}


/* eslint-enable */
