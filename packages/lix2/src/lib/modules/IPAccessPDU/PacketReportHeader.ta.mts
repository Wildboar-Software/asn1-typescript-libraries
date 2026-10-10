/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
    OCTET_STRING,
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
    constructor (
        /**
         * @summary `header`.
         * @public
         * @readonly
         */
        readonly header: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PacketReportHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "header";
    let header!: OCTET_STRING;
    header = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    return new PacketReportHeader(
        header,
        sequence.slice(1)
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.header, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PacketReportHeader(value, elGetter);
}


/* eslint-enable */
