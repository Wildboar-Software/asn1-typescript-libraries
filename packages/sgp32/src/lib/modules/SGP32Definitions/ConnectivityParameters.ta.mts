/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectivityParameters
 * @description
 *
 * HTTP/CoAP connectivity parameters of the currently enabled Profile, returned
 * by ES10b.GetConnectivityParameters when they are available. HTTP parameters
 * are supplied in a Profile Package as described in the TCA Profile
 * Interoperability Technical Specification and may be updated by the operator
 * over ES6 as described in SGP.02 section 3.13.
 *
 * SGP.32 v1.2, section 5.9.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectivityParameters ::= SEQUENCE {
 *     httpParams [1] OCTET STRING OPTIONAL    -- Also used for CoAP
 * }
 * ```
 * 
 * @class
 */
export
class ConnectivityParameters {
    /**
     * @summary `httpParams`.
     * @description
     *
     * Connectivity parameters for HTTP, also used for CoAP. The format is
     * identical to Table 95 of SGP.02. Present when those parameters are
     * available; otherwise the response is parametersNotAvailable.
     *
     * SGP.32 v1.2, section 5.9.24.
     * @public
     * @readonly
     */
    public readonly httpParams?: OPTIONAL<OCTET_STRING>;

    constructor (
        httpParams?: OPTIONAL<OCTET_STRING>
    ) {
        this.httpParams = httpParams;
    }

    /**
     * @summary Restructures an object into a ConnectivityParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectivityParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectivityParameters`.
     * @returns {ConnectivityParameters}
     */
    public static _from_object (_o: { [_K in keyof (ConnectivityParameters)]: (ConnectivityParameters)[_K] }): ConnectivityParameters {
        return new ConnectivityParameters(_o.httpParams);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectivityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectivityParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("httpParams", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ConnectivityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectivityParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectivityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectivityParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectivityParameters: $.ASN1Decoder<ConnectivityParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectivityParameters (el: _Element): ConnectivityParameters {
    if (!_cached_decoder_for_ConnectivityParameters) { _cached_decoder_for_ConnectivityParameters = function (el: _Element): ConnectivityParameters {
    let httpParams: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "httpParams": (_el: _Element): void => { httpParams = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectivityParameters,
        _extension_additions_list_spec_for_ConnectivityParameters,
        _root_component_type_list_2_spec_for_ConnectivityParameters,
        undefined,
    );
    return new ConnectivityParameters(
        httpParams
    );
}; }
    return _cached_decoder_for_ConnectivityParameters(el);
}

let _cached_encoder_for_ConnectivityParameters: $.ASN1Encoder<ConnectivityParameters> | null = null;

/**
 * @summary Encodes a(n) ConnectivityParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectivityParameters (value: ConnectivityParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectivityParameters) { _cached_encoder_for_ConnectivityParameters = function (value: ConnectivityParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.httpParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.httpParams, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectivityParameters(value, elGetter);
}


/* eslint-enable */
