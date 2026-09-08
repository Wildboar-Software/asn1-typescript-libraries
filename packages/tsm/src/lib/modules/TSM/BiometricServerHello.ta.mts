/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricAuthenticationRequest, _decode_BiometricAuthenticationRequest, _encode_BiometricAuthenticationRequest } from "../TSM/BiometricAuthenticationRequest.ta.mjs";



/**
 * @summary BiometricServerHello
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricServerHello ::= SEQUENCE {
 * request    BiometricAuthenticationRequest
 * }
 * ```
 * 
 * @class
 */
export
class BiometricServerHello {
    constructor (
        /**
         * @summary `request`.
         * @public
         * @readonly
         */
        readonly request: BiometricAuthenticationRequest
    ) {}

    /**
     * @summary Restructures an object into a BiometricServerHello
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricServerHello`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricServerHello`.
     * @returns {BiometricServerHello}
     */
    public static _from_object (_o: { [_K in keyof (BiometricServerHello)]: (BiometricServerHello)[_K] }): BiometricServerHello {
        return new BiometricServerHello(_o.request);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricServerHello: $.ComponentSpec[] = [
    new $.ComponentSpec("request", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of BiometricServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricServerHello: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricServerHello: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricServerHello: $.ASN1Decoder<BiometricServerHello> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricServerHello
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricServerHello (el: _Element): BiometricServerHello {
    if (!_cached_decoder_for_BiometricServerHello) { _cached_decoder_for_BiometricServerHello = function (el: _Element): BiometricServerHello {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("BiometricServerHello contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "request";
    let request!: BiometricAuthenticationRequest;
    request = _decode_BiometricAuthenticationRequest(sequence[0]);
    return new BiometricServerHello(
        request,

    );
}; }
    return _cached_decoder_for_BiometricServerHello(el);
}

let _cached_encoder_for_BiometricServerHello: $.ASN1Encoder<BiometricServerHello> | null = null;

/**
 * @summary Encodes a(n) BiometricServerHello into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricServerHello, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricServerHello (value: BiometricServerHello, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricServerHello) { _cached_encoder_for_BiometricServerHello = function (value: BiometricServerHello): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricAuthenticationRequest(value.request, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricServerHello(value, elGetter);
}


/* eslint-enable */
