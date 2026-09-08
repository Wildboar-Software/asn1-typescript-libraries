/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TerminalRDNRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalRDNRange ::= SEQUENCE {
 *   attributeId         OBJECT IDENTIFIER,
 *   firstObjectInRange  INTEGER,
 *   lastObjectInRange   INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class TerminalRDNRange {
    constructor (
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: OBJECT_IDENTIFIER,
        /**
         * @summary `firstObjectInRange`.
         * @public
         * @readonly
         */
        readonly firstObjectInRange: INTEGER,
        /**
         * @summary `lastObjectInRange`.
         * @public
         * @readonly
         */
        readonly lastObjectInRange: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a TerminalRDNRange
     * @description
     * 
     * This takes an `object` and converts it to a `TerminalRDNRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminalRDNRange`.
     * @returns {TerminalRDNRange}
     */
    public static _from_object (_o: { [_K in keyof (TerminalRDNRange)]: (TerminalRDNRange)[_K] }): TerminalRDNRange {
        return new TerminalRDNRange(_o.attributeId, _o.firstObjectInRange, _o.lastObjectInRange);
    }


}

/**
 * @summary The Leading Root Component Types of TerminalRDNRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminalRDNRange: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("firstObjectInRange", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastObjectInRange", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TerminalRDNRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminalRDNRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminalRDNRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminalRDNRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminalRDNRange: $.ASN1Decoder<TerminalRDNRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalRDNRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminalRDNRange (el: _Element): TerminalRDNRange {
    if (!_cached_decoder_for_TerminalRDNRange) { _cached_decoder_for_TerminalRDNRange = function (el: _Element): TerminalRDNRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TerminalRDNRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributeId";
    sequence[1].name = "firstObjectInRange";
    sequence[2].name = "lastObjectInRange";
    let attributeId!: OBJECT_IDENTIFIER;
    let firstObjectInRange!: INTEGER;
    let lastObjectInRange!: INTEGER;
    attributeId = $._decodeObjectIdentifier(sequence[0]);
    firstObjectInRange = $._decodeInteger(sequence[1]);
    lastObjectInRange = $._decodeInteger(sequence[2]);
    return new TerminalRDNRange(
        attributeId,
        firstObjectInRange,
        lastObjectInRange,

    );
}; }
    return _cached_decoder_for_TerminalRDNRange(el);
}

let _cached_encoder_for_TerminalRDNRange: $.ASN1Encoder<TerminalRDNRange> | null = null;

/**
 * @summary Encodes a(n) TerminalRDNRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalRDNRange, encoded as an ASN.1 Element.
 */
export
function _encode_TerminalRDNRange (value: TerminalRDNRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminalRDNRange) { _cached_encoder_for_TerminalRDNRange = function (value: TerminalRDNRange, elGetter: $.ASN1Encoder<TerminalRDNRange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.attributeId, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.firstObjectInRange, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.lastObjectInRange, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminalRDNRange(value, elGetter);
}


/* eslint-enable */
