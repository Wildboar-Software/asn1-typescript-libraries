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
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";

import { ServerRandom, _decode_ServerRandom, _encode_ServerRandom } from "../TSM/ServerRandom.ta.mjs";

import { SessionID, _decode_SessionID, _encode_SessionID } from "../TSM/SessionID.ta.mjs";

import { CipherSuite, _enum_for_CipherSuite, _decode_CipherSuite, _encode_CipherSuite } from "../TSM/CipherSuite.ta.mjs";

import { CompressionMethod, _enum_for_CompressionMethod, _decode_CompressionMethod, _encode_CompressionMethod } from "../TSM/CompressionMethod.ta.mjs";

import { ExtensionValues, _decode_ExtensionValues, _encode_ExtensionValues } from "../TSM/ExtensionValues.ta.mjs";



/**
 * @summary ServerHello
 * @description
 *
 * TLS ServerHello: selected version, random, session id, cipher suite,
 * compression, optional extensions. ITU-T Rec. X.1084 (05/2008)
 * §10.3.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerHello ::= SEQUENCE {
 * server-version        ProtocolVersion,
 * random            ServerRandom,
 * session-id            SessionID,
 * cipher-suite        CipherSuite,
 * compression-method    CompressionMethod,
 * ...,
 * ...,
 * server-hello-extension-list    ExtensionValues
 * }
 * ```
 * 
 * @class
 */
export
class ServerHello {
    constructor (
        /**
         * @summary `server_version`.
         * @description
         *
         * Protocol version the server selects. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly server_version: ProtocolVersion,
        /**
         * @summary `random`.
         * @description
         *
         * Hello random (challenge). X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly random: ServerRandom,
        /**
         * @summary `session_id`.
         * @description
         *
         * TLS session identifier (`UINT32` in Annex A). X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly session_id: SessionID,
        /**
         * @summary `cipher_suite`.
         * @description
         *
         * Cipher suite the server selects. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly cipher_suite: CipherSuite,
        /**
         * @summary `compression_method`.
         * @description
         *
         * Compression method the server selects. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly compression_method: CompressionMethod,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `server_hello_extension_list`.
         * @description
         *
         * TLS-style hello extensions. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly server_hello_extension_list: ExtensionValues
    ) {}

    /**
     * @summary Restructures an object into a ServerHello
     * @description
     * 
     * This takes an `object` and converts it to a `ServerHello`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerHello`.
     * @returns {ServerHello}
     */
    public static _from_object (_o: { [_K in keyof (ServerHello)]: (ServerHello)[_K] }): ServerHello {
        return new ServerHello(_o.server_version, _o.random, _o.session_id, _o.cipher_suite, _o.compression_method, _o._unrecognizedExtensionsList, _o.server_hello_extension_list);
    }

        /**
         * @summary The enum used as the type of the component `cipher_suite`
         * @public
         * @static
         */

    public static _enum_for_cipher_suite = _enum_for_CipherSuite;        /**
         * @summary The enum used as the type of the component `compression_method`
         * @public
         * @static
         */

    public static _enum_for_compression_method = _enum_for_CompressionMethod;
}

/**
 * @summary The Leading Root Component Types of ServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerHello: $.ComponentSpec[] = [
    new $.ComponentSpec("server-version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("random", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("session-id", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cipher-suite", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("compression-method", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerHello: $.ComponentSpec[] = [
    new $.ComponentSpec("server-hello-extension-list", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Extension Addition Component Types of ServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerHello: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerHello: $.ASN1Decoder<ServerHello> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerHello
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerHello (el: _Element): ServerHello {
    if (!_cached_decoder_for_ServerHello) { _cached_decoder_for_ServerHello = function (el: _Element): ServerHello {
    let server_version!: ProtocolVersion;
    let random!: ServerRandom;
    let session_id!: SessionID;
    let cipher_suite!: CipherSuite;
    let compression_method!: CompressionMethod;
    let _unrecognizedExtensionsList: _Element[] = [];
    let server_hello_extension_list!: ExtensionValues;
    const callbacks: $.DecodingMap = {
        "server-version": (_el: _Element): void => { server_version = _decode_ProtocolVersion(_el); },
        "random": (_el: _Element): void => { random = _decode_ServerRandom(_el); },
        "session-id": (_el: _Element): void => { session_id = _decode_SessionID(_el); },
        "cipher-suite": (_el: _Element): void => { cipher_suite = _decode_CipherSuite(_el); },
        "compression-method": (_el: _Element): void => { compression_method = _decode_CompressionMethod(_el); },
        "server-hello-extension-list": (_el: _Element): void => { server_hello_extension_list = _decode_ExtensionValues(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerHello,
        _extension_additions_list_spec_for_ServerHello,
        _root_component_type_list_2_spec_for_ServerHello,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServerHello(
        server_version,
        random,
        session_id,
        cipher_suite,
        compression_method,
        _unrecognizedExtensionsList,
        server_hello_extension_list
    );
}; }
    return _cached_decoder_for_ServerHello(el);
}

let _cached_encoder_for_ServerHello: $.ASN1Encoder<ServerHello> | null = null;

/**
 * @summary Encodes a(n) ServerHello into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerHello, encoded as an ASN.1 Element.
 */
export
function _encode_ServerHello (value: ServerHello, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerHello) { _cached_encoder_for_ServerHello = function (value: ServerHello): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolVersion(value.server_version, $.BER),
            /* REQUIRED   */ _encode_ServerRandom(value.random, $.BER),
            /* REQUIRED   */ _encode_SessionID(value.session_id, $.BER),
            /* REQUIRED   */ _encode_CipherSuite(value.cipher_suite, $.BER),
            /* REQUIRED   */ _encode_CompressionMethod(value.compression_method, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* REQUIRED   */ _encode_ExtensionValues(value.server_hello_extension_list, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerHello(value, elGetter);
}


/* eslint-enable */
