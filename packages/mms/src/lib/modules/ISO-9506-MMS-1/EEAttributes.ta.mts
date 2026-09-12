/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { EEAttributes_eventConditionName, _decode_EEAttributes_eventConditionName, _encode_EEAttributes_eventConditionName } from "../ISO-9506-MMS-1/EEAttributes-eventConditionName.ta.mjs";
// export { EEAttributes_eventConditionName, _decode_EEAttributes_eventConditionName, _encode_EEAttributes_eventConditionName } from "../ISO-9506-MMS-1/EEAttributes-eventConditionName.ta.mjs";
import { EEAttributes_eventActionName, _decode_EEAttributes_eventActionName, _encode_EEAttributes_eventActionName } from "../ISO-9506-MMS-1/EEAttributes-eventActionName.ta.mjs";
// export { EEAttributes_eventActionName, _decode_EEAttributes_eventActionName, _encode_EEAttributes_eventActionName } from "../ISO-9506-MMS-1/EEAttributes-eventActionName.ta.mjs";
import { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
// export { Nullable, _get_decoder_for_Nullable, _get_encoder_for_Nullable } from "../ISO-9506-MMS-1/Nullable.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { EE_Class, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
// export { EE_Class, EE_Class_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Class_notification /* IMPORTED_LONG_NAMED_INTEGER */, notification /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
import { EE_Duration, current /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
// export { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { EEAttributes_displayEnhancement, _decode_EEAttributes_displayEnhancement, _encode_EEAttributes_displayEnhancement } from "../ISO-9506-MMS-1/EEAttributes-displayEnhancement.ta.mjs";
// export { EEAttributes_displayEnhancement, _decode_EEAttributes_displayEnhancement, _encode_EEAttributes_displayEnhancement } from "../ISO-9506-MMS-1/EEAttributes-displayEnhancement.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary EEAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EEAttributes ::= SEQUENCE {
 *    eventEnrollmentName           [0] ObjectName,
 *    eventConditionName            [1] CHOICE {
 *        eventCondition                [0] ObjectName,
 *        undefined                     [1] IMPLICIT NULL   },
 *    eventActionName               [2] CHOICE {
 *        eventAction                   [0] ObjectName,
 *        undefined                     [1] IMPLICIT NULL   }  OPTIONAL,
 *    clientApplication             [3] Nullable{ApplicationReference} OPTIONAL,
 *    mmsDeletable                  [4] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    enrollmentClass               [5] IMPLICIT EE-Class,
 *    duration                      [6] IMPLICIT EE-Duration DEFAULT current,
 *    invokeID                      [7] IMPLICIT Unsigned32 OPTIONAL,
 *    remainingAcceptableDelay      [8] IMPLICIT Unsigned32 OPTIONAL,
 *    displayEnhancement            [9] CHOICE {
 *        string                        [0] IMPLICIT VisibleString,
 *        index                         [1] IMPLICIT INTEGER,
 *        noEnhancement                 NULL   },
 *              -- shall not be transmitted if the value is NULL
 *    accessControlList             [11] IMPLICIT Identifier
 *              -- shall not appear in minor version one or two
 * }
 * ```
 * 
 * @class
 */
export
class EEAttributes {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: EEAttributes_eventConditionName,
        /**
         * @summary `eventActionName`.
         * @public
         * @readonly
         */
        readonly eventActionName: OPTIONAL<EEAttributes_eventActionName>,
        /**
         * @summary `clientApplication`.
         * @public
         * @readonly
         */
        readonly clientApplication: OPTIONAL<Nullable<ApplicationReference>>,
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `enrollmentClass`.
         * @public
         * @readonly
         */
        readonly enrollmentClass: EE_Class,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<EE_Duration>,
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<Unsigned32>,
        /**
         * @summary `remainingAcceptableDelay`.
         * @public
         * @readonly
         */
        readonly remainingAcceptableDelay: OPTIONAL<Unsigned32>,
        /**
         * @summary `displayEnhancement`.
         * @public
         * @readonly
         */
        readonly displayEnhancement: EEAttributes_displayEnhancement,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: Identifier
    ) {}

    /**
     * @summary Restructures an object into a EEAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `EEAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EEAttributes`.
     * @returns {EEAttributes}
     */
    public static _from_object (_o: { [_K in keyof (EEAttributes)]: (EEAttributes)[_K] }): EEAttributes {
        return new EEAttributes(_o.eventEnrollmentName, _o.eventConditionName, _o.eventActionName, _o.clientApplication, _o.mmsDeletable, _o.enrollmentClass, _o.duration, _o.invokeID, _o.remainingAcceptableDelay, _o.displayEnhancement, _o.accessControlList);
    }

    /**
     * @summary Getter that returns the default value for `mmsDeletable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mmsDeletable () { return false; }
    /**
     * @summary Getter that returns the default value for `duration`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_duration () { return current; }
}

/**
 * @summary The Leading Root Component Types of EEAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EEAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventActionName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("clientApplication", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mmsDeletable", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("enrollmentClass", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("invokeID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("remainingAcceptableDelay", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("displayEnhancement", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("accessControlList", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of EEAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EEAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EEAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EEAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EEAttributes: $.ASN1Decoder<EEAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EEAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EEAttributes (el: _Element): EEAttributes {
    if (!_cached_decoder_for_EEAttributes) { _cached_decoder_for_EEAttributes = function (el: _Element): EEAttributes {
    let eventEnrollmentName!: ObjectName;
    let eventConditionName!: EEAttributes_eventConditionName;
    let eventActionName: OPTIONAL<EEAttributes_eventActionName>;
    let clientApplication: OPTIONAL<Nullable<ApplicationReference>>;
    let mmsDeletable: OPTIONAL<BOOLEAN> = EEAttributes._default_value_for_mmsDeletable;
    let enrollmentClass!: EE_Class;
    let duration: OPTIONAL<EE_Duration> = EEAttributes._default_value_for_duration;
    let invokeID: OPTIONAL<Unsigned32>;
    let remainingAcceptableDelay: OPTIONAL<Unsigned32>;
    let displayEnhancement!: EEAttributes_displayEnhancement;
    let accessControlList!: Identifier;
    const callbacks: $.DecodingMap = {
        "eventEnrollmentName": (_el: _Element): void => { eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<EEAttributes_eventConditionName>(() => _decode_EEAttributes_eventConditionName)(_el); },
        "eventActionName": (_el: _Element): void => { eventActionName = $._decode_explicit<EEAttributes_eventActionName>(() => _decode_EEAttributes_eventActionName)(_el); },
        "clientApplication": (_el: _Element): void => { clientApplication = $._decode_explicit<Nullable<ApplicationReference>>(() => _get_decoder_for_Nullable<ApplicationReference>(_decode_ApplicationReference))(_el); },
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "enrollmentClass": (_el: _Element): void => { enrollmentClass = $._decode_implicit<EE_Class>(() => _decode_EE_Class)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<EE_Duration>(() => _decode_EE_Duration)(_el); },
        "invokeID": (_el: _Element): void => { invokeID = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "remainingAcceptableDelay": (_el: _Element): void => { remainingAcceptableDelay = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "displayEnhancement": (_el: _Element): void => { displayEnhancement = $._decode_explicit<EEAttributes_displayEnhancement>(() => _decode_EEAttributes_displayEnhancement)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EEAttributes,
        _extension_additions_list_spec_for_EEAttributes,
        _root_component_type_list_2_spec_for_EEAttributes,
        undefined,
    );
    return new EEAttributes(
        eventEnrollmentName,
        eventConditionName,
        eventActionName,
        clientApplication,
        mmsDeletable,
        enrollmentClass,
        duration,
        invokeID,
        remainingAcceptableDelay,
        displayEnhancement,
        accessControlList
    );
}; }
    return _cached_decoder_for_EEAttributes(el);
}

let _cached_encoder_for_EEAttributes: $.ASN1Encoder<EEAttributes> | null = null;

/**
 * @summary Encodes a(n) EEAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EEAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_EEAttributes (value: EEAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EEAttributes) { _cached_encoder_for_EEAttributes = function (value: EEAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_EEAttributes_eventConditionName, $.BER)(value.eventConditionName, $.BER),
            /* IF_ABSENT  */ ((value.eventActionName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_EEAttributes_eventActionName, $.BER)(value.eventActionName, $.BER)),
            /* IF_ABSENT  */ ((value.clientApplication === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _get_encoder_for_Nullable<ApplicationReference>(_encode_ApplicationReference), $.BER)(value.clientApplication, $.BER)),
            /* IF_DEFAULT */ (value.mmsDeletable === undefined || $.deepEq(value.mmsDeletable, EEAttributes._default_value_for_mmsDeletable) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EE_Class, $.BER)(value.enrollmentClass, $.BER),
            /* IF_DEFAULT */ (value.duration === undefined || $.deepEq(value.duration, EEAttributes._default_value_for_duration) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EE_Duration, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.invokeID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Unsigned32, $.BER)(value.invokeID, $.BER)),
            /* IF_ABSENT  */ ((value.remainingAcceptableDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Unsigned32, $.BER)(value.remainingAcceptableDelay, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 9, () => _encode_EEAttributes_displayEnhancement, $.BER)(value.displayEnhancement, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 11, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EEAttributes(value, elGetter);
}


/* eslint-enable */
