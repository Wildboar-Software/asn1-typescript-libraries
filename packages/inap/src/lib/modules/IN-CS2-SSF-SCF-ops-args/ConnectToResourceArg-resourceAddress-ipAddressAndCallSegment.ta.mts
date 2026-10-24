/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS2-datatypes/IPRoutingAddress.ta.mjs";
// export { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS2-datatypes/IPRoutingAddress.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS2-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg-resourceAddress-ipAddressAndCallSegment ::=
 * SEQUENCE {
 *   ipRoutingAddress [0] IPRoutingAddress,
 *   callSegmentID [1] CallSegmentID
 * }
 * ```
 * 
 * @class
 */
export
class ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment {
    /**
     * @summary `ipRoutingAddress`.
     * @public
     * @readonly
     */
    readonly ipRoutingAddress: IPRoutingAddress;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: CallSegmentID;

    constructor (
        ipRoutingAddress: IPRoutingAddress,
        callSegmentID: CallSegmentID
    ) {
        this.ipRoutingAddress = ipRoutingAddress;
        this.callSegmentID = callSegmentID;
    }

    /**
     * @summary Restructures an object into a ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment`.
     * @returns {ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment}
     */
    public static _from_object (_o: { [_K in keyof (ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment)]: (ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment)[_K] }): ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment {
        return new ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment(_o.ipRoutingAddress, _o.callSegmentID);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment: $.ComponentSpec[] = [
    new $.ComponentSpec("ipRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callSegmentID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment: $.ASN1Decoder<ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment (el: _Element): ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment {
    if (!_cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment) { _cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment = function (el: _Element): ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ConnectToResourceArg-resourceAddress-ipAddressAndCallSegment contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ipRoutingAddress";
    sequence[1].name = "callSegmentID";
    const ipRoutingAddress: IPRoutingAddress = $._decode_implicit<IPRoutingAddress>(() => _decode_IPRoutingAddress)(sequence[0]);
    const callSegmentID: CallSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(sequence[1]);
    return new ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment(
        ipRoutingAddress,
        callSegmentID,

    );
}; }
    return _cached_decoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment(el);
}

let _cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment: $.ASN1Encoder<ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment (value: ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment) { _cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment = function (value: ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment, elGetter: $.ASN1Encoder<ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IPRoutingAddress, $.BER)(value.ipRoutingAddress, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg_resourceAddress_ipAddressAndCallSegment(value, elGetter);
}


/* eslint-enable */
