/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ServerDHParams, _decode_ServerDHParams, _encode_ServerDHParams } from "../TSM/ServerDHParams.ta.mjs";
// export { ServerDHParams, _decode_ServerDHParams, _encode_ServerDHParams } from "../TSM/ServerDHParams.ta.mjs";
import { Signature, _decode_Signature, _encode_Signature } from "../TSM/Signature.ta.mjs";
// export { Signature, _decode_Signature, _encode_Signature } from "../TSM/Signature.ta.mjs";


/**
 * @summary ServerKeyExchange_diffie_hellman
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerKeyExchange-diffie-hellman ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ServerKeyExchange_diffie_hellman {
    constructor (
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: ServerDHParams,
        /**
         * @summary `signed_params`.
         * @public
         * @readonly
         */
        readonly signed_params: Signature
    ) {}

    /**
     * @summary Restructures an object into a ServerKeyExchange_diffie_hellman
     * @description
     * 
     * This takes an `object` and converts it to a `ServerKeyExchange_diffie_hellman`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerKeyExchange_diffie_hellman`.
     * @returns {ServerKeyExchange_diffie_hellman}
     */
    public static _from_object (_o: { [_K in keyof (ServerKeyExchange_diffie_hellman)]: (ServerKeyExchange_diffie_hellman)[_K] }): ServerKeyExchange_diffie_hellman {
        return new ServerKeyExchange_diffie_hellman(_o.params, _o.signed_params);
    }


}

/**
 * @summary The Leading Root Component Types of ServerKeyExchange_diffie_hellman
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerKeyExchange_diffie_hellman: $.ComponentSpec[] = [
    new $.ComponentSpec("params", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("signed-params", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ServerKeyExchange_diffie_hellman
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerKeyExchange_diffie_hellman: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerKeyExchange_diffie_hellman
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerKeyExchange_diffie_hellman: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerKeyExchange_diffie_hellman: $.ASN1Decoder<ServerKeyExchange_diffie_hellman> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerKeyExchange_diffie_hellman
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerKeyExchange_diffie_hellman (el: _Element): ServerKeyExchange_diffie_hellman {
    if (!_cached_decoder_for_ServerKeyExchange_diffie_hellman) { _cached_decoder_for_ServerKeyExchange_diffie_hellman = function (el: _Element): ServerKeyExchange_diffie_hellman {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServerKeyExchange-diffie-hellman contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "params";
    sequence[1].name = "signed-params";
    let params!: ServerDHParams;
    let signed_params!: Signature;
    params = _decode_ServerDHParams(sequence[0]);
    signed_params = _decode_Signature(sequence[1]);
    return new ServerKeyExchange_diffie_hellman(
        params,
        signed_params,

    );
}; }
    return _cached_decoder_for_ServerKeyExchange_diffie_hellman(el);
}

let _cached_encoder_for_ServerKeyExchange_diffie_hellman: $.ASN1Encoder<ServerKeyExchange_diffie_hellman> | null = null;

/**
 * @summary Encodes a(n) ServerKeyExchange_diffie_hellman into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerKeyExchange_diffie_hellman, encoded as an ASN.1 Element.
 */
export
function _encode_ServerKeyExchange_diffie_hellman (value: ServerKeyExchange_diffie_hellman, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerKeyExchange_diffie_hellman) { _cached_encoder_for_ServerKeyExchange_diffie_hellman = function (value: ServerKeyExchange_diffie_hellman, elGetter: $.ASN1Encoder<ServerKeyExchange_diffie_hellman>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServerDHParams(value.params, $.BER),
            /* REQUIRED   */ _encode_Signature(value.signed_params, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerKeyExchange_diffie_hellman(value, elGetter);
}


/* eslint-enable */
