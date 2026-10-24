/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { AuthenticateServerResponse, _decode_AuthenticateServerResponse, _encode_AuthenticateServerResponse } from "../SGP32Definitions/AuthenticateServerResponse.ta.mjs";


/**
 * @summary AuthenticateClientRequest
 * @description
 *
 * ES9+.AuthenticateClient request. The IPA asks the SM-DP+ to authenticate the
 * eUICC. The function is identical to ES9+.AuthenticateClient in SGP.22
 * section 5.6.3, with the IPA in the LPA role. EUICCInfo2 inside the enclosed
 * AuthenticateResponseOk follows section 5.9.2.
 *
 * SGP.32 v1.2, section 5.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientRequest ::= [59] SEQUENCE { -- Tag 'BF3B'
 *     transactionId [0] TransactionId,
 *     authenticateServerResponse [56] AuthenticateServerResponse -- This is the response from ES10b.AuthenticateServer
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateClientRequest {
    /**
     * @summary `transactionId`.
     * @description
     *
     * Transaction ID that correlates this call with the preceding
     * ES9+.InitiateAuthentication. SGP.32 v1.2 section 5.6.1 defines the request
     * as identical to SGP.22 section 5.6.3, where the SM-DP+ delivers that
     * Transaction ID. Clarified from SGP.22 v3.1, section 5.6.3.
     * @public
     * @readonly
     */
    public readonly transactionId: TransactionId;
    /**
     * @summary `authenticateServerResponse`.
     * @description
     *
     * Response from ES10b.AuthenticateServer, carried to the SM-DP+ so it can
     * authenticate the eUICC.
     *
     * SGP.32 v1.2, section 5.6.1.
     * @public
     * @readonly
     */
    public readonly authenticateServerResponse: AuthenticateServerResponse;

    constructor (
        transactionId: TransactionId,
        authenticateServerResponse: AuthenticateServerResponse
    ) {
        this.transactionId = transactionId;
        this.authenticateServerResponse = authenticateServerResponse;
    }

    /**
     * @summary Restructures an object into a AuthenticateClientRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateClientRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateClientRequest`.
     * @returns {AuthenticateClientRequest}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateClientRequest)]: (AuthenticateClientRequest)[_K] }): AuthenticateClientRequest {
        return new AuthenticateClientRequest(_o.transactionId, _o.authenticateServerResponse);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateClientRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateClientRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("authenticateServerResponse", false, $.hasTag(_TagClass.context, 56))
];

/**
 * @summary The Trailing Root Component Types of AuthenticateClientRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateClientRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateClientRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateClientRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateClientRequest: $.ASN1Decoder<AuthenticateClientRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientRequest (el: _Element): AuthenticateClientRequest {
    if (!_cached_decoder_for_AuthenticateClientRequest) { _cached_decoder_for_AuthenticateClientRequest = $._decode_implicit<AuthenticateClientRequest>(() => function (el: _Element): AuthenticateClientRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuthenticateClientRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "authenticateServerResponse";
    const transactionId: TransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    const authenticateServerResponse: AuthenticateServerResponse = $._decode_implicit<AuthenticateServerResponse>(() => _decode_AuthenticateServerResponse)(sequence[1]);
    return new AuthenticateClientRequest(
        transactionId,
        authenticateServerResponse,

    );
}); }
    return _cached_decoder_for_AuthenticateClientRequest(el);
}

let _cached_encoder_for_AuthenticateClientRequest: $.ASN1Encoder<AuthenticateClientRequest> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientRequest (value: AuthenticateClientRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientRequest) { _cached_encoder_for_AuthenticateClientRequest = $._encode_implicit(_TagClass.context, 59, () => function (value: AuthenticateClientRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 56, () => _encode_AuthenticateServerResponse, $.BER)(value.authenticateServerResponse, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AuthenticateClientRequest(value, elGetter);
}


/* eslint-enable */
