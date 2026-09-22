/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReplaceSessionKeysRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReplaceSessionKeysRequest ::= [38] SEQUENCE { -- tag 'BF26'
 * / *The new initial MAC chaining value* /
 *     initialMacChainingValue OCTET STRING,
 * / *New session key value for encryption/decryption (PPK-ENC)* /
 *     ppkEnc OCTET STRING,
 * / *New session key value of the session key C-MAC computation/verification (PPK-MAC)* /
 *     ppkCmac OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class ReplaceSessionKeysRequest {
    constructor (
        /**
         * @summary `initialMacChainingValue`.
         * @public
         * @readonly
         */
        readonly initialMacChainingValue: OCTET_STRING,
        /**
         * @summary `ppkEnc`.
         * @public
         * @readonly
         */
        readonly ppkEnc: OCTET_STRING,
        /**
         * @summary `ppkCmac`.
         * @public
         * @readonly
         */
        readonly ppkCmac: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ReplaceSessionKeysRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ReplaceSessionKeysRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceSessionKeysRequest`.
     * @returns {ReplaceSessionKeysRequest}
     */
    public static _from_object (_o: { [_K in keyof (ReplaceSessionKeysRequest)]: (ReplaceSessionKeysRequest)[_K] }): ReplaceSessionKeysRequest {
        return new ReplaceSessionKeysRequest(_o.initialMacChainingValue, _o.ppkEnc, _o.ppkCmac);
    }


}

/**
 * @summary The Leading Root Component Types of ReplaceSessionKeysRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReplaceSessionKeysRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("initialMacChainingValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ppkEnc", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ppkCmac", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReplaceSessionKeysRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReplaceSessionKeysRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReplaceSessionKeysRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReplaceSessionKeysRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReplaceSessionKeysRequest: $.ASN1Decoder<ReplaceSessionKeysRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceSessionKeysRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReplaceSessionKeysRequest (el: _Element): ReplaceSessionKeysRequest {
    if (!_cached_decoder_for_ReplaceSessionKeysRequest) { _cached_decoder_for_ReplaceSessionKeysRequest = $._decode_implicit<ReplaceSessionKeysRequest>(() => function (el: _Element): ReplaceSessionKeysRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ReplaceSessionKeysRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "initialMacChainingValue";
    sequence[1].name = "ppkEnc";
    sequence[2].name = "ppkCmac";
    let initialMacChainingValue!: OCTET_STRING;
    let ppkEnc!: OCTET_STRING;
    let ppkCmac!: OCTET_STRING;
    initialMacChainingValue = $._decodeOctetString(sequence[0]);
    ppkEnc = $._decodeOctetString(sequence[1]);
    ppkCmac = $._decodeOctetString(sequence[2]);
    return new ReplaceSessionKeysRequest(
        initialMacChainingValue,
        ppkEnc,
        ppkCmac,

    );
}); }
    return _cached_decoder_for_ReplaceSessionKeysRequest(el);
}

let _cached_encoder_for_ReplaceSessionKeysRequest: $.ASN1Encoder<ReplaceSessionKeysRequest> | null = null;

/**
 * @summary Encodes a(n) ReplaceSessionKeysRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceSessionKeysRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ReplaceSessionKeysRequest (value: ReplaceSessionKeysRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReplaceSessionKeysRequest) { _cached_encoder_for_ReplaceSessionKeysRequest = $._encode_implicit(_TagClass.context, 38, () => function (value: ReplaceSessionKeysRequest, elGetter: $.ASN1Encoder<ReplaceSessionKeysRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.initialMacChainingValue, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.ppkEnc, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.ppkCmac, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReplaceSessionKeysRequest(value, elGetter);
}


/* eslint-enable */
