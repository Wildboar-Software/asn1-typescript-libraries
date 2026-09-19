/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";


/**
 * @summary ReportInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportInterval ::= SEQUENCE
 * {
 *  firstPacketTimeStamp [0] TimeStamp,
 *  lastPacketTimeStamp [1] TimeStamp,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class ReportInterval {
    constructor (
        /**
         * @summary `firstPacketTimeStamp`.
         * @public
         * @readonly
         */
        readonly firstPacketTimeStamp: TimeStamp,
        /**
         * @summary `lastPacketTimeStamp`.
         * @public
         * @readonly
         */
        readonly lastPacketTimeStamp: TimeStamp,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_TimeStamp, $.BER)(value.firstPacketTimeStamp, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TimeStamp, $.BER)(value.lastPacketTimeStamp, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportInterval(value, elGetter);
}


/* eslint-enable */
