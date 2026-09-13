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
import { DfrObjectClass, _enum_for_DfrObjectClass, DfrObjectClass_dfr_document /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_document /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_root_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_root_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_proper_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_proper_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_search_result_list /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_search_result_list /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
// export { DfrObjectClass, _enum_for_DfrObjectClass, DfrObjectClass_dfr_document /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_document /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_root_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_root_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_proper_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_proper_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_search_result_list /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_search_result_list /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
import { CommonUpdateArguments_entry, _decode_CommonUpdateArguments_entry, _encode_CommonUpdateArguments_entry } from "../DFRAbstractService/CommonUpdateArguments-entry.ta.mjs";
// export { CommonUpdateArguments_entry, _decode_CommonUpdateArguments_entry, _encode_CommonUpdateArguments_entry } from "../DFRAbstractService/CommonUpdateArguments-entry.ta.mjs";
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { GroupMemberPosition, _decode_GroupMemberPosition, _encode_GroupMemberPosition } from "../DFRAbstractService/GroupMemberPosition.ta.mjs";
// export { GroupMemberPosition, _decode_GroupMemberPosition, _encode_GroupMemberPosition } from "../DFRAbstractService/GroupMemberPosition.ta.mjs";
import { EntryModification, _decode_EntryModification, _encode_EntryModification } from "../DFRAbstractService/EntryModification.ta.mjs";
// export { EntryModification, _decode_EntryModification, _encode_EntryModification } from "../DFRAbstractService/EntryModification.ta.mjs";
import { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DFRAbstractService/EntryInformationSelection.ta.mjs";
// export { EntryInformationSelection, _decode_EntryInformationSelection, _encode_EntryInformationSelection } from "../DFRAbstractService/EntryInformationSelection.ta.mjs";
import { Requested_QoS_level, _decode_Requested_QoS_level, _encode_Requested_QoS_level } from "../DOR-definition/Requested-QoS-level.ta.mjs";
// export { Requested_QoS_level, _decode_Requested_QoS_level, _encode_Requested_QoS_level } from "../DOR-definition/Requested-QoS-level.ta.mjs";


/**
 * @summary CommonUpdateArguments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonUpdateArguments ::= SEQUENCE {
 *     object-class    [0] DfrObjectClass OPTIONAL,
 *     entry           [1] CHOICE {
 *         local           [1] DfrEntryName,
 *         external        [2] DOR
 *     } OPTIONAL,
 *     destination     [2] DfrEntryName OPTIONAL, -- of the parent group
 *     position        [3] GroupMemberPosition OPTIONAL, -- in the parent group
 *     modifications   [4] SEQUENCE OF EntryModification OPTIONAL,
 *     selection       [5] EntryInformationSelection OPTIONAL,
 *     reference-qos   [6] Requested-QoS-level OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CommonUpdateArguments {
    constructor (
        /**
         * @summary `object_class`.
         * @public
         * @readonly
         */
        readonly object_class: OPTIONAL<DfrObjectClass>,
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OPTIONAL<CommonUpdateArguments_entry>,
        /**
         * @summary `destination`.
         * @public
         * @readonly
         */
        readonly destination: OPTIONAL<DfrEntryName>,
        /**
         * @summary `position`.
         * @public
         * @readonly
         */
        readonly position: OPTIONAL<GroupMemberPosition>,
        /**
         * @summary `modifications`.
         * @public
         * @readonly
         */
        readonly modifications: OPTIONAL<EntryModification[]>,
        /**
         * @summary `selection`.
         * @public
         * @readonly
         */
        readonly selection: OPTIONAL<EntryInformationSelection>,
        /**
         * @summary `reference_qos`.
         * @public
         * @readonly
         */
        readonly reference_qos: OPTIONAL<Requested_QoS_level>
    ) {}

    /**
     * @summary Restructures an object into a CommonUpdateArguments
     * @description
     * 
     * This takes an `object` and converts it to a `CommonUpdateArguments`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonUpdateArguments`.
     * @returns {CommonUpdateArguments}
     */
    public static _from_object (_o: { [_K in keyof (CommonUpdateArguments)]: (CommonUpdateArguments)[_K] }): CommonUpdateArguments {
        return new CommonUpdateArguments(_o.object_class, _o.entry, _o.destination, _o.position, _o.modifications, _o.selection, _o.reference_qos);
    }

        /**
         * @summary The enum used as the type of the component `object_class`
         * @public
         * @static
         */

    public static _enum_for_object_class = _enum_for_DfrObjectClass;
}

