/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
// export { MessageType, _enum_for_MessageType, MessageType_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videotextSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotextSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telefaxGroup2_3 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup2_3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed1 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed2 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed3 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed4 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed5 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_email /* IMPORTED_LONG_ENUMERATION_ITEM */, email /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_video /* IMPORTED_LONG_ENUMERATION_ITEM */, video /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_fileTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, fileTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_shortMessageService /* IMPORTED_LONG_ENUMERATION_ITEM */, shortMessageService /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndVideo /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndVideo /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_faxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, faxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_multimediaUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, multimediaUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_serviceUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve1 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve2 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve3 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve4 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve5 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve6 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve7 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve8 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MessageType, _encode_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { MCMMode, _decode_MCMMode, _encode_MCMMode } from "../SS-MCM-Operations-asn1-97/MCMMode.ta.mjs";
// export { MCMMode, MCMMode_compressed /* IMPORTED_LONG_NAMED_INTEGER */, compressed /* IMPORTED_SHORT_NAMED_INTEGER */, MCMMode_complete /* IMPORTED_LONG_NAMED_INTEGER */, complete /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MCMMode, _encode_MCMMode } from "../SS-MCM-Operations-asn1-97/MCMMode.ta.mjs";


/**
 * @summary MCMServiceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMServiceInfo ::= SEQUENCE {
 *     messageType MessageType,
 *     mCMModeNew [1] IMPLICIT MCMMode OPTIONAL,
 *     mCMModeRetrieved [2] IMPLICIT MCMMode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MCMServiceInfo {
    /**
     * @summary `messageType`.
     * @public
     * @readonly
     */
    readonly messageType: MessageType;
    /**
     * @summary `mCMModeNew`.
     * @public
     * @readonly
     */
    readonly mCMModeNew: OPTIONAL<MCMMode>;
    /**
     * @summary `mCMModeRetrieved`.
     * @public
     * @readonly
     */
    readonly mCMModeRetrieved: OPTIONAL<MCMMode>;

    constructor (
        messageType: MessageType,
        mCMModeNew: OPTIONAL<MCMMode>,
        mCMModeRetrieved: OPTIONAL<MCMMode>
    ) {
        this.messageType = messageType;
        this.mCMModeNew = mCMModeNew;
        this.mCMModeRetrieved = mCMModeRetrieved;
    }

    /**
     * @summary Restructures an object into a MCMServiceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MCMServiceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMServiceInfo`.
     * @returns {MCMServiceInfo}
     */
    public static _from_object (_o: { [_K in keyof (MCMServiceInfo)]: (MCMServiceInfo)[_K] }): MCMServiceInfo {
        return new MCMServiceInfo(_o.messageType, _o.mCMModeNew, _o.mCMModeRetrieved);
    }

        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MCMServiceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMServiceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("mCMModeNew", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCMModeRetrieved", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MCMServiceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMServiceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMServiceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMServiceInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMServiceInfo: $.ASN1Decoder<MCMServiceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMServiceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMServiceInfo (el: _Element): MCMServiceInfo {
    if (!_cached_decoder_for_MCMServiceInfo) { _cached_decoder_for_MCMServiceInfo = function (el: _Element): MCMServiceInfo {
    let messageType!: MessageType;
    let mCMModeNew: OPTIONAL<MCMMode>;
    let mCMModeRetrieved: OPTIONAL<MCMMode>;
    const callbacks: $.DecodingMap = {
        "messageType": (_el: _Element): void => { messageType = _decode_MessageType(_el); },
        "mCMModeNew": (_el: _Element): void => { mCMModeNew = $._decode_implicit<MCMMode>(() => _decode_MCMMode)(_el); },
        "mCMModeRetrieved": (_el: _Element): void => { mCMModeRetrieved = $._decode_implicit<MCMMode>(() => _decode_MCMMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMServiceInfo,
        _extension_additions_list_spec_for_MCMServiceInfo,
        _root_component_type_list_2_spec_for_MCMServiceInfo,
        undefined,
    );
    return new MCMServiceInfo(
        messageType,
        mCMModeNew,
        mCMModeRetrieved
    );
}; }
    return _cached_decoder_for_MCMServiceInfo(el);
}

let _cached_encoder_for_MCMServiceInfo: $.ASN1Encoder<MCMServiceInfo> | null = null;

/**
 * @summary Encodes a(n) MCMServiceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMServiceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MCMServiceInfo (value: MCMServiceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMServiceInfo) { _cached_encoder_for_MCMServiceInfo = function (value: MCMServiceInfo, elGetter: $.ASN1Encoder<MCMServiceInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_MessageType(value.messageType, $.BER));
    if (value.mCMModeNew !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCMMode, $.BER)(value.mCMModeNew, $.BER));
    }
    if (value.mCMModeRetrieved !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCMMode, $.BER)(value.mCMModeRetrieved, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMServiceInfo(value, elGetter);
}


/* eslint-enable */
