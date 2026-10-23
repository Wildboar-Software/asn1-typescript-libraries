/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMAddressInfo, _decode_SMAddressInfo, _encode_SMAddressInfo } from "../SMSChargingDataTypes/SMAddressInfo.ta.mjs";
import { SMInterface, _decode_SMInterface, _encode_SMInterface } from "../SMSChargingDataTypes/SMInterface.ta.mjs";


/**
 * @summary RecipientInfo
 * @description
 *
 * Recipient of a short message, or of the short message a device trigger will
 * deliver. Each occurrence is a different recipient. Several occurrences are
 * allowed when several recipients share one charged event and every other
 * charging field is identical. That multi-destination case is SMS and Internet
 * electronic mail interworking (TS 23.040 clause 3.8; note 1 of table
 * 6.3.1.2.1). SC-SMO and ISM-SMO carry a sequence of recipients; the other
 * CDRs carry one.
 *
 * On a delivery report this identifies the recipient of the report, which
 * shall correspond to the originator of the message that triggered the report
 * (note 2 of table 6.3.1.2.1). Implementations differ in the originator
 * address shown to the user for a delivery report; the charging event is
 * expected to contain the information presented to that user.
 *
 * 3GPP TS 32.274 V19.1.0 table 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecipientInfo ::= SEQUENCE {
 *    recipientIMSI              [0] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    recipientMSISDN            [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recipientOtherAddress      [2] IMPLICIT SMAddressInfo OPTIONAL,
 *    recipientSCCPAddress       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recipientReceivedAddress   [4] IMPLICIT SMAddressInfo OPTIONAL,
 *    sMDestinationInterface     [5] IMPLICIT SMInterface OPTIONAL,
 *    sMRecipientProtocolID      [6] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RecipientInfo {
    /**
     * @summary `recipientIMSI`.
     * @description
     *
     * IMSI of the recipient as the SMS node received it, if available
     * (SC-SMO). On SC-SMT, the IMSI of the subscriber the short message was
     * delivered to, for a mobile-terminating message. On SC-DVT-T4, the IMSI
     * from the User Identifier sent by the MTC-IWF (TS 29.337).
     *
     * 3GPP TS 32.274 V19.1.0 tables 6.1.3.3.1, 6.1.3.4.1, and 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly recipientIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recipientMSISDN`.
     * @description
     *
     * MSISDN of the recipient as the SMS node received it, if available. On
     * SC-SMT, the primary MSISDN of the subscriber the short message was
     * delivered to. On SC-DVT-T4, the MSISDN from the MTC-IWF User Identifier,
     * if available.
     *
     * 3GPP TS 32.274 V19.1.0 tables 6.1.3.3.1, 6.1.3.4.1, and 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly recipientMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recipientOtherAddress`.
     * @description
     *
     * Recipient address other than IMSI and MSISDN, if available: for example
     * email, a short code, or, for a device trigger, an external identifier.
     * Several addresses may be carried. On SC-DVT-T4 this is the external
     * identifier from the MTC-IWF User Identifier. On SC-SMO-T4 it is the SME
     * address of the SCS/AS. Online charging also allows a long or short code
     * of the SCS/AS.
     *
     * 3GPP TS 32.274 V19.1.0 tables 6.1.3.3.1, 6.1.3.5.1, and 6.1.3.6.1.
     *
     * @public
     * @readonly
     */
    readonly recipientOtherAddress: OPTIONAL<SMAddressInfo>;
    /**
     * @summary `recipientSCCPAddress`.
     * @description
     *
     * SCCP called address the SMS node uses to deliver the short message
     * onward. Present only when SMS over IP is not the outward connection.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly recipientSCCPAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recipientReceivedAddress`.
     * @description
     *
     * Original, unmodified recipient address as the SMS node received it, when
     * the node has since manipulated the address (for example a number-plan
     * correction). Typically an E.164 number or a short code.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly recipientReceivedAddress: OPTIONAL<SMAddressInfo>;
    /**
     * @summary `sMDestinationInterface`.
     * @description
     *
     * Interface on which the short message is to be delivered, the next hop.
     * For person-to-application or application-to-application messaging this
     * identifies the application. Absent when the short message is a device
     * trigger (SC-SMT).
     *
     * 3GPP TS 32.274 V19.1.0 tables 6.1.3.4.1 and 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly sMDestinationInterface: OPTIONAL<SMInterface>;
    /**
     * @summary `sMRecipientProtocolID`.
     * @description
     *
     * TP-PROTOCOL-ID (TP-PID) of TS 23.040. Relates to the recipient when
     * charging mobile-terminating SMS. For a device trigger it holds the
     * Device Triggering Short Message code (table 6.1.3.4.1).
     *
     * 3GPP TS 32.274 V19.1.0 tables 6.1.3.4.1 and 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly sMRecipientProtocolID: OPTIONAL<OCTET_STRING>;

    constructor (
        recipientIMSI?: OPTIONAL<OCTET_STRING>,
        recipientMSISDN?: OPTIONAL<OCTET_STRING>,
        recipientOtherAddress?: OPTIONAL<SMAddressInfo>,
        recipientSCCPAddress?: OPTIONAL<OCTET_STRING>,
        recipientReceivedAddress?: OPTIONAL<SMAddressInfo>,
        sMDestinationInterface?: OPTIONAL<SMInterface>,
        sMRecipientProtocolID?: OPTIONAL<OCTET_STRING>
    ) {
        this.recipientIMSI = recipientIMSI;
        this.recipientMSISDN = recipientMSISDN;
        this.recipientOtherAddress = recipientOtherAddress;
        this.recipientSCCPAddress = recipientSCCPAddress;
        this.recipientReceivedAddress = recipientReceivedAddress;
        this.sMDestinationInterface = sMDestinationInterface;
        this.sMRecipientProtocolID = sMRecipientProtocolID;
    
        if (this.recipientIMSI !== undefined && (this.recipientIMSI.length < 3 || this.recipientIMSI.length > 8)) {
            throw new ASN1SizeError("RecipientInfo.recipientIMSI violates SIZE constraint");
        }
        if (this.recipientMSISDN !== undefined && (this.recipientMSISDN.length < 1 || this.recipientMSISDN.length > 9)) {
            throw new ASN1SizeError("RecipientInfo.recipientMSISDN violates SIZE constraint");
        }
        if (this.recipientSCCPAddress !== undefined && (this.recipientSCCPAddress.length < 1 || this.recipientSCCPAddress.length > 20)) {
            throw new ASN1SizeError("RecipientInfo.recipientSCCPAddress violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a RecipientInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RecipientInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientInfo`.
     * @returns {RecipientInfo}
     */
    public static _from_object (_o: { [_K in keyof (RecipientInfo)]: (RecipientInfo)[_K] }): RecipientInfo {
        return new RecipientInfo(_o.recipientIMSI, _o.recipientMSISDN, _o.recipientOtherAddress, _o.recipientSCCPAddress, _o.recipientReceivedAddress, _o.sMDestinationInterface, _o.sMRecipientProtocolID);
    }


}

