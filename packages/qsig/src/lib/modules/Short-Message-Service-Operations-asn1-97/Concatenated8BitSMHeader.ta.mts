/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Concatenated8BitSMHeader
 * @description
 *
 * Segments a message that does not fit in one Short Message, using an 8-bit
 * reference (ECMA-325 §E.1.3.1.2). The receiver ignores the whole header when
 * the maximum is 0, or when the sequence number is 0 or greater than the
 * maximum.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Concatenated8BitSMHeader ::= SEQUENCE {
 *     concatenated8BitSMReferenceNumber INTEGER (0..255),
 *     maximumNumberOf8BitSMInConcatenatedSM INTEGER (0..255),
 *     sequenceNumberOf8BitSM INTEGER (0..255)
 * }
 * ```
 * 
 * @class
 */
export
class Concatenated8BitSMHeader {
    /**
     * @summary `concatenated8BitSMReferenceNumber`.
     * @description
     *
     * Identifies one concatenated Short Message and stays constant on every
     * segment. §E.1.3.1.2 calls it a modulo-255 counter. The ASN.1 range is
     * 0..255 (ECMA-325 §E.1.3.1.2).
     * @public
     * @readonly
     */
    readonly concatenated8BitSMReferenceNumber: INTEGER;
    /**
     * @summary `maximumNumberOf8BitSMInConcatenatedSM`.
     * @description
     *
     * How many Short Messages make up the concatenated message. Starts at 1 and
     * stays constant. Zero means the receiver ignores this whole header
     * (ECMA-325 §E.1.3.1.2).
     * @public
     * @readonly
     */
    readonly maximumNumberOf8BitSMInConcatenatedSM: INTEGER;
    /**
     * @summary `sequenceNumberOf8BitSM`.
     * @description
     *
     * This segment's position. Starts at 1 and increases by one. Zero, or a
     * value above the maximum, means the receiver ignores this whole header
     * (ECMA-325 §E.1.3.1.2).
     * @public
     * @readonly
     */
    readonly sequenceNumberOf8BitSM: INTEGER;

    constructor (
        concatenated8BitSMReferenceNumber: INTEGER,
        maximumNumberOf8BitSMInConcatenatedSM: INTEGER,
        sequenceNumberOf8BitSM: INTEGER
    ) {
        this.concatenated8BitSMReferenceNumber = concatenated8BitSMReferenceNumber;
        this.maximumNumberOf8BitSMInConcatenatedSM = maximumNumberOf8BitSMInConcatenatedSM;
        this.sequenceNumberOf8BitSM = sequenceNumberOf8BitSM;
    
        if ((typeof concatenated8BitSMReferenceNumber === "bigint" ? (concatenated8BitSMReferenceNumber < 0n || concatenated8BitSMReferenceNumber > 255n) : (concatenated8BitSMReferenceNumber < 0 || concatenated8BitSMReferenceNumber > 255))) {
            throw new ASN1OverflowError("Concatenated8BitSMHeader.concatenated8BitSMReferenceNumber violates INTEGER constraint");
        }
        if ((typeof maximumNumberOf8BitSMInConcatenatedSM === "bigint" ? (maximumNumberOf8BitSMInConcatenatedSM < 0n || maximumNumberOf8BitSMInConcatenatedSM > 255n) : (maximumNumberOf8BitSMInConcatenatedSM < 0 || maximumNumberOf8BitSMInConcatenatedSM > 255))) {
            throw new ASN1OverflowError("Concatenated8BitSMHeader.maximumNumberOf8BitSMInConcatenatedSM violates INTEGER constraint");
        }
        if ((typeof sequenceNumberOf8BitSM === "bigint" ? (sequenceNumberOf8BitSM < 0n || sequenceNumberOf8BitSM > 255n) : (sequenceNumberOf8BitSM < 0 || sequenceNumberOf8BitSM > 255))) {
            throw new ASN1OverflowError("Concatenated8BitSMHeader.sequenceNumberOf8BitSM violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a Concatenated8BitSMHeader
     * @description
     * 
     * This takes an `object` and converts it to a `Concatenated8BitSMHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Concatenated8BitSMHeader`.
     * @returns {Concatenated8BitSMHeader}
     */
    public static _from_object (_o: { [_K in keyof (Concatenated8BitSMHeader)]: (Concatenated8BitSMHeader)[_K] }): Concatenated8BitSMHeader {
        return new Concatenated8BitSMHeader(_o.concatenated8BitSMReferenceNumber, _o.maximumNumberOf8BitSMInConcatenatedSM, _o.sequenceNumberOf8BitSM);
    }

}

/**
 * @summary The Leading Root Component Types of Concatenated8BitSMHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Concatenated8BitSMHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("concatenated8BitSMReferenceNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maximumNumberOf8BitSMInConcatenatedSM", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sequenceNumberOf8BitSM", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Concatenated8BitSMHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Concatenated8BitSMHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Concatenated8BitSMHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Concatenated8BitSMHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Concatenated8BitSMHeader: $.ASN1Decoder<Concatenated8BitSMHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Concatenated8BitSMHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Concatenated8BitSMHeader (el: _Element): Concatenated8BitSMHeader {
    if (!_cached_decoder_for_Concatenated8BitSMHeader) { _cached_decoder_for_Concatenated8BitSMHeader = function (el: _Element): Concatenated8BitSMHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Concatenated8BitSMHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "concatenated8BitSMReferenceNumber";
    sequence[1].name = "maximumNumberOf8BitSMInConcatenatedSM";
    sequence[2].name = "sequenceNumberOf8BitSM";
    const concatenated8BitSMReferenceNumber: INTEGER = $._decodeInteger(sequence[0]);
    const maximumNumberOf8BitSMInConcatenatedSM: INTEGER = $._decodeInteger(sequence[1]);
    const sequenceNumberOf8BitSM: INTEGER = $._decodeInteger(sequence[2]);
    return new Concatenated8BitSMHeader(
        concatenated8BitSMReferenceNumber,
        maximumNumberOf8BitSMInConcatenatedSM,
        sequenceNumberOf8BitSM,

    );
}; }
    return _cached_decoder_for_Concatenated8BitSMHeader(el);
}

let _cached_encoder_for_Concatenated8BitSMHeader: $.ASN1Encoder<Concatenated8BitSMHeader> | null = null;

/**
 * @summary Encodes a(n) Concatenated8BitSMHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Concatenated8BitSMHeader, encoded as an ASN.1 Element.
 */
export
function _encode_Concatenated8BitSMHeader (value: Concatenated8BitSMHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Concatenated8BitSMHeader) { _cached_encoder_for_Concatenated8BitSMHeader = function (value: Concatenated8BitSMHeader, _elGetter: $.ASN1Encoder<Concatenated8BitSMHeader>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.concatenated8BitSMReferenceNumber, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.maximumNumberOf8BitSMInConcatenatedSM, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.sequenceNumberOf8BitSM, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Concatenated8BitSMHeader(value, elGetter);
}

/* eslint-enable */
