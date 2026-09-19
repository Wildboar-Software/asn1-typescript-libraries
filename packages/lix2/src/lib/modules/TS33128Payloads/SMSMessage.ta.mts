/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { SMSParty, _decode_SMSParty, _encode_SMSParty } from "../TS33128Payloads/SMSParty.ta.mjs";
// export { SMSParty, _decode_SMSParty, _encode_SMSParty } from "../TS33128Payloads/SMSParty.ta.mjs";
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { SMSTransferStatus, _enum_for_SMSTransferStatus, SMSTransferStatus_transferSucceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, transferSucceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSTransferStatus_transferFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, transferFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSTransferStatus_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSTransferStatus, _encode_SMSTransferStatus } from "../TS33128Payloads/SMSTransferStatus.ta.mjs";
// export { SMSTransferStatus, _enum_for_SMSTransferStatus, SMSTransferStatus_transferSucceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, transferSucceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSTransferStatus_transferFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, transferFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSTransferStatus_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSTransferStatus, _encode_SMSTransferStatus } from "../TS33128Payloads/SMSTransferStatus.ta.mjs";
import { SMSOtherMessageIndication, _decode_SMSOtherMessageIndication, _encode_SMSOtherMessageIndication } from "../TS33128Payloads/SMSOtherMessageIndication.ta.mjs";
// export { SMSOtherMessageIndication, _decode_SMSOtherMessageIndication, _encode_SMSOtherMessageIndication } from "../TS33128Payloads/SMSOtherMessageIndication.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SMSNFAddress, _decode_SMSNFAddress, _encode_SMSNFAddress } from "../TS33128Payloads/SMSNFAddress.ta.mjs";
// export { SMSNFAddress, _decode_SMSNFAddress, _encode_SMSNFAddress } from "../TS33128Payloads/SMSNFAddress.ta.mjs";
import { SMSNFType, _enum_for_SMSNFType, SMSNFType_sMSGMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSGMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSNFType_iWMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, iWMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSNFType_sMSRouter /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSRouter /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSNFType, _encode_SMSNFType } from "../TS33128Payloads/SMSNFType.ta.mjs";
// export { SMSNFType, _enum_for_SMSNFType, SMSNFType_sMSGMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSGMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSNFType_iWMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, iWMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSNFType_sMSRouter /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSRouter /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSNFType, _encode_SMSNFType } from "../TS33128Payloads/SMSNFType.ta.mjs";
import { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
// export { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
import { SMSMessageType, _enum_for_SMSMessageType, SMSMessageType_deliver /* IMPORTED_LONG_ENUMERATION_ITEM */, deliver /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_statusReport /* IMPORTED_LONG_ENUMERATION_ITEM */, statusReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_command /* IMPORTED_LONG_ENUMERATION_ITEM */, command /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submit /* IMPORTED_LONG_ENUMERATION_ITEM */, submit /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSMessageType, _encode_SMSMessageType } from "../TS33128Payloads/SMSMessageType.ta.mjs";
// export { SMSMessageType, _enum_for_SMSMessageType, SMSMessageType_deliver /* IMPORTED_LONG_ENUMERATION_ITEM */, deliver /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_statusReport /* IMPORTED_LONG_ENUMERATION_ITEM */, statusReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_command /* IMPORTED_LONG_ENUMERATION_ITEM */, command /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submit /* IMPORTED_LONG_ENUMERATION_ITEM */, submit /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSMessageType, _encode_SMSMessageType } from "../TS33128Payloads/SMSMessageType.ta.mjs";
import { SMSRPMessageReference, _decode_SMSRPMessageReference, _encode_SMSRPMessageReference } from "../TS33128Payloads/SMSRPMessageReference.ta.mjs";
// export { SMSRPMessageReference, _decode_SMSRPMessageReference, _encode_SMSRPMessageReference } from "../TS33128Payloads/SMSRPMessageReference.ta.mjs";


/**
 * @summary SMSMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSMessage ::= SEQUENCE
 * {
 *     originatingSMSParty         [1] SMSParty,
 *     terminatingSMSParty         [2] SMSParty,
 *     direction                   [3] Direction,
 *     linkTransferStatus          [4] SMSTransferStatus,
 *     otherMessage                [5] SMSOtherMessageIndication OPTIONAL,
 *     location                    [6] Location OPTIONAL,
 *     peerNFAddress               [7] SMSNFAddress OPTIONAL,
 *     peerNFType                  [8] SMSNFType OPTIONAL,
 *     sMSTPDUData                 [9] SMSTPDUData OPTIONAL,
 *     messageType                 [10] SMSMessageType OPTIONAL,
 *     rPMessageReference          [11] SMSRPMessageReference OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMSMessage {
    constructor (
        /**
         * @summary `originatingSMSParty`.
         * @public
         * @readonly
         */
        readonly originatingSMSParty: SMSParty,
        /**
         * @summary `terminatingSMSParty`.
         * @public
         * @readonly
         */
        readonly terminatingSMSParty: SMSParty,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: Direction,
        /**
         * @summary `linkTransferStatus`.
         * @public
         * @readonly
         */
        readonly linkTransferStatus: SMSTransferStatus,
        /**
         * @summary `otherMessage`.
         * @public
         * @readonly
         */
        readonly otherMessage: OPTIONAL<SMSOtherMessageIndication>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `peerNFAddress`.
         * @public
         * @readonly
         */
        readonly peerNFAddress: OPTIONAL<SMSNFAddress>,
        /**
         * @summary `peerNFType`.
         * @public
         * @readonly
         */
        readonly peerNFType: OPTIONAL<SMSNFType>,
        /**
         * @summary `sMSTPDUData`.
         * @public
         * @readonly
         */
        readonly sMSTPDUData: OPTIONAL<SMSTPDUData>,
        /**
         * @summary `messageType`.
         * @public
         * @readonly
         */
        readonly messageType: OPTIONAL<SMSMessageType>,
        /**
         * @summary `rPMessageReference`.
         * @public
         * @readonly
         */
        readonly rPMessageReference: OPTIONAL<SMSRPMessageReference>
    ) {}

    /**
     * @summary Restructures an object into a SMSMessage
     * @description
     * 
     * This takes an `object` and converts it to a `SMSMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMSMessage`.
     * @returns {SMSMessage}
     */
    public static _from_object (_o: { [_K in keyof (SMSMessage)]: (SMSMessage)[_K] }): SMSMessage {
        return new SMSMessage(_o.originatingSMSParty, _o.terminatingSMSParty, _o.direction, _o.linkTransferStatus, _o.otherMessage, _o.location, _o.peerNFAddress, _o.peerNFType, _o.sMSTPDUData, _o.messageType, _o.rPMessageReference);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `linkTransferStatus`
         * @public
         * @static
         */

    public static _enum_for_linkTransferStatus = _enum_for_SMSTransferStatus;        /**
         * @summary The enum used as the type of the component `peerNFType`
         * @public
         * @static
         */

    public static _enum_for_peerNFType = _enum_for_SMSNFType;        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_SMSMessageType;
}

