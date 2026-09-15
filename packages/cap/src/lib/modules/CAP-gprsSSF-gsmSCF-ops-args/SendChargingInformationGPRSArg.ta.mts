/* eslint-disable */
import {
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
import { type SCIGPRSBillingChargingCharacteristics, _decode_SCIGPRSBillingChargingCharacteristics, _encode_SCIGPRSBillingChargingCharacteristics } from "../CAP-datatypes/SCIGPRSBillingChargingCharacteristics.ta.mjs";



/**
 * @summary SendChargingInformationGPRSArg
 * @description
 *
 * Argument of SendChargingInformationGPRS: Advice of Charge
 * information for the MS. (3GPP TS 29.078 V19.0.0 clause 13.14.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendChargingInformationGPRSArg {PARAMETERS-BOUND: bound} ::= SEQUENCE {
 *     sCIGPRSBillingChargingCharacteristics [0] SCIGPRSBillingChargingCharacteristics {bound},
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class SendChargingInformationGPRSArg {
    constructor (
        /**
         * @summary `sCIGPRSBillingChargingCharacteristics`.
         * @description
         *
         * Advice of Charge information: `aOCGPRS` with `aOCInitial`
         * (CAI elements per 3GPP TS 22.024, sent on Activate PDP
         * Context Accept or Attach Accept if no tariff switch yet, or
         * later e.g. QoS/RAI change) and optional `aOCSubsequent`
         * (`cAIElements` plus `tariffSwitchInterval`). Nested `pDPID`
         * identifies the PDP Context in a GPRS Session dialogue.
         * (3GPP TS 29.078 V19.0.0 clause 13.14.1.1).
         *
         * @public
         * @readonly
         */
        readonly sCIGPRSBillingChargingCharacteristics: SCIGPRSBillingChargingCharacteristics,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendChargingInformationGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendChargingInformationGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendChargingInformationGPRSArg`.
     * @returns {SendChargingInformationGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (SendChargingInformationGPRSArg)]: (SendChargingInformationGPRSArg)[_K] }): SendChargingInformationGPRSArg {
        return new SendChargingInformationGPRSArg(_o.sCIGPRSBillingChargingCharacteristics, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendChargingInformationGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendChargingInformationGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("sCIGPRSBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SendChargingInformationGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendChargingInformationGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendChargingInformationGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendChargingInformationGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendChargingInformationGPRSArg: $.ASN1Decoder<SendChargingInformationGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendChargingInformationGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendChargingInformationGPRSArg (el: _Element): SendChargingInformationGPRSArg {
    if (!_cached_decoder_for_SendChargingInformationGPRSArg) { _cached_decoder_for_SendChargingInformationGPRSArg = function (el: _Element): SendChargingInformationGPRSArg {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SendChargingInformationGPRSArg contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sCIGPRSBillingChargingCharacteristics";
    let sCIGPRSBillingChargingCharacteristics!: SCIGPRSBillingChargingCharacteristics;
    sCIGPRSBillingChargingCharacteristics = $._decode_implicit<SCIGPRSBillingChargingCharacteristics>(() => _decode_SCIGPRSBillingChargingCharacteristics)(sequence[0]);
    return new SendChargingInformationGPRSArg(
        sCIGPRSBillingChargingCharacteristics,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_SendChargingInformationGPRSArg(el);
}

let _cached_encoder_for_SendChargingInformationGPRSArg: $.ASN1Encoder<SendChargingInformationGPRSArg> | null = null;

/**
 * @summary Encodes a(n) SendChargingInformationGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendChargingInformationGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendChargingInformationGPRSArg (value: SendChargingInformationGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendChargingInformationGPRSArg) { _cached_encoder_for_SendChargingInformationGPRSArg = function (value: SendChargingInformationGPRSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SCIGPRSBillingChargingCharacteristics, $.BER)(value.sCIGPRSBillingChargingCharacteristics, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendChargingInformationGPRSArg(value, elGetter);
}


/* eslint-enable */
