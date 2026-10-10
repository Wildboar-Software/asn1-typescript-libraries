/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSPasswordCreds
 * @description
 *
 * Cleartext password credentials delegated to the server.
 * Carried in {@link TSCredentials} when `credType` is 1. The
 * password is plaintext at this layer; confidentiality is the
 * SPNEGO wrap of the enclosing `TSRequest.authInfo`.
 *
 * Where a field is text, Windows encodes a
 * [UNICODE_STRING](https://learn.microsoft.com/en-us/windows/win32/api/ntdef/ns-ntdef-unicode_string)
 * as UTF-16LE with no BOM
 * ([glossary](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/97e4a826-1112-4ab4-8662-cfa58418b4c1)).
 * The [section 4](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/94846575-5a58-44de-b07b-48b90af328fb)
 * example has no terminating null and no `Length` /
 * `MaximumLength` prefix. The specification does not otherwise
 * define a character encoding.
 *
 * [MS-CSSP, section 2.2.1.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/17773cc4-21e9-4a75-a0dd-72706b174fe5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSPasswordCreds ::= SEQUENCE {
 *         domainName    [0] OCTET STRING,
 *         userName     [1] OCTET STRING,
 *         password     [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class TSPasswordCreds {
    constructor (
        /**
         * Name of the user's account domain.
         *
         * [MS-CSSP, section 2.2.1.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/17773cc4-21e9-4a75-a0dd-72706b174fe5).
         * @public
         * @readonly
         */
        readonly domainName: OCTET_STRING,
        /**
         * The user's account name.
         *
         * [MS-CSSP, section 2.2.1.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/17773cc4-21e9-4a75-a0dd-72706b174fe5).
         * @public
         * @readonly
         */
        readonly userName: OCTET_STRING,
        /**
         * The user's account password, in the clear at this layer.
         *
         * [MS-CSSP, section 2.2.1.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/17773cc4-21e9-4a75-a0dd-72706b174fe5).
         * @public
         * @readonly
         */
        readonly password: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a TSPasswordCreds
     * @description
     * 
     * This takes an `object` and converts it to a `TSPasswordCreds`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSPasswordCreds`.
     * @returns {TSPasswordCreds}
     */
    public static _from_object (_o: { [_K in keyof (TSPasswordCreds)]: (TSPasswordCreds)[_K] }): TSPasswordCreds {
        return new TSPasswordCreds(_o.domainName, _o.userName, _o.password);
    }


}

/**
 * @summary The Leading Root Component Types of TSPasswordCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSPasswordCreds: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("userName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("password", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TSPasswordCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSPasswordCreds: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSPasswordCreds
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSPasswordCreds: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSPasswordCreds: $.ASN1Decoder<TSPasswordCreds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSPasswordCreds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSPasswordCreds (el: _Element): TSPasswordCreds {
    if (!_cached_decoder_for_TSPasswordCreds) { _cached_decoder_for_TSPasswordCreds = function (el: _Element): TSPasswordCreds {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TSPasswordCreds contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domainName";
    sequence[1].name = "userName";
    sequence[2].name = "password";
    const domainName: OCTET_STRING = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const userName: OCTET_STRING = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    const password: OCTET_STRING = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new TSPasswordCreds(
        domainName,
        userName,
        password,

    );
}; }
    return _cached_decoder_for_TSPasswordCreds(el);
}

let _cached_encoder_for_TSPasswordCreds: $.ASN1Encoder<TSPasswordCreds> | null = null;

/**
 * @summary Encodes a(n) TSPasswordCreds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSPasswordCreds, encoded as an ASN.1 Element.
 */
export
function _encode_TSPasswordCreds (value: TSPasswordCreds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSPasswordCreds) { _cached_encoder_for_TSPasswordCreds = function (value: TSPasswordCreds): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.domainName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.userName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.password, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSPasswordCreds(value, elGetter);
}


/* eslint-enable */
