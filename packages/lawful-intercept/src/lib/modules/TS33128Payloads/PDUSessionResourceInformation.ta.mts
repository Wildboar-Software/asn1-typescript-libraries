/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";


/**
 * @summary PDUSessionResourceInformation
 * @description
 * 
 * Indicates the PDU Session to be transferred and Handover Command Transfer
 * information as seen in the HANDOVER REQUEST and confirmed in the HANDOVER
 * REQUEST ACKNOWLEDGE message. See TS 38.413 [23] clauses 9.3.1.50 and
 * 9.3.4.10.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionResourceInformation ::= SEQUENCE
 * {
 *     pDUSessionID              [1] PDUSessionID
 * }
 * ```
 * 
 * @class
 */
export
class PDUSessionResourceInformation {
    /**
     * @summary `pDUSessionID`.
     * @public
     * @readonly
     */
    readonly pDUSessionID: PDUSessionID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pDUSessionID: PDUSessionID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pDUSessionID = pDUSessionID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PDUSessionResourceInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PDUSessionResourceInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUSessionResourceInformation`.
     * @returns {PDUSessionResourceInformation}
     */
    public static _from_object (_o: { [_K in keyof (PDUSessionResourceInformation)]: (PDUSessionResourceInformation)[_K] }): PDUSessionResourceInformation {
        return new PDUSessionResourceInformation(_o.pDUSessionID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PDUSessionResourceInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDUSessionResourceInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PDUSessionResourceInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDUSessionResourceInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDUSessionResourceInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDUSessionResourceInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDUSessionResourceInformation: $.ASN1Decoder<PDUSessionResourceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUSessionResourceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUSessionResourceInformation (el: _Element): PDUSessionResourceInformation {
    if (!_cached_decoder_for_PDUSessionResourceInformation) { _cached_decoder_for_PDUSessionResourceInformation = function (el: _Element): PDUSessionResourceInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("PDUSessionResourceInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pDUSessionID";
    let pDUSessionID!: PDUSessionID;
    pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(sequence[0]);
    return new PDUSessionResourceInformation(
        pDUSessionID,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_PDUSessionResourceInformation(el);
}

let _cached_encoder_for_PDUSessionResourceInformation: $.ASN1Encoder<PDUSessionResourceInformation> | null = null;

/**
 * @summary Encodes a(n) PDUSessionResourceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUSessionResourceInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PDUSessionResourceInformation (value: PDUSessionResourceInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUSessionResourceInformation) { _cached_encoder_for_PDUSessionResourceInformation = function (value: PDUSessionResourceInformation, elGetter: $.ASN1Encoder<PDUSessionResourceInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PDUSessionResourceInformation(value, elGetter);
}


/* eslint-enable */
