/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";
import { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
import { RP_UD, _decode_RP_UD, _encode_RP_UD } from "../SMRS/RP-UD.ta.mjs";
import { SM_TC, _decode_SM_TC, _encode_SM_TC } from "../SMRS/SM-TC.ta.mjs";


/**
 * @summary RPDataMT
 * @description
 *
 * SMR-MT-DATA. The service centre sends one SMS transfer-layer PDU
 * to the GMSC, which relays it to the addressed mobile station. The
 * result is `RPAck` or `RPError` after that attempt. Carried in
 * N-DATA. After an N-RESET, an unacknowledged SMR-MT-DATA is sent
 * again
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clauses 3.1 and 3.3).
 *
 * Clause 3.2 wraps this value in `RELAYapdus` with context tag 1.
 * This profile encodes `RPDataMT` itself. Clause 3.2 also
 * context-tags the two leading booleans and makes
 * `mt-more-messages-to-send` optional; this profile calls that flag
 * `mt-mms` and requires it.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPDataMT ::= SEQUENCE {
 *     mt-priority-request BOOLEAN,
 *     mt-mms BOOLEAN,
 *     mt-message-reference RP-MR,
 *     mt-originating-address SMS-Address,
 *     mt-destination-address SMS-Address,
 *     mt-user-data RP-UD,
 *     mt-origVMSCAddr [1] SMS-Address OPTIONAL,
 *     mt-tariffClass [2] SM-TC OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RPDataMT {
    constructor (
        /**
         * @summary `mt_priority_request`.
         * @description
         *
         * Priority request. Clause 3.2 includes the flag and does not
         * state when it is set.
         *
         * @public
         * @readonly
         */
        readonly mt_priority_request: BOOLEAN,
        /**
         * @summary `mt_mms`.
         * @description
         *
         * More messages to send. When this mechanism is used, clause
         * 2.2 requires `mt-message-reference` to stay unchanged until
         * every message for that destination has been sent. Clause
         * 3.2 names the flag `mt-more-messages-to-send` and makes it
         * optional.
         *
         * @public
         * @readonly
         */
        readonly mt_mms: BOOLEAN,
        /**
         * @summary `mt_message_reference`.
         * @description
         *
         * Correlates this relay with `RPAck` or `RPError`. When
         * `mt-mms` is used, clause 2.2 keeps this value unchanged
         * until every message to that destination has been sent.
         *
         * @public
         * @readonly
         */
        readonly mt_message_reference: RP_MR,
        /**
         * @summary `mt_originating_address`.
         * @description
         *
         * Originating address of the mobile-terminated relay. The
         * report does not add a format constraint for this component.
         *
         * @public
         * @readonly
         */
        readonly mt_originating_address: SMS_Address,
        /**
         * @summary `mt_destination_address`.
         * @description
         *
         * Address of the mobile station the GMSC relays toward
         * (clause 3.1).
         *
         * @public
         * @readonly
         */
        readonly mt_destination_address: SMS_Address,
        /**
         * @summary `mt_user_data`.
         * @description
         *
         * The SMS transfer-layer PDU being relayed (clause 3.1).
         *
         * @public
         * @readonly
         */
        readonly mt_user_data: RP_UD,
        /**
         * @summary `mt_origVMSCAddr`.
         * @description
         *
         * Originating mobile station's VMSC address. Optional Nokia
         * component. Clause 3.2 has no such field.
         *
         * @public
         * @readonly
         */
        readonly mt_origVMSCAddr: OPTIONAL<SMS_Address>,
        /**
         * @summary `mt_tariffClass`.
         * @description
         *
         * Service tariff. Optional Nokia component. The report does
         * not define the tariff numbering.
         *
         * @public
         * @readonly
         */
        readonly mt_tariffClass: OPTIONAL<SM_TC>,
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
     * @summary Restructures an object into a RPDataMT
     * @description
     * 
     * This takes an `object` and converts it to a `RPDataMT`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPDataMT`.
     * @returns {RPDataMT}
     */
    public static _from_object (_o: { [_K in keyof (RPDataMT)]: (RPDataMT)[_K] }): RPDataMT {
        return new RPDataMT(_o.mt_priority_request, _o.mt_mms, _o.mt_message_reference, _o.mt_originating_address, _o.mt_destination_address, _o.mt_user_data, _o.mt_origVMSCAddr, _o.mt_tariffClass, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RPDataMT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPDataMT: $.ComponentSpec[] = [
    new $.ComponentSpec("mt-priority-request", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("mt-mms", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("mt-message-reference", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("mt-originating-address", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("mt-destination-address", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("mt-user-data", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("mt-origVMSCAddr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mt-tariffClass", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RPDataMT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPDataMT: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPDataMT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RPDataMT: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RPDataMT: $.ASN1Decoder<RPDataMT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPDataMT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPDataMT (el: _Element): RPDataMT {
    if (!_cached_decoder_for_RPDataMT) { _cached_decoder_for_RPDataMT = function (el: _Element): RPDataMT {
    let mt_priority_request!: BOOLEAN;
    let mt_mms!: BOOLEAN;
    let mt_message_reference!: RP_MR;
    let mt_originating_address!: SMS_Address;
    let mt_destination_address!: SMS_Address;
    let mt_user_data!: RP_UD;
    let mt_origVMSCAddr: OPTIONAL<SMS_Address>;
    let mt_tariffClass: OPTIONAL<SM_TC>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mt-priority-request": (_el: _Element): void => { mt_priority_request = $._decodeBoolean(_el); },
        "mt-mms": (_el: _Element): void => { mt_mms = $._decodeBoolean(_el); },
        "mt-message-reference": (_el: _Element): void => { mt_message_reference = _decode_RP_MR(_el); },
        "mt-originating-address": (_el: _Element): void => { mt_originating_address = _decode_SMS_Address(_el); },
        "mt-destination-address": (_el: _Element): void => { mt_destination_address = _decode_SMS_Address(_el); },
        "mt-user-data": (_el: _Element): void => { mt_user_data = _decode_RP_UD(_el); },
        "mt-origVMSCAddr": (_el: _Element): void => { mt_origVMSCAddr = $._decode_implicit<SMS_Address>(() => _decode_SMS_Address)(_el); },
        "mt-tariffClass": (_el: _Element): void => { mt_tariffClass = $._decode_implicit<SM_TC>(() => _decode_SM_TC)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RPDataMT,
        _extension_additions_list_spec_for_RPDataMT,
        _root_component_type_list_2_spec_for_RPDataMT,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RPDataMT(
        mt_priority_request,
        mt_mms,
        mt_message_reference,
        mt_originating_address,
        mt_destination_address,
        mt_user_data,
        mt_origVMSCAddr,
        mt_tariffClass,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RPDataMT(el);
}

let _cached_encoder_for_RPDataMT: $.ASN1Encoder<RPDataMT> | null = null;

/**
 * @summary Encodes a(n) RPDataMT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPDataMT, encoded as an ASN.1 Element.
 */
export
function _encode_RPDataMT (value: RPDataMT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPDataMT) { _cached_encoder_for_RPDataMT = function (value: RPDataMT, elGetter: $.ASN1Encoder<RPDataMT>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.mt_priority_request, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.mt_mms, $.BER),
            /* REQUIRED   */ _encode_RP_MR(value.mt_message_reference, $.BER),
            /* REQUIRED   */ _encode_SMS_Address(value.mt_originating_address, $.BER),
            /* REQUIRED   */ _encode_SMS_Address(value.mt_destination_address, $.BER),
            /* REQUIRED   */ _encode_RP_UD(value.mt_user_data, $.BER),
            /* IF_ABSENT  */ ((value.mt_origVMSCAddr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_Address, $.BER)(value.mt_origVMSCAddr, $.BER)),
            /* IF_ABSENT  */ ((value.mt_tariffClass === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SM_TC, $.BER)(value.mt_tariffClass, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPDataMT(value, elGetter);
}


/* eslint-enable */
