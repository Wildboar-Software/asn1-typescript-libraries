/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { TermListInfo_termLists_Item_searchCost, _decode_TermListInfo_termLists_Item_searchCost, _encode_TermListInfo_termLists_Item_searchCost } from "../RecordSyntax-explain/TermListInfo-termLists-Item-searchCost.ta.mjs";


/**
 * @summary TermListInfo_termLists_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListInfo-termLists-Item ::= SEQUENCE {
 *     name [1] IMPLICIT InternationalString,
 *     title [2] IMPLICIT HumanString OPTIONAL,
 *     -- see comment 5
 *     searchCost [3] IMPLICIT INTEGER {
 *         -- see comment 6
 *         optimized (0),
 *         normal (1),
 *         expensive (2),
 *         filter (3)
 *     } OPTIONAL,
 *     scanable [4] IMPLICIT BOOLEAN,
 *     -- 'true' means this list can be scanned
 *     -- see comment 7
 *     broader [5] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     narrower [6] IMPLICIT SEQUENCE OF InternationalString OPTIONAL  -- Broader and narrower list alternative term lists related to this one.
 *     -- The term lists so listed should also be in this termLists structure.
 * }  -- No non-brief elements
 * ```
 * 
 * @class
 */
export
class TermListInfo_termLists_Item {
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: InternationalString;
    /**
     * @summary `title`.
     * @public
     * @readonly
     */
    readonly title: OPTIONAL<HumanString>;
    /**
     * @summary `searchCost`.
     * @public
     * @readonly
     */
    readonly searchCost: OPTIONAL<TermListInfo_termLists_Item_searchCost>;
    /**
     * @summary `scanable`.
     * @public
     * @readonly
     */
    readonly scanable: BOOLEAN;
    /**
     * @summary `broader`.
     * @public
     * @readonly
     */
    readonly broader: OPTIONAL<InternationalString[]>;
    /**
     * @summary `narrower`.
     * @public
     * @readonly
     */
    readonly narrower: OPTIONAL<InternationalString[]>;

    constructor (
        name: InternationalString,
        title: OPTIONAL<HumanString>,
        searchCost: OPTIONAL<TermListInfo_termLists_Item_searchCost>,
        scanable: BOOLEAN,
        broader: OPTIONAL<InternationalString[]>,
        narrower: OPTIONAL<InternationalString[]>
    ) {
        this.name = name;
        this.title = title;
        this.searchCost = searchCost;
        this.scanable = scanable;
        this.broader = broader;
        this.narrower = narrower;
    }

    /**
     * @summary Restructures an object into a TermListInfo_termLists_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TermListInfo_termLists_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListInfo_termLists_Item`.
     * @returns {TermListInfo_termLists_Item}
     */
    public static _from_object (_o: { [_K in keyof (TermListInfo_termLists_Item)]: (TermListInfo_termLists_Item)[_K] }): TermListInfo_termLists_Item {
        return new TermListInfo_termLists_Item(_o.name, _o.title, _o.searchCost, _o.scanable, _o.broader, _o.narrower);
    }


}

/**
 * @summary The Leading Root Component Types of TermListInfo_termLists_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListInfo_termLists_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("title", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("searchCost", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("scanable", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("broader", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("narrower", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TermListInfo_termLists_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListInfo_termLists_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListInfo_termLists_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListInfo_termLists_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListInfo_termLists_Item: $.ASN1Decoder<TermListInfo_termLists_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListInfo_termLists_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListInfo_termLists_Item (el: _Element): TermListInfo_termLists_Item {
    if (!_cached_decoder_for_TermListInfo_termLists_Item) { _cached_decoder_for_TermListInfo_termLists_Item = function (el: _Element): TermListInfo_termLists_Item {
    let name!: InternationalString;
    let title: OPTIONAL<HumanString>;
    let searchCost: OPTIONAL<TermListInfo_termLists_Item_searchCost>;
    let scanable!: BOOLEAN;
    let broader: OPTIONAL<InternationalString[]>;
    let narrower: OPTIONAL<InternationalString[]>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "title": (_el: _Element): void => { title = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "searchCost": (_el: _Element): void => { searchCost = $._decode_implicit<TermListInfo_termLists_Item_searchCost>(() => _decode_TermListInfo_termLists_Item_searchCost)(_el); },
        "scanable": (_el: _Element): void => { scanable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "broader": (_el: _Element): void => { broader = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "narrower": (_el: _Element): void => { narrower = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermListInfo_termLists_Item,
        _extension_additions_list_spec_for_TermListInfo_termLists_Item,
        _root_component_type_list_2_spec_for_TermListInfo_termLists_Item,
        undefined,
    );
    return new TermListInfo_termLists_Item(
        name,
        title,
        searchCost,
        scanable,
        broader,
        narrower
    );
}; }
    return _cached_decoder_for_TermListInfo_termLists_Item(el);
}

let _cached_encoder_for_TermListInfo_termLists_Item: $.ASN1Encoder<TermListInfo_termLists_Item> | null = null;

/**
 * @summary Encodes a(n) TermListInfo_termLists_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListInfo_termLists_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TermListInfo_termLists_Item (value: TermListInfo_termLists_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListInfo_termLists_Item) { _cached_encoder_for_TermListInfo_termLists_Item = function (value: TermListInfo_termLists_Item, elGetter: $.ASN1Encoder<TermListInfo_termLists_Item>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.name, $.BER);
    if (value.title !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.title, $.BER);
    }
    if (value.searchCost !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TermListInfo_termLists_Item_searchCost, $.BER)(value.searchCost, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.scanable, $.BER);
    if (value.broader !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.broader, $.BER);
    }
    if (value.narrower !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.narrower, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TermListInfo_termLists_Item(value, elGetter);
}


/* eslint-enable */
