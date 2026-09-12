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
import { Journal_instance, _decode_Journal_instance, _encode_Journal_instance } from "../MMS-SCI-Module-1/Journal-instance.ta.mjs";
// export { Journal_instance, _decode_Journal_instance, _encode_Journal_instance } from "../MMS-SCI-Module-1/Journal-instance.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
import { Journal_Entry_instance_informationType, _enum_for_Journal_Entry_instance_informationType, Journal_Entry_instance_informationType_annotation /* IMPORTED_LONG_ENUMERATION_ITEM */, annotation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Journal_Entry_instance_informationType_event_data /* IMPORTED_LONG_ENUMERATION_ITEM */, event_data /* IMPORTED_SHORT_ENUMERATION_ITEM */, Journal_Entry_instance_informationType_data /* IMPORTED_LONG_ENUMERATION_ITEM */, data /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Journal_Entry_instance_informationType, _encode_Journal_Entry_instance_informationType } from "../MMS-SCI-Module-1/Journal-Entry-instance-informationType.ta.mjs";
// export { Journal_Entry_instance_informationType, _enum_for_Journal_Entry_instance_informationType, Journal_Entry_instance_informationType_annotation /* IMPORTED_LONG_ENUMERATION_ITEM */, annotation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Journal_Entry_instance_informationType_event_data /* IMPORTED_LONG_ENUMERATION_ITEM */, event_data /* IMPORTED_SHORT_ENUMERATION_ITEM */, Journal_Entry_instance_informationType_data /* IMPORTED_LONG_ENUMERATION_ITEM */, data /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Journal_Entry_instance_informationType, _encode_Journal_Entry_instance_informationType } from "../MMS-SCI-Module-1/Journal-Entry-instance-informationType.ta.mjs";
import { MMS255String, _decode_MMS255String, _encode_MMS255String } from "../ISO-9506-MMS-1/MMS255String.ta.mjs";
// export { MMS255String, _decode_MMS255String, _encode_MMS255String } from "../ISO-9506-MMS-1/MMS255String.ta.mjs";
import { Journal_Entry_instance_eventTransitionRecord, _decode_Journal_Entry_instance_eventTransitionRecord, _encode_Journal_Entry_instance_eventTransitionRecord } from "../MMS-SCI-Module-1/Journal-Entry-instance-eventTransitionRecord.ta.mjs";
// export { Journal_Entry_instance_eventTransitionRecord, _decode_Journal_Entry_instance_eventTransitionRecord, _encode_Journal_Entry_instance_eventTransitionRecord } from "../MMS-SCI-Module-1/Journal-Entry-instance-eventTransitionRecord.ta.mjs";
import { Journal_Entry_instance_journalVariables_Item, _decode_Journal_Entry_instance_journalVariables_Item, _encode_Journal_Entry_instance_journalVariables_Item } from "../MMS-SCI-Module-1/Journal-Entry-instance-journalVariables-Item.ta.mjs";
// export { Journal_Entry_instance_journalVariables_Item, _decode_Journal_Entry_instance_journalVariables_Item, _encode_Journal_Entry_instance_journalVariables_Item } from "../MMS-SCI-Module-1/Journal-Entry-instance-journalVariables-Item.ta.mjs";


