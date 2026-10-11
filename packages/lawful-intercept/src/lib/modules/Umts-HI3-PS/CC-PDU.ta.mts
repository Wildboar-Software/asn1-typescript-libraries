/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ULIC_header, _decode_ULIC_header, _encode_ULIC_header } from "../Umts-HI3-PS/ULIC-header.ta.mjs";
// export { ULIC_header, _decode_ULIC_header, _encode_ULIC_header } from "../Umts-HI3-PS/ULIC-header.ta.mjs";


/**
 * @summary CC_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CC-PDU ::= SEQUENCE
 * {
 *      uLIC-header        [1] ULIC-header,
 *     payload            [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class CC_PDU {
    /**
     * @summary `uLIC_header`.
     * @public
     * @readonly
     */
    readonly uLIC_header: ULIC_header;
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OCTET_STRING;

    constructor (
        uLIC_header: ULIC_header,
        payload: OCTET_STRING
    ) {
        this.uLIC_header = uLIC_header;
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
        return new CC_PDU(_o.uLIC_header, _o.payload);
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
    new $.ComponentSpec("uLIC-header", false, $.hasTag(_TagClass.context, 1)),
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
    sequence[0].name = "uLIC-header";
    sequence[1].name = "payload";
    let uLIC_header!: ULIC_header;
    let payload!: OCTET_STRING;
    uLIC_header = $._decode_implicit<ULIC_header>(() => _decode_ULIC_header)(sequence[0]);
    payload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CC_PDU(
        uLIC_header,
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
    if (!_cached_encoder_for_CC_PDU) { _cached_encoder_for_CC_PDU = function (value: CC_PDU, _elGetter: $.ASN1Encoder<CC_PDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ULIC_header, $.BER)(value.uLIC_header, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.payload, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CC_PDU(value, elGetter);
}


/* eslint-enable */
