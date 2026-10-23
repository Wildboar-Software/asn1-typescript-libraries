/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { MessageReference, _decode_MessageReference, _encode_MessageReference } from "../Short-Message-Service-Operations-asn1-97/MessageReference.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { CommandType, _decode_CommandType, _encode_CommandType } from "../Short-Message-Service-Operations-asn1-97/CommandType.ta.mjs";
import { CommandData, _decode_CommandData, _encode_CommandData } from "../Short-Message-Service-Operations-asn1-97/CommandData.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary SmsCommandArg
 * @description
 *
 * Argument of `smsCommand` (ECMA-325 §6.5.1.1.2, Annex E.10). §6.5.3.1.2 finds
 * the stored Short Message using `originatingAddress` and `messageNumber`.
 * This argument has no `originatingAddress`. The standard does not say where
 * that address is taken from.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsCommandArg ::= SEQUENCE {
 *     destinationAddress PartyNumber,
 *     messageReference MessageReference,
 *     messageNumber MessageReference,
 *     protocolIdentifier ProtocolIdentifier,
 *     commandType CommandType,
 *     commandData CommandData OPTIONAL,
 *     statusReportRequest BOOLEAN OPTIONAL,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsCommandArg {
    /**
     * @summary `destinationAddress`.
     * @description
     *
     * Party number of the Receiving User of the Short Message this command
     * refers to (ECMA-325 §6.5.1.1.2).
     * @public
     * @readonly
     */
    readonly destinationAddress: PartyNumber;
    /**
     * @summary `messageReference`.
     * @description
     *
     * New reference for this Command, 0..255, wrapping from 255 to 0 (ECMA-325
     * §E.10.1). It is not the reference of the Short Message being commanded.
     * @public
     * @readonly
     */
    readonly messageReference: MessageReference;
    /**
     * @summary `messageNumber`.
     * @description
     *
     * Reference of the Short Message this Command acts on (ECMA-325 §E.10.2).
     * The Service Centre uses it to find the stored Short Message (§6.5.3.1.2).
     * Ignored when the command does not act on one Short Message. The four
     * named command types in §6.5.3.1.2 all identify a stored Short Message.
     * @public
     * @readonly
     */
    readonly messageNumber: MessageReference;
    /**
     * @summary `protocolIdentifier`.
     * @description
     *
     * Higher-layer protocol (ECMA-325 §6.5.1.1.2, §E.10.3, §E.1.2.1).
     * @public
     * @readonly
     */
    readonly protocolIdentifier: ProtocolIdentifier;
    /**
     * @summary `commandType`.
     * @description
     *
     * What to do to the stored Short Message (ECMA-325 §E.10.4, §6.5.3.1.2).
     * @public
     * @readonly
     */
    readonly commandType: CommandType;
    /**
     * @summary `commandData`.
     * @description
     *
     * Octets related to the requested operation (ECMA-325 §E.10.5). No format
     * is specified.
     * @public
     * @readonly
     */
    readonly commandData: OPTIONAL<CommandData>;
    /**
     * @summary `statusReportRequest`.
     * @description
     *
     * Whether this Command wants a Status Report. Annex E.10.6 requires TRUE
     * for `enquiry` and FALSE otherwise. The element is optional; the annex is
     * silent on omission.
     * @public
     * @readonly
     */
    readonly statusReportRequest: OPTIONAL<BOOLEAN>;
    /**
     * @summary `smsExtension`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in `SmsExtSet`
     * (ECMA-325 §6.3.1).
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        destinationAddress: PartyNumber,
        messageReference: MessageReference,
        messageNumber: MessageReference,
        protocolIdentifier: ProtocolIdentifier,
        commandType: CommandType,
        commandData?: OPTIONAL<CommandData>,
        statusReportRequest?: OPTIONAL<BOOLEAN>,
        smsExtension?: OPTIONAL<SmsExtension>
    ) {
        this.destinationAddress = destinationAddress;
        this.messageReference = messageReference;
        this.messageNumber = messageNumber;
        this.protocolIdentifier = protocolIdentifier;
        this.commandType = commandType;
        this.commandData = commandData;
        this.statusReportRequest = statusReportRequest;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsCommandArg
     * @description
     * 
     * This takes an `object` and converts it to a `SmsCommandArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsCommandArg`.
     * @returns {SmsCommandArg}
     */
    public static _from_object (_o: { [_K in keyof (SmsCommandArg)]: (SmsCommandArg)[_K] }): SmsCommandArg {
        return new SmsCommandArg(_o.destinationAddress, _o.messageReference, _o.messageNumber, _o.protocolIdentifier, _o.commandType, _o.commandData, _o.statusReportRequest, _o.smsExtension);
    }

}

/**
 * @summary The Leading Root Component Types of SmsCommandArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsCommandArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationAddress", false, $.hasAnyTag),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("messageNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("protocolIdentifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("commandType", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("commandData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("statusReportRequest", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsCommandArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsCommandArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsCommandArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsCommandArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsCommandArg: $.ASN1Decoder<SmsCommandArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsCommandArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsCommandArg (el: _Element): SmsCommandArg {
    if (!_cached_decoder_for_SmsCommandArg) { _cached_decoder_for_SmsCommandArg = function (el: _Element): SmsCommandArg {
    let destinationAddress!: PartyNumber;
    let messageReference!: MessageReference;
    let messageNumber!: MessageReference;
    let protocolIdentifier!: ProtocolIdentifier;
    let commandType!: CommandType;
    let commandData: OPTIONAL<CommandData>;
    let statusReportRequest: OPTIONAL<BOOLEAN>;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "destinationAddress": (_el: _Element): void => { destinationAddress = _decode_PartyNumber(_el); },
        "messageReference": (_el: _Element): void => { messageReference = _decode_MessageReference(_el); },
        "messageNumber": (_el: _Element): void => { messageNumber = _decode_MessageReference(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = _decode_ProtocolIdentifier(_el); },
        "commandType": (_el: _Element): void => { commandType = _decode_CommandType(_el); },
        "commandData": (_el: _Element): void => { commandData = _decode_CommandData(_el); },
        "statusReportRequest": (_el: _Element): void => { statusReportRequest = $._decodeBoolean(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsCommandArg,
        _extension_additions_list_spec_for_SmsCommandArg,
        _root_component_type_list_2_spec_for_SmsCommandArg,
        undefined,
    );
    return new SmsCommandArg(
        destinationAddress,
        messageReference,
        messageNumber,
        protocolIdentifier,
        commandType,
        commandData,
        statusReportRequest,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsCommandArg(el);
}

let _cached_encoder_for_SmsCommandArg: $.ASN1Encoder<SmsCommandArg> | null = null;

/**
 * @summary Encodes a(n) SmsCommandArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsCommandArg, encoded as an ASN.1 Element.
 */
export
function _encode_SmsCommandArg (value: SmsCommandArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsCommandArg) { _cached_encoder_for_SmsCommandArg = function (value: SmsCommandArg, _elGetter: $.ASN1Encoder<SmsCommandArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.destinationAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_MessageReference(value.messageReference, $.BER));
    _components.push(/* REQUIRED   */ _encode_MessageReference(value.messageNumber, $.BER));
    _components.push(/* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolIdentifier, $.BER));
    _components.push(/* REQUIRED   */ _encode_CommandType(value.commandType, $.BER));
    if (value.commandData !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CommandData(value.commandData, $.BER));
    }
    if (value.statusReportRequest !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeBoolean(value.statusReportRequest, $.BER));
    }
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsCommandArg(value, elGetter);
}

/* eslint-enable */
