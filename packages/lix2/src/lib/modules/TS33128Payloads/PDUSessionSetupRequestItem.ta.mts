/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";


/**
 * @summary PDUSessionSetupRequestItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionSetupRequestItem ::= SEQUENCE
 * {
 *     pDUSessionID [1] PDUSessionID,
 *     sNSSAI       [2] SNSSAI
 * }
 * ```
 * 
 * @class
 */
export
class PDUSessionSetupRequestItem {
    constructor (
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: SNSSAI
    ) {}

    /**
     * @summary Restructures an object into a PDUSessionSetupRequestItem
     * @description
     * 
     * This takes an `object` and converts it to a `PDUSessionSetupRequestItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUSessionSetupRequestItem`.
     * @returns {PDUSessionSetupRequestItem}
     */
    public static _from_object (_o: { [_K in keyof (PDUSessionSetupRequestItem)]: (PDUSessionSetupRequestItem)[_K] }): PDUSessionSetupRequestItem {
        return new PDUSessionSetupRequestItem(_o.pDUSessionID, _o.sNSSAI);
    }


}

/**
 * @summary The Leading Root Component Types of PDUSessionSetupRequestItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDUSessionSetupRequestItem: $.ComponentSpec[] = [
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sNSSAI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PDUSessionSetupRequestItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDUSessionSetupRequestItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDUSessionSetupRequestItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDUSessionSetupRequestItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDUSessionSetupRequestItem: $.ASN1Decoder<PDUSessionSetupRequestItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUSessionSetupRequestItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUSessionSetupRequestItem (el: _Element): PDUSessionSetupRequestItem {
    if (!_cached_decoder_for_PDUSessionSetupRequestItem) { _cached_decoder_for_PDUSessionSetupRequestItem = function (el: _Element): PDUSessionSetupRequestItem {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PDUSessionSetupRequestItem contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pDUSessionID";
    sequence[1].name = "sNSSAI";
    let pDUSessionID!: PDUSessionID;
    let sNSSAI!: SNSSAI;
    pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(sequence[0]);
    sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(sequence[1]);
    return new PDUSessionSetupRequestItem(
        pDUSessionID,
        sNSSAI,

    );
}; }
    return _cached_decoder_for_PDUSessionSetupRequestItem(el);
}

let _cached_encoder_for_PDUSessionSetupRequestItem: $.ASN1Encoder<PDUSessionSetupRequestItem> | null = null;

/**
 * @summary Encodes a(n) PDUSessionSetupRequestItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUSessionSetupRequestItem, encoded as an ASN.1 Element.
 */
export
function _encode_PDUSessionSetupRequestItem (value: PDUSessionSetupRequestItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUSessionSetupRequestItem) { _cached_encoder_for_PDUSessionSetupRequestItem = function (value: PDUSessionSetupRequestItem, elGetter: $.ASN1Encoder<PDUSessionSetupRequestItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDUSessionSetupRequestItem(value, elGetter);
}


/* eslint-enable */
