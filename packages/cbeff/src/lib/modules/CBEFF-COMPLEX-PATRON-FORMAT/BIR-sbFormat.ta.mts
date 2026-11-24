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
 * @summary BIR_sbFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIR-sbFormat ::= SEQUENCE {
 *     sbFormatOwner   INTEGER (0..65535),
 *     sbFormatType    INTEGER (0..65535)
 * }
 * ```
 * 
 * @class
 */
export
class BIR_sbFormat {
    /**
     * @summary `sbFormatOwner`.
     * @public
     * @readonly
     */
    readonly sbFormatOwner: INTEGER;
    /**
     * @summary `sbFormatType`.
     * @public
     * @readonly
     */
    readonly sbFormatType: INTEGER;

    constructor (
        sbFormatOwner: INTEGER,
        sbFormatType: INTEGER
    ) {
        assertIntegerRange(sbFormatOwner, 0, 65535, "BIR.sbFormat.sbFormatOwner");
        assertIntegerRange(sbFormatType, 0, 65535, "BIR.sbFormat.sbFormatType");
        this.sbFormatOwner = sbFormatOwner;
        this.sbFormatType = sbFormatType;
    }

    /**
     * @summary Restructures an object into a BIR_sbFormat
     * @description
     * 
     * This takes an `object` and converts it to a `BIR_sbFormat`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BIR_sbFormat`.
     * @returns {BIR_sbFormat}
     */
    public static _from_object (_o: { [_K in keyof (BIR_sbFormat)]: (BIR_sbFormat)[_K] }): BIR_sbFormat {
        return new BIR_sbFormat(_o.sbFormatOwner, _o.sbFormatType);
    }

}

/**
 * @summary The Leading Root Component Types of BIR_sbFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BIR_sbFormat: $.ComponentSpec[] = [
    new $.ComponentSpec("sbFormatOwner", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sbFormatType", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BIR_sbFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BIR_sbFormat: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BIR_sbFormat
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BIR_sbFormat: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BIR_sbFormat: $.ASN1Decoder<BIR_sbFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIR_sbFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BIR_sbFormat (el: _Element): BIR_sbFormat {
    if (!_cached_decoder_for_BIR_sbFormat) { _cached_decoder_for_BIR_sbFormat = function (el: _Element): BIR_sbFormat {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BIR-sbFormat contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sbFormatOwner";
    sequence[1].name = "sbFormatType";
    const sbFormatOwner: INTEGER = $._decodeInteger(sequence[0]);
    const sbFormatType: INTEGER = $._decodeInteger(sequence[1]);
    return new BIR_sbFormat(
        sbFormatOwner,
        sbFormatType,

    );
}; }
    return _cached_decoder_for_BIR_sbFormat(el);
}

let _cached_encoder_for_BIR_sbFormat: $.ASN1Encoder<BIR_sbFormat> | null = null;

/**
 * @summary Encodes a(n) BIR_sbFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIR_sbFormat, encoded as an ASN.1 Element.
 */
export
function _encode_BIR_sbFormat (value: BIR_sbFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BIR_sbFormat) { _cached_encoder_for_BIR_sbFormat = function (value: BIR_sbFormat, elGetter: $.ASN1Encoder<BIR_sbFormat>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.sbFormatOwner, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sbFormatType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BIR_sbFormat(value, elGetter);
}

/* eslint-enable */
