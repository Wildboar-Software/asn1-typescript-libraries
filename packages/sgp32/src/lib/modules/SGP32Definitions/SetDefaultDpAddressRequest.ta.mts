/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetDefaultDpAddressRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDefaultDpAddressRequest ::= [101] SEQUENCE { -- Tag 'BF65'
 *     defaultDpAddress UTF8String -- Default SM-DP+ address as an FQDN
 * }
 * ```
 * 
 * @class
 */
export
class SetDefaultDpAddressRequest {
    constructor (
        /**
         * @summary `defaultDpAddress`.
         * @public
         * @readonly
         */
        readonly defaultDpAddress: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a SetDefaultDpAddressRequest
     * @description
     * 
     * This takes an `object` and converts it to a `SetDefaultDpAddressRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetDefaultDpAddressRequest`.
     * @returns {SetDefaultDpAddressRequest}
     */
    public static _from_object (_o: { [_K in keyof (SetDefaultDpAddressRequest)]: (SetDefaultDpAddressRequest)[_K] }): SetDefaultDpAddressRequest {
        return new SetDefaultDpAddressRequest(_o.defaultDpAddress);
    }


}

/**
 * @summary The Leading Root Component Types of SetDefaultDpAddressRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetDefaultDpAddressRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultDpAddress", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SetDefaultDpAddressRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetDefaultDpAddressRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetDefaultDpAddressRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetDefaultDpAddressRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetDefaultDpAddressRequest: $.ASN1Decoder<SetDefaultDpAddressRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDefaultDpAddressRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDefaultDpAddressRequest (el: _Element): SetDefaultDpAddressRequest {
    if (!_cached_decoder_for_SetDefaultDpAddressRequest) { _cached_decoder_for_SetDefaultDpAddressRequest = $._decode_implicit<SetDefaultDpAddressRequest>(() => function (el: _Element): SetDefaultDpAddressRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SetDefaultDpAddressRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "defaultDpAddress";
    let defaultDpAddress!: UTF8String;
    defaultDpAddress = $._decodeUTF8String(sequence[0]);
    return new SetDefaultDpAddressRequest(
        defaultDpAddress,

    );
}); }
    return _cached_decoder_for_SetDefaultDpAddressRequest(el);
}

let _cached_encoder_for_SetDefaultDpAddressRequest: $.ASN1Encoder<SetDefaultDpAddressRequest> | null = null;

/**
 * @summary Encodes a(n) SetDefaultDpAddressRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDefaultDpAddressRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SetDefaultDpAddressRequest (value: SetDefaultDpAddressRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDefaultDpAddressRequest) { _cached_encoder_for_SetDefaultDpAddressRequest = $._encode_implicit(_TagClass.context, 101, () => function (value: SetDefaultDpAddressRequest, elGetter: $.ASN1Encoder<SetDefaultDpAddressRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeUTF8String(value.defaultDpAddress, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_SetDefaultDpAddressRequest(value, elGetter);
}


/* eslint-enable */
