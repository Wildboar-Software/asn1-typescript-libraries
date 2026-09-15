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

import { ClientRandom, _decode_ClientRandom, _encode_ClientRandom } from "../TSM/ClientRandom.ta.mjs";

import { SessionID, _decode_SessionID, _encode_SessionID } from "../TSM/SessionID.ta.mjs";

import { CipherSuites, _decode_CipherSuites, _encode_CipherSuites } from "../TSM/CipherSuites.ta.mjs";

import { CompressionMethods, _decode_CompressionMethods, _encode_CompressionMethods } from "../TSM/CompressionMethods.ta.mjs";

import { ExtensionValues, _decode_ExtensionValues, _encode_ExtensionValues } from "../TSM/ExtensionValues.ta.mjs";



/**
 * @summary ClientHello
 * @description
 *
 * TLS ClientHello (cipher suites, compression, optional TLS
 * extensions). TSM biometric offers are a separate handshake
 * (`BiometricClientHello`), not RFC 4366 hello extensions—X.1084 does
 * not use RFC 4366 without IETF consensus. ITU-T Rec. X.1084 (05/2008)
 * §10.3.1–§10.3.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientHello ::= SEQUENCE {
 * client-version        ProtocolVersion,
 * random            ClientRandom,
 * session-id            SessionID,
 * cipher-suites        CipherSuites,
 * compression-methods    CompressionMethods,
 * ...,
 * ...,
 * client-hello-extension-list    ExtensionValues
 * }
 * ```
 * 
 * @class
 */
export
class ClientHello {
    constructor (
        /**
         * @summary `client_version`.
         * @description
         *
         * Protocol version the client offers (TLS-style). X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly client_version: ProtocolVersion,
        /**
         * @summary `random`.
         * @description
         *
         * Hello random (challenge). X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly random: ClientRandom,
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
         * @summary `cipher_suites`.
         * @description
         *
         * Cipher suites the client offers, ordered by preference.
         * X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly cipher_suites: CipherSuites,
        /**
         * @summary `compression_methods`.
         * @description
         *
         * Compression methods the client offers. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly compression_methods: CompressionMethods,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `client_hello_extension_list`.
         * @description
         *
         * TLS-style hello extensions. X.1084 §10.3.2.
         *
         * @public
         * @readonly
         */
        readonly client_hello_extension_list: ExtensionValues
    ) {}

    /**
     * @summary Restructures an object into a ClientHello
     * @description
     * 
     * This takes an `object` and converts it to a `ClientHello`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientHello`.
     * @returns {ClientHello}
     */
    public static _from_object (_o: { [_K in keyof (ClientHello)]: (ClientHello)[_K] }): ClientHello {
        return new ClientHello(_o.client_version, _o.random, _o.session_id, _o.cipher_suites, _o.compression_methods, _o._unrecognizedExtensionsList, _o.client_hello_extension_list);
    }


}

/**
 * @summary The Leading Root Component Types of ClientHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientHello: $.ComponentSpec[] = [
    new $.ComponentSpec("client-version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("random", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("session-id", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cipher-suites", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("compression-methods", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ClientHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientHello: $.ComponentSpec[] = [
    new $.ComponentSpec("client-hello-extension-list", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Extension Addition Component Types of ClientHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientHello: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientHello: $.ASN1Decoder<ClientHello> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientHello
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientHello (el: _Element): ClientHello {
    if (!_cached_decoder_for_ClientHello) { _cached_decoder_for_ClientHello = function (el: _Element): ClientHello {
    let client_version!: ProtocolVersion;
    let random!: ClientRandom;
    let session_id!: SessionID;
    let cipher_suites!: CipherSuites;
    let compression_methods!: CompressionMethods;
    let _unrecognizedExtensionsList: _Element[] = [];
    let client_hello_extension_list!: ExtensionValues;
    const callbacks: $.DecodingMap = {
        "client-version": (_el: _Element): void => { client_version = _decode_ProtocolVersion(_el); },
        "random": (_el: _Element): void => { random = _decode_ClientRandom(_el); },
        "session-id": (_el: _Element): void => { session_id = _decode_SessionID(_el); },
        "cipher-suites": (_el: _Element): void => { cipher_suites = _decode_CipherSuites(_el); },
        "compression-methods": (_el: _Element): void => { compression_methods = _decode_CompressionMethods(_el); },
        "client-hello-extension-list": (_el: _Element): void => { client_hello_extension_list = _decode_ExtensionValues(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientHello,
        _extension_additions_list_spec_for_ClientHello,
        _root_component_type_list_2_spec_for_ClientHello,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ClientHello(
        client_version,
        random,
        session_id,
        cipher_suites,
        compression_methods,
        _unrecognizedExtensionsList,
        client_hello_extension_list
    );
}; }
    return _cached_decoder_for_ClientHello(el);
}

let _cached_encoder_for_ClientHello: $.ASN1Encoder<ClientHello> | null = null;

/**
 * @summary Encodes a(n) ClientHello into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientHello, encoded as an ASN.1 Element.
 */
export
function _encode_ClientHello (value: ClientHello, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientHello) { _cached_encoder_for_ClientHello = function (value: ClientHello): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolVersion(value.client_version, $.BER),
            /* REQUIRED   */ _encode_ClientRandom(value.random, $.BER),
            /* REQUIRED   */ _encode_SessionID(value.session_id, $.BER),
            /* REQUIRED   */ _encode_CipherSuites(value.cipher_suites, $.BER),
            /* REQUIRED   */ _encode_CompressionMethods(value.compression_methods, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* REQUIRED   */ _encode_ExtensionValues(value.client_hello_extension_list, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ClientHello(value, elGetter);
}


/* eslint-enable */
