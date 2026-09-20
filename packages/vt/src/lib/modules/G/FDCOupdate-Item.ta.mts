/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { FDCOupdate_Item_status, _decode_FDCOupdate_Item_status, _encode_FDCOupdate_Item_status } from "../G/FDCOupdate-Item-status.ta.mjs";
import { FDCOupdate_Item_extent_Item, _decode_FDCOupdate_Item_extent_Item, _encode_FDCOupdate_Item_extent_Item } from "../G/FDCOupdate-Item-extent-Item.ta.mjs";
import { FDCOupdate_Item_attributes, _decode_FDCOupdate_Item_attributes, _encode_FDCOupdate_Item_attributes } from "../G/FDCOupdate-Item-attributes.ta.mjs";
import { FDCOupdate_Item_transmissionPolicy, _decode_FDCOupdate_Item_transmissionPolicy, _encode_FDCOupdate_Item_transmissionPolicy } from "../G/FDCOupdate-Item-transmissionPolicy.ta.mjs";
import { EntryControl, _decode_EntryControl, _encode_EntryControl } from "../G/EntryControl.ta.mjs";


/**
 * @summary FDCOupdate_Item
 * @description
 *
 * One FDR update, labelled by field (`f`) and optional `z`
 * coordinates. ISO/IEC 9040:1997 §14.2 a, §20.3.3; ISO/IEC
 * 9041-1:1997 §12.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDCOupdate-Item ::= SEQUENCE {
 *     labelFCoordinate    [0] IMPLICIT INTEGER,
 *     labelZCoordinate    [1] IMPLICIT INTEGER OPTIONAL,
 *     status              [2] IMPLICIT INTEGER {
 *         active   (0),
 *         inactive (1),
 *         void     (2)
 *     } OPTIONAL,
 *     extent              [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *         position  [0] IMPLICIT MeasurePair,
 *         dimension [1] IMPLICIT MeasurePair
 *     } OPTIONAL,
 *     attributes          [4] IMPLICIT SEQUENCE {
 *         graphicCharacterRepertoire [0] IMPLICIT INTEGER OPTIONAL,
 *         foregroundColour           [1] IMPLICIT INTEGER OPTIONAL,
 *         backgroundColour           [2] IMPLICIT INTEGER OPTIONAL,
 *         emphasis                   [3] IMPLICIT PrintableString OPTIONAL,
 *         font                       [4] IMPLICIT INTEGER OPTIONAL
 *         -- value of zero for any of the integer items in attributes implies the "null"value,
 *     } OPTIONAL,
 *     nextField           [5] IMPLICIT INTEGER OPTIONAL,
 *     previousField       [6] IMPLICIT INTEGER OPTIONAL,
 *     -- for tags 5 & 6, a zero value implies end of navigation path; a negative value implies "void"
 *     transmissionPolicy  [7] IMPLICIT INTEGER {
 *         all                (0),
 *         modifiedAllContent (1),
 *         modifiedPart       (2),
 *         none               (3),
 *         refTPCO            (4)
 *     } OPTIONAL,
 *     entryControlList    [8] IMPLICIT SEQUENCE OF EntryControl OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FDCOupdate_Item {
    constructor (
        /**
         * @summary `labelFCoordinate`.
         * @description
         * Field coordinate identifying the FDR. ISO/IEC 9041-1:1997
         * §12.2.2.
         * @public
         * @readonly
         */
        readonly labelFCoordinate: INTEGER,
        /**
         * @summary `labelZCoordinate`.
         * @description
         * Z coordinate of the FDR when VT-dimensions = three. ISO/IEC
         * 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly labelZCoordinate: OPTIONAL<INTEGER>,
        /**
         * @summary `status`.
         * @description
         * FDR status: active(0) / inactive(1) / void(2). ISO/IEC
         * 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly status: OPTIONAL<FDCOupdate_Item_status>,
        /**
         * @summary `extent`.
         * @description
         * Field-elements as position+dimension `MeasurePair`s. ISO/IEC
         * 9040:1997 §13.1.3; ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly extent: OPTIONAL<FDCOupdate_Item_extent_Item[]>,
        /**
         * @summary `attributes`.
         * @description
         * Repertoire, colours, emphasis, font. INTEGER 0 ⇒ `"null"`.
         * ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<FDCOupdate_Item_attributes>,
        /**
         * @summary `nextField`.
         * @description
         * Next field in the navigation path. 0 ⇒ end of path; negative
         * ⇒ `"void"`. ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly nextField: OPTIONAL<INTEGER>,
        /**
         * @summary `previousField`.
         * @description
         * Previous field in the navigation path. 0 ⇒ end of path;
         * negative ⇒ `"void"`. ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly previousField: OPTIONAL<INTEGER>,
        /**
         * @summary `transmissionPolicy`.
         * @description
         * How field contents are transmitted after data entry. ISO/IEC
         * 9040:1997 §3.3.68; ISO/IEC 9041-1:1997 §12.2.2.
         * @public
         * @readonly
         */
        readonly transmissionPolicy: OPTIONAL<FDCOupdate_Item_transmissionPolicy>,
        /**
         * @summary `entryControlList`.
         * @description
         * Absent ⇒ no change to the FDR's list; present-and-empty ⇒
         * discard the FDR's list. Non-empty: each `EntryControl` updates
         * the corresponding FDR entry-control. ISO/IEC 9041-1:1997
         * §12.2.2.
         * @public
         * @readonly
         */
        readonly entryControlList: OPTIONAL<EntryControl[]>
    ) {}

    /**
     * @summary Restructures an object into a FDCOupdate_Item
     * @description
     * 
     * This takes an `object` and converts it to a `FDCOupdate_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FDCOupdate_Item`.
     * @returns {FDCOupdate_Item}
     */
    public static _from_object (_o: { [_K in keyof (FDCOupdate_Item)]: (FDCOupdate_Item)[_K] }): FDCOupdate_Item {
        return new FDCOupdate_Item(_o.labelFCoordinate, _o.labelZCoordinate, _o.status, _o.extent, _o.attributes, _o.nextField, _o.previousField, _o.transmissionPolicy, _o.entryControlList);
    }


}

