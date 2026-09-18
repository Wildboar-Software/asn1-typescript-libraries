/* eslint-disable */
import {
    INTEGER,
    PrintableString,
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
 * @summary EntryControl_feprList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryControl-feprList-Item ::= SEQUENCE {
 *     fepcoName PrintableString,
 *     recordIndex INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class EntryControl_feprList_Item {
    constructor (
        /**
         * @summary `fepcoName`.
         * @public
         * @readonly
         */
        readonly fepcoName: PrintableString,
        /**
         * @summary `recordIndex`.
         * @public
         * @readonly
         */
        readonly recordIndex: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a EntryControl_feprList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `EntryControl_feprList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryControl_feprList_Item`.
     * @returns {EntryControl_feprList_Item}
     */
    public static _from_object (_o: { [_K in keyof (EntryControl_feprList_Item)]: (EntryControl_feprList_Item)[_K] }): EntryControl_feprList_Item {
        return new EntryControl_feprList_Item(_o.fepcoName, _o.recordIndex);
    }


}

/**
 * @summary The Leading Root Component Types of EntryControl_feprList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryControl_feprList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("fepcoName", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("recordIndex", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of EntryControl_feprList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryControl_feprList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryControl_feprList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryControl_feprList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryControl_feprList_Item: $.ASN1Decoder<EntryControl_feprList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryControl_feprList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryControl_feprList_Item (el: _Element): EntryControl_feprList_Item {
    if (!_cached_decoder_for_EntryControl_feprList_Item) { _cached_decoder_for_EntryControl_feprList_Item = function (el: _Element): EntryControl_feprList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EntryControl-feprList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fepcoName";
    sequence[1].name = "recordIndex";
    let fepcoName!: PrintableString;
    let recordIndex!: INTEGER;
    fepcoName = $._decodePrintableString(sequence[0]);
    recordIndex = $._decodeInteger(sequence[1]);
    return new EntryControl_feprList_Item(
        fepcoName,
        recordIndex,

    );
}; }
    return _cached_decoder_for_EntryControl_feprList_Item(el);
}

let _cached_encoder_for_EntryControl_feprList_Item: $.ASN1Encoder<EntryControl_feprList_Item> | null = null;

/**
 * @summary Encodes a(n) EntryControl_feprList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryControl_feprList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_EntryControl_feprList_Item (value: EntryControl_feprList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryControl_feprList_Item) { _cached_encoder_for_EntryControl_feprList_Item = function (value: EntryControl_feprList_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.fepcoName, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.recordIndex, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryControl_feprList_Item(value, elGetter);
}


/* eslint-enable */
