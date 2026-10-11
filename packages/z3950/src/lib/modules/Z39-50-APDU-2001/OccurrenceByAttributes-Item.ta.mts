/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";
import { OccurrenceByAttributes_Item_occurrences, _decode_OccurrenceByAttributes_Item_occurrences, _encode_OccurrenceByAttributes_Item_occurrences } from "../Z39-50-APDU-2001/OccurrenceByAttributes-Item-occurrences.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary OccurrenceByAttributes_Item
 * @description
 * 
 * Occurrence information for one attribute combination on a Scan term
 * (ANSI/NISO Z39.50-2003 §3.2.8.1.7).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OccurrenceByAttributes-Item ::= SEQUENCE {
 *     attributes [1] AttributeList,
 *     occurrences CHOICE {
 *         global [2] INTEGER,
 *         byDatabase [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *             db DatabaseName,
 *             num [1] IMPLICIT INTEGER OPTIONAL,
 *             otherDbInfo OtherInformation OPTIONAL
 *         }
 *     } OPTIONAL,
 *     otherOccurInfo OtherInformation OPTIONAL
 * }  --End auxiliary definitions for Scan
 * --Sort APDUs
 * ```
 * 
 * @class
 */
export
class OccurrenceByAttributes_Item {
    /**
     * @summary `attributes`.
     * @description
     * 
     * Attributes this occurrence information describes (ANSI/NISO Z39.50-2003
     * §3.2.8.1.7).
     * 
     * @public
     * @readonly
     */
    readonly attributes: AttributeList;
    /**
     * @summary `occurrences`.
     * @description
     * 
     * Record count for those attributes, either one total or a breakdown by
     * database. The count may be omitted entirely (ANSI/NISO Z39.50-2003
     * §3.2.8.1.7).
     * 
     * @public
     * @readonly
     */
    readonly occurrences: OPTIONAL<OccurrenceByAttributes_Item_occurrences>;
    /**
     * @summary `otherOccurInfo`.
     * @description
     * 
     * Further occurrence information. The standard does not specify its
     * contents (ANSI/NISO Z39.50-2003 §4.1).
     * 
     * @public
     * @readonly
     */
    readonly otherOccurInfo: OPTIONAL<OtherInformation>;

    constructor (
        attributes: AttributeList,
        occurrences: OPTIONAL<OccurrenceByAttributes_Item_occurrences>,
        otherOccurInfo: OPTIONAL<OtherInformation>
    ) {
        this.attributes = attributes;
        this.occurrences = occurrences;
        this.otherOccurInfo = otherOccurInfo;
    }

    /**
     * @summary Restructures an object into a OccurrenceByAttributes_Item
     * @description
     * 
     * This takes an `object` and converts it to a `OccurrenceByAttributes_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OccurrenceByAttributes_Item`.
     * @returns {OccurrenceByAttributes_Item}
     */
    public static _from_object (_o: { [_K in keyof (OccurrenceByAttributes_Item)]: (OccurrenceByAttributes_Item)[_K] }): OccurrenceByAttributes_Item {
        return new OccurrenceByAttributes_Item(_o.attributes, _o.occurrences, _o.otherOccurInfo);
    }


}

/**
 * @summary The Leading Root Component Types of OccurrenceByAttributes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OccurrenceByAttributes_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("occurrences", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3))),
    new $.ComponentSpec("otherOccurInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of OccurrenceByAttributes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OccurrenceByAttributes_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OccurrenceByAttributes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OccurrenceByAttributes_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OccurrenceByAttributes_Item: $.ASN1Decoder<OccurrenceByAttributes_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OccurrenceByAttributes_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OccurrenceByAttributes_Item (el: _Element): OccurrenceByAttributes_Item {
    if (!_cached_decoder_for_OccurrenceByAttributes_Item) { _cached_decoder_for_OccurrenceByAttributes_Item = function (el: _Element): OccurrenceByAttributes_Item {
    let attributes!: AttributeList;
    let occurrences: OPTIONAL<OccurrenceByAttributes_Item_occurrences>;
    let otherOccurInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "attributes": (_el: _Element): void => { attributes = $._decode_explicit<AttributeList>(() => _decode_AttributeList)(_el); },
        "occurrences": (_el: _Element): void => { occurrences = _decode_OccurrenceByAttributes_Item_occurrences(_el); },
        "otherOccurInfo": (_el: _Element): void => { otherOccurInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OccurrenceByAttributes_Item,
        _extension_additions_list_spec_for_OccurrenceByAttributes_Item,
        _root_component_type_list_2_spec_for_OccurrenceByAttributes_Item,
        undefined,
    );
    return new OccurrenceByAttributes_Item(
        attributes,
        occurrences,
        otherOccurInfo
    );
}; }
    return _cached_decoder_for_OccurrenceByAttributes_Item(el);
}

let _cached_encoder_for_OccurrenceByAttributes_Item: $.ASN1Encoder<OccurrenceByAttributes_Item> | null = null;

/**
 * @summary Encodes a(n) OccurrenceByAttributes_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OccurrenceByAttributes_Item, encoded as an ASN.1 Element.
 */
export
function _encode_OccurrenceByAttributes_Item (value: OccurrenceByAttributes_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OccurrenceByAttributes_Item) { _cached_encoder_for_OccurrenceByAttributes_Item = function (value: OccurrenceByAttributes_Item, elGetter: $.ASN1Encoder<OccurrenceByAttributes_Item>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AttributeList, $.BER)(value.attributes, $.BER);
    if (value.occurrences !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_OccurrenceByAttributes_Item_occurrences(value.occurrences, $.BER);
    }
    if (value.otherOccurInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherOccurInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OccurrenceByAttributes_Item(value, elGetter);
}


/* eslint-enable */
