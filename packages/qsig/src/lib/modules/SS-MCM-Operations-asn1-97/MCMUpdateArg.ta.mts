/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MCM-Operations-asn1-97/PartyInfo.ta.mjs";
// export { PartyInfo, _decode_PartyInfo, _encode_PartyInfo } from "../SS-MCM-Operations-asn1-97/PartyInfo.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
// export { MessageType, _enum_for_MessageType, MessageType_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videotextSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotextSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_telefaxGroup2_3 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup2_3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed1 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed2 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed3 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed4 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_reservedNotUsed5 /* IMPORTED_LONG_ENUMERATION_ITEM */, reservedNotUsed5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_email /* IMPORTED_LONG_ENUMERATION_ITEM */, email /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_video /* IMPORTED_LONG_ENUMERATION_ITEM */, video /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_fileTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, fileTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_shortMessageService /* IMPORTED_LONG_ENUMERATION_ITEM */, shortMessageService /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndVideo /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndVideo /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_faxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, faxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoAndFax /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndFax /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_videoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, videoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_speechVideoFaxAndEmail /* IMPORTED_LONG_ENUMERATION_ITEM */, speechVideoFaxAndEmail /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_multimediaUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, multimediaUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_serviceUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve1 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve2 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve3 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve4 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve5 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve6 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve7 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, MessageType_futureReserve8 /* IMPORTED_LONG_ENUMERATION_ITEM */, futureReserve8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MessageType, _encode_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { UpdateInfo, _decode_UpdateInfo, _encode_UpdateInfo } from "../SS-MCM-Operations-asn1-97/UpdateInfo.ta.mjs";
// export { UpdateInfo, _decode_UpdateInfo, _encode_UpdateInfo } from "../SS-MCM-Operations-asn1-97/UpdateInfo.ta.mjs";
import { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";
// export { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";


/**
 * @summary MCMUpdateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMUpdateArg ::= SEQUENCE {
 *     partyInfo PartyInfo,
 *     messageType MessageType,
 *     updateInfo UpdateInfo,
 *     moreInfoFollows BOOLEAN DEFAULT FALSE,
 *     extensions MCMExtensions OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MCMUpdateArg {
    /**
     * @summary `partyInfo`.
     * @public
     * @readonly
     */
    readonly partyInfo: PartyInfo;
    /**
     * @summary `messageType`.
     * @public
     * @readonly
     */
    readonly messageType: MessageType;
    /**
     * @summary `updateInfo`.
     * @public
     * @readonly
     */
    readonly updateInfo: UpdateInfo;
    /**
     * @summary `moreInfoFollows`.
     * @public
     * @readonly
     */
    readonly moreInfoFollows: OPTIONAL<BOOLEAN>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<MCMExtensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyInfo: PartyInfo,
        messageType: MessageType,
        updateInfo: UpdateInfo,
        moreInfoFollows: OPTIONAL<BOOLEAN>,
        extensions: OPTIONAL<MCMExtensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyInfo = partyInfo;
        this.messageType = messageType;
        this.updateInfo = updateInfo;
        this.moreInfoFollows = moreInfoFollows;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCMUpdateArg
     * @description
     * 
     * This takes an `object` and converts it to a `MCMUpdateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCMUpdateArg`.
     * @returns {MCMUpdateArg}
     */
    public static _from_object (_o: { [_K in keyof (MCMUpdateArg)]: (MCMUpdateArg)[_K] }): MCMUpdateArg {
        return new MCMUpdateArg(_o.partyInfo, _o.messageType, _o.updateInfo, _o.moreInfoFollows, _o.extensions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `moreInfoFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreInfoFollows () { return false; }        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MCMUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCMUpdateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("partyInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("updateInfo", false, $.hasAnyTag),
    new $.ComponentSpec("moreInfoFollows", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MCMUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCMUpdateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCMUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCMUpdateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCMUpdateArg: $.ASN1Decoder<MCMUpdateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMUpdateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMUpdateArg (el: _Element): MCMUpdateArg {
    if (!_cached_decoder_for_MCMUpdateArg) { _cached_decoder_for_MCMUpdateArg = function (el: _Element): MCMUpdateArg {
    let partyInfo!: PartyInfo;
    let messageType!: MessageType;
    let updateInfo!: UpdateInfo;
    let moreInfoFollows: OPTIONAL<BOOLEAN> = MCMUpdateArg._default_value_for_moreInfoFollows;
    let extensions: OPTIONAL<MCMExtensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyInfo": (_el: _Element): void => { partyInfo = _decode_PartyInfo(_el); },
        "messageType": (_el: _Element): void => { messageType = _decode_MessageType(_el); },
        "updateInfo": (_el: _Element): void => { updateInfo = _decode_UpdateInfo(_el); },
        "moreInfoFollows": (_el: _Element): void => { moreInfoFollows = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_MCMExtensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCMUpdateArg,
        _extension_additions_list_spec_for_MCMUpdateArg,
        _root_component_type_list_2_spec_for_MCMUpdateArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCMUpdateArg(
        partyInfo,
        messageType,
        updateInfo,
        moreInfoFollows,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCMUpdateArg(el);
}

let _cached_encoder_for_MCMUpdateArg: $.ASN1Encoder<MCMUpdateArg> | null = null;

/**
 * @summary Encodes a(n) MCMUpdateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMUpdateArg, encoded as an ASN.1 Element.
 */
export
function _encode_MCMUpdateArg (value: MCMUpdateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMUpdateArg) { _cached_encoder_for_MCMUpdateArg = function (value: MCMUpdateArg, elGetter: $.ASN1Encoder<MCMUpdateArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_PartyInfo(value.partyInfo, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_MessageType(value.messageType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_UpdateInfo(value.updateInfo, $.BER);
    if (value.moreInfoFollows !== undefined && !$.deepEq(value.moreInfoFollows, MCMUpdateArg._default_value_for_moreInfoFollows)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encodeBoolean(value.moreInfoFollows, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_MCMExtensions(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCMUpdateArg(value, elGetter);
}


/* eslint-enable */
