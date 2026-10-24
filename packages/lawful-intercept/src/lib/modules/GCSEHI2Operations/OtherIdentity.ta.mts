/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OtherIdentity
 * @description
 * 
 * An identity whose encoding is named beside the value. Table 14.2 uses the
 * other identity for the target's NAI. The octet layout is whatever the
 * encoding name identifies; no particular NAI encoding is defined. 3GPP TS
 * 33.108, annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherIdentity ::= SEQUENCE
 * {
 *         otherIdentityEncoding    [1] UTF8String     type OPTIONAL, -- Specifies the encoding format of
 *             -- the contents included within the parameter otherIDInfo.
 * 
 *         otherIDInfo                [2] OCTET STRING     type OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class OtherIdentity {
    /**
     * @summary `otherIdentityEncoding`.
     * @description
     * 
     * Name of the encoding used for the accompanying identity octets. 3GPP TS
     * 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly otherIdentityEncoding: OPTIONAL<UTF8String>;
    /**
     * @summary `otherIDInfo`.
     * @description
     * 
     * Identity octets in the named encoding. The specification does not define
     * a layout. 3GPP TS 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly otherIDInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        otherIdentityEncoding?: OPTIONAL<UTF8String>,
        otherIDInfo?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.otherIdentityEncoding = otherIdentityEncoding;
        this.otherIDInfo = otherIDInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a OtherIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `OtherIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherIdentity`.
     * @returns {OtherIdentity}
     */
    public static _from_object (_o: { [_K in keyof (OtherIdentity)]: (OtherIdentity)[_K] }): OtherIdentity {
        return new OtherIdentity(_o.otherIdentityEncoding, _o.otherIDInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of OtherIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("otherIdentityEncoding", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("otherIDInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of OtherIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherIdentity: $.ASN1Decoder<OtherIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherIdentity (el: _Element): OtherIdentity {
    if (!_cached_decoder_for_OtherIdentity) { _cached_decoder_for_OtherIdentity = function (el: _Element): OtherIdentity {
    let otherIdentityEncoding: OPTIONAL<UTF8String>;
    let otherIDInfo: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "otherIdentityEncoding": (_el: _Element): void => { otherIdentityEncoding = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "otherIDInfo": (_el: _Element): void => { otherIDInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherIdentity,
        _extension_additions_list_spec_for_OtherIdentity,
        _root_component_type_list_2_spec_for_OtherIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OtherIdentity(
        otherIdentityEncoding,
        otherIDInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_OtherIdentity(el);
}

let _cached_encoder_for_OtherIdentity: $.ASN1Encoder<OtherIdentity> | null = null;

/**
 * @summary Encodes a(n) OtherIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_OtherIdentity (value: OtherIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherIdentity) { _cached_encoder_for_OtherIdentity = function (value: OtherIdentity, elGetter: $.ASN1Encoder<OtherIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.otherIdentityEncoding !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.otherIdentityEncoding, $.BER);
    }
    if (value.otherIDInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.otherIDInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OtherIdentity(value, elGetter);
}


/* eslint-enable */
