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
import { PayloadType, PayloadType_dmt_unknown /* IMPORTED_LONG_NAMED_INTEGER */, dmt_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_r14p /* IMPORTED_LONG_NAMED_INTEGER */, dmt_r14p /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_layer2 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_layer2 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_ip /* IMPORTED_LONG_NAMED_INTEGER */, dmt_ip /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sctp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sctp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_tcp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_tcp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_udp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_udp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m3ua /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m3ua /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m2ua /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m2ua /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_mtp3 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_mtp3 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_isup /* IMPORTED_LONG_NAMED_INTEGER */, dmt_isup /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_h248 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_h248 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sccp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sccp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smstpdu /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smstpdu /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smpp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smpp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_tcap /* IMPORTED_LONG_NAMED_INTEGER */, dmt_tcap /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_rtp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_rtp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sip /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sip /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_pop3 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_pop3 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_imap /* IMPORTED_LONG_NAMED_INTEGER */, dmt_imap /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_http /* IMPORTED_LONG_NAMED_INTEGER */, dmt_http /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_radius /* IMPORTED_LONG_NAMED_INTEGER */, dmt_radius /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_dhcp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_dhcp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smtp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smtp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m2pa /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m2pa /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_mtp2 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_mtp2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PayloadType, _encode_PayloadType } from "../GDT/PayloadType.ta.mjs";
// export { PayloadType, PayloadType_dmt_unknown /* IMPORTED_LONG_NAMED_INTEGER */, dmt_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_r14p /* IMPORTED_LONG_NAMED_INTEGER */, dmt_r14p /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_layer2 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_layer2 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_ip /* IMPORTED_LONG_NAMED_INTEGER */, dmt_ip /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sctp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sctp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_tcp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_tcp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_udp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_udp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m3ua /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m3ua /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m2ua /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m2ua /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_mtp3 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_mtp3 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_isup /* IMPORTED_LONG_NAMED_INTEGER */, dmt_isup /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_h248 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_h248 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sccp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sccp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smstpdu /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smstpdu /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smpp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smpp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_tcap /* IMPORTED_LONG_NAMED_INTEGER */, dmt_tcap /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_rtp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_rtp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_sip /* IMPORTED_LONG_NAMED_INTEGER */, dmt_sip /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_pop3 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_pop3 /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_imap /* IMPORTED_LONG_NAMED_INTEGER */, dmt_imap /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_http /* IMPORTED_LONG_NAMED_INTEGER */, dmt_http /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_radius /* IMPORTED_LONG_NAMED_INTEGER */, dmt_radius /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_dhcp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_dhcp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_smtp /* IMPORTED_LONG_NAMED_INTEGER */, dmt_smtp /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_m2pa /* IMPORTED_LONG_NAMED_INTEGER */, dmt_m2pa /* IMPORTED_SHORT_NAMED_INTEGER */, PayloadType_dmt_mtp2 /* IMPORTED_LONG_NAMED_INTEGER */, dmt_mtp2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PayloadType, _encode_PayloadType } from "../GDT/PayloadType.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary PacketFwdMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketFwdMessage ::= SEQUENCE {
 *     payload-type    PayloadType,
 *     payload         OCTET STRING OPTIONAL,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketFwdMessage {
    constructor (
        /**
         * @summary `payload_type`.
         * @public
         * @readonly
         */
        readonly payload_type: PayloadType,
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: OPTIONAL<OCTET_STRING>,
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
     * @summary Restructures an object into a PacketFwdMessage
     * @description
     * 
     * This takes an `object` and converts it to a `PacketFwdMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketFwdMessage`.
     * @returns {PacketFwdMessage}
     */
    public static _from_object (_o: { [_K in keyof (PacketFwdMessage)]: (PacketFwdMessage)[_K] }): PacketFwdMessage {
        return new PacketFwdMessage(_o.payload_type, _o.payload, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PacketFwdMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketFwdMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("payload-type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("payload", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PacketFwdMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketFwdMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketFwdMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketFwdMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketFwdMessage: $.ASN1Decoder<PacketFwdMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketFwdMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketFwdMessage (el: _Element): PacketFwdMessage {
    if (!_cached_decoder_for_PacketFwdMessage) { _cached_decoder_for_PacketFwdMessage = function (el: _Element): PacketFwdMessage {
    let payload_type!: PayloadType;
    let payload: OPTIONAL<OCTET_STRING>;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payload-type": (_el: _Element): void => { payload_type = _decode_PayloadType(_el); },
        "payload": (_el: _Element): void => { payload = $._decodeOctetString(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PacketFwdMessage,
        _extension_additions_list_spec_for_PacketFwdMessage,
        _root_component_type_list_2_spec_for_PacketFwdMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PacketFwdMessage(
        payload_type,
        payload,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PacketFwdMessage(el);
}

let _cached_encoder_for_PacketFwdMessage: $.ASN1Encoder<PacketFwdMessage> | null = null;

/**
 * @summary Encodes a(n) PacketFwdMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketFwdMessage, encoded as an ASN.1 Element.
 */
export
function _encode_PacketFwdMessage (value: PacketFwdMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketFwdMessage) { _cached_encoder_for_PacketFwdMessage = function (value: PacketFwdMessage, elGetter: $.ASN1Encoder<PacketFwdMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PayloadType(value.payload_type, $.BER),
            /* IF_ABSENT  */ ((value.payload === undefined) ? undefined : $._encodeOctetString(value.payload, $.BER)),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PacketFwdMessage(value, elGetter);
}


/* eslint-enable */
