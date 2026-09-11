/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { ButtonID, _decode_ButtonID, _encode_ButtonID } from "../CSTA-physical-device-feature/ButtonID.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ButtonPressEvent
 * @description
 *
 * Button Press event (ECMA-269 §21.2.2 / ECMA-285 §19.2.2). Direction: SF→CF
 * via Event Report. A button was pressed (manually or Button Press service).
 * Not used to track the function the button represents (§21.2.2.2 FR 1). At
 * least one of `buttonLabel` or `buttonAssociatedNumber`. Not generated when a
 * Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonPressEvent ::= SEQUENCE
 * {    device                SubjectDeviceID,
 *     button                ButtonID,
 *     buttonLabel            IA5String (SIZE(0..64))            OPTIONAL,
 *     buttonAssociatedNumber        DeviceID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ButtonPressEvent {
    constructor (
        /**
         * @summary `device`.
         * @description
         *
         * Device where the button was pressed.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `button`.
         * @description
         *
         * Button that was pressed. Reserved ButtonIDs in Table 12-3: `0`–`9`,
         * `*`=10, `#`=11 (ECMA-269 §12.3.5).
         * @public
         * @readonly
         */
        readonly button: ButtonID,
        /**
         * @summary `buttonLabel`.
         * @description
         *
         * Label by which the button may be referenced.
         * @public
         * @readonly
         */
        readonly buttonLabel: OPTIONAL<IA5String>,
        /**
         * @summary `buttonAssociatedNumber`.
         * @description
         *
         * Diallable-digits number associated with the button.
         * @public
         * @readonly
         */
        readonly buttonAssociatedNumber: OPTIONAL<DeviceID>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ButtonPressEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ButtonPressEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ButtonPressEvent`.
     * @returns {ButtonPressEvent}
     */
    public static _from_object (_o: { [_K in keyof (ButtonPressEvent)]: (ButtonPressEvent)[_K] }): ButtonPressEvent {
        return new ButtonPressEvent(_o.device, _o.button, _o.buttonLabel, _o.buttonAssociatedNumber, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ButtonPressEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ButtonPressEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("button", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("buttonLabel", true, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("buttonAssociatedNumber", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ButtonPressEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ButtonPressEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ButtonPressEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ButtonPressEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ButtonPressEvent: $.ASN1Decoder<ButtonPressEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonPressEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonPressEvent (el: _Element): ButtonPressEvent {
    if (!_cached_decoder_for_ButtonPressEvent) { _cached_decoder_for_ButtonPressEvent = function (el: _Element): ButtonPressEvent {
    let device!: SubjectDeviceID;
    let button!: ButtonID;
    let buttonLabel: OPTIONAL<IA5String>;
    let buttonAssociatedNumber: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "button": (_el: _Element): void => { button = _decode_ButtonID(_el); },
        "buttonLabel": (_el: _Element): void => { buttonLabel = $._decodeIA5String(_el); },
        "buttonAssociatedNumber": (_el: _Element): void => { buttonAssociatedNumber = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ButtonPressEvent,
        _extension_additions_list_spec_for_ButtonPressEvent,
        _root_component_type_list_2_spec_for_ButtonPressEvent,
        undefined,
    );
    return new ButtonPressEvent(
        device,
        button,
        buttonLabel,
        buttonAssociatedNumber,
        extensions
    );
}; }
    return _cached_decoder_for_ButtonPressEvent(el);
}

let _cached_encoder_for_ButtonPressEvent: $.ASN1Encoder<ButtonPressEvent> | null = null;

/**
 * @summary Encodes a(n) ButtonPressEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonPressEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonPressEvent (value: ButtonPressEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonPressEvent) { _cached_encoder_for_ButtonPressEvent = function (value: ButtonPressEvent, elGetter: $.ASN1Encoder<ButtonPressEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* REQUIRED   */ _encode_ButtonID(value.button, $.BER),
            /* IF_ABSENT  */ ((value.buttonLabel === undefined) ? undefined : $._encodeIA5String(value.buttonLabel, $.BER)),
            /* IF_ABSENT  */ ((value.buttonAssociatedNumber === undefined) ? undefined : _encode_DeviceID(value.buttonAssociatedNumber, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ButtonPressEvent(value, elGetter);
}


/* eslint-enable */
