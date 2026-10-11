/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceCollectionEntityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceCollectionEntityInfo ::= SEQUENCE
 * {
 *     traceCollectionEntityIPAddress   [1] BIT STRING (SIZE(1..160, ...)),
 *     traceCollectionEntityURI         [2] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class TraceCollectionEntityInfo {
    /**
     * @summary `traceCollectionEntityIPAddress`.
     * @public
     * @readonly
     */
    readonly traceCollectionEntityIPAddress: BIT_STRING;
    /**
     * @summary `traceCollectionEntityURI`.
     * @public
     * @readonly
     */
    readonly traceCollectionEntityURI: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        traceCollectionEntityIPAddress: BIT_STRING,
        traceCollectionEntityURI: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.traceCollectionEntityIPAddress = traceCollectionEntityIPAddress;
        this.traceCollectionEntityURI = traceCollectionEntityURI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TraceCollectionEntityInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TraceCollectionEntityInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceCollectionEntityInfo`.
     * @returns {TraceCollectionEntityInfo}
     */
    public static _from_object (_o: { [_K in keyof (TraceCollectionEntityInfo)]: (TraceCollectionEntityInfo)[_K] }): TraceCollectionEntityInfo {
        return new TraceCollectionEntityInfo(_o.traceCollectionEntityIPAddress, _o.traceCollectionEntityURI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TraceCollectionEntityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceCollectionEntityInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("traceCollectionEntityIPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("traceCollectionEntityURI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TraceCollectionEntityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceCollectionEntityInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceCollectionEntityInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceCollectionEntityInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TraceCollectionEntityInfo: $.ASN1Decoder<TraceCollectionEntityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceCollectionEntityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceCollectionEntityInfo (el: _Element): TraceCollectionEntityInfo {
    if (!_cached_decoder_for_TraceCollectionEntityInfo) { _cached_decoder_for_TraceCollectionEntityInfo = function (el: _Element): TraceCollectionEntityInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TraceCollectionEntityInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "traceCollectionEntityIPAddress";
    sequence[1].name = "traceCollectionEntityURI";
    let traceCollectionEntityIPAddress!: BIT_STRING;
    let traceCollectionEntityURI!: UTF8String;
    traceCollectionEntityIPAddress = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(sequence[0]);
    traceCollectionEntityURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    return new TraceCollectionEntityInfo(
        traceCollectionEntityIPAddress,
        traceCollectionEntityURI,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TraceCollectionEntityInfo(el);
}

let _cached_encoder_for_TraceCollectionEntityInfo: $.ASN1Encoder<TraceCollectionEntityInfo> | null = null;

/**
 * @summary Encodes a(n) TraceCollectionEntityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceCollectionEntityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TraceCollectionEntityInfo (value: TraceCollectionEntityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceCollectionEntityInfo) { _cached_encoder_for_TraceCollectionEntityInfo = function (value: TraceCollectionEntityInfo, _elGetter: $.ASN1Encoder<TraceCollectionEntityInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.traceCollectionEntityIPAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.traceCollectionEntityURI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TraceCollectionEntityInfo(value, elGetter);
}


/* eslint-enable */
