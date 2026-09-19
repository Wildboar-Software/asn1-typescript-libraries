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
import { LINotificationType, _enum_for_LINotificationType, LINotificationType_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LINotificationType_deactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LINotificationType_modification /* IMPORTED_LONG_ENUMERATION_ITEM */, modification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LINotificationType, _encode_LINotificationType } from "../TS33128Payloads/LINotificationType.ta.mjs";
// export { LINotificationType, _enum_for_LINotificationType, LINotificationType_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LINotificationType_deactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LINotificationType_modification /* IMPORTED_LONG_ENUMERATION_ITEM */, modification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LINotificationType, _encode_LINotificationType } from "../TS33128Payloads/LINotificationType.ta.mjs";
import { TargetIdentifier, _decode_TargetIdentifier, _encode_TargetIdentifier } from "../TS33128Payloads/TargetIdentifier.ta.mjs";
// export { TargetIdentifier, _decode_TargetIdentifier, _encode_TargetIdentifier } from "../TS33128Payloads/TargetIdentifier.ta.mjs";
import { LIAppliedDeliveryInformation, _decode_LIAppliedDeliveryInformation, _encode_LIAppliedDeliveryInformation } from "../TS33128Payloads/LIAppliedDeliveryInformation.ta.mjs";
// export { LIAppliedDeliveryInformation, _decode_LIAppliedDeliveryInformation, _encode_LIAppliedDeliveryInformation } from "../TS33128Payloads/LIAppliedDeliveryInformation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";


/**
 * @summary LINotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LINotification ::= SEQUENCE
 * {
 *     notificationType                    [1] LINotificationType,
 *     appliedTargetID                     [2] TargetIdentifier OPTIONAL,
 *     appliedDeliveryInformation          [3] SEQUENCE OF LIAppliedDeliveryInformation OPTIONAL,
 *     appliedStartTime                    [4] Timestamp OPTIONAL,
 *     appliedEndTime                      [5] Timestamp OPTIONAL,
 *     appliedTargetIsLocal                [6] BOOLEAN OPTIONAL,
 *     appliedTargetIsNonLocal             [7] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LINotification {
    constructor (
        /**
         * @summary `notificationType`.
         * @public
         * @readonly
         */
        readonly notificationType: LINotificationType,
        /**
         * @summary `appliedTargetID`.
         * @public
         * @readonly
         */
        readonly appliedTargetID: OPTIONAL<TargetIdentifier>,
        /**
         * @summary `appliedDeliveryInformation`.
         * @public
         * @readonly
         */
        readonly appliedDeliveryInformation: OPTIONAL<LIAppliedDeliveryInformation[]>,
        /**
         * @summary `appliedStartTime`.
         * @public
         * @readonly
         */
        readonly appliedStartTime: OPTIONAL<Timestamp>,
        /**
         * @summary `appliedEndTime`.
         * @public
         * @readonly
         */
        readonly appliedEndTime: OPTIONAL<Timestamp>,
        /**
         * @summary `appliedTargetIsLocal`.
         * @public
         * @readonly
         */
        readonly appliedTargetIsLocal: OPTIONAL<BOOLEAN>,
        /**
         * @summary `appliedTargetIsNonLocal`.
         * @public
         * @readonly
         */
        readonly appliedTargetIsNonLocal: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a LINotification
     * @description
     * 
     * This takes an `object` and converts it to a `LINotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LINotification`.
     * @returns {LINotification}
     */
    public static _from_object (_o: { [_K in keyof (LINotification)]: (LINotification)[_K] }): LINotification {
        return new LINotification(_o.notificationType, _o.appliedTargetID, _o.appliedDeliveryInformation, _o.appliedStartTime, _o.appliedEndTime, _o.appliedTargetIsLocal, _o.appliedTargetIsNonLocal);
    }

        /**
         * @summary The enum used as the type of the component `notificationType`
         * @public
         * @static
         */

    public static _enum_for_notificationType = _enum_for_LINotificationType;
}

