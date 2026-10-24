/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSRPPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSRPPath ::= SEQUENCE
 * {
 *     path [1] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MSRPPath {
    /**
     * @summary `path`.
     * @description
     *
     * Contains the value of the path attribute for the MSRP media-line present
     * in the SIP Message being reported. See IETF RFC 4975 [79] clause 8.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.7.
     *
     * @public
     * @readonly
     */
    readonly path: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        path: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.path = path;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MSRPPath
     * @description
     * 
     * This takes an `object` and converts it to a `MSRPPath`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MSRPPath`.
     * @returns {MSRPPath}
     */
    public static _from_object (_o: { [_K in keyof (MSRPPath)]: (MSRPPath)[_K] }): MSRPPath {
        return new MSRPPath(_o.path, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MSRPPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MSRPPath: $.ComponentSpec[] = [
    new $.ComponentSpec("path", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MSRPPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MSRPPath: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MSRPPath
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MSRPPath: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MSRPPath: $.ASN1Decoder<MSRPPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MSRPPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MSRPPath (el: _Element): MSRPPath {
    if (!_cached_decoder_for_MSRPPath) { _cached_decoder_for_MSRPPath = function (el: _Element): MSRPPath {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("MSRPPath contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "path";
    let path!: UTF8String;
    path = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    return new MSRPPath(
        path,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_MSRPPath(el);
}

let _cached_encoder_for_MSRPPath: $.ASN1Encoder<MSRPPath> | null = null;

/**
 * @summary Encodes a(n) MSRPPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSRPPath, encoded as an ASN.1 Element.
 */
export
function _encode_MSRPPath (value: MSRPPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MSRPPath) { _cached_encoder_for_MSRPPath = function (value: MSRPPath, elGetter: $.ASN1Encoder<MSRPPath>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.path, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MSRPPath(value, elGetter);
}


/* eslint-enable */
