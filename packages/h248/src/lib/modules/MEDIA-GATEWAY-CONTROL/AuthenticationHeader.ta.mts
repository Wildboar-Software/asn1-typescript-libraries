/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityParmIndex, _decode_SecurityParmIndex, _encode_SecurityParmIndex } from "../MEDIA-GATEWAY-CONTROL/SecurityParmIndex.ta.mjs";
import { SequenceNum, _decode_SequenceNum, _encode_SequenceNum } from "../MEDIA-GATEWAY-CONTROL/SequenceNum.ta.mjs";
import { AuthData, _decode_AuthData, _encode_AuthData } from "../MEDIA-GATEWAY-CONTROL/AuthData.ta.mjs";


/**
 * @summary AuthenticationHeader
 * @description
 * 
 * Interim authentication header carried in front of a `Message` when IPsec is
 * not available below the application (ITU-T Rec. H.248.1 (03/2013) clause
 * 10.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationHeader ::= SEQUENCE
 *     {
 *         secParmIndex    [0] SecurityParmIndex,
 *         seqNum            [1] SequenceNum,
 *         ad                [2] AuthData
 *     }
 * ```
 * 
 * @class
 */
export
class AuthenticationHeader {
    constructor (
        /**
         * @summary `secParmIndex`.
         * @description
         *
         * Security Parameters Index, four octets, identifying the security
         * association used to compute `ad`. Same role as the SPI field of IETF
         * RFC 2402.
         *
         * @public
         * @readonly
         */
        readonly secParmIndex: SecurityParmIndex,
        /**
         * @summary `seqNum`.
         * @description
         *
         * Sequence number, four octets. Same role as the sequence-number field
         * of IETF RFC 2402. The interim scheme does not itself provide
         * anti-replay protection (clause 10.2).
         *
         * @public
         * @readonly
         */
        readonly seqNum: SequenceNum,
        /**
         * @summary `ad`.
         * @description
         *
         * Integrity check value, 12 to 32 octets. Calculated over the
         * concatenated transactions prefixed by a synthesized 32-bit source
         * address, 32-bit destination address, and 16-bit destination port,
         * encoded as 20 hex digits (clause 10.2). When TCP is the transport,
         * that port is the TCP port.
         *
         * @public
         * @readonly
         */
        readonly ad: AuthData
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationHeader
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticationHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationHeader`.
     * @returns {AuthenticationHeader}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticationHeader)]: (AuthenticationHeader)[_K] }): AuthenticationHeader {
        return new AuthenticationHeader(_o.secParmIndex, _o.seqNum, _o.ad);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticationHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticationHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("secParmIndex", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("seqNum", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ad", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AuthenticationHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticationHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticationHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticationHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticationHeader: $.ASN1Decoder<AuthenticationHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationHeader (el: _Element): AuthenticationHeader {
    if (!_cached_decoder_for_AuthenticationHeader) { _cached_decoder_for_AuthenticationHeader = function (el: _Element): AuthenticationHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AuthenticationHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "secParmIndex";
    sequence[1].name = "seqNum";
    sequence[2].name = "ad";
    const secParmIndex: SecurityParmIndex = $._decode_implicit<SecurityParmIndex>(() => _decode_SecurityParmIndex)(sequence[0]);
    const seqNum: SequenceNum = $._decode_implicit<SequenceNum>(() => _decode_SequenceNum)(sequence[1]);
    const ad: AuthData = $._decode_implicit<AuthData>(() => _decode_AuthData)(sequence[2]);
    return new AuthenticationHeader(
        secParmIndex,
        seqNum,
        ad,

    );
}; }
    return _cached_decoder_for_AuthenticationHeader(el);
}

let _cached_encoder_for_AuthenticationHeader: $.ASN1Encoder<AuthenticationHeader> | null = null;

/**
 * @summary Encodes a(n) AuthenticationHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationHeader, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationHeader (value: AuthenticationHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationHeader) { _cached_encoder_for_AuthenticationHeader = function (value: AuthenticationHeader, elGetter: $.ASN1Encoder<AuthenticationHeader>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityParmIndex, $.BER)(value.secParmIndex, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SequenceNum, $.BER)(value.seqNum, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AuthData, $.BER)(value.ad, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticationHeader(value, elGetter);
}


/* eslint-enable */
