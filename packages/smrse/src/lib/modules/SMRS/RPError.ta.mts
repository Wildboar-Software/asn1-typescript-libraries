/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Error_reason, _decode_Error_reason, _encode_Error_reason } from "../SMRS/Error-reason.ta.mjs";
import { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
import { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
import { RP_UD, _decode_RP_UD, _encode_RP_UD } from "../SMRS/RP-UD.ta.mjs";


/**
 * @summary RPError
 * @description
 *
 * Failed relay. The GMSC sends this when the mobile station did not
 * successfully receive the short message. The service centre sends
 * this when it did not successfully receive a mobile-originated
 * short message
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.1).
 *
 * Clause 3.2 wraps this value in `RELAYapdus` with context tag 5
 * and stops after `message-reference`. `alerting-MS-ISDN` and
 * `sm-diag-info` are Nokia additions.
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
         * @description
         *
         * Why the relay failed. Mobile-terminated and
         * mobile-originated causes share this integer. See
         * `Error-reason` and the clause 2.5 mapping.
         *
         * @public
         * @readonly
         */
        readonly error_reason: Error_reason,
        /**
         * @summary `msg_waiting_set`.
         * @description
         *
         * Message-waiting indication. Clause 3.2 includes the flag
         * and does not state when it is set.
         *
         * @public
         * @readonly
         */
        readonly msg_waiting_set: BOOLEAN,
        /**
         * @summary `message_reference`.
         * @description
         *
         * Message reference of the `RPDataMT` or `RPDataMO` that
         * failed.
         *
         * @public
         * @readonly
         */
        readonly message_reference: RP_MR,
        /**
         * @summary `alerting_MS_ISDN`.
         * @description
         *
         * Optional Nokia component. Clause 3.2 does not include it,
         * and the report does not define it.
         *
         * @public
         * @readonly
         */
        readonly alerting_MS_ISDN: OPTIONAL<SMS_Address>,
        /**
         * @summary `sm_diag_info`.
         * @description
         *
         * Optional Nokia diagnostic user data. Clause 3.2 does not
         * include it, and the report does not define it.
         *
         * @public
         * @readonly
         */
        readonly sm_diag_info: OPTIONAL<RP_UD>,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions after the root components. The Nokia
         * profile leaves the sequence open.
         *
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
    const _unrecognizedExtensionsList: _Element[] = [];
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
