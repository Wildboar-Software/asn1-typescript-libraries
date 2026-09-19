/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresenceState, _decode_PresenceState, _encode_PresenceState, _enum_for_PresenceState } from "../TS33128Payloads/PresenceState.ta.mjs";
// export { PresenceState, _enum_for_PresenceState, PresenceState_inArea /* IMPORTED_LONG_ENUMERATION_ITEM */, inArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_outOfArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceState, _encode_PresenceState } from "../TS33128Payloads/PresenceState.ta.mjs";


/**
 * @summary LADNInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LADNInfo ::= SEQUENCE
 * {
 *     lADN                        [1] UTF8String,
 *     presence                    [2] PresenceState OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LADNInfo {
    constructor (
        /**
         * @summary `lADN`.
         * @public
         * @readonly
         */
        readonly lADN: UTF8String,
        /**
         * @summary `presence`.
         * @public
         * @readonly
         */
        readonly presence: OPTIONAL<PresenceState>
    ) {}

    /**
     * @summary Restructures an object into a LADNInfo
     * @description
     * 
     * This takes an `object` and converts it to a `LADNInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LADNInfo`.
     * @returns {LADNInfo}
     */
    public static _from_object (_o: { [_K in keyof (LADNInfo)]: (LADNInfo)[_K] }): LADNInfo {
        return new LADNInfo(_o.lADN, _o.presence);
    }

        /**
         * @summary The enum used as the type of the component `presence`
         * @public
         * @static
         */

    public static _enum_for_presence = _enum_for_PresenceState;
}

/**
 * @summary The Leading Root Component Types of LADNInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LADNInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("lADN", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("presence", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LADNInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LADNInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LADNInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LADNInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LADNInfo: $.ASN1Decoder<LADNInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LADNInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LADNInfo (el: _Element): LADNInfo {
    if (!_cached_decoder_for_LADNInfo) { _cached_decoder_for_LADNInfo = function (el: _Element): LADNInfo {
    let lADN!: UTF8String;
    let presence: OPTIONAL<PresenceState>;
    const callbacks: $.DecodingMap = {
        "lADN": (_el: _Element): void => { lADN = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "presence": (_el: _Element): void => { presence = $._decode_implicit<PresenceState>(() => _decode_PresenceState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LADNInfo,
        _extension_additions_list_spec_for_LADNInfo,
        _root_component_type_list_2_spec_for_LADNInfo,
        undefined,
    );
    return new LADNInfo(
        lADN,
        presence
    );
}; }
    return _cached_decoder_for_LADNInfo(el);
}

let _cached_encoder_for_LADNInfo: $.ASN1Encoder<LADNInfo> | null = null;

/**
 * @summary Encodes a(n) LADNInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LADNInfo, encoded as an ASN.1 Element.
 */
export
function _encode_LADNInfo (value: LADNInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LADNInfo) { _cached_encoder_for_LADNInfo = function (value: LADNInfo, elGetter: $.ASN1Encoder<LADNInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.lADN, $.BER),
            /* IF_ABSENT  */ ((value.presence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PresenceState, $.BER)(value.presence, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LADNInfo(value, elGetter);
}


/* eslint-enable */
