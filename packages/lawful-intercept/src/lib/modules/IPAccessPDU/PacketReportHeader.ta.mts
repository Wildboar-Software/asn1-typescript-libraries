/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PacketReportHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketReportHeader ::= SEQUENCE
 * {
 *     header [1] OCTET STRING,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketReportHeader {
    /**
     * @summary `header`.
     * @public
     * @readonly
     */
    readonly header: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        header: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.header = header;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PacketReportHeader
     * @description
     * 
     * This takes an `object` and converts it to a `PacketReportHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketReportHeader`.
     * @returns {PacketReportHeader}
     */
    public static _from_object (_o: { [_K in keyof (PacketReportHeader)]: (PacketReportHeader)[_K] }): PacketReportHeader {
        return new PacketReportHeader(_o.header, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PacketReportHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketReportHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("header", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PacketReportHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketReportHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketReportHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketReportHeader: $.ComponentSpec[] = [

];

let _cached_decoder_for_PacketReportHeader: $.ASN1Decoder<PacketReportHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketReportHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketReportHeader (el: _Element): PacketReportHeader {
    if (!_cached_decoder_for_PacketReportHeader) { _cached_decoder_for_PacketReportHeader = function (el: _Element): PacketReportHeader {
    let header!: OCTET_STRING;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "header": (_el: _Element): void => { header = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PacketReportHeader,
        _extension_additions_list_spec_for_PacketReportHeader,
        _root_component_type_list_2_spec_for_PacketReportHeader,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PacketReportHeader(
        header,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PacketReportHeader(el);
}

let _cached_encoder_for_PacketReportHeader: $.ASN1Encoder<PacketReportHeader> | null = null;

/**
 * @summary Encodes a(n) PacketReportHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketReportHeader, encoded as an ASN.1 Element.
 */
export
function _encode_PacketReportHeader (value: PacketReportHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketReportHeader) { _cached_encoder_for_PacketReportHeader = function (value: PacketReportHeader, elGetter: $.ASN1Encoder<PacketReportHeader>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.header, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PacketReportHeader(value, elGetter);
}


/* eslint-enable */
