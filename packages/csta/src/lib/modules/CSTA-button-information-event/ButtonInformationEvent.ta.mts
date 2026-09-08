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
import { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";
// export { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ButtonInformationEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonInformationEvent ::= SEQUENCE
 * {    device                SubjectDeviceID,
 *     button                ButtonID,
 *     buttonLabel            IA5String (SIZE(0..64))            OPTIONAL,
 *     buttonAssociatedNumber        DeviceID                OPTIONAL,
 *     buttonPressIndicator        BOOLEAN                    OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ButtonInformationEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `button`.
         * @public
         * @readonly
         */
        readonly button: ButtonID,
        /**
         * @summary `buttonLabel`.
         * @public
         * @readonly
         */
        readonly buttonLabel: OPTIONAL<IA5String>,
        /**
         * @summary `buttonAssociatedNumber`.
         * @public
         * @readonly
         */
        readonly buttonAssociatedNumber: OPTIONAL<DeviceID>,
        /**
         * @summary `buttonPressIndicator`.
         * @public
         * @readonly
         */
        readonly buttonPressIndicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ButtonInformationEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ButtonInformationEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ButtonInformationEvent`.
     * @returns {ButtonInformationEvent}
     */
    public static _from_object (_o: { [_K in keyof (ButtonInformationEvent)]: (ButtonInformationEvent)[_K] }): ButtonInformationEvent {
        return new ButtonInformationEvent(_o.device, _o.button, _o.buttonLabel, _o.buttonAssociatedNumber, _o.buttonPressIndicator, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ButtonInformationEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ButtonInformationEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("button", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("buttonLabel", true, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("buttonAssociatedNumber", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("buttonPressIndicator", true, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ButtonInformationEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ButtonInformationEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ButtonInformationEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ButtonInformationEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ButtonInformationEvent: $.ASN1Decoder<ButtonInformationEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonInformationEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonInformationEvent (el: _Element): ButtonInformationEvent {
    if (!_cached_decoder_for_ButtonInformationEvent) { _cached_decoder_for_ButtonInformationEvent = function (el: _Element): ButtonInformationEvent {
    let device!: SubjectDeviceID;
    let button!: ButtonID;
    let buttonLabel: OPTIONAL<IA5String>;
    let buttonAssociatedNumber: OPTIONAL<DeviceID>;
    let buttonPressIndicator: OPTIONAL<BOOLEAN>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "button": (_el: _Element): void => { button = _decode_ButtonID(_el); },
        "buttonLabel": (_el: _Element): void => { buttonLabel = $._decodeIA5String(_el); },
        "buttonAssociatedNumber": (_el: _Element): void => { buttonAssociatedNumber = _decode_DeviceID(_el); },
        "buttonPressIndicator": (_el: _Element): void => { buttonPressIndicator = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ButtonInformationEvent,
        _extension_additions_list_spec_for_ButtonInformationEvent,
        _root_component_type_list_2_spec_for_ButtonInformationEvent,
        undefined,
    );
    return new ButtonInformationEvent(
        device,
        button,
        buttonLabel,
        buttonAssociatedNumber,
        buttonPressIndicator,
        extensions
    );
}; }
    return _cached_decoder_for_ButtonInformationEvent(el);
}

let _cached_encoder_for_ButtonInformationEvent: $.ASN1Encoder<ButtonInformationEvent> | null = null;

/**
 * @summary Encodes a(n) ButtonInformationEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonInformationEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonInformationEvent (value: ButtonInformationEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonInformationEvent) { _cached_encoder_for_ButtonInformationEvent = function (value: ButtonInformationEvent, elGetter: $.ASN1Encoder<ButtonInformationEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_ButtonID(value.button, $.BER),
            /* IF_ABSENT  */ ((value.buttonLabel === undefined) ? undefined : $._encodeIA5String(value.buttonLabel, $.BER)),
            /* IF_ABSENT  */ ((value.buttonAssociatedNumber === undefined) ? undefined : _encode_DeviceID(value.buttonAssociatedNumber, $.BER)),
            /* IF_ABSENT  */ ((value.buttonPressIndicator === undefined) ? undefined : $._encodeBoolean(value.buttonPressIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ButtonInformationEvent(value, elGetter);
}


/* eslint-enable */
