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
import { RingerID, _decode_RingerID, _encode_RingerID } from "../CSTA-physical-device-feature/RingerID.ta.mjs";
// export { RingerID, _decode_RingerID, _encode_RingerID } from "../CSTA-physical-device-feature/RingerID.ta.mjs";
import { RingMode, _enum_for_RingMode, RingMode_ringing /* IMPORTED_LONG_ENUMERATION_ITEM */, ringing /* IMPORTED_SHORT_ENUMERATION_ITEM */, RingMode_notRinging /* IMPORTED_LONG_ENUMERATION_ITEM */, notRinging /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RingMode, _encode_RingMode } from "../CSTA-physical-device-feature/RingMode.ta.mjs";
// export { RingMode, _enum_for_RingMode, RingMode_ringing /* IMPORTED_LONG_ENUMERATION_ITEM */, ringing /* IMPORTED_SHORT_ENUMERATION_ITEM */, RingMode_notRinging /* IMPORTED_LONG_ENUMERATION_ITEM */, notRinging /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RingMode, _encode_RingMode } from "../CSTA-physical-device-feature/RingMode.ta.mjs";
import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";
// export { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary RingerStatusEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingerStatusEvent ::= SEQUENCE
 * {    device                SubjectDeviceID,
 *     ringer                 RingerID,
 *     ringMode             RingMode                OPTIONAL,
 *     ringCount             [0] IMPLICIT INTEGER (0..1000)         OPTIONAL,
 *     ringDuration            [3] IMPLICIT INTEGER            OPTIONAL,
 *     ringPattern             [1] IMPLICIT INTEGER             OPTIONAL,
 *     ringVolume             [2] Volume                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RingerStatusEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `ringer`.
         * @public
         * @readonly
         */
        readonly ringer: RingerID,
        /**
         * @summary `ringMode`.
         * @public
         * @readonly
         */
        readonly ringMode: OPTIONAL<RingMode>,
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
         * @summary `ringPattern`.
         * @public
         * @readonly
         */
        readonly ringPattern: OPTIONAL<INTEGER>,
        /**
         * @summary `ringVolume`.
         * @public
         * @readonly
         */
        readonly ringVolume: OPTIONAL<Volume>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a RingerStatusEvent
     * @description
     * 
     * This takes an `object` and converts it to a `RingerStatusEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RingerStatusEvent`.
     * @returns {RingerStatusEvent}
     */
    public static _from_object (_o: { [_K in keyof (RingerStatusEvent)]: (RingerStatusEvent)[_K] }): RingerStatusEvent {
        return new RingerStatusEvent(_o.device, _o.ringer, _o.ringMode, _o.ringCount, _o.ringDuration, _o.ringPattern, _o.ringVolume, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `ringMode`
         * @public
         * @static
         */

    public static _enum_for_ringMode = _enum_for_RingMode;
}

/**
 * @summary The Leading Root Component Types of RingerStatusEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RingerStatusEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("ringer", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ringMode", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("ringCount", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ringDuration", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("ringPattern", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ringVolume", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RingerStatusEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RingerStatusEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RingerStatusEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RingerStatusEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RingerStatusEvent: $.ASN1Decoder<RingerStatusEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerStatusEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerStatusEvent (el: _Element): RingerStatusEvent {
    if (!_cached_decoder_for_RingerStatusEvent) { _cached_decoder_for_RingerStatusEvent = function (el: _Element): RingerStatusEvent {
    let device!: SubjectDeviceID;
    let ringer!: RingerID;
    let ringMode: OPTIONAL<RingMode>;
    let ringCount: OPTIONAL<INTEGER>;
    let ringDuration: OPTIONAL<INTEGER>;
    let ringPattern: OPTIONAL<INTEGER>;
    let ringVolume: OPTIONAL<Volume>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "ringer": (_el: _Element): void => { ringer = _decode_RingerID(_el); },
        "ringMode": (_el: _Element): void => { ringMode = _decode_RingMode(_el); },
        "ringCount": (_el: _Element): void => { ringCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringDuration": (_el: _Element): void => { ringDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringPattern": (_el: _Element): void => { ringPattern = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringVolume": (_el: _Element): void => { ringVolume = $._decode_explicit<Volume>(() => _decode_Volume)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RingerStatusEvent,
        _extension_additions_list_spec_for_RingerStatusEvent,
        _root_component_type_list_2_spec_for_RingerStatusEvent,
        undefined,
    );
    return new RingerStatusEvent(
        device,
        ringer,
        ringMode,
        ringCount,
        ringDuration,
        ringPattern,
        ringVolume,
        extensions
    );
}; }
    return _cached_decoder_for_RingerStatusEvent(el);
}

let _cached_encoder_for_RingerStatusEvent: $.ASN1Encoder<RingerStatusEvent> | null = null;

/**
 * @summary Encodes a(n) RingerStatusEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerStatusEvent, encoded as an ASN.1 Element.
 */
export
function _encode_RingerStatusEvent (value: RingerStatusEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerStatusEvent) { _cached_encoder_for_RingerStatusEvent = function (value: RingerStatusEvent, elGetter: $.ASN1Encoder<RingerStatusEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_RingerID(value.ringer, $.BER),
            /* IF_ABSENT  */ ((value.ringMode === undefined) ? undefined : _encode_RingMode(value.ringMode, $.BER)),
            /* IF_ABSENT  */ ((value.ringCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.ringCount, $.BER)),
            /* IF_ABSENT  */ ((value.ringDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.ringDuration, $.BER)),
            /* IF_ABSENT  */ ((value.ringPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.ringPattern, $.BER)),
            /* IF_ABSENT  */ ((value.ringVolume === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Volume, $.BER)(value.ringVolume, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RingerStatusEvent(value, elGetter);
}


/* eslint-enable */
