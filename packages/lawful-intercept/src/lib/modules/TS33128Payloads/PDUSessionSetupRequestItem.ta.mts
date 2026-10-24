/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
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
 * The PDUSessionSetupRequestItem identifies a PDU Session for a UE. The
 * PDUSessionSetupRequestItem is derived from the information in the PDU Session
 * Resource Setup Request Item IE defined in TS 38.413 [23] clause 9.2.2.1.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `pDUSessionID`.
     * @description
     *
     * Identifies a PDU Session for a UE. The definition and use of the PDU
     * Session ID is specified in TS 23.501 [2] clause 5.6.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.2.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary `sNSSAI`.
     * @description
     *
     * Slice identifier associated with the PDU session, if available. See TS
     * 23.003 [19] clause 28.4.2 and TS 23.501 [2] clause 5.15.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2A.2.
     *
     * @public
     * @readonly
     */
    readonly sNSSAI: SNSSAI;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pDUSessionID: PDUSessionID,
        sNSSAI: SNSSAI,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pDUSessionID = pDUSessionID;
        this.sNSSAI = sNSSAI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new PDUSessionSetupRequestItem(_o.pDUSessionID, _o.sNSSAI, _o._unrecognizedExtensionsList);
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
        sequence.slice(2),
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PDUSessionSetupRequestItem(value, elGetter);
}


/* eslint-enable */
