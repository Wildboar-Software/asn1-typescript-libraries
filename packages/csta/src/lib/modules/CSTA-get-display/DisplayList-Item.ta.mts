/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";

import {
    CharacterSet,
    _enum_for_CharacterSet,
    _decode_CharacterSet,
    _encode_CharacterSet
} from "../CSTA-physical-device-feature/CharacterSet.ta.mjs";



/**
 * @summary DisplayList_Item
 * @description
 *
 * One display. `contentsOfDisplay` always has `logicalRows * logicalColumns`
 * characters (ECMA-269 §21.1.4.3.4 FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayList-Item ::= SEQUENCE {
 *     displayID [UNIVERSAL 4] DisplayID,
 *     logicalRows [UNIVERSAL 2] INTEGER,
 *     logicalColumns [UNIVERSAL 2] INTEGER,
 *     physicalRows [0] INTEGER OPTIONAL,
 *     physicalColumns [1] INTEGER OPTIONAL,
 *     physicalBaseRowNumber [2] INTEGER OPTIONAL,
 *     physicalBaseColumnNumber [3] INTEGER OPTIONAL,
 *     characterSet [UNIVERSAL 10] CharacterSet OPTIONAL,
 *     contentsOfDisplay [UNIVERSAL 22] IA5String
 * }
 * ```
 * 
 * @class
 */
export
class DisplayList_Item {
    constructor (
        /**
         * @summary `displayID`.
         * @description
         *
         * Display this entry describes.
         * @public
         * @readonly
         */
        readonly displayID: DisplayID,
        /**
         * @summary `logicalRows`.
         * @description
         *
         * Rows on the logical display.
         * @public
         * @readonly
         */
        readonly logicalRows: INTEGER,
        /**
         * @summary `logicalColumns`.
         * @description
         *
         * Columns on the logical display.
         * @public
         * @readonly
         */
        readonly logicalColumns: INTEGER,
        /**
         * @summary `physicalRows`.
         * @description
         *
         * Physical rows. Omit when equal to `logicalRows`.
         * @public
         * @readonly
         */
        readonly physicalRows: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalColumns`.
         * @description
         *
         * Physical columns. Omit when equal to `logicalColumns`.
         * @public
         * @readonly
         */
        readonly physicalColumns: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseRowNumber`.
         * @description
         *
         * Logical row shown at the first physical row. Omit when physical and
         * logical row counts are equal.
         * @public
         * @readonly
         */
        readonly physicalBaseRowNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseColumnNumber`.
         * @description
         *
         * Logical column shown at the first physical column. Omit when physical
         * and logical column counts are equal.
         * @public
         * @readonly
         */
        readonly physicalBaseColumnNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `characterSet`.
         * @description
         *
         * ASCII (default), Unicode (UTF-8), or Proprietary.
         * @public
         * @readonly
         */
        readonly characterSet: OPTIONAL<CharacterSet>,
        /**
         * @summary `contentsOfDisplay`.
         * @description
         *
         * Full logical display: rows concatenated, including spaces.
         * @public
         * @readonly
         */
        readonly contentsOfDisplay: IA5String
    ) {}

    /**
     * @summary Restructures an object into a DisplayList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DisplayList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisplayList_Item`.
     * @returns {DisplayList_Item}
     */
    public static _from_object (_o: { [_K in keyof (DisplayList_Item)]: (DisplayList_Item)[_K] }): DisplayList_Item {
        return new DisplayList_Item(_o.displayID, _o.logicalRows, _o.logicalColumns, _o.physicalRows, _o.physicalColumns, _o.physicalBaseRowNumber, _o.physicalBaseColumnNumber, _o.characterSet, _o.contentsOfDisplay);
    }

        /**
         * @summary The enum used as the type of the component `characterSet`
         * @public
         * @static
         */

    public static _enum_for_characterSet = _enum_for_CharacterSet;
}

/**
 * @summary The Leading Root Component Types of DisplayList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisplayList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("displayID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("logicalRows", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("logicalColumns", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("physicalRows", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("physicalColumns", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("physicalBaseRowNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("physicalBaseColumnNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("characterSet", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("contentsOfDisplay", false, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of DisplayList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisplayList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisplayList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisplayList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisplayList_Item: $.ASN1Decoder<DisplayList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayList_Item (el: _Element): DisplayList_Item {
    if (!_cached_decoder_for_DisplayList_Item) { _cached_decoder_for_DisplayList_Item = function (el: _Element): DisplayList_Item {
    let displayID!: DisplayID;
    let logicalRows!: INTEGER;
    let logicalColumns!: INTEGER;
    let physicalRows: OPTIONAL<INTEGER>;
    let physicalColumns: OPTIONAL<INTEGER>;
    let physicalBaseRowNumber: OPTIONAL<INTEGER>;
    let physicalBaseColumnNumber: OPTIONAL<INTEGER>;
    let characterSet: OPTIONAL<CharacterSet>;
    let contentsOfDisplay!: IA5String;
    const callbacks: $.DecodingMap = {
        "displayID": (_el: _Element): void => { displayID = _decode_DisplayID(_el); },
        "logicalRows": (_el: _Element): void => { logicalRows = $._decodeInteger(_el); },
        "logicalColumns": (_el: _Element): void => { logicalColumns = $._decodeInteger(_el); },
        "physicalRows": (_el: _Element): void => { physicalRows = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalColumns": (_el: _Element): void => { physicalColumns = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseRowNumber": (_el: _Element): void => { physicalBaseRowNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseColumnNumber": (_el: _Element): void => { physicalBaseColumnNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "characterSet": (_el: _Element): void => { characterSet = _decode_CharacterSet(_el); },
        "contentsOfDisplay": (_el: _Element): void => { contentsOfDisplay = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisplayList_Item,
        _extension_additions_list_spec_for_DisplayList_Item,
        _root_component_type_list_2_spec_for_DisplayList_Item,
        undefined,
    );
    return new DisplayList_Item(
        displayID,
        logicalRows,
        logicalColumns,
        physicalRows,
        physicalColumns,
        physicalBaseRowNumber,
        physicalBaseColumnNumber,
        characterSet,
        contentsOfDisplay
    );
}; }
    return _cached_decoder_for_DisplayList_Item(el);
}

let _cached_encoder_for_DisplayList_Item: $.ASN1Encoder<DisplayList_Item> | null = null;

/**
 * @summary Encodes a(n) DisplayList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayList_Item (value: DisplayList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayList_Item) { _cached_encoder_for_DisplayList_Item = function (value: DisplayList_Item, elGetter: $.ASN1Encoder<DisplayList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DisplayID(value.displayID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.logicalRows, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.logicalColumns, $.BER),
            /* IF_ABSENT  */ ((value.physicalRows === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.physicalRows, $.BER)),
            /* IF_ABSENT  */ ((value.physicalColumns === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.physicalColumns, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseRowNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.physicalBaseRowNumber, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseColumnNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.physicalBaseColumnNumber, $.BER)),
            /* IF_ABSENT  */ ((value.characterSet === undefined) ? undefined : _encode_CharacterSet(value.characterSet, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.contentsOfDisplay, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DisplayList_Item(value, elGetter);
}


/* eslint-enable */
