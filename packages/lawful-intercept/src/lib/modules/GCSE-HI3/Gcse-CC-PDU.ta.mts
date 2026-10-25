/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GcseLIC_header, _decode_GcseLIC_header, _encode_GcseLIC_header } from "../GCSE-HI3/GcseLIC-header.ta.mjs";
// export { GcseLIC_header, _decode_GcseLIC_header, _encode_GcseLIC_header } from "../GCSE-HI3/GcseLIC-header.ta.mjs";


/**
 * @summary Gcse_CC_PDU
 * @description
 * 
 * GCSE CC PDU: correlation header and payload. The structure can report a
 * separate media stream for each user in the group communication. The GCS AS
 * sends correlation numbers and target identities on HI3 (clause 14.2.2.1).
 * 
 * 3GPP TS 33.108, clause 14.2.7 and annex B.14.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Gcse-CC-PDU ::= SEQUENCE
 * {
 *      gcseLIC-header        [1] GcseLIC-header,
 *     payload            [2] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class Gcse_CC_PDU {
    /**
     * @summary `gcseLIC_header`.
     * @description
     * 
     * GCSE LI correlation header. 3GPP TS 33.108, annex B.14.2.
     * @public
     * @readonly
     */
    readonly gcseLIC_header: GcseLIC_header;
    /**
     * @summary `payload`.
     * @description
     * 
     * Content of the GCSE group communication. Clause 14.2.7 does not state a
     * payload encoding. 3GPP TS 33.108, clause 14.2.7.
     * @public
     * @readonly
     */
    readonly payload: OCTET_STRING;

    constructor (
        gcseLIC_header: GcseLIC_header,
        payload: OCTET_STRING
    ) {
        this.gcseLIC_header = gcseLIC_header;
        this.payload = payload;
    }

    /**
     * @summary Restructures an object into a Gcse_CC_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `Gcse_CC_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Gcse_CC_PDU`.
     * @returns {Gcse_CC_PDU}
     */
    public static _from_object (_o: { [_K in keyof (Gcse_CC_PDU)]: (Gcse_CC_PDU)[_K] }): Gcse_CC_PDU {
        return new Gcse_CC_PDU(_o.gcseLIC_header, _o.payload);
    }


}

/**
 * @summary The Leading Root Component Types of Gcse_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Gcse_CC_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("gcseLIC-header", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Gcse_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Gcse_CC_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Gcse_CC_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Gcse_CC_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Gcse_CC_PDU: $.ASN1Decoder<Gcse_CC_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Gcse_CC_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Gcse_CC_PDU (el: _Element): Gcse_CC_PDU {
    if (!_cached_decoder_for_Gcse_CC_PDU) { _cached_decoder_for_Gcse_CC_PDU = function (el: _Element): Gcse_CC_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Gcse-CC-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gcseLIC-header";
    sequence[1].name = "payload";
    let gcseLIC_header!: GcseLIC_header;
    let payload!: OCTET_STRING;
    gcseLIC_header = $._decode_implicit<GcseLIC_header>(() => _decode_GcseLIC_header)(sequence[0]);
    payload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new Gcse_CC_PDU(
        gcseLIC_header,
        payload,

    );
}; }
    return _cached_decoder_for_Gcse_CC_PDU(el);
}

let _cached_encoder_for_Gcse_CC_PDU: $.ASN1Encoder<Gcse_CC_PDU> | null = null;

/**
 * @summary Encodes a(n) Gcse_CC_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Gcse_CC_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_Gcse_CC_PDU (value: Gcse_CC_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Gcse_CC_PDU) { _cached_encoder_for_Gcse_CC_PDU = function (value: Gcse_CC_PDU, elGetter: $.ASN1Encoder<Gcse_CC_PDU>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GcseLIC_header, $.BER)(value.gcseLIC_header, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.payload, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Gcse_CC_PDU(value, elGetter);
}


/* eslint-enable */
