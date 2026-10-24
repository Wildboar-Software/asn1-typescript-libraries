/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type RELATIVE_OID,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPInformation, _decode_IPInformation, _encode_IPInformation } from "../IPAccessPDU/IPInformation.ta.mjs";
// export { IPInformation, _decode_IPInformation, _encode_IPInformation } from "../IPAccessPDU/IPInformation.ta.mjs";
import { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../IPAccessPDU/ProtocolInformation.ta.mjs";
// export { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../IPAccessPDU/ProtocolInformation.ta.mjs";
import { PDSRInformation, _decode_PDSRInformation, _encode_PDSRInformation } from "../IPAccessPDU/PDSRInformation.ta.mjs";
// export { PDSRInformation, _decode_PDSRInformation, _encode_PDSRInformation } from "../IPAccessPDU/PDSRInformation.ta.mjs";


/**
 * @summary IPIRIOnly
 * @description
 *
 * IRI for one packet, or for a summary of a packet flow, inside the
 * target's access session (ETSI TS 102 232-3 V3.9.1, clause 6.2.3 and
 * clause 6.2.4). Use the same CIN as the other IRI for that session.
 * Whether a packet is reported here or as CC is outside this
 * specification (clause 6.2.3.1).
 *
 * For a Packet Data Header Report, fill the fields as in table 3 and
 * leave `pDSRInformation` empty. For a Packet Data Summary Report,
 * fill them as in table 4 and include `pDSRInformation`. Annex C
 * allows an IP-header-only variant, and aggregated records taken from
 * IPFIX. Annex D is an informative guide for TCP and UDP flows; layer 4
 * is user data unless the CSP itself uses those ports for its service.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRIOnly ::= SEQUENCE
 * {
 *     iPIRIOnlyObjId              [0] RELATIVE-OID,
 *     iPInformation               [1] IPInformation,
 *     protocolInformation         [2] ProtocolInformation,
 *     iPAggregatedNbrOfPackets    [3] INTEGER OPTIONAL,
 *     iPAggregatedNbrOfBytes      [4] INTEGER OPTIONAL,
 *     ...,
 *     pDSRInformation             [5] PDSRInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IPIRIOnly {
    /**
     * @summary `iPIRIOnlyObjId`.
     * @description
     *
     * Set to `iPIRIOnlyObjId`, arc `iRIOnly(3)` under the module OID
     * (clause 8).
     *
     * @public
     * @readonly
     */
    readonly iPIRIOnlyObjId: RELATIVE_OID;
    /**
     * @summary `iPInformation`.
     * @description
     *
     * IPv4 or IPv6 header information. A header report copies the header
     * fields (clauses 6.2.3.2 and 6.2.3.3). A summary report copies only
     * the fields that identify the flow and omits the rest (table 4,
     * clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly iPInformation: IPInformation;
    /**
     * @summary `protocolInformation`.
     * @description
     *
     * Layer-4 header information, or `none` when none is provided. TCP
     * uses `TCPInformation`; UDP uses `UDPInformation` (tables 3 and 4).
     * A summary report includes only the layer-4 fields that identify the
     * flow. Annex C may exclude layer 4 entirely. Annex D treats ports as
     * IRI only when the CSP uses them for its own service.
     *
     * @public
     * @readonly
     */
    readonly protocolInformation: ProtocolInformation;
    /**
     * @summary `iPAggregatedNbrOfPackets`.
     * @description
     *
     * Total packets observed for this flow, when the count is provided.
     * On a header report the field is optional (table 3). On a summary
     * report it is the total for the flow (table 4). Annex C uses it for
     * an aggregated IPFIX-style record.
     *
     * @public
     * @readonly
     */
    readonly iPAggregatedNbrOfPackets: OPTIONAL<INTEGER>;
    /**
     * @summary `iPAggregatedNbrOfBytes`.
     * @description
     *
     * Bytes observed for this flow, when the count is provided. For IPv4,
     * sum the Total Length fields (IETF RFC 791). For IPv6, sum the
     * Payload Length fields (IETF RFC 8200) (tables 3 and 4). This is not
     * the same byte count as annex D, which counts every layer-3 octet
     * including TCP retransmissions (clause D.3.9).
     *
     * @public
     * @readonly
     */
    readonly iPAggregatedNbrOfBytes: OPTIONAL<INTEGER>;
    /**
     * @summary `pDSRInformation`.
     * @description
     *
     * Present for a Packet Data Summary Report, populated as in table 5.
     * Absent for a Packet Data Header Report (tables 3 and 4).
     *
     * @public
     * @readonly
     */
    readonly pDSRInformation: OPTIONAL<PDSRInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPIRIOnlyObjId: RELATIVE_OID,
        iPInformation: IPInformation,
        protocolInformation: ProtocolInformation,
        iPAggregatedNbrOfPackets?: OPTIONAL<INTEGER>,
        iPAggregatedNbrOfBytes?: OPTIONAL<INTEGER>,
        pDSRInformation?: OPTIONAL<PDSRInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPIRIOnlyObjId = iPIRIOnlyObjId;
        this.iPInformation = iPInformation;
        this.protocolInformation = protocolInformation;
        this.iPAggregatedNbrOfPackets = iPAggregatedNbrOfPackets;
        this.iPAggregatedNbrOfBytes = iPAggregatedNbrOfBytes;
        this.pDSRInformation = pDSRInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPIRIOnly
     * @description
     * 
     * This takes an `object` and converts it to a `IPIRIOnly`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPIRIOnly`.
     * @returns {IPIRIOnly}
     */
    public static _from_object (_o: { [_K in keyof (IPIRIOnly)]: (IPIRIOnly)[_K] }): IPIRIOnly {
        return new IPIRIOnly(_o.iPIRIOnlyObjId, _o.iPInformation, _o.protocolInformation, _o.iPAggregatedNbrOfPackets, _o.iPAggregatedNbrOfBytes, _o.pDSRInformation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPIRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPIRIOnly: $.ComponentSpec[] = [
    new $.ComponentSpec("iPIRIOnlyObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocolInformation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPAggregatedNbrOfPackets", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPAggregatedNbrOfBytes", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of IPIRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPIRIOnly: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPIRIOnly
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPIRIOnly: $.ComponentSpec[] = [
    new $.ComponentSpec("pDSRInformation", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_IPIRIOnly: $.ASN1Decoder<IPIRIOnly> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRIOnly
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRIOnly (el: _Element): IPIRIOnly {
    if (!_cached_decoder_for_IPIRIOnly) { _cached_decoder_for_IPIRIOnly = function (el: _Element): IPIRIOnly {
    let iPIRIOnlyObjId!: RELATIVE_OID;
    let iPInformation!: IPInformation;
    let protocolInformation!: ProtocolInformation;
    let iPAggregatedNbrOfPackets: OPTIONAL<INTEGER>;
    let iPAggregatedNbrOfBytes: OPTIONAL<INTEGER>;
    let pDSRInformation: OPTIONAL<PDSRInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPIRIOnlyObjId": (_el: _Element): void => { iPIRIOnlyObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "iPInformation": (_el: _Element): void => { iPInformation = $._decode_explicit<IPInformation>(() => _decode_IPInformation)(_el); },
        "protocolInformation": (_el: _Element): void => { protocolInformation = $._decode_explicit<ProtocolInformation>(() => _decode_ProtocolInformation)(_el); },
        "iPAggregatedNbrOfPackets": (_el: _Element): void => { iPAggregatedNbrOfPackets = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iPAggregatedNbrOfBytes": (_el: _Element): void => { iPAggregatedNbrOfBytes = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pDSRInformation": (_el: _Element): void => { pDSRInformation = $._decode_implicit<PDSRInformation>(() => _decode_PDSRInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPIRIOnly,
        _extension_additions_list_spec_for_IPIRIOnly,
        _root_component_type_list_2_spec_for_IPIRIOnly,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPIRIOnly(
        iPIRIOnlyObjId,
        iPInformation,
        protocolInformation,
        iPAggregatedNbrOfPackets,
        iPAggregatedNbrOfBytes,
        pDSRInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPIRIOnly(el);
}

let _cached_encoder_for_IPIRIOnly: $.ASN1Encoder<IPIRIOnly> | null = null;

/**
 * @summary Encodes a(n) IPIRIOnly into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRIOnly, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRIOnly (value: IPIRIOnly, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRIOnly) { _cached_encoder_for_IPIRIOnly = function (value: IPIRIOnly, elGetter: $.ASN1Encoder<IPIRIOnly>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPIRIOnlyObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPInformation, $.BER)(value.iPInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ProtocolInformation, $.BER)(value.protocolInformation, $.BER);
    if (value.iPAggregatedNbrOfPackets !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.iPAggregatedNbrOfPackets, $.BER);
    }
    if (value.iPAggregatedNbrOfBytes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.iPAggregatedNbrOfBytes, $.BER);
    }
    if (value.pDSRInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PDSRInformation, $.BER)(value.pDSRInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPIRIOnly(value, elGetter);
}


/* eslint-enable */
