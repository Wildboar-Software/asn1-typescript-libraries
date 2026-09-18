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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EXQcontent_profile_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXQcontent-profile-Item ::= SEQUENCE {
 *     ptag INTEGER,
 *     pvalue OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class EXQcontent_profile_Item {
    constructor (
        /**
         * @summary `ptag`.
         * @public
         * @readonly
         */
        readonly ptag: INTEGER,
        /**
         * @summary `pvalue`.
         * @public
         * @readonly
         */
        readonly pvalue: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EXQcontent_profile_Item
     * @description
     * 
     * This takes an `object` and converts it to a `EXQcontent_profile_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EXQcontent_profile_Item`.
     * @returns {EXQcontent_profile_Item}
     */
    public static _from_object (_o: { [_K in keyof (EXQcontent_profile_Item)]: (EXQcontent_profile_Item)[_K] }): EXQcontent_profile_Item {
        return new EXQcontent_profile_Item(_o.ptag, _o.pvalue);
    }


}

/**
 * @summary The Leading Root Component Types of EXQcontent_profile_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EXQcontent_profile_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("ptag", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("pvalue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of EXQcontent_profile_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EXQcontent_profile_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EXQcontent_profile_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EXQcontent_profile_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EXQcontent_profile_Item: $.ASN1Decoder<EXQcontent_profile_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EXQcontent_profile_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EXQcontent_profile_Item (el: _Element): EXQcontent_profile_Item {
    if (!_cached_decoder_for_EXQcontent_profile_Item) { _cached_decoder_for_EXQcontent_profile_Item = function (el: _Element): EXQcontent_profile_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EXQcontent-profile-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ptag";
    sequence[1].name = "pvalue";
    const ptag: INTEGER = $._decodeInteger(sequence[0]);
    const pvalue: OCTET_STRING = $._decodeOctetString(sequence[1]);
    return new EXQcontent_profile_Item(
        ptag,
        pvalue,

    );
}; }
    return _cached_decoder_for_EXQcontent_profile_Item(el);
}

let _cached_encoder_for_EXQcontent_profile_Item: $.ASN1Encoder<EXQcontent_profile_Item> | null = null;

/**
 * @summary Encodes a(n) EXQcontent_profile_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EXQcontent_profile_Item, encoded as an ASN.1 Element.
 */
export
function _encode_EXQcontent_profile_Item (value: EXQcontent_profile_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EXQcontent_profile_Item) { _cached_encoder_for_EXQcontent_profile_Item = function (value: EXQcontent_profile_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.ptag, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.pvalue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EXQcontent_profile_Item(value, elGetter);
}


/* eslint-enable */
