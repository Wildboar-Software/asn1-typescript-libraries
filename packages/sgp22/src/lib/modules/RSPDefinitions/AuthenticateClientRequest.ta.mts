/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { AuthenticateServerResponse, _decode_AuthenticateServerResponse, _encode_AuthenticateServerResponse } from "../RSPDefinitions/AuthenticateServerResponse.ta.mjs";


/**
 * @summary AuthenticateClientRequest
 * @description
 * 
 * ES9+.AuthenticateClient or ES11.AuthenticateClient. Carries the TransactionID
 * and the ES10b.AuthenticateServer response. The SM-DP+ verifies the eUICC
 * signature and certificate chain, applies the MatchingID to the pending order,
 * checks eligibility and memory, and either returns Profile Metadata plus
 * `smdpSigned2` or an error. The SM-DS verifies the same signature and returns
 * event records instead. SGP.22 v3.1 §5.6.3 and §5.8.2.
 *
 * `useMatchingIdForAcr` is in this module with a comment pointing at §5.6.3.
 * SGP.22 v3.1 §5.6.3 does not define that component.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientRequest ::= [59] SEQUENCE {  -- Tag 'BF3B'
 *     transactionId [0] TransactionId,
 *     authenticateServerResponse [56] AuthenticateServerResponse, -- This is the response from ES10b.AuthenticateServer
 *     useMatchingIdForAcr NULL OPTIONAL -- as defined in section 5.6.3
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateClientRequest {
    constructor (
        /**
         * @summary `transactionId`.
         * @description
         * 
         * Session from InitiateAuthentication. Unknown id is
         * `invalidTransactionId`. SGP.22 v3.1 §5.6.3.
         * 
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `authenticateServerResponse`.
         * @description
         * 
         * The ES10b.AuthenticateServer response, success or error. The server
         * verifies `euiccSignature1` and the certificate chain. SGP.22 v3.1
         * §5.6.3.
         * 
         * @public
         * @readonly
         */
        readonly authenticateServerResponse: AuthenticateServerResponse,
        /**
         * @summary `useMatchingIdForAcr`.
         * @description
         * 
         * Present, as a NULL, when the MatchingID is to be used for Activation
         * Code retrieval. This module's ASN.1 comment points at §5.6.3. SGP.22
         * v3.1 §5.6.3 does not define this component.
         * 
         * @public
         * @readonly
         */
        readonly useMatchingIdForAcr: OPTIONAL<NULL>
    ) {}

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
        return new AuthenticateClientRequest(_o.transactionId, _o.authenticateServerResponse, _o.useMatchingIdForAcr);
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
    new $.ComponentSpec("authenticateServerResponse", false, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("useMatchingIdForAcr", true, $.hasTag(_TagClass.universal, 5))
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
    let transactionId!: TransactionId;
    let authenticateServerResponse!: AuthenticateServerResponse;
    let useMatchingIdForAcr: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "transactionId": (_el: _Element): void => { transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "authenticateServerResponse": (_el: _Element): void => { authenticateServerResponse = $._decode_implicit<AuthenticateServerResponse>(() => _decode_AuthenticateServerResponse)(_el); },
        "useMatchingIdForAcr": (_el: _Element): void => { useMatchingIdForAcr = $._decodeNull(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthenticateClientRequest,
        _extension_additions_list_spec_for_AuthenticateClientRequest,
        _root_component_type_list_2_spec_for_AuthenticateClientRequest,
        undefined,
    );
    return new AuthenticateClientRequest(
        transactionId,
        authenticateServerResponse,
        useMatchingIdForAcr
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
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 56, () => _encode_AuthenticateServerResponse, $.BER)(value.authenticateServerResponse, $.BER),
            /* IF_ABSENT  */ ((value.useMatchingIdForAcr === undefined) ? undefined : $._encodeNull(value.useMatchingIdForAcr, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_AuthenticateClientRequest(value, elGetter);
}


/* eslint-enable */
