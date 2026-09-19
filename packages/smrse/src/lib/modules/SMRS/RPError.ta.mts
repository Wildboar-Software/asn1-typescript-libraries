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
import { Error_reason, Error_reason_unknown_subscriber /* IMPORTED_LONG_NAMED_INTEGER */, unknown_subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_illegal_subscriber /* IMPORTED_LONG_NAMED_INTEGER */, illegal_subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_teleservice_not_provisioned /* IMPORTED_LONG_NAMED_INTEGER */, teleservice_not_provisioned /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_call_barred /* IMPORTED_LONG_NAMED_INTEGER */, call_barred /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_cug_reject /* IMPORTED_LONG_NAMED_INTEGER */, cug_reject /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_sMS_ll_capabilities_not_prov /* IMPORTED_LONG_NAMED_INTEGER */, sMS_ll_capabilities_not_prov /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_error_in_MS /* IMPORTED_LONG_NAMED_INTEGER */, error_in_MS /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_facility_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, facility_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_memory_capacity_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, memory_capacity_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_absent_subscriber /* IMPORTED_LONG_NAMED_INTEGER */, absent_subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_ms_busy_for_MT_sms /* IMPORTED_LONG_NAMED_INTEGER */, ms_busy_for_MT_sms /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_system_failure /* IMPORTED_LONG_NAMED_INTEGER */, system_failure /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_illegal_equipment /* IMPORTED_LONG_NAMED_INTEGER */, illegal_equipment /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_no_resp_to_paging /* IMPORTED_LONG_NAMED_INTEGER */, no_resp_to_paging /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_gMSC_congestion /* IMPORTED_LONG_NAMED_INTEGER */, gMSC_congestion /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_dublicate_sm /* IMPORTED_LONG_NAMED_INTEGER */, dublicate_sm /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_sC_congestion /* IMPORTED_LONG_NAMED_INTEGER */, sC_congestion /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_mS_not_SC_Subscriber /* IMPORTED_LONG_NAMED_INTEGER */, mS_not_SC_Subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_invalid_sme_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_sme_address /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Error_reason, _encode_Error_reason } from "../SMRS/Error-reason.ta.mjs";
// export { Error_reason, Error_reason_unknown_subscriber /* IMPORTED_LONG_NAMED_INTEGER */, unknown_subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_illegal_subscriber /* IMPORTED_LONG_NAMED_INTEGER */, illegal_subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_teleservice_not_provisioned /* IMPORTED_LONG_NAMED_INTEGER */, teleservice_not_provisioned /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_call_barred /* IMPORTED_LONG_NAMED_INTEGER */, call_barred /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_cug_reject /* IMPORTED_LONG_NAMED_INTEGER */, cug_reject /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_sMS_ll_capabilities_not_prov /* IMPORTED_LONG_NAMED_INTEGER */, sMS_ll_capabilities_not_prov /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_error_in_MS /* IMPORTED_LONG_NAMED_INTEGER */, error_in_MS /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_facility_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, facility_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_memory_capacity_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, memory_capacity_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_absent_subscriber /* IMPORTED_LONG_NAMED_INTEGER */, absent_subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_ms_busy_for_MT_sms /* IMPORTED_LONG_NAMED_INTEGER */, ms_busy_for_MT_sms /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_system_failure /* IMPORTED_LONG_NAMED_INTEGER */, system_failure /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_illegal_equipment /* IMPORTED_LONG_NAMED_INTEGER */, illegal_equipment /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_no_resp_to_paging /* IMPORTED_LONG_NAMED_INTEGER */, no_resp_to_paging /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_gMSC_congestion /* IMPORTED_LONG_NAMED_INTEGER */, gMSC_congestion /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_dublicate_sm /* IMPORTED_LONG_NAMED_INTEGER */, dublicate_sm /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_sC_congestion /* IMPORTED_LONG_NAMED_INTEGER */, sC_congestion /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_mS_not_SC_Subscriber /* IMPORTED_LONG_NAMED_INTEGER */, mS_not_SC_Subscriber /* IMPORTED_SHORT_NAMED_INTEGER */, Error_reason_invalid_sme_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_sme_address /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Error_reason, _encode_Error_reason } from "../SMRS/Error-reason.ta.mjs";
import { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
// export { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
import { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
// export { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
import { RP_UD, _decode_RP_UD, _encode_RP_UD } from "../SMRS/RP-UD.ta.mjs";
// export { RP_UD, _decode_RP_UD, _encode_RP_UD } from "../SMRS/RP-UD.ta.mjs";


/**
 * @summary RPError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPError ::= SEQUENCE {
 *     error-reason Error-reason,
 *     msg-waiting-set BOOLEAN,
 *     message-reference RP-MR,
 *     alerting-MS-ISDN [1] SMS-Address OPTIONAL,
 *     sm-diag-info [2] RP-UD OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RPError {
    constructor (
        /**
         * @summary `error_reason`.
         * @public
         * @readonly
         */
        readonly error_reason: Error_reason,
        /**
         * @summary `msg_waiting_set`.
         * @public
         * @readonly
         */
        readonly msg_waiting_set: BOOLEAN,
        /**
         * @summary `message_reference`.
         * @public
         * @readonly
         */
        readonly message_reference: RP_MR,
        /**
         * @summary `alerting_MS_ISDN`.
         * @public
         * @readonly
         */
        readonly alerting_MS_ISDN: OPTIONAL<SMS_Address>,
        /**
         * @summary `sm_diag_info`.
         * @public
         * @readonly
         */
        readonly sm_diag_info: OPTIONAL<RP_UD>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RPError
     * @description
     * 
     * This takes an `object` and converts it to a `RPError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPError`.
     * @returns {RPError}
     */
    public static _from_object (_o: { [_K in keyof (RPError)]: (RPError)[_K] }): RPError {
        return new RPError(_o.error_reason, _o.msg_waiting_set, _o.message_reference, _o.alerting_MS_ISDN, _o.sm_diag_info, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RPError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPError: $.ComponentSpec[] = [
    new $.ComponentSpec("error-reason", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msg-waiting-set", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("message-reference", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("alerting-MS-ISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sm-diag-info", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RPError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RPError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RPError: $.ASN1Decoder<RPError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPError (el: _Element): RPError {
    if (!_cached_decoder_for_RPError) { _cached_decoder_for_RPError = function (el: _Element): RPError {
    let error_reason!: Error_reason;
    let msg_waiting_set!: BOOLEAN;
    let message_reference!: RP_MR;
    let alerting_MS_ISDN: OPTIONAL<SMS_Address>;
    let sm_diag_info: OPTIONAL<RP_UD>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "error-reason": (_el: _Element): void => { error_reason = _decode_Error_reason(_el); },
        "msg-waiting-set": (_el: _Element): void => { msg_waiting_set = $._decodeBoolean(_el); },
        "message-reference": (_el: _Element): void => { message_reference = _decode_RP_MR(_el); },
        "alerting-MS-ISDN": (_el: _Element): void => { alerting_MS_ISDN = $._decode_implicit<SMS_Address>(() => _decode_SMS_Address)(_el); },
        "sm-diag-info": (_el: _Element): void => { sm_diag_info = $._decode_implicit<RP_UD>(() => _decode_RP_UD)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RPError,
        _extension_additions_list_spec_for_RPError,
        _root_component_type_list_2_spec_for_RPError,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RPError(
        error_reason,
        msg_waiting_set,
        message_reference,
        alerting_MS_ISDN,
        sm_diag_info,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RPError(el);
}

let _cached_encoder_for_RPError: $.ASN1Encoder<RPError> | null = null;

/**
 * @summary Encodes a(n) RPError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPError, encoded as an ASN.1 Element.
 */
export
function _encode_RPError (value: RPError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPError) { _cached_encoder_for_RPError = function (value: RPError, elGetter: $.ASN1Encoder<RPError>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Error_reason(value.error_reason, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.msg_waiting_set, $.BER),
            /* REQUIRED   */ _encode_RP_MR(value.message_reference, $.BER),
            /* IF_ABSENT  */ ((value.alerting_MS_ISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_Address, $.BER)(value.alerting_MS_ISDN, $.BER)),
            /* IF_ABSENT  */ ((value.sm_diag_info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RP_UD, $.BER)(value.sm_diag_info, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPError(value, elGetter);
}


/* eslint-enable */
