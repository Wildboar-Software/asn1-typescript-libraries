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
import { UINT32, _decode_UINT32, _encode_UINT32 } from "../TSM/UINT32.ta.mjs";

import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary ServerRandom
 * @description
 *
 * Server random: GMT Unix time plus 57 opaque bytes. TLS uses 28
 * random bytes; Annex A specifies `SIZE(28)` for the client and
 * `SIZE(57)` for the server. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerRandom ::= SEQUENCE {
 * gmt-unix-time    UINT32,
 * random-bytes    Opaque(SIZE(57))
 * }
 * ```
 * 
 * @class
 */
export
class ServerRandom {
    constructor (
        /**
         * @summary `gmt_unix_time`.
         * @description
         *
         * GMT Unix time in seconds, as in TLS Random. X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly gmt_unix_time: UINT32,
        /**
         * @summary `random_bytes`.
         * @description
         *
         * Cryptographic random octets (28 for client, 57 for server in
         * Annex A). X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly random_bytes: Opaque
    ) {}

    /**
     * @summary Restructures an object into a ServerRandom
     * @description
     * 
     * This takes an `object` and converts it to a `ServerRandom`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerRandom`.
     * @returns {ServerRandom}
     */
    public static _from_object (_o: { [_K in keyof (ServerRandom)]: (ServerRandom)[_K] }): ServerRandom {
        return new ServerRandom(_o.gmt_unix_time, _o.random_bytes);
    }


}

/**
 * @summary The Leading Root Component Types of ServerRandom
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerRandom: $.ComponentSpec[] = [
    new $.ComponentSpec("gmt-unix-time", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("random-bytes", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServerRandom
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerRandom: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerRandom
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerRandom: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerRandom: $.ASN1Decoder<ServerRandom> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerRandom
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerRandom (el: _Element): ServerRandom {
    if (!_cached_decoder_for_ServerRandom) { _cached_decoder_for_ServerRandom = function (el: _Element): ServerRandom {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServerRandom contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gmt-unix-time";
    sequence[1].name = "random-bytes";
    let gmt_unix_time!: UINT32;
    let random_bytes!: Opaque;
    gmt_unix_time = _decode_UINT32(sequence[0]);
    random_bytes = _decode_Opaque(sequence[1]);
    return new ServerRandom(
        gmt_unix_time,
        random_bytes,

    );
}; }
    return _cached_decoder_for_ServerRandom(el);
}

let _cached_encoder_for_ServerRandom: $.ASN1Encoder<ServerRandom> | null = null;

/**
 * @summary Encodes a(n) ServerRandom into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerRandom, encoded as an ASN.1 Element.
 */
export
function _encode_ServerRandom (value: ServerRandom, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerRandom) { _cached_encoder_for_ServerRandom = function (value: ServerRandom): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UINT32(value.gmt_unix_time, $.BER),
            /* REQUIRED   */ _encode_Opaque(value.random_bytes, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerRandom(value, elGetter);
}


/* eslint-enable */
