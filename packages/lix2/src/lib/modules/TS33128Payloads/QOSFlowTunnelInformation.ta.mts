/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { QOSFlowLists, _decode_QOSFlowLists, _encode_QOSFlowLists } from "../TS33128Payloads/QOSFlowLists.ta.mjs";
// export { QOSFlowLists, _decode_QOSFlowLists, _encode_QOSFlowLists } from "../TS33128Payloads/QOSFlowLists.ta.mjs";


/**
 * @summary QOSFlowTunnelInformation
 * @description
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
    constructor (
        /**
         * @summary `uPTunnelInformation`.
         * @public
         * @readonly
         */
        readonly uPTunnelInformation: FTEID,
        /**
         * @summary `associatedQOSFlowList`.
         * @public
         * @readonly
         */
        readonly associatedQOSFlowList: QOSFlowLists
    ) {}

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
        return new QOSFlowTunnelInformation(_o.uPTunnelInformation, _o.associatedQOSFlowList);
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FTEID, $.BER)(value.uPTunnelInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_QOSFlowLists, $.BER)(value.associatedQOSFlowList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QOSFlowTunnelInformation(value, elGetter);
}


/* eslint-enable */
