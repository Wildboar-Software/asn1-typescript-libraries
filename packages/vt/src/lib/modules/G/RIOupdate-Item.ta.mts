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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RIOupdate_Item_operation, RIOupdate_Item_operation_eraseRIO /* IMPORTED_LONG_NAMED_INTEGER */, eraseRIO /* IMPORTED_SHORT_NAMED_INTEGER */, RIOupdate_Item_operation_deleteRecord /* IMPORTED_LONG_NAMED_INTEGER */, deleteRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RIOupdate_Item_operation_createRecord /* IMPORTED_LONG_NAMED_INTEGER */, createRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RIOupdate_Item_operation, _encode_RIOupdate_Item_operation } from "../G/RIOupdate-Item-operation.ta.mjs";
// export { RIOupdate_Item_operation, RIOupdate_Item_operation_eraseRIO /* IMPORTED_LONG_NAMED_INTEGER */, eraseRIO /* IMPORTED_SHORT_NAMED_INTEGER */, RIOupdate_Item_operation_deleteRecord /* IMPORTED_LONG_NAMED_INTEGER */, deleteRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RIOupdate_Item_operation_createRecord /* IMPORTED_LONG_NAMED_INTEGER */, createRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RIOupdate_Item_operation, _encode_RIOupdate_Item_operation } from "../G/RIOupdate-Item-operation.ta.mjs";
import { ObjectUpdate, _decode_ObjectUpdate, _encode_ObjectUpdate } from "../ISO9041-VTP/ObjectUpdate.ta.mjs";
// export { ObjectUpdate, _decode_ObjectUpdate, _encode_ObjectUpdate } from "../ISO9041-VTP/ObjectUpdate.ta.mjs";


/**
 * @summary RIOupdate_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOupdate-Item ::= SEQUENCE {
 *     recordId    [0] IMPLICIT PrintableString OPTIONAL,
 *     operation   [1] IMPLICIT INTEGER {
 *         eraseRIO     (0),
 *         deleteRecord (1),
 *         createRecord (2)
 *     },
 *     updates     [2] IMPLICIT SEQUENCE OF ISO9041-VTP.ObjectUpdate OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RIOupdate_Item {
    constructor (
        /**
         * @summary `recordId`.
         * @public
         * @readonly
         */
        readonly recordId: OPTIONAL<PrintableString>,
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: RIOupdate_Item_operation,
        /**
         * @summary `updates`.
         * @public
         * @readonly
         */
        readonly updates: OPTIONAL<ISO9041_VTP.ObjectUpdate[]>
    ) {}

    /**
     * @summary Restructures an object into a RIOupdate_Item
     * @description
     * 
     * This takes an `object` and converts it to a `RIOupdate_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RIOupdate_Item`.
     * @returns {RIOupdate_Item}
     */
    public static _from_object (_o: { [_K in keyof (RIOupdate_Item)]: (RIOupdate_Item)[_K] }): RIOupdate_Item {
        return new RIOupdate_Item(_o.recordId, _o.operation, _o.updates);
    }


}

/**
 * @summary The Leading Root Component Types of RIOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RIOupdate_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("recordId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("operation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("updates", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RIOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RIOupdate_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RIOupdate_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RIOupdate_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RIOupdate_Item: $.ASN1Decoder<RIOupdate_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIOupdate_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIOupdate_Item (el: _Element): RIOupdate_Item {
    if (!_cached_decoder_for_RIOupdate_Item) { _cached_decoder_for_RIOupdate_Item = function (el: _Element): RIOupdate_Item {
    let recordId: OPTIONAL<PrintableString>;
    let operation!: RIOupdate_Item_operation;
    let updates: OPTIONAL<ISO9041_VTP.ObjectUpdate[]>;
    const callbacks: $.DecodingMap = {
        "recordId": (_el: _Element): void => { recordId = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "operation": (_el: _Element): void => { operation = $._decode_implicit<RIOupdate_Item_operation>(() => _decode_RIOupdate_Item_operation)(_el); },
        "updates": (_el: _Element): void => { updates = $._decode_implicit<ISO9041_VTP.ObjectUpdate[]>(() => $._decodeSequenceOf<ISO9041_VTP.ObjectUpdate>(() => ISO9041_VTP._decode_ObjectUpdate))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RIOupdate_Item,
        _extension_additions_list_spec_for_RIOupdate_Item,
        _root_component_type_list_2_spec_for_RIOupdate_Item,
        undefined,
    );
    return new RIOupdate_Item(
        recordId,
        operation,
        updates
    );
}; }
    return _cached_decoder_for_RIOupdate_Item(el);
}

let _cached_encoder_for_RIOupdate_Item: $.ASN1Encoder<RIOupdate_Item> | null = null;

/**
 * @summary Encodes a(n) RIOupdate_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIOupdate_Item, encoded as an ASN.1 Element.
 */
export
function _encode_RIOupdate_Item (value: RIOupdate_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIOupdate_Item) { _cached_encoder_for_RIOupdate_Item = function (value: RIOupdate_Item, elGetter: $.ASN1Encoder<RIOupdate_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.recordId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.recordId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RIOupdate_Item_operation, $.BER)(value.operation, $.BER),
            /* IF_ABSENT  */ ((value.updates === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ISO9041_VTP.ObjectUpdate>(() => ISO9041_VTP._encode_ObjectUpdate, $.BER), $.BER)(value.updates, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RIOupdate_Item(value, elGetter);
}


/* eslint-enable */