/**
 * @summary The Leading Root Component Types of CommonUpdateArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonUpdateArguments: $.ComponentSpec[] = [
    new $.ComponentSpec("object-class", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entry", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destination", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("position", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("modifications", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("selection", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("reference-qos", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of CommonUpdateArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonUpdateArguments: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonUpdateArguments
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonUpdateArguments: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonUpdateArguments: $.ASN1Decoder<CommonUpdateArguments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonUpdateArguments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonUpdateArguments (el: _Element): CommonUpdateArguments {
    if (!_cached_decoder_for_CommonUpdateArguments) { _cached_decoder_for_CommonUpdateArguments = function (el: _Element): CommonUpdateArguments {
    let object_class: OPTIONAL<DfrObjectClass>;
    let entry: OPTIONAL<CommonUpdateArguments_entry>;
    let destination: OPTIONAL<DfrEntryName>;
    let position: OPTIONAL<GroupMemberPosition>;
    let modifications: OPTIONAL<EntryModification[]>;
    let selection: OPTIONAL<EntryInformationSelection>;
    let reference_qos: OPTIONAL<Requested_QoS_level>;
    const callbacks: $.DecodingMap = {
        "object-class": (_el: _Element): void => { object_class = $._decode_implicit<DfrObjectClass>(() => _decode_DfrObjectClass)(_el); },
        "entry": (_el: _Element): void => { entry = $._decode_explicit<CommonUpdateArguments_entry>(() => _decode_CommonUpdateArguments_entry)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "position": (_el: _Element): void => { position = $._decode_explicit<GroupMemberPosition>(() => _decode_GroupMemberPosition)(_el); },
        "modifications": (_el: _Element): void => { modifications = $._decode_implicit<EntryModification[]>(() => $._decodeSequenceOf<EntryModification>(() => _decode_EntryModification))(_el); },
        "selection": (_el: _Element): void => { selection = $._decode_implicit<EntryInformationSelection>(() => _decode_EntryInformationSelection)(_el); },
        "reference-qos": (_el: _Element): void => { reference_qos = $._decode_explicit<Requested_QoS_level>(() => _decode_Requested_QoS_level)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonUpdateArguments,
        _extension_additions_list_spec_for_CommonUpdateArguments,
        _root_component_type_list_2_spec_for_CommonUpdateArguments,
        undefined,
    );
    return new CommonUpdateArguments(
        object_class,
        entry,
        destination,
        position,
        modifications,
        selection,
        reference_qos
    );
}; }
    return _cached_decoder_for_CommonUpdateArguments(el);
}

let _cached_encoder_for_CommonUpdateArguments: $.ASN1Encoder<CommonUpdateArguments> | null = null;

/**
 * @summary Encodes a(n) CommonUpdateArguments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonUpdateArguments, encoded as an ASN.1 Element.
 */
export
function _encode_CommonUpdateArguments (value: CommonUpdateArguments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonUpdateArguments) { _cached_encoder_for_CommonUpdateArguments = function (value: CommonUpdateArguments, elGetter: $.ASN1Encoder<CommonUpdateArguments>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.object_class === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DfrObjectClass, $.BER)(value.object_class, $.BER)),
            /* IF_ABSENT  */ ((value.entry === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_CommonUpdateArguments_entry, $.BER)(value.entry, $.BER)),
            /* IF_ABSENT  */ ((value.destination === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_DfrEntryName, $.BER)(value.destination, $.BER)),
            /* IF_ABSENT  */ ((value.position === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GroupMemberPosition, $.BER)(value.position, $.BER)),
            /* IF_ABSENT  */ ((value.modifications === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<EntryModification>(() => _encode_EntryModification, $.BER), $.BER)(value.modifications, $.BER)),
            /* IF_ABSENT  */ ((value.selection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_EntryInformationSelection, $.BER)(value.selection, $.BER)),
            /* IF_ABSENT  */ ((value.reference_qos === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Requested_QoS_level, $.BER)(value.reference_qos, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonUpdateArguments(value, elGetter);
}


/* eslint-enable */
