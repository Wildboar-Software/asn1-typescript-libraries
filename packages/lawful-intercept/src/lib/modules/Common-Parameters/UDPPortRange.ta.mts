/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UDPPort, _decode_UDPPort, _encode_UDPPort } from "../Common-Parameters/UDPPort.ta.mjs";
// export { UDPPort, _decode_UDPPort, _encode_UDPPort } from "../Common-Parameters/UDPPort.ta.mjs";


/**
 * @summary UDPPortRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDPPortRange ::= SEQUENCE
 * {
 *     start [0] UDPPort,
 *     end   [1] UDPPort
 * }
 * ```
 * 
 * @class
 */
export
class UDPPortRange {
    /**
     * @summary `start`.
     * @public
     * @readonly
     */
    readonly start: UDPPort;
    /**
     * @summary `end`.
     * @public
     * @readonly
     */
    readonly end: UDPPort;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        start: UDPPort,
        end: UDPPort,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.start = start;
        this.end = end;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UDPPortRange
     * @description
     * 
     * This takes an `object` and converts it to a `UDPPortRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDPPortRange`.
     * @returns {UDPPortRange}
     */
    public static _from_object (_o: { [_K in keyof (UDPPortRange)]: (UDPPortRange)[_K] }): UDPPortRange {
        return new UDPPortRange(_o.start, _o.end, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UDPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDPPortRange: $.ComponentSpec[] = [
    new $.ComponentSpec("start", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("end", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of UDPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDPPortRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDPPortRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDPPortRange: $.ASN1Decoder<UDPPortRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDPPortRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDPPortRange (el: _Element): UDPPortRange {
    if (!_cached_decoder_for_UDPPortRange) { _cached_decoder_for_UDPPortRange = function (el: _Element): UDPPortRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UDPPortRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "start";
    sequence[1].name = "end";
    let start!: UDPPort;
    let end!: UDPPort;
    start = $._decode_implicit<UDPPort>(() => _decode_UDPPort)(sequence[0]);
    end = $._decode_implicit<UDPPort>(() => _decode_UDPPort)(sequence[1]);
    return new UDPPortRange(
        start,
        end,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_UDPPortRange(el);
}

let _cached_encoder_for_UDPPortRange: $.ASN1Encoder<UDPPortRange> | null = null;

/**
 * @summary Encodes a(n) UDPPortRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPPortRange, encoded as an ASN.1 Element.
 */
export
function _encode_UDPPortRange (value: UDPPortRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDPPortRange) { _cached_encoder_for_UDPPortRange = function (value: UDPPortRange, elGetter: $.ASN1Encoder<UDPPortRange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_UDPPort, $.BER)(value.start, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UDPPort, $.BER)(value.end, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UDPPortRange(value, elGetter);
}


/* eslint-enable */
