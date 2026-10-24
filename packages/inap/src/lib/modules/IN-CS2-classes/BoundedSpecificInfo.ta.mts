/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BoundedSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BoundedSpecificInfo ::= SEQUENCE {
 *   digits
 *     OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class BoundedSpecificInfo {
    /**
     * @summary `digits`.
     * @public
     * @readonly
     */
    readonly digits: OCTET_STRING;

    constructor (
        digits: OCTET_STRING
    ) {
        this.digits = digits;
    }

    /**
     * @summary Restructures an object into a BoundedSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `BoundedSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BoundedSpecificInfo`.
     * @returns {BoundedSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (BoundedSpecificInfo)]: (BoundedSpecificInfo)[_K] }): BoundedSpecificInfo {
        return new BoundedSpecificInfo(_o.digits);
    }


}

/**
 * @summary The Leading Root Component Types of BoundedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BoundedSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("digits", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of BoundedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BoundedSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BoundedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BoundedSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BoundedSpecificInfo: $.ASN1Decoder<BoundedSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BoundedSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BoundedSpecificInfo (el: _Element): BoundedSpecificInfo {
    if (!_cached_decoder_for_BoundedSpecificInfo) { _cached_decoder_for_BoundedSpecificInfo = function (el: _Element): BoundedSpecificInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("BoundedSpecificInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "digits";
    const digits: OCTET_STRING = $._decodeOctetString(sequence[0]);
    return new BoundedSpecificInfo(
        digits,

    );
}; }
    return _cached_decoder_for_BoundedSpecificInfo(el);
}

let _cached_encoder_for_BoundedSpecificInfo: $.ASN1Encoder<BoundedSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) BoundedSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BoundedSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_BoundedSpecificInfo (value: BoundedSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BoundedSpecificInfo) { _cached_encoder_for_BoundedSpecificInfo = function (value: BoundedSpecificInfo, elGetter: $.ASN1Encoder<BoundedSpecificInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeOctetString(value.digits, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BoundedSpecificInfo(value, elGetter);
}


/* eslint-enable */
