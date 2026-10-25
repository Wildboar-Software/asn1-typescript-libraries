/* eslint-disable */
import {
    type RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type L2CC_l2CCContents, _decode_L2CC_l2CCContents, _encode_L2CC_l2CCContents } from "../L2AccessPDU/L2CC-l2CCContents.ta.mjs";
// export { L2CC_l2CCContents, _decode_L2CC_l2CCContents, _encode_L2CC_l2CCContents } from "../L2AccessPDU/L2CC-l2CCContents.ta.mjs";


/**
 * @summary L2CC
 * @description
 *
 * HI3 content of communication for one intercepted layer 2 datagram. Clause
 * 7.1 requires a PDU for every layer 2 datagram sent through the access
 * provider's network that is addressed to, or sent from, the target's line
 * termination point. Clause 4.2.2 requires that copy to be bit-exact. Clause
 * 7.2 states that the CC payload is that copy.
 *
 * A layer 2 tunnel may carry several users (clause 5.2.2). Only the stream
 * for the target's physical line termination point is included. One stream
 * may be delivered to several LEMFs, or more than once to the same LEMF,
 * when several interception authorizations apply. If other users remain on
 * the tunnel after the target session ends, the tunnel stays up (clause 6.1).
 *
 * When the LEA asks for truncation, clause 7.3 requires every HI3 datagram
 * of that interception to use a `truncated*` alternative. The full
 * octet-string alternatives are not used for that interception.
 *
 * The sequence is not extensible. The contents choice is. Handover of this
 * PDU uses ETSI TS 102 232-1, which carries it as the layer 2 CC alternative.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 4.2.2, clause 5.2.2, clause 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2CC ::= SEQUENCE
 * {
 *     l2CCObjId               [0] RELATIVE-OID,
 *     l2CCContents            [1] CHOICE
 *     {
 *         l2TP                    [1] OCTET STRING,
 *             -- The L2TP protocol is used
 *         l2F                     [2] OCTET STRING,
 *             -- The L2F protocol is used
 *         pPTP                    [3] OCTET STRING,
 *             -- The PPTP protocol is used
 *         pPP                     [4] OCTET STRING,
 *             -- The PPP protocol is used
 *         ethernet                [5] OCTET STRING,
 *             -- The ethernet protocol is used
 *         ...,
 *         l2ATM2684               [6] OCTET STRING,
 *             -- The protocol RFC 2684, method "LLC Encapsulation for Bridged Protocols" [16] is used
 *         l2FR2427                [7] OCTET STRING,
 *             -- The protocol RFC 2427 "Multiprotocol Interconnect over Frame Relay" [18] is used
 *         truncatedL2TP           [8] L2TruncatedDatagram,
 *             -- truncated l2TP[1]
 *         truncatedL2F            [9] L2TruncatedDatagram,
 *             -- truncated l2F[2]
 *         truncatedPPTP           [10] L2TruncatedDatagram,
 *             -- truncated pPTP[3]
 *         truncatedPPP            [11] L2TruncatedDatagram,
 *             -- truncated pPP[4]
 *         truncatedEthernet       [12] L2TruncatedDatagram,
 *             -- truncated ethernet[5]
 *         truncatedL2ATM2684      [13] L2TruncatedDatagram,
 *             -- truncated l2ATM2684[6]
 *         truncatedL2FR2427       [14] L2TruncatedDatagram
 *             -- truncated l2FR2427[7]
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class L2CC {
    /**
     * @summary `l2CCObjId`.
     * @description
     *
     * Object identifier of the layer 2 CC definition in this PDU. For this
     * module that value is `l2CCObjId`, arc `cC(2)` under `l2AccessPDUObjId`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2CCObjId: RELATIVE_OID;
    /**
     * @summary `l2CCContents`.
     * @description
     *
     * The intercepted datagram, or its truncated copy, labelled by the layer
     * 2 protocol that carried it. See `L2CC_l2CCContents`.
     *
     * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 7.2, clause 7.3.
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
     *
     * @public
     * @readonly
     */
    readonly l2CCContents: L2CC_l2CCContents;

    constructor (
        l2CCObjId: RELATIVE_OID,
        l2CCContents: L2CC_l2CCContents
    ) {
        this.l2CCObjId = l2CCObjId;
        this.l2CCContents = l2CCContents;
    }

    /**
     * @summary Restructures an object into a L2CC
     * @description
     * 
     * This takes an `object` and converts it to a `L2CC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `L2CC`.
     * @returns {L2CC}
     */
    public static _from_object (_o: { [_K in keyof (L2CC)]: (L2CC)[_K] }): L2CC {
        return new L2CC(_o.l2CCObjId, _o.l2CCContents);
    }


}

/**
 * @summary The Leading Root Component Types of L2CC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_L2CC: $.ComponentSpec[] = [
    new $.ComponentSpec("l2CCObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("l2CCContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of L2CC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_L2CC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of L2CC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_L2CC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_L2CC: $.ASN1Decoder<L2CC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2CC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2CC (el: _Element): L2CC {
    if (!_cached_decoder_for_L2CC) { _cached_decoder_for_L2CC = function (el: _Element): L2CC {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("L2CC contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "l2CCObjId";
    sequence[1].name = "l2CCContents";
    let l2CCObjId!: RELATIVE_OID;
    let l2CCContents!: L2CC_l2CCContents;
    l2CCObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    l2CCContents = $._decode_explicit<L2CC_l2CCContents>(() => _decode_L2CC_l2CCContents)(sequence[1]);
    return new L2CC(
        l2CCObjId,
        l2CCContents,

    );
}; }
    return _cached_decoder_for_L2CC(el);
}

let _cached_encoder_for_L2CC: $.ASN1Encoder<L2CC> | null = null;

/**
 * @summary Encodes a(n) L2CC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2CC, encoded as an ASN.1 Element.
 */
export
function _encode_L2CC (value: L2CC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2CC) { _cached_encoder_for_L2CC = function (value: L2CC, elGetter: $.ASN1Encoder<L2CC>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.l2CCObjId, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_L2CC_l2CCContents, $.BER)(value.l2CCContents, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_L2CC(value, elGetter);
}


/* eslint-enable */