/**
 * @summary The Leading Root Component Types of RecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("recipientIMSI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recipientMSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recipientOtherAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recipientSCCPAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recipientReceivedAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMDestinationInterface", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sMRecipientProtocolID", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of RecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecipientInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecipientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecipientInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecipientInfo (el: _Element): RecipientInfo {
    if (!_cached_decoder_for_RecipientInfo) { _cached_decoder_for_RecipientInfo = function (el: _Element): RecipientInfo {
    let recipientIMSI: OPTIONAL<OCTET_STRING>;
    let recipientMSISDN: OPTIONAL<OCTET_STRING>;
    let recipientOtherAddress: OPTIONAL<SMAddressInfo>;
    let recipientSCCPAddress: OPTIONAL<OCTET_STRING>;
    let recipientReceivedAddress: OPTIONAL<SMAddressInfo>;
    let sMDestinationInterface: OPTIONAL<SMInterface>;
    let sMRecipientProtocolID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "recipientIMSI": (_el: _Element): void => { recipientIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientMSISDN": (_el: _Element): void => { recipientMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientOtherAddress": (_el: _Element): void => { recipientOtherAddress = $._decode_implicit<SMAddressInfo>(() => _decode_SMAddressInfo)(_el); },
        "recipientSCCPAddress": (_el: _Element): void => { recipientSCCPAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recipientReceivedAddress": (_el: _Element): void => { recipientReceivedAddress = $._decode_implicit<SMAddressInfo>(() => _decode_SMAddressInfo)(_el); },
        "sMDestinationInterface": (_el: _Element): void => { sMDestinationInterface = $._decode_implicit<SMInterface>(() => _decode_SMInterface)(_el); },
        "sMRecipientProtocolID": (_el: _Element): void => { sMRecipientProtocolID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecipientInfo,
        _extension_additions_list_spec_for_RecipientInfo,
        _root_component_type_list_2_spec_for_RecipientInfo,
        undefined,
    );
    return new RecipientInfo(
        recipientIMSI,
        recipientMSISDN,
        recipientOtherAddress,
        recipientSCCPAddress,
        recipientReceivedAddress,
        sMDestinationInterface,
        sMRecipientProtocolID
    );
}; }
    return _cached_decoder_for_RecipientInfo(el);
}

let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;

/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RecipientInfo (value: RecipientInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecipientInfo) { _cached_encoder_for_RecipientInfo = function (value: RecipientInfo, _elGetter: $.ASN1Encoder<RecipientInfo>): _Element {
    const _components: _Element[] = [];
    if (value.recipientIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.recipientIMSI, $.BER));
    }
    if (value.recipientMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.recipientMSISDN, $.BER));
    }
    if (value.recipientOtherAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMAddressInfo, $.BER)(value.recipientOtherAddress, $.BER));
    }
    if (value.recipientSCCPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recipientSCCPAddress, $.BER));
    }
    if (value.recipientReceivedAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMAddressInfo, $.BER)(value.recipientReceivedAddress, $.BER));
    }
    if (value.sMDestinationInterface !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SMInterface, $.BER)(value.sMDestinationInterface, $.BER));
    }
    if (value.sMRecipientProtocolID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.sMRecipientProtocolID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}


/* eslint-enable */