/**
 * @summary Journal_Entry_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Journal-Entry-instance ::= SEQUENCE {
 *     journal                [0] IMPLICIT Journal-instance,
 *     entry                  [1] IMPLICIT OCTET STRING,
 *     clientApplication      [2] IMPLICIT ApplicationReference,
 *     timeStamp              [3] IMPLICIT TimeOfDay,
 *     orderOfReceipt         [4] IMPLICIT INTEGER,
 *     informationType        [5] IMPLICIT ENUMERATED {
 *         annotation,
 *         event-data,
 *         data },
 *     -- The following attribute shall appear if and only if the
 *     -- value of &informationType is annotation.
 *     textComment            [6] MMS255String OPTIONAL,
 *     --The following attribute shall appear if and only if the
 *     -- value of &informationType is event-data.
 *     eventTransitionRecord  [7] IMPLICIT SEQUENCE {
 *         name                   [8] ObjectName,
 *         currentState           [9] IMPLICIT EC-State
 *         } OPTIONAL,
 *     -- The following attribute shall appear if and only if the
 *     -- value of &informationType is data or event-data.
 *     journalVariables       [10] IMPLICIT SEQUENCE OF SEQUENCE {
 *             variableTag            [11] MMS255String,
 *             valueSpecification     [12] Data
 *             } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Journal_Entry_instance {
    constructor (
        /**
         * @summary `journal`.
         * @public
         * @readonly
         */
        readonly journal: Journal_instance,
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OCTET_STRING,
        /**
         * @summary `clientApplication`.
         * @public
         * @readonly
         */
        readonly clientApplication: ApplicationReference,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: TimeOfDay,
        /**
         * @summary `orderOfReceipt`.
         * @public
         * @readonly
         */
        readonly orderOfReceipt: INTEGER,
        /**
         * @summary `informationType`.
         * @public
         * @readonly
         */
        readonly informationType: Journal_Entry_instance_informationType,
        /**
         * @summary `textComment`.
         * @public
         * @readonly
         */
        readonly textComment: OPTIONAL<MMS255String>,
        /**
         * @summary `eventTransitionRecord`.
         * @public
         * @readonly
         */
        readonly eventTransitionRecord: OPTIONAL<Journal_Entry_instance_eventTransitionRecord>,
        /**
         * @summary `journalVariables`.
         * @public
         * @readonly
         */
        readonly journalVariables: OPTIONAL<Journal_Entry_instance_journalVariables_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a Journal_Entry_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Journal_Entry_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Journal_Entry_instance`.
     * @returns {Journal_Entry_instance}
     */
    public static _from_object (_o: { [_K in keyof (Journal_Entry_instance)]: (Journal_Entry_instance)[_K] }): Journal_Entry_instance {
        return new Journal_Entry_instance(_o.journal, _o.entry, _o.clientApplication, _o.timeStamp, _o.orderOfReceipt, _o.informationType, _o.textComment, _o.eventTransitionRecord, _o.journalVariables);
    }

        /**
         * @summary The enum used as the type of the component `informationType`
         * @public
         * @static
         */

    public static _enum_for_informationType = _enum_for_Journal_Entry_instance_informationType;
}

/**
 * @summary The Leading Root Component Types of Journal_Entry_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Journal_Entry_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("journal", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("clientApplication", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("orderOfReceipt", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("informationType", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("textComment", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eventTransitionRecord", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("journalVariables", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of Journal_Entry_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Journal_Entry_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Journal_Entry_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Journal_Entry_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Journal_Entry_instance: $.ASN1Decoder<Journal_Entry_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Journal_Entry_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Journal_Entry_instance (el: _Element): Journal_Entry_instance {
    if (!_cached_decoder_for_Journal_Entry_instance) { _cached_decoder_for_Journal_Entry_instance = function (el: _Element): Journal_Entry_instance {
    let journal!: Journal_instance;
    let entry!: OCTET_STRING;
    let clientApplication!: ApplicationReference;
    let timeStamp!: TimeOfDay;
    let orderOfReceipt!: INTEGER;
    let informationType!: Journal_Entry_instance_informationType;
    let textComment: OPTIONAL<MMS255String>;
    let eventTransitionRecord: OPTIONAL<Journal_Entry_instance_eventTransitionRecord>;
    let journalVariables: OPTIONAL<Journal_Entry_instance_journalVariables_Item[]>;
    const callbacks: $.DecodingMap = {
        "journal": (_el: _Element): void => { journal = $._decode_implicit<Journal_instance>(() => _decode_Journal_instance)(_el); },
        "entry": (_el: _Element): void => { entry = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "clientApplication": (_el: _Element): void => { clientApplication = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay)(_el); },
        "orderOfReceipt": (_el: _Element): void => { orderOfReceipt = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "informationType": (_el: _Element): void => { informationType = $._decode_implicit<Journal_Entry_instance_informationType>(() => _decode_Journal_Entry_instance_informationType)(_el); },
        "textComment": (_el: _Element): void => { textComment = $._decode_explicit<MMS255String>(() => _decode_MMS255String)(_el); },
        "eventTransitionRecord": (_el: _Element): void => { eventTransitionRecord = $._decode_implicit<Journal_Entry_instance_eventTransitionRecord>(() => _decode_Journal_Entry_instance_eventTransitionRecord)(_el); },
        "journalVariables": (_el: _Element): void => { journalVariables = $._decode_implicit<Journal_Entry_instance_journalVariables_Item[]>(() => $._decodeSequenceOf<Journal_Entry_instance_journalVariables_Item>(() => _decode_Journal_Entry_instance_journalVariables_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Journal_Entry_instance,
        _extension_additions_list_spec_for_Journal_Entry_instance,
        _root_component_type_list_2_spec_for_Journal_Entry_instance,
        undefined,
    );
    return new Journal_Entry_instance(
        journal,
        entry,
        clientApplication,
        timeStamp,
        orderOfReceipt,
        informationType,
        textComment,
        eventTransitionRecord,
        journalVariables
    );
}; }
    return _cached_decoder_for_Journal_Entry_instance(el);
}

let _cached_encoder_for_Journal_Entry_instance: $.ASN1Encoder<Journal_Entry_instance> | null = null;

/**
 * @summary Encodes a(n) Journal_Entry_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Journal_Entry_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Journal_Entry_instance (value: Journal_Entry_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Journal_Entry_instance) { _cached_encoder_for_Journal_Entry_instance = function (value: Journal_Entry_instance, elGetter: $.ASN1Encoder<Journal_Entry_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Journal_instance, $.BER)(value.journal, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ApplicationReference, $.BER)(value.clientApplication, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TimeOfDay, $.BER)(value.timeStamp, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.orderOfReceipt, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Journal_Entry_instance_informationType, $.BER)(value.informationType, $.BER),
            /* IF_ABSENT  */ ((value.textComment === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_MMS255String, $.BER)(value.textComment, $.BER)),
            /* IF_ABSENT  */ ((value.eventTransitionRecord === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Journal_Entry_instance_eventTransitionRecord, $.BER)(value.eventTransitionRecord, $.BER)),
            /* IF_ABSENT  */ ((value.journalVariables === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Journal_Entry_instance_journalVariables_Item>(() => _encode_Journal_Entry_instance_journalVariables_Item, $.BER), $.BER)(value.journalVariables, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Journal_Entry_instance(value, elGetter);
}


/* eslint-enable */
