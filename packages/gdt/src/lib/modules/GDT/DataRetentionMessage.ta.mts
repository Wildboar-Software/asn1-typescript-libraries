/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PayloadType, _decode_PayloadType, _encode_PayloadType } from "../GDT/PayloadType.ta.mjs";
// export { PayloadType, PayloadType_dmt_unknown /* IMPORTED_LONG_NAMED_INTEGER */, dmt_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_r14p /* IMPORTED_LONG_NAMED_INTEGER */, dmt_r14p /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_layer2 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_layer2 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_ip /* IMPORTED_LONG_NAMED_INTEGER */, dmt_ip /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sctp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sctp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_tcp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_tcp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_udp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_udp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m3ua /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m3ua /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m2ua /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m2ua /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_mtp3 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_mtp3 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_isup /* IMPORTED_LONG_NAMED_INTEGER */, dmt_isup /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_h248 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_h248 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sccp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sccp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smstpdu /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smstpdu /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smpp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smpp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_tcap /* IMPORTED_LONG_NAMED_INTEGER */, dmt_tcap /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_rtp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_rtp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sip /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sip /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_pop3 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_pop3 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_imap /* IMPORTED_LONG_NAMED_INTEGER */, dmt_imap /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_http /* IMPORTED_LONG_NAMED_INTEGER */, dmt_http /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_radius /* IMPORTED_LONG_NAMED_INTEGER */, dmt_radius /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_dhcp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_dhcp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smtp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smtp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m2pa /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m2pa /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_mtp2 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_mtp2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PayloadType, _encode_PayloadType } from "../GDT/PayloadType.ta.mjs";
import { DataRetentionAction, _decode_DataRetentionAction, _encode_DataRetentionAction } from "../GDT/DataRetentionAction.ta.mjs";
// export { DataRetentionAction, DataRetentionAction_ra_store /* IMPORTED_LONG_NAMED_INTEGER */, ra_store /* IMPORTED_SHORT_NAMED_INTEGER */, DataRetentionAction_ra_delete /* IMPORTED_LONG_NAMED_INTEGER */, ra_delete /* IMPORTED_SHORT_NAMED_INTEGER */, DataRetentionAction_ra_fetch /* IMPORTED_LONG_NAMED_INTEGER */, ra_fetch /* IMPORTED_SHORT_NAMED_INTEGER */, DataRetentionAction_ra_result /* IMPORTED_LONG_NAMED_INTEGER */, ra_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DataRetentionAction, _encode_DataRetentionAction } from "../GDT/DataRetentionAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary DataRetentionMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataRetentionMessage ::= SEQUENCE {
 *     payload-type    PayloadType OPTIONAL,
 *     payload         OCTET STRING OPTIONAL,
 *     dr-action       DataRetentionAction,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DataRetentionMessage {
    constructor (
        /**
         * @summary `payload_type`.
         * @public
         * @readonly
         */
        readonly payload_type: OPTIONAL<PayloadType>,
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `dr_action`.
         * @public
         * @readonly
         */
        readonly dr_action: DataRetentionAction,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DataRetentionMessage
     * @description
     * 
     * This takes an `object` and converts it to a `DataRetentionMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataRetentionMessage`.
     * @returns {DataRetentionMessage}
     */
    public static _from_object (_o: { [_K in keyof (DataRetentionMessage)]: (DataRetentionMessage)[_K] }): DataRetentionMessage {
        return new DataRetentionMessage(_o.payload_type, _o.payload, _o.dr_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DataRetentionMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DataRetentionMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("payload-type", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("payload", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("dr-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DataRetentionMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DataRetentionMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DataRetentionMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DataRetentionMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DataRetentionMessage: $.ASN1Decoder<DataRetentionMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataRetentionMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataRetentionMessage (el: _Element): DataRetentionMessage {
    if (!_cached_decoder_for_DataRetentionMessage) { _cached_decoder_for_DataRetentionMessage = function (el: _Element): DataRetentionMessage {
    let payload_type: OPTIONAL<PayloadType>;
    let payload: OPTIONAL<OCTET_STRING>;
    let dr_action!: DataRetentionAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payload-type": (_el: _Element): void => { payload_type = _decode_PayloadType(_el); },
        "payload": (_el: _Element): void => { payload = $._decodeOctetString(_el); },
        "dr-action": (_el: _Element): void => { dr_action = _decode_DataRetentionAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DataRetentionMessage,
        _extension_additions_list_spec_for_DataRetentionMessage,
        _root_component_type_list_2_spec_for_DataRetentionMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DataRetentionMessage(
        payload_type,
        payload,
        dr_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DataRetentionMessage(el);
}

let _cached_encoder_for_DataRetentionMessage: $.ASN1Encoder<DataRetentionMessage> | null = null;

/**
 * @summary Encodes a(n) DataRetentionMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataRetentionMessage, encoded as an ASN.1 Element.
 */
export
function _encode_DataRetentionMessage (value: DataRetentionMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataRetentionMessage) { _cached_encoder_for_DataRetentionMessage = function (value: DataRetentionMessage, elGetter: $.ASN1Encoder<DataRetentionMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.payload_type === undefined) ? undefined : _encode_PayloadType(value.payload_type, $.BER)),
            /* IF_ABSENT  */ ((value.payload === undefined) ? undefined : $._encodeOctetString(value.payload, $.BER)),
            /* REQUIRED   */ _encode_DataRetentionAction(value.dr_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DataRetentionMessage(value, elGetter);
}


/* eslint-enable */
