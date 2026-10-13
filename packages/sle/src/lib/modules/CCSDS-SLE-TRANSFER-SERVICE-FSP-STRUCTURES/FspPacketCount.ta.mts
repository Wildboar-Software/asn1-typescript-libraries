/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary FspPacketCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketCount ::= SEQUENCE
 * {  adCount                 IntUnsignedLong
 * ,  bdCount                 IntUnsignedLong
 * }
 * ```
 * 
 * @class
 */
export
class FspPacketCount {
    /**
     * @summary `adCount`.
     * @public
     * @readonly
     */
    readonly adCount: IntUnsignedLong;
    /**
     * @summary `bdCount`.
     * @public
     * @readonly
     */
    readonly bdCount: IntUnsignedLong;

    constructor (
        adCount: IntUnsignedLong,
        bdCount: IntUnsignedLong
    ) {
        this.adCount = adCount;
        this.bdCount = bdCount;
    }

    /**
     * @summary Restructures an object into a FspPacketCount
     * @description
     * 
     * This takes an `object` and converts it to a `FspPacketCount`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspPacketCount`.
     * @returns {FspPacketCount}
     */
    public static _from_object (_o: { [_K in keyof (FspPacketCount)]: (FspPacketCount)[_K] }): FspPacketCount {
        return new FspPacketCount(_o.adCount, _o.bdCount);
    }


}

/**
 * @summary The Leading Root Component Types of FspPacketCount
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspPacketCount: $.ComponentSpec[] = [
    new $.ComponentSpec("adCount", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("bdCount", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspPacketCount
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspPacketCount: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspPacketCount
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspPacketCount: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspPacketCount: $.ASN1Decoder<FspPacketCount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketCount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketCount (el: _Element): FspPacketCount {
    if (!_cached_decoder_for_FspPacketCount) { _cached_decoder_for_FspPacketCount = function (el: _Element): FspPacketCount {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspPacketCount contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "adCount";
    sequence[1].name = "bdCount";
    let adCount!: IntUnsignedLong;
    let bdCount!: IntUnsignedLong;
    adCount = _decode_IntUnsignedLong(sequence[0]);
    bdCount = _decode_IntUnsignedLong(sequence[1]);
    return new FspPacketCount(
        adCount,
        bdCount,

    );
}; }
    return _cached_decoder_for_FspPacketCount(el);
}

let _cached_encoder_for_FspPacketCount: $.ASN1Encoder<FspPacketCount> | null = null;

/**
 * @summary Encodes a(n) FspPacketCount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketCount, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketCount (value: FspPacketCount, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketCount) { _cached_encoder_for_FspPacketCount = function (value: FspPacketCount, _elGetter: $.ASN1Encoder<FspPacketCount>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_IntUnsignedLong(value.adCount, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.bdCount, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspPacketCount(value, elGetter);
}


/* eslint-enable */