/**
 * @summary The Leading Root Component Types of FDCOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FDCOupdate_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("labelFCoordinate", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("labelZCoordinate", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extent", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nextField", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("previousField", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("transmissionPolicy", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("entryControlList", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of FDCOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FDCOupdate_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FDCOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FDCOupdate_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FDCOupdate_Item: $.ASN1Decoder<FDCOupdate_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FDCOupdate_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FDCOupdate_Item (el: _Element): FDCOupdate_Item {
    if (!_cached_decoder_for_FDCOupdate_Item) { _cached_decoder_for_FDCOupdate_Item = function (el: _Element): FDCOupdate_Item {
    let labelFCoordinate!: INTEGER;
    let labelZCoordinate: OPTIONAL<INTEGER>;
    let status: OPTIONAL<FDCOupdate_Item_status>;
    let extent: OPTIONAL<FDCOupdate_Item_extent_Item[]>;
    let attributes: OPTIONAL<FDCOupdate_Item_attributes>;
    let nextField: OPTIONAL<INTEGER>;
    let previousField: OPTIONAL<INTEGER>;
    let transmissionPolicy: OPTIONAL<FDCOupdate_Item_transmissionPolicy>;
    let entryControlList: OPTIONAL<EntryControl[]>;
    const callbacks: $.DecodingMap = {
        "labelFCoordinate": (_el: _Element): void => { labelFCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "labelZCoordinate": (_el: _Element): void => { labelZCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<FDCOupdate_Item_status>(() => _decode_FDCOupdate_Item_status)(_el); },
        "extent": (_el: _Element): void => { extent = $._decode_implicit<FDCOupdate_Item_extent_Item[]>(() => $._decodeSequenceOf<FDCOupdate_Item_extent_Item>(() => _decode_FDCOupdate_Item_extent_Item))(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<FDCOupdate_Item_attributes>(() => _decode_FDCOupdate_Item_attributes)(_el); },
        "nextField": (_el: _Element): void => { nextField = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "previousField": (_el: _Element): void => { previousField = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "transmissionPolicy": (_el: _Element): void => { transmissionPolicy = $._decode_implicit<FDCOupdate_Item_transmissionPolicy>(() => _decode_FDCOupdate_Item_transmissionPolicy)(_el); },
        "entryControlList": (_el: _Element): void => { entryControlList = $._decode_implicit<EntryControl[]>(() => $._decodeSequenceOf<EntryControl>(() => _decode_EntryControl))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FDCOupdate_Item,
        _extension_additions_list_spec_for_FDCOupdate_Item,
        _root_component_type_list_2_spec_for_FDCOupdate_Item,
        undefined,
    );
    return new FDCOupdate_Item(
        labelFCoordinate,
        labelZCoordinate,
        status,
        extent,
        attributes,
        nextField,
        previousField,
        transmissionPolicy,
        entryControlList
    );
}; }
    return _cached_decoder_for_FDCOupdate_Item(el);
}

let _cached_encoder_for_FDCOupdate_Item: $.ASN1Encoder<FDCOupdate_Item> | null = null;

/**
 * @summary Encodes a(n) FDCOupdate_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDCOupdate_Item, encoded as an ASN.1 Element.
 */
export
function _encode_FDCOupdate_Item (value: FDCOupdate_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FDCOupdate_Item) { _cached_encoder_for_FDCOupdate_Item = function (value: FDCOupdate_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.labelFCoordinate, $.BER),
            /* IF_ABSENT  */ ((value.labelZCoordinate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.labelZCoordinate, $.BER)),
            /* IF_ABSENT  */ ((value.status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_FDCOupdate_Item_status, $.BER)(value.status, $.BER)),
            /* IF_ABSENT  */ ((value.extent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<FDCOupdate_Item_extent_Item>(() => _encode_FDCOupdate_Item_extent_Item, $.BER), $.BER)(value.extent, $.BER)),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_FDCOupdate_Item_attributes, $.BER)(value.attributes, $.BER)),
            /* IF_ABSENT  */ ((value.nextField === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.nextField, $.BER)),
            /* IF_ABSENT  */ ((value.previousField === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.previousField, $.BER)),
            /* IF_ABSENT  */ ((value.transmissionPolicy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_FDCOupdate_Item_transmissionPolicy, $.BER)(value.transmissionPolicy, $.BER)),
            /* IF_ABSENT  */ ((value.entryControlList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<EntryControl>(() => _encode_EntryControl, $.BER), $.BER)(value.entryControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FDCOupdate_Item(value, elGetter);
}


/* eslint-enable */