/**
 * @summary The Leading Root Component Types of LINotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LINotification: $.ComponentSpec[] = [
    new $.ComponentSpec("notificationType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("appliedTargetID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("appliedDeliveryInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("appliedStartTime", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("appliedEndTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("appliedTargetIsLocal", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("appliedTargetIsNonLocal", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of LINotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LINotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LINotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LINotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LINotification: $.ASN1Decoder<LINotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LINotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LINotification (el: _Element): LINotification {
    if (!_cached_decoder_for_LINotification) { _cached_decoder_for_LINotification = function (el: _Element): LINotification {
    let notificationType!: LINotificationType;
    let appliedTargetID: OPTIONAL<TargetIdentifier>;
    let appliedDeliveryInformation: OPTIONAL<LIAppliedDeliveryInformation[]>;
    let appliedStartTime: OPTIONAL<Timestamp>;
    let appliedEndTime: OPTIONAL<Timestamp>;
    let appliedTargetIsLocal: OPTIONAL<BOOLEAN>;
    let appliedTargetIsNonLocal: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "notificationType": (_el: _Element): void => { notificationType = $._decode_implicit<LINotificationType>(() => _decode_LINotificationType)(_el); },
        "appliedTargetID": (_el: _Element): void => { appliedTargetID = $._decode_explicit<TargetIdentifier>(() => _decode_TargetIdentifier)(_el); },
        "appliedDeliveryInformation": (_el: _Element): void => { appliedDeliveryInformation = $._decode_implicit<LIAppliedDeliveryInformation[]>(() => $._decodeSequenceOf<LIAppliedDeliveryInformation>(() => _decode_LIAppliedDeliveryInformation))(_el); },
        "appliedStartTime": (_el: _Element): void => { appliedStartTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "appliedEndTime": (_el: _Element): void => { appliedEndTime = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "appliedTargetIsLocal": (_el: _Element): void => { appliedTargetIsLocal = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "appliedTargetIsNonLocal": (_el: _Element): void => { appliedTargetIsNonLocal = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LINotification,
        _extension_additions_list_spec_for_LINotification,
        _root_component_type_list_2_spec_for_LINotification,
        undefined,
    );
    return new LINotification(
        notificationType,
        appliedTargetID,
        appliedDeliveryInformation,
        appliedStartTime,
        appliedEndTime,
        appliedTargetIsLocal,
        appliedTargetIsNonLocal
    );
}; }
    return _cached_decoder_for_LINotification(el);
}

let _cached_encoder_for_LINotification: $.ASN1Encoder<LINotification> | null = null;

/**
 * @summary Encodes a(n) LINotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LINotification, encoded as an ASN.1 Element.
 */
export
function _encode_LINotification (value: LINotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LINotification) { _cached_encoder_for_LINotification = function (value: LINotification, elGetter: $.ASN1Encoder<LINotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LINotificationType, $.BER)(value.notificationType, $.BER),
            /* IF_ABSENT  */ ((value.appliedTargetID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_TargetIdentifier, $.BER)(value.appliedTargetID, $.BER)),
            /* IF_ABSENT  */ ((value.appliedDeliveryInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<LIAppliedDeliveryInformation>(() => _encode_LIAppliedDeliveryInformation, $.BER), $.BER)(value.appliedDeliveryInformation, $.BER)),
            /* IF_ABSENT  */ ((value.appliedStartTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.appliedStartTime, $.BER)),
            /* IF_ABSENT  */ ((value.appliedEndTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.appliedEndTime, $.BER)),
            /* IF_ABSENT  */ ((value.appliedTargetIsLocal === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.appliedTargetIsLocal, $.BER)),
            /* IF_ABSENT  */ ((value.appliedTargetIsNonLocal === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.appliedTargetIsNonLocal, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LINotification(value, elGetter);
}


/* eslint-enable */
