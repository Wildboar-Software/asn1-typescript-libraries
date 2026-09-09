/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    OCTET_STRING,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { LampID, _decode_LampID, _encode_LampID } from "../CSTA-physical-device-feature/LampID.ta.mjs";

import { LampMode, _decode_LampMode, _encode_LampMode } from "../CSTA-physical-device-feature/LampMode.ta.mjs";

import {
    LampBrightness,
    _enum_for_LampBrightness,
    _decode_LampBrightness,
    _encode_LampBrightness
} from "../CSTA-physical-device-feature/LampBrightness.ta.mjs";

import { LampColor, _decode_LampColor, _encode_LampColor } from "../CSTA-physical-device-feature/LampColor.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary LampModeEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampModeEvent ::= SEQUENCE
 * {    device                SubjectDeviceID,
 *     lamp                LampID,
 *     lampLabel            OCTET STRING                OPTIONAL,
 *     lampMode            LampMode,
 *     lampBrightness            LampBrightness                OPTIONAL,
 *     lampColor            LampColor                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LampModeEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `lamp`.
         * @public
         * @readonly
         */
        readonly lamp: LampID,
        /**
         * @summary `lampLabel`.
         * @public
         * @readonly
         */
        readonly lampLabel: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `lampMode`.
         * @public
         * @readonly
         */
        readonly lampMode: LampMode,
        /**
         * @summary `lampBrightness`.
         * @public
         * @readonly
         */
        readonly lampBrightness: OPTIONAL<LampBrightness>,
        /**
         * @summary `lampColor`.
         * @public
         * @readonly
         */
        readonly lampColor: OPTIONAL<LampColor>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a LampModeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `LampModeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LampModeEvent`.
     * @returns {LampModeEvent}
     */
    public static _from_object (_o: { [_K in keyof (LampModeEvent)]: (LampModeEvent)[_K] }): LampModeEvent {
        return new LampModeEvent(_o.device, _o.lamp, _o.lampLabel, _o.lampMode, _o.lampBrightness, _o.lampColor, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `lampBrightness`
         * @public
         * @static
         */

    public static _enum_for_lampBrightness = _enum_for_LampBrightness;
}

/**
 * @summary The Leading Root Component Types of LampModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LampModeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("lamp", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lampLabel", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("lampMode", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lampBrightness", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("lampColor", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of LampModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LampModeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LampModeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LampModeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LampModeEvent: $.ASN1Decoder<LampModeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampModeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampModeEvent (el: _Element): LampModeEvent {
    if (!_cached_decoder_for_LampModeEvent) { _cached_decoder_for_LampModeEvent = function (el: _Element): LampModeEvent {
    let device!: SubjectDeviceID;
    let lamp!: LampID;
    let lampLabel: OPTIONAL<OCTET_STRING>;
    let lampMode!: LampMode;
    let lampBrightness: OPTIONAL<LampBrightness>;
    let lampColor: OPTIONAL<LampColor>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "lamp": (_el: _Element): void => { lamp = _decode_LampID(_el); },
        "lampLabel": (_el: _Element): void => { lampLabel = $._decodeOctetString(_el); },
        "lampMode": (_el: _Element): void => { lampMode = _decode_LampMode(_el); },
        "lampBrightness": (_el: _Element): void => { lampBrightness = _decode_LampBrightness(_el); },
        "lampColor": (_el: _Element): void => { lampColor = _decode_LampColor(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LampModeEvent,
        _extension_additions_list_spec_for_LampModeEvent,
        _root_component_type_list_2_spec_for_LampModeEvent,
        undefined,
    );
    return new LampModeEvent(
        device,
        lamp,
        lampLabel,
        lampMode,
        lampBrightness,
        lampColor,
        extensions
    );
}; }
    return _cached_decoder_for_LampModeEvent(el);
}

let _cached_encoder_for_LampModeEvent: $.ASN1Encoder<LampModeEvent> | null = null;

/**
 * @summary Encodes a(n) LampModeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampModeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_LampModeEvent (value: LampModeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampModeEvent) { _cached_encoder_for_LampModeEvent = function (value: LampModeEvent, elGetter: $.ASN1Encoder<LampModeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_LampID(value.lamp, $.BER),
            /* IF_ABSENT  */ ((value.lampLabel === undefined) ? undefined : $._encodeOctetString(value.lampLabel, $.BER)),
            /* REQUIRED   */ _encode_LampMode(value.lampMode, $.BER),
            /* IF_ABSENT  */ ((value.lampBrightness === undefined) ? undefined : _encode_LampBrightness(value.lampBrightness, $.BER)),
            /* IF_ABSENT  */ ((value.lampColor === undefined) ? undefined : _encode_LampColor(value.lampColor, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LampModeEvent(value, elGetter);
}


/* eslint-enable */
