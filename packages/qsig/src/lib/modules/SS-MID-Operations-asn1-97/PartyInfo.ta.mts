/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentedAddressUnscreened, _decode_PresentedAddressUnscreened, _encode_PresentedAddressUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedAddressUnscreened.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";
import { MsgCentreId, _decode_MsgCentreId, _encode_MsgCentreId } from "../SS-MCM-Operations-asn1-97/MsgCentreId.ta.mjs";

/**
 * @summary PartyInfo
 * @description
 *
 * Parties named in an SS-MID invoke (ECMA-347 §7.5.1.1.2).
 * The Served User address is a presented address, and a
 * Message Type may be included.
 *
 * This is not the SS-MCM `PartyInfo`, which uses a party
 * number and has no Message Type. §7.3.1 does not say why
 * the two types differ.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInfo ::= SEQUENCE {
 *     servedUserNr PresentedAddressUnscreened,
 *     messageType MessageType OPTIONAL,
 *     messageCentreID MsgCentreId
 * }
 * ```
 * 
 * @class
 */
export
class PartyInfo {
    /**
     * @summary `servedUserNr`.
     * @description
     *
     * Address of the Served User. ECMA-347 §7.5.1.1.2.
     * @public
     * @readonly
     */
    readonly servedUserNr: PresentedAddressUnscreened;
    /**
     * @summary `messageType`.
     * @description
     *
     * Message Type of the messages stored in this mailbox,
     * when sent. ECMA-347 §7.5.1.1.2.
     * @public
     * @readonly
     */
    readonly messageType: OPTIONAL<MessageType>;
    /**
     * @summary `messageCentreID`.
     * @description
     *
     * Identity of the Message Centre. ECMA-347 §7.5.1.1.2.
     * @public
     * @readonly
     */
    readonly messageCentreID: MsgCentreId;

    constructor (
        servedUserNr: PresentedAddressUnscreened,
        messageType: OPTIONAL<MessageType>,
        messageCentreID: MsgCentreId
    ) {
        this.servedUserNr = servedUserNr;
        this.messageType = messageType;
        this.messageCentreID = messageCentreID;
    }

    /**
     * @summary Restructures an object into a PartyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PartyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyInfo`.
     * @returns {PartyInfo}
     */
    public static _from_object (_o: { [_K in keyof (PartyInfo)]: (PartyInfo)[_K] }): PartyInfo {
        return new PartyInfo(_o.servedUserNr, _o.messageType, _o.messageCentreID);
    }

        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of PartyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("messageType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("messageCentreID", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of PartyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PartyInfo: $.ASN1Decoder<PartyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInfo (el: _Element): PartyInfo {
    if (!_cached_decoder_for_PartyInfo) { _cached_decoder_for_PartyInfo = function (el: _Element): PartyInfo {
    let servedUserNr!: PresentedAddressUnscreened;
    let messageType: OPTIONAL<MessageType>;
    let messageCentreID!: MsgCentreId;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PresentedAddressUnscreened(_el); },
        "messageType": (_el: _Element): void => { messageType = _decode_MessageType(_el); },
        "messageCentreID": (_el: _Element): void => { messageCentreID = _decode_MsgCentreId(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInfo,
        _extension_additions_list_spec_for_PartyInfo,
        _root_component_type_list_2_spec_for_PartyInfo,
        undefined,
    );
    return new PartyInfo(
        servedUserNr,
        messageType,
        messageCentreID
    );
}; }
    return _cached_decoder_for_PartyInfo(el);
}

let _cached_encoder_for_PartyInfo: $.ASN1Encoder<PartyInfo> | null = null;

/**
 * @summary Encodes a(n) PartyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInfo (value: PartyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInfo) { _cached_encoder_for_PartyInfo = function (value: PartyInfo, _elGetter: $.ASN1Encoder<PartyInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PresentedAddressUnscreened(value.servedUserNr, $.BER));
    if (value.messageType !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_MessageType(value.messageType, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_MsgCentreId(value.messageCentreID, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyInfo(value, elGetter);
}

/* eslint-enable */
