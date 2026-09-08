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
import * as $ from "asn1-ts/dist/functional.mjs";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
// export { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
import { ForwardingType, _enum_for_ForwardingType, ForwardingType_forwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardNoAns /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardNoAns /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardDND /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDND /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardBusyInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardBusyInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardBusyExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardBusyExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardNoAnsInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardNoAnsInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardNoAnsExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardNoAnsExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardImmInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardImmInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardImmExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardImmExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardDNDInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDNDInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardDNDExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDNDExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ForwardingType, _encode_ForwardingType } from "../CSTA-device-feature-types/ForwardingType.ta.mjs";
// export { ForwardingType, _enum_for_ForwardingType, ForwardingType_forwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardNoAns /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardNoAns /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardDND /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDND /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardBusyInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardBusyInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardBusyExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardBusyExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardNoAnsInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardNoAnsInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardNoAnsExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardNoAnsExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardImmInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardImmInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardImmExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardImmExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardDNDInt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDNDInt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingType_forwardDNDExt /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDNDExt /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ForwardingType, _encode_ForwardingType } from "../CSTA-device-feature-types/ForwardingType.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { ForwardDefault, _enum_for_ForwardDefault, ForwardDefault_forwardingTypeAndForwardDN /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardingTypeAndForwardDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardDefault_forwardingType /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardingType /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardDefault_forwardDN /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ForwardDefault, _encode_ForwardDefault } from "../CSTA-device-feature-types/ForwardDefault.ta.mjs";
// export { ForwardDefault, _enum_for_ForwardDefault, ForwardDefault_forwardingTypeAndForwardDN /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardingTypeAndForwardDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardDefault_forwardingType /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardingType /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardDefault_forwardDN /* IMPORTED_LONG_ENUMERATION_ITEM */, forwardDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ForwardDefault, _encode_ForwardDefault } from "../CSTA-device-feature-types/ForwardDefault.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ForwardingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingEvent ::= SEQUENCE
 * {    device                 SubjectDeviceID,
 *     forwardingType             ForwardingType                OPTIONAL,
 *     forwardStatus             BOOLEAN,
 *     forwardTo             DeviceID                OPTIONAL,
 *     forwardDefault             ForwardDefault                OPTIONAL,
 *     ringCount             INTEGER (1..100)            OPTIONAL,
 *     ringDuration            [4] IMPLICIT INTEGER            OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ForwardingEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `forwardingType`.
         * @public
         * @readonly
         */
        readonly forwardingType: OPTIONAL<ForwardingType>,
        /**
         * @summary `forwardStatus`.
         * @public
         * @readonly
         */
        readonly forwardStatus: BOOLEAN,
        /**
         * @summary `forwardTo`.
         * @public
         * @readonly
         */
        readonly forwardTo: OPTIONAL<DeviceID>,
        /**
         * @summary `forwardDefault`.
         * @public
         * @readonly
         */
        readonly forwardDefault: OPTIONAL<ForwardDefault>,
        /**
         * @summary `ringCount`.
         * @public
         * @readonly
         */
        readonly ringCount: OPTIONAL<INTEGER>,
        /**
         * @summary `ringDuration`.
         * @public
         * @readonly
         */
        readonly ringDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ForwardingEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardingEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardingEvent`.
     * @returns {ForwardingEvent}
     */
    public static _from_object (_o: { [_K in keyof (ForwardingEvent)]: (ForwardingEvent)[_K] }): ForwardingEvent {
        return new ForwardingEvent(_o.device, _o.forwardingType, _o.forwardStatus, _o.forwardTo, _o.forwardDefault, _o.ringCount, _o.ringDuration, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `forwardingType`
         * @public
         * @static
         */

    public static _enum_for_forwardingType = _enum_for_ForwardingType;        /**
         * @summary The enum used as the type of the component `forwardDefault`
         * @public
         * @static
         */

    public static _enum_for_forwardDefault = _enum_for_ForwardDefault;
}

/**
 * @summary The Leading Root Component Types of ForwardingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardingEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("forwardingType", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("forwardStatus", false, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("forwardTo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("forwardDefault", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("ringCount", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("ringDuration", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ForwardingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardingEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardingEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardingEvent: $.ASN1Decoder<ForwardingEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingEvent (el: _Element): ForwardingEvent {
    if (!_cached_decoder_for_ForwardingEvent) { _cached_decoder_for_ForwardingEvent = function (el: _Element): ForwardingEvent {
    let device!: SubjectDeviceID;
    let forwardingType: OPTIONAL<ForwardingType>;
    let forwardStatus!: BOOLEAN;
    let forwardTo: OPTIONAL<DeviceID>;
    let forwardDefault: OPTIONAL<ForwardDefault>;
    let ringCount: OPTIONAL<INTEGER>;
    let ringDuration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "forwardingType": (_el: _Element): void => { forwardingType = _decode_ForwardingType(_el); },
        "forwardStatus": (_el: _Element): void => { forwardStatus = $._decodeBoolean(_el); },
        "forwardTo": (_el: _Element): void => { forwardTo = _decode_DeviceID(_el); },
        "forwardDefault": (_el: _Element): void => { forwardDefault = _decode_ForwardDefault(_el); },
        "ringCount": (_el: _Element): void => { ringCount = $._decodeInteger(_el); },
        "ringDuration": (_el: _Element): void => { ringDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardingEvent,
        _extension_additions_list_spec_for_ForwardingEvent,
        _root_component_type_list_2_spec_for_ForwardingEvent,
        undefined,
    );
    return new ForwardingEvent(
        device,
        forwardingType,
        forwardStatus,
        forwardTo,
        forwardDefault,
        ringCount,
        ringDuration,
        extensions
    );
}; }
    return _cached_decoder_for_ForwardingEvent(el);
}

let _cached_encoder_for_ForwardingEvent: $.ASN1Encoder<ForwardingEvent> | null = null;

/**
 * @summary Encodes a(n) ForwardingEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingEvent (value: ForwardingEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingEvent) { _cached_encoder_for_ForwardingEvent = function (value: ForwardingEvent, elGetter: $.ASN1Encoder<ForwardingEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.forwardingType === undefined) ? undefined : _encode_ForwardingType(value.forwardingType, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.forwardStatus, $.BER),
            /* IF_ABSENT  */ ((value.forwardTo === undefined) ? undefined : _encode_DeviceID(value.forwardTo, $.BER)),
            /* IF_ABSENT  */ ((value.forwardDefault === undefined) ? undefined : _encode_ForwardDefault(value.forwardDefault, $.BER)),
            /* IF_ABSENT  */ ((value.ringCount === undefined) ? undefined : $._encodeInteger(value.ringCount, $.BER)),
            /* IF_ABSENT  */ ((value.ringDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.ringDuration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardingEvent(value, elGetter);
}


/* eslint-enable */
