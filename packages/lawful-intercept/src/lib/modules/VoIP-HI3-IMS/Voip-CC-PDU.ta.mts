/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VoipLIC_header, _decode_VoipLIC_header, _encode_VoipLIC_header } from "../VoIP-HI3-IMS/VoipLIC-header.ta.mjs";
// export { VoipLIC_header, _decode_VoipLIC_header, _encode_VoipLIC_header } from "../VoIP-HI3-IMS/VoipLIC-header.ta.mjs";


/**
 * @summary Voip_CC_PDU
 * @description
 * 
 * VoIP CC PDU sent to the LEMF over UDP or TCP, chosen nationally: correlation
 * header and payload. The correlation number from the CC Intercept Triggering
 * Function is the one placed in the CC. IPsec is recommended. The LEMF stores
 * packets with the sequence number and timestamp and correlates CC to IRI with
 * the VoIP correlation number.
 * 
 * 3GPP TS 33.108, annex K.1 and clause 12.6.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Voip-CC-PDU ::= SEQUENCE
 * {
 *      voipLIC-header        [1] VoipLIC-header,
 *     payload                [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class Voip_CC_PDU {
    /**
     * @summary `voipLIC_header`.
     * @description
     * 
     * VoIP LI correlation header. 3GPP TS 33.108, annex K.1.
     * @public
     * @readonly
     */
    readonly voipLIC_header: VoipLIC_header;
    /**
     * @summary `payload`.
     * @description
     * 
     * User-plane packets exchanged between participants of the intercepted
     * call, including the IP layer and above (for example IP/UDP/RTP). 3GPP TS
     * 33.108, annex K.3.
     * @public
     * @readonly
     */
    readonly payload: OCTET_STRING;

    constructor (
        voipLIC_header: VoipLIC_header,
        payload: OCTET_STRING
    ) {
        this.voipLIC_header = voipLIC_header;
        this.payload = payload;
    }

    /**
     * @summary Restructures an object into a Voip_CC_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `Voip_CC_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Voip_CC_PDU`.
     * @returns {Voip_CC_PDU}
     */
    public static _from_object (_o: { [_K in keyof (Voip_CC_PDU)]: (Voip_CC_PDU)[_K] }): Voip_CC_PDU {
        return new Voip_CC_PDU(_o.voipLIC_header, _o.payload);
    }


}

/**
 * @summary The Leading Root Component Types of Voip_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Voip_CC_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("voipLIC-header", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Voip_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Voip_CC_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Voip_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Voip_CC_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Voip_CC_PDU: $.ASN1Decoder<Voip_CC_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Voip_CC_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Voip_CC_PDU (el: _Element): Voip_CC_PDU {
    if (!_cached_decoder_for_Voip_CC_PDU) { _cached_decoder_for_Voip_CC_PDU = function (el: _Element): Voip_CC_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Voip-CC-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "voipLIC-header";
    sequence[1].name = "payload";
    let voipLIC_header!: VoipLIC_header;
    let payload!: OCTET_STRING;
    voipLIC_header = $._decode_implicit<VoipLIC_header>(() => _decode_VoipLIC_header)(sequence[0]);
    payload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new Voip_CC_PDU(
        voipLIC_header,
        payload,

    );
}; }
    return _cached_decoder_for_Voip_CC_PDU(el);
}

let _cached_encoder_for_Voip_CC_PDU: $.ASN1Encoder<Voip_CC_PDU> | null = null;

/**
 * @summary Encodes a(n) Voip_CC_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Voip_CC_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_Voip_CC_PDU (value: Voip_CC_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Voip_CC_PDU) { _cached_encoder_for_Voip_CC_PDU = function (value: Voip_CC_PDU, elGetter: $.ASN1Encoder<Voip_CC_PDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_VoipLIC_header, $.BER)(value.voipLIC_header, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.payload, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Voip_CC_PDU(value, elGetter);
}


/* eslint-enable */
