/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { RingerID, _decode_RingerID, _encode_RingerID } from "../CSTA-physical-device-feature/RingerID.ta.mjs";

import {
    RingMode,
    _enum_for_RingMode,
    _decode_RingMode,
    _encode_RingMode
} from "../CSTA-physical-device-feature/RingMode.ta.mjs";



/**
 * @summary RingerStatusList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingerStatusList-Item ::= SEQUENCE {
 *     ringer [UNIVERSAL 4] RingerID,
 *     ringMode [UNIVERSAL 10] RingMode,
 *     ringCount [0] INTEGER OPTIONAL,
 *     ringDuration [3] INTEGER OPTIONAL,
 *     ringPattern [1] INTEGER OPTIONAL,
 *     ringVolAbs [2] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RingerStatusList_Item {
    constructor (
        /**
         * @summary `ringer`.
         * @public
         * @readonly
         */
        readonly ringer: RingerID,
        /**
         * @summary `ringMode`.
         * @public
         * @readonly
         */
        readonly ringMode: RingMode,
        /**
         * @summary `ringCount`.
         * @public
         * @readonly
         */
        readonly ringCount: OPTIONAL<INTEGER>,
        /**
         * @summary `ringDuration`.
         * @public
         * @readonly
         */
        readonly ringDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `ringPattern`.
         * @public
         * @readonly
         */
        readonly ringPattern: OPTIONAL<INTEGER>,
        /**
         * @summary `ringVolAbs`.
         * @public
         * @readonly
         */
        readonly ringVolAbs: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a RingerStatusList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `RingerStatusList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RingerStatusList_Item`.
     * @returns {RingerStatusList_Item}
     */
    public static _from_object (_o: { [_K in keyof (RingerStatusList_Item)]: (RingerStatusList_Item)[_K] }): RingerStatusList_Item {
        return new RingerStatusList_Item(_o.ringer, _o.ringMode, _o.ringCount, _o.ringDuration, _o.ringPattern, _o.ringVolAbs);
    }

        /**
         * @summary The enum used as the type of the component `ringMode`
         * @public
         * @static
         */

    public static _enum_for_ringMode = _enum_for_RingMode;
}

/**
 * @summary The Leading Root Component Types of RingerStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RingerStatusList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("ringer", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("ringMode", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("ringCount", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ringDuration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ringPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ringVolAbs", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RingerStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RingerStatusList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RingerStatusList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RingerStatusList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RingerStatusList_Item: $.ASN1Decoder<RingerStatusList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerStatusList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerStatusList_Item (el: _Element): RingerStatusList_Item {
    if (!_cached_decoder_for_RingerStatusList_Item) { _cached_decoder_for_RingerStatusList_Item = function (el: _Element): RingerStatusList_Item {
    let ringer!: RingerID;
    let ringMode!: RingMode;
    let ringCount: OPTIONAL<INTEGER>;
    let ringDuration: OPTIONAL<INTEGER>;
    let ringPattern: OPTIONAL<INTEGER>;
    let ringVolAbs: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "ringer": (_el: _Element): void => { ringer = _decode_RingerID(_el); },
        "ringMode": (_el: _Element): void => { ringMode = _decode_RingMode(_el); },
        "ringCount": (_el: _Element): void => { ringCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringDuration": (_el: _Element): void => { ringDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringPattern": (_el: _Element): void => { ringPattern = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ringVolAbs": (_el: _Element): void => { ringVolAbs = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RingerStatusList_Item,
        _extension_additions_list_spec_for_RingerStatusList_Item,
        _root_component_type_list_2_spec_for_RingerStatusList_Item,
        undefined,
    );
    return new RingerStatusList_Item(
        ringer,
        ringMode,
        ringCount,
        ringDuration,
        ringPattern,
        ringVolAbs
    );
}; }
    return _cached_decoder_for_RingerStatusList_Item(el);
}

let _cached_encoder_for_RingerStatusList_Item: $.ASN1Encoder<RingerStatusList_Item> | null = null;

/**
 * @summary Encodes a(n) RingerStatusList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerStatusList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_RingerStatusList_Item (value: RingerStatusList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerStatusList_Item) { _cached_encoder_for_RingerStatusList_Item = function (value: RingerStatusList_Item, elGetter: $.ASN1Encoder<RingerStatusList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RingerID(value.ringer, $.BER),
            /* REQUIRED   */ _encode_RingMode(value.ringMode, $.BER),
            /* IF_ABSENT  */ ((value.ringCount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.ringCount, $.BER)),
            /* IF_ABSENT  */ ((value.ringDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.ringDuration, $.BER)),
            /* IF_ABSENT  */ ((value.ringPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.ringPattern, $.BER)),
            /* IF_ABSENT  */ ((value.ringVolAbs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.ringVolAbs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RingerStatusList_Item(value, elGetter);
}


/* eslint-enable */
