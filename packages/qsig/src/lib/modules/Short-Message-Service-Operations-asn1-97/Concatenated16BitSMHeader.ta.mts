/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Concatenated16BitSMHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Concatenated16BitSMHeader ::= SEQUENCE {
 *     concatenated16BitSMReferenceNumber INTEGER (0..65536),
 *     maximumNumberOf16BitSMInConcatenatedSM INTEGER (0..255),
 *     sequenceNumberOf16BitSM INTEGER (0..255)
 * }
 * ```
 * 
 * @class
 */
export
class Concatenated16BitSMHeader {
    /**
     * @summary `concatenated16BitSMReferenceNumber`.
     * @public
     * @readonly
     */
    readonly concatenated16BitSMReferenceNumber: INTEGER;
    /**
     * @summary `maximumNumberOf16BitSMInConcatenatedSM`.
     * @public
     * @readonly
     */
    readonly maximumNumberOf16BitSMInConcatenatedSM: INTEGER;
    /**
     * @summary `sequenceNumberOf16BitSM`.
     * @public
     * @readonly
     */
    readonly sequenceNumberOf16BitSM: INTEGER;

    constructor (
        concatenated16BitSMReferenceNumber: INTEGER,
        maximumNumberOf16BitSMInConcatenatedSM: INTEGER,
        sequenceNumberOf16BitSM: INTEGER
    ) {
        this.concatenated16BitSMReferenceNumber = concatenated16BitSMReferenceNumber;
        this.maximumNumberOf16BitSMInConcatenatedSM = maximumNumberOf16BitSMInConcatenatedSM;
        this.sequenceNumberOf16BitSM = sequenceNumberOf16BitSM;
    
        if ((typeof concatenated16BitSMReferenceNumber === "bigint" ? (concatenated16BitSMReferenceNumber < 0n || concatenated16BitSMReferenceNumber > 65536n) : (concatenated16BitSMReferenceNumber < 0 || concatenated16BitSMReferenceNumber > 65536))) {
            throw new ASN1OverflowError("Concatenated16BitSMHeader.concatenated16BitSMReferenceNumber violates INTEGER constraint");
        }
        if ((typeof maximumNumberOf16BitSMInConcatenatedSM === "bigint" ? (maximumNumberOf16BitSMInConcatenatedSM < 0n || maximumNumberOf16BitSMInConcatenatedSM > 255n) : (maximumNumberOf16BitSMInConcatenatedSM < 0 || maximumNumberOf16BitSMInConcatenatedSM > 255))) {
            throw new ASN1OverflowError("Concatenated16BitSMHeader.maximumNumberOf16BitSMInConcatenatedSM violates INTEGER constraint");
        }
        if ((typeof sequenceNumberOf16BitSM === "bigint" ? (sequenceNumberOf16BitSM < 0n || sequenceNumberOf16BitSM > 255n) : (sequenceNumberOf16BitSM < 0 || sequenceNumberOf16BitSM > 255))) {
            throw new ASN1OverflowError("Concatenated16BitSMHeader.sequenceNumberOf16BitSM violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a Concatenated16BitSMHeader
     * @description
     * 
     * This takes an `object` and converts it to a `Concatenated16BitSMHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Concatenated16BitSMHeader`.
     * @returns {Concatenated16BitSMHeader}
     */
    public static _from_object (_o: { [_K in keyof (Concatenated16BitSMHeader)]: (Concatenated16BitSMHeader)[_K] }): Concatenated16BitSMHeader {
        return new Concatenated16BitSMHeader(_o.concatenated16BitSMReferenceNumber, _o.maximumNumberOf16BitSMInConcatenatedSM, _o.sequenceNumberOf16BitSM);
    }


}

/**
 * @summary The Leading Root Component Types of Concatenated16BitSMHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Concatenated16BitSMHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("concatenated16BitSMReferenceNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("maximumNumberOf16BitSMInConcatenatedSM", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sequenceNumberOf16BitSM", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Concatenated16BitSMHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Concatenated16BitSMHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Concatenated16BitSMHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Concatenated16BitSMHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Concatenated16BitSMHeader: $.ASN1Decoder<Concatenated16BitSMHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Concatenated16BitSMHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Concatenated16BitSMHeader (el: _Element): Concatenated16BitSMHeader {
    if (!_cached_decoder_for_Concatenated16BitSMHeader) { _cached_decoder_for_Concatenated16BitSMHeader = function (el: _Element): Concatenated16BitSMHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Concatenated16BitSMHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "concatenated16BitSMReferenceNumber";
    sequence[1].name = "maximumNumberOf16BitSMInConcatenatedSM";
    sequence[2].name = "sequenceNumberOf16BitSM";
    let concatenated16BitSMReferenceNumber!: INTEGER;
    let maximumNumberOf16BitSMInConcatenatedSM!: INTEGER;
    let sequenceNumberOf16BitSM!: INTEGER;
    concatenated16BitSMReferenceNumber = $._decodeInteger(sequence[0]);
    maximumNumberOf16BitSMInConcatenatedSM = $._decodeInteger(sequence[1]);
    sequenceNumberOf16BitSM = $._decodeInteger(sequence[2]);
    return new Concatenated16BitSMHeader(
        concatenated16BitSMReferenceNumber,
        maximumNumberOf16BitSMInConcatenatedSM,
        sequenceNumberOf16BitSM,

    );
}; }
    return _cached_decoder_for_Concatenated16BitSMHeader(el);
}

let _cached_encoder_for_Concatenated16BitSMHeader: $.ASN1Encoder<Concatenated16BitSMHeader> | null = null;

/**
 * @summary Encodes a(n) Concatenated16BitSMHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Concatenated16BitSMHeader, encoded as an ASN.1 Element.
 */
export
function _encode_Concatenated16BitSMHeader (value: Concatenated16BitSMHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Concatenated16BitSMHeader) { _cached_encoder_for_Concatenated16BitSMHeader = function (value: Concatenated16BitSMHeader, elGetter: $.ASN1Encoder<Concatenated16BitSMHeader>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.concatenated16BitSMReferenceNumber, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.maximumNumberOf16BitSMInConcatenatedSM, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.sequenceNumberOf16BitSM, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_Concatenated16BitSMHeader(value, elGetter);
}


/* eslint-enable */
