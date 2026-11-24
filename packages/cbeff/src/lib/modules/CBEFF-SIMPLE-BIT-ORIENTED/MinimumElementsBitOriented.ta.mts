/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BiometricDataBlock, _decode_BiometricDataBlock, _encode_BiometricDataBlock } from "../CBEFF-DATA-ELEMENTS/BiometricDataBlock.ta.mjs";
import { MinimumElementsBitOriented_format, _decode_MinimumElementsBitOriented_format, _encode_MinimumElementsBitOriented_format } from "../CBEFF-SIMPLE-BIT-ORIENTED/MinimumElementsBitOriented-format.ta.mjs";


/**
 * @summary MinimumElementsBitOriented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MinimumElementsBitOriented ::= SEQUENCE {
 *     / * This patron format contains only mandatory data elements
 *     and uses bit-level encoding for optimal use of encoding space.* /
 *     / * This patron format supports only the abstract values
 *     NO ENCRYPTION and NO INTEGRITY, which are encoded as zero length
 *     fields.* /
 *     format  SEQUENCE {
 *         owner   INTEGER (0..65535) DEFAULT 257,
 *         -- 257 is the biometric organization identifier of ISO/IEC JTC 1/SC 37
 *         type    INTEGER (0..63, ..., 64..65535)
 *     },
 *     bdb     BiometricDataBlock (SIZE(0..127, ..., 128..MAX))
 * }
 * ```
 * 
 * @class
 */
export
class MinimumElementsBitOriented {
    /**
     * @summary `format`.
     * @public
     * @readonly
     */
    readonly format: MinimumElementsBitOriented_format;
    /**
     * @summary `bdb`.
     * @public
     * @readonly
     */
    readonly bdb: BiometricDataBlock;

    constructor (
        format: MinimumElementsBitOriented_format,
        bdb: BiometricDataBlock
    ) {
        this.format = format;
        this.bdb = bdb;
    }

    /**
     * @summary Restructures an object into a MinimumElementsBitOriented
     * @description
     * 
     * This takes an `object` and converts it to a `MinimumElementsBitOriented`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MinimumElementsBitOriented`.
     * @returns {MinimumElementsBitOriented}
     */
    public static _from_object (_o: { [_K in keyof (MinimumElementsBitOriented)]: (MinimumElementsBitOriented)[_K] }): MinimumElementsBitOriented {
        return new MinimumElementsBitOriented(_o.format, _o.bdb);
    }


}

/**
 * @summary The Leading Root Component Types of MinimumElementsBitOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MinimumElementsBitOriented: $.ComponentSpec[] = [
    new $.ComponentSpec("format", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdb", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MinimumElementsBitOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MinimumElementsBitOriented: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MinimumElementsBitOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MinimumElementsBitOriented: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MinimumElementsBitOriented: $.ASN1Decoder<MinimumElementsBitOriented> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MinimumElementsBitOriented
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MinimumElementsBitOriented (el: _Element): MinimumElementsBitOriented {
    if (!_cached_decoder_for_MinimumElementsBitOriented) { _cached_decoder_for_MinimumElementsBitOriented = function (el: _Element): MinimumElementsBitOriented {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MinimumElementsBitOriented contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "format";
    sequence[1].name = "bdb";
    const format: MinimumElementsBitOriented_format = _decode_MinimumElementsBitOriented_format(sequence[0]);
    const bdb: BiometricDataBlock = _decode_BiometricDataBlock(sequence[1]);
    return new MinimumElementsBitOriented(
        format,
        bdb,

    );
}; }
    return _cached_decoder_for_MinimumElementsBitOriented(el);
}

let _cached_encoder_for_MinimumElementsBitOriented: $.ASN1Encoder<MinimumElementsBitOriented> | null = null;

/**
 * @summary Encodes a(n) MinimumElementsBitOriented into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MinimumElementsBitOriented, encoded as an ASN.1 Element.
 */
export
function _encode_MinimumElementsBitOriented (value: MinimumElementsBitOriented, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MinimumElementsBitOriented) { _cached_encoder_for_MinimumElementsBitOriented = function (value: MinimumElementsBitOriented, elGetter: $.ASN1Encoder<MinimumElementsBitOriented>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MinimumElementsBitOriented_format, $.BER)(value.format, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_BiometricDataBlock, $.BER)(value.bdb, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MinimumElementsBitOriented(value, elGetter);
}


/* eslint-enable */
