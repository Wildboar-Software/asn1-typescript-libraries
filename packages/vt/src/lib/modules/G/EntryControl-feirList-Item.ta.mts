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
 * @summary EntryControl_feirList_Item
 * @description
 *
 * Reference to one Field Entry Instruction Record in a named FEICO.
 * ISO/IEC 9040:1997 §3.3.62; ISO/IEC 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryControl-feirList-Item ::= SEQUENCE {
 *     feicoName PrintableString,
 *     recordIndex INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class EntryControl_feirList_Item {
    constructor (
        /**
         * @summary `feicoName`.
         * @description
         * Name of the Field Entry Instruction Control Object. ISO/IEC
         * 9040:1997 §3.3.60.
         * @public
         * @readonly
         */
        readonly feicoName: PrintableString,
        /**
         * @summary `recordIndex`.
         * @description
         * Index of the FEIR within that FEICO. ISO/IEC 9040:1997
         * §3.3.62.
         * @public
         * @readonly
         */
        readonly recordIndex: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a EntryControl_feirList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `EntryControl_feirList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryControl_feirList_Item`.
     * @returns {EntryControl_feirList_Item}
     */
    public static _from_object (_o: { [_K in keyof (EntryControl_feirList_Item)]: (EntryControl_feirList_Item)[_K] }): EntryControl_feirList_Item {
        return new EntryControl_feirList_Item(_o.feicoName, _o.recordIndex);
    }


}

/**
 * @summary The Leading Root Component Types of EntryControl_feirList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryControl_feirList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("feicoName", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("recordIndex", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of EntryControl_feirList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryControl_feirList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryControl_feirList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryControl_feirList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryControl_feirList_Item: $.ASN1Decoder<EntryControl_feirList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryControl_feirList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryControl_feirList_Item (el: _Element): EntryControl_feirList_Item {
    if (!_cached_decoder_for_EntryControl_feirList_Item) { _cached_decoder_for_EntryControl_feirList_Item = function (el: _Element): EntryControl_feirList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EntryControl-feirList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "feicoName";
    sequence[1].name = "recordIndex";
    const feicoName: PrintableString = $._decodePrintableString(sequence[0]);
    const recordIndex: INTEGER = $._decodeInteger(sequence[1]);
    return new EntryControl_feirList_Item(
        feicoName,
        recordIndex,

    );
}; }
    return _cached_decoder_for_EntryControl_feirList_Item(el);
}

let _cached_encoder_for_EntryControl_feirList_Item: $.ASN1Encoder<EntryControl_feirList_Item> | null = null;

/**
 * @summary Encodes a(n) EntryControl_feirList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryControl_feirList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_EntryControl_feirList_Item (value: EntryControl_feirList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryControl_feirList_Item) { _cached_encoder_for_EntryControl_feirList_Item = function (value: EntryControl_feirList_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.feicoName, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.recordIndex, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryControl_feirList_Item(value, elGetter);
}


/* eslint-enable */
