/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ConfLIC_header, _decode_ConfLIC_header, _encode_ConfLIC_header } from "../CONF-HI3-IMS/ConfLIC-header.ta.mjs";
// export { ConfLIC_header, _decode_ConfLIC_header, _encode_ConfLIC_header } from "../CONF-HI3-IMS/ConfLIC-header.ta.mjs";


/**
 * @summary Conf_CC_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Conf-CC-PDU ::= SEQUENCE
 * {
 *      confLIC-header        [1] ConfLIC-header,
 *     payload            [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class Conf_CC_PDU {
    /**
     * @summary `confLIC_header`.
     * @public
     * @readonly
     */
    readonly confLIC_header: ConfLIC_header;
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OCTET_STRING;

    constructor (
        confLIC_header: ConfLIC_header,
        payload: OCTET_STRING
    ) {
        this.confLIC_header = confLIC_header;
        this.payload = payload;
    }

    /**
     * @summary Restructures an object into a Conf_CC_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `Conf_CC_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Conf_CC_PDU`.
     * @returns {Conf_CC_PDU}
     */
    public static _from_object (_o: { [_K in keyof (Conf_CC_PDU)]: (Conf_CC_PDU)[_K] }): Conf_CC_PDU {
        return new Conf_CC_PDU(_o.confLIC_header, _o.payload);
    }


}

/**
 * @summary The Leading Root Component Types of Conf_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Conf_CC_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("confLIC-header", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Conf_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Conf_CC_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Conf_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Conf_CC_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Conf_CC_PDU: $.ASN1Decoder<Conf_CC_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conf_CC_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Conf_CC_PDU (el: _Element): Conf_CC_PDU {
    if (!_cached_decoder_for_Conf_CC_PDU) { _cached_decoder_for_Conf_CC_PDU = function (el: _Element): Conf_CC_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Conf-CC-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "confLIC-header";
    sequence[1].name = "payload";
    let confLIC_header!: ConfLIC_header;
    let payload!: OCTET_STRING;
    confLIC_header = $._decode_implicit<ConfLIC_header>(() => _decode_ConfLIC_header)(sequence[0]);
    payload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new Conf_CC_PDU(
        confLIC_header,
        payload,

    );
}; }
    return _cached_decoder_for_Conf_CC_PDU(el);
}

let _cached_encoder_for_Conf_CC_PDU: $.ASN1Encoder<Conf_CC_PDU> | null = null;

/**
 * @summary Encodes a(n) Conf_CC_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conf_CC_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_Conf_CC_PDU (value: Conf_CC_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Conf_CC_PDU) { _cached_encoder_for_Conf_CC_PDU = function (value: Conf_CC_PDU, elGetter: $.ASN1Encoder<Conf_CC_PDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ConfLIC_header, $.BER)(value.confLIC_header, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.payload, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Conf_CC_PDU(value, elGetter);
}


/* eslint-enable */
