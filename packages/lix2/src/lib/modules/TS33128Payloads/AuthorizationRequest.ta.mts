/* eslint-disable */
import {
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthorizationType, _decode_AuthorizationType, _encode_AuthorizationType, _enum_for_AuthorizationType } from "../TS33128Payloads/AuthorizationType.ta.mjs";
// export { AuthorizationType, _enum_for_AuthorizationType, AuthorizationType_registration /* IMPORTED_LONG_ENUMERATION_ITEM */, registration /* IMPORTED_SHORT_ENUMERATION_ITEM */, AuthorizationType_deregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AuthorizationType, _encode_AuthorizationType } from "../TS33128Payloads/AuthorizationType.ta.mjs";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";


/**
 * @summary AuthorizationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationRequest ::= SEQUENCE
 * {
 *     authorizationType            [1] AuthorizationType,
 *     iMPI                         [2] IMPI,
 *     visitedNetworkIdentifier     [3] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class AuthorizationRequest {
    constructor (
        /**
         * @summary `authorizationType`.
         * @public
         * @readonly
         */
        readonly authorizationType: AuthorizationType,
        /**
         * @summary `iMPI`.
         * @public
         * @readonly
         */
        readonly iMPI: IMPI,
        /**
         * @summary `visitedNetworkIdentifier`.
         * @public
         * @readonly
         */
        readonly visitedNetworkIdentifier: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a AuthorizationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AuthorizationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizationRequest`.
     * @returns {AuthorizationRequest}
     */
    public static _from_object (_o: { [_K in keyof (AuthorizationRequest)]: (AuthorizationRequest)[_K] }): AuthorizationRequest {
        return new AuthorizationRequest(_o.authorizationType, _o.iMPI, _o.visitedNetworkIdentifier);
    }

        /**
         * @summary The enum used as the type of the component `authorizationType`
         * @public
         * @static
         */

    public static _enum_for_authorizationType = _enum_for_AuthorizationType;
}

/**
 * @summary The Leading Root Component Types of AuthorizationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthorizationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("authorizationType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMPI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("visitedNetworkIdentifier", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AuthorizationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthorizationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthorizationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthorizationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthorizationRequest: $.ASN1Decoder<AuthorizationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthorizationRequest (el: _Element): AuthorizationRequest {
    if (!_cached_decoder_for_AuthorizationRequest) { _cached_decoder_for_AuthorizationRequest = function (el: _Element): AuthorizationRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AuthorizationRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "authorizationType";
    sequence[1].name = "iMPI";
    sequence[2].name = "visitedNetworkIdentifier";
    let authorizationType!: AuthorizationType;
    let iMPI!: IMPI;
    let visitedNetworkIdentifier!: UTF8String;
    authorizationType = $._decode_implicit<AuthorizationType>(() => _decode_AuthorizationType)(sequence[0]);
    iMPI = $._decode_implicit<IMPI>(() => _decode_IMPI)(sequence[1]);
    visitedNetworkIdentifier = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[2]);
    return new AuthorizationRequest(
        authorizationType,
        iMPI,
        visitedNetworkIdentifier,

    );
}; }
    return _cached_decoder_for_AuthorizationRequest(el);
}

let _cached_encoder_for_AuthorizationRequest: $.ASN1Encoder<AuthorizationRequest> | null = null;

/**
 * @summary Encodes a(n) AuthorizationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AuthorizationRequest (value: AuthorizationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthorizationRequest) { _cached_encoder_for_AuthorizationRequest = function (value: AuthorizationRequest, elGetter: $.ASN1Encoder<AuthorizationRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AuthorizationType, $.BER)(value.authorizationType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMPI, $.BER)(value.iMPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.visitedNetworkIdentifier, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthorizationRequest(value, elGetter);
}


/* eslint-enable */
