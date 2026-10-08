/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_Address, _decode_SMS_Address, _encode_SMS_Address } from "../SMRS/SMS-Address.ta.mjs";
import { RP_MR, _decode_RP_MR, _encode_RP_MR } from "../SMRS/RP-MR.ta.mjs";


/**
 * @summary RPAlertSC
 * @description
 *
 * SMR-ALERT. The GMSC tells the service centre that a mobile
 * station which was previously unattainable has recovered
 * ([ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.1). Clause 3.1 says the operation reports no outcome,
 * and clause 3.2 defines `RPAlertSC` as an `SMS-Address` that must
 * be an international ISDN address.
 *
 * This profile sends a sequence and adds `message-reference`
 * because the alert is acknowledged. On a transient association,
 * clause 3.3.2 applies a guard timer after the alert before
 * `SMR-Unbind`.
 *
 * Clause 3.2 wraps the alert in `RELAYapdus` with context tag 3.
 * This profile encodes `RPAlertSC` itself.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RPAlertSC ::= SEQUENCE {
 *     ms-address SMS-Address,
 *     message-reference RP-MR,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RPAlertSC {
    constructor (
        /**
         * @summary `ms_address`.
         * @description
         *
         * International ISDN address of the mobile station that
         * recovered (clause 3.2).
         *
         * @public
         * @readonly
         */
        readonly ms_address: SMS_Address,
        /**
         * @summary `message_reference`.
         * @description
         *
         * Present so the alert can be acknowledged. Clause 3.2's
         * `RPAlertSC` has no message reference, and clause 3.1 says
         * SMR-ALERT reports no outcome.
         *
         * @public
         * @readonly
         */
        readonly message_reference: RP_MR,
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
     * @summary Restructures an object into a RPAlertSC
     * @description
     * 
     * This takes an `object` and converts it to a `RPAlertSC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RPAlertSC`.
     * @returns {RPAlertSC}
     */
    public static _from_object (_o: { [_K in keyof (RPAlertSC)]: (RPAlertSC)[_K] }): RPAlertSC {
        return new RPAlertSC(_o.ms_address, _o.message_reference, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RPAlertSC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RPAlertSC: $.ComponentSpec[] = [
    new $.ComponentSpec("ms-address", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("message-reference", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RPAlertSC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RPAlertSC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RPAlertSC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RPAlertSC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RPAlertSC: $.ASN1Decoder<RPAlertSC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RPAlertSC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RPAlertSC (el: _Element): RPAlertSC {
    if (!_cached_decoder_for_RPAlertSC) { _cached_decoder_for_RPAlertSC = function (el: _Element): RPAlertSC {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RPAlertSC contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ms-address";
    sequence[1].name = "message-reference";
    const ms_address = _decode_SMS_Address(sequence[0]);
    const message_reference = _decode_RP_MR(sequence[1]);
    return new RPAlertSC(
        ms_address,
        message_reference,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RPAlertSC(el);
}

let _cached_encoder_for_RPAlertSC: $.ASN1Encoder<RPAlertSC> | null = null;

/**
 * @summary Encodes a(n) RPAlertSC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RPAlertSC, encoded as an ASN.1 Element.
 */
export
function _encode_RPAlertSC (value: RPAlertSC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RPAlertSC) { _cached_encoder_for_RPAlertSC = function (value: RPAlertSC, elGetter: $.ASN1Encoder<RPAlertSC>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SMS_Address(value.ms_address, $.BER),
            /* REQUIRED   */ _encode_RP_MR(value.message_reference, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RPAlertSC(value, elGetter);
}


/* eslint-enable */
