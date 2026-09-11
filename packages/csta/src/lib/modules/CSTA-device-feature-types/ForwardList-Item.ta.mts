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
import {
    ForwardingType,
    _enum_for_ForwardingType,
    _decode_ForwardingType,
    _encode_ForwardingType
} from "../CSTA-device-feature-types/ForwardingType.ta.mjs";

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import {
    ForwardDefault,
    _enum_for_ForwardDefault,
    forwardingType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    forwardDN /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ForwardDefault,
    _encode_ForwardDefault
} from "../CSTA-device-feature-types/ForwardDefault.ta.mjs";



/**
 * @summary ForwardList_Item
 * @description
 *
 * One forwardingType / forwardDN combination. ECMA-269 §22.1.11.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardList-Item ::= SEQUENCE {
 *     forwardingType [UNIVERSAL 10] ForwardingType OPTIONAL,
 *     forwardStatus [UNIVERSAL 1] BOOLEAN,
 *     forwardDN [UNIVERSAL 16] DeviceID OPTIONAL,
 *     forwardDefault [UNIVERSAL 10] ForwardDefault OPTIONAL,
 *     ringDuration [0] INTEGER OPTIONAL,
 *     ringCount [UNIVERSAL 2] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ForwardList_Item {
    constructor (
        /**
         * @summary `forwardingType`.
         * @description
         * Type of forwarding. Required for user-specified settings; optional
         * for switching-function defaults. Internal/external types refer to
         * call origination.
         * @public
         * @readonly
         */
        readonly forwardingType: OPTIONAL<ForwardingType>,
        /**
         * @summary `forwardStatus`.
         * @description TRUE if this forwarding type is active.
         * @public
         * @readonly
         */
        readonly forwardStatus: BOOLEAN,
        /**
         * @summary `forwardDN`.
         * @description
         * Destination to which calls are forwarded. Required for user-specified
         * settings; optional for defaults.
         * @public
         * @readonly
         */
        readonly forwardDN: OPTIONAL<DeviceID>,
        /**
         * @summary `forwardDefault`.
         * @description
         * Which of forwardingType and/or forwardDN is a default setting.
         * @public
         * @readonly
         */
        readonly forwardDefault: OPTIONAL<ForwardDefault>,
        /**
         * @summary `ringDuration`.
         * @description
         * Seconds the device rings before forward-no-answer. Do not provide if
         * ringCount is provided.
         * @public
         * @readonly
         */
        readonly ringDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `ringCount`.
         * @description
         * Times the device rings before forward-no-answer (1..100).
         * @public
         * @readonly
         */
        readonly ringCount: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ForwardList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardList_Item`.
     * @returns {ForwardList_Item}
     */
    public static _from_object (_o: { [_K in keyof (ForwardList_Item)]: (ForwardList_Item)[_K] }): ForwardList_Item {
        return new ForwardList_Item(_o.forwardingType, _o.forwardStatus, _o.forwardDN, _o.forwardDefault, _o.ringDuration, _o.ringCount);
    }

        /**
         * @summary The enum used as the type of the component `forwardingType`
         * @public
         * @static
         */

    public static _enum_for_forwardingType = _enum_for_ForwardingType;        /**
         * @summary The enum used as the type of the component `forwardDefault`
         * @public
         * @static
         */

    public static _enum_for_forwardDefault = _enum_for_ForwardDefault;
}

/**
 * @summary The Leading Root Component Types of ForwardList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardingType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("forwardStatus", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("forwardDN", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("forwardDefault", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("ringDuration", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ringCount", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ForwardList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardList_Item: $.ASN1Decoder<ForwardList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardList_Item (el: _Element): ForwardList_Item {
    if (!_cached_decoder_for_ForwardList_Item) { _cached_decoder_for_ForwardList_Item = function (el: _Element): ForwardList_Item {
    let forwardingType: OPTIONAL<ForwardingType>;
    let forwardStatus!: BOOLEAN;
    let forwardDN: OPTIONAL<DeviceID>;
    let forwardDefault: OPTIONAL<ForwardDefault>;
    let ringDuration: OPTIONAL<INTEGER>;
    let ringCount: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "forwardingType": (_el: _Element): void => { forwardingType = _decode_ForwardingType(_el); },
        "forwardStatus": (_el: _Element): void => { forwardStatus = $._decodeBoolean(_el); },
        "forwardDN": (_el: _Element): void => { forwardDN = _decode_DeviceID(_el); },
        "forwardDefault": (_el: _Element): void => { forwardDefault = _decode_ForwardDefault(_el); },
        "ringDuration": (_el: _Element): void => { ringDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringCount": (_el: _Element): void => { ringCount = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardList_Item,
        _extension_additions_list_spec_for_ForwardList_Item,
        _root_component_type_list_2_spec_for_ForwardList_Item,
        undefined,
    );
    return new ForwardList_Item(
        forwardingType,
        forwardStatus,
        forwardDN,
        forwardDefault,
        ringDuration,
        ringCount
    );
}; }
    return _cached_decoder_for_ForwardList_Item(el);
}

let _cached_encoder_for_ForwardList_Item: $.ASN1Encoder<ForwardList_Item> | null = null;

/**
 * @summary Encodes a(n) ForwardList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardList_Item (value: ForwardList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardList_Item) { _cached_encoder_for_ForwardList_Item = function (value: ForwardList_Item, elGetter: $.ASN1Encoder<ForwardList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.forwardingType === undefined) ? undefined : _encode_ForwardingType(value.forwardingType, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.forwardStatus, $.BER),
            /* IF_ABSENT  */ ((value.forwardDN === undefined) ? undefined : _encode_DeviceID(value.forwardDN, $.BER)),
            /* IF_ABSENT  */ ((value.forwardDefault === undefined) ? undefined : _encode_ForwardDefault(value.forwardDefault, $.BER)),
            /* IF_ABSENT  */ ((value.ringDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.ringDuration, $.BER)),
            /* IF_ABSENT  */ ((value.ringCount === undefined) ? undefined : $._encodeInteger(value.ringCount, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardList_Item(value, elGetter);
}


/* eslint-enable */
