/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { type QOSFlowLists, _decode_QOSFlowLists, _encode_QOSFlowLists } from "../TS33128Payloads/QOSFlowLists.ta.mjs";
// export { QOSFlowLists, _decode_QOSFlowLists, _encode_QOSFlowLists } from "../TS33128Payloads/QOSFlowLists.ta.mjs";


/**
 * @summary QOSFlowTunnelInformation
 * @description
 * 
 * Shall include the F-TEID NG-RAN endpoint of the NG-U transport bearer
 * together with associated QoS flows (see TS 38.413 [23] clause 9.3.4.2 and TS
 * 29.502 [16] clause 6.1.6.2.39).
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowTunnelInformation ::= SEQUENCE
 * {
 *     uPTunnelInformation   [1] FTEID,
 *     associatedQOSFlowList [2] QOSFlowLists
 * }
 * ```
 * 
 * @class
 */
export
class QOSFlowTunnelInformation {
    /**
     * @summary `uPTunnelInformation`.
     * @public
     * @readonly
     */
    readonly uPTunnelInformation: FTEID;
    /**
     * @summary `associatedQOSFlowList`.
     * @public
     * @readonly
     */
    readonly associatedQOSFlowList: QOSFlowLists;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uPTunnelInformation: FTEID,
        associatedQOSFlowList: QOSFlowLists,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uPTunnelInformation = uPTunnelInformation;
        this.associatedQOSFlowList = associatedQOSFlowList;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a QOSFlowTunnelInformation
     * @description
     * 
     * This takes an `object` and converts it to a `QOSFlowTunnelInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QOSFlowTunnelInformation`.
     * @returns {QOSFlowTunnelInformation}
     */
    public static _from_object (_o: { [_K in keyof (QOSFlowTunnelInformation)]: (QOSFlowTunnelInformation)[_K] }): QOSFlowTunnelInformation {
        return new QOSFlowTunnelInformation(_o.uPTunnelInformation, _o.associatedQOSFlowList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of QOSFlowTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QOSFlowTunnelInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("uPTunnelInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("associatedQOSFlowList", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of QOSFlowTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QOSFlowTunnelInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QOSFlowTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QOSFlowTunnelInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QOSFlowTunnelInformation: $.ASN1Decoder<QOSFlowTunnelInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowTunnelInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSFlowTunnelInformation (el: _Element): QOSFlowTunnelInformation {
    if (!_cached_decoder_for_QOSFlowTunnelInformation) { _cached_decoder_for_QOSFlowTunnelInformation = function (el: _Element): QOSFlowTunnelInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("QOSFlowTunnelInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "uPTunnelInformation";
    sequence[1].name = "associatedQOSFlowList";
    let uPTunnelInformation!: FTEID;
    let associatedQOSFlowList!: QOSFlowLists;
    uPTunnelInformation = $._decode_implicit<FTEID>(() => _decode_FTEID)(sequence[0]);
    associatedQOSFlowList = $._decode_implicit<QOSFlowLists>(() => _decode_QOSFlowLists)(sequence[1]);
    return new QOSFlowTunnelInformation(
        uPTunnelInformation,
        associatedQOSFlowList,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_QOSFlowTunnelInformation(el);
}

let _cached_encoder_for_QOSFlowTunnelInformation: $.ASN1Encoder<QOSFlowTunnelInformation> | null = null;

/**
 * @summary Encodes a(n) QOSFlowTunnelInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowTunnelInformation, encoded as an ASN.1 Element.
 */
export
function _encode_QOSFlowTunnelInformation (value: QOSFlowTunnelInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSFlowTunnelInformation) { _cached_encoder_for_QOSFlowTunnelInformation = function (value: QOSFlowTunnelInformation, elGetter: $.ASN1Encoder<QOSFlowTunnelInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FTEID, $.BER)(value.uPTunnelInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_QOSFlowLists, $.BER)(value.associatedQOSFlowList, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_QOSFlowTunnelInformation(value, elGetter);
}


/* eslint-enable */
