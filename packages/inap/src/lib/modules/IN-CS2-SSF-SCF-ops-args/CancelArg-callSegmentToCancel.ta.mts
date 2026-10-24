/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InvokeID, _decode_InvokeID, _encode_InvokeID } from "../IN-CS2-datatypes/InvokeID.ta.mjs";
// export { InvokeID, _decode_InvokeID, _encode_InvokeID } from "../IN-CS2-datatypes/InvokeID.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary CancelArg_callSegmentToCancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelArg-callSegmentToCancel ::=
 * SEQUENCE {
 *   invokeID [0] InvokeID,
 *   callSegmentID [1] CallSegmentID
 * }
 * ```
 * 
 * @class
 */
export
class CancelArg_callSegmentToCancel {
    /**
     * @summary `invokeID`.
     * @public
     * @readonly
     */
    readonly invokeID: InvokeID;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: CallSegmentID;

    constructor (
        invokeID: InvokeID,
        callSegmentID: CallSegmentID
    ) {
        this.invokeID = invokeID;
        this.callSegmentID = callSegmentID;
    }

    /**
     * @summary Restructures an object into a CancelArg_callSegmentToCancel
     * @description
     * 
     * This takes an `object` and converts it to a `CancelArg_callSegmentToCancel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelArg_callSegmentToCancel`.
     * @returns {CancelArg_callSegmentToCancel}
     */
    public static _from_object (_o: { [_K in keyof (CancelArg_callSegmentToCancel)]: (CancelArg_callSegmentToCancel)[_K] }): CancelArg_callSegmentToCancel {
        return new CancelArg_callSegmentToCancel(_o.invokeID, _o.callSegmentID);
    }


}

/**
 * @summary The Leading Root Component Types of CancelArg_callSegmentToCancel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelArg_callSegmentToCancel: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callSegmentID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CancelArg_callSegmentToCancel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelArg_callSegmentToCancel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelArg_callSegmentToCancel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelArg_callSegmentToCancel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelArg_callSegmentToCancel: $.ASN1Decoder<CancelArg_callSegmentToCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelArg_callSegmentToCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelArg_callSegmentToCancel (el: _Element): CancelArg_callSegmentToCancel {
    if (!_cached_decoder_for_CancelArg_callSegmentToCancel) { _cached_decoder_for_CancelArg_callSegmentToCancel = function (el: _Element): CancelArg_callSegmentToCancel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CancelArg-callSegmentToCancel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokeID";
    sequence[1].name = "callSegmentID";
    const invokeID: InvokeID = $._decode_implicit<InvokeID>(() => _decode_InvokeID)(sequence[0]);
    const callSegmentID: CallSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(sequence[1]);
    return new CancelArg_callSegmentToCancel(
        invokeID,
        callSegmentID,

    );
}; }
    return _cached_decoder_for_CancelArg_callSegmentToCancel(el);
}

let _cached_encoder_for_CancelArg_callSegmentToCancel: $.ASN1Encoder<CancelArg_callSegmentToCancel> | null = null;

/**
 * @summary Encodes a(n) CancelArg_callSegmentToCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelArg_callSegmentToCancel, encoded as an ASN.1 Element.
 */
export
function _encode_CancelArg_callSegmentToCancel (value: CancelArg_callSegmentToCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelArg_callSegmentToCancel) { _cached_encoder_for_CancelArg_callSegmentToCancel = function (value: CancelArg_callSegmentToCancel, elGetter: $.ASN1Encoder<CancelArg_callSegmentToCancel>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InvokeID, $.BER)(value.invokeID, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CancelArg_callSegmentToCancel(value, elGetter);
}


/* eslint-enable */
