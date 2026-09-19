/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccConfiguredAddressesResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccConfiguredAddressesResponse ::= [60] SEQUENCE { -- Tag 'BF3C'
 *     defaultDpAddress UTF8String OPTIONAL,  -- Default SM-DP+ address as an FQDN
 *     rootDsAddress UTF8String  -- Root SM-DS address as an FQDN
 * }
 * ```
 * 
 * @class
 */
export
class EuiccConfiguredAddressesResponse {
    constructor (
        /**
         * @summary `defaultDpAddress`.
         * @public
         * @readonly
         */
        readonly defaultDpAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `rootDsAddress`.
         * @public
         * @readonly
         */
        readonly rootDsAddress: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a EuiccConfiguredAddressesResponse
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccConfiguredAddressesResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccConfiguredAddressesResponse`.
     * @returns {EuiccConfiguredAddressesResponse}
     */
    public static _from_object (_o: { [_K in keyof (EuiccConfiguredAddressesResponse)]: (EuiccConfiguredAddressesResponse)[_K] }): EuiccConfiguredAddressesResponse {
        return new EuiccConfiguredAddressesResponse(_o.defaultDpAddress, _o.rootDsAddress);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccConfiguredAddressesResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccConfiguredAddressesResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultDpAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rootDsAddress", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EuiccConfiguredAddressesResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccConfiguredAddressesResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccConfiguredAddressesResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccConfiguredAddressesResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccConfiguredAddressesResponse: $.ASN1Decoder<EuiccConfiguredAddressesResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccConfiguredAddressesResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccConfiguredAddressesResponse (el: _Element): EuiccConfiguredAddressesResponse {
    if (!_cached_decoder_for_EuiccConfiguredAddressesResponse) { _cached_decoder_for_EuiccConfiguredAddressesResponse = $._decode_implicit<EuiccConfiguredAddressesResponse>(() => function (el: _Element): EuiccConfiguredAddressesResponse {
    let defaultDpAddress: OPTIONAL<UTF8String>;
    let rootDsAddress!: UTF8String;
    const callbacks: $.DecodingMap = {
        "defaultDpAddress": (_el: _Element): void => { defaultDpAddress = $._decodeUTF8String(_el); },
        "rootDsAddress": (_el: _Element): void => { rootDsAddress = $._decodeUTF8String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccConfiguredAddressesResponse,
        _extension_additions_list_spec_for_EuiccConfiguredAddressesResponse,
        _root_component_type_list_2_spec_for_EuiccConfiguredAddressesResponse,
        undefined,
    );
    return new EuiccConfiguredAddressesResponse(
        defaultDpAddress,
        rootDsAddress
    );
}); }
    return _cached_decoder_for_EuiccConfiguredAddressesResponse(el);
}

let _cached_encoder_for_EuiccConfiguredAddressesResponse: $.ASN1Encoder<EuiccConfiguredAddressesResponse> | null = null;

/**
 * @summary Encodes a(n) EuiccConfiguredAddressesResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccConfiguredAddressesResponse, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccConfiguredAddressesResponse (value: EuiccConfiguredAddressesResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccConfiguredAddressesResponse) { _cached_encoder_for_EuiccConfiguredAddressesResponse = $._encode_implicit(_TagClass.context, 60, () => function (value: EuiccConfiguredAddressesResponse, elGetter: $.ASN1Encoder<EuiccConfiguredAddressesResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.defaultDpAddress === undefined) ? undefined : $._encodeUTF8String(value.defaultDpAddress, $.BER)),
            /* REQUIRED   */ $._encodeUTF8String(value.rootDsAddress, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccConfiguredAddressesResponse(value, elGetter);
}


/* eslint-enable */
