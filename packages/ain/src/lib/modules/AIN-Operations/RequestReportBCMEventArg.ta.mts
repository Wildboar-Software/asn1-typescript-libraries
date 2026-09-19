/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EDPRequest, _decode_EDPRequest, _encode_EDPRequest } from "../AIN-Parameters/EDPRequest.ta.mjs";
// export { EDPRequest, _decode_EDPRequest, _encode_EDPRequest } from "../AIN-Parameters/EDPRequest.ta.mjs";
import { EDPNotification, _decode_EDPNotification, _encode_EDPNotification } from "../AIN-Parameters/EDPNotification.ta.mjs";
// export { EDPNotification, _decode_EDPNotification, _encode_EDPNotification } from "../AIN-Parameters/EDPNotification.ta.mjs";
import { ONoAnswerTimer, _decode_ONoAnswerTimer, _encode_ONoAnswerTimer } from "../AIN-Parameters/ONoAnswerTimer.ta.mjs";
// export { ONoAnswerTimer, _decode_ONoAnswerTimer, _encode_ONoAnswerTimer } from "../AIN-Parameters/ONoAnswerTimer.ta.mjs";
import { TNoAnswerTimer, _decode_TNoAnswerTimer, _encode_TNoAnswerTimer } from "../AIN-Parameters/TNoAnswerTimer.ta.mjs";
// export { TNoAnswerTimer, _decode_TNoAnswerTimer, _encode_TNoAnswerTimer } from "../AIN-Parameters/TNoAnswerTimer.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { TimeoutTimer, _decode_TimeoutTimer, _encode_TimeoutTimer } from "../AIN-Parameters/TimeoutTimer.ta.mjs";
// export { TimeoutTimer, _decode_TimeoutTimer, _encode_TimeoutTimer } from "../AIN-Parameters/TimeoutTimer.ta.mjs";
import { ODTMFDigitsString, _decode_ODTMFDigitsString, _encode_ODTMFDigitsString } from "../AIN-Parameters/ODTMFDigitsString.ta.mjs";
// export { ODTMFDigitsString, _decode_ODTMFDigitsString, _encode_ODTMFDigitsString } from "../AIN-Parameters/ODTMFDigitsString.ta.mjs";
import { ODTMFNumberOfDigits, _decode_ODTMFNumberOfDigits, _encode_ODTMFNumberOfDigits } from "../AIN-Parameters/ODTMFNumberOfDigits.ta.mjs";
// export { ODTMFNumberOfDigits, _decode_ODTMFNumberOfDigits, _encode_ODTMFNumberOfDigits } from "../AIN-Parameters/ODTMFNumberOfDigits.ta.mjs";
import { TDTMFDigitString, _decode_TDTMFDigitString, _encode_TDTMFDigitString } from "../AIN-Parameters/TDTMFDigitString.ta.mjs";
// export { TDTMFDigitString, _decode_TDTMFDigitString, _encode_TDTMFDigitString } from "../AIN-Parameters/TDTMFDigitString.ta.mjs";
import { TDTMFNumberOfDigits, _decode_TDTMFNumberOfDigits, _encode_TDTMFNumberOfDigits } from "../AIN-Parameters/TDTMFNumberOfDigits.ta.mjs";
// export { TDTMFNumberOfDigits, _decode_TDTMFNumberOfDigits, _encode_TDTMFNumberOfDigits } from "../AIN-Parameters/TDTMFNumberOfDigits.ta.mjs";


