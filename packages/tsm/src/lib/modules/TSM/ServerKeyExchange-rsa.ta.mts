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
import { ServerRSAParams, _decode_ServerRSAParams, _encode_ServerRSAParams } from "../TSM/ServerRSAParams.ta.mjs";

import { Signature, _decode_Signature, _encode_Signature } from "../TSM/Signature.ta.mjs";



/**
 * @summary ServerKeyExchange_rsa
 * @description
 *
 * RSA alternative of `ServerKeyExchange`: ephemeral RSA params and
 * signature. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerKeyExchange-rsa ::= SEQUENCE {
 *     params         ServerRSAParams,
 *     signed-params  Signature
 * }
 * ```
 * 
 * @class
 */
export
class ServerKeyExchange_rsa {
    constructor (
        /**
         * @summary `params`.
         * @description
         *
         * Key-exchange parameters (RSA or DH). X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly params: ServerRSAParams,
        /**
         * @summary `signed_params`.
         * @description
         *
         * Signature over those parameters (or anonymous). X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly signed_params: Signature
    ) {}

    /**
     * @summary Restructures an object into a ServerKeyExchange_rsa
     * @description
     * 
     * This takes an `object` and converts it to a `ServerKeyExchange_rsa`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerKeyExchange_rsa`.
     * @returns {ServerKeyExchange_rsa}
     */
    public static _from_object (_o: { [_K in keyof (ServerKeyExchange_rsa)]: (ServerKeyExchange_rsa)[_K] }): ServerKeyExchange_rsa {
        return new ServerKeyExchange_rsa(_o.params, _o.signed_params);
    }


}

/**
 * @summary The Leading Root Component Types of ServerKeyExchange_rsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerKeyExchange_rsa: $.ComponentSpec[] = [
    new $.ComponentSpec("params", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signed-params", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServerKeyExchange_rsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerKeyExchange_rsa: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerKeyExchange_rsa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerKeyExchange_rsa: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerKeyExchange_rsa: $.ASN1Decoder<ServerKeyExchange_rsa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerKeyExchange_rsa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerKeyExchange_rsa (el: _Element): ServerKeyExchange_rsa {
    if (!_cached_decoder_for_ServerKeyExchange_rsa) { _cached_decoder_for_ServerKeyExchange_rsa = function (el: _Element): ServerKeyExchange_rsa {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServerKeyExchange-rsa contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "params";
    sequence[1].name = "signed-params";
    let params!: ServerRSAParams;
    let signed_params!: Signature;
    params = _decode_ServerRSAParams(sequence[0]);
    signed_params = _decode_Signature(sequence[1]);
    return new ServerKeyExchange_rsa(
        params,
        signed_params,

    );
}; }
    return _cached_decoder_for_ServerKeyExchange_rsa(el);
}

let _cached_encoder_for_ServerKeyExchange_rsa: $.ASN1Encoder<ServerKeyExchange_rsa> | null = null;

/**
 * @summary Encodes a(n) ServerKeyExchange_rsa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerKeyExchange_rsa, encoded as an ASN.1 Element.
 */
export
function _encode_ServerKeyExchange_rsa (value: ServerKeyExchange_rsa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerKeyExchange_rsa) { _cached_encoder_for_ServerKeyExchange_rsa = function (value: ServerKeyExchange_rsa): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServerRSAParams(value.params, $.BER),
            /* REQUIRED   */ _encode_Signature(value.signed_params, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerKeyExchange_rsa(value, elGetter);
}


/* eslint-enable */
