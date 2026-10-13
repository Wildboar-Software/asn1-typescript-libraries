/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary L2TruncatedDatagram
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2TruncatedDatagram ::= SEQUENCE
 * {
 *     truncatedDatagram   [0] OCTET STRING,
 *     originalLength      [1] INTEGER,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class L2TruncatedDatagram {
    /**
     * @summary `truncatedDatagram`.
     * @public
     * @readonly
     */
    readonly truncatedDatagram: OCTET_STRING;
    /**
     * @summary `originalLength`.
     * @public
     * @readonly
     */
    readonly originalLength: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        truncatedDatagram: OCTET_STRING,
        originalLength: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.truncatedDatagram = truncatedDatagram;
        this.originalLength = originalLength;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a L2TruncatedDatagram
     * @description
     * 
     * This takes an `object` and converts it to a `L2TruncatedDatagram`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `L2TruncatedDatagram`.
     * @returns {L2TruncatedDatagram}
     */
    public static _from_object (_o: { [_K in keyof (L2TruncatedDatagram)]: (L2TruncatedDatagram)[_K] }): L2TruncatedDatagram {
        return new L2TruncatedDatagram(_o.truncatedDatagram, _o.originalLength, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of L2TruncatedDatagram
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_L2TruncatedDatagram: $.ComponentSpec[] = [
    new $.ComponentSpec("truncatedDatagram", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originalLength", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of L2TruncatedDatagram
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_L2TruncatedDatagram: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of L2TruncatedDatagram
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_L2TruncatedDatagram: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_L2TruncatedDatagram: $.ASN1Decoder<L2TruncatedDatagram> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2TruncatedDatagram
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2TruncatedDatagram (el: _Element): L2TruncatedDatagram {
    if (!_cached_decoder_for_L2TruncatedDatagram) { _cached_decoder_for_L2TruncatedDatagram = function (el: _Element): L2TruncatedDatagram {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("L2TruncatedDatagram contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "truncatedDatagram";
    sequence[1].name = "originalLength";
    let truncatedDatagram!: OCTET_STRING;
    let originalLength!: INTEGER;
    truncatedDatagram = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    originalLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new L2TruncatedDatagram(
        truncatedDatagram,
        originalLength,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_L2TruncatedDatagram(el);
}

let _cached_encoder_for_L2TruncatedDatagram: $.ASN1Encoder<L2TruncatedDatagram> | null = null;

/**
 * @summary Encodes a(n) L2TruncatedDatagram into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2TruncatedDatagram, encoded as an ASN.1 Element.
 */
export
function _encode_L2TruncatedDatagram (value: L2TruncatedDatagram, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2TruncatedDatagram) { _cached_encoder_for_L2TruncatedDatagram = function (value: L2TruncatedDatagram, elGetter: $.ASN1Encoder<L2TruncatedDatagram>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.truncatedDatagram, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.originalLength, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_L2TruncatedDatagram(value, elGetter);
}


/* eslint-enable */
