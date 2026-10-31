/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type IA5String,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NISNetgroupTripleSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NISNetgroupTripleSyntax ::= SEQUENCE {
 *     hostname    [0] IA5String OPTIONAL,
 *     username    [1] IA5String OPTIONAL,
 *     domainname  [2] IA5String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NISNetgroupTripleSyntax {
    /**
     * @summary `hostname`.
     * @public
     * @readonly
     */
    readonly hostname: OPTIONAL<IA5String>;
    /**
     * @summary `username`.
     * @public
     * @readonly
     */
    readonly username: OPTIONAL<IA5String>;
    /**
     * @summary `domainname`.
     * @public
     * @readonly
     */
    readonly domainname: OPTIONAL<IA5String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hostname: OPTIONAL<IA5String>,
        username: OPTIONAL<IA5String>,
        domainname: OPTIONAL<IA5String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hostname = hostname;
        this.username = username;
        this.domainname = domainname;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NISNetgroupTripleSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `NISNetgroupTripleSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NISNetgroupTripleSyntax`.
     * @returns {NISNetgroupTripleSyntax}
     */
    public static _from_object (_o: { [_K in keyof (NISNetgroupTripleSyntax)]: (NISNetgroupTripleSyntax)[_K] }): NISNetgroupTripleSyntax {
        return new NISNetgroupTripleSyntax(_o.hostname, _o.username, _o.domainname, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NISNetgroupTripleSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NISNetgroupTripleSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("hostname", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("username", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("domainname", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NISNetgroupTripleSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NISNetgroupTripleSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NISNetgroupTripleSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NISNetgroupTripleSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NISNetgroupTripleSyntax: $.ASN1Decoder<NISNetgroupTripleSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NISNetgroupTripleSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NISNetgroupTripleSyntax (el: _Element): NISNetgroupTripleSyntax {
    if (!_cached_decoder_for_NISNetgroupTripleSyntax) { _cached_decoder_for_NISNetgroupTripleSyntax = function (el: _Element): NISNetgroupTripleSyntax {
    let hostname: OPTIONAL<IA5String>;
    let username: OPTIONAL<IA5String>;
    let domainname: OPTIONAL<IA5String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hostname": (_el: _Element): void => { hostname = $._decode_explicit<IA5String>(() => $._decodeIA5String)(_el); },
        "username": (_el: _Element): void => { username = $._decode_explicit<IA5String>(() => $._decodeIA5String)(_el); },
        "domainname": (_el: _Element): void => { domainname = $._decode_explicit<IA5String>(() => $._decodeIA5String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NISNetgroupTripleSyntax,
        _extension_additions_list_spec_for_NISNetgroupTripleSyntax,
        _root_component_type_list_2_spec_for_NISNetgroupTripleSyntax,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NISNetgroupTripleSyntax(
        hostname,
        username,
        domainname,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NISNetgroupTripleSyntax(el);
}

let _cached_encoder_for_NISNetgroupTripleSyntax: $.ASN1Encoder<NISNetgroupTripleSyntax> | null = null;

/**
 * @summary Encodes a(n) NISNetgroupTripleSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NISNetgroupTripleSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_NISNetgroupTripleSyntax (value: NISNetgroupTripleSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NISNetgroupTripleSyntax) { _cached_encoder_for_NISNetgroupTripleSyntax = function (value: NISNetgroupTripleSyntax, elGetter: $.ASN1Encoder<NISNetgroupTripleSyntax>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.hostname !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.hostname, $.BER);
    }
    if (value.username !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.username, $.BER);
    }
    if (value.domainname !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.domainname, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NISNetgroupTripleSyntax(value, elGetter);
}


/* eslint-enable */
