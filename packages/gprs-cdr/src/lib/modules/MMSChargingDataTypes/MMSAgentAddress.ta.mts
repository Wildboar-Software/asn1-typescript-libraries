/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSAgentAddressData, _decode_MMSAgentAddressData, _encode_MMSAgentAddressData } from "../MMSChargingDataTypes/MMSAgentAddressData.ta.mjs";
import { MMSRecipientType, _decode_MMSRecipientType, _encode_MMSRecipientType } from "../MMSChargingDataTypes/MMSRecipientType.ta.mjs";


/**
 * @summary MMSAgentAddress
 * @description
 *
 * This field contains a forwarding MMS User Agent address. The MMS supports
 * the use of E-Mail addresses (RFC 822 [400]), MSISDN (E.164[308]) or IP
 * addresses.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.12.
 *
 * Address of an MMS User Agent. The same type is used for the originator,
 * the recipient, the sender, and the forwarding user agent, depending on
 * the CDR field. The coded alternatives are an email address, an MSISDN,
 * or a short code. `mMSRecipientType`, when present, says whether the
 * address is a To, Cc, or Bcc recipient. Clause 6.4.2 describes an MMS
 * address other than SUPI or GPSI as, for example, an email address or a
 * short code.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 6.1.1.1 and 6.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSAgentAddress ::= SEQUENCE {
 *    mMSAgentAddressData   [0] MMSAgentAddressData,
 *    mMSRecipientType      [1] IMPLICIT SEQUENCE  OF
 *       MMSRecipientType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMSAgentAddress {
    /**
     * @summary `mMSAgentAddressData`.
     * @description
     *
     * The User Agent address: an email address, an MSISDN, or a short code.
     *
     * 3GPP TS 32.270 V19.0.0 clauses 6.3.2 and 6.4.2.
     * @public
     * @readonly
     */
    readonly mMSAgentAddressData: MMSAgentAddressData;
    /**
     * @summary `mMSRecipientType`.
     * @description
     *
     * To, Cc, or Bcc role of this address. Absent when the role is not
     * indicated. TS 32.270 does not define the indication.
     * @public
     * @readonly
     */
    readonly mMSRecipientType: OPTIONAL<MMSRecipientType[]>;

    constructor (
        mMSAgentAddressData: MMSAgentAddressData,
        mMSRecipientType: OPTIONAL<MMSRecipientType[]>
    ) {
        this.mMSAgentAddressData = mMSAgentAddressData;
        this.mMSRecipientType = mMSRecipientType;
    }

    /**
     * @summary Restructures an object into a MMSAgentAddress
     * @description
     * 
     * This takes an `object` and converts it to a `MMSAgentAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSAgentAddress`.
     * @returns {MMSAgentAddress}
     */
    public static _from_object (_o: { [_K in keyof (MMSAgentAddress)]: (MMSAgentAddress)[_K] }): MMSAgentAddress {
        return new MMSAgentAddress(_o.mMSAgentAddressData, _o.mMSRecipientType);
    }


}

/**
 * @summary The Leading Root Component Types of MMSAgentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSAgentAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("mMSAgentAddressData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mMSRecipientType", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MMSAgentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSAgentAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSAgentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSAgentAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSAgentAddress: $.ASN1Decoder<MMSAgentAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSAgentAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSAgentAddress (el: _Element): MMSAgentAddress {
    if (!_cached_decoder_for_MMSAgentAddress) { _cached_decoder_for_MMSAgentAddress = function (el: _Element): MMSAgentAddress {
    let mMSAgentAddressData!: MMSAgentAddressData;
    let mMSRecipientType: OPTIONAL<MMSRecipientType[]>;
    const callbacks: $.DecodingMap = {
        "mMSAgentAddressData": (_el: _Element): void => { mMSAgentAddressData = $._decode_explicit<MMSAgentAddressData>(() => _decode_MMSAgentAddressData)(_el); },
        "mMSRecipientType": (_el: _Element): void => { mMSRecipientType = $._decode_implicit<MMSRecipientType[]>(() => $._decodeSequenceOf<MMSRecipientType>(() => _decode_MMSRecipientType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSAgentAddress,
        _extension_additions_list_spec_for_MMSAgentAddress,
        _root_component_type_list_2_spec_for_MMSAgentAddress,
        undefined,
    );
    return new MMSAgentAddress(
        mMSAgentAddressData,
        mMSRecipientType
    );
}; }
    return _cached_decoder_for_MMSAgentAddress(el);
}

let _cached_encoder_for_MMSAgentAddress: $.ASN1Encoder<MMSAgentAddress> | null = null;

/**
 * @summary Encodes a(n) MMSAgentAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSAgentAddress, encoded as an ASN.1 Element.
 */
export
function _encode_MMSAgentAddress (value: MMSAgentAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSAgentAddress) { _cached_encoder_for_MMSAgentAddress = function (value: MMSAgentAddress, _elGetter: $.ASN1Encoder<MMSAgentAddress>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSAgentAddressData, $.BER)(value.mMSAgentAddressData, $.BER));
    if (value.mMSRecipientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSRecipientType>(() => _encode_MMSRecipientType, $.BER), $.BER)(value.mMSRecipientType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSAgentAddress(value, elGetter);
}


/* eslint-enable */
