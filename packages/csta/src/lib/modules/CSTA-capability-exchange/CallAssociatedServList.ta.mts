/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AssociateData, _decode_AssociateData, _encode_AssociateData } from "../CSTA-capability-exchange/AssociateData.ta.mjs";

import { CancelTelephonyTones, _decode_CancelTelephonyTones, _encode_CancelTelephonyTones } from "../CSTA-capability-exchange/CancelTelephonyTones.ta.mjs";

import { ChangeConnectionInformation, _decode_ChangeConnectionInformation, _encode_ChangeConnectionInformation } from "../CSTA-capability-exchange/ChangeConnectionInformation.ta.mjs";

import { GenerateDigits, _decode_GenerateDigits, _encode_GenerateDigits } from "../CSTA-capability-exchange/GenerateDigits.ta.mjs";

import { GenerateTelephonyTones, _decode_GenerateTelephonyTones, _encode_GenerateTelephonyTones } from "../CSTA-capability-exchange/GenerateTelephonyTones.ta.mjs";

import { SendUserInformation, _decode_SendUserInformation, _encode_SendUserInformation } from "../CSTA-capability-exchange/SendUserInformation.ta.mjs";



/**
 * @summary CallAssociatedServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedServList ::= SEQUENCE
 * {     associateData             [0] IMPLICIT     AssociateData             OPTIONAL,
 *     cancelTelephonyTones         [1] IMPLICIT     CancelTelephonyTones         OPTIONAL,
 *     changeConnectionInformation    [5] IMPLICIT     ChangeConnectionInformation    OPTIONAL,
 *     generateDigits             [2] IMPLICIT     GenerateDigits             OPTIONAL,
 *     generateTelephonyTones         [3] IMPLICIT     GenerateTelephonyTones         OPTIONAL,
 *     sendUserInformation         [4] IMPLICIT     SendUserInformation         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallAssociatedServList {
    constructor (
        /**
         * @summary `associateData`.
         * @public
         * @readonly
         */
        readonly associateData: OPTIONAL<AssociateData>,
        /**
         * @summary `cancelTelephonyTones`.
         * @public
         * @readonly
         */
        readonly cancelTelephonyTones: OPTIONAL<CancelTelephonyTones>,
        /**
         * @summary `changeConnectionInformation`.
         * @public
         * @readonly
         */
        readonly changeConnectionInformation: OPTIONAL<ChangeConnectionInformation>,
        /**
         * @summary `generateDigits`.
         * @public
         * @readonly
         */
        readonly generateDigits: OPTIONAL<GenerateDigits>,
        /**
         * @summary `generateTelephonyTones`.
         * @public
         * @readonly
         */
        readonly generateTelephonyTones: OPTIONAL<GenerateTelephonyTones>,
        /**
         * @summary `sendUserInformation`.
         * @public
         * @readonly
         */
        readonly sendUserInformation: OPTIONAL<SendUserInformation>
    ) {}

    /**
     * @summary Restructures an object into a CallAssociatedServList
     * @description
     * 
     * This takes an `object` and converts it to a `CallAssociatedServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallAssociatedServList`.
     * @returns {CallAssociatedServList}
     */
    public static _from_object (_o: { [_K in keyof (CallAssociatedServList)]: (CallAssociatedServList)[_K] }): CallAssociatedServList {
        return new CallAssociatedServList(_o.associateData, _o.cancelTelephonyTones, _o.changeConnectionInformation, _o.generateDigits, _o.generateTelephonyTones, _o.sendUserInformation);
    }


}

/**
 * @summary The Leading Root Component Types of CallAssociatedServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallAssociatedServList: $.ComponentSpec[] = [
    new $.ComponentSpec("associateData", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cancelTelephonyTones", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("changeConnectionInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("generateDigits", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("generateTelephonyTones", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sendUserInformation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallAssociatedServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallAssociatedServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallAssociatedServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallAssociatedServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallAssociatedServList: $.ASN1Decoder<CallAssociatedServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedServList (el: _Element): CallAssociatedServList {
    if (!_cached_decoder_for_CallAssociatedServList) { _cached_decoder_for_CallAssociatedServList = function (el: _Element): CallAssociatedServList {
    let associateData: OPTIONAL<AssociateData>;
    let cancelTelephonyTones: OPTIONAL<CancelTelephonyTones>;
    let changeConnectionInformation: OPTIONAL<ChangeConnectionInformation>;
    let generateDigits: OPTIONAL<GenerateDigits>;
    let generateTelephonyTones: OPTIONAL<GenerateTelephonyTones>;
    let sendUserInformation: OPTIONAL<SendUserInformation>;
    const callbacks: $.DecodingMap = {
        "associateData": (_el: _Element): void => { associateData = $._decode_implicit<AssociateData>(() => _decode_AssociateData)(_el); },
        "cancelTelephonyTones": (_el: _Element): void => { cancelTelephonyTones = $._decode_implicit<CancelTelephonyTones>(() => _decode_CancelTelephonyTones)(_el); },
        "changeConnectionInformation": (_el: _Element): void => { changeConnectionInformation = $._decode_implicit<ChangeConnectionInformation>(() => _decode_ChangeConnectionInformation)(_el); },
        "generateDigits": (_el: _Element): void => { generateDigits = $._decode_implicit<GenerateDigits>(() => _decode_GenerateDigits)(_el); },
        "generateTelephonyTones": (_el: _Element): void => { generateTelephonyTones = $._decode_implicit<GenerateTelephonyTones>(() => _decode_GenerateTelephonyTones)(_el); },
        "sendUserInformation": (_el: _Element): void => { sendUserInformation = $._decode_implicit<SendUserInformation>(() => _decode_SendUserInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallAssociatedServList,
        _extension_additions_list_spec_for_CallAssociatedServList,
        _root_component_type_list_2_spec_for_CallAssociatedServList,
        undefined,
    );
    return new CallAssociatedServList(
        associateData,
        cancelTelephonyTones,
        changeConnectionInformation,
        generateDigits,
        generateTelephonyTones,
        sendUserInformation
    );
}; }
    return _cached_decoder_for_CallAssociatedServList(el);
}

let _cached_encoder_for_CallAssociatedServList: $.ASN1Encoder<CallAssociatedServList> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedServList, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedServList (value: CallAssociatedServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedServList) { _cached_encoder_for_CallAssociatedServList = function (value: CallAssociatedServList, elGetter: $.ASN1Encoder<CallAssociatedServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.associateData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AssociateData, $.BER)(value.associateData, $.BER)),
            /* IF_ABSENT  */ ((value.cancelTelephonyTones === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CancelTelephonyTones, $.BER)(value.cancelTelephonyTones, $.BER)),
            /* IF_ABSENT  */ ((value.changeConnectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ChangeConnectionInformation, $.BER)(value.changeConnectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.generateDigits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GenerateDigits, $.BER)(value.generateDigits, $.BER)),
            /* IF_ABSENT  */ ((value.generateTelephonyTones === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GenerateTelephonyTones, $.BER)(value.generateTelephonyTones, $.BER)),
            /* IF_ABSENT  */ ((value.sendUserInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SendUserInformation, $.BER)(value.sendUserInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallAssociatedServList(value, elGetter);
}


/* eslint-enable */
