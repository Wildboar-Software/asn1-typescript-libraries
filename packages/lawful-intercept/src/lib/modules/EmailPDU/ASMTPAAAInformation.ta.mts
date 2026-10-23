/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AAAauthMethod, _encode_AAAauthMethod, _enum_for_AAAauthMethod, AAAauthMethod } from "../EmailPDU/AAAauthMethod.ta.mjs";
// export { AAAauthMethod, _enum_for_AAAauthMethod, AAAauthMethod_undefinedAuthMethod /* IMPORTED_LONG_ENUMERATION_ITEM */, undefinedAuthMethod /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAauthMethod_cramMD5 /* IMPORTED_LONG_ENUMERATION_ITEM */, cramMD5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAauthMethod_digestMD5 /* IMPORTED_LONG_ENUMERATION_ITEM */, digestMD5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AAAauthMethod, _encode_AAAauthMethod } from "../EmailPDU/AAAauthMethod.ta.mjs";
import { _decode_AAAResult, _encode_AAAResult, _enum_for_AAAResult, AAAResult } from "../EmailPDU/AAAResult.ta.mjs";
// export { AAAResult, _enum_for_AAAResult, AAAResult_resultUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, resultUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAResult_aAAFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, aAAFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAResult_aAASucceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, aAASucceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AAAResult, _encode_AAAResult } from "../EmailPDU/AAAResult.ta.mjs";


/**
 * @summary ASMTPAAAInformation
 * @description
 *
 * Authenticated SMTP material for an application-layer intercept: username and,
 * optionally, the authentication method, the server challenge, the client
 * response, and the result.
 *
 * Used when SMTP authentication as in IETF RFC 4954 is in use (clause 6.2.3).
 * Ordinary SMTP login is not well authenticated (clause A.2.1); this structure
 * is the authenticated case, not the bare `HELO` exchange.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.2.3 and A.2.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASMTPAAAInformation ::= SEQUENCE
 *     -- The ASMTPAAAInformation field contains the SMTP username and
 *     -- optionally the authentication fields
 * {
 *     username                    [0] UTF8String (SIZE (0..64)),
 *     authMethod                  [1] AAAauthMethod OPTIONAL,
 *         -- The hashing method used, i.e. CRAM-MD5, DIGEST-MD5, etc
 *     challenge                   [2] OCTET STRING OPTIONAL,
 *         -- A BASE64 encoded challenge send by the SMTP server
 *     response                    [3] OCTET STRING OPTIONAL,
 *         -- A BASE64 encoded hashed response returned by the client
 *     aAAResult                   [4] AAAResult OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ASMTPAAAInformation {
    /**
     * @summary `username`.
     * @description
     *
     * SMTP authentication username, 0 to 64 characters.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.2.3.
     *
     * @public
     * @readonly
     */
    readonly username: UTF8String;
    /**
     * @summary `authMethod`.
     * @description
     *
     * Hashing or SASL method used, for example CRAM-MD5 or DIGEST-MD5. See
     * `AAAauthMethod`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
     *
     * @public
     * @readonly
     */
    readonly authMethod: OPTIONAL<AAAauthMethod>;
    /**
     * @summary `challenge`.
     * @description
     *
     * Challenge sent by the SMTP server, BASE64-encoded.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
     *
     * @public
     * @readonly
     */
    readonly challenge: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `response`.
     * @description
     *
     * Hashed response returned by the client, BASE64-encoded.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D (`ASMTPAAAInformation`).
     *
     * @public
     * @readonly
     */
    readonly response: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aAAResult`.
     * @description
     *
     * Result of the SMTP authentication, when reported.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.2.3.
     *
     * @public
     * @readonly
     */
    readonly aAAResult: OPTIONAL<AAAResult>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        username: UTF8String,
        authMethod?: OPTIONAL<AAAauthMethod>,
        challenge?: OPTIONAL<OCTET_STRING>,
        response?: OPTIONAL<OCTET_STRING>,
        aAAResult?: OPTIONAL<AAAResult>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.username = username;
        this.authMethod = authMethod;
        this.challenge = challenge;
        this.response = response;
        this.aAAResult = aAAResult;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ASMTPAAAInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ASMTPAAAInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ASMTPAAAInformation`.
     * @returns {ASMTPAAAInformation}
     */
    public static _from_object (_o: { [_K in keyof (ASMTPAAAInformation)]: (ASMTPAAAInformation)[_K] }): ASMTPAAAInformation {
        return new ASMTPAAAInformation(_o.username, _o.authMethod, _o.challenge, _o.response, _o.aAAResult, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `authMethod`
         * @public
         * @static
         */

    public static _enum_for_authMethod = _enum_for_AAAauthMethod;        /**
         * @summary The enum used as the type of the component `aAAResult`
         * @public
         * @static
         */

    public static _enum_for_aAAResult = _enum_for_AAAResult;
}

/**
 * @summary The Leading Root Component Types of ASMTPAAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ASMTPAAAInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("username", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("authMethod", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("challenge", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("response", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aAAResult", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ASMTPAAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ASMTPAAAInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ASMTPAAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ASMTPAAAInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ASMTPAAAInformation: $.ASN1Decoder<ASMTPAAAInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASMTPAAAInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASMTPAAAInformation (el: _Element): ASMTPAAAInformation {
    if (!_cached_decoder_for_ASMTPAAAInformation) { _cached_decoder_for_ASMTPAAAInformation = function (el: _Element): ASMTPAAAInformation {
    let username!: UTF8String;
    let authMethod: OPTIONAL<AAAauthMethod>;
    let challenge: OPTIONAL<OCTET_STRING>;
    let response: OPTIONAL<OCTET_STRING>;
    let aAAResult: OPTIONAL<AAAResult>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "username": (_el: _Element): void => {
            username = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (username.length > 64) {
                throw new ASN1SizeError("ASMTPAAAInformation.username violates SIZE constraint");
            }
        },
        "authMethod": (_el: _Element): void => { authMethod = $._decode_implicit<AAAauthMethod>(() => _decode_AAAauthMethod)(_el); },
        "challenge": (_el: _Element): void => { challenge = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "response": (_el: _Element): void => { response = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aAAResult": (_el: _Element): void => { aAAResult = $._decode_implicit<AAAResult>(() => _decode_AAAResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ASMTPAAAInformation,
        _extension_additions_list_spec_for_ASMTPAAAInformation,
        _root_component_type_list_2_spec_for_ASMTPAAAInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ASMTPAAAInformation(
        username,
        authMethod,
        challenge,
        response,
        aAAResult,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ASMTPAAAInformation(el);
}

let _cached_encoder_for_ASMTPAAAInformation: $.ASN1Encoder<ASMTPAAAInformation> | null = null;

/**
 * @summary Encodes a(n) ASMTPAAAInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASMTPAAAInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ASMTPAAAInformation (value: ASMTPAAAInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASMTPAAAInformation) { _cached_encoder_for_ASMTPAAAInformation = function (value: ASMTPAAAInformation, elGetter: $.ASN1Encoder<ASMTPAAAInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.username, $.BER);
    if (value.authMethod !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AAAauthMethod, $.BER)(value.authMethod, $.BER);
    }
    if (value.challenge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.challenge, $.BER);
    }
    if (value.response !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.response, $.BER);
    }
    if (value.aAAResult !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AAAResult, $.BER)(value.aAAResult, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ASMTPAAAInformation(value, elGetter);
}


/* eslint-enable */
