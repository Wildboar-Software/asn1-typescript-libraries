/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TCPPort, _decode_TCPPort, _encode_TCPPort } from "../Common-Parameters/TCPPort.ta.mjs";
// export { TCPPort, _decode_TCPPort, _encode_TCPPort } from "../Common-Parameters/TCPPort.ta.mjs";


/**
 * @summary TCPPortRange
 * @description
 *
 * Inclusive range of TCP ports, from `start` through `end`.
 * Example: `1024-2048`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.18.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCPPortRange ::= SEQUENCE
 * {
 *     start [0] TCPPort,
 *     end   [1] TCPPort
 * }
 * ```
 * 
 * @class
 */
export
class TCPPortRange {
    /**
     * @summary `start`.
     * @description
     *
     * Inclusive first TCP port of the range.
     *
     * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.18.
     *
     * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
     *
     * @public
     * @readonly
     */
    readonly start: TCPPort;
    /**
     * @summary `end`.
     * @description
     *
     * Inclusive last TCP port of the range.
     *
     * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.18.
     *
     * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
     *
     * @public
     * @readonly
     */
    readonly end: TCPPort;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        start: TCPPort,
        end: TCPPort,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.start = start;
        this.end = end;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TCPPortRange
     * @description
     * 
     * This takes an `object` and converts it to a `TCPPortRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCPPortRange`.
     * @returns {TCPPortRange}
     */
    public static _from_object (_o: { [_K in keyof (TCPPortRange)]: (TCPPortRange)[_K] }): TCPPortRange {
        return new TCPPortRange(_o.start, _o.end, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCPPortRange: $.ComponentSpec[] = [
    new $.ComponentSpec("start", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("end", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCPPortRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCPPortRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TCPPortRange: $.ASN1Decoder<TCPPortRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCPPortRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCPPortRange (el: _Element): TCPPortRange {
    if (!_cached_decoder_for_TCPPortRange) { _cached_decoder_for_TCPPortRange = function (el: _Element): TCPPortRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TCPPortRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "start";
    sequence[1].name = "end";
    let start!: TCPPort;
    let end!: TCPPort;
    start = $._decode_implicit<TCPPort>(() => _decode_TCPPort)(sequence[0]);
    end = $._decode_implicit<TCPPort>(() => _decode_TCPPort)(sequence[1]);
    return new TCPPortRange(
        start,
        end,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TCPPortRange(el);
}

let _cached_encoder_for_TCPPortRange: $.ASN1Encoder<TCPPortRange> | null = null;

/**
 * @summary Encodes a(n) TCPPortRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPPortRange, encoded as an ASN.1 Element.
 */
export
function _encode_TCPPortRange (value: TCPPortRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCPPortRange) { _cached_encoder_for_TCPPortRange = function (value: TCPPortRange, elGetter: $.ASN1Encoder<TCPPortRange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TCPPort, $.BER)(value.start, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TCPPort, $.BER)(value.end, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TCPPortRange(value, elGetter);
}


/* eslint-enable */
