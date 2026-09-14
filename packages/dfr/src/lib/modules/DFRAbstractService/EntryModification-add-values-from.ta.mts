/* eslint-disable */
import {
    OPTIONAL,
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
import { SourceEntry, _decode_SourceEntry, _encode_SourceEntry } from "../DFRAbstractService/SourceEntry.ta.mjs";
// export { SourceEntry, _decode_SourceEntry, _encode_SourceEntry } from "../DFRAbstractService/SourceEntry.ta.mjs";
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";


/**
 * @summary EntryModification_add_values_from
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryModification-add-values-from ::= SEQUENCE {
 *             source                  [0] SourceEntry,
 *             -- as default all multivalued attributes
 *             attribute-selection     [1] SET OF AttributeType OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class EntryModification_add_values_from {
    constructor (
        /**
         * @summary `source`.
         * @public
         * @readonly
         */
        readonly source: SourceEntry,
        /**
         * @summary `attribute_selection`.
         * @public
         * @readonly
         */
        readonly attribute_selection: OPTIONAL<AttributeType[]>
    ) {}

    /**
     * @summary Restructures an object into a EntryModification_add_values_from
     * @description
     * 
     * This takes an `object` and converts it to a `EntryModification_add_values_from`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryModification_add_values_from`.
     * @returns {EntryModification_add_values_from}
     */
    public static _from_object (_o: { [_K in keyof (EntryModification_add_values_from)]: (EntryModification_add_values_from)[_K] }): EntryModification_add_values_from {
        return new EntryModification_add_values_from(_o.source, _o.attribute_selection);
    }


}

/**
 * @summary The Leading Root Component Types of EntryModification_add_values_from
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryModification_add_values_from: $.ComponentSpec[] = [
    new $.ComponentSpec("source", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attribute-selection", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EntryModification_add_values_from
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryModification_add_values_from: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryModification_add_values_from
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryModification_add_values_from: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryModification_add_values_from: $.ASN1Decoder<EntryModification_add_values_from> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification_add_values_from
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryModification_add_values_from (el: _Element): EntryModification_add_values_from {
    if (!_cached_decoder_for_EntryModification_add_values_from) { _cached_decoder_for_EntryModification_add_values_from = function (el: _Element): EntryModification_add_values_from {
    let source!: SourceEntry;
    let attribute_selection: OPTIONAL<AttributeType[]>;
    const callbacks: $.DecodingMap = {
        "source": (_el: _Element): void => { source = $._decode_explicit<SourceEntry>(() => _decode_SourceEntry)(_el); },
        "attribute-selection": (_el: _Element): void => { attribute_selection = $._decode_implicit<AttributeType[]>(() => $._decodeSetOf<AttributeType>(() => _decode_AttributeType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntryModification_add_values_from,
        _extension_additions_list_spec_for_EntryModification_add_values_from,
        _root_component_type_list_2_spec_for_EntryModification_add_values_from,
        undefined,
    );
    return new EntryModification_add_values_from(
        source,
        attribute_selection
    );
}; }
    return _cached_decoder_for_EntryModification_add_values_from(el);
}

let _cached_encoder_for_EntryModification_add_values_from: $.ASN1Encoder<EntryModification_add_values_from> | null = null;

/**
 * @summary Encodes a(n) EntryModification_add_values_from into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification_add_values_from, encoded as an ASN.1 Element.
 */
export
function _encode_EntryModification_add_values_from (value: EntryModification_add_values_from, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryModification_add_values_from) { _cached_encoder_for_EntryModification_add_values_from = function (value: EntryModification_add_values_from): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SourceEntry, $.BER)(value.source, $.BER),
            /* IF_ABSENT  */ ((value.attribute_selection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.attribute_selection, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryModification_add_values_from(value, elGetter);
}


/* eslint-enable */