/**
 * @summary The Leading Root Component Types of SMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMSMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingSMSParty", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("terminatingSMSParty", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("linkTransferStatus", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("otherMessage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("peerNFAddress", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("peerNFType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sMSTPDUData", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("messageType", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("rPMessageReference", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of SMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMSMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMSMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMSMessage: $.ASN1Decoder<SMSMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSMessage (el: _Element): SMSMessage {
    if (!_cached_decoder_for_SMSMessage) { _cached_decoder_for_SMSMessage = function (el: _Element): SMSMessage {
    let originatingSMSParty!: SMSParty;
    let terminatingSMSParty!: SMSParty;
    let direction!: Direction;
    let linkTransferStatus!: SMSTransferStatus;
    let otherMessage: OPTIONAL<SMSOtherMessageIndication>;
    let location: OPTIONAL<Location>;
    let peerNFAddress: OPTIONAL<SMSNFAddress>;
    let peerNFType: OPTIONAL<SMSNFType>;
    let sMSTPDUData: OPTIONAL<SMSTPDUData>;
    let messageType: OPTIONAL<SMSMessageType>;
    let rPMessageReference: OPTIONAL<SMSRPMessageReference>;
    const callbacks: $.DecodingMap = {
        "originatingSMSParty": (_el: _Element): void => { originatingSMSParty = $._decode_implicit<SMSParty>(() => _decode_SMSParty)(_el); },
        "terminatingSMSParty": (_el: _Element): void => { terminatingSMSParty = $._decode_implicit<SMSParty>(() => _decode_SMSParty)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "linkTransferStatus": (_el: _Element): void => { linkTransferStatus = $._decode_implicit<SMSTransferStatus>(() => _decode_SMSTransferStatus)(_el); },
        "otherMessage": (_el: _Element): void => { otherMessage = $._decode_implicit<SMSOtherMessageIndication>(() => _decode_SMSOtherMessageIndication)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "peerNFAddress": (_el: _Element): void => { peerNFAddress = $._decode_explicit<SMSNFAddress>(() => _decode_SMSNFAddress)(_el); },
        "peerNFType": (_el: _Element): void => { peerNFType = $._decode_implicit<SMSNFType>(() => _decode_SMSNFType)(_el); },
        "sMSTPDUData": (_el: _Element): void => { sMSTPDUData = $._decode_explicit<SMSTPDUData>(() => _decode_SMSTPDUData)(_el); },
        "messageType": (_el: _Element): void => { messageType = $._decode_implicit<SMSMessageType>(() => _decode_SMSMessageType)(_el); },
        "rPMessageReference": (_el: _Element): void => { rPMessageReference = $._decode_implicit<SMSRPMessageReference>(() => _decode_SMSRPMessageReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMSMessage,
        _extension_additions_list_spec_for_SMSMessage,
        _root_component_type_list_2_spec_for_SMSMessage,
        undefined,
    );
    return new SMSMessage(
        originatingSMSParty,
        terminatingSMSParty,
        direction,
        linkTransferStatus,
        otherMessage,
        location,
        peerNFAddress,
        peerNFType,
        sMSTPDUData,
        messageType,
        rPMessageReference
    );
}; }
    return _cached_decoder_for_SMSMessage(el);
}

let _cached_encoder_for_SMSMessage: $.ASN1Encoder<SMSMessage> | null = null;

/**
 * @summary Encodes a(n) SMSMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSMessage, encoded as an ASN.1 Element.
 */
export
function _encode_SMSMessage (value: SMSMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSMessage) { _cached_encoder_for_SMSMessage = function (value: SMSMessage, elGetter: $.ASN1Encoder<SMSMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMSParty, $.BER)(value.originatingSMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMSParty, $.BER)(value.terminatingSMSParty, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Direction, $.BER)(value.direction, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMSTransferStatus, $.BER)(value.linkTransferStatus, $.BER),
            /* IF_ABSENT  */ ((value.otherMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SMSOtherMessageIndication, $.BER)(value.otherMessage, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.peerNFAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_SMSNFAddress, $.BER)(value.peerNFAddress, $.BER)),
            /* IF_ABSENT  */ ((value.peerNFType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SMSNFType, $.BER)(value.peerNFType, $.BER)),
            /* IF_ABSENT  */ ((value.sMSTPDUData === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_SMSTPDUData, $.BER)(value.sMSTPDUData, $.BER)),
            /* IF_ABSENT  */ ((value.messageType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SMSMessageType, $.BER)(value.messageType, $.BER)),
            /* IF_ABSENT  */ ((value.rPMessageReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_SMSRPMessageReference, $.BER)(value.rPMessageReference, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMSMessage(value, elGetter);
}


/* eslint-enable */
