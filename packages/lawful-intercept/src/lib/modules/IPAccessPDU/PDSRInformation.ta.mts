/* eslint-disable */
import {
    type GeneralizedTime,
    type INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PDSRSummaryTrigger, _decode_PDSRSummaryTrigger, _encode_PDSRSummaryTrigger } from "../IPAccessPDU/PDSRSummaryTrigger.ta.mjs";


/**
 * @summary PDSRInformation
 * @description
 *
 * Why a packet-flow summary was sent, and what was seen since the
 * previous summary for that flow (ETSI TS 102 232-3 V3.9.1,
 * clause 6.2.4.4, table 5). Present on a summary report and absent on
 * a header report (tables 3 and 4). Timestamps include a time zone.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDSRInformation ::= SEQUENCE
 * {
 *     summaryTrigger          [0] PDSRSummaryTrigger,
 *     firstPacketTimestamp    [1] GeneralizedTime,
 *     lastPacketTimestamp     [2] GeneralizedTime,
 *     packetCount             [3] INTEGER,
 *     byteCount               [4] INTEGER,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PDSRInformation {
    /**
     * @summary `summaryTrigger`.
     * @description
     *
     * Why this summary was generated: start of flow, timer, packet count,
     * byte count, or end of flow (clause 6.2.4.3, table 5).
     *
     * @public
     * @readonly
     */
    readonly summaryTrigger: PDSRSummaryTrigger;
    /**
     * @summary `firstPacketTimestamp`.
     * @description
     *
     * Timestamp of the first packet of this flow since the previous
     * summary for the flow. Include a time zone (table 5).
     *
     * @public
     * @readonly
     */
    readonly firstPacketTimestamp: GeneralizedTime;
    /**
     * @summary `lastPacketTimestamp`.
     * @description
     *
     * Timestamp of the last packet of this flow before this summary was
     * created. Include a time zone (table 5).
     *
     * @public
     * @readonly
     */
    readonly lastPacketTimestamp: GeneralizedTime;
    /**
     * @summary `packetCount`.
     * @description
     *
     * Packets seen in this flow since the previous summary (table 5).
     * This interval count is separate from
     * `iPAggregatedNbrOfPackets`, which table 4 describes as the total
     * observed for the flow.
     *
     * @public
     * @readonly
     */
    readonly packetCount: INTEGER;
    /**
     * @summary `byteCount`.
     * @description
     *
     * Bytes summed across packets of this flow since the previous
     * summary (table 5). IPv4 sums Total Length (IETF RFC 791). IPv6 sums
     * Payload Length (IETF RFC 8200).
     *
     * @public
     * @readonly
     */
    readonly byteCount: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        summaryTrigger: PDSRSummaryTrigger,
        firstPacketTimestamp: GeneralizedTime,
        lastPacketTimestamp: GeneralizedTime,
        packetCount: INTEGER,
        byteCount: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.summaryTrigger = summaryTrigger;
        this.firstPacketTimestamp = firstPacketTimestamp;
        this.lastPacketTimestamp = lastPacketTimestamp;
        this.packetCount = packetCount;
        this.byteCount = byteCount;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PDSRInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PDSRInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDSRInformation`.
     * @returns {PDSRInformation}
     */
    public static _from_object (_o: { [_K in keyof (PDSRInformation)]: (PDSRInformation)[_K] }): PDSRInformation {
        return new PDSRInformation(_o.summaryTrigger, _o.firstPacketTimestamp, _o.lastPacketTimestamp, _o.packetCount, _o.byteCount, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PDSRInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDSRInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("summaryTrigger", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("firstPacketTimestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lastPacketTimestamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("packetCount", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("byteCount", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PDSRInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDSRInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDSRInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDSRInformation: $.ComponentSpec[] = [

];

let _cached_decoder_for_PDSRInformation: $.ASN1Decoder<PDSRInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDSRInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDSRInformation (el: _Element): PDSRInformation {
    if (!_cached_decoder_for_PDSRInformation) { _cached_decoder_for_PDSRInformation = function (el: _Element): PDSRInformation {
    let summaryTrigger!: PDSRSummaryTrigger;
    let firstPacketTimestamp!: GeneralizedTime;
    let lastPacketTimestamp!: GeneralizedTime;
    let packetCount!: INTEGER;
    let byteCount!: INTEGER;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "summaryTrigger": (_el: _Element): void => { summaryTrigger = $._decode_implicit<PDSRSummaryTrigger>(() => _decode_PDSRSummaryTrigger)(_el); },
        "firstPacketTimestamp": (_el: _Element): void => { firstPacketTimestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "lastPacketTimestamp": (_el: _Element): void => { lastPacketTimestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "packetCount": (_el: _Element): void => { packetCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "byteCount": (_el: _Element): void => { byteCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDSRInformation,
        _extension_additions_list_spec_for_PDSRInformation,
        _root_component_type_list_2_spec_for_PDSRInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PDSRInformation(
        summaryTrigger,
        firstPacketTimestamp,
        lastPacketTimestamp,
        packetCount,
        byteCount,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PDSRInformation(el);
}

let _cached_encoder_for_PDSRInformation: $.ASN1Encoder<PDSRInformation> | null = null;

/**
 * @summary Encodes a(n) PDSRInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSRInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PDSRInformation (value: PDSRInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDSRInformation) { _cached_encoder_for_PDSRInformation = function (value: PDSRInformation, elGetter: $.ASN1Encoder<PDSRInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 0, () => _encode_PDSRSummaryTrigger, $.BER)(value.summaryTrigger, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER)(value.firstPacketTimestamp, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 2, () => $._encodeGeneralizedTime, $.BER)(value.lastPacketTimestamp, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.packetCount, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.byteCount, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PDSRInformation(value, elGetter);
}


/* eslint-enable */
