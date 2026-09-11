/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerRSAParams
 * @description
 *
 * Ephemeral RSA modulus and exponent. Annex A constrains each INTEGER
 * to `1..65535` (unlike TLS, which uses unbounded integers). ITU-T
 * Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerRSAParams ::= SEQUENCE {
 * rsa-modulus    INTEGER(1..65535),
 * rsa-exponent    INTEGER(1..65535)
 * }
 * ```
 * 
 * @class
 */
export
class ServerRSAParams {
    constructor (
        /**
         * @summary `rsa_modulus`.
         * @description
         *
         * Ephemeral RSA modulus. Annex A constrains INTEGER to `1..65535`.
         *
         * @public
         * @readonly
         */
        readonly rsa_modulus: INTEGER,
        /**
         * @summary `rsa_exponent`.
         * @description
         *
         * Ephemeral RSA exponent. Annex A constrains INTEGER to `1..65535`.
         *
         * @public
         * @readonly
         */
        readonly rsa_exponent: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ServerRSAParams
     * @description
     * 
     * This takes an `object` and converts it to a `ServerRSAParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerRSAParams`.
     * @returns {ServerRSAParams}
     */
    public static _from_object (_o: { [_K in keyof (ServerRSAParams)]: (ServerRSAParams)[_K] }): ServerRSAParams {
        return new ServerRSAParams(_o.rsa_modulus, _o.rsa_exponent);
    }


}

/**
 * @summary The Leading Root Component Types of ServerRSAParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerRSAParams: $.ComponentSpec[] = [
    new $.ComponentSpec("rsa-modulus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rsa-exponent", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServerRSAParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerRSAParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerRSAParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerRSAParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerRSAParams: $.ASN1Decoder<ServerRSAParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerRSAParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerRSAParams (el: _Element): ServerRSAParams {
    if (!_cached_decoder_for_ServerRSAParams) { _cached_decoder_for_ServerRSAParams = function (el: _Element): ServerRSAParams {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServerRSAParams contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rsa-modulus";
    sequence[1].name = "rsa-exponent";
    let rsa_modulus!: INTEGER;
    let rsa_exponent!: INTEGER;
    rsa_modulus = $._decodeInteger(sequence[0]);
    rsa_exponent = $._decodeInteger(sequence[1]);
    const _inRange = (v: INTEGER, name: string): void => {
        const n = typeof v === "bigint" ? v : BigInt(v);
        if (n < 1n || n > 65535n) {
            throw new ASN1OverflowError(name + " violates INTEGER range");
        }
    };
    _inRange(rsa_modulus, "ServerRSAParams.rsa-modulus");
    _inRange(rsa_exponent, "ServerRSAParams.rsa-exponent");
    return new ServerRSAParams(
        rsa_modulus,
        rsa_exponent,

    );
}; }
    return _cached_decoder_for_ServerRSAParams(el);
}

let _cached_encoder_for_ServerRSAParams: $.ASN1Encoder<ServerRSAParams> | null = null;

/**
 * @summary Encodes a(n) ServerRSAParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerRSAParams, encoded as an ASN.1 Element.
 */
export
function _encode_ServerRSAParams (value: ServerRSAParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerRSAParams) { _cached_encoder_for_ServerRSAParams = function (value: ServerRSAParams): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.rsa_modulus, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rsa_exponent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerRSAParams(value, elGetter);
}


/* eslint-enable */
