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
import { ServerRSAParams, _decode_ServerRSAParams, _encode_ServerRSAParams } from "../TSM/ServerRSAParams.ta.mjs";
// export { ServerRSAParams, _decode_ServerRSAParams, _encode_ServerRSAParams } from "../TSM/ServerRSAParams.ta.mjs";
import { Signature, _decode_Signature, _encode_Signature } from "../TSM/Signature.ta.mjs";
// export { Signature, _decode_Signature, _encode_Signature } from "../TSM/Signature.ta.mjs";


/**
 * @summary ServerKeyExchange_rsa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerKeyExchange-rsa ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ServerKeyExchange_rsa {
    constructor (
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: ServerRSAParams,
        /**
         * @summary `signed_params`.
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
    new $.ComponentSpec("params", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("signed-params", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
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
    if (!_cached_encoder_for_ServerKeyExchange_rsa) { _cached_encoder_for_ServerKeyExchange_rsa = function (value: ServerKeyExchange_rsa, elGetter: $.ASN1Encoder<ServerKeyExchange_rsa>): _Element {
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
