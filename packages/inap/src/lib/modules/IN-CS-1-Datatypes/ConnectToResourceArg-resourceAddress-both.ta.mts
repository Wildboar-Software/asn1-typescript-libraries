/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS-1-Datatypes/IPRoutingAddress.ta.mjs";
// export { IPRoutingAddress, _decode_IPRoutingAddress, _encode_IPRoutingAddress } from "../IN-CS-1-Datatypes/IPRoutingAddress.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS-1-Datatypes/LegID.ta.mjs";


/**
 * @summary ConnectToResourceArg_resourceAddress_both
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg-resourceAddress-both ::=
 * SEQUENCE {
 *   ipRoutingAddress [0] IPRoutingAddress,
 *   legID [1] LegID
 * }
 * ```
 * 
 * @class
 */
export
class ConnectToResourceArg_resourceAddress_both {
    /**
     * @summary `ipRoutingAddress`.
     * @public
     * @readonly
     */
    readonly ipRoutingAddress: IPRoutingAddress;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: LegID;

    constructor (
        ipRoutingAddress: IPRoutingAddress,
        legID: LegID
    ) {
        this.ipRoutingAddress = ipRoutingAddress;
        this.legID = legID;
    }

    /**
     * @summary Restructures an object into a ConnectToResourceArg_resourceAddress_both
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectToResourceArg_resourceAddress_both`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectToResourceArg_resourceAddress_both`.
     * @returns {ConnectToResourceArg_resourceAddress_both}
     */
    public static _from_object (_o: { [_K in keyof (ConnectToResourceArg_resourceAddress_both)]: (ConnectToResourceArg_resourceAddress_both)[_K] }): ConnectToResourceArg_resourceAddress_both {
        return new ConnectToResourceArg_resourceAddress_both(_o.ipRoutingAddress, _o.legID);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectToResourceArg_resourceAddress_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectToResourceArg_resourceAddress_both: $.ComponentSpec[] = [
    new $.ComponentSpec("ipRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ConnectToResourceArg_resourceAddress_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectToResourceArg_resourceAddress_both: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectToResourceArg_resourceAddress_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectToResourceArg_resourceAddress_both: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectToResourceArg_resourceAddress_both: $.ASN1Decoder<ConnectToResourceArg_resourceAddress_both> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg_resourceAddress_both
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg_resourceAddress_both (el: _Element): ConnectToResourceArg_resourceAddress_both {
    if (!_cached_decoder_for_ConnectToResourceArg_resourceAddress_both) { _cached_decoder_for_ConnectToResourceArg_resourceAddress_both = function (el: _Element): ConnectToResourceArg_resourceAddress_both {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ConnectToResourceArg-resourceAddress-both contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ipRoutingAddress";
    sequence[1].name = "legID";
    const ipRoutingAddress: IPRoutingAddress = $._decode_implicit<IPRoutingAddress>(() => _decode_IPRoutingAddress)(sequence[0]);
    const legID: LegID = $._decode_explicit<LegID>(() => _decode_LegID)(sequence[1]);
    return new ConnectToResourceArg_resourceAddress_both(
        ipRoutingAddress,
        legID,

    );
}; }
    return _cached_decoder_for_ConnectToResourceArg_resourceAddress_both(el);
}

let _cached_encoder_for_ConnectToResourceArg_resourceAddress_both: $.ASN1Encoder<ConnectToResourceArg_resourceAddress_both> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg_resourceAddress_both into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg_resourceAddress_both, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg_resourceAddress_both (value: ConnectToResourceArg_resourceAddress_both, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg_resourceAddress_both) { _cached_encoder_for_ConnectToResourceArg_resourceAddress_both = function (value: ConnectToResourceArg_resourceAddress_both, elGetter: $.ASN1Encoder<ConnectToResourceArg_resourceAddress_both>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IPRoutingAddress, $.BER)(value.ipRoutingAddress, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg_resourceAddress_both(value, elGetter);
}


/* eslint-enable */
