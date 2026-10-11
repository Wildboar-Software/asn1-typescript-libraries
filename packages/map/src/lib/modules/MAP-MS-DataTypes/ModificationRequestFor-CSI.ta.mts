/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AdditionalRequestedCAMEL_SubscriptionInfo, _decode_AdditionalRequestedCAMEL_SubscriptionInfo, _encode_AdditionalRequestedCAMEL_SubscriptionInfo, _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/AdditionalRequestedCAMEL-SubscriptionInfo.ta.mjs";
import { ModificationInstruction, _decode_ModificationInstruction, _encode_ModificationInstruction, _enum_for_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { RequestedCAMEL_SubscriptionInfo, _decode_RequestedCAMEL_SubscriptionInfo, _encode_RequestedCAMEL_SubscriptionInfo, _enum_for_RequestedCAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/RequestedCAMEL-SubscriptionInfo.ta.mjs";


/**
 * @summary ModificationRequestFor_CSI
 * @description
 *
 * CSE request to modify CAMEL subscription information. If
 * `additionalRequestedCAMEL-SubscriptionInfo` is received,
 * `requestedCamel-SubscriptionInfo` shall be discarded. (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.81, 8.11.4, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-CSI ::= SEQUENCE {
 *     requestedCamel-SubscriptionInfo    [0]    RequestedCAMEL-SubscriptionInfo,
 *     modifyNotificationToCSE    [1]    ModificationInstruction    OPTIONAL,
 *     modifyCSI-State    [2]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalRequestedCAMEL-SubscriptionInfo
 *     [4] AdditionalRequestedCAMEL-SubscriptionInfo
 *         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_CSI {
    constructor (
        /**
         * @summary `requestedCamel_SubscriptionInfo`.
         * @description
         *
         * Shall be discarded if `additionalRequestedCAMEL-SubscriptionInfo` is
         * received. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
         *
         * @public
         * @readonly
         */
        readonly requestedCamel_SubscriptionInfo: RequestedCAMEL_SubscriptionInfo,
        /**
         * @summary `modifyNotificationToCSE`.
         * @description
         *
         * Activate or deactivate notification to the CSE for this CSI. (3GPP TS
         * 29.002 V19.1.0 clause 7.6.3.81)
         *
         * @public
         * @readonly
         */
        readonly modifyNotificationToCSE: OPTIONAL<ModificationInstruction>,
        /**
         * @summary `modifyCSI_State`.
         * @description
         *
         * Activate or deactivate the CSI itself. (3GPP TS 29.002 V19.1.0 clause
         * 7.6.3.81)
         *
         * @public
         * @readonly
         */
        readonly modifyCSI_State: OPTIONAL<ModificationInstruction>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalRequestedCAMEL_SubscriptionInfo`.
         * @description
         *
         * Takes precedence over `requestedCamel-SubscriptionInfo`. (3GPP TS
         * 29.002 V19.1.0 clause 17.7.1)
         *
         * @public
         * @readonly
         */
        readonly additionalRequestedCAMEL_SubscriptionInfo: OPTIONAL<AdditionalRequestedCAMEL_SubscriptionInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModificationRequestFor_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_CSI`.
     * @returns {ModificationRequestFor_CSI}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_CSI)]: (ModificationRequestFor_CSI)[_K] }): ModificationRequestFor_CSI {
        return new ModificationRequestFor_CSI(_o.requestedCamel_SubscriptionInfo, _o.modifyNotificationToCSE, _o.modifyCSI_State, _o.extensionContainer, _o.additionalRequestedCAMEL_SubscriptionInfo, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `requestedCamel_SubscriptionInfo`
         * @public
         * @static
         */

    public static _enum_for_requestedCamel_SubscriptionInfo = _enum_for_RequestedCAMEL_SubscriptionInfo;        /**
         * @summary The enum used as the type of the component `modifyNotificationToCSE`
         * @public
         * @static
         */

    public static _enum_for_modifyNotificationToCSE = _enum_for_ModificationInstruction;        /**
         * @summary The enum used as the type of the component `modifyCSI_State`
         * @public
         * @static
         */

    public static _enum_for_modifyCSI_State = _enum_for_ModificationInstruction;        /**
         * @summary The enum used as the type of the component `additionalRequestedCAMEL_SubscriptionInfo`
         * @public
         * @static
         */

    public static _enum_for_additionalRequestedCAMEL_SubscriptionInfo = _enum_for_AdditionalRequestedCAMEL_SubscriptionInfo;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedCamel-SubscriptionInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("modifyNotificationToCSE", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("modifyCSI-State", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalRequestedCAMEL-SubscriptionInfo", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_ModificationRequestFor_CSI: $.ASN1Decoder<ModificationRequestFor_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_CSI (el: _Element): ModificationRequestFor_CSI {
    if (!_cached_decoder_for_ModificationRequestFor_CSI) { _cached_decoder_for_ModificationRequestFor_CSI = function (el: _Element): ModificationRequestFor_CSI {
    let requestedCamel_SubscriptionInfo!: RequestedCAMEL_SubscriptionInfo;
    let modifyNotificationToCSE: OPTIONAL<ModificationInstruction> = undefined;
    let modifyCSI_State: OPTIONAL<ModificationInstruction> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let additionalRequestedCAMEL_SubscriptionInfo: OPTIONAL<AdditionalRequestedCAMEL_SubscriptionInfo> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedCamel-SubscriptionInfo": (_el: _Element): void => { requestedCamel_SubscriptionInfo = $._decode_implicit<RequestedCAMEL_SubscriptionInfo>(() => _decode_RequestedCAMEL_SubscriptionInfo)(_el); },
        "modifyNotificationToCSE": (_el: _Element): void => { modifyNotificationToCSE = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "modifyCSI-State": (_el: _Element): void => { modifyCSI_State = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "additionalRequestedCAMEL-SubscriptionInfo": (_el: _Element): void => { additionalRequestedCAMEL_SubscriptionInfo = $._decode_implicit<AdditionalRequestedCAMEL_SubscriptionInfo>(() => _decode_AdditionalRequestedCAMEL_SubscriptionInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_CSI,
        _extension_additions_list_spec_for_ModificationRequestFor_CSI,
        _root_component_type_list_2_spec_for_ModificationRequestFor_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_CSI(
        requestedCamel_SubscriptionInfo,
        modifyNotificationToCSE,
        modifyCSI_State,
        extensionContainer,
        additionalRequestedCAMEL_SubscriptionInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_CSI(el);
}

let _cached_encoder_for_ModificationRequestFor_CSI: $.ASN1Encoder<ModificationRequestFor_CSI> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_CSI (value: ModificationRequestFor_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_CSI) { _cached_encoder_for_ModificationRequestFor_CSI = function (value: ModificationRequestFor_CSI, elGetter: $.ASN1Encoder<ModificationRequestFor_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedCAMEL_SubscriptionInfo, $.BER)(value.requestedCamel_SubscriptionInfo, $.BER),
            /* IF_ABSENT  */ ((value.modifyNotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ModificationInstruction, $.BER)(value.modifyNotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.modifyCSI_State === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ModificationInstruction, $.BER)(value.modifyCSI_State, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalRequestedCAMEL_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalRequestedCAMEL_SubscriptionInfo, $.BER)(value.additionalRequestedCAMEL_SubscriptionInfo, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_CSI(value, elGetter);
}


/* eslint-enable */
