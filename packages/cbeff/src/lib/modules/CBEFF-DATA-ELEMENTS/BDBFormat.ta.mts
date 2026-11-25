/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";

/**
 * @summary BDBFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDBFormat ::= SEQUENCE {
 *     organization    INTEGER (0..65535),
 *     id              INTEGER (0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class BDBFormat {
    /**
     * @summary `organization`.
     * @public
     * @readonly
     */
    readonly organization: INTEGER;
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: INTEGER;

    constructor (
        organization: INTEGER,
        id: INTEGER
    ) {
        assertIntegerRange(organization, 0, 65535, "BDBFormat.organization");
        assertIntegerRange(id, 0, 65535, "BDBFormat.id");
        this.organization = organization;
        this.id = id;
    }

    /**
     * @summary Restructures an object into a BDBFormat
     * @description
     * 
     * This takes an `object` and converts it to a `BDBFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDBFormat`.
     * @returns {BDBFormat}
     */
    public static _from_object (_o: { [_K in keyof (BDBFormat)]: (BDBFormat)[_K] }): BDBFormat {
        return new BDBFormat(_o.organization, _o.id);
    }

}

/**
 * @summary The Leading Root Component Types of BDBFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDBFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("organization", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BDBFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDBFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDBFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDBFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDBFormat: $.ASN1Decoder<BDBFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDBFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDBFormat (el: _Element): BDBFormat {
    if (!_cached_decoder_for_BDBFormat) { _cached_decoder_for_BDBFormat = function (el: _Element): BDBFormat {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BDBFormat contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "organization";
    sequence[1].name = "id";
    const organization: INTEGER = $._decodeInteger(sequence[0]);
    const id: INTEGER = $._decodeInteger(sequence[1]);
    return new BDBFormat(
        organization,
        id,

    );
}; }
    return _cached_decoder_for_BDBFormat(el);
}

let _cached_encoder_for_BDBFormat: $.ASN1Encoder<BDBFormat> | null = null;

/**
 * @summary Encodes a(n) BDBFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDBFormat, encoded as an ASN.1 Element.
 */
export
function _encode_BDBFormat (value: BDBFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDBFormat) { _cached_encoder_for_BDBFormat = function (value: BDBFormat, elGetter: $.ASN1Encoder<BDBFormat>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.organization, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.id, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BDBFormat(value, elGetter);
}

/* eslint-enable */
