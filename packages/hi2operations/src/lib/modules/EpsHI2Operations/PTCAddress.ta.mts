/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAddress ::= SEQUENCE
 * {
 *  uri [0] UTF8String,
 *  -- The set of URIs defined in [RFC3261] and related SIP RFCs.
 *  privacy-setting [1] BOOLEAN,
 *  -- Default FALSE, send TRUE if privacy is used.
 *  privacy-alias [2] VisibleString OPTIONAL,
 *  -- if privacy is used, the PTC Server creates an anonymous PTC Address of the form
 *  -- <sip:anonymous@anonymous.invalid>. In addition to anonymity, the anonymous PTC
 *  -- Addresses SHALL be unique within a PTC Session. In case more than one anonymous
 *  -- PTC Addresses are used in the same PTC Session, for the second Anonymous PTC
 *  -- Session and thereafter, the PTC Server SHOULD use the form
 *  -- sip:anonymous-n@anonymous.invalid where n is an integer number.
 *  nickname [3] UTF8String OPTIONAL,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PTCAddress {
    constructor (
        /**
         * @summary `uri`.
         * @public
         * @readonly
         */
        readonly uri: UTF8String,
        /**
         * @summary `privacy_setting`.
         * @public
         * @readonly
         */
        readonly privacy_setting: BOOLEAN,
        /**
         * @summary `privacy_alias`.
         * @public
         * @readonly
         */
        readonly privacy_alias: OPTIONAL<VisibleString>,
        /**
         * @summary `nickname`.
         * @public
         * @readonly
         */
        readonly nickname: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PTCAddress
     * @description
     * 
     * This takes an `object` and converts it to a `PTCAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCAddress`.
     * @returns {PTCAddress}
     */
    public static _from_object (_o: { [_K in keyof (PTCAddress)]: (PTCAddress)[_K] }): PTCAddress {
        return new PTCAddress(_o.uri, _o.privacy_setting, _o.privacy_alias, _o.nickname, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PTCAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("uri", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("privacy-setting", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("privacy-alias", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nickname", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PTCAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCAddress: $.ASN1Decoder<PTCAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCAddress (el: _Element): PTCAddress {
    if (!_cached_decoder_for_PTCAddress) { _cached_decoder_for_PTCAddress = function (el: _Element): PTCAddress {
    let uri!: UTF8String;
    let privacy_setting!: BOOLEAN;
    let privacy_alias: OPTIONAL<VisibleString>;
    let nickname: OPTIONAL<UTF8String>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uri": (_el: _Element): void => { uri = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "privacy-setting": (_el: _Element): void => { privacy_setting = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "privacy-alias": (_el: _Element): void => { privacy_alias = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "nickname": (_el: _Element): void => { nickname = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCAddress,
        _extension_additions_list_spec_for_PTCAddress,
        _root_component_type_list_2_spec_for_PTCAddress,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCAddress(
        uri,
        privacy_setting,
        privacy_alias,
        nickname,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCAddress(el);
}

let _cached_encoder_for_PTCAddress: $.ASN1Encoder<PTCAddress> | null = null;

/**
 * @summary Encodes a(n) PTCAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PTCAddress (value: PTCAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCAddress) { _cached_encoder_for_PTCAddress = function (value: PTCAddress, elGetter: $.ASN1Encoder<PTCAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.uri, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.privacy_setting, $.BER),
            /* IF_ABSENT  */ ((value.privacy_alias === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.privacy_alias, $.BER)),
            /* IF_ABSENT  */ ((value.nickname === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.nickname, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCAddress(value, elGetter);
}


/* eslint-enable */
