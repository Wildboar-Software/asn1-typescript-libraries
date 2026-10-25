/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PSHeader, _decode_PSHeader, _encode_PSHeader } from "../LI-PS-PDU/PSHeader.ta.mjs";
// export { PSHeader, _decode_PSHeader, _encode_PSHeader } from "../LI-PS-PDU/PSHeader.ta.mjs";
import { type Payload, _decode_Payload, _encode_Payload } from "../LI-PS-PDU/Payload.ta.mjs";
// export { Payload, _decode_Payload, _encode_Payload } from "../LI-PS-PDU/Payload.ta.mjs";


/**
 * @summary PS_PDU
 * @description
 * 
 * One handover PDU from the CSP mediation function to the LEMF on HI2 or HI3.
 * The handover manager attaches the header, then assigns the PDU to a delivery
 * function. On the wire the message is binary compatible with BER.
 *
 * When payload encryption is used, the integrity digest is taken over a DER
 * encoding of this PDU while `encryptionType` is still `none`. Annex G then
 * encrypts the payload and DER-encodes the PDU again.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.1, clause 5.3, clause 6.2.1,
 * annex G.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PS-PDU ::= SEQUENCE
 * {
 *     pSHeader    [1] PSHeader,
 *     payload     [2] Payload
 * }
 * ```
 * 
 * @class
 */
export
class PS_PDU {
    /**
     * @summary `pSHeader`.
     * @description
     *
     * Identifies the intercept, orders the PDU, and timestamps it. Clause 5 is
     * mandatory for HI2 and HI3 except where that clause says otherwise.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.1, clause 5.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly pSHeader: PSHeader;
    /**
     * @summary `payload`.
     * @description
     *
     * IRI, CC, transport-related information, an HI1 or HI4 notification,
     * inter-LEMF handover, or an encrypted form of one of those.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.8.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly payload: Payload;

    constructor (
        pSHeader: PSHeader,
        payload: Payload
    ) {
        this.pSHeader = pSHeader;
        this.payload = payload;
    }

    /**
     * @summary Restructures an object into a PS_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `PS_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PS_PDU`.
     * @returns {PS_PDU}
     */
    public static _from_object (_o: { [_K in keyof (PS_PDU)]: (PS_PDU)[_K] }): PS_PDU {
        return new PS_PDU(_o.pSHeader, _o.payload);
    }


}

/**
 * @summary The Leading Root Component Types of PS_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PS_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("pSHeader", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PS_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PS_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PS_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PS_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PS_PDU: $.ASN1Decoder<PS_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PS_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PS_PDU (el: _Element): PS_PDU {
    if (!_cached_decoder_for_PS_PDU) { _cached_decoder_for_PS_PDU = function (el: _Element): PS_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PS-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pSHeader";
    sequence[1].name = "payload";
    let pSHeader!: PSHeader;
    let payload!: Payload;
    pSHeader = $._decode_implicit<PSHeader>(() => _decode_PSHeader)(sequence[0]);
    payload = $._decode_explicit<Payload>(() => _decode_Payload)(sequence[1]);
    return new PS_PDU(
        pSHeader,
        payload,

    );
}; }
    return _cached_decoder_for_PS_PDU(el);
}

let _cached_encoder_for_PS_PDU: $.ASN1Encoder<PS_PDU> | null = null;

/**
 * @summary Encodes a(n) PS_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PS_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_PS_PDU (value: PS_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PS_PDU) { _cached_encoder_for_PS_PDU = function (value: PS_PDU, elGetter: $.ASN1Encoder<PS_PDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PSHeader, $.BER)(value.pSHeader, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Payload, $.BER)(value.payload, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PS_PDU(value, elGetter);
}


/* eslint-enable */
