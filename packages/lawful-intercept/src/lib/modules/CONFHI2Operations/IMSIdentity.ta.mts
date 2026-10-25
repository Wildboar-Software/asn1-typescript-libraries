/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSIdentity
 * @description
 * 
 * A SIP URI or a tel URI naming a party or a conference. Conditional conference
 * and temporary conference URIs use this form: provide at least one when
 * available. 3GPP TS 33.108, clause 11.5 and annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSIdentity ::= SEQUENCE
 * {
 *         sip-uri                    [1] OCTET STRING     type OPTIONAL,
 *             -- See [REF 26 of 33.108]
 * 
 *         tel-uri                    [2] OCTET STRING     type OPTIONAL,
 *             -- See [REF 67 of 33.108]
 * 
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IMSIdentity {
    /**
     * @summary `sip_uri`.
     * @description
     * 
     * SIP URI. Reference 26 of 3GPP TS 33.108 is IETF RFC 3261. The
     * specification does not restate the URI layout here.
     * 
     * @public
     * @readonly
     */
    readonly sip_uri: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tel_uri`.
     * @description
     * 
     * Tel URI. Reference 67 of 3GPP TS 33.108 is IETF RFC 3966. The
     * specification does not restate the URI layout here.
     * 
     * @public
     * @readonly
     */
    readonly tel_uri: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sip_uri?: OPTIONAL<OCTET_STRING>,
        tel_uri?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sip_uri = sip_uri;
        this.tel_uri = tel_uri;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `IMSIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSIdentity`.
     * @returns {IMSIdentity}
     */
    public static _from_object (_o: { [_K in keyof (IMSIdentity)]: (IMSIdentity)[_K] }): IMSIdentity {
        return new IMSIdentity(_o.sip_uri, _o.tel_uri, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("sip-uri", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tel-uri", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMSIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSIdentity: $.ASN1Decoder<IMSIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSIdentity (el: _Element): IMSIdentity {
    if (!_cached_decoder_for_IMSIdentity) { _cached_decoder_for_IMSIdentity = function (el: _Element): IMSIdentity {
    let sip_uri: OPTIONAL<OCTET_STRING>;
    let tel_uri: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sip-uri": (_el: _Element): void => { sip_uri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tel-uri": (_el: _Element): void => { tel_uri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSIdentity,
        _extension_additions_list_spec_for_IMSIdentity,
        _root_component_type_list_2_spec_for_IMSIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSIdentity(
        sip_uri,
        tel_uri,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSIdentity(el);
}

let _cached_encoder_for_IMSIdentity: $.ASN1Encoder<IMSIdentity> | null = null;

/**
 * @summary Encodes a(n) IMSIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_IMSIdentity (value: IMSIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSIdentity) { _cached_encoder_for_IMSIdentity = function (value: IMSIdentity, elGetter: $.ASN1Encoder<IMSIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sip_uri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sip_uri, $.BER);
    }
    if (value.tel_uri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.tel_uri, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSIdentity(value, elGetter);
}


/* eslint-enable */
