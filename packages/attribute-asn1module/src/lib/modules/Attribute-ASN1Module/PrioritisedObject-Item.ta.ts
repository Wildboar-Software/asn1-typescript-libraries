/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta";
export { ObjectInstance, _decode_ObjectInstance, _encode_ObjectInstance } from "@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta";
import { PrioritisedObject_Item_priority, PrioritisedObject_Item_priority_highest /* IMPORTED_LONG_NAMED_INTEGER */, highest /* IMPORTED_SHORT_NAMED_INTEGER */, PrioritisedObject_Item_priority_lowest /* IMPORTED_LONG_NAMED_INTEGER */, lowest /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PrioritisedObject_Item_priority, _encode_PrioritisedObject_Item_priority } from "../Attribute-ASN1Module/PrioritisedObject-Item-priority.ta";
export { PrioritisedObject_Item_priority, PrioritisedObject_Item_priority_highest /* IMPORTED_LONG_NAMED_INTEGER */, highest /* IMPORTED_SHORT_NAMED_INTEGER */, PrioritisedObject_Item_priority_lowest /* IMPORTED_LONG_NAMED_INTEGER */, lowest /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PrioritisedObject_Item_priority, _encode_PrioritisedObject_Item_priority } from "../Attribute-ASN1Module/PrioritisedObject-Item-priority.ta";


/* START_OF_SYMBOL_DEFINITION PrioritisedObject_Item */
/**
 * @summary PrioritisedObject_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrioritisedObject-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export
class PrioritisedObject_Item {
    constructor (
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: ObjectInstance,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: PrioritisedObject_Item_priority
    ) {}

    /**
     * @summary Restructures an object into a PrioritisedObject_Item
     * @description
     *
     * This takes an `object` and converts it to a `PrioritisedObject_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrioritisedObject_Item`.
     * @returns {PrioritisedObject_Item}
     */
    public static _from_object (_o: { [_K in keyof (PrioritisedObject_Item)]: (PrioritisedObject_Item)[_K] }): PrioritisedObject_Item {
        return new PrioritisedObject_Item(_o.object, _o.priority);
    }


}
/* END_OF_SYMBOL_DEFINITION PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrioritisedObject_Item */
/**
 * @summary The Leading Root Component Types of PrioritisedObject_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrioritisedObject_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("priority", false, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrioritisedObject_Item */
/**
 * @summary The Trailing Root Component Types of PrioritisedObject_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrioritisedObject_Item: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrioritisedObject_Item */
/**
 * @summary The Extension Addition Component Types of PrioritisedObject_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_PrioritisedObject_Item: $.ComponentSpec[] = [

];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject_Item */
let _cached_decoder_for_PrioritisedObject_Item: $.ASN1Decoder<PrioritisedObject_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _decode_PrioritisedObject_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) PrioritisedObject_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrioritisedObject_Item} The decoded data structure.
 */
export
function _decode_PrioritisedObject_Item (el: _Element) {
    if (!_cached_decoder_for_PrioritisedObject_Item) { _cached_decoder_for_PrioritisedObject_Item = function (el: _Element): PrioritisedObject_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PrioritisedObject-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "object";
    sequence[1].name = "priority";
    let object!: ObjectInstance;
    let priority!: PrioritisedObject_Item_priority;
    object = _decode_ObjectInstance(sequence[0]);
    priority = _decode_PrioritisedObject_Item_priority(sequence[1]);
    return new PrioritisedObject_Item(
        object,
        priority,

    );
}; }
    return _cached_decoder_for_PrioritisedObject_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject_Item */
let _cached_encoder_for_PrioritisedObject_Item: $.ASN1Encoder<PrioritisedObject_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrioritisedObject_Item */

/* START_OF_SYMBOL_DEFINITION _encode_PrioritisedObject_Item */
/**
 * @summary Encodes a(n) PrioritisedObject_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrioritisedObject_Item, encoded as an ASN.1 Element.
 */
export
function _encode_PrioritisedObject_Item (value: PrioritisedObject_Item, elGetter: $.ASN1Encoder<PrioritisedObject_Item>) {
    if (!_cached_encoder_for_PrioritisedObject_Item) { _cached_encoder_for_PrioritisedObject_Item = function (value: PrioritisedObject_Item, elGetter: $.ASN1Encoder<PrioritisedObject_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectInstance(value.object, $.BER),
            /* REQUIRED   */ _encode_PrioritisedObject_Item_priority(value.priority, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrioritisedObject_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrioritisedObject_Item */

/* eslint-enable */
