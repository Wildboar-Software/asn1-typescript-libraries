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
import { SemaphoreEntry_entryClass, SemaphoreEntry_entryClass_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, SemaphoreEntry_entryClass_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SemaphoreEntry_entryClass, _encode_SemaphoreEntry_entryClass } from "../ISO-9506-MMS-1/SemaphoreEntry-entryClass.ta.mjs";
// export { SemaphoreEntry_entryClass, SemaphoreEntry_entryClass_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, SemaphoreEntry_entryClass_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SemaphoreEntry_entryClass, _encode_SemaphoreEntry_entryClass } from "../ISO-9506-MMS-1/SemaphoreEntry-entryClass.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
// export { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary SemaphoreEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemaphoreEntry ::= SEQUENCE {
 *    entryID                       [0] IMPLICIT OCTET STRING,
 *    entryClass                    [1] IMPLICIT INTEGER {
 *        simple                           (0),
 *        modifier                         (1)    } (0..1),
 *    applicationReference          [2] ApplicationReference,
 *    namedToken                    [3] IMPLICIT Identifier OPTIONAL,
 *    priority                      [4] IMPLICIT Priority DEFAULT normalPriority,
 *    remainingTimeOut              [5] IMPLICIT Unsigned32 OPTIONAL,
 *    abortOnTimeOut                [6] IMPLICIT BOOLEAN OPTIONAL,
 *    relinquishIfConnectionLost    [7] IMPLICIT BOOLEAN DEFAULT TRUE }
 * ```
 * 
 * @class
 */
export
class SemaphoreEntry {
    constructor (
        /**
         * @summary `entryID`.
         * @public
         * @readonly
         */
        readonly entryID: OCTET_STRING,
        /**
         * @summary `entryClass`.
         * @public
         * @readonly
         */
        readonly entryClass: SemaphoreEntry_entryClass,
        /**
         * @summary `applicationReference`.
         * @public
         * @readonly
         */
        readonly applicationReference: ApplicationReference,
        /**
         * @summary `namedToken`.
         * @public
         * @readonly
         */
        readonly namedToken: OPTIONAL<Identifier>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<Priority>,
        /**
         * @summary `remainingTimeOut`.
         * @public
         * @readonly
         */
        readonly remainingTimeOut: OPTIONAL<Unsigned32>,
        /**
         * @summary `abortOnTimeOut`.
         * @public
         * @readonly
         */
        readonly abortOnTimeOut: OPTIONAL<BOOLEAN>,
        /**
         * @summary `relinquishIfConnectionLost`.
         * @public
         * @readonly
         */
        readonly relinquishIfConnectionLost: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a SemaphoreEntry
     * @description
     * 
     * This takes an `object` and converts it to a `SemaphoreEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SemaphoreEntry`.
     * @returns {SemaphoreEntry}
     */
    public static _from_object (_o: { [_K in keyof (SemaphoreEntry)]: (SemaphoreEntry)[_K] }): SemaphoreEntry {
        return new SemaphoreEntry(_o.entryID, _o.entryClass, _o.applicationReference, _o.namedToken, _o.priority, _o.remainingTimeOut, _o.abortOnTimeOut, _o.relinquishIfConnectionLost);
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return normalPriority; }
    /**
     * @summary Getter that returns the default value for `relinquishIfConnectionLost`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_relinquishIfConnectionLost () { return true; }
}

/**
 * @summary The Leading Root Component Types of SemaphoreEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SemaphoreEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("entryID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entryClass", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("applicationReference", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("namedToken", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("remainingTimeOut", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("abortOnTimeOut", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("relinquishIfConnectionLost", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SemaphoreEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SemaphoreEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SemaphoreEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SemaphoreEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SemaphoreEntry: $.ASN1Decoder<SemaphoreEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SemaphoreEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SemaphoreEntry (el: _Element): SemaphoreEntry {
    if (!_cached_decoder_for_SemaphoreEntry) { _cached_decoder_for_SemaphoreEntry = function (el: _Element): SemaphoreEntry {
    let entryID!: OCTET_STRING;
    let entryClass!: SemaphoreEntry_entryClass;
    let applicationReference!: ApplicationReference;
    let namedToken: OPTIONAL<Identifier>;
    let priority: OPTIONAL<Priority> = SemaphoreEntry._default_value_for_priority;
    let remainingTimeOut: OPTIONAL<Unsigned32>;
    let abortOnTimeOut: OPTIONAL<BOOLEAN>;
    let relinquishIfConnectionLost: OPTIONAL<BOOLEAN> = SemaphoreEntry._default_value_for_relinquishIfConnectionLost;
    const callbacks: $.DecodingMap = {
        "entryID": (_el: _Element): void => { entryID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "entryClass": (_el: _Element): void => { entryClass = $._decode_implicit<SemaphoreEntry_entryClass>(() => _decode_SemaphoreEntry_entryClass)(_el); },
        "applicationReference": (_el: _Element): void => { applicationReference = $._decode_explicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); },
        "namedToken": (_el: _Element): void => { namedToken = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); },
        "remainingTimeOut": (_el: _Element): void => { remainingTimeOut = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "abortOnTimeOut": (_el: _Element): void => { abortOnTimeOut = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "relinquishIfConnectionLost": (_el: _Element): void => { relinquishIfConnectionLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SemaphoreEntry,
        _extension_additions_list_spec_for_SemaphoreEntry,
        _root_component_type_list_2_spec_for_SemaphoreEntry,
        undefined,
    );
    return new SemaphoreEntry(
        entryID,
        entryClass,
        applicationReference,
        namedToken,
        priority,
        remainingTimeOut,
        abortOnTimeOut,
        relinquishIfConnectionLost
    );
}; }
    return _cached_decoder_for_SemaphoreEntry(el);
}

let _cached_encoder_for_SemaphoreEntry: $.ASN1Encoder<SemaphoreEntry> | null = null;

/**
 * @summary Encodes a(n) SemaphoreEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SemaphoreEntry, encoded as an ASN.1 Element.
 */
export
function _encode_SemaphoreEntry (value: SemaphoreEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SemaphoreEntry) { _cached_encoder_for_SemaphoreEntry = function (value: SemaphoreEntry, elGetter: $.ASN1Encoder<SemaphoreEntry>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.entryID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SemaphoreEntry_entryClass, $.BER)(value.entryClass, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_ApplicationReference, $.BER)(value.applicationReference, $.BER),
            /* IF_ABSENT  */ ((value.namedToken === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER)(value.namedToken, $.BER)),
            /* IF_DEFAULT */ (value.priority === undefined || $.deepEq(value.priority, SemaphoreEntry._default_value_for_priority) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.remainingTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Unsigned32, $.BER)(value.remainingTimeOut, $.BER)),
            /* IF_ABSENT  */ ((value.abortOnTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.abortOnTimeOut, $.BER)),
            /* IF_DEFAULT */ (value.relinquishIfConnectionLost === undefined || $.deepEq(value.relinquishIfConnectionLost, SemaphoreEntry._default_value_for_relinquishIfConnectionLost) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.relinquishIfConnectionLost, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SemaphoreEntry(value, elGetter);
}


/* eslint-enable */
