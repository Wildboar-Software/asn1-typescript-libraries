/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { type SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
// export { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
import { SMSMessageType, _decode_SMSMessageType, _encode_SMSMessageType, _enum_for_SMSMessageType } from "../TS33128Payloads/SMSMessageType.ta.mjs";
// export { SMSMessageType, _enum_for_SMSMessageType, SMSMessageType_deliver /* IMPORTED_LONG_ENUMERATION_ITEM */, deliver /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_deliverReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, deliverReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_statusReport /* IMPORTED_LONG_ENUMERATION_ITEM */, statusReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_command /* IMPORTED_LONG_ENUMERATION_ITEM */, command /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submit /* IMPORTED_LONG_ENUMERATION_ITEM */, submit /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportAck /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportAck /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_submitReportError /* IMPORTED_LONG_ENUMERATION_ITEM */, submitReportError /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSMessageType_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSMessageType, _encode_SMSMessageType } from "../TS33128Payloads/SMSMessageType.ta.mjs";
import { type SMSRPMessageReference, _decode_SMSRPMessageReference, _encode_SMSRPMessageReference } from "../TS33128Payloads/SMSRPMessageReference.ta.mjs";
// export { SMSRPMessageReference, _decode_SMSRPMessageReference, _encode_SMSRPMessageReference } from "../TS33128Payloads/SMSRPMessageReference.ta.mjs";


/**
 * @summary SMSReport
 * @description
 * 
 * The sMSTPDUData.sMSTPDU field shall always be used for SMSReport records.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSReport ::= SEQUENCE
 * {
 *     location           [1] Location OPTIONAL,
 *     sMSTPDUData        [2] SMSTPDUData,
 *     messageType        [3] SMSMessageType,
 *     rPMessageReference [4] SMSRPMessageReference
 * }
 * ```
 * 
 * @class
 */
export
class SMSReport {
    /**
     * @summary `location`.
     * @description
     *
     * Location information associated with the target sending or receiving the
     * SMS, if available and authorised. See NOTE 7.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary `sMSTPDUData`.
     * @description
     *
     * SMS TPDU, encoded as per TS 23.040 [18] clause 9.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly sMSTPDUData: SMSTPDUData;
    /**
     * @summary `messageType`.
     * @description
     *
     * See table 6.2.5.3-4.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly messageType: SMSMessageType;
    /**
     * @summary `rPMessageReference`.
     * @description
     *
     * The SM-RL Message Reference of the message per TS 24.011 [46] clause 7.3.
     *
     * 3GPP TS 33.128, clause 6.2.5.3.
     *
     * @public
     * @readonly
     */
    readonly rPMessageReference: SMSRPMessageReference;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        location: OPTIONAL<Location>,
        sMSTPDUData: SMSTPDUData,
        messageType: SMSMessageType,
        rPMessageReference: SMSRPMessageReference,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.location = location;
        this.sMSTPDUData = sMSTPDUData;
        this.messageType = messageType;
        this.rPMessageReference = rPMessageReference;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SMSReport
     * @description
     * 
     * This takes an `object` and converts it to a `SMSReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMSReport`.
     * @returns {SMSReport}
     */
    public static _from_object (_o: { [_K in keyof (SMSReport)]: (SMSReport)[_K] }): SMSReport {
        return new SMSReport(_o.location, _o.sMSTPDUData, _o.messageType, _o.rPMessageReference, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_SMSMessageType;
}

/**
 * @summary The Leading Root Component Types of SMSReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMSReport: $.ComponentSpec[] = [
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sMSTPDUData", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rPMessageReference", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SMSReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMSReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMSReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMSReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMSReport: $.ASN1Decoder<SMSReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSReport (el: _Element): SMSReport {
    if (!_cached_decoder_for_SMSReport) { _cached_decoder_for_SMSReport = function (el: _Element): SMSReport {
    let location: OPTIONAL<Location>;
    let sMSTPDUData!: SMSTPDUData;
    let messageType!: SMSMessageType;
    let rPMessageReference!: SMSRPMessageReference;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "sMSTPDUData": (_el: _Element): void => { sMSTPDUData = $._decode_explicit<SMSTPDUData>(() => _decode_SMSTPDUData)(_el); },
        "messageType": (_el: _Element): void => { messageType = $._decode_implicit<SMSMessageType>(() => _decode_SMSMessageType)(_el); },
        "rPMessageReference": (_el: _Element): void => { rPMessageReference = $._decode_implicit<SMSRPMessageReference>(() => _decode_SMSRPMessageReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMSReport,
        _extension_additions_list_spec_for_SMSReport,
        _root_component_type_list_2_spec_for_SMSReport,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMSReport(
        location,
        sMSTPDUData,
        messageType,
        rPMessageReference,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMSReport(el);
}

let _cached_encoder_for_SMSReport: $.ASN1Encoder<SMSReport> | null = null;

/**
 * @summary Encodes a(n) SMSReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSReport, encoded as an ASN.1 Element.
 */
export
function _encode_SMSReport (value: SMSReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSReport) { _cached_encoder_for_SMSReport = function (value: SMSReport, elGetter: $.ASN1Encoder<SMSReport>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SMSTPDUData, $.BER)(value.sMSTPDUData, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMSMessageType, $.BER)(value.messageType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SMSRPMessageReference, $.BER)(value.rPMessageReference, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMSReport(value, elGetter);
}


/* eslint-enable */
