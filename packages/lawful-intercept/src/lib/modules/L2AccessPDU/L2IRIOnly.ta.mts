/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type RELATIVE_OID,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { L2ProtocolInformation, _decode_L2ProtocolInformation, _encode_L2ProtocolInformation } from "../L2AccessPDU/L2ProtocolInformation.ta.mjs";


/**
 * @summary L2IRIOnly
 * @description
 *
 * IRI-only layer 2 PDU. The ASN.1 section heading is "Intercept-related
 * information for IRI-Only intercepts". Clauses 6 and 7 and annex A do not
 * describe this type, `L2ProtocolInformation`, or the two aggregated
 * counters. The only semantics in this edition are the component names and
 * the protocol comments on `L2ProtocolInformation`.
 *
 * Handover uses ETSI TS 102 232-1, which carries this PDU as the layer 2
 * IRI-only alternative. The sequence is extensible. V3.8.1 names no
 * extension additions.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2IRIOnly ::= SEQUENCE
 * {
 *     l2IRIOnlyObjId                  [0] RELATIVE-OID,
 *     l2protocolInformation       [2] L2ProtocolInformation,
 *     l2AggregatedNbrOfPackets    [3] INTEGER OPTIONAL,
 *     l2AggregatedNbrOfBytes      [4] INTEGER OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class L2IRIOnly {
    /**
     * @summary `l2IRIOnlyObjId`.
     * @description
     *
     * Object identifier of the layer 2 IRI-only definition in this PDU. For
     * this module that value is `l2IRIOnlyObjId`, arc `iRIOnly(3)` under
     * `l2AccessPDUObjId`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2IRIOnlyObjId: RELATIVE_OID;
    /**
     * @summary `l2protocolInformation`.
     * @description
     *
     * Layer 2 protocol this IRI-only record refers to. The present document
     * does not say when a value is selected. The enumeration comments match
     * the non-truncated `L2CC` alternatives, plus `undefined`. See
     * `L2ProtocolInformation`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2protocolInformation: L2ProtocolInformation;
    /**
     * @summary `l2AggregatedNbrOfPackets`.
     * @description
     *
     * Optional integer. V3.8.1 does not say when it is present, what it
     * counts, or over what interval. The ASN.1 does not constrain the range.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2AggregatedNbrOfPackets: OPTIONAL<INTEGER>;
    /**
     * @summary `l2AggregatedNbrOfBytes`.
     * @description
     *
     * Optional integer. V3.8.1 does not say when it is present, what it
     * counts, or over what interval. The ASN.1 does not constrain the range.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2AggregatedNbrOfBytes: OPTIONAL<INTEGER>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this decoder did not recognize. V3.8.1 marks the
     * sequence extensible and does not say how a receiver treats unrecognized
     * additions.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        l2IRIOnlyObjId: RELATIVE_OID,
        l2protocolInformation: L2ProtocolInformation,
        l2AggregatedNbrOfPackets?: OPTIONAL<INTEGER>,
        l2AggregatedNbrOfBytes?: OPTIONAL<INTEGER>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.l2IRIOnlyObjId = l2IRIOnlyObjId;
        this.l2protocolInformation = l2protocolInformation;
        this.l2AggregatedNbrOfPackets = l2AggregatedNbrOfPackets;
        this.l2AggregatedNbrOfBytes = l2AggregatedNbrOfBytes;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a L2IRIOnly
     * @description
     * 
     * This takes an `object` and converts it to a `L2IRIOnly`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `L2IRIOnly`.
     * @returns {L2IRIOnly}
     */
    public static _from_object (_o: { [_K in keyof (L2IRIOnly)]: (L2IRIOnly)[_K] }): L2IRIOnly {
        return new L2IRIOnly(_o.l2IRIOnlyObjId, _o.l2protocolInformation, _o.l2AggregatedNbrOfPackets, _o.l2AggregatedNbrOfBytes, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of L2IRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_L2IRIOnly: $.ComponentSpec[] = [
    new $.ComponentSpec("l2IRIOnlyObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("l2protocolInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("l2AggregatedNbrOfPackets", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("l2AggregatedNbrOfBytes", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of L2IRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_L2IRIOnly: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of L2IRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_L2IRIOnly: $.ComponentSpec[] = [

];

let _cached_decoder_for_L2IRIOnly: $.ASN1Decoder<L2IRIOnly> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2IRIOnly
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2IRIOnly (el: _Element): L2IRIOnly {
    if (!_cached_decoder_for_L2IRIOnly) { _cached_decoder_for_L2IRIOnly = function (el: _Element): L2IRIOnly {
    let l2IRIOnlyObjId!: RELATIVE_OID;
    let l2protocolInformation!: L2ProtocolInformation;
    let l2AggregatedNbrOfPackets: OPTIONAL<INTEGER>;
    let l2AggregatedNbrOfBytes: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "l2IRIOnlyObjId": (_el: _Element): void => { l2IRIOnlyObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "l2protocolInformation": (_el: _Element): void => { l2protocolInformation = $._decode_implicit<L2ProtocolInformation>(() => _decode_L2ProtocolInformation)(_el); },
        "l2AggregatedNbrOfPackets": (_el: _Element): void => { l2AggregatedNbrOfPackets = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "l2AggregatedNbrOfBytes": (_el: _Element): void => { l2AggregatedNbrOfBytes = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_L2IRIOnly,
        _extension_additions_list_spec_for_L2IRIOnly,
        _root_component_type_list_2_spec_for_L2IRIOnly,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new L2IRIOnly(
        l2IRIOnlyObjId,
        l2protocolInformation,
        l2AggregatedNbrOfPackets,
        l2AggregatedNbrOfBytes,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_L2IRIOnly(el);
}

let _cached_encoder_for_L2IRIOnly: $.ASN1Encoder<L2IRIOnly> | null = null;

/**
 * @summary Encodes a(n) L2IRIOnly into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2IRIOnly, encoded as an ASN.1 Element.
 */
export
function _encode_L2IRIOnly (value: L2IRIOnly, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2IRIOnly) { _cached_encoder_for_L2IRIOnly = function (value: L2IRIOnly, elGetter: $.ASN1Encoder<L2IRIOnly>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.l2IRIOnlyObjId, $.BER);
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 2, () => _encode_L2ProtocolInformation, $.BER)(value.l2protocolInformation, $.BER);
    if (value.l2AggregatedNbrOfPackets !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.l2AggregatedNbrOfPackets, $.BER);
    }
    if (value.l2AggregatedNbrOfBytes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.l2AggregatedNbrOfBytes, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_L2IRIOnly(value, elGetter);
}


/* eslint-enable */
