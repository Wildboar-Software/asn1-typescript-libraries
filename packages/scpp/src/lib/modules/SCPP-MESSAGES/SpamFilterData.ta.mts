/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpamFilterData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpamFilterData ::= SEQUENCE {
 *   filterID    INTEGER(0..128),
 *   filterData  OCTET STRING,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SpamFilterData {
    constructor (
        /**
         * @summary `filterID`.
         * @public
         * @readonly
         */
        readonly filterID: INTEGER,
        /**
         * @summary `filterData`.
         * @public
         * @readonly
         */
        readonly filterData: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        const _n = typeof this.filterID === "bigint" ? Number(this.filterID) : this.filterID;
        if (_n < 0 || _n > 128) {
            throw new ASN1OverflowError("SpamFilterData.filterID violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a SpamFilterData
     * @description
     * 
     * This takes an `object` and converts it to a `SpamFilterData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpamFilterData`.
     * @returns {SpamFilterData}
     */
    public static _from_object (_o: { [_K in keyof (SpamFilterData)]: (SpamFilterData)[_K] }): SpamFilterData {
        return new SpamFilterData(_o.filterID, _o.filterData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SpamFilterData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpamFilterData: $.ComponentSpec[] = [
    new $.ComponentSpec("filterID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("filterData", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SpamFilterData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpamFilterData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpamFilterData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpamFilterData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpamFilterData: $.ASN1Decoder<SpamFilterData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpamFilterData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpamFilterData (el: _Element): SpamFilterData {
    if (!_cached_decoder_for_SpamFilterData) { _cached_decoder_for_SpamFilterData = function (el: _Element): SpamFilterData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SpamFilterData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "filterID";
    sequence[1].name = "filterData";
    const filterID = $._decodeInteger(sequence[0]);
    const filterData = $._decodeOctetString(sequence[1]);
    return new SpamFilterData(
        filterID,
        filterData,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_SpamFilterData(el);
}

let _cached_encoder_for_SpamFilterData: $.ASN1Encoder<SpamFilterData> | null = null;

/**
 * @summary Encodes a(n) SpamFilterData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpamFilterData, encoded as an ASN.1 Element.
 */
export
function _encode_SpamFilterData (value: SpamFilterData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpamFilterData) { _cached_encoder_for_SpamFilterData = function (value: SpamFilterData): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.filterID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.filterData, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpamFilterData(value, elGetter);
}


/* eslint-enable */
