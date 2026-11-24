/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BiometricDataBlock, _decode_BiometricDataBlock, _encode_BiometricDataBlock } from "../CBEFF-DATA-ELEMENTS/BiometricDataBlock.ta.mjs";
import { MinimumElementsByteOriented_format, _decode_MinimumElementsByteOriented_format, _encode_MinimumElementsByteOriented_format } from "../CBEFF-SIMPLE-BYTE-ORIENTED/MinimumElementsByteOriented-format.ta.mjs";


/**
 * @summary MinimumElementsByteOriented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MinimumElementsByteOriented ::= SEQUENCE {
 *     -- This patron format contains only mandatory data elements
 *     -- and uses byte-level encoding.
 *     -- This patron format supports only the abstract values
 *     -- NO ENCRYPTION and NO INTEGRITY, which are encoded as zero
 *     -- length fields.
 *     format  SEQUENCE {
 *         owner   INTEGER (1..65535) DEFAULT 257,
 *         -- 257 is the biometric organization identifier of ISO/IEC JTC 1/SC 37
 *         type    INTEGER (1..63, ..., 64..65535)
 *     },
 *     bdb     BiometricDataBlock (SIZE(0..127, ..., 128..MAX))
 * }
 * ```
 * 
 * @class
 */
export
class MinimumElementsByteOriented {
    /**
     * @summary `format`.
     * @public
     * @readonly
     */
    readonly format: MinimumElementsByteOriented_format;
    /**
     * @summary `bdb`.
     * @public
     * @readonly
     */
    readonly bdb: BiometricDataBlock;

    constructor (
        format: MinimumElementsByteOriented_format,
        bdb: BiometricDataBlock
    ) {
        this.format = format;
        this.bdb = bdb;
    }

    /**
     * @summary Restructures an object into a MinimumElementsByteOriented
     * @description
     * 
     * This takes an `object` and converts it to a `MinimumElementsByteOriented`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MinimumElementsByteOriented`.
     * @returns {MinimumElementsByteOriented}
     */
    public static _from_object (_o: { [_K in keyof (MinimumElementsByteOriented)]: (MinimumElementsByteOriented)[_K] }): MinimumElementsByteOriented {
        return new MinimumElementsByteOriented(_o.format, _o.bdb);
    }


}

/**
 * @summary The Leading Root Component Types of MinimumElementsByteOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MinimumElementsByteOriented: $.ComponentSpec[] = [
    new $.ComponentSpec("format", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdb", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MinimumElementsByteOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MinimumElementsByteOriented: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MinimumElementsByteOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MinimumElementsByteOriented: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MinimumElementsByteOriented: $.ASN1Decoder<MinimumElementsByteOriented> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MinimumElementsByteOriented
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MinimumElementsByteOriented (el: _Element): MinimumElementsByteOriented {
    if (!_cached_decoder_for_MinimumElementsByteOriented) { _cached_decoder_for_MinimumElementsByteOriented = function (el: _Element): MinimumElementsByteOriented {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MinimumElementsByteOriented contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "format";
    sequence[1].name = "bdb";
    const format: MinimumElementsByteOriented_format = _decode_MinimumElementsByteOriented_format(sequence[0]);
    const bdb: BiometricDataBlock = _decode_BiometricDataBlock(sequence[1]);
    return new MinimumElementsByteOriented(
        format,
        bdb,

    );
}; }
    return _cached_decoder_for_MinimumElementsByteOriented(el);
}

let _cached_encoder_for_MinimumElementsByteOriented: $.ASN1Encoder<MinimumElementsByteOriented> | null = null;

/**
 * @summary Encodes a(n) MinimumElementsByteOriented into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MinimumElementsByteOriented, encoded as an ASN.1 Element.
 */
export
function _encode_MinimumElementsByteOriented (value: MinimumElementsByteOriented, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MinimumElementsByteOriented) { _cached_encoder_for_MinimumElementsByteOriented = function (value: MinimumElementsByteOriented, elGetter: $.ASN1Encoder<MinimumElementsByteOriented>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MinimumElementsByteOriented_format, $.BER)(value.format, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_BiometricDataBlock, $.BER)(value.bdb, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MinimumElementsByteOriented(value, elGetter);
}


/* eslint-enable */
