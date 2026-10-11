/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PortRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PortRange ::= SEQUENCE
 * {
 *     portStart [1] INTEGER (0..65535),
 *     portEnd   [2] INTEGER (0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class PortRange {
    /**
     * @summary `portStart`.
     * @public
     * @readonly
     */
    readonly portStart: INTEGER;
    /**
     * @summary `portEnd`.
     * @public
     * @readonly
     */
    readonly portEnd: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        portStart: INTEGER,
        portEnd: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.portStart = portStart;
        if ((typeof this.portStart === "bigint" ? this.portStart : BigInt(this.portStart)) < 0n || (typeof this.portStart === "bigint" ? this.portStart : BigInt(this.portStart)) > 65535n) {
            throw new ASN1OverflowError("portStart violates the INTEGER range constraint");
        }
        this.portEnd = portEnd;
        if ((typeof this.portEnd === "bigint" ? this.portEnd : BigInt(this.portEnd)) < 0n || (typeof this.portEnd === "bigint" ? this.portEnd : BigInt(this.portEnd)) > 65535n) {
            throw new ASN1OverflowError("portEnd violates the INTEGER range constraint");
        }
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PortRange
     * @description
     * 
     * This takes an `object` and converts it to a `PortRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PortRange`.
     * @returns {PortRange}
     */
    public static _from_object (_o: { [_K in keyof (PortRange)]: (PortRange)[_K] }): PortRange {
        return new PortRange(_o.portStart, _o.portEnd, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PortRange: $.ComponentSpec[] = [
    new $.ComponentSpec("portStart", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("portEnd", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PortRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PortRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PortRange: $.ASN1Decoder<PortRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PortRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PortRange (el: _Element): PortRange {
    if (!_cached_decoder_for_PortRange) { _cached_decoder_for_PortRange = function (el: _Element): PortRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PortRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "portStart";
    sequence[1].name = "portEnd";
    let portStart!: INTEGER;
    let portEnd!: INTEGER;
    portStart = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    portEnd = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new PortRange(
        portStart,
        portEnd,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PortRange(el);
}

let _cached_encoder_for_PortRange: $.ASN1Encoder<PortRange> | null = null;

/**
 * @summary Encodes a(n) PortRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortRange, encoded as an ASN.1 Element.
 */
export
function _encode_PortRange (value: PortRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PortRange) { _cached_encoder_for_PortRange = function (value: PortRange, _elGetter: $.ASN1Encoder<PortRange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.portStart, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.portEnd, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PortRange(value, elGetter);
}


/* eslint-enable */
