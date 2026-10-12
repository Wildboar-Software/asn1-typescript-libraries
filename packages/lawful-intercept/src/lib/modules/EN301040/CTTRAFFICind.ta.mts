/* eslint-disable */
import {
    BIT_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";
// export { TLIIdType, _decode_TLIIdType, _encode_TLIIdType } from "../EN301040/TLIIdType.ta.mjs";


/**
 * @summary CTTRAFFICind
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTTRAFFICind ::= SEQUENCE {
 *     tLIInstanceid                    TLIIdType,
 *     trafficPacket                    BIT STRING
 * }
 * ```
 * 
 * @class
 */
export
class CTTRAFFICind {
    /**
     * @summary `tLIInstanceid`.
     * @public
     * @readonly
     */
    readonly tLIInstanceid: TLIIdType;
    /**
     * @summary `trafficPacket`.
     * @public
     * @readonly
     */
    readonly trafficPacket: BIT_STRING;

    constructor (
        tLIInstanceid: TLIIdType,
        trafficPacket: BIT_STRING
    ) {
        this.tLIInstanceid = tLIInstanceid;
        this.trafficPacket = trafficPacket;
    }

    /**
     * @summary Restructures an object into a CTTRAFFICind
     * @description
     * 
     * This takes an `object` and converts it to a `CTTRAFFICind`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTTRAFFICind`.
     * @returns {CTTRAFFICind}
     */
    public static _from_object (_o: { [_K in keyof (CTTRAFFICind)]: (CTTRAFFICind)[_K] }): CTTRAFFICind {
        return new CTTRAFFICind(_o.tLIInstanceid, _o.trafficPacket);
    }


}

/**
 * @summary The Leading Root Component Types of CTTRAFFICind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTTRAFFICind: $.ComponentSpec[] = [
    new $.ComponentSpec("tLIInstanceid", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("trafficPacket", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CTTRAFFICind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTTRAFFICind: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTTRAFFICind
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTTRAFFICind: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTTRAFFICind: $.ASN1Decoder<CTTRAFFICind> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTTRAFFICind
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTTRAFFICind (el: _Element): CTTRAFFICind {
    if (!_cached_decoder_for_CTTRAFFICind) { _cached_decoder_for_CTTRAFFICind = function (el: _Element): CTTRAFFICind {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CTTRAFFICind contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLIInstanceid";
    sequence[1].name = "trafficPacket";
    let tLIInstanceid!: TLIIdType;
    let trafficPacket!: BIT_STRING;
    tLIInstanceid = _decode_TLIIdType(sequence[0]);
    trafficPacket = $._decodeBitString(sequence[1]);
    return new CTTRAFFICind(
        tLIInstanceid,
        trafficPacket,

    );
}; }
    return _cached_decoder_for_CTTRAFFICind(el);
}

let _cached_encoder_for_CTTRAFFICind: $.ASN1Encoder<CTTRAFFICind> | null = null;

/**
 * @summary Encodes a(n) CTTRAFFICind into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTTRAFFICind, encoded as an ASN.1 Element.
 */
export
function _encode_CTTRAFFICind (value: CTTRAFFICind, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTTRAFFICind) { _cached_encoder_for_CTTRAFFICind = function (value: CTTRAFFICind, elGetter: $.ASN1Encoder<CTTRAFFICind>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TLIIdType, $.BER)(value.tLIInstanceid, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER)(value.trafficPacket, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CTTRAFFICind(value, elGetter);
}


/* eslint-enable */