/**
 * @summary RequestReportBCMEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportBCMEventArg ::= SEQUENCE{
 *         eDPRequest                        EDPRequest OPTIONAL,
 *         eDPNotification                   EDPNotification OPTIONAL,
 *         oNoAnswerTimer                    ONoAnswerTimer OPTIONAL,
 *         tNoAnswerTimer                    TNoAnswerTimer OPTIONAL,
 *         extensionParameter                [84] IMPLICIT ExtensionParameter OPTIONAL,
 *         timeoutTimer                      TimeoutTimer OPTIONAL,
 *         oDTMFDigitsString                 ODTMFDigitsString OPTIONAL,
 *         oDTMFNumberOfDigits               ODTMFNumberOfDigits OPTIONAL,
 *         tDTMFDigitString                  TDTMFDigitString OPTIONAL,
 *         tDTMFNumberOfDigits               TDTMFNumberOfDigits OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class RequestReportBCMEventArg {
    constructor (
        /**
         * @summary `eDPRequest`.
         * @public
         * @readonly
         */
        readonly eDPRequest: OPTIONAL<EDPRequest>,
        /**
         * @summary `eDPNotification`.
         * @public
         * @readonly
         */
        readonly eDPNotification: OPTIONAL<EDPNotification>,
        /**
         * @summary `oNoAnswerTimer`.
         * @public
         * @readonly
         */
        readonly oNoAnswerTimer: OPTIONAL<ONoAnswerTimer>,
        /**
         * @summary `tNoAnswerTimer`.
         * @public
         * @readonly
         */
        readonly tNoAnswerTimer: OPTIONAL<TNoAnswerTimer>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `timeoutTimer`.
         * @public
         * @readonly
         */
        readonly timeoutTimer: OPTIONAL<TimeoutTimer>,
        /**
         * @summary `oDTMFDigitsString`.
         * @public
         * @readonly
         */
        readonly oDTMFDigitsString: OPTIONAL<ODTMFDigitsString>,
        /**
         * @summary `oDTMFNumberOfDigits`.
         * @public
         * @readonly
         */
        readonly oDTMFNumberOfDigits: OPTIONAL<ODTMFNumberOfDigits>,
        /**
         * @summary `tDTMFDigitString`.
         * @public
         * @readonly
         */
        readonly tDTMFDigitString: OPTIONAL<TDTMFDigitString>,
        /**
         * @summary `tDTMFNumberOfDigits`.
         * @public
         * @readonly
         */
        readonly tDTMFNumberOfDigits: OPTIONAL<TDTMFNumberOfDigits>
    ) {}

    /**
     * @summary Restructures an object into a RequestReportBCMEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportBCMEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportBCMEventArg`.
     * @returns {RequestReportBCMEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportBCMEventArg)]: (RequestReportBCMEventArg)[_K] }): RequestReportBCMEventArg {
        return new RequestReportBCMEventArg(_o.eDPRequest, _o.eDPNotification, _o.oNoAnswerTimer, _o.tNoAnswerTimer, _o.extensionParameter, _o.timeoutTimer, _o.oDTMFDigitsString, _o.oDTMFNumberOfDigits, _o.tDTMFDigitString, _o.tDTMFNumberOfDigits);
    }


}

/**
 * @summary The Leading Root Component Types of RequestReportBCMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportBCMEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("eDPRequest", true, $.hasTag(_TagClass.context, 92)),
    new $.ComponentSpec("eDPNotification", true, $.hasTag(_TagClass.context, 93)),
    new $.ComponentSpec("oNoAnswerTimer", true, $.hasTag(_TagClass.context, 91)),
    new $.ComponentSpec("tNoAnswerTimer", true, $.hasTag(_TagClass.context, 99)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("timeoutTimer", true, $.hasTag(_TagClass.context, 139)),
    new $.ComponentSpec("oDTMFDigitsString", true, $.hasTag(_TagClass.context, 154)),
    new $.ComponentSpec("oDTMFNumberOfDigits", true, $.hasTag(_TagClass.context, 155)),
    new $.ComponentSpec("tDTMFDigitString", true, $.hasTag(_TagClass.context, 157)),
    new $.ComponentSpec("tDTMFNumberOfDigits", true, $.hasTag(_TagClass.context, 158))
];

/**
 * @summary The Trailing Root Component Types of RequestReportBCMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportBCMEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportBCMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportBCMEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportBCMEventArg: $.ASN1Decoder<RequestReportBCMEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportBCMEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportBCMEventArg (el: _Element): RequestReportBCMEventArg {
    if (!_cached_decoder_for_RequestReportBCMEventArg) { _cached_decoder_for_RequestReportBCMEventArg = function (el: _Element): RequestReportBCMEventArg {
    let eDPRequest: OPTIONAL<EDPRequest>;
    let eDPNotification: OPTIONAL<EDPNotification>;
    let oNoAnswerTimer: OPTIONAL<ONoAnswerTimer>;
    let tNoAnswerTimer: OPTIONAL<TNoAnswerTimer>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let timeoutTimer: OPTIONAL<TimeoutTimer>;
    let oDTMFDigitsString: OPTIONAL<ODTMFDigitsString>;
    let oDTMFNumberOfDigits: OPTIONAL<ODTMFNumberOfDigits>;
    let tDTMFDigitString: OPTIONAL<TDTMFDigitString>;
    let tDTMFNumberOfDigits: OPTIONAL<TDTMFNumberOfDigits>;
    const callbacks: $.DecodingMap = {
        "eDPRequest": (_el: _Element): void => { eDPRequest = _decode_EDPRequest(_el); },
        "eDPNotification": (_el: _Element): void => { eDPNotification = _decode_EDPNotification(_el); },
        "oNoAnswerTimer": (_el: _Element): void => { oNoAnswerTimer = _decode_ONoAnswerTimer(_el); },
        "tNoAnswerTimer": (_el: _Element): void => { tNoAnswerTimer = _decode_TNoAnswerTimer(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "timeoutTimer": (_el: _Element): void => { timeoutTimer = _decode_TimeoutTimer(_el); },
        "oDTMFDigitsString": (_el: _Element): void => { oDTMFDigitsString = _decode_ODTMFDigitsString(_el); },
        "oDTMFNumberOfDigits": (_el: _Element): void => { oDTMFNumberOfDigits = _decode_ODTMFNumberOfDigits(_el); },
        "tDTMFDigitString": (_el: _Element): void => { tDTMFDigitString = _decode_TDTMFDigitString(_el); },
        "tDTMFNumberOfDigits": (_el: _Element): void => { tDTMFNumberOfDigits = _decode_TDTMFNumberOfDigits(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportBCMEventArg,
        _extension_additions_list_spec_for_RequestReportBCMEventArg,
        _root_component_type_list_2_spec_for_RequestReportBCMEventArg,
        undefined,
    );
    return new RequestReportBCMEventArg(
        eDPRequest,
        eDPNotification,
        oNoAnswerTimer,
        tNoAnswerTimer,
        extensionParameter,
        timeoutTimer,
        oDTMFDigitsString,
        oDTMFNumberOfDigits,
        tDTMFDigitString,
        tDTMFNumberOfDigits
    );
}; }
    return _cached_decoder_for_RequestReportBCMEventArg(el);
}

let _cached_encoder_for_RequestReportBCMEventArg: $.ASN1Encoder<RequestReportBCMEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportBCMEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportBCMEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportBCMEventArg (value: RequestReportBCMEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportBCMEventArg) { _cached_encoder_for_RequestReportBCMEventArg = function (value: RequestReportBCMEventArg, elGetter: $.ASN1Encoder<RequestReportBCMEventArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eDPRequest === undefined) ? undefined : _encode_EDPRequest(value.eDPRequest, $.BER)),
            /* IF_ABSENT  */ ((value.eDPNotification === undefined) ? undefined : _encode_EDPNotification(value.eDPNotification, $.BER)),
            /* IF_ABSENT  */ ((value.oNoAnswerTimer === undefined) ? undefined : _encode_ONoAnswerTimer(value.oNoAnswerTimer, $.BER)),
            /* IF_ABSENT  */ ((value.tNoAnswerTimer === undefined) ? undefined : _encode_TNoAnswerTimer(value.tNoAnswerTimer, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.timeoutTimer === undefined) ? undefined : _encode_TimeoutTimer(value.timeoutTimer, $.BER)),
            /* IF_ABSENT  */ ((value.oDTMFDigitsString === undefined) ? undefined : _encode_ODTMFDigitsString(value.oDTMFDigitsString, $.BER)),
            /* IF_ABSENT  */ ((value.oDTMFNumberOfDigits === undefined) ? undefined : _encode_ODTMFNumberOfDigits(value.oDTMFNumberOfDigits, $.BER)),
            /* IF_ABSENT  */ ((value.tDTMFDigitString === undefined) ? undefined : _encode_TDTMFDigitString(value.tDTMFDigitString, $.BER)),
            /* IF_ABSENT  */ ((value.tDTMFNumberOfDigits === undefined) ? undefined : _encode_TDTMFNumberOfDigits(value.tDTMFNumberOfDigits, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestReportBCMEventArg(value, elGetter);
}


/* eslint-enable */
