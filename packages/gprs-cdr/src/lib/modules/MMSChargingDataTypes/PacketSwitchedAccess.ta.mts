/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";


/**
 * @summary PacketSwitchedAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketSwitchedAccess ::= SEQUENCE {
 *    gSNAddress   [0] IPAddress,
 *    chargingID   [1] IMPLICIT INTEGER ( 0 .. 4294967295 )}
 * ```
 * 
 * @class
 */
export
class PacketSwitchedAccess {
    /**
     * @summary `gSNAddress`.
     * @public
     * @readonly
     */
    readonly gSNAddress: IPAddress;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;

    constructor (
        gSNAddress: IPAddress,
        chargingID: INTEGER
    ) {
        this.gSNAddress = gSNAddress;
        this.chargingID = chargingID;
    
        if (((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("PacketSwitchedAccess.chargingID violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a PacketSwitchedAccess
     * @description
     * 
     * This takes an `object` and converts it to a `PacketSwitchedAccess`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketSwitchedAccess`.
     * @returns {PacketSwitchedAccess}
     */
    public static _from_object (_o: { [_K in keyof (PacketSwitchedAccess)]: (PacketSwitchedAccess)[_K] }): PacketSwitchedAccess {
        return new PacketSwitchedAccess(_o.gSNAddress, _o.chargingID);
    }


}

/**
 * @summary The Leading Root Component Types of PacketSwitchedAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketSwitchedAccess: $.ComponentSpec[] = [
    new $.ComponentSpec("gSNAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PacketSwitchedAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketSwitchedAccess: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketSwitchedAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketSwitchedAccess: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketSwitchedAccess: $.ASN1Decoder<PacketSwitchedAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketSwitchedAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketSwitchedAccess (el: _Element): PacketSwitchedAccess {
    if (!_cached_decoder_for_PacketSwitchedAccess) { _cached_decoder_for_PacketSwitchedAccess = function (el: _Element): PacketSwitchedAccess {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PacketSwitchedAccess contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gSNAddress";
    sequence[1].name = "chargingID";
    const gSNAddress: IPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    const chargingID: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new PacketSwitchedAccess(
        gSNAddress,
        chargingID,

    );
}; }
    return _cached_decoder_for_PacketSwitchedAccess(el);
}

let _cached_encoder_for_PacketSwitchedAccess: $.ASN1Encoder<PacketSwitchedAccess> | null = null;

/**
 * @summary Encodes a(n) PacketSwitchedAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketSwitchedAccess, encoded as an ASN.1 Element.
 */
export
function _encode_PacketSwitchedAccess (value: PacketSwitchedAccess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketSwitchedAccess) { _cached_encoder_for_PacketSwitchedAccess = function (value: PacketSwitchedAccess, _elGetter: $.ASN1Encoder<PacketSwitchedAccess>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER)(value.gSNAddress, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.chargingID, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PacketSwitchedAccess(value, elGetter);
}


/* eslint-enable */
