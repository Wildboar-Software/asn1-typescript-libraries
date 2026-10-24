/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";


/**
 * @summary ReportInterval
 * @description
 * 
 * Interval of a packet-flow summary: the time the first packet of the reporting
 * period was detected and the time the last packet was detected. Mandatory for
 * each summarized flow (table 6.9C).
 * 
 * 3GPP TS 33.108, clause 6.5.1.1, table 6.9C, and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportInterval ::= SEQUENCE
 * {
 *     firstPacketTimeStamp    [0] TimeStamp,
 *     lastPacketTimeStamp        [1] TimeStamp,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ReportInterval {
    /**
     * @summary `firstPacketTimeStamp`.
     * @description
     * 
     * Time at which the first packet of this summary period was detected for
     * the flow. Required as one end of the summary period (table 6.9C).
     * 
     * 3GPP TS 33.108, clause 6.5.1.1, table 6.9C, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly firstPacketTimeStamp: TimeStamp;
    /**
     * @summary `lastPacketTimeStamp`.
     * @description
     * 
     * Time at which the last packet of this summary period was detected for the
     * flow. Required as the other end of the summary period (table 6.9C).
     * 
     * 3GPP TS 33.108, clause 6.5.1.1, table 6.9C, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly lastPacketTimeStamp: TimeStamp;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        firstPacketTimeStamp: TimeStamp,
        lastPacketTimeStamp: TimeStamp,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.firstPacketTimeStamp = firstPacketTimeStamp;
        this.lastPacketTimeStamp = lastPacketTimeStamp;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ReportInterval
     * @description
     * 
     * This takes an `object` and converts it to a `ReportInterval`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportInterval`.
     * @returns {ReportInterval}
     */
    public static _from_object (_o: { [_K in keyof (ReportInterval)]: (ReportInterval)[_K] }): ReportInterval {
        return new ReportInterval(_o.firstPacketTimeStamp, _o.lastPacketTimeStamp, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ReportInterval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportInterval: $.ComponentSpec[] = [
    new $.ComponentSpec("firstPacketTimeStamp", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lastPacketTimeStamp", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReportInterval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportInterval: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportInterval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportInterval: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportInterval: $.ASN1Decoder<ReportInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportInterval (el: _Element): ReportInterval {
    if (!_cached_decoder_for_ReportInterval) { _cached_decoder_for_ReportInterval = function (el: _Element): ReportInterval {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ReportInterval contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "firstPacketTimeStamp";
    sequence[1].name = "lastPacketTimeStamp";
    let firstPacketTimeStamp!: TimeStamp;
    let lastPacketTimeStamp!: TimeStamp;
    firstPacketTimeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(sequence[0]);
    lastPacketTimeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(sequence[1]);
    return new ReportInterval(
        firstPacketTimeStamp,
        lastPacketTimeStamp,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ReportInterval(el);
}

let _cached_encoder_for_ReportInterval: $.ASN1Encoder<ReportInterval> | null = null;

/**
 * @summary Encodes a(n) ReportInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportInterval, encoded as an ASN.1 Element.
 */
export
function _encode_ReportInterval (value: ReportInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportInterval) { _cached_encoder_for_ReportInterval = function (value: ReportInterval, elGetter: $.ASN1Encoder<ReportInterval>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TimeStamp, $.BER)(value.firstPacketTimeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TimeStamp, $.BER)(value.lastPacketTimeStamp, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReportInterval(value, elGetter);
}


/* eslint-enable */
