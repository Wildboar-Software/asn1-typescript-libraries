/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { UDMAuthenticationInfoRequest, _decode_UDMAuthenticationInfoRequest, _encode_UDMAuthenticationInfoRequest } from "../TS33128Payloads/UDMAuthenticationInfoRequest.ta.mjs";
// export { UDMAuthenticationInfoRequest, _decode_UDMAuthenticationInfoRequest, _encode_UDMAuthenticationInfoRequest } from "../TS33128Payloads/UDMAuthenticationInfoRequest.ta.mjs";
import { UDMProblemDetails, _decode_UDMProblemDetails, _encode_UDMProblemDetails } from "../TS33128Payloads/UDMProblemDetails.ta.mjs";
// export { UDMProblemDetails, _decode_UDMProblemDetails, _encode_UDMProblemDetails } from "../TS33128Payloads/UDMProblemDetails.ta.mjs";
import { ServerAddressingInfoList, _decode_ServerAddressingInfoList, _encode_ServerAddressingInfoList } from "../TS33128Payloads/ServerAddressingInfoList.ta.mjs";
// export { ServerAddressingInfoList, _decode_ServerAddressingInfoList, _encode_ServerAddressingInfoList } from "../TS33128Payloads/ServerAddressingInfoList.ta.mjs";


/**
 * @summary UDMUEAuthenticationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMUEAuthenticationResponse ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     authenticationInfoRequest   [2] UDMAuthenticationInfoRequest,
 *     aKMAIndicator               [3] BOOLEAN OPTIONAL,
 *     problemDetails              [4] UDMProblemDetails OPTIONAL,
 *     authAAA                     [5] BOOLEAN OPTIONAL,
 *     pvsInfo                     [6] ServerAddressingInfoList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMUEAuthenticationResponse {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `authenticationInfoRequest`.
         * @public
         * @readonly
         */
        readonly authenticationInfoRequest: UDMAuthenticationInfoRequest,
        /**
         * @summary `aKMAIndicator`.
         * @public
         * @readonly
         */
        readonly aKMAIndicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `problemDetails`.
         * @public
         * @readonly
         */
        readonly problemDetails: OPTIONAL<UDMProblemDetails>,
        /**
         * @summary `authAAA`.
         * @public
         * @readonly
         */
        readonly authAAA: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pvsInfo`.
         * @public
         * @readonly
         */
        readonly pvsInfo: OPTIONAL<ServerAddressingInfoList>
    ) {}

    /**
     * @summary Restructures an object into a UDMUEAuthenticationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `UDMUEAuthenticationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMUEAuthenticationResponse`.
     * @returns {UDMUEAuthenticationResponse}
     */
    public static _from_object (_o: { [_K in keyof (UDMUEAuthenticationResponse)]: (UDMUEAuthenticationResponse)[_K] }): UDMUEAuthenticationResponse {
        return new UDMUEAuthenticationResponse(_o.sUPI, _o.authenticationInfoRequest, _o.aKMAIndicator, _o.problemDetails, _o.authAAA, _o.pvsInfo);
    }


}

/**
 * @summary The Leading Root Component Types of UDMUEAuthenticationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMUEAuthenticationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authenticationInfoRequest", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aKMAIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("problemDetails", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("authAAA", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pvsInfo", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of UDMUEAuthenticationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMUEAuthenticationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMUEAuthenticationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMUEAuthenticationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMUEAuthenticationResponse: $.ASN1Decoder<UDMUEAuthenticationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMUEAuthenticationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMUEAuthenticationResponse (el: _Element): UDMUEAuthenticationResponse {
    if (!_cached_decoder_for_UDMUEAuthenticationResponse) { _cached_decoder_for_UDMUEAuthenticationResponse = function (el: _Element): UDMUEAuthenticationResponse {
    let sUPI!: SUPI;
    let authenticationInfoRequest!: UDMAuthenticationInfoRequest;
    let aKMAIndicator: OPTIONAL<BOOLEAN>;
    let problemDetails: OPTIONAL<UDMProblemDetails>;
    let authAAA: OPTIONAL<BOOLEAN>;
    let pvsInfo: OPTIONAL<ServerAddressingInfoList>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "authenticationInfoRequest": (_el: _Element): void => { authenticationInfoRequest = $._decode_implicit<UDMAuthenticationInfoRequest>(() => _decode_UDMAuthenticationInfoRequest)(_el); },
        "aKMAIndicator": (_el: _Element): void => { aKMAIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "problemDetails": (_el: _Element): void => { problemDetails = $._decode_implicit<UDMProblemDetails>(() => _decode_UDMProblemDetails)(_el); },
        "authAAA": (_el: _Element): void => { authAAA = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pvsInfo": (_el: _Element): void => { pvsInfo = $._decode_implicit<ServerAddressingInfoList>(() => _decode_ServerAddressingInfoList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMUEAuthenticationResponse,
        _extension_additions_list_spec_for_UDMUEAuthenticationResponse,
        _root_component_type_list_2_spec_for_UDMUEAuthenticationResponse,
        undefined,
    );
    return new UDMUEAuthenticationResponse(
        sUPI,
        authenticationInfoRequest,
        aKMAIndicator,
        problemDetails,
        authAAA,
        pvsInfo
    );
}; }
    return _cached_decoder_for_UDMUEAuthenticationResponse(el);
}

let _cached_encoder_for_UDMUEAuthenticationResponse: $.ASN1Encoder<UDMUEAuthenticationResponse> | null = null;

/**
 * @summary Encodes a(n) UDMUEAuthenticationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMUEAuthenticationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_UDMUEAuthenticationResponse (value: UDMUEAuthenticationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMUEAuthenticationResponse) { _cached_encoder_for_UDMUEAuthenticationResponse = function (value: UDMUEAuthenticationResponse, elGetter: $.ASN1Encoder<UDMUEAuthenticationResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_UDMAuthenticationInfoRequest, $.BER)(value.authenticationInfoRequest, $.BER),
            /* IF_ABSENT  */ ((value.aKMAIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.aKMAIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.problemDetails === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_UDMProblemDetails, $.BER)(value.problemDetails, $.BER)),
            /* IF_ABSENT  */ ((value.authAAA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.authAAA, $.BER)),
            /* IF_ABSENT  */ ((value.pvsInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ServerAddressingInfoList, $.BER)(value.pvsInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMUEAuthenticationResponse(value, elGetter);
}


/* eslint-enable */
