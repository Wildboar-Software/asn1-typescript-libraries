/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary OccurrenceByAttributes_Item_occurrences_byDatabase_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OccurrenceByAttributes-Item-occurrences-byDatabase-Item ::= SEQUENCE {
 *     db DatabaseName,
 *     num [1] IMPLICIT INTEGER OPTIONAL,
 *     otherDbInfo OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class OccurrenceByAttributes_Item_occurrences_byDatabase_Item {
    /**
     * @summary `db`.
     * @public
     * @readonly
     */
    readonly db: DatabaseName;
    /**
     * @summary `num`.
     * @public
     * @readonly
     */
    readonly num: OPTIONAL<INTEGER>;
    /**
     * @summary `otherDbInfo`.
     * @public
     * @readonly
     */
    readonly otherDbInfo: OPTIONAL<OtherInformation>;

    constructor (
        db: DatabaseName,
        num: OPTIONAL<INTEGER>,
        otherDbInfo: OPTIONAL<OtherInformation>
    ) {
        this.db = db;
        this.num = num;
        this.otherDbInfo = otherDbInfo;
    }

    /**
     * @summary Restructures an object into a OccurrenceByAttributes_Item_occurrences_byDatabase_Item
     * @description
     * 
     * This takes an `object` and converts it to a `OccurrenceByAttributes_Item_occurrences_byDatabase_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OccurrenceByAttributes_Item_occurrences_byDatabase_Item`.
     * @returns {OccurrenceByAttributes_Item_occurrences_byDatabase_Item}
     */
    public static _from_object (_o: { [_K in keyof (OccurrenceByAttributes_Item_occurrences_byDatabase_Item)]: (OccurrenceByAttributes_Item_occurrences_byDatabase_Item)[_K] }): OccurrenceByAttributes_Item_occurrences_byDatabase_Item {
        return new OccurrenceByAttributes_Item_occurrences_byDatabase_Item(_o.db, _o.num, _o.otherDbInfo);
    }


}

/**
 * @summary The Leading Root Component Types of OccurrenceByAttributes_Item_occurrences_byDatabase_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("db", false, $.hasTag(_TagClass.context, 105)),
    new $.ComponentSpec("num", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("otherDbInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of OccurrenceByAttributes_Item_occurrences_byDatabase_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OccurrenceByAttributes_Item_occurrences_byDatabase_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item: $.ASN1Decoder<OccurrenceByAttributes_Item_occurrences_byDatabase_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OccurrenceByAttributes_Item_occurrences_byDatabase_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OccurrenceByAttributes_Item_occurrences_byDatabase_Item (el: _Element): OccurrenceByAttributes_Item_occurrences_byDatabase_Item {
    if (!_cached_decoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item) { _cached_decoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item = function (el: _Element): OccurrenceByAttributes_Item_occurrences_byDatabase_Item {
    let db!: DatabaseName;
    let num: OPTIONAL<INTEGER>;
    let otherDbInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "db": (_el: _Element): void => { db = _decode_DatabaseName(_el); },
        "num": (_el: _Element): void => { num = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "otherDbInfo": (_el: _Element): void => { otherDbInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item,
        _extension_additions_list_spec_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item,
        _root_component_type_list_2_spec_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item,
        undefined,
    );
    return new OccurrenceByAttributes_Item_occurrences_byDatabase_Item(
        db,
        num,
        otherDbInfo
    );
}; }
    return _cached_decoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item(el);
}

let _cached_encoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item: $.ASN1Encoder<OccurrenceByAttributes_Item_occurrences_byDatabase_Item> | null = null;

/**
 * @summary Encodes a(n) OccurrenceByAttributes_Item_occurrences_byDatabase_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OccurrenceByAttributes_Item_occurrences_byDatabase_Item, encoded as an ASN.1 Element.
 */
export
function _encode_OccurrenceByAttributes_Item_occurrences_byDatabase_Item (value: OccurrenceByAttributes_Item_occurrences_byDatabase_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item) { _cached_encoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item = function (value: OccurrenceByAttributes_Item_occurrences_byDatabase_Item, elGetter: $.ASN1Encoder<OccurrenceByAttributes_Item_occurrences_byDatabase_Item>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 105, () => _encode_DatabaseName, $.BER)(value.db, $.BER);
    if (value.num !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.num, $.BER);
    }
    if (value.otherDbInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherDbInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OccurrenceByAttributes_Item_occurrences_byDatabase_Item(value, elGetter);
}


/* eslint-enable */
