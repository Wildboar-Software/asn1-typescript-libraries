/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    type VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCAddress
 * @description
 * 
 * Address of a PTC client. When privacy is used, the PTC server substitutes an
 * anonymous URI that is unique within the PTC session. Floor-speaker identity
 * uses this structure (table 17.2.14).
 * 
 * 3GPP TS 33.108, clause 17.2.14 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAddress ::= SEQUENCE
 * {
 *     uri                    [0] UTF8String,
 *     -- The set of URIs defined in [RFC3261] and related SIP RFCs.
 *     privacy-setting        [1] BOOLEAN,
 *     -- Default FALSE, send TRUE if privacy is used.
 *     privacy-alias        [2] VisibleString    type OPTIONAL,
 *     -- if privacy is used, the PTC Server creates an anonymous PTC Address of the form
 *     -- <sip:anonymous@anonymous.invalid>. In addition to  anonymity, the anonymous PTC
 *     -- Addresses SHALL be unique within a PTC Session. In case more than one anonymous
 *     -- PTC Addresses are used in the same PTC Session, for the second Anonymous PTC
 *     -- Session and thereafter, the PTC Server SHOULD use the form
 *     -- sip:anonymous-n@anonymous.invalid where n is an integer number.
 *     nickname             [3] UTF8String     type OPTIONAL,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class PTCAddress {
    /**
     * @summary `uri`.
     * @description
     * 
     * URI of the PTC client, from the URI set defined in IETF RFC 3261 and
     * related SIP RFCs. Required on a PTC address.
     * 
     * 3GPP TS 33.108, annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly uri: UTF8String;
    /**
     * @summary `privacy_setting`.
     * @description
     * 
     * False by default. Send true when privacy is used for this PTC address.
     * 
     * 3GPP TS 33.108, annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly privacy_setting: BOOLEAN;
    /**
     * @summary `privacy_alias`.
     * @description
     * 
     * Anonymous PTC address created by the PTC server when privacy is used. It
     * shall be unique within the PTC session. The form is
     * sip:anonymous@anonymous.invalid. If more than one anonymous address is
     * used in the same session, from the second onward the server should use
     * sip:anonymous-n@anonymous.invalid, where n is an integer.
     * 
     * 3GPP TS 33.108, annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly privacy_alias: OPTIONAL<VisibleString>;
    /**
     * @summary `nickname`.
     * @description
     * 
     * Name associated with this PTC address. Annex B.3 does not further define
     * the string. Clause 17 puts the session nickname in the PTC session
     * information parameter.
     * 
     * 3GPP TS 33.108, annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly nickname: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uri: UTF8String,
        privacy_setting: BOOLEAN,
        privacy_alias?: OPTIONAL<VisibleString>,
        nickname?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uri = uri;
        this.privacy_setting = privacy_setting;
        this.privacy_alias = privacy_alias;
        this.nickname = nickname;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
    const _unrecognizedExtensionsList: _Element[] = [];
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.uri, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.privacy_setting, $.BER);
    if (value.privacy_alias !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.privacy_alias, $.BER);
    }
    if (value.nickname !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.nickname, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCAddress(value, elGetter);
}


/* eslint-enable */
