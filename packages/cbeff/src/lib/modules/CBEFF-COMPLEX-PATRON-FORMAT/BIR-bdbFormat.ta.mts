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
 * @summary BIR_bdbFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIR-bdbFormat ::= SEQUENCE {
 *     bdbFormatOwner  INTEGER (0..65535),
 *     bdbFormatType   INTEGER (0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class BIR_bdbFormat {
    /**
     * @summary `bdbFormatOwner`.
     * @public
     * @readonly
     */
    readonly bdbFormatOwner: INTEGER;
    /**
     * @summary `bdbFormatType`.
     * @public
     * @readonly
     */
    readonly bdbFormatType: INTEGER;

    constructor (
        bdbFormatOwner: INTEGER,
        bdbFormatType: INTEGER
    ) {
        assertIntegerRange(bdbFormatOwner, 0, 65535, "BIR.bdbFormat.bdbFormatOwner");
        assertIntegerRange(bdbFormatType, 0, 65535, "BIR.bdbFormat.bdbFormatType");
        this.bdbFormatOwner = bdbFormatOwner;
        this.bdbFormatType = bdbFormatType;
    }

    /**
     * @summary Restructures an object into a BIR_bdbFormat
     * @description
     * 
     * This takes an `object` and converts it to a `BIR_bdbFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BIR_bdbFormat`.
     * @returns {BIR_bdbFormat}
     */
    public static _from_object (_o: { [_K in keyof (BIR_bdbFormat)]: (BIR_bdbFormat)[_K] }): BIR_bdbFormat {
        return new BIR_bdbFormat(_o.bdbFormatOwner, _o.bdbFormatType);
    }

}

/**
 * @summary The Leading Root Component Types of BIR_bdbFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BIR_bdbFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("bdbFormatOwner", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdbFormatType", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BIR_bdbFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BIR_bdbFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BIR_bdbFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BIR_bdbFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BIR_bdbFormat: $.ASN1Decoder<BIR_bdbFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIR_bdbFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BIR_bdbFormat (el: _Element): BIR_bdbFormat {
    if (!_cached_decoder_for_BIR_bdbFormat) { _cached_decoder_for_BIR_bdbFormat = function (el: _Element): BIR_bdbFormat {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BIR-bdbFormat contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bdbFormatOwner";
    sequence[1].name = "bdbFormatType";
    const bdbFormatOwner: INTEGER = $._decodeInteger(sequence[0]);
    const bdbFormatType: INTEGER = $._decodeInteger(sequence[1]);
    return new BIR_bdbFormat(
        bdbFormatOwner,
        bdbFormatType,

    );
}; }
    return _cached_decoder_for_BIR_bdbFormat(el);
}

let _cached_encoder_for_BIR_bdbFormat: $.ASN1Encoder<BIR_bdbFormat> | null = null;

/**
 * @summary Encodes a(n) BIR_bdbFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIR_bdbFormat, encoded as an ASN.1 Element.
 */
export
function _encode_BIR_bdbFormat (value: BIR_bdbFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BIR_bdbFormat) { _cached_encoder_for_BIR_bdbFormat = function (value: BIR_bdbFormat, elGetter: $.ASN1Encoder<BIR_bdbFormat>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.bdbFormatOwner, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.bdbFormatType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BIR_bdbFormat(value, elGetter);
}

/* eslint-enable */
