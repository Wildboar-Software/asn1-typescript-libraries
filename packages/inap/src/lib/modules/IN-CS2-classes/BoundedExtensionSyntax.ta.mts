/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BoundedExtensionSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BoundedExtensionSyntax ::= SEQUENCE {
 *   digits
 *     OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class BoundedExtensionSyntax {
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
     * @summary Restructures an object into a BoundedExtensionSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `BoundedExtensionSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BoundedExtensionSyntax`.
     * @returns {BoundedExtensionSyntax}
     */
    public static _from_object (_o: { [_K in keyof (BoundedExtensionSyntax)]: (BoundedExtensionSyntax)[_K] }): BoundedExtensionSyntax {
        return new BoundedExtensionSyntax(_o.digits);
    }


}

/**
 * @summary The Leading Root Component Types of BoundedExtensionSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BoundedExtensionSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("digits", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of BoundedExtensionSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BoundedExtensionSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BoundedExtensionSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BoundedExtensionSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BoundedExtensionSyntax: $.ASN1Decoder<BoundedExtensionSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BoundedExtensionSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BoundedExtensionSyntax (el: _Element): BoundedExtensionSyntax {
    if (!_cached_decoder_for_BoundedExtensionSyntax) { _cached_decoder_for_BoundedExtensionSyntax = function (el: _Element): BoundedExtensionSyntax {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("BoundedExtensionSyntax contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "digits";
    const digits: OCTET_STRING = $._decodeOctetString(sequence[0]);
    return new BoundedExtensionSyntax(
        digits,

    );
}; }
    return _cached_decoder_for_BoundedExtensionSyntax(el);
}

let _cached_encoder_for_BoundedExtensionSyntax: $.ASN1Encoder<BoundedExtensionSyntax> | null = null;

/**
 * @summary Encodes a(n) BoundedExtensionSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BoundedExtensionSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_BoundedExtensionSyntax (value: BoundedExtensionSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BoundedExtensionSyntax) { _cached_encoder_for_BoundedExtensionSyntax = function (value: BoundedExtensionSyntax, elGetter: $.ASN1Encoder<BoundedExtensionSyntax>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeOctetString(value.digits, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BoundedExtensionSyntax(value, elGetter);
}


/* eslint-enable */
