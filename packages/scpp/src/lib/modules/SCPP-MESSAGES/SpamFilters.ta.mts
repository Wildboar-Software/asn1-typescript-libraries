/* eslint-disable */
import {
    INTEGER,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpamFilters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpamFilters ::= SEQUENCE {
 *   filterID    INTEGER(0..128),
 *   filterName  IA5String(SIZE (1..512))
 * }
 * ```
 * 
 * @class
 */
export
class SpamFilters {
    constructor (
        /**
         * @summary `filterID`.
         * @public
         * @readonly
         */
        readonly filterID: INTEGER,
        /**
         * @summary `filterName`.
         * @public
         * @readonly
         */
        readonly filterName: IA5String
    ) {
        const _n = typeof this.filterID === "bigint" ? Number(this.filterID) : this.filterID;
        if (_n < 0 || _n > 128) {
            throw new ASN1OverflowError("SpamFilters.filterID violates INTEGER range");
        }
        if (this.filterName.length < 1 || this.filterName.length > 512) {
            throw new ASN1SizeError("SpamFilters.filterName violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SpamFilters
     * @description
     * 
     * This takes an `object` and converts it to a `SpamFilters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpamFilters`.
     * @returns {SpamFilters}
     */
    public static _from_object (_o: { [_K in keyof (SpamFilters)]: (SpamFilters)[_K] }): SpamFilters {
        return new SpamFilters(_o.filterID, _o.filterName);
    }


}

/**
 * @summary The Leading Root Component Types of SpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpamFilters: $.ComponentSpec[] = [
    new $.ComponentSpec("filterID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("filterName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpamFilters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpamFilters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpamFilters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpamFilters: $.ASN1Decoder<SpamFilters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpamFilters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpamFilters (el: _Element): SpamFilters {
    if (!_cached_decoder_for_SpamFilters) { _cached_decoder_for_SpamFilters = function (el: _Element): SpamFilters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SpamFilters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "filterID";
    sequence[1].name = "filterName";
    const filterID = $._decodeInteger(sequence[0]);
    const filterName = $._decodeIA5String(sequence[1]);
    return new SpamFilters(
        filterID,
        filterName,

    );
}; }
    return _cached_decoder_for_SpamFilters(el);
}

let _cached_encoder_for_SpamFilters: $.ASN1Encoder<SpamFilters> | null = null;

/**
 * @summary Encodes a(n) SpamFilters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpamFilters, encoded as an ASN.1 Element.
 */
export
function _encode_SpamFilters (value: SpamFilters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpamFilters) { _cached_encoder_for_SpamFilters = function (value: SpamFilters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.filterID, $.BER),
            /* REQUIRED   */ $._encodeIA5String(value.filterName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpamFilters(value, elGetter);
}


/* eslint-enable */
