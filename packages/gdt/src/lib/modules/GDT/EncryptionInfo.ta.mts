/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary EncryptionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * -- enc-type                     - cipher type
 * -- base64                                                                           - Base64 Encoding
 * -- bf bf-cbc bf-cfb bf-ecb bf-ofb                                                   - Blowfish Cipher
 * -- cast cast-cbc                                                                    - CAST Cipher
 * -- cast5-cbc cast5-cfb cast5-ecb cast5-ofb                                          - CAST5 Cipher
 * -- des des-cbc des-cfb des-ecb des-ede des-ede-cbc des-ede-cfb des-ede-ofb des-ofb  - DES Cipher
 * -- des3 desx des-ede3 des-ede3-cbc des-ede3-cfb des-ede3-ofb                        - Triple-DES Cipher
 * -- idea idea-cbc idea-cfb idea-ecb idea-ofb                                         - IDEA Cipher
 * -- rc2 rc2-cbc rc2-cfb rc2-ecb rc2-ofb                                              - RC2 Cipher
 * -- rc4                                                                              - RC4 Cipher
 * -- rc5 rc5-cbc rc5-cfb rc5-ecb rc5-ofb                                              - RC5 Cipher
 * -- params                     - cipher related parameters
 * EncryptionInfo ::= SEQUENCE {
 *     enc-type  OCTET STRING,
 *     params    Parameters OPTIONAL,
 *     ...
 * }
 * ```
 *
 * @class
 */
export
class EncryptionInfo {
    constructor (
        /**
         * @summary `enc_type`.
         * @public
         * @readonly
         */
        readonly enc_type: OCTET_STRING,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptionInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptionInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptionInfo`.
     * @returns {EncryptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (EncryptionInfo)]: (EncryptionInfo)[_K] }): EncryptionInfo {
        return new EncryptionInfo(_o.enc_type, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EncryptionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncryptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("enc-type", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of EncryptionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncryptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncryptionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_EncryptionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncryptionInfo: $.ASN1Decoder<EncryptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptionInfo (el: _Element): EncryptionInfo {
    if (!_cached_decoder_for_EncryptionInfo) { _cached_decoder_for_EncryptionInfo = function (el: _Element): EncryptionInfo {
    let enc_type!: OCTET_STRING;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "enc-type": (_el: _Element): void => { enc_type = $._decodeOctetString(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptionInfo,
        _extension_additions_list_spec_for_EncryptionInfo,
        _root_component_type_list_2_spec_for_EncryptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EncryptionInfo(
        enc_type,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EncryptionInfo(el);
}

let _cached_encoder_for_EncryptionInfo: $.ASN1Encoder<EncryptionInfo> | null = null;

/**
 * @summary Encodes a(n) EncryptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptionInfo (value: EncryptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptionInfo) { _cached_encoder_for_EncryptionInfo = function (value: EncryptionInfo, elGetter: $.ASN1Encoder<EncryptionInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.enc_type, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EncryptionInfo(value, elGetter);
}


/* eslint-enable */
