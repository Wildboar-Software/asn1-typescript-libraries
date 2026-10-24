/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSLIC_header, _decode_MMSLIC_header, _encode_MMSLIC_header } from "../Mms-HI3-PS/MMSLIC-header.ta.mjs";
// export { MMSLIC_header, _decode_MMSLIC_header, _encode_MMSLIC_header } from "../Mms-HI3-PS/MMSLIC-header.ta.mjs";


/**
 * @summary CC_PDU
 * @description
 * 
 * MMS CC PDU. The ICE gives it to DF3, which delivers it on HI3. The PDU
 * contains the content of an MMS, with correlation to the IRI (clause 15.3.1
 * and table 15.3.7.1).
 * 
 * 3GPP TS 33.108, clause 15.3.7 and annex B.16.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CC-PDU ::= SEQUENCE
 * {
 *      mmSLIC-header        [1] MMSLIC-header,
 *     payload            [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class CC_PDU {
    /**
     * @summary `mmSLIC_header`.
     * @description
     * 
     * MMS correlation header. 3GPP TS 33.108, table 15.3.7.1 and annex B.16.
     * @public
     * @readonly
     */
    readonly mmSLIC_header: MMSLIC_header;
    /**
     * @summary `payload`.
     * @description
     * 
     * Content of the MMS. Table 15.3.7.1 requires it. 3GPP TS 33.108, clause
     * 15.3.1 and clause 15.3.7.
     * @public
     * @readonly
     */
    readonly payload: OCTET_STRING;

    constructor (
        mmSLIC_header: MMSLIC_header,
        payload: OCTET_STRING
    ) {
        this.mmSLIC_header = mmSLIC_header;
        this.payload = payload;
    }

    /**
     * @summary Restructures an object into a CC_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `CC_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CC_PDU`.
     * @returns {CC_PDU}
     */
    public static _from_object (_o: { [_K in keyof (CC_PDU)]: (CC_PDU)[_K] }): CC_PDU {
        return new CC_PDU(_o.mmSLIC_header, _o.payload);
    }


}

/**
 * @summary The Leading Root Component Types of CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CC_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("mmSLIC-header", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CC_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CC_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CC_PDU: $.ASN1Decoder<CC_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CC_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CC_PDU (el: _Element): CC_PDU {
    if (!_cached_decoder_for_CC_PDU) { _cached_decoder_for_CC_PDU = function (el: _Element): CC_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CC-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mmSLIC-header";
    sequence[1].name = "payload";
    let mmSLIC_header!: MMSLIC_header;
    let payload!: OCTET_STRING;
    mmSLIC_header = $._decode_implicit<MMSLIC_header>(() => _decode_MMSLIC_header)(sequence[0]);
    payload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CC_PDU(
        mmSLIC_header,
        payload,

    );
}; }
    return _cached_decoder_for_CC_PDU(el);
}

let _cached_encoder_for_CC_PDU: $.ASN1Encoder<CC_PDU> | null = null;

/**
 * @summary Encodes a(n) CC_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CC_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_CC_PDU (value: CC_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CC_PDU) { _cached_encoder_for_CC_PDU = function (value: CC_PDU, elGetter: $.ASN1Encoder<CC_PDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSLIC_header, $.BER)(value.mmSLIC_header, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.payload, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CC_PDU(value, elGetter);
}


/* eslint-enable */
