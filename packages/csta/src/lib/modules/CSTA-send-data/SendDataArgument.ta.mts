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
import { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";

import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";

import { DisplayAttributeList, _decode_DisplayAttributeList, _encode_DisplayAttributeList } from "../CSTA-device-feature-types/DisplayAttributeList.ta.mjs";

import {
    EventCause,
    _enum_for_EventCause,
    _decode_EventCause,
    _encode_EventCause
} from "../CSTA-event-causes/EventCause.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SendDataArgument
 * @description
 *
 * Path, payload, optional display attributes, and `ioCause` when explaining why
 * data is sent (ECMA-269 §24.2.6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendDataArgument ::= SEQUENCE
 * {    ioCrossRefID            IOCrossRefID,
 *     ioRegisterReqID            [0] IMPLICIT IORegisterReqID        OPTIONAL,
 *     displayAttributes        DisplayAttributeList            OPTIONAL,
 *     ioData                OCTET STRING,
 *     ioCause                EventCause                OPTIONAL,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SendDataArgument {
    constructor (
        /**
         * @summary `ioCrossRefID`.
         * @description
         *
         * Cross-reference for the data path, including which side started it
         * (ECMA-269 §6.2.1 / §6.2.3).
         *
         * @public
         * @readonly
         */
        readonly ioCrossRefID: IOCrossRefID,
        /**
         * @summary `ioRegisterReqID`.
         * @description
         *
         * I/O registration identifier. Mandatory if the switching function
         * supports I/O registration and the data path was requested by the
         * switching function; otherwise absent (ECMA-269 §6.2.2).
         *
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `displayAttributes`.
         * @description
         *
         * Only when `ioData` updates a device display (ECMA-269 §24.2.6.1).
         *
         * @public
         * @readonly
         */
        readonly displayAttributes: OPTIONAL<DisplayAttributeList>,
        /**
         * @summary `ioData`.
         * @description
         *
         * Data to send. For a display, concatenated row text (including
         * spaces); a null string clears the display (ECMA-269 §24.2.6.1).
         *
         * @public
         * @readonly
         */
        readonly ioData: OCTET_STRING,
        /**
         * @summary `ioCause`.
         * @description
         *
         * Why data is sent, using `EventCause`: terminationCharacterReceived,
         * characterCountReached, timeout, or switchingFunctionTerminated
         * (ECMA-269 §24.2.6.1).
         *
         * @public
         * @readonly
         */
        readonly ioCause: OPTIONAL<EventCause>,
        /**
         * @summary `extensions`.
         * @description
         *
         * CSTACommonArguments carrying the service-table security and
         * privateData parameters.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SendDataArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SendDataArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendDataArgument`.
     * @returns {SendDataArgument}
     */
    public static _from_object (_o: { [_K in keyof (SendDataArgument)]: (SendDataArgument)[_K] }): SendDataArgument {
        return new SendDataArgument(_o.ioCrossRefID, _o.ioRegisterReqID, _o.displayAttributes, _o.ioData, _o.ioCause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `ioCause`
         * @public
         * @static
         */

    public static _enum_for_ioCause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of SendDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendDataArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefID", false, $.hasAnyTag),
    new $.ComponentSpec("ioRegisterReqID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("displayAttributes", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("ioData", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("ioCause", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SendDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendDataArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendDataArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendDataArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendDataArgument: $.ASN1Decoder<SendDataArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendDataArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendDataArgument (el: _Element): SendDataArgument {
    if (!_cached_decoder_for_SendDataArgument) { _cached_decoder_for_SendDataArgument = function (el: _Element): SendDataArgument {
    let ioCrossRefID!: IOCrossRefID;
    let ioRegisterReqID: OPTIONAL<IORegisterReqID>;
    let displayAttributes: OPTIONAL<DisplayAttributeList>;
    let ioData!: OCTET_STRING;
    let ioCause: OPTIONAL<EventCause>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefID": (_el: _Element): void => { ioCrossRefID = _decode_IOCrossRefID(_el); },
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = $._decode_implicit<IORegisterReqID>(() => _decode_IORegisterReqID)(_el); },
        "displayAttributes": (_el: _Element): void => { displayAttributes = _decode_DisplayAttributeList(_el); },
        "ioData": (_el: _Element): void => { ioData = $._decodeOctetString(_el); },
        "ioCause": (_el: _Element): void => { ioCause = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendDataArgument,
        _extension_additions_list_spec_for_SendDataArgument,
        _root_component_type_list_2_spec_for_SendDataArgument,
        undefined,
    );
    return new SendDataArgument(
        ioCrossRefID,
        ioRegisterReqID,
        displayAttributes,
        ioData,
        ioCause,
        extensions
    );
}; }
    return _cached_decoder_for_SendDataArgument(el);
}

let _cached_encoder_for_SendDataArgument: $.ASN1Encoder<SendDataArgument> | null = null;

/**
 * @summary Encodes a(n) SendDataArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendDataArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SendDataArgument (value: SendDataArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendDataArgument) { _cached_encoder_for_SendDataArgument = function (value: SendDataArgument, elGetter: $.ASN1Encoder<SendDataArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IOCrossRefID(value.ioCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.ioRegisterReqID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IORegisterReqID, $.BER)(value.ioRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.displayAttributes === undefined) ? undefined : _encode_DisplayAttributeList(value.displayAttributes, $.BER)),
            /* REQUIRED   */ $._encodeOctetString(value.ioData, $.BER),
            /* IF_ABSENT  */ ((value.ioCause === undefined) ? undefined : _encode_EventCause(value.ioCause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendDataArgument(value, elGetter);
}


/* eslint-enable */
