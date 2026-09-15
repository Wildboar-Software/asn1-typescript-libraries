/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MiscCallInfo_messageType, _enum_for_MiscCallInfo_messageType, _decode_MiscCallInfo_messageType, _encode_MiscCallInfo_messageType } from "../IN-CS2-datatypes/MiscCallInfo-messageType.ta.mjs";
// export { MiscCallInfo_messageType, _enum_for_MiscCallInfo_messageType, MiscCallInfo_messageType_request /* IMPORTED_LONG_ENUMERATION_ITEM */, request /* IMPORTED_SHORT_ENUMERATION_ITEM */, MiscCallInfo_messageType_notification /* IMPORTED_LONG_ENUMERATION_ITEM */, notification /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MiscCallInfo_messageType, _encode_MiscCallInfo_messageType } from "../IN-CS2-datatypes/MiscCallInfo-messageType.ta.mjs";
import { MiscCallInfo_dpAssignment, _enum_for_MiscCallInfo_dpAssignment, _decode_MiscCallInfo_dpAssignment, _encode_MiscCallInfo_dpAssignment } from "../IN-CS2-datatypes/MiscCallInfo-dpAssignment.ta.mjs";
// export { MiscCallInfo_dpAssignment, _enum_for_MiscCallInfo_dpAssignment, MiscCallInfo_dpAssignment_individualLine /* IMPORTED_LONG_ENUMERATION_ITEM */, individualLine /* IMPORTED_SHORT_ENUMERATION_ITEM */, MiscCallInfo_dpAssignment_groupBased /* IMPORTED_LONG_ENUMERATION_ITEM */, groupBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, MiscCallInfo_dpAssignment_officeBased /* IMPORTED_LONG_ENUMERATION_ITEM */, officeBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MiscCallInfo_dpAssignment, _encode_MiscCallInfo_dpAssignment } from "../IN-CS2-datatypes/MiscCallInfo-dpAssignment.ta.mjs";


/**
 * @summary MiscCallInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MiscCallInfo ::= SEQUENCE {
 *   messageType   [0]  ENUMERATED {request(0), notification(1)},
 *   dpAssignment
 *     [1]  ENUMERATED {individualLine(0), groupBased(1), officeBased(2)} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MiscCallInfo {
    constructor (
        /**
         * @summary `messageType`.
         * @public
         * @readonly
         */
        readonly messageType: MiscCallInfo_messageType,
        /**
         * @summary `dpAssignment`.
         * @public
         * @readonly
         */
        readonly dpAssignment?: OPTIONAL<MiscCallInfo_dpAssignment>
    ) {}

    /**
     * @summary Restructures an object into a MiscCallInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MiscCallInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MiscCallInfo`.
     * @returns {MiscCallInfo}
     */
    public static _from_object (_o: { [_K in keyof (MiscCallInfo)]: (MiscCallInfo)[_K] }): MiscCallInfo {
        return new MiscCallInfo(_o.messageType, _o.dpAssignment);
    }

        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MiscCallInfo_messageType;        /**
         * @summary The enum used as the type of the component `dpAssignment`
         * @public
         * @static
         */

    public static _enum_for_dpAssignment = _enum_for_MiscCallInfo_dpAssignment;
}

/**
 * @summary The Leading Root Component Types of MiscCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MiscCallInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dpAssignment", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MiscCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MiscCallInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MiscCallInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MiscCallInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MiscCallInfo: $.ASN1Decoder<MiscCallInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MiscCallInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MiscCallInfo (el: _Element): MiscCallInfo {
    if (!_cached_decoder_for_MiscCallInfo) { _cached_decoder_for_MiscCallInfo = function (el: _Element): MiscCallInfo {
    let messageType!: MiscCallInfo_messageType;
    let dpAssignment: OPTIONAL<MiscCallInfo_dpAssignment>;
    const callbacks: $.DecodingMap = {
        "messageType": (_el: _Element): void => { messageType = $._decode_implicit<MiscCallInfo_messageType>(() => _decode_MiscCallInfo_messageType)(_el); },
        "dpAssignment": (_el: _Element): void => { dpAssignment = $._decode_implicit<MiscCallInfo_dpAssignment>(() => _decode_MiscCallInfo_dpAssignment)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MiscCallInfo,
        _extension_additions_list_spec_for_MiscCallInfo,
        _root_component_type_list_2_spec_for_MiscCallInfo,
        undefined,
    );
    return new MiscCallInfo(
        messageType,
        dpAssignment
    );
}; }
    return _cached_decoder_for_MiscCallInfo(el);
}

let _cached_encoder_for_MiscCallInfo: $.ASN1Encoder<MiscCallInfo> | null = null;

/**
 * @summary Encodes a(n) MiscCallInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscCallInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MiscCallInfo (value: MiscCallInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MiscCallInfo) { _cached_encoder_for_MiscCallInfo = function (value: MiscCallInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MiscCallInfo_messageType, $.BER)(value.messageType, $.BER),
            /* IF_ABSENT  */ ((value.dpAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MiscCallInfo_dpAssignment, $.BER)(value.dpAssignment, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MiscCallInfo(value, elGetter);
}


/* eslint-enable */
