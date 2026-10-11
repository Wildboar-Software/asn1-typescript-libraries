/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallTerminationIndicator, _decode_CallTerminationIndicator, _encode_CallTerminationIndicator, _enum_for_CallTerminationIndicator } from "../MAP-CH-DataTypes/CallTerminationIndicator.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { IST_AlertTimerValue, _decode_IST_AlertTimerValue, _encode_IST_AlertTimerValue } from "../MAP-MS-DataTypes/IST-AlertTimerValue.ta.mjs";


/**
 * @summary IST_AlertRes
 * @description
 *
 * Result of MAP_IST_ALERT (3GPP TS 29.002 V19.1.0 clauses 10.13 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IST-AlertRes ::= SEQUENCE{
 *     istAlertTimer    [0]    IST-AlertTimerValue    OPTIONAL,
 *     istInformationWithdraw    [1]    NULL    OPTIONAL,
 *     callTerminationIndicator    [2]    CallTerminationIndicator    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class IST_AlertRes {
    constructor (
        /**
         * @summary `istAlertTimer`.
         * @description
         *
         * IST alert timer value.
         *
         * @public
         * @readonly
         */
        readonly istAlertTimer: OPTIONAL<IST_AlertTimerValue>,
        /**
         * @summary `istInformationWithdraw`.
         * @description
         *
         * Withdraw IST information.
         *
         * @public
         * @readonly
         */
        readonly istInformationWithdraw: OPTIONAL<NULL>,
        /**
         * @summary `callTerminationIndicator`.
         * @description
         *
         * Which call activities to terminate.
         *
         * @public
         * @readonly
         */
        readonly callTerminationIndicator: OPTIONAL<CallTerminationIndicator>,
        /**
         * @summary `extensionContainer`.
         * @description
         *
         * Private or PCS extensions (3GPP TS 29.002 V19.1.0 clause 17.7.11).
         *
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IST_AlertRes
     * @description
     * 
     * This takes an `object` and converts it to a `IST_AlertRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IST_AlertRes`.
     * @returns {IST_AlertRes}
     */
    public static _from_object (_o: { [_K in keyof (IST_AlertRes)]: (IST_AlertRes)[_K] }): IST_AlertRes {
        return new IST_AlertRes(_o.istAlertTimer, _o.istInformationWithdraw, _o.callTerminationIndicator, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `callTerminationIndicator`
         * @public
         * @static
         */

    public static _enum_for_callTerminationIndicator = _enum_for_CallTerminationIndicator;
}

/**
 * @summary The Leading Root Component Types of IST_AlertRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IST_AlertRes: $.ComponentSpec[] = [
    new $.ComponentSpec("istAlertTimer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("istInformationWithdraw", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callTerminationIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IST_AlertRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IST_AlertRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IST_AlertRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IST_AlertRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IST_AlertRes: $.ASN1Decoder<IST_AlertRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IST_AlertRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IST_AlertRes (el: _Element): IST_AlertRes {
    if (!_cached_decoder_for_IST_AlertRes) { _cached_decoder_for_IST_AlertRes = function (el: _Element): IST_AlertRes {
    let istAlertTimer: OPTIONAL<IST_AlertTimerValue> = undefined;
    let istInformationWithdraw: OPTIONAL<NULL> = undefined;
    let callTerminationIndicator: OPTIONAL<CallTerminationIndicator> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "istAlertTimer": (_el: _Element): void => { istAlertTimer = $._decode_implicit<IST_AlertTimerValue>(() => _decode_IST_AlertTimerValue)(_el); },
        "istInformationWithdraw": (_el: _Element): void => { istInformationWithdraw = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "callTerminationIndicator": (_el: _Element): void => { callTerminationIndicator = $._decode_implicit<CallTerminationIndicator>(() => _decode_CallTerminationIndicator)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IST_AlertRes,
        _extension_additions_list_spec_for_IST_AlertRes,
        _root_component_type_list_2_spec_for_IST_AlertRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IST_AlertRes(
        istAlertTimer,
        istInformationWithdraw,
        callTerminationIndicator,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IST_AlertRes(el);
}

let _cached_encoder_for_IST_AlertRes: $.ASN1Encoder<IST_AlertRes> | null = null;

/**
 * @summary Encodes a(n) IST_AlertRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IST_AlertRes, encoded as an ASN.1 Element.
 */
export
function _encode_IST_AlertRes (value: IST_AlertRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IST_AlertRes) { _cached_encoder_for_IST_AlertRes = function (value: IST_AlertRes, elGetter: $.ASN1Encoder<IST_AlertRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.istAlertTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IST_AlertTimerValue, $.BER)(value.istAlertTimer, $.BER)),
            /* IF_ABSENT  */ ((value.istInformationWithdraw === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.istInformationWithdraw, $.BER)),
            /* IF_ABSENT  */ ((value.callTerminationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallTerminationIndicator, $.BER)(value.callTerminationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IST_AlertRes(value, elGetter);
}


/* eslint-enable */
