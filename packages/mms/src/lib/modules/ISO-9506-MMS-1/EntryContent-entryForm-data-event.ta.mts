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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";


/**
 * @summary EntryContent_entryForm_data_event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryContent-entryForm-data-event ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EntryContent_entryForm_data_event {
    constructor (
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `currentState`.
         * @public
         * @readonly
         */
        readonly currentState: EC_State
    ) {}

    /**
     * @summary Restructures an object into a EntryContent_entryForm_data_event
     * @description
     * 
     * This takes an `object` and converts it to a `EntryContent_entryForm_data_event`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryContent_entryForm_data_event`.
     * @returns {EntryContent_entryForm_data_event}
     */
    public static _from_object (_o: { [_K in keyof (EntryContent_entryForm_data_event)]: (EntryContent_entryForm_data_event)[_K] }): EntryContent_entryForm_data_event {
        return new EntryContent_entryForm_data_event(_o.eventConditionName, _o.currentState);
    }


}

/**
 * @summary The Leading Root Component Types of EntryContent_entryForm_data_event
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryContent_entryForm_data_event: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EntryContent_entryForm_data_event
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryContent_entryForm_data_event: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryContent_entryForm_data_event
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryContent_entryForm_data_event: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryContent_entryForm_data_event: $.ASN1Decoder<EntryContent_entryForm_data_event> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryContent_entryForm_data_event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryContent_entryForm_data_event (el: _Element): EntryContent_entryForm_data_event {
    if (!_cached_decoder_for_EntryContent_entryForm_data_event) { _cached_decoder_for_EntryContent_entryForm_data_event = function (el: _Element): EntryContent_entryForm_data_event {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EntryContent-entryForm-data-event contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventConditionName";
    sequence[1].name = "currentState";
    let eventConditionName!: ObjectName;
    let currentState!: EC_State;
    eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    currentState = $._decode_implicit<EC_State>(() => _decode_EC_State)(sequence[1]);
    return new EntryContent_entryForm_data_event(
        eventConditionName,
        currentState,

    );
}; }
    return _cached_decoder_for_EntryContent_entryForm_data_event(el);
}

let _cached_encoder_for_EntryContent_entryForm_data_event: $.ASN1Encoder<EntryContent_entryForm_data_event> | null = null;

/**
 * @summary Encodes a(n) EntryContent_entryForm_data_event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryContent_entryForm_data_event, encoded as an ASN.1 Element.
 */
export
function _encode_EntryContent_entryForm_data_event (value: EntryContent_entryForm_data_event, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryContent_entryForm_data_event) { _cached_encoder_for_EntryContent_entryForm_data_event = function (value: EntryContent_entryForm_data_event, elGetter: $.ASN1Encoder<EntryContent_entryForm_data_event>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EC_State, $.BER)(value.currentState, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryContent_entryForm_data_event(value, elGetter);
}


/* eslint-enable */
