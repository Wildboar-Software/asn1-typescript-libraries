/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCEncryptionInfo
 * @description
 * 
 * Cipher, key, and related material for PTC content that the CSP encrypts or
 * manages, so the LEMF can decipher intercepted talk bursts. Sent when
 * decryption information must be passed. If rekeying is used, one or more
 * further messages are sent at the key change. The event type is PTC encryption
 * (table 18.1). Clause 18 does not say whether the IRI record is a begin,
 * continue, end, or report.
 * 
 * Carried as PTC security information on the IRI (annex B.3). 3GPP TS 33.108,
 * clause 18 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCEncryptionInfo ::= SEQUENCE {
 * 
 *     cipher                    [1]    UTF8String,
 *     cryptoContext            [2] UTF8String OPTIONAL,
 *     key                        [3] UTF8String,
 *     keyEncoding                [4] UTF8String,
 *     salt                    [5] UTF8String OPTIONAL,
 *     pTCOther                [6] UTF8String OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PTCEncryptionInfo {
    /**
     * @summary `cipher`.
     * @description
     * 
     * Name of the cipher. Required on a PTC encryption message (table 18.1) so
     * the LEMF knows which algorithm to apply.
     * 
     * 3GPP TS 33.108, clause 18, table 18.1, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly cipher: UTF8String;
    /**
     * @summary `cryptoContext`.
     * @description
     * 
     * Identifies the session or stream this keying applies to, when the LEMF
     * needs that association. Conditional (table 18.1).
     * 
     * 3GPP TS 33.108, clause 18, table 18.1, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly cryptoContext: OPTIONAL<UTF8String>;
    /**
     * @summary `key`.
     * @description
     * 
     * Key needed to decipher the intercepted PTC content. Required (table
     * 18.1). Further messages carry new keys when rekeying occurs.
     * 
     * 3GPP TS 33.108, clause 18, table 18.1, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly key: UTF8String;
    /**
     * @summary `keyEncoding`.
     * @description
     * 
     * Encoding of the key when the encoding is other than binary (table 18.1).
     * Annex B.3 does not mark the component optional.
     * 
     * 3GPP TS 33.108, clause 18, table 18.1, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly keyEncoding: UTF8String;
    /**
     * @summary `salt`.
     * @description
     * 
     * Initial salt, included when the cipher requires a salt (table 18.1).
     * 
     * 3GPP TS 33.108, clause 18, table 18.1, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly salt: OPTIONAL<UTF8String>;
    /**
     * @summary `pTCOther`.
     * @description
     * 
     * Any other information required to decrypt the PTC data. Conditional
     * (table 18.1). The same role is named on the PTC event parameter.
     * 
     * 3GPP TS 33.108, clause 17.1.5, clause 18, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly pTCOther: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cipher: UTF8String,
        cryptoContext: OPTIONAL<UTF8String>,
        key: UTF8String,
        keyEncoding: UTF8String,
        salt?: OPTIONAL<UTF8String>,
        pTCOther?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cipher = cipher;
        this.cryptoContext = cryptoContext;
        this.key = key;
        this.keyEncoding = keyEncoding;
        this.salt = salt;
        this.pTCOther = pTCOther;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCEncryptionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PTCEncryptionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCEncryptionInfo`.
     * @returns {PTCEncryptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (PTCEncryptionInfo)]: (PTCEncryptionInfo)[_K] }): PTCEncryptionInfo {
        return new PTCEncryptionInfo(_o.cipher, _o.cryptoContext, _o.key, _o.keyEncoding, _o.salt, _o.pTCOther, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PTCEncryptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCEncryptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cipher", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cryptoContext", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("key", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("keyEncoding", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("salt", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCOther", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PTCEncryptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCEncryptionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCEncryptionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCEncryptionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCEncryptionInfo: $.ASN1Decoder<PTCEncryptionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCEncryptionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCEncryptionInfo (el: _Element): PTCEncryptionInfo {
    if (!_cached_decoder_for_PTCEncryptionInfo) { _cached_decoder_for_PTCEncryptionInfo = function (el: _Element): PTCEncryptionInfo {
    let cipher!: UTF8String;
    let cryptoContext: OPTIONAL<UTF8String>;
    let key!: UTF8String;
    let keyEncoding!: UTF8String;
    let salt: OPTIONAL<UTF8String>;
    let pTCOther: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cipher": (_el: _Element): void => { cipher = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cryptoContext": (_el: _Element): void => { cryptoContext = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "key": (_el: _Element): void => { key = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "keyEncoding": (_el: _Element): void => { keyEncoding = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "salt": (_el: _Element): void => { salt = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCOther": (_el: _Element): void => { pTCOther = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCEncryptionInfo,
        _extension_additions_list_spec_for_PTCEncryptionInfo,
        _root_component_type_list_2_spec_for_PTCEncryptionInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCEncryptionInfo(
        cipher,
        cryptoContext,
        key,
        keyEncoding,
        salt,
        pTCOther,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCEncryptionInfo(el);
}

let _cached_encoder_for_PTCEncryptionInfo: $.ASN1Encoder<PTCEncryptionInfo> | null = null;

/**
 * @summary Encodes a(n) PTCEncryptionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCEncryptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PTCEncryptionInfo (value: PTCEncryptionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCEncryptionInfo) { _cached_encoder_for_PTCEncryptionInfo = function (value: PTCEncryptionInfo, elGetter: $.ASN1Encoder<PTCEncryptionInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.cipher, $.BER);
    if (value.cryptoContext !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.cryptoContext, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.key, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.keyEncoding, $.BER);
    if (value.salt !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.salt, $.BER);
    }
    if (value.pTCOther !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.pTCOther, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCEncryptionInfo(value, elGetter);
}


/* eslint-enable */
