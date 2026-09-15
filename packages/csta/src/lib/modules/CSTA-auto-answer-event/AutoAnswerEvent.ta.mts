/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary AutoAnswerEvent
 * @description
 *
 * Auto Answer event (ECMA-269 §22.2.7 / ECMA-285 §20.2.7). Direction: SF→CF via
 * Event Report. Auto-answer on/off changed (telephone or Set Auto Answer). Not
 * generated when a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AutoAnswerEvent ::= SEQUENCE
 * {    invokingDevice             SubjectDeviceID,
 *     autoAnswerOn            BOOLEAN,
 *     numberOfRings            INTEGER                    OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AutoAnswerEvent {
    constructor (
        /**
         * @summary `invokingDevice`.
         * @description
         *
         * Device whose auto-answer status changed.
         * @public
         * @readonly
         */
        readonly invokingDevice: SubjectDeviceID,
        /**
         * @summary `autoAnswerOn`.
         * @description
         *
         * FALSE = disabled; TRUE = enabled.
         * @public
         * @readonly
         */
        readonly autoAnswerOn: BOOLEAN,
        /**
         * @summary `numberOfRings`.
         * @description
         *
         * Rings before a call is auto-answered.
         * @public
         * @readonly
         */
        readonly numberOfRings: OPTIONAL<INTEGER>,
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
     * @summary Restructures an object into a AutoAnswerEvent
     * @description
     * 
     * This takes an `object` and converts it to a `AutoAnswerEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoAnswerEvent`.
     * @returns {AutoAnswerEvent}
     */
    public static _from_object (_o: { [_K in keyof (AutoAnswerEvent)]: (AutoAnswerEvent)[_K] }): AutoAnswerEvent {
        return new AutoAnswerEvent(_o.invokingDevice, _o.autoAnswerOn, _o.numberOfRings, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of AutoAnswerEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AutoAnswerEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("invokingDevice", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("autoAnswerOn", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("numberOfRings", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of AutoAnswerEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AutoAnswerEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AutoAnswerEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AutoAnswerEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AutoAnswerEvent: $.ASN1Decoder<AutoAnswerEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoAnswerEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AutoAnswerEvent (el: _Element): AutoAnswerEvent {
    if (!_cached_decoder_for_AutoAnswerEvent) { _cached_decoder_for_AutoAnswerEvent = function (el: _Element): AutoAnswerEvent {
    let invokingDevice!: SubjectDeviceID;
    let autoAnswerOn!: BOOLEAN;
    let numberOfRings: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "invokingDevice": (_el: _Element): void => { invokingDevice = _decode_SubjectDeviceID(_el); },
        "autoAnswerOn": (_el: _Element): void => { autoAnswerOn = $._decodeBoolean(_el); },
        "numberOfRings": (_el: _Element): void => { numberOfRings = $._decodeInteger(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AutoAnswerEvent,
        _extension_additions_list_spec_for_AutoAnswerEvent,
        _root_component_type_list_2_spec_for_AutoAnswerEvent,
        undefined,
    );
    return new AutoAnswerEvent(
        invokingDevice,
        autoAnswerOn,
        numberOfRings,
        extensions
    );
}; }
    return _cached_decoder_for_AutoAnswerEvent(el);
}

let _cached_encoder_for_AutoAnswerEvent: $.ASN1Encoder<AutoAnswerEvent> | null = null;

/**
 * @summary Encodes a(n) AutoAnswerEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoAnswerEvent, encoded as an ASN.1 Element.
 */
export
function _encode_AutoAnswerEvent (value: AutoAnswerEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AutoAnswerEvent) { _cached_encoder_for_AutoAnswerEvent = function (value: AutoAnswerEvent, elGetter: $.ASN1Encoder<AutoAnswerEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.invokingDevice, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.autoAnswerOn, $.BER),
            /* IF_ABSENT  */ ((value.numberOfRings === undefined) ? undefined : $._encodeInteger(value.numberOfRings, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AutoAnswerEvent(value, elGetter);
}


/* eslint-enable */
